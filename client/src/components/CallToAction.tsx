import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = '/admissions',
  secondaryButtonText,
  secondaryButtonLink = '/contact',
  image = 'gc42b524ed0976c653397baa7c147bccc011fafa6f702d4cb84bb320f2a79cdab2d5f39e171f1df49ede38475f6d2c2d44e78612de9fe1d5c819246db4c63d914_1280'
}) => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Image side */}
            <div className="md:w-1/2">
              <img 
                src={`https://pixabay.com/get/${image}`} 
                alt={t('callToAction.imageAlt')} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Content side */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {title || t('callToAction.title')}
              </h2>
              <p className="text-white text-lg mb-8">
                {description || t('callToAction.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                {primaryButtonText && (
                  <Link href={primaryButtonLink}>
                    <a className="btn-white">{primaryButtonText}</a>
                  </Link>
                )}
                
                {secondaryButtonText && (
                  <Link href={secondaryButtonLink}>
                    <a className="btn-outline">{secondaryButtonText}</a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
