
import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const AboutSection = () => {
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
    <section id="about" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-xl font-medium text-primary mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-4">
              I'm a Software Engineer with expertise in full-stack development, currently working at Optum, part of UnitedHealth Group. I specialize in building efficient and scalable applications using a diverse tech stack.
            </p>
            <p className="text-muted-foreground">
              My experience spans across the entire software development lifecycle, from designing and implementing complex features to optimizing existing systems for better performance and reliability.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-primary mb-4">Extracurricular Activities</h3>
            
            <div className="space-y-6">
              {extracurriculars.map((item, index) => (
                <div key={index} className="flex">
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
