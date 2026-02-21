
import React, { useEffect, useRef } from 'react';
import { Code, Database, Cpu, Layout } from 'lucide-react';
import { Card, CardContent } from './ui/card';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tags = entry.target.querySelectorAll('.skill-tag-animate');
          tags.forEach((tag, index) => {
            setTimeout(() => {
              tag.classList.add('animate-in-view');
            }, index * 60);
          });
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
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Layout className="h-5 w-5 text-primary" />,
      skills: ["Spring Boot", "React", "Node.js", "Flask", "Django Rest Framework", "React Native"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      skills: ["Google Vertex AI", "OpenAI Integration", "LLM Integration", "RAG Pipelines", "Semantic Search"]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["SQL", "MongoDB", "Firebase", "PostgreSQL"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      skills: ["Docker", "CI/CD", "AWS", "Azure", "GCP"]
    },
    {
      title: "Tools & Practices",
      icon: <Layout className="h-5 w-5 text-primary" />,
      skills: ["Git", "REST APIs", "Microservices", "Agile/Scrum", "Postman"]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30 stagger-item animate-on-scroll">
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
                      className="skill-tag-animate bg-secondary text-foreground px-3 py-1 rounded-full text-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-default"
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
