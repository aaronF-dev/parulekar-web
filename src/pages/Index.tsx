import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import FacultySection from '@/components/FacultySection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <main>
        <HeroSection />
        <StatsSection />
        <ProgramsSection />
        <AboutSection />
        <FacultySection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
