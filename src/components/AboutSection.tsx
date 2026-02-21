
import React, { useEffect, useRef } from 'react';
import { Award, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const leftCol = entry.target.querySelector('.about-col-left');
          const rightCol = entry.target.querySelector('.about-col-right');
          const items = entry.target.querySelectorAll('.extra-item');

          if (leftCol) leftCol.classList.add('animate-slide-in-left');
          if (rightCol) rightCol.classList.add('animate-slide-in-right');

          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.transform = 'translateX(0)';
            }, 300 + index * 150);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const extracurriculars = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Leadership",
      description: "Design Head of Print and Social Media Club Sub-Council - HBTU, Kanpur."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Talks",
      description: "Delivered a cybersecurity talk at Aligarh Muslim University, sharing best practices and threat mitigation strategies with 100+ students."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Teaching",
      description: "Taught 20+ juniors the basics of programming and web development."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="about-col-left opacity-0">
            <h3 className="text-xl font-medium text-primary mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-4">
              I'm a Software Engineer driven by one question: <em className="text-foreground">does this actually make someone's life easier?</em> With experience across full-stack development, cloud infrastructure, and AI integration, I currently build software in the healthcare space at Optum, UnitedHealth Group.
            </p>
            <p className="text-muted-foreground">
              I work across the stack- from Java and Spring Boot backends to React frontends to AI-powered systems but the technology is always secondary to the problem it solves. At Optum, I get to apply this thinking where better software directly translates to better outcomes.
            </p>
          </div>

          <div className="about-col-right opacity-0">
            <h3 className="text-xl font-medium text-primary mb-4">Extracurricular Activities</h3>

            <div className="space-y-6">
              {extracurriculars.map((item, index) => (
                <div key={index} className="extra-item flex" style={{ opacity: 0, transform: 'translateX(20px)', transition: 'all 0.5s ease-out' }}>
                  <div className="mr-4">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
