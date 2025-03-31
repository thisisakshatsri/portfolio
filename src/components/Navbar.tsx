import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com/thisisakshatsri", 
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://www.linkedin.com/in/akshat-srivastava-643/", 
      label: "LinkedIn"
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://twitter.com/thisisakshatsri", 
      label: "Twitter"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: "mailto:akshat.srivastava643@gmail.com", 
      label: "Email"
    }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl text-primary hover-scale inline-block">
          Akshat.
        </a>

        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "nav-link", 
                activeSection === link.href.substring(1) && "text-primary after:w-full"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          {socialLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "py-2 hover:text-primary transition-colors",
                  activeSection === link.href.substring(1) && "text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
                style={{ animation: `slide-in-right 0.3s ease-out forwards`, animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex space-x-6 mt-4 pt-4 border-t">
              {socialLinks.map((link, index) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.label}
                  style={{ animation: `fade-in 0.3s ease-out forwards`, animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
