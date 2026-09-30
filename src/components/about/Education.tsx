import React from 'react';
import { GraduationCap } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

interface EducationItem {
  degree: string;
  institution: string;
  duration?: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = personalInfo.education;

  return (
    <div className="mb-12">
      <div className="flex flex-col items-center gap-3">
        {education.map((item) => (
          <div
            key={`${item.institution}-${item.degree}`}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3 px-4 sm:px-6 py-4 sm:py-3 bg-accent/5 border border-accent/20 rounded-2xl sm:rounded-full max-w-full"
          >
            <div className="flex flex-col md:flex-row items-center justify-center sm:justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={16} className="text-accent" />
              </div>
              <span className="font-semibold text-foreground text-sm text-center sm:text-left">
                {item.degree}
              </span>
            </div>

            {/* Mobile: Stack vertically, Desktop: Horizontal with separators */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-accent font-medium text-center sm:text-left">
                {item.institution}
              </span>
              {item.duration && (
                <>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-center sm:text-left">
                    {item.duration}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
