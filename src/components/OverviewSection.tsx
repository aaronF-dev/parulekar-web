import { useInView } from 'react-intersection-observer';
import { Award, Users, BookOpen, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OverviewSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Award,
      number: '25+',
      label: 'Years of Excellence',
      description: 'Providing quality education since 1999',
    },
    {
      icon: Users,
      number: '2000+',
      label: 'Happy Students',
      description: 'Learning and growing together',
    },
    {
      icon: BookOpen,
      number: '150+',
      label: 'Expert Faculty',
      description: 'Dedicated and qualified teachers',
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Global Recognition',
      description: 'International certifications',
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Mohanrao Parulekar Primary School
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A legacy of academic excellence, innovation, and holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group border-2 border-border hover:border-accent/40 shadow-md hover:shadow-colored transition-all duration-300 hover:-translate-y-2 bg-gradient-card rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <stat.icon className="text-accent-foreground" size={36} />
                  </div>
                  <h3 className="font-serif text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-semibold text-foreground mb-2 text-lg">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
