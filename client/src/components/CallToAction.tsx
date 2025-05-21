import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink = '/contact',
  secondaryButtonLink = '/programs',
}) => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Stylized background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90 z-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-10"></div>
      </div>
      
      {/* Decorative blurred circles */}
      <div className="absolute top-1/3 left-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center w-full max-w-xl mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-white mx-3 animate-pulse"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white px-4 mb-6 drop-shadow-md">
              {title}
            </h2>
            
            <div className="mt-2 h-1 w-20 bg-white rounded-full mx-auto"></div>
          </div>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonLink}>
              <a className="px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {primaryButtonText}
              </a>
            </Link>
            
            {secondaryButtonText && (
              <Link href={secondaryButtonLink}>
                <a className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300">
                  {secondaryButtonText}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
