function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Test</h3>
            <p className="text-gray-400">Công ty Cổ phần Test</p>
            <p className="text-gray-400">Địa chỉ: </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-gray-400">Hotline: </p>
            <p className="text-gray-400">Email: </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Chính sách</h3>
            <p className="text-gray-400">Chính sách bảo mật</p>
            <p className="text-gray-400">Điều khoản sử dụng</p>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">© 2025 Test. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;