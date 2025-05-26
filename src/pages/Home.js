import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import InvoiceManagement from '../components/InvoiceManagement';
import PaymentConsultation from '../components/PaymentConsultation';
import DailyGoldReport from '../components/DailyGoldReport';
import CustomerManagementSection from '../components/CustomerManagementSection';
import RemoteControlSection from '../components/RemoteControlSection';
import Integration from '../components/Integration';
import CustomerShowcase from '../components/CustomerShowcase';
import GoldSolutionSection from '../components/GoldSolutionSection';
import RegistrationForm from '../components/RegistrationForm';
import RegisterForm from '../components/RegisterForm';
import Popup from '../components/Popup';
import Footer from '../components/Footer';
import PricingTable from '../components/PricingTable';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (plan) => {
    setSelectedPlan(plan || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan('');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem('popupShown', 'true');
  };

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      setIsPopupOpen(true);
    }
  }, []);


  return (
    <>
      <Header onRegisterClick={() => openModal('')} />
      <Hero onRegisterClick={() => openModal('')} />
      <Features />
      <Stats />
      <InvoiceManagement />
      <PaymentConsultation onRegisterClick={() => openModal('')} />
      <DailyGoldReport onRegisterClick={() => openModal('')} />
      <CustomerManagementSection onRegisterClick={() => openModal('')} />
      <RemoteControlSection />
      <Integration onRegisterClick={() => openModal('')} />
      <CustomerShowcase />
      <GoldSolutionSection />
      <PricingTable onRegisterClick={openModal} />
      <RegistrationForm onRegisterClick={() => openModal('')} />
      <Footer />
      <RegisterForm isOpen={isModalOpen} onClose={closeModal} selectedPlan={selectedPlan} />

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Gold Store Solution"
        description="👉 TẢI NGAY ứng dụng để:
          ✅ Cập nhật giá vàng theo thời gian thực
          ✅ Quản lý đơn hàng, khách hàng và tồn kho dễ dàng
          ✅ Báo cáo tài chính chi tiết và chính xác
          🎁 Đặc biệt: Nhận ưu đãi hấp dẫn dành riêng cho người dùng mới – chỉ có hôm nay!"
      // ctaText="Tải Ngay"
      // ctaLink="https://example.com"
      />
    </>
  );
}

export default Home;