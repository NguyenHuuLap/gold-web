import React from 'react';
import test2 from '../assets/tiemvangGoldee.png';

function CustomerShowcase() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-cukcuk-blue mb-4">
          Khách hàng của Giải Pháp Vàng (GoldStore Solution)
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Có đến hơn 80% khách hàng nghĩ đến chuyển đổi hệ thống hiện tại thay thế bằng hệ thống mới của Giải Pháp Vàng.
          Phần mềm giải pháp vàng không bị giới hạn bởi chức năng sẵn có mà được nâng cấp liên tục để phù hợp với xu hướng của ngành vàng.
        </p>
        <div className="w-full flex justify-center">
          <img
            src={test2}
            alt="Khách hàng của Giải Pháp Vàng"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default CustomerShowcase;
