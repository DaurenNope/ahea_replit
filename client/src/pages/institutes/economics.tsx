import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Layout from '@/components/Layout';
import AnimatedCounter from '@/components/AnimatedCounter';

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
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="w-full h-full">
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
              <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
              <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
              <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"></path>
              <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269"></path>
            </g>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('institutes.economics.name')}
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mb-8">
              {t('institutes.economics.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/programs?institute=economics" className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors">
                {t('institutes.viewPrograms')}
              </a>
              <a href="#faculty" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded font-medium transition-colors">
                {t('institutes.meetFaculty')}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Facts Section */}
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
              <AnimatedCounter 
                end={14} 
                className="text-xl font-semibold mb-2"
                duration={2000}
              />
              <p className="text-gray-600">{t('institutes.programsOffered')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-user-graduate text-2xl"></i>
              </div>
              <AnimatedCounter 
                end={3200} 
                suffix="+" 
                className="text-xl font-semibold mb-2"
                duration={2000}
              />
              <p className="text-gray-600">{t('institutes.students')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-chalkboard-teacher text-2xl"></i>
              </div>
              <AnimatedCounter 
                end={135} 
                className="text-xl font-semibold mb-2"
                duration={2000}
              />
              <p className="text-gray-600">{t('institutes.faculty')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className={`w-16 h-16 rounded-full ${secondaryColor} text-white flex items-center justify-center mx-auto mb-4`}>
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <AnimatedCounter 
                end={92} 
                suffix="%" 
                className="text-xl font-semibold mb-2"
                duration={2000}
              />
              <p className="text-gray-600">{t('institutes.employmentRate')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About the Institute */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('institutes.economics.about.title')} 
            subtitle={t('institutes.economics.about.subtitle')} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mt-12">
            <div>
              <p className="text-lg text-aheu-neutral-darker mb-6">
                {t('institutes.economics.about.p1')}
              </p>
              <p className="text-lg text-aheu-neutral-darker mb-6">
                {t('institutes.economics.about.p2')}
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                  <i className="fas fa-chart-pie text-2xl text-blue-700 mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{t('institutes.economics.about.feature1.title')}</h4>
                    <p className="text-aheu-neutral-darker">{t('institutes.economics.about.feature1.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-blue-50 p-6 rounded-lg flex items-start mb-6">
                <i className="fas fa-laptop-code text-2xl text-blue-700 mt-1 mr-4"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t('institutes.economics.about.feature2.title')}</h4>
                  <p className="text-aheu-neutral-darker">{t('institutes.economics.about.feature2.description')}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg flex items-start mb-6">
                <i className="fas fa-globe text-2xl text-blue-700 mt-1 mr-4"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t('institutes.economics.about.feature3.title')}</h4>
                  <p className="text-aheu-neutral-darker">{t('institutes.economics.about.feature3.description')}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                <i className="fas fa-briefcase text-2xl text-blue-700 mt-1 mr-4"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t('institutes.economics.about.feature4.title')}</h4>
                  <p className="text-aheu-neutral-darker">{t('institutes.economics.about.feature4.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className={`py-16 md:py-20 bg-gradient-to-br ${primaryColor} text-white overflow-hidden relative`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('institutes.economics.cta.title')}</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {t('institutes.economics.cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/admissions" className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors">
                {t('institutes.economics.cta.primaryButton')}
              </a>
              <a href="/programs?institute=economics" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded font-medium transition-colors">
                {t('institutes.economics.cta.secondaryButton')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EconomicsInstitutePage; 