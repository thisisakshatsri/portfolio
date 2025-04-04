
import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { 
      icon: <Github className="h-4 w-4" />, 
      href: "https://github.com/thisisakshatsri", 
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="h-4 w-4" />, 
      href: "https://www.linkedin.com/in/akshat-srivastava-643/", 
      label: "LinkedIn"
    },
    { 
      icon: <Twitter className="h-4 w-4" />, 
      href: "https://twitter.com/thisisakshatsri", 
      label: "Twitter"
    },
    { 
      icon: <Mail className="h-4 w-4" />, 
      href: "mailto:akshat.srivastava643@gmail.com", 
      label: "Email"
    }
  ];

  return (
    <footer className="bg-background border-t py-6">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} | Designed with ❤️ by Akshat.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
