import React, { useState } from 'react';
import appleImage from '../assets/appleGoldee.png';
import zaloImage from '../assets/zaloGoldee.png';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const proxyURL = 'http://localhost:3001/proxy'; // URL của proxy server

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // console.log('Dữ liệu gửi đi:', formData);
            // console.log('Body:', new URLSearchParams(formData).toString());

            const response = await fetch(proxyURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Gửi JSON đến proxy
                },
                body: JSON.stringify(formData), // Gửi JSON thay vì URL-encoded
            });

            if (!response.ok) {
                throw new Error('Phản hồi từ proxy server không thành công');
            }

            const result = await response.json();
            if (result.result === 'success') {
                alert('Đăng ký thành công! Email xác nhận đã được gửi.');
                setFormData({ name: '', email: '', phone: '' });
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

    return (
        <div id="contact" className="flex flex-col md:flex-row items-center justify-center gap-10 bg-cukcuk-light-blue py-10 px-4">
            <div className="max-w-sm  flex flex-row flex-wrap gap-10">
                <a href="https://apps.apple.com/vn/app/goldee/id6479561244" target="_blank">
                    <img src={appleImage} alt="download Goldee on Apple Store" width="95px" />
                    <button class="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 ...">
                        Tải app Goldee
                    </button>
                </a>
                <a href="https://zalo.me/0987070157" target="_blank">
                    <img src={zaloImage} alt="Liên hệ qua Zalo" width="100px" />
                    <button class="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 ...">
                        Liên hệ Zalo
                    </button>
                </a>
            </div>
            <div className="bg-gradient-to-b from-[#1b3e8a] to-[#293eaf] rounded-3xl p-6 md:p-10 w-full max-w-md shadow-lg">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Họ Tên"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-[#FF5733] text-white font-semibold py-3 rounded-md hover:bg-[#e64524] transition duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'ĐANG GỬI...' : 'ĐĂNG KÝ TƯ VẤN'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;