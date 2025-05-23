import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { institutes } from '@/data/institutes';
import { programs } from '@/data/programs';
import { Link } from 'wouter';

const Institutes: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout
      title={`${t('institutes.pageTitle')} | AHEU`}
      description={t('institutes.pageDescription')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('institutes.hero.title')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('institutes.hero.subtitle')}
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

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Explore Our Institutes</h3>
                  <p className="text-gray-700 mb-4">
                    Discover our specialized institutes and find the perfect program to advance your career and academic goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/programs" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      View All Programs
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

export default Institutes;
