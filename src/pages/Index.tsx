
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpecialitiesSection from '@/components/SpecialitiesSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import AppointmentSection from '@/components/AppointmentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialitiesSection />
      <SuccessStoriesSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default Index;
