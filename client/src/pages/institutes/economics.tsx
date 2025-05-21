import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Layout from '@/components/Layout';

const EconomicsInstitutePage: React.FC = () => {
  const { t } = useTranslation();

  // Primary color theme for Economics Institute - blue tones
  const primaryColor = 'from-blue-700 to-blue-900';
  const secondaryColor = 'bg-blue-800';
  const accentColor = 'blue';

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`relative py-20 md:py-28 bg-gradient-to-br ${primaryColor} text-white overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-1/4 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute right-0 bottom-1/3 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('institutes.economics.name')}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl opacity-90 max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('institutes.economics.shortDescription')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#about" className="btn-white">
                {t('common.learnMore')}
              </a>
              <a href="/programs?institute=economics" className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors">
                {t('institutes.viewAllPrograms')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About the Institute */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('institutes.economics.shortName')} 
            subtitle={t('institutes.economics.description1')}
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-lg text-aheu-neutral-darker mb-6">
                {t('institutes.economics.description2')}
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">{t('institutes.keyFocusAreas')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>{t('institutes.economics.focusAreas.area1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>{t('institutes.economics.focusAreas.area2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>{t('institutes.economics.focusAreas.area3')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>{t('institutes.economics.focusAreas.area4')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>{t('institutes.economics.focusAreas.area5')}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-80 md:h-full">
              <img 
                src="/images/institutes/economics-institute.jpg" 
                alt={t('institutes.economics.imageAlt')} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholders/institute-placeholder.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Facts */}
      <section className={`py-16 md:py-20 bg-gray-50`}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t('institutes.quickFacts')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-book text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">14</h3>
              <p className="text-gray-600">{t('institutes.programsOffered')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-user-graduate text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">3,200+</h3>
              <p className="text-gray-600">{t('institutes.students')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-chalkboard-teacher text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">135</h3>
              <p className="text-gray-600">{t('institutes.faculty')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-calendar-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">1997</h3>
              <p className="text-gray-600">{t('institutes.established')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('institutes.callToAction.title')}
          </h2>
          <p className="text-lg text-aheu-neutral-darker max-w-3xl mx-auto mb-10">
            {t('institutes.callToAction.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/programs" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              {t('institutes.callToAction.primaryButton')}
            </a>
            <a 
              href="/contact" 
              className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded font-medium transition-colors"
            >
              {t('institutes.callToAction.secondaryButton')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EconomicsInstitutePage; 