import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/programs';
import { institutes } from '@/data/institutes';
import { Link, useLocation } from 'wouter';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
  
  // Update filters when URL changes
  React.useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const level = (params.get('level') as ProgramLevel) || 'all';
    const institute = params.get('institute') || 'all';
    
    setActiveLevel(level);
    setActiveInstitute(institute);
  }, [location]);
  
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
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-secondary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('programs.hero.title')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('programs.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
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
                      <select
                        id="level-filter"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        value={activeLevel} 
                        onChange={(e) => setActiveLevel(e.target.value as ProgramLevel)}
                      >
                        <option value="all">{t('programs.all')}</option>
                        <option value="bachelor">{t('programs.bachelor')}</option>
                        <option value="master">{t('programs.master')}</option>
                        <option value="phd">{t('programs.phd')}</option>
                      </select>
                    </div>
                    
                    {/* Institute Filter */}
                    <div>
                      <Label htmlFor="institute-filter" className="mb-2 block">
                        {t('programs.filterByInstitute')}
                      </Label>
                      <select
                        id="institute-filter"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        value={activeInstitute} 
                        onChange={(e) => setActiveInstitute(e.target.value)}
                      >
                        <option value="all">{t('programs.allInstitutes')}</option>
                          {institutes.map((institute) => (
                          <option key={institute.id} value={institute.id}>
                              {t(`institutes.${institute.id}.shortName`)}
                          </option>
                          ))}
                      </select>
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

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help Choosing a Program?</h3>
                  <p className="text-gray-700 mb-4">
                    Our academic advisors are here to help you find the perfect program to achieve your educational and career goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Contact Advisor
                    </Link>
                    <Link 
                      href="/apply" 
                      className="inline-block border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors text-center"
                    >
                      Start Application
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

export default Programs;
