import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-aheu-neutral-darker max-w-3xl mt-4 md:mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 