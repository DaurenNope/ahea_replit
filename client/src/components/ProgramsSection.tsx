import React, { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { programs } from '@/data/programs';
import SectionTitle from '@/components/ui/section-title';

type ProgramLevel = 'all' | 'bachelor' | 'master' | 'phd';

const ProgramsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeLevel, setActiveLevel] = useState<ProgramLevel>('all');
  
  const filteredPrograms = activeLevel === 'all' 
    ? programs.slice(0, 6) 
    : programs.filter(program => program.level === activeLevel).slice(0, 6);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={t('programs.sectionTitle')} 
          subtitle={t('programs.sectionSubtitle')}
        />
        
        {/* Program Filter Tabs */}
        <div className="flex flex-wrap justify-center space-x-2 mb-8">
          <button 
            className={`px-5 py-2 rounded-full ${activeLevel === 'all' 
              ? 'bg-primary text-white' 
              : 'text-aheu-neutral-darker hover:bg-aheu-neutral-light'}`}
            onClick={() => setActiveLevel('all')}
          >
            {t('programs.all')}
          </button>
          <button 
            className={`px-5 py-2 rounded-full ${activeLevel === 'bachelor' 
              ? 'bg-primary text-white' 
              : 'text-aheu-neutral-darker hover:bg-aheu-neutral-light'}`}
            onClick={() => setActiveLevel('bachelor')}
          >
            {t('programs.bachelor')}
          </button>
          <button 
            className={`px-5 py-2 rounded-full ${activeLevel === 'master' 
              ? 'bg-primary text-white' 
              : 'text-aheu-neutral-darker hover:bg-aheu-neutral-light'}`}
            onClick={() => setActiveLevel('master')}
          >
            {t('programs.master')}
          </button>
          <button 
            className={`px-5 py-2 rounded-full ${activeLevel === 'phd' 
              ? 'bg-primary text-white' 
              : 'text-aheu-neutral-darker hover:bg-aheu-neutral-light'}`}
            onClick={() => setActiveLevel('phd')}
          >
            {t('programs.phd')}
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="border border-aheu-neutral-medium rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-aheu-neutral-darker">
                    {t(`programs.items.${program.id}.title`)}
                  </h3>
                  <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">
                    {t(`programs.${program.level}`)}
                  </span>
                </div>
                <p className="text-sm text-aheu-neutral-dark mb-4">
                  {t(`programs.items.${program.id}.description`)}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-aheu-neutral-dark">{t(`institutes.${program.institute}.name`)}</span>
                  <Link href={`/programs/${program.id}`}>
                    <a className="text-primary">{t('common.details')}</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/programs">
            <a className="btn-primary">{t('programs.browseAll', { count: programs.length })}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
