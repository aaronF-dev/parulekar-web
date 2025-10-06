import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const stats = [
    { icon: '👨‍🏫', value: '10+', labelKey: 'stats.teachers' },
    { icon: '🎓', value: '10+', labelKey: 'stats.years' },
    { icon: '♾️', value: '∞', labelKey: 'stats.learning' },
    { icon: '🎪', value: 'world', labelKey: 'stats.skills' }
  ];

  return (
    <section className="relative mt-8 sm:mt-12 md:mt-16 pb-12 sm:pb-16 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={ref}
          className={`bg-gradient-dark rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl mb-3 md:mb-4 text-2xl sm:text-2xl md:text-3xl">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <p className="text-xs sm:text-sm text-white leading-snug">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
