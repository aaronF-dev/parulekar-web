import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import veenaGosavi from '@/assets/staff-veena-gosavi.jpg';
import staffPlaceholder from '@/assets/staff-placeholder.png';
import nilimaKulkarni from '@/assets/staff-nilima-kulkarni.jpg';
import satishBansode from '@/assets/staff-satish-bansode.jpg';
import rakhiMalvankar from '@/assets/staff-rakhi-malvankar.jpg';
import sakshiBandivadekar from '@/assets/staff-sakshi-bandivadekar.jpg';
import akshaySatardekar from '@/assets/staff-akshay-satardekar.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const FacultySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const faculty = [
    { memberKey: 'veena', image: veenaGosavi },
    { memberKey: 'shraddha', image: staffPlaceholder },
    { memberKey: 'nilima', image: nilimaKulkarni },
    { memberKey: 'sukhadha', image: staffPlaceholder },
    { memberKey: 'satish', image: satishBansode },
    { memberKey: 'poonam', image: staffPlaceholder },
    { memberKey: 'rakhi', image: rakhiMalvankar },
    { memberKey: 'sakshi', image: sakshiBandivadekar },
    { memberKey: 'akshay', image: akshaySatardekar },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      titleKey: 'faculty.qualified',
      descriptionKey: 'faculty.qualifiedDesc',
    },
    {
      icon: Award,
      titleKey: 'faculty.award',
      descriptionKey: 'faculty.awardDesc',
    },
    {
      icon: Star,
      titleKey: 'faculty.experienced',
      descriptionKey: 'faculty.experiencedDesc',
    },
  ];

  return (
    <section id="faculty" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
              {t('faculty.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t('faculty.subtitle')}
            </p>
          </div>

          {/* Faculty Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
            {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 bg-accent/10 border-2 border-accent/20 rounded-xl md:rounded-2xl hover:shadow-colored transition-all hover:scale-105"
                >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-accent rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <highlight.icon className="text-accent-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-base sm:text-lg">{t(highlight.titleKey)}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t(highlight.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {faculty.map((member, index) => (
              <Card
                key={index}
                className="group border-2 border-border hover:border-accent/30 shadow-md hover:shadow-colored transition-all duration-300 bg-gradient-card text-center rounded-xl md:rounded-2xl overflow-hidden"
              >
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg md:rounded-xl mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                    <img src={member.image} alt={t(`faculty.members.${member.memberKey}.name`)} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
                    {t(`faculty.members.${member.memberKey}.name`)}
                  </h3>
                  <p className="text-sm sm:text-base text-accent font-semibold">{t(`faculty.members.${member.memberKey}.role`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
