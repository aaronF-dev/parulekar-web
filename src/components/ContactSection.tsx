import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Clock,
      titleKey: 'contact.hours',
      details: [
        'Mon - Fri (10:00am to 5:00pm)',
        'Sat (8:00am to 11:30am)',
        'Sun (closed)'
      ],
    },
    {
      icon: Phone,
      titleKey: 'contact.phone',
      details: [
        'Landline: 02365 252058',
        'Emergency: +91 94224 34332'
      ],
    },
    {
      icon: Mail,
      titleKey: 'contact.email',
      details: ['smesm@rediffmail.com'],
    },
    {
      icon: MapPin,
      titleKey: 'contact.address',
      details: ['3F67+3XJ, near by Maghi Ganesh Mandir,', 'Dhuriwada, Malvan, Maharashtra 416606'],
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
              {t('contact.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-md bg-card">
                  <CardContent className="p-4 sm:p-5 md:p-6 flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-accent" size={20} />
                    </div>
                     <div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">{t(info.titleKey)}</h3>
                      {info.details?.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-xs sm:text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.0699!2d73.46500000000001!3d15.872500000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e0b8b0b0b0%3A0x0!2s3F67%2B3XJ%2C%20Dhuriwada%2C%20Malvan!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mohanrao Parulekar Primary School Location"
              />
              <a 
                href="https://maps.app.goo.gl/wGh5eTc5ZnqGwbB18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg hover:bg-primary-dark transition-colors text-sm font-medium"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
