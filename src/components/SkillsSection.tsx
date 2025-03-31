
import React from 'react';
import { Code, Database, Cpu, Layout } from 'lucide-react';
import { Card, CardContent } from './ui/card';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Layout className="h-5 w-5 text-primary" />,
      skills: ["Spring Boot", "React", "Node.js", "Flask", "Django Rest Framework"]
    },
    {
      title: "AI Applications",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      skills: ["Prompts using Copilot", "OpenAI Integration"]
    },
    {
      title: "Databases & Other Technologies",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["SQL", "MongoDB", "Firebase", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30 stagger-item animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-md transform transition-transform group-hover:rotate-3">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
