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

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <Header onRegisterClick={openModal} />
      <Hero onRegisterClick={openModal} />
      <Features />
      <Stats />
      <InvoiceManagement />
      <PaymentConsultation onRegisterClick={openModal} />
      <DailyGoldReport onRegisterClick={openModal} />
      <CustomerManagementSection />
      <RemoteControlSection />
      <Integration onRegisterClick={openModal} />
      <CustomerShowcase />
      <GoldSolutionSection />
      <RegistrationForm onRegisterClick={openModal} />
      <Footer />
      <RegisterForm isOpen={isModalOpen} onClose={closeModal} />

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Gold Store Solution"
        description="Ứng dụng Vàng giúp bạn quản lý tài chính, đầu tư vàng dễ dàng và an toàn. Tải ngay để trải nghiệm!"
        // ctaText="Tải Ngay"
        // ctaLink="https://example.com"
      />
    </>
  );
}

export default Home;