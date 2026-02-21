
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
      className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group overflow-hidden"
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <div className="mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xs font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-sm font-medium break-words min-w-0 w-full">{value}</p>
    </a>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <XIcon className="h-6 w-6 text-primary" />,
      title: "X (Twitter)",
      value: "@thisisakshatsri",
      link: "https://x.com/thisisakshatsri"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      value: "thisisakshatsri",
      link: "https://www.linkedin.com/in/thisisakshatsri/"
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />,
      title: "GitHub",
      value: "thisisakshatsri",
      link: "https://github.com/thisisakshatsri"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center">Contact Me</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
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

        <div className="mt-14 text-center">
          <p className="text-muted-foreground max-w-lg mx-auto mb-6 text-sm">
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
