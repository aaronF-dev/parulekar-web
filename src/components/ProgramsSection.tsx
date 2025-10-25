import gallery1 from '@/assets/program-1.png';
import gallery2 from '@/assets/program-2.png';
import gallery3 from '@/assets/program-3.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const programs = [
    {
      image: gallery1,
      titleKey: 'programs.creative.title',
      descriptionKey: 'programs.creative.description',
      color: 'bg-primary'
    },
    {
      image: gallery2,
      titleKey: 'programs.problem.title',
      descriptionKey: 'programs.problem.description',
      color: 'bg-secondary'
    },
    {
      image: gallery3,
      titleKey: 'programs.literacy.title',
      descriptionKey: 'programs.literacy.description',
      color: 'bg-accent'
    }
  ];

  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-[8%] w-12 h-12 bg-secondary rounded-xl rotate-12 opacity-40"></div>
        <div className="absolute bottom-32 right-[12%] w-16 h-16 bg-accent rounded-2xl -rotate-12 opacity-40"></div>
      </div>

      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground px-4">
            {t('programs.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group relative hover:scale-105 transition-all duration-300"
            >
              <div className={`hidden md:block absolute -top-3 md:-top-4 -right-3 md:-right-4 w-[90%] h-[85%] ${program.color} rounded-2xl md:rounded-[3rem] -rotate-6 opacity-80`}></div>
              
              <div className="relative bg-card rounded-2xl md:rounded-[3rem] overflow-hidden shadow-lg">
                <div className="p-3 md:p-4">
                  <img 
                    src={program.image} 
                    alt={t(program.titleKey)}
                    loading="lazy"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl md:rounded-[2.5rem]"
                  />
                </div>
                
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 relative z-10 px-2 sm:px-0">
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 text-foreground">{t(program.titleKey)}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t(program.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
