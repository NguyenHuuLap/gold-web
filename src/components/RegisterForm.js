import { useState } from 'react';

function RegisterForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const proxyURL = 'http://localhost:3001/proxy'; // URL của proxy server

  const validate = () => {
    const newErrors = {};
    const nameValue = formData.name || '';
    const phoneValue = formData.phone || '';
    const emailValue = formData.email || '';

    if (!nameValue.trim()) newErrors.name = 'Họ và tên là bắt buộc';
    if (!phoneValue.trim()) newErrors.phone = 'Số điện thoại là bắt buộc';
    else if (!/^\d{10}$/.test(phoneValue)) newErrors.phone = 'Số điện thoại phải có 10 chữ số';
    if (!emailValue.trim()) newErrors.email = 'Email là bắt buộc';
    else if (!/\S+@\S+\.\S+/.test(emailValue)) newErrors.email = 'Email không hợp lệ';
    return newErrors;
  };

  const formattedData = {
  ...formData,
  phone: formData.phone.toString(),
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Dữ liệu gửi đi:', formData);
      console.log('Body:', new URLSearchParams(formData).toString());

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
        alert('Đăng ký thành công! Email xác nhận đã được gửi.');
        setFormData({ name: '', phone: '', email: '' });
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
          <h2 className="text-2xl font-bold text-gray-800">Đăng ký dùng thử</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cukcuk-blue"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cukcuk-blue"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cukcuk-blue"
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
              className={`px-4 py-2 bg-cukcuk-orange text-white rounded-lg hover:bg-orange-600 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
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