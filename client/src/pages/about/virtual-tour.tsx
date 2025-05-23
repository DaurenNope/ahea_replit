import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const VirtualTourPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('virtualTour.pageTitle', '3D Virtual Tour - AHEU University')}
      description={t('virtualTour.metaDescription', 'Explore AHEU University campus through our interactive 3D virtual tour. Visit our facilities, classrooms, and more without leaving your home.')}
    >
      {/* Simple header with title */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('virtualTour.title', '3D Virtual Tour')}
            </h1>
            <p className="text-gray-600">
              {t('virtualTour.subtitle', 'Explore our campus from anywhere in the world')}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-6 overflow-x-auto py-3 text-sm">
            <Link href="/about" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('about.tabs.mission', 'Mission & Vision')}
            </Link>
            <Link href="/about?tab=history" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('about.tabs.history', 'History')}
            </Link>
            <Link href="/about?tab=leadership" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('about.tabs.leadership', 'Leadership')}
            </Link>
            <Link href="/about?tab=rankings" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('about.tabs.rankings', 'Rankings')}
            </Link>
            <Link href="/about?tab=infrastructure" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('about.tabs.infrastructure', 'Infrastructure')}
            </Link>
            <Link href="/about/virtual-tour" className="text-green-600 font-medium border-b-2 border-green-600 whitespace-nowrap">
              {t('about.virtualTour', '3D Tour')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('virtualTour.title', '3D Virtual Tour')}</h2>
                
                {/* Tour placeholder */}
                <div className="bg-gray-100 rounded-lg mb-6">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-xl font-medium text-gray-600 mb-3">
                        {t('virtualTour.comingSoon', '3D Tour Coming Soon')}
                      </p>
                      <p className="text-gray-500">
                        {t('virtualTour.placeholder', 'Our interactive campus tour is in development. Soon you will be able to virtually explore our university!')}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Tour description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                    {t('virtualTour.aboutTour', 'About Our Virtual Tour')}
                  </h3>
                  <p className="mb-4">
                    {t('virtualTour.description', 'Our immersive 3D tour allows you to explore the AHEU University campus from anywhere in the world. You can visit our modern classrooms, libraries, and recreational areas to feel the atmosphere of student life at AHEU.')}
                  </p>
                </div>
                
                {/* Tour highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                    {t('virtualTour.highlights', 'Tour Highlights')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{t('virtualTour.highlight1', 'Modern Classrooms')}</h4>
                      <p className="text-sm text-gray-600">{t('virtualTour.highlight1Desc', 'State-of-the-art lecture halls and seminar rooms equipped with the latest technology.')}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{t('virtualTour.highlight2', 'Advanced Libraries')}</h4>
                      <p className="text-sm text-gray-600">{t('virtualTour.highlight2Desc', 'Comprehensive library facilities with digital resources and study spaces.')}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{t('virtualTour.highlight3', 'Student Areas')}</h4>
                      <p className="text-sm text-gray-600">{t('virtualTour.highlight3Desc', 'Recreational zones, cafeterias, and social spaces for student interaction.')}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{t('virtualTour.highlight4', 'Campus Grounds')}</h4>
                      <p className="text-sm text-gray-600">{t('virtualTour.highlight4Desc', 'Beautiful campus architecture and landscaped outdoor spaces.')}</p>
                    </div>
                  </div>
                </div>

                {/* Contact information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Ready to Visit Our Campus?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact us to schedule an in-person tour or learn more about our facilities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Schedule a Tour
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-block border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VirtualTourPage; 