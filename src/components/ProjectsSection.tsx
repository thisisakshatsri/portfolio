
import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';
import mcaImage from "assets/m";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  image: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 border hover:border-primary/30 flex flex-col h-full">
      {/* Project Image */}
      <div className="w-full overflow-hidden border-b border-border group-hover:border-primary/20">
        <AspectRatio ratio={16/9} className="bg-muted">
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>

      <CardHeader className="p-5 border-b border-border group-hover:border-primary/20 transition-all">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg group-hover:text-primary transition-colors">{project.title}</span>
          <span className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight size={18} />
          </span>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm mt-2 group-hover:text-foreground/80 transition-colors">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-5 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <span 
                  className="bg-secondary text-foreground px-3 py-1 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-all cursor-pointer hover:scale-105"
                >
                  {tech}
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="text-xs p-2">
                Technology: {tech}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-5 py-3 bg-secondary/20 flex justify-between items-center border-t border-border group-hover:border-primary/20 transition-all mt-auto">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary flex items-center group-hover:bg-primary/5 hover:bg-primary/10 transition-all"
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-pulse" />
            <span>Demo</span>
          </a>
        </Button>
        
        {project.github && (
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground flex items-center hover:text-primary hover:bg-primary/5 transition-all"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              <span>Source</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Sorting Visualizer",
      description: "An interactive web application that visualizes various sorting algorithms including Insertion Sort, Selection Sort, Bubble Sort, Quick Sort, and Merge Sort.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://thisisakshatsri.github.io/sorting-visualizer",
      github: "https://github.com/thisisakshatsri/sorting-visualizer", 
      image: "assets/"
    },
    {
      title: "MCA Cube",
      description: "A web application serving as a repository of useful resources for MCA students at HBTU, Kanpur. The platform has received over 25,000 page views.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://thisisakshatsri.github.io/mca-cube/", 
      github: "https://github.com/thisisakshatsri/mca-cube",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left mb-10">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 stagger-container">
          {projects.map((project, index) => (
            <div key={index} className="stagger-item h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
