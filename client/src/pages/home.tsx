import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import ModernHero from '@/components/ModernHero';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProgramsSection from '@/components/ProgramsSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout>
      <ModernHero 
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
      />
      
      <StatsSection />
      
      {/* InstituteSection removed as it's now integrated in the Hero */}
      <FeaturesSection />
      <ProgramsSection />
      <NewsEventsSection />
      <CallToAction 
        title={t('home.callToAction.title')}
        description={t('home.callToAction.description')}
        primaryButtonText={t('home.callToAction.primaryButton')}
        secondaryButtonText={t('home.callToAction.secondaryButton')}
      />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;
