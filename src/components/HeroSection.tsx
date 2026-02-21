
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { PowerGlitch } from 'powerglitch';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply PowerGlitch after mount animations settle
    const glitchTimer = setTimeout(() => {
      if (avatarRef.current) {
        PowerGlitch.glitch(avatarRef.current, {
          playMode: 'hover',
          createContainers: true,
          hideOverflow: false,
          timing: {
            duration: 2000,
            iterations: 1,
          },
          glitchTimeSpan: {
            start: 0,
            end: 1,
          },
          shake: {
            velocity: 15,
            amplitudeX: 0.3,
            amplitudeY: 0.3,
          },
          slice: {
            count: 6,
            velocity: 15,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
          },
        });
      }
      if (resumeRef.current) {
        PowerGlitch.glitch(resumeRef.current, {
          playMode: 'hover',
          createContainers: true,
          hideOverflow: false,
          timing: {
            duration: 2000,
            iterations: 1,
          },
          glitchTimeSpan: {
            start: 0,
            end: 1,
          },
          shake: {
            velocity: 20,
            amplitudeX: 0.3,
            amplitudeY: 0.2,
          },
          slice: {
            count: 15,
            velocity: 20,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
          },
        });
      }
    }, 1200);

    return () => clearTimeout(glitchTimer);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col items-center justify-center relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Profile Avatar */}
          <div className={`mb-6 transition-all duration-700 delay-75 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img
              ref={avatarRef}
              src="/profile.jpg"
              alt="Akshat Srivastava"
              className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg shadow-primary/25 ring-4 ring-primary/40 dark:ring-primary/20 animate-glow-pulse"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-primary hover:opacity-80 transition-opacity">Akshat Srivastava</span>
          </h1>

          <h2 className={`text-xl sm:text-2xl text-muted-foreground mb-6 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Software Engineer
          </h2>

          <p className={`text-muted-foreground max-w-lg mx-auto mb-8 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Backend Engineer · AI Enthusiast · Building at Optum
          </p>

          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2 rounded button-hover"
            >
              Get in Touch
            </a>

            <a
              href="#projects"
              className="border border-primary text-primary px-5 py-2 rounded hover:bg-primary/5 button-hover"
            >
              View Projects
            </a>

            <a
              ref={resumeRef}
              href="/resume.pdf"
              download="Akshat_Srivastava_Resume.pdf"
              className="border border-primary text-primary px-5 py-2 rounded hover:bg-primary/5 button-hover inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className={`mt-16 italic text-muted-foreground max-w-md mx-auto p-6 border-l-2 border-primary/30 bg-secondary/20 rounded transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg">"If you always do what interests you, at least one person is pleased."</p>
            <p className="text-sm mt-2 text-right">- Katharine Hepburn</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary transition-colors animate-bounce hover:text-primary/80"
        aria-label="Scroll to About Section"
      >
        <ChevronDown size={24} className="hover:scale-125 transition-transform" />
      </a>
    </section>
  );
};

export default HeroSection;

