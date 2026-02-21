
import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
      href: "https://www.linkedin.com/in/thisisakshatsri/",
      label: "LinkedIn"
    },
    {
      icon: <XIcon className="h-4 w-4" />,
      href: "https://x.com/thisisakshatsri",
      label: "X (Twitter)"
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
              &copy; {currentYear} Akshat Srivastava. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors ml-2 inline-flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
              <span className="text-xs">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
