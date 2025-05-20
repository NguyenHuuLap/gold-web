import testLogo from '../assets/Test.png'; 

function Header({ onRegisterClick }) {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={testLogo} alt="MISA CukCuk" className="h-8 mr-2" />
          <span className="text-xl font-semibold text-cukcuk-blue">Gold Store Solution</span>
        </div>
        <div className="space-x-4">
          <a href="#what-gpv" className="text-cukcuk-blue hover:underline">Về GPV</a>
          <a href="#features" className="text-cukcuk-blue hover:underline">Tính năng nổi bật</a>
          <a href="#why-gpv" className="text-cukcuk-blue hover:underline">Vì sao chọn GPV</a>
          <a href="#faq" className="text-cukcuk-blue hover:underline">Khách hàng nói</a>
          <a href="#contact" className="text-cukcuk-blue hover:underline">Tư vấn</a>
        </div>
        <button
          onClick={onRegisterClick}
          className="bg-cukcuk-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          Đăng thử miễn phí
        </button>
      </div>
    </header>
  );
}

export default Header;