export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLinks;
  featured?: boolean;
  imageUrl?: string;
}