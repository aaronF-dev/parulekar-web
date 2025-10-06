import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-image.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  const steps = [
    { titleKey: 'about.step1.title', descriptionKey: 'about.step1.description' },
    { titleKey: 'about.step2.title', descriptionKey: 'about.step2.description' },
    { titleKey: 'about.step3.title', descriptionKey: 'about.step3.description' },
    { titleKey: 'about.step4.title', descriptionKey: 'about.step4.description' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="hidden md:block absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-56 md:w-72 h-56 md:h-72 bg-primary rounded-2xl md:rounded-[3rem] rotate-12"></div>
            <div className="hidden md:block absolute -top-6 md:-top-8 -right-6 md:-right-8 w-40 md:w-48 h-40 md:h-48 bg-secondary rounded-xl md:rounded-[2rem] -rotate-12"></div>
            <div className="relative bg-white rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl p-3 md:p-4">
              <img src={aboutImage} alt={t('about.imageAlt')} className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-xl md:rounded-[2.5rem]" />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 animate-fade-in order-1 lg:order-2">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">{t('about.title')}</h2>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 sm:px-8 py-5 sm:py-6 font-semibold text-sm sm:text-base w-full sm:w-auto">{t('about.getStarted')}</Button>
            </div>
            <div className="space-y-4 md:space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-secondary/10 hover:bg-secondary/20 p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground">{t(step.titleKey)}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t(step.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
