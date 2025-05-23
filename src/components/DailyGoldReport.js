import React from "react";
import { FaCheckCircle } from 'react-icons/fa';
import test1 from '../assets/ThongKeGoldee.png';

function DailyGoldReport({ onRegisterClick }) {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left side - Text */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b7f] leading-tight">
            Thống kê tiền vàng trong ngày.<br />
            Ngăn chặn thất thoát, gian lận
          </h2>

          <ul className="space-y-6 mt-6">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#1b3e8a] w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-800">
                Báo cáo tổng số tiền mua vàng và bán vàng trong ngày theo từng nhân viên
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#1b3e8a] w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-800">
                Báo cáo số lượng để thu vào trong ngày, số lượng vàng bán ra theo từng nhân viên
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#1b3e8a] mt-1 w-5 h-5 flex-shrink-0" />
              <p className="text-gray-800">
                Báo cáo số lượng món cầm, món chuộc, tổng tiền cầm và chuộc trong ngày,
                tổng lãi thu được theo từng nhân viên
              </p>
            </li>
          </ul>

          <button
            onClick={onRegisterClick}
            className="bg-cukcuk-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Nhận tư vấn
          </button>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 relative">
          <img
            src={test1}
            alt="Thống kê báo cáo"
            className="w-full max-w-[1000px] rounded-xl shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default DailyGoldReport;
