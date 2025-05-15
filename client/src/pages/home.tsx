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

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout>
      <Hero 
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        primaryButtonText={t('home.hero.primaryButton')}
        secondaryButtonText={t('home.hero.secondaryButton')}
        announcement={t('home.hero.announcement')}
      />
      
      {/* InstituteSection removed as it's now integrated in the Hero */}
      <FeaturesSection />
      <ProgramsSection />
      <InternationalSection />
      <CampusLifeSection />
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
