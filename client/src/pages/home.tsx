import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import { institutes } from '@/data/institutes';

// Group non-critical components into a single chunk
const SecondaryContent = lazy(() => import('@/components/SecondaryContent'));

// Simple loading placeholder with fixed height to prevent layout shifts
const SectionLoading = () => (
  <div className="py-8 w-full" style={{ minHeight: '800px' }}>
    <div className="container mx-auto px-4 animate-pulse">
      <div className="max-w-5xl mx-auto">
        <div className="h-8 bg-gray-200 rounded mb-6 w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  // Use local images for better performance
  const preloadImages = [
    '/pedagogy.png',
    '/economy.png',
    '/designandtech.png'
  ];
  
  return (
    <MainLayout preloadImages={preloadImages}>
      {/* Hero section with gradient background instead of image for better performance */}
      <Hero 
        backgroundImage="gradient"
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        primaryButtonText={t('home.hero.primaryButton')}
        secondaryButtonText={t('home.hero.secondaryButton')}
        announcement={t('home.hero.announcement')}
      />
      
      {/* Include FeaturesSection in the initial bundle as it's small and visible above the fold */}
      <FeaturesSection />
      
      {/* Wrap all remaining sections in a single Suspense boundary */}
      <Suspense fallback={<SectionLoading />}>
        <SecondaryContent />
      </Suspense>
    </MainLayout>
  );
};

export default Home;
