import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { programs } from '@/data/programs';

interface ProgramsSectionProps {
  institutionId?: string;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ institutionId }) => {
  const { t } = useTranslation();
  
  // Filter programs by institution if institutionId is provided
  const filteredPrograms = institutionId 
    ? programs.filter(program => program.institute === institutionId)
    : programs;
  
  // Limit to 6 programs for display
  const displayPrograms = filteredPrograms.slice(0, 6);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {institutionId 
              ? t(`institutes.${institutionId}.programsTitle`, t('programs.sectionTitle')) 
              : t('programs.sectionTitle')}
          </h2>
          <p className="section-subtitle">
            {institutionId 
              ? t(`institutes.${institutionId}.programsSubtitle`, t('programs.sectionSubtitle')) 
              : t('programs.sectionSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-aheu-neutral-light hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {t(`programs.items.${program.id}.title`)}
                </h3>
                <p className="text-aheu-neutral-dark mb-4">
                  {t(`programs.items.${program.id}.description`)}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-aheu-neutral-medium px-3 py-1 bg-aheu-neutral-light rounded-full">
                    {t(`programs.${program.level}`)}
                  </span>
                  <Link href={`/programs/${program.id}`}>
                    <a className="text-primary hover:text-secondary font-medium flex items-center">
                      {t('common.details')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href={institutionId ? `/institutions/${institutionId}/programs` : "/programs"}>
            <a className="btn-primary">
              {t('programs.browseAll', {count: filteredPrograms.length})}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
