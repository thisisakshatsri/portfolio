import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

interface Position {
  role: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem = ({ 
  company, 
  location,
  positions,
  isLast = false
}: {
  company: string;
  location: string;
  positions: Position[];
  isLast?: boolean;
}) => {
  return (
    <div className="relative timeline-item">
      {/* Timeline briefcase icon and line */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        <div className="timeline-dot flex items-center justify-center">
          <Briefcase className="h-3 w-3 text-primary-foreground animate-pulse-slow" />
        </div>
        {!isLast && <div className="timeline-line h-full mt-1"></div>}
      </div>
      
      <Card className="mb-6 ml-8 hover-lift overflow-hidden group transition-all duration-300 hover:border-primary/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
            <div>
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{company}</h3>
            </div>
            
            <div className="flex items-center text-muted-foreground mt-2 md:mt-0 text-sm group-hover:text-primary/70 transition-colors">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{location}</span>
            </div>
          </div>
          
          {positions.map((position, posIndex) => (
            <React.Fragment key={posIndex}>
              <div className="mb-3">
                <p className="text-primary font-medium">{position.role}</p>
                <div className="flex items-center text-muted-foreground text-sm mb-3 group-hover:text-primary/70 transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{position.duration}</span>
                </div>
                
                <ul className="list-none space-y-3 text-sm text-muted-foreground">
                  {position.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start group/item">
                      <ChevronRight className="h-4 w-4 min-w-[16px] mr-2 mt-1 text-primary/60 group-hover/item:text-primary transition-colors" />
                      <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {posIndex < positions.length - 1 && (
                <Separator className="my-4 bg-border/50" />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Optum- UnitedHealth Group",
      location: "Gurugram, Haryana",
      positions: [
        {
          role: "Assoc. Software Engineer",
          duration: "Apr. 2023 – Mar. 2024",
          responsibilities: [
            "Refactor the code",
            "Improved the logic of retriever stream"
          ]
        },
        {
          role: "Software Engineer",
          duration: "Apr. 2024 – Present",
          responsibilities: [
            "Resolved 50+ secure and cloud vulnerabilities across multiple services, ensuring the successful deployment of solutions in production environments.",
            "Improved API reliability by implementing advanced exception handling mechanisms, reducing error rates by 25% and enhancing system stability for seamless user interactions.",
            "Designed and implemented a cron job scheduler in Java to automate the periodic update of the remark code table in the database, reducing manual intervention by 90% and ensuring consistent data synchronization across the system.",
            "Built a Java regex filter to exclude PDF files, improving data processing efficiency by 30% and reducing errors."
          ]
        }
      ]
    },
    {
      company: "DabbaX Food Aggregators",
      location: "Remote",
      positions: [
        {
          role: "SDE Intern",
          duration: "Dec. 2023 – Mar. 2024",
          responsibilities: [
            "Implemented MongoDB's geoNear function to calculate real-time distances between users and restaurants, enhancing location-based service accuracy and improving user experience.",
            "Engineered reusable React Native components, reducing development time by 25% and improving code maintainability across the application.",
            "Created a config-driven UI framework, enabling dynamic updates and reducing deployment time by 30%."
          ]
        }
      ]
    },
    {
      company: "Engagifii- Crescerance",
      location: "Remote",
      positions: [
        {
          role: "Software Engineer Trainee",
          duration: "Mar. 2023 – Dec. 2023",
          responsibilities: [
            "Integrated API payloads into the front-end, enabling real-time content rendering and improving user interaction efficiency by 25%.",
            "Developed a popup module with advanced features like filtering, searching, and pagination, enhancing user experience and data accessibility by 30%.",
            "Spearheaded the creation of a modular UI framework using Storybook and React, enabling rapid iteration of components and slashing front-end deployment cycles by 30%.",
            "Acquired hands-on expertise in Software Methodologies, Entity Framework, Azure DevOps, Postman, and LINQ, contributing to efficient project delivery and technical growth."
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left mb-10">Work Experience</h2>
        
        <div className="mt-10 space-y-0 pl-2">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              location={exp.location}
              positions={exp.positions}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
