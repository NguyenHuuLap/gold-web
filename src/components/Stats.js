import React from "react";

const features = [
  {
    text: ["Mua Bán", "Vàng, Bạc, Kim, Kim Cương"],
  },
  {
    text: ["Cầm đồ", "chuộc - đóng lãi -", "mất giấy"],
  },
  {
    text: ["In tem nhãn", "Nhanh chóng dễ", "hiểu"],
  },
  {
    text: ["Xuất hóa đơn điện tử", "từ máy tính tiền"],
  },
];

const FeaturesSimple = () => {
  return (
    <section className="pt-32 pb-16 bg-cukcuk-light-blue text-center relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl p-6 text-center min-h-[180px] flex flex-col justify-center items-center bg-gradient-to-b from-[#5ea1f7] to-[#3b6ed3] text-white shadow-lg"
          >
            <div className="text-base font-semibold leading-snug space-y-1">
              {item.text.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <div className="absolute bottom-3 right-4 text-5xl font-bold opacity-10 text-white">
              {`0${idx + 1}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSimple;
