import React from 'react';
import test3 from '../assets/PhanMemCamVangBanHangGoldee.png';

function GoldSolutionSection() {
  return (
    <section className="py-16 bg-cukcuk-light-blue px-4">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold text-cukcuk-blue mb-6">Giải Pháp Vàng</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Giải pháp Vàng (GoldStore Solution) là một trong những phần mềm chuyên về ngành vàng tại Việt Nam, cung cấp các giải pháp phần mềm và dịch vụ chuyển đổi số toàn diện cho các khách hàng doanh nghiệp vàng.
          Tận dụng lợi thế sẵn có về chuyên môn ngành vàng, công nghệ tiên tiến vượt trội, linh hoạt, giao diện đơn giản thông minh giúp cho doanh nghiệp có thể hoạt động ổn định, hiệu quả tạo sự bức phá về mặt công nghệ với các doanh nghiệp khác.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Phần mềm ra mắt từ năm 2024 do nhóm nhà lập trình trẻ năng động và có định hướng chuyên môn về ngành vàng, chúng tôi đáp ứng mọi nghiệp vụ cơ bản đến nâng cao trong hoạt động buôn bán hàng ngày, giúp chủ cơ sở có thể thoải mái và đơn giản hơn trong việc quản lý doanh nghiệp.
        </p>

        <div className="flex justify-center">
          <img
            src={test3}
            alt="Giải thưởng Giải Pháp Vàng"
            className="w-full max-w-4xl rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default GoldSolutionSection;
