import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgramsSection from './ProgramsSection';
import InternationalSection from './InternationalSection';
import CampusLifeSection from './CampusLifeSection';
import NewsEventsSection from './NewsEventsSection';
import CallToAction from './CallToAction';
import ContactSection from './ContactSection';

/**
 * SecondaryContent contains all non-critical sections for the home page
 * They are grouped into a single component to reduce the number of chunks
 * and optimize bundle loading
 */
const SecondaryContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

export default SecondaryContent; 