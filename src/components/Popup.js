import React, { useEffect, useState } from 'react';
import imageSrc from '../assets/bigSaleGoldee.png'; // Đường dẫn đến hình ảnh, thay thế nếu cần

const Popup = ({ isOpen, onClose, title, description, ctaText, ctaLink }) => {
  useEffect(() => {
    // Tự động đóng popup sau 10 giây
    // const timer = setTimeout(() => {
    //   if (isOpen) {
    //     onClose();
    //   }
    // }, 10000);

    // Cleanup timer khi component unmount
    // return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-11/12 h-3/4 flex flex-col justify-between">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
        {/* Phần hình ảnh chiếm 75% chiều cao */}
        <div className="h-3/4 flex items-center justify-center">
          {imageSrc && (
            <img src={imageSrc} alt="GoldStore Solution (Giải pháp cho tiệm vàng)" className="max-h-full max-w-full object-contain rounded-t-lg" />
          )}
        </div>
        {/* Phần nội dung chiếm 25% chiều cao */}
        <div className="h-1/4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-yellow-600 mb-2">{title}</h2>
          <p className="text-gray-700 text-sm mb-4 text-center">{description}</p>

          {/* {ctaLink && (
            <a
              href={ctaLink}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
            >
              {ctaText}
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Popup;