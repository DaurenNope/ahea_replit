import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { institutes } from '@/data/institutes';

interface HeroProps {
  backgroundImage?: string;
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  announcement?: string;
  showInstituteCards?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage = 'photo-1541339907198-e08756dedf3f',
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = '/admissions',
  secondaryButtonText,
  secondaryButtonLink = '/programs',
  announcement,
  showInstituteCards = true
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Main Hero Section */}
      <section className="relative">
        <div 
          className="h-[60vh] md:h-[65vh] lg:h-[75vh] bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/${backgroundImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')` }}
          aria-hidden="true"
        >
          <div className="hero-overlay">
            <div className="container mx-auto h-full px-4 md:px-6 flex flex-col justify-center">
              <div className="max-w-4xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
                
                {(primaryButtonText || secondaryButtonText) && (
                  <div className="flex flex-wrap gap-4">
                    {primaryButtonText && (
                      <Link href={primaryButtonLink} className="btn-white">
                        {primaryButtonText}
                      </Link>
                    )}
                    
                    {secondaryButtonText && (
                      <Link href={secondaryButtonLink} className="btn-outline">
                        {secondaryButtonText}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {announcement && (
          <div className="absolute bottom-0 left-0 right-0 bg-secondary p-3 text-white text-center">
            <p className="text-lg">{announcement}</p>
          </div>
        )}
      </section>

      {/* Three Institutes Feature Section - Only show on main landing page */}
      {showInstituteCards && (
        <section className="bg-white py-0 -mt-24 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {institutes.map((institute) => (
                <div 
                  key={institute.id} 
                  className="bg-white rounded-lg shadow-xl overflow-hidden border border-aheu-neutral-medium hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div 
                    className="h-40 bg-cover bg-center" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300')` }}
                  >
                    <div className="h-full w-full bg-primary/70 flex items-center justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white px-4 text-center">
                        {t(`institutes.${institute.id}.shortName`)}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-aheu-neutral-dark mb-4 line-clamp-3 h-[4.5rem]">
                      {t(`institutes.${institute.id}.shortDescription`)}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm text-aheu-neutral-dark">
                          {institute.programCount} {t('institutes.programs')}
                        </span>
                      </div>
                      <Link href={`/institutes/${institute.id}`} className="text-primary hover:text-secondary font-bold flex items-center">
                        {t('common.learnMore')} 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Hero;
