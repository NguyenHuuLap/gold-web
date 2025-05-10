import { useState } from 'react';
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
import Footer from '../components/Footer';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

    </>
  );
}

export default Home;