import React from 'react';
import { FaPrint, FaEye, FaCogs, FaSlidersH } from 'react-icons/fa';
import test1 from '../assets/InGoldee.png';

function InvoiceManagement() {
  return (
    <section id="why-gpv" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cukcuk-blue mb-12">
          Nhanh chóng từ khâu tính toán đến xuất hóa đơn
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Panel: Image Placeholder */}
          <div className="w-full md:w-2/3 max-w-3xl relative">
            <img
              src={test1}
              alt="Invoice Management"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          {/* Right Panel: Features Grid */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Box 1 */}
              <div className="bg-white bg-opacity-50 p-3 rounded-lg shadow-md h-40 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <FaPrint className="text-4xl text-cukcuk-blue" />
                  <h3 className="text-xl font-semibold text-cukcuk-blue line-clamp-2">Tùy chọn in phiếu</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">In hóa đơn nhanh chóng với nhiều tùy chọn linh hoạt.</p>
              </div>
              {/* Box 2 */}
              <div className="bg-white bg-opacity-50 p-3 rounded-lg shadow-md h-40 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <FaEye className="text-4xl text-cukcuk-blue" />
                  <h3 className="text-xl font-semibold text-cukcuk-blue line-clamp-2">Hiển thị hóa đơn</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">Xem chi tiết hóa đơn theo từng giao dịch hoặc tổng hợp.</p>
              </div>
              {/* Box 3 */}
              <div className="bg-white bg-opacity-50 p-3 rounded-lg shadow-md h-40 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <FaCogs className="text-4xl text-cukcuk-blue" />
                  <h3 className="text-xl font-semibold text-cukcuk-blue line-clamp-2">Tính năng tích hợp</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">Tích hợp với các công cụ quản lý khác để tối ưu hóa.</p>
              </div>
              {/* Box 4 */}
              <div className="bg-white bg-opacity-50 p-3 rounded-lg shadow-md h-40 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <FaSlidersH className="text-4xl text-cukcuk-blue" />
                  <h3 className="text-xl font-semibold text-cukcuk-blue line-clamp-2">Tùy chọn linh hoạt</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">Tùy chỉnh quy trình tính toán và xuất hóa đơn theo nhu cầu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvoiceManagement;