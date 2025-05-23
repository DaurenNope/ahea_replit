import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admissions = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  
  // Extract the tab parameter from URL
  const params = new URLSearchParams(location.split('?')[1]);
  const activeTab = params.get('tab') || 'overview';
  
  return (
    <MainLayout
      title={`${t('admissions.pageTitle')} | AHEU`}
      description={t('admissions.pageDescription')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-secondary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('admissions.hero.title')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('admissions.hero.subtitle')}
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
                  <h2 className="section-title">{t('admissions.whyChoose.title')}</h2>
                  <p className="section-subtitle">{t('admissions.whyChoose.subtitle')}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-university text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{t('admissions.whyChoose.reasons.quality.title')}</h3>
                    <p className="text-aheu-neutral-dark text-center">{t('admissions.whyChoose.reasons.quality.description')}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-flask text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{t('admissions.whyChoose.reasons.research.title')}</h3>
                    <p className="text-aheu-neutral-dark text-center">{t('admissions.whyChoose.reasons.research.description')}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-globe-americas text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{t('admissions.whyChoose.reasons.global.title')}</h3>
                    <p className="text-aheu-neutral-dark text-center">{t('admissions.whyChoose.reasons.global.description')}</p>
                  </div>
                </div>
                
                <div className="text-center mb-12">
                  <h2 className="section-title">{t('admissions.howToApply.title')}</h2>
                  <p className="section-subtitle">{t('admissions.howToApply.subtitle')}</p>
                </div>
                
                <Tabs value={activeTab === 'overview' ? 'undergraduate' : activeTab} defaultValue="undergraduate">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger 
                      value="undergraduate" 
                      onClick={() => window.history.pushState({}, '', '/admissions?tab=undergraduate')}
                    >
                      {t('admissions.howToApply.tabs.undergraduate')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="graduate" 
                      onClick={() => window.history.pushState({}, '', '/admissions?tab=graduate')}
                    >
                      {t('admissions.howToApply.tabs.graduate')}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="international" 
                      onClick={() => window.history.pushState({}, '', '/admissions?tab=international')}
                    >
                      {t('admissions.howToApply.tabs.international')}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="undergraduate" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-primary">{t('admissions.howToApply.undergraduate.title')}</h3>
                        <p className="mb-6">{t('admissions.howToApply.undergraduate.intro')}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">1</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.undergraduate.steps.step1.title')}</h4>
                              <p>{t('admissions.howToApply.undergraduate.steps.step1.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">2</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.undergraduate.steps.step2.title')}</h4>
                              <p>{t('admissions.howToApply.undergraduate.steps.step2.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">3</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.undergraduate.steps.step3.title')}</h4>
                              <p>{t('admissions.howToApply.undergraduate.steps.step3.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">4</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.undergraduate.steps.step4.title')}</h4>
                              <p>{t('admissions.howToApply.undergraduate.steps.step4.description')}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <Link href="/apply" className="btn-primary">
                            {t('admissions.howToApply.applyButton')}
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="graduate" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-primary">{t('admissions.howToApply.graduate.title')}</h3>
                        <p className="mb-6">{t('admissions.howToApply.graduate.intro')}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">1</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.graduate.steps.step1.title')}</h4>
                              <p>{t('admissions.howToApply.graduate.steps.step1.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">2</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.graduate.steps.step2.title')}</h4>
                              <p>{t('admissions.howToApply.graduate.steps.step2.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">3</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.graduate.steps.step3.title')}</h4>
                              <p>{t('admissions.howToApply.graduate.steps.step3.description')}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <Link href="/apply" className="btn-primary">
                            {t('admissions.howToApply.applyButton')}
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="international" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-primary">{t('admissions.howToApply.international.title')}</h3>
                        <p className="mb-6">{t('admissions.howToApply.international.intro')}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">1</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.international.steps.step1.title')}</h4>
                              <p>{t('admissions.howToApply.international.steps.step1.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">2</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.international.steps.step2.title')}</h4>
                              <p>{t('admissions.howToApply.international.steps.step2.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">3</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.international.steps.step3.title')}</h4>
                              <p>{t('admissions.howToApply.international.steps.step3.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">4</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.international.steps.step4.title')}</h4>
                              <p>{t('admissions.howToApply.international.steps.step4.description')}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">5</div>
                            <div>
                              <h4 className="font-bold mb-1">{t('admissions.howToApply.international.steps.step5.title')}</h4>
                              <p>{t('admissions.howToApply.international.steps.step5.description')}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <Link href="/apply" className="btn-primary">
                            {t('admissions.howToApply.applyButton')}
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help with Your Application?</h3>
                  <p className="text-gray-700 mb-4">
                    Our admissions team is here to help you through every step of the application process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/apply" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Apply Now
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-block border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors text-center"
                    >
                      Contact Admissions
                    </Link>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Admissions Office:</strong> <br />
                      Email: admissions@ageu.edu.kz <br />
                      Phone: +7 (727) 309-58-29
                    </p>
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

export default Admissions;
