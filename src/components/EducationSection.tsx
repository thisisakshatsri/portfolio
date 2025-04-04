import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

type Education = {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
  location: string;
};

const EducationCard = ({ education, index }: { education: Education; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in-view');
          }, index * 150);
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
      className="animate-slide-up w-full hover-lift transition-all duration-300 
                 shadow-sm hover:shadow-md border border-border hover:border-primary/30"
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="p-2.5 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
          </div>
          
          <div className="flex-1 space-y-2.5">
            <div>
              <h3 className="font-medium text-lg text-foreground">{education.institution}</h3>
              <p className="text-primary/90 font-medium mt-0.5">{education.degree}</p>
            </div>
            
            <Separator className="bg-border/60 my-1.5" />
            
            <div className="grid grid-cols-1 gap-1.5">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">{education.duration}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">{education.location}</span>
              </div>
              
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                <span className="text-sm font-medium">GPA: {education.gpa}</span>
              </div>
            </div>
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
      degree: "Masters",
      duration: "Dec. 2021 – Jul. 2023",
      gpa: "8.0",
      location: "Kanpur, Uttar Pradesh"
    },
    {
      institution: "Ewing Christian College",
      degree: "Bachelors",
      duration: "May. 2016 – Jul. 2019",
      gpa: "6.5",
      location: "Prayagraj, Uttar Pradesh"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 animate-slide-up">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left mb-10">Education</h2>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Journey line */}
          <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-border/50 z-0"></div>
          
          <div className="flex flex-col gap-8 relative z-10">
            {educations.map((education, index) => (
              <div key={index} className="relative">
                <div className="absolute left-5 top-6 w-4 h-4 rounded-full bg-primary z-10"></div>
                <div className="pl-16">
                  <EducationCard education={education} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;