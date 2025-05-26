import React from 'react';
import { FaCheck } from 'react-icons/fa';
import test1 from '../assets/goidienGoldee.png';

function PaymentConsultation({ onRegisterClick }) {
  return (
    <section className="py-16 bg-cukcuk-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cukcuk-blue mb-12">
          Đăng ký nhận tư vấn miễn phí cùng chuyên gia Giải Pháp Vàng
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
                  Nhập trọng lượng phần mềm sẽ tính toán ra giá cầm thấp hoặc cao nhất khi do nhận viên sẽ dễ dàng cầm mà không lo vượt quá số tiền được phép cầm.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-cukcuk-blue w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Tự động cập nhật trạng thái "Quá hạn" nếu (tiền cầm + tiền lãi) &gt;= giá mua vào.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-cukcuk-blue w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Hiển thị hình ảnh món đồ cầm, tránh cự cãi khi sản phẩm đã hư trước khi cầm.
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

export default PaymentConsultation;