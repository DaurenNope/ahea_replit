import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { programs } from '@/data/programs';
import { institutes } from '@/data/institutes';
import { Link, useLocation } from 'wouter';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type ProgramLevel = 'all' | 'bachelor' | 'master' | 'phd';
type InstituteId = 'all' | string;

const Programs: React.FC = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  
  // Extract filters from URL if present
  const params = new URLSearchParams(location.split('?')[1]);
  const initialLevel = (params.get('level') as ProgramLevel) || 'all';
  const initialInstitute = params.get('institute') || 'all';
  
  const [activeLevel, setActiveLevel] = useState<ProgramLevel>(initialLevel);
  const [activeInstitute, setActiveInstitute] = useState<InstituteId>(initialInstitute);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Filter programs based on selected filters
  const filteredPrograms = programs.filter(program => {
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesInstitute = activeInstitute === 'all' || program.institute === activeInstitute;
    const matchesSearch = searchTerm === '' || 
      t(`programs.items.${program.id}.title`).toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesInstitute && matchesSearch;
  });
  
  return (
    <MainLayout
      title={`${t('programs.pageTitle')} | AHEU`}
      description={t('programs.pageDescription')}
    >
      <Hero 
        backgroundImage="photo-1523580846011-d3a5bc25702b"
        title={t('programs.hero.title')}
        subtitle={t('programs.hero.subtitle')}
        showInstituteCards={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('programs.catalogTitle')}</h2>
            <p className="section-subtitle">{t('programs.catalogSubtitle')}</p>
          </div>
          
          {/* Filters */}
          <div className="max-w-5xl mx-auto bg-aheu-neutral-light p-6 rounded-lg mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <Label htmlFor="search" className="mb-2 block">
                  {t('programs.search')}
                </Label>
                <Input
                  id="search"
                  placeholder={t('programs.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Level Filter */}
              <div>
                <Label htmlFor="level-filter" className="mb-2 block">
                  {t('programs.filterByLevel')}
                </Label>
                <Select 
                  value={activeLevel} 
                  onValueChange={(value) => setActiveLevel(value as ProgramLevel)}
                >
                  <SelectTrigger id="level-filter">
                    <SelectValue placeholder={t('programs.selectLevel')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('programs.all')}</SelectItem>
                    <SelectItem value="bachelor">{t('programs.bachelor')}</SelectItem>
                    <SelectItem value="master">{t('programs.master')}</SelectItem>
                    <SelectItem value="phd">{t('programs.phd')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Institute Filter */}
              <div>
                <Label htmlFor="institute-filter" className="mb-2 block">
                  {t('programs.filterByInstitute')}
                </Label>
                <Select 
                  value={activeInstitute} 
                  onValueChange={(value) => setActiveInstitute(value)}
                >
                  <SelectTrigger id="institute-filter">
                    <SelectValue placeholder={t('programs.selectInstitute')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('programs.allInstitutes')}</SelectItem>
                    {institutes.map((institute) => (
                      <SelectItem key={institute.id} value={institute.id}>
                        {t(`institutes.${institute.id}.shortName`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Results count */}
            <div className="mt-6 text-right text-sm text-aheu-neutral-dark">
              {t('programs.showingResults', { count: filteredPrograms.length })}
            </div>
          </div>
          
          {/* Programs List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
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
                      <span className="text-aheu-neutral-dark">{t(`institutes.${program.institute}.shortName`)}</span>
                      <Link href={`/programs/${program.id}`}>
                        <a className="text-primary hover:text-secondary">{t('common.details')}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <div className="text-4xl mb-4"><i className="fas fa-search"></i></div>
                <h3 className="text-xl font-bold mb-2">{t('programs.noResults.title')}</h3>
                <p className="text-aheu-neutral-dark">{t('programs.noResults.message')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Programs;
