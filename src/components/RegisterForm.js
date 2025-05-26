import { useState, useEffect } from 'react';

function RegisterForm({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: selectedPlan || '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const proxyURL = 'http://localhost:3001/proxy'; // URL của proxy server

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      plan: selectedPlan || '',
    }));
  }, [selectedPlan]);

  const validate = () => {
    const newErrors = {};
    const nameValue = formData.name || '';
    const phoneValue = formData.phone || '';

    if (!nameValue.trim()) newErrors.name = 'Họ và tên là bắt buộc';
    if (!phoneValue.trim()) newErrors.phone = 'Số điện thoại là bắt buộc';
    else if (!/^\d{10}$/.test(phoneValue)) newErrors.phone = 'Số điện thoại phải có 10 chữ số';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const planToSubmit = formData.plan || selectedPlan || '';
    const formattedData = {
      ...formData,
      plan: planToSubmit,
      phone: formData.phone.toString(),
    };

    console.log('Submitting formData:', formattedData);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(proxyURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Phản hồi từ proxy server không thành công');
      }

      const result = await response.json();
      if (result.result === 'success') {
        alert('Đăng ký thành công!' + (formData.email ? ' Email xác nhận đã được gửi.' : ''));
        setFormData({ name: '', phone: '', email: '', plan: '' });
        setErrors({});
        onClose();
      } else {
        throw new Error(result.message || 'Lỗi không xác định');
      }
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error.message);
      alert('Có lỗi xảy ra: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 font-weight:600 font-size:25px">Đăng ký dùng thử</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {formData.plan && (
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">Gói đăng ký</label>
              <input
                type="text"
                name="plan"
                value={formData.plan}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4FA3]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4FA3]"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4FA3]"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
              disabled={isSubmitting}
            >
              Hủy
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-[#1D4ED8] text-white rounded-lg hover:bg-[#3B82F6] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'ĐANG GỬI...' : 'Gửi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
