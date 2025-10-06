import { useLanguage } from '@/contexts/LanguageContext';
import schoolLogo from '@/assets/school-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { labelKey: 'nav.home', href: '#home' },
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.programs', href: '#programs' },
    { labelKey: 'nav.faculty', href: '#faculty' },
    { labelKey: 'nav.gallery', href: '#gallery' },
    { labelKey: 'nav.contact', href: '#contact' },
  ];


  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <img src={schoolLogo} alt="School Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <span className="font-serif font-bold text-xl sm:text-2xl">{t('hero.schoolName')}</span>
            </div>
            <p className="text-primary-foreground/70 text-xs sm:text-sm mb-2 font-medium">
              By <a href="https://topiwala-mes.org/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors underline">Malvan Education Society</a>
            </p>
            <p className="text-primary-foreground/80 mb-3 md:mb-4 max-w-md text-sm sm:text-base">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg mb-3 md:mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-primary-foreground/80 hover:text-accent-foreground transition-colors text-sm sm:text-base"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Copyright */}
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg mb-3 md:mb-4">Legal</h3>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mb-3">
              © {currentYear} {t('footer.copyright')}
            </p>
            <ul className="space-y-2">
              <li>
                <button className="text-primary-foreground/80 hover:text-accent-foreground transition-colors text-sm sm:text-base">
                  {t('footer.privacy')}
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-accent-foreground transition-colors text-sm sm:text-base">
                  {t('footer.terms')}
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-accent-foreground transition-colors text-sm sm:text-base">
                  {t('footer.cookies')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
