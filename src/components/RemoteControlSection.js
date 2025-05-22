import React from "react";
import { FaChevronRight } from "react-icons/fa";
import test1 from '../assets/DuLichGoldee.png';

function RemoteControlSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src={test1}
            alt="Biểu đồ doanh thu"
            className="w-full max-w-[550px] mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b7f]">
            Điều hành mọi lúc mọi nơi
          </h2>

          <ul className="space-y-5 text-[#002b7f] text-[17px] leading-relaxed">
            <li className="flex items-start gap-2">
              <FaChevronRight className="mt-1 text-[#0043c2]" />
              Biểu đồ hình tròn cho cái nhìn trực quan về doanh thu mua bán hàng
            </li>
            <li className="flex items-start gap-2">
              <FaChevronRight className="mt-1 text-[#0043c2]" />
              Tạo thêm nhân viên và chia ca dễ dàng
            </li>
            <li className="flex items-start gap-2">
              <FaChevronRight className="mt-1 text-[#0043c2]" />
              Đi chơi xa vẫn có thể điều chỉnh giá bán/mua/cầm ở tiệm một cách tức thì.
            </li>
            <li className="flex items-start gap-2">
              <FaChevronRight className="mt-1 text-[#0043c2]" />
              Thống kê số lượng đơn cầm, đơn chuộc và tổng lãi cầm.
            </li>
          </ul>

          <div className="border-t mt-8 w-full border-[#cfd9ed]" />
        </div>
      </div>
    </section>
  );
}

export default RemoteControlSection;
