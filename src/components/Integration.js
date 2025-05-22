import React from 'react';
import { FaCheck } from 'react-icons/fa';
import test1 from '../assets/nhansuGoldee.png';

function Integration({ onRegisterClick }) {
  return (
    <section className="py-16 bg-cukcuk-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cukcuk-blue mb-12">
          Phân quyền, chia ca, thống kê theo từng nhân viên
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Panel: Image Placeholder */}
          <div className="md:w-1/2 relative">
            <img
              src={test1}
              alt="Invoice Management"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <ul className="list-none space-y-4 text-gray-600 text-base mb-6">
              <li className="flex items-start gap-2">
                <FaCheck className="text-cukcuk-blue w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Quản lý danh sách và phân quyền vai trò thao tác cho nhân viên trên phần mềm để bảo mật các thông tin quan trọng
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-cukcuk-blue w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Có báo cáo chi tiết doanh số theo ngày trong tuần để có kế hoạch phân bố ca làm hợp lý cho nhân viên
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-cukcuk-blue w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Chia giờ làm theo nhân viên, để khi nhân viên mang điện thoại cá nhân về nhà không sử dụng được phần mềm
                </span>
              </li>
            </ul>
            <button
              onClick={onRegisterClick}
              className="bg-cukcuk-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Nhận tư vấn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integration;