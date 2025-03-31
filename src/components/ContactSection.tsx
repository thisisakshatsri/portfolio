
import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const ContactItem = ({ 
  icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  link: string; 
}) => {
  return (
    <a 
      href={link} 
      className="flex items-start space-x-3 hover:bg-secondary/50 p-3 rounded transition-colors"
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <div>{icon}</div>
      
      <div>
        <h3 className="text-xs font-medium text-muted-foreground">{title}</h3>
        <p className="text-sm">{value}</p>
      </div>
    </a>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "akshat.srivastava643@gmail.com",
      link: "mailto:akshat.srivastava643@gmail.com"
    },
    {
      icon: <Twitter className="h-5 w-5 text-primary" />,
      title: "Twitter",
      value: "@thisisakshatsri",
      link: "https://twitter.com/thisisakshatsri"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: "LinkedIn",
      value: "thisisakshatsri",
      link: "https://www.linkedin.com/in/thisisakshatsri/"
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      title: "GitHub",
      value: "thisisakshatsri",
      link: "https://github.com/thisisakshatsri"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center md:text-left">Contact Me</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <ContactItem 
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              link={item.link}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!
          </p>
          
          <a 
            href="mailto:akshat.srivastava643@gmail.com" 
            className="bg-primary text-primary-foreground px-6 py-2 rounded inline-flex items-center text-sm button-hover"
          >
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
