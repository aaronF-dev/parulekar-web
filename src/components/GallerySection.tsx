import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const images = [
    { src: 'https://ik.imagekit.io/u1orvlllk/g1.png?updatedAt=1759241847034', titleKey: 'gallery.images.interactive' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g4.png?updatedAt=1759241843272', titleKey: 'gallery.images.stem' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g2.png?updatedAt=1759241842743', titleKey: 'gallery.images.sports' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g5.png?updatedAt=1759241840353', titleKey: 'gallery.images.knowledge' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g3.png?updatedAt=1759241841900', titleKey: 'gallery.images.play' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g6.png?updatedAt=1759242014826', titleKey: 'gallery.images.arts' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g7.png?updatedAt=1759242014909', titleKey: 'gallery.images.music' },
    { src: 'https://ik.imagekit.io/u1orvlllk/g8.png?updatedAt=1759242606809', titleKey: 'gallery.images.digital' },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
              {t('gallery.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t('gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-colored transition-all duration-300 border-2 border-border hover:border-accent/30"
              >
                <img
                  src={image.src}
                  alt={t(image.titleKey)}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-primary-foreground">
                    {t(image.titleKey)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 px-4">{t('gallery.visitText')}</p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm sm:text-base text-accent hover:text-accent-dark font-semibold transition-colors"
            >
              {t('gallery.scheduleTour')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
