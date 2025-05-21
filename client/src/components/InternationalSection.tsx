import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/ui/section-title';

const InternationalSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-aheu-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={t('international.sectionTitle')} 
          subtitle={t('international.sectionSubtitle')}
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('international.partnerships.title')}</h3>
            <p className="mb-4">{t('international.partnerships.description')}</p>
            
            <h4 className="text-lg font-semibold mt-6 mb-3">{t('international.partnerUniversities')}</h4>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>University of Cambridge (UK)</li>
              <li>Harvard University (USA)</li>
              <li>National University of Singapore (Singapore)</li>
              <li>Lomonosov Moscow State University (Russia)</li>
              <li>Tsinghua University (China)</li>
            </ul>
            
            <button className="btn-primary">{t('international.learnMore')}</button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
              alt={t('international.imageAlt')}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
