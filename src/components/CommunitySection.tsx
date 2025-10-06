import { Button } from '@/components/ui/button';
import communityImage from '@/assets/gallery-7.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CommunitySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`bg-gradient-dark rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src={communityImage} 
                alt="Happy students learning together" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
                Get In Touch Our Community
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                Become Part of Our School<br/>
                Partner <span className="text-primary">Community</span>
              </h2>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Interested in joining us at Mohanrao Parulekar Primary School? Connect with our expanding network of dedicated educators and forward-thinking families.
              </p>
              <div>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 font-semibold text-lg shadow-glow hover:shadow-xl transition-all"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
