import React from 'react';
import { FaUser, FaGlobe } from 'react-icons/fa';

function Hero({ onRegisterClick }) {
  return (
    <section id="what-gpv" className="pt-32 pb-16 bg-cukcuk-light-blue text-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-cukcuk-blue mb-10">
          Phần mềm chuyên dành cho tiệm vàng
        </h1>
        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={onRegisterClick}
            className="bg-cukcuk-blue text-white px-6 py-3 rounded-Tất cả tính năng cho tiệm vàng font-semibold hover:bg-blue-700 transition-colors"
          >
            Đăng thử miễn phí
          </button>
          <a href="https://apps.apple.com/vn/app/goldee/id6479561244" target="_blank">
            <button className="bg-gray-200 text-cukcuk-blue px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Khám phá Goldee
            </button>
          </a>
        </div>
        <div className="flex justify-center space-x-8 mb-16">
          <div className="flex items-center space-x-2">
            <FaUser className="text-2xl text-cukcuk-blue" />
            <div>
              <p className="text-3xl font-bold text-cukcuk-blue">100+</p>
              <p className="text-gray-600 text-sm">Tiệm vàng sử dụng</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-2xl text-cukcuk-blue" />
            <div>
              <p className="text-3xl font-bold text-cukcuk-blue">15+</p>
              <p className="text-gray-600 text-sm">Có mặt tại nhiều tỉnh thành</p>
            </div>
          </div>
        </div>
        {/* <div className="relative">
          <div className="bg-gray-200 h-96 w-full rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[Hình minh họa hệ thống]</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;