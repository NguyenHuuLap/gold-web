import React from 'react';

function PricingTable({ onRegisterClick }) {
  return (
    <section className="py-12 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#1A4FA3] mb-8">Bảng phí dịch vụ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'GOLD BASIC',
              subtitle: 'Phù hợp cho cửa hàng vàng nhỏ',
              price: '200.000',
              extra: 'Thêm 1 tài khoản: 150.000đ/tháng',
              features: [
                'Lưu trữ đám mây - GOLD SAFE',
                'Quản lý sản phẩm vàng, trang sức',
                'Quản lý khách hàng cơ bản',
                'Kiểm kho nhanh',
                'Nhập/xuất dữ liệu Excel',
              ],
            },
            {
              title: 'GOLD PRO',
              subtitle: 'Phù hợp cho cửa hàng vàng phát triển',
              price: '500.000',
              extra: 'Thêm 1 tài khoản: 350.000đ/tháng',
              features: [
                'Gồm các chức năng GOLD BASIC',
                'Mua/bán trực tuyến (lẻ)',
                'Quản lý thông tin kinh doanh đa quy định',
                'Đo độ chính xác giá vàng',
                'Lưu trữ tin tức bằng mã QR',
                'Hỗ trợ tem thẻ RFID',
              ],
            },
            {
              title: 'GOLD PREMIUM',
              subtitle: 'Phù hợp cho cửa hàng vàng cao cấp',
              price: '1.000.000',
              extra: 'Thêm 1 tài khoản: 700.000đ/tháng',
              features: [
                'Gồm các chức năng GOLD PRO',
                'Quản lý hình ảnh sản phẩm cao cấp',
                'Xuất báo cáo tài chính chi tiết',
                'Hỗ trợ hội viên VIP',
                'Phân tích dữ liệu kinh doanh',
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-[#E0ECF9] hover:border-[#1A4FA3] transition-colors duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#1A4FA3]">{plan.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{plan.subtitle}</p>
                <p className="text-4xl font-bold text-[#1A4FA3] mt-4">
                  {plan.price} <span className="text-base">đ</span>
                </p>
                <p className="text-sm text-gray-500">1 tài khoản/cửa hàng/tháng</p>
                <p className="text-sm text-gray-500 mt-1">{plan.extra}</p>
                <ul className="text-left text-gray-600 mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1A4FA3] text-lg mt-[2px]">✔</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  if (onRegisterClick) onRegisterClick(plan.title);
                }}
                className="mt-6 bg-[#1A4FA3] text-white px-4 py-2 rounded-lg hover:bg-[#163D83] transition-all"
              >
                Đăng ký ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingTable;