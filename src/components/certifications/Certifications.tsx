// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import BadgeSlider from './BadgeSlider';
import personalInfo from '@/data/personal-info.json';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verified credentials across generative AI, agentic development, Python and modern web engineering
          </p>
        </div>

        <BadgeSlider certifications={personalInfo.certifications} />

      </div>
    </section>
  );
};

export default Certifications;
