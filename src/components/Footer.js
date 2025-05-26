function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Phần Mềm Giải Pháp Vàng (Gold Store Solution)</h3>
            <p className="text-gray-400">Chúng tôi xin giới thiệu đến Quý vị một ứng dụng quản lý tiệm vàng chuyên nghiệp trên điện thoại di động, được thiết kế riêng cho nhu cầu đặc thù của ngành kim hoàn. Với giao diện thân thiện, dễ sử dụng và khả năng quản lý mạnh mẽ.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-gray-400">Facebook: https://www.facebook.com/GoldStoreSolution/ </p>
            <p className="text-gray-400">youtube: https://www.youtube.com/@GiaiPhapVang </p>
            <p className="text-gray-400">Email: ttminhphuongtt@gmail.com </p>
            <p className="text-gray-400">Điện thoại: 098 7070 157 </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Giải pháp cung cấp</h3>
            <p className="text-gray-400">Phần mềm in tem nhãn (Máy tính)</p>
            <p className="text-gray-400">Phần mềm hiển thị giá vàng trên tivi (Điện thoại)</p>
            <p className="text-gray-400">Phần mềm cầm vàng (Điện thoại)</p>
            <p className="text-gray-400">Phần mềm bán vàng, bạch kim, kim cương (Điện thoại)</p>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">© Bản quyền thuộc về phần mềm giải pháp vàng</p>
      </div>
    </footer>
  );
}

export default Footer;