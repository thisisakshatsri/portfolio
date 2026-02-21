
import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ExperienceItem = ({
  company,
  role,
  duration,
  location,
  responsibilities,
  logo,
  isLast = false
}: {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: React.ReactNode[];
  logo?: string;
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

      <Card className="card-glow mb-6 ml-8 hover-lift overflow-hidden group transition-all duration-300 hover:border-primary/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
            <div className="flex items-center gap-4">
              {logo && (
                <img
                  src={logo}
                  alt={`${company} logo`}
                  className="w-12 h-12 rounded-lg object-contain bg-white p-1 shadow-sm border"
                />
              )}
              <div>
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{company}</h3>
                <p className="text-primary">{role}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-6 mt-2 md:mt-0 text-sm">
              <div className="flex items-center text-muted-foreground mb-2 sm:mb-0 group-hover:text-primary/70 transition-colors">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{duration}</span>
              </div>

              <div className="flex items-center text-muted-foreground group-hover:text-primary/70 transition-colors">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <ul className="list-none space-y-3 text-sm text-muted-foreground">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start group/item">
                <ChevronRight className="h-4 w-4 mr-2 mt-1 text-primary/60 group-hover/item:text-primary transition-colors" />
                <span className="group-hover/item:text-foreground transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Optum - UnitedHealth Group",
      role: "Software Engineer",
      duration: "Apr. 2024 – Present",
      location: "Gurugram, Haryana",
      logo: "/logos/optum.png",
      responsibilities: [
        <>Developed <strong>AI-powered healthcare benefits search API</strong> using <strong>Flask</strong> and <strong>Python</strong>, integrating <strong>Google Vertex AI</strong> for semantic search across <strong>100K+</strong> benefit documents.</>,
        <>Developed a <strong>Python-based automation script</strong> to extract dynamically located healthcare sections from unstructured <strong>DOCX files</strong> using <strong>keyword-based detection</strong> and structured <strong>JSON output</strong> generation.</>,
        <>Designed and implemented a <strong>cron job scheduler</strong> in <strong>Java</strong> to automate the periodic update of the remark code table in the database, reducing manual intervention by <strong>90%</strong> and ensuring consistent data synchronization across the system.</>,
        <>Resolved <strong>50+ secure and cloud vulnerabilities</strong> across multiple services, ensuring the successful deployment of solutions in <strong>production environments</strong>.</>,
        <>Improved <strong>API reliability</strong> by implementing advanced <strong>exception handling mechanisms</strong>, reducing error rates by <strong>25%</strong> and enhancing system stability for seamless user interactions.</>
      ]
    },
    {
      company: "DabbaX Food Aggregators",
      role: "SDE Intern",
      duration: "Dec. 2023 – Mar. 2024",
      location: "Remote",
      logo: "/logos/dabbax.png",
      responsibilities: [
        <>Implemented <strong>MongoDB's geoNear function</strong> to calculate real-time distances between users and restaurants, enhancing <strong>location-based service</strong> accuracy and improving user experience.</>,
        <>Engineered reusable <strong>React Native components</strong>, reducing development time by <strong>25%</strong> and improving code maintainability across the application.</>,
        <>Created a <strong>config-driven UI framework</strong>, enabling dynamic updates and reducing deployment time by <strong>30%</strong>.</>
      ]
    },
    {
      company: "Engagifii - Crescerance",
      role: "Software Engineer Trainee",
      duration: "Mar. 2023 – Dec. 2023",
      location: "Remote",
      logo: "/logos/engagifii.png",
      responsibilities: [
        <>Integrated <strong>API payloads</strong> into the front-end, enabling <strong>real-time content rendering</strong> and improving user interaction efficiency by <strong>25%</strong>.</>,
        <>Developed a <strong>popup module</strong> with advanced features like <strong>filtering, searching, and pagination</strong>, enhancing user experience and data accessibility by <strong>30%</strong>.</>,
        <>Spearheaded the creation of a <strong>modular UI framework</strong> using <strong>Storybook</strong> and <strong>React</strong>, enabling rapid iteration of components and slashing front-end deployment cycles by <strong>30%</strong>.</>,
        <>Acquired hands-on expertise in <strong>Software Methodologies</strong>, <strong>Entity Framework</strong>, <strong>Azure DevOps</strong>, <strong>Postman</strong>, and <strong>LINQ</strong>, contributing to efficient project delivery and technical growth.</>
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
              role={exp.role}
              duration={exp.duration}
              location={exp.location}
              logo={exp.logo}
              responsibilities={exp.responsibilities}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
