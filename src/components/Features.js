import React from 'react';

function Features() {
  return (
    <section id="features" className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-cukcuk-blue mb-8">
          Mua bán vàng, bạch kim, kim cương, cầm đồ trên một chiếc điện thoại
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Feature 1 */}
          <div className="text-left">
            <div className="flex items-center mb-4">
              <span className="bg-cukcuk-blue text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded mr-4">
                1
              </span>
              <h3 className="text-2xl font-semibold text-cukcuk-blue">
                Mua bán, đổi hàng nhanh chóng
              </h3>
            </div>
            <p className="text-lg text-gray-600">
              Mua bán vàng   nhanh chóng không sai sót trong khâu tính toán. Đổi bù vàng linh động theo khách hàng. Mua hàng có hình ảnh rõ ràng. Tất cả chỉ cần một chiếc điện thoại ngay cả người mới đi làm ngày đầu tiên vẫn có thể sử dụng.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-left">
            <div className="flex items-center mb-4">
              <span className="bg-cukcuk-blue text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded mr-4">
                2
              </span>
              <h3 className="text-2xl font-semibold text-cukcuk-blue">
                Thống kê doanh số theo ngày
              </h3>
            </div>
            <p className="text-lg text-gray-600">
              Thống kê số món bán, mua, số món cầm cố, số món chuộc đồ trong ngày. Chủ tiệm đi xa vẫn có thể dùng điện thoại để theo dõi doanh thu và vàng trong ngày.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-left">
            <div className="flex items-center mb-4">
              <span className="bg-cukcuk-blue text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded mr-4">
                3
              </span>
              <h3 className="text-2xl font-semibold text-cukcuk-blue">
                Cầm đồ
              </h3>
            </div>
            <p className="text-lg text-gray-600">
              Không phải viết tay giấy cầm đồ một cách truyền thống. Tất cả chỉ cần quét mã QR code sẽ tự động tính ra lãi + gốc. Lưu lại thời gian và tên nhân viên thao tác (cầm, chuộc, đóng lãi), giá vàng thời điểm khách đi cầm.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-left">
            <div className="flex items-center mb-4">
              <span className="bg-cukcuk-blue text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded mr-4">
                4
              </span>
              <h3 className="text-2xl font-semibold text-cukcuk-blue">
                Chỉ cần dùng một chiếc điện thoại
              </h3>
            </div>
            <p className="text-lg text-gray-600">
              Như nhà thuốc Long Châu giờ đây Tiệm Vàng kinh doanh nhiều loại: vàng, bạch kim, kim cương, cầm đồ chỉ cần dùng một chiếc điện thoại là có thể hoạt động chuyên nghiệp, nhanh chóng. Không cần phải sắm sửa thêm các thiết bị cồng kềnh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;