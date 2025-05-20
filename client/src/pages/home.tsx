import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';

// Lazy load components that aren't needed for initial render
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const ProgramsSection = lazy(() => import('@/components/ProgramsSection'));
const InternationalSection = lazy(() => import('@/components/InternationalSection'));
const CampusLifeSection = lazy(() => import('@/components/CampusLifeSection'));
const NewsEventsSection = lazy(() => import('@/components/NewsEventsSection'));
const CallToAction = lazy(() => import('@/components/CallToAction'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

// Simple loading placeholder for lazy-loaded sections
const SectionLoading = () => (
  <div className="py-16 w-full">
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout>
      {/* Hero section is kept in the main bundle since it's critical for initial render */}
      <Hero 
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        primaryButtonText={t('home.hero.primaryButton')}
        secondaryButtonText={t('home.hero.secondaryButton')}
        announcement={t('home.hero.announcement')}
      />
      
      {/* Wrap other sections with Suspense to lazy load them */}
      <Suspense fallback={<SectionLoading />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ProgramsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <InternationalSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <CampusLifeSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <NewsEventsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <CallToAction 
          title={t('home.callToAction.title')}
          description={t('home.callToAction.description')}
          primaryButtonText={t('home.callToAction.primaryButton')}
          secondaryButtonText={t('home.callToAction.secondaryButton')}
        />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
    </MainLayout>
  );
};

export default Home;
