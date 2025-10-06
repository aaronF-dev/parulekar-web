import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all shadow-lg"
    >
      <Languages className="mr-2 h-4 w-4" />
      {language === 'en' ? 'मराठी' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
