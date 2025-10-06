import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-semibold mb-4 uppercase tracking-wide text-sm">
            What Parents and Teachers Are Saying
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-card rounded-[3rem] p-12 shadow-lg relative">
            {/* Navigation Buttons */}
            <button className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-all">
              <ChevronLeft className="text-foreground" size={24} />
            </button>
            <button className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark hover:bg-dark/90 rounded-full flex items-center justify-center transition-all">
              <ChevronRight className="text-white" size={24} />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-16">
              <p className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-relaxed">
                "My son looks forward to every session! It's fun and educational."
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan" 
                  alt="Ryan Smith" 
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Ryan Smith</p>
                  <p className="text-sm text-muted-foreground">Parent</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">5 Rated for our Class</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
