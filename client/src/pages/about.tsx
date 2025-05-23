import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  
  // Extract the tab parameter from URL
  const params = new URLSearchParams(location.split('?')[1]);
  const activeTab = params.get('tab') || 'mission';
  
  return (
    <MainLayout
      title={`${t('about.pageTitle')} | AHEU`}
      description={t('about.pageDescription')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
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
                <Tabs value={activeTab} defaultValue="mission">
                  <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                    <TabsTrigger 
                      value="mission" 
                      onClick={() => window.history.pushState({}, '', '/about')}
                    >
                      {t('about.tabs.mission')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history" 
                      onClick={() => window.history.pushState({}, '', '/about?tab=history')}
                    >
                      {t('about.tabs.history')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="leadership" 
                      onClick={() => window.history.pushState({}, '', '/about?tab=leadership')}
                    >
                      {t('about.tabs.leadership')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="accreditation" 
                      onClick={() => window.history.pushState({}, '', '/about?tab=accreditation')}
                    >
                      {t('about.tabs.accreditation')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="rankings" 
                      onClick={() => window.history.pushState({}, '', '/about?tab=rankings')}
                    >
                      {t('about.tabs.rankings')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="infrastructure" 
                      onClick={() => window.history.pushState({}, '', '/about?tab=infrastructure')}
                    >
                      {t('about.tabs.infrastructure')}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="mission" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.mission.title')}</h2>
                        <p className="mb-4">{t('about.mission.content1')}</p>
                        <p className="mb-4">{t('about.mission.content2')}</p>
                        
                        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">{t('about.vision.title')}</h3>
                        <p>{t('about.vision.content')}</p>
                        
                        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">{t('about.values.title')}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{t('about.values.items.excellence')}</li>
                          <li>{t('about.values.items.integrity')}</li>
                          <li>{t('about.values.items.innovation')}</li>
                          <li>{t('about.values.items.diversity')}</li>
                          <li>{t('about.values.items.sustainability')}</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="history" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.history.title')}</h2>
                        <p className="mb-4">{t('about.history.content1')}</p>
                        <p className="mb-4">{t('about.history.content2')}</p>
                        
                        <div className="mt-6 grid md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-2">1995</div>
                            <p className="text-sm">{t('about.history.timeline.founding')}</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-2">2003</div>
                            <p className="text-sm">{t('about.history.timeline.expansion')}</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-2">2010</div>
                            <p className="text-sm">{t('about.history.timeline.international')}</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-2">2018</div>
                            <p className="text-sm">{t('about.history.timeline.restructuring')}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="leadership" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.leadership.title')}</h2>
                        <p className="mb-6">{t('about.leadership.intro')}</p>
                        
                        <div className="space-y-6">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/4 bg-aheu-neutral-light h-48 rounded-lg flex items-center justify-center">
                              <i className="fas fa-user-tie text-5xl text-aheu-neutral-dark"></i>
                            </div>
                            <div className="md:w-3/4">
                              <h3 className="text-xl font-bold">{t('about.leadership.rector.name')}</h3>
                              <p className="text-sm text-aheu-neutral-dark mb-2">{t('about.leadership.rector.title')}</p>
                              <p>{t('about.leadership.rector.bio')}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/4 bg-aheu-neutral-light h-48 rounded-lg flex items-center justify-center">
                              <i className="fas fa-user-tie text-5xl text-aheu-neutral-dark"></i>
                            </div>
                            <div className="md:w-3/4">
                              <h3 className="text-xl font-bold">{t('about.leadership.viceRector.name')}</h3>
                              <p className="text-sm text-aheu-neutral-dark mb-2">{t('about.leadership.viceRector.title')}</p>
                              <p>{t('about.leadership.viceRector.bio')}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="accreditation" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.accreditation.title')}</h2>
                        <p className="mb-4">{t('about.accreditation.content1')}</p>
                        <p className="mb-6">{t('about.accreditation.content2')}</p>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-aheu-neutral-light p-4 rounded-lg text-center">
                            <div className="text-xl font-bold text-primary mb-2">IAAR</div>
                            <p className="text-sm">{t('about.accreditation.bodies.iaar')}</p>
                          </div>
                          <div className="bg-aheu-neutral-light p-4 rounded-lg text-center">
                            <div className="text-xl font-bold text-primary mb-2">IQAA</div>
                            <p className="text-sm">{t('about.accreditation.bodies.iqaa')}</p>
                          </div>
                          <div className="bg-aheu-neutral-light p-4 rounded-lg text-center">
                            <div className="text-xl font-bold text-primary mb-2">{t('about.accreditation.bodies.ministry')}</div>
                            <p className="text-sm">{t('about.accreditation.bodies.ministryDesc')}</p>
                          </div>
                        </div>
                        
                        <p className="font-medium">{t('about.accreditation.licenseNumber')}: KZ76LAA00018466</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="rankings" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.rankings.title')}</h2>
                        <p className="mb-6">{t('about.rankings.content')}</p>
                        
                        <div className="space-y-4">
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2">{t('about.rankings.items.national.title')}</h3>
                            <p>{t('about.rankings.items.national.description')}</p>
                          </div>
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2">{t('about.rankings.items.qsRanking.title')}</h3>
                            <p>{t('about.rankings.items.qsRanking.description')}</p>
                          </div>
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2">{t('about.rankings.items.programRankings.title')}</h3>
                            <p>{t('about.rankings.items.programRankings.description')}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="infrastructure" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.infrastructure.title', 'Campus Infrastructure')}</h2>
                        <p className="mb-6">{t('about.infrastructure.content', 'Our modern campus provides state-of-the-art facilities to support academic excellence and student life.')}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2 flex items-center">
                              <i className="fas fa-microscope mr-2 text-primary"></i>
                              {t('about.infrastructure.labs', 'Research Laboratories')}
                            </h3>
                            <p className="text-sm">{t('about.infrastructure.labsDesc', 'Modern laboratories equipped with cutting-edge technology for research and practical learning.')}</p>
                          </div>
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2 flex items-center">
                              <i className="fas fa-book mr-2 text-primary"></i>
                              {t('about.infrastructure.library', 'Digital Library')}
                            </h3>
                            <p className="text-sm">{t('about.infrastructure.libraryDesc', 'Comprehensive digital and physical library with over 100,000 resources.')}</p>
                          </div>
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2 flex items-center">
                              <i className="fas fa-wifi mr-2 text-primary"></i>
                              {t('about.infrastructure.campus', 'Smart Campus')}
                            </h3>
                            <p className="text-sm">{t('about.infrastructure.campusDesc', 'Campus-wide WiFi, smart classrooms, and digital learning platforms.')}</p>
                          </div>
                          <div className="border border-aheu-neutral-medium rounded-lg p-4">
                            <h3 className="font-bold mb-2 flex items-center">
                              <i className="fas fa-dumbbell mr-2 text-primary"></i>
                              {t('about.infrastructure.sports', 'Sports Facilities')}
                            </h3>
                            <p className="text-sm">{t('about.infrastructure.sportsDesc', 'Modern gymnasium, sports courts, and fitness facilities for student wellness.')}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Learn More About AHEU</h3>
                  <p className="text-gray-700 mb-4">
                    Explore our campus, programs, and discover what makes AHEU University a leading institution in Kazakhstan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/about/virtual-tour" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Take Virtual Tour
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

export default About;
