import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import schoolLogo from '@/assets/school-logo.png';

const HeroSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-4 md:pt-6">
      {/* Floating Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-48 right-[15%] w-10 md:w-12 h-10 md:h-12 bg-accent rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-48 left-[20%] w-12 md:w-14 h-12 md:h-14 bg-secondary rounded-2xl -rotate-12 opacity-60"></div>
        <div className="absolute top-[60%] right-[25%] w-8 md:w-10 h-8 md:h-10 bg-info rounded-full opacity-50 animate-pulse"></div>
        
        {/* Curved Lines */}
        <svg className="absolute top-24 right-[35%] w-24 md:w-32 h-24 md:h-32 opacity-40" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
        <svg className="absolute bottom-32 left-[15%] w-20 md:w-24 h-20 md:h-24 opacity-40" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="hsl(var(--secondary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div 
          ref={leftRef}
          className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
            leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* School Logo */}
          <div className="flex justify-center md:justify-start mb-2">
            <img src={schoolLogo} alt="School Logo" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
            {t('hero.schoolName')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {t('hero.tagline')}
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-base md:text-lg px-8 md:px-10 py-5 md:py-7 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
          >
            {t('hero.learnMore')}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        {/* Right Content - Image with Decorative Elements */}
        <div 
          ref={rightRef}
          className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-200 ${
            rightVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Orange Shape Background - Hidden on mobile */}
          <div className="hidden md:block absolute top-4 md:top-8 right-4 md:right-8 w-[85%] h-[85%] bg-primary rounded-2xl md:rounded-[3rem] -rotate-6"></div>
          
          {/* Teal Shape - Hidden on mobile */}
          <div className="hidden md:block absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-secondary rounded-xl md:rounded-[2rem] rotate-12"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl p-2 sm:p-3 md:p-4">
            <img 
              src="https://ik.imagekit.io/73ht4flyu/hero2.png?updatedAt=1759650210706" 
              alt={t('hero.imageAlt')}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-xl md:rounded-[2.5rem]"
            />
          </div>
          
          {/* Yellow Accent - Hidden on mobile */}
          <div className="hidden md:block absolute top-2 md:top-4 right-2 md:right-4 w-14 md:w-20 h-14 md:h-20 bg-accent rounded-xl md:rounded-2xl rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
