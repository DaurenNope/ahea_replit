import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import ProgramsSection from '@/components/ProgramsSection';
import InternationalSection from '@/components/InternationalSection';
import CampusLifeSection from '@/components/CampusLifeSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';
import InstitutionNavigation from '@/components/InstitutionNavigation';
import { institutes } from '@/data/institutes';
import { useRoute } from 'wouter';
import { useEffect } from 'react';

// Institution theme context
interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  logoImage: string;
  name: string;
  shortName: string;
  heroImage: string;
}

const InstitutionHome: React.FC = () => {
  const { t } = useTranslation();
  const [, params] = useRoute<{ id: string }>('/institutions/:id');
  const institutionId = params?.id || '';
  
  // Find the current institution data
  const institution = institutes.find(inst => inst.id === institutionId);
  
  // Set CSS variables for theming
  useEffect(() => {
    if (institution) {
      document.documentElement.style.setProperty('--institution-primary', institution.primaryColor || '#2e7d32');
      document.documentElement.style.setProperty('--institution-secondary', institution.secondaryColor || '#1b5e20');
    }
    
    // Cleanup when component unmounts
    return () => {
      document.documentElement.style.removeProperty('--institution-primary');
      document.documentElement.style.removeProperty('--institution-secondary');
    };
  }, [institution]);
  
  if (!institution) {
    return <div>Institution not found</div>;
  }

  // Map of institution-specific hero background images
  const heroBackgroundImages: Record<string, string> = {
    'pedagogy': 'photo-1524178232363-1fb2b075b655',
    'economics': 'photo-1516321497487-e288fb19713f',
    'symbat': 'photo-1581078426770-6d336e5de7bf'
  };

  // Get institution-specific page title
  const pageTitle = t(`institutes.${institutionId}.name`) + ' | AHEU';
  
  // Get institution-specific description
  const pageDescription = t(`institutes.${institutionId}.description1`);
  
  return (
    <MainLayout 
      title={pageTitle}
      description={pageDescription}
    >
      {/* Institution-specific navigation */}
      <InstitutionNavigation institutionId={institutionId} />
      
      {/* Hero section with institution-specific styling */}
      <div className="institution-theme" style={{ 
        '--theme-primary': institution.primaryColor,
        '--theme-secondary': institution.secondaryColor 
      } as React.CSSProperties}>
        <Hero 
          backgroundImage={heroBackgroundImages[institutionId]}
          title={t(`institutes.${institutionId}.name`)}
          subtitle={t(`institutes.${institutionId}.shortDescription`)}
          primaryButtonText={t('common.explore')}
          primaryButtonLink={`/institutions/${institutionId}/about`}
          secondaryButtonText={t('common.apply')}
          secondaryButtonLink="/admissions"
          announcement={t('home.hero.announcement')}
          showInstituteCards={false}
        />
        
        {/* Use the same components as the main site but with institution-specific data */}
        <FeaturesSection />
        
        {/* Programs specific to this institution */}
        <ProgramsSection institutionId={institutionId} />
        
        {/* International partnerships specific to this institution */}
        <InternationalSection />
        
        {/* Campus life */}
        <CampusLifeSection />
        
        {/* News and events filtered for this institution */}
        <NewsEventsSection institutionId={institutionId} />
        
        {/* Call to action */}
        <CallToAction 
          title={t('home.callToAction.title')}
          description={t('home.callToAction.description')}
          primaryButtonText={t('home.callToAction.primaryButton')}
          secondaryButtonText={t('home.callToAction.secondaryButton')}
        />
        
        {/* Contact section with institution-specific contact details */}
        <ContactSection institutionId={institutionId} />
      </div>
    </MainLayout>
  );
};

export default InstitutionHome; 