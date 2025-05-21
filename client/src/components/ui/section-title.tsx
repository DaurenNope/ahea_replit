import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle
}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
      <div className="flex items-center w-full max-w-4xl mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="w-3 h-3 rounded-full bg-primary mx-3 animate-pulse"></div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-center px-4 text-primary">
        {title}
      </h2>
      
      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      
      {subtitle && (
        <p className="mt-4 text-center max-w-xl mx-auto text-aheu-neutral-dark">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 