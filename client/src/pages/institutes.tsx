import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import ModernHero from '@/components/ModernHero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { institutes } from '@/data/institutes';
import { programs } from '@/data/programs';
import { Link } from 'wouter';
import CallToAction from '@/components/CallToAction';

const Institutes: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout
      title={`${t('institutes.pageTitle')} | AHEU`}
      description={t('institutes.pageDescription')}
    >
      <ModernHero 
        title={t('institutes.hero.title')}
        subtitle={t('institutes.hero.subtitle')}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('institutes.sectionTitle')}</h2>
            <p className="section-subtitle">{t('institutes.sectionSubtitle')}</p>
          </div>
          
          <Tabs defaultValue={institutes[0].id}>
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              {institutes.map((institute) => (
                <TabsTrigger key={institute.id} value={institute.id} className="text-sm md:text-base">
                  {t(`institutes.${institute.id}.name`)}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {institutes.map((institute) => (
              <TabsContent key={institute.id} value={institute.id} className="mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <img 
                      src={`https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`} 
                      alt={t(`institutes.${institute.id}.imageAlt`)}
                      className="w-full h-auto rounded-lg shadow-md mb-6" 
                    />
                    
                    <div className="bg-primary text-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">{t('institutes.quickFacts')}</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <i className="fas fa-graduation-cap mt-1"></i>
                          <span>
                            <strong>{t('institutes.programsOffered')}:</strong> {institute.programCount}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-users mt-1"></i>
                          <span>
                            <strong>{t('institutes.students')}:</strong> {institute.studentCount}+
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-chalkboard-teacher mt-1"></i>
                          <span>
                            <strong>{t('institutes.faculty')}:</strong> {institute.facultyCount}+
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-calendar-alt mt-1"></i>
                          <span>
                            <strong>{t('institutes.established')}:</strong> {institute.established}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-4">{t(`institutes.${institute.id}.name`)}</h3>
                    <div className="space-y-4 mb-8">
                      <p>{t(`institutes.${institute.id}.description1`)}</p>
                      <p>{t(`institutes.${institute.id}.description2`)}</p>
                    </div>
                    
                    <h4 className="text-xl font-bold text-primary mb-4">{t('institutes.keyFocusAreas')}</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-8">
                      {[1, 2, 3, 4, 5].map((num) => {
                        const key = `institutes.${institute.id}.focusAreas.area${num}`;
                        return t(key) !== key ? <li key={num}>{t(key)}</li> : null;
                      })}
                    </ul>
                    
                    <h4 className="text-xl font-bold text-primary mb-4">{t('institutes.programs')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {programs
                        .filter(program => program.institute === institute.id)
                        .slice(0, 6)
                        .map(program => (
                          <div key={program.id} className="border border-aheu-neutral-medium rounded-lg p-4 hover:shadow-md transition">
                            <div className="flex justify-between items-start gap-2">
                              <h5 className="font-semibold">{t(`programs.items.${program.id}.title`)}</h5>
                              <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">
                                {t(`programs.${program.level}`)}
                              </span>
                            </div>
                            <Link href={`/programs/${program.id}`}>
                              <a className="text-primary hover:text-secondary text-sm mt-2 inline-block">{t('common.details')}</a>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                    
                    <div className="flex justify-center">
                      <Link href={`/institutes/${institute.id}/programs`}>
                        <a className="btn-primary">{t('institutes.viewAllPrograms')}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      <CallToAction 
        title={t('institutes.callToAction.title')}
        description={t('institutes.callToAction.description')}
        primaryButtonText={t('institutes.callToAction.primaryButton')}
        secondaryButtonText={t('institutes.callToAction.secondaryButton')}
        primaryButtonLink="/programs"
      />
    </MainLayout>
  );
};

export default Institutes;
