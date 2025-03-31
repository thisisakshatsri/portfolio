
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

type Education = {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
};

const EducationCard = ({ education, index }: { education: Education; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in-view');
          }, index * 150); // Staggered animation delay
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <Card 
      ref={cardRef} 
      className="animate-slide-up hover-lift group transition-all duration-300 hover:border-primary/50"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-5 flex items-start space-x-4">
        <div>
          <GraduationCap className="h-5 w-5 text-primary mt-1 group-hover:animate-pulse-slow" />
        </div>
        
        <div>
          <h3 className="font-medium group-hover:text-primary transition-colors">{education.institution}</h3>
          <p className="text-primary text-sm">{education.degree}</p>
          
          <div className="flex items-center mt-1 text-muted-foreground group-hover:text-primary/70 transition-colors">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-xs">{education.duration}</span>
          </div>
          
          <div className="mt-2">
            <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              GPA: {education.gpa}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      },
      { threshold: 0.1 }
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

  const educations: Education[] = [
    {
      institution: "Harcourt Butler Technical University",
      degree: "Masters in Computer Application",
      duration: "Dec. 2021 – Jul. 2023",
      gpa: "8.0"
    },
    {
      institution: "Ewing Christian College",
      degree: "Bachelors in Computer Application",
      duration: "May. 2016 – Jul. 2019",
      gpa: "6.5"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 animate-slide-up">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left mb-10">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
