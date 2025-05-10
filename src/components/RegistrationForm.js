import React from 'react';
import test3 from '../assets/test3.png';

function RegistrationForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-white py-10 px-4">
      {/* Bên trái: hình ảnh banner */}
      <div className="max-w-sm">
        <img
          src={test3}
          alt="MISA CukCuk"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Bên phải: form đăng ký */}
      <div className="bg-gradient-to-b from-[#1b3e8a] to-[#293eaf] rounded-3xl p-6 md:p-10 w-full max-w-md shadow-lg">
        <form className="bg-white rounded-2xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Họ Tên"
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-[#FF5733] text-white font-semibold py-3 rounded-md hover:bg-[#e64524] transition duration-200"
          >
            ĐĂNG KÝ TƯ VẤN
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
