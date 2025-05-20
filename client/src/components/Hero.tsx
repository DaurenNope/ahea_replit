import React, { useMemo } from 'react';
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

// Map institute IDs to local images
const instituteImages = {
  'pedagogy': '/pedagogy.png',
  'economics': '/economy.png',
  'symbat': '/designandtech.png'
};

const InstituteCard = React.memo(({ institute, t }: { institute: any, t: any }) => {
  // Use local images for better performance
  const imageUrl = useMemo(() => {
    return instituteImages[institute.id as keyof typeof instituteImages] || 
      `https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=60`;
  }, [institute.id, institute.image]);

  return (
    <div 
      key={institute.id} 
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-aheu-neutral-medium will-change-transform"
      style={{ 
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.transform = 'translateY(-4px)';
        target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      }}
    >
      <div 
        className="h-40 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: '#f3f4f6' // Fallback color while loading
        }} 
      />
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
  );
});

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

  // Use a simple gradient background instead of an image for the hero
  const heroBackground = useMemo(() => {
    // If it starts with 'photo-', it's an Unsplash photo
    if (typeof backgroundImage === 'string' && backgroundImage.startsWith('photo-')) {
      return { 
        backgroundImage: `url('https://images.unsplash.com/${backgroundImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=70')`,
        backgroundColor: '#1a1a1a'
      };
    }
    
    // Otherwise use a gradient
    return { 
      background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
    };
  }, [backgroundImage]);
  
  return (
    <div className="relative">
      {/* Main Hero Section */}
      <section className="relative">
        <div 
          className="h-[60vh] md:h-[65vh] lg:h-[75vh] bg-cover bg-center" 
          style={heroBackground}
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
                <InstituteCard 
                  key={institute.id}
                  institute={institute}
                  t={t}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Hero;
