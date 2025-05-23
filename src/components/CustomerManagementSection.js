import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import test1 from '../assets/khachhang.png';

function CustomerManagementSection({ onRegisterClick }) {
  return (
    <div className="bg-cukcuk-light-blue py-10 px-4 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Trái: Hình ảnh máy tính + giao diện */}
      <div className="max-w-xl">
        <img src={test1} alt="Quản lý khách hàng" className="w-full rounded-lg shadow-xl" />
      </div>

      {/* Phải: Tiêu đề + mô tả + các dòng có icon */}
      <div className="max-w-xl w-full space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b3e8a]">
          Quản lý và khai thác khách hàng hiệu quả
        </h2>

        <ul className="space-y-5 text-[#1b3e8a]">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#1b3e8a] mt-1 w-5 h-5 flex-shrink-0" />
            <p>
              Lưu lại danh sách khách hàng theo số điện thoại, căn cước công dân, địa chỉ
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#1b3e8a] mt-1 w-5 h-5 flex-shrink-0" />
            <p>
              Ghi chú đặc tính của khách hàng theo ni tay, ngày sinh nhật, thói quen
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#1b3e8a] mt-1 w-5 h-5 flex-shrink-0" />
            <p>
              Lập mẫu bảng kê mua hàng hóa, dịch vụ mua vào không có hóa đơn được quy định tại mẫu số 01/TNDN
            </p>
          </li>
        </ul>

        <button
          onClick={onRegisterClick}
          className="bg-cukcuk-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          NHẬN TƯ VẤN
        </button>
      </div>
    </div>
  );
}

export default CustomerManagementSection;