
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { setupScrollAnimations, setupStaggeredAnimations } from '@/utils/animationUtils';

const Index = () => {
  useEffect(() => {
    document.title = "Akshat Srivastava | Software Engineer";
    
    // Apply scroll animations
    const cleanupScrollAnimations = setupScrollAnimations();
    const cleanupStaggeredAnimations = setupStaggeredAnimations();
    
    return () => {
      cleanupScrollAnimations();
      cleanupStaggeredAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
