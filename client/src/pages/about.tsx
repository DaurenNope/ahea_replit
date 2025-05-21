import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import ModernHero from '@/components/ModernHero';
import CallToAction from '@/components/CallToAction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout
      title={`${t('about.pageTitle')} | AHEU`}
      description={t('about.pageDescription')}
    >
      <ModernHero 
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="mission">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="mission">{t('about.tabs.mission')}</TabsTrigger>
                <TabsTrigger value="history">{t('about.tabs.history')}</TabsTrigger>
                <TabsTrigger value="leadership">{t('about.tabs.leadership')}</TabsTrigger>
                <TabsTrigger value="accreditation">{t('about.tabs.accreditation')}</TabsTrigger>
                <TabsTrigger value="rankings">{t('about.tabs.rankings')}</TabsTrigger>
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
            </Tabs>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title={t('about.callToAction.title')}
        description={t('about.callToAction.description')}
        primaryButtonText={t('about.callToAction.primaryButton')}
        secondaryButtonText={t('about.callToAction.secondaryButton')}
      />
    </MainLayout>
  );
};

export default About;
