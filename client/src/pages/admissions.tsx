import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/MainLayout';
import ModernHero from '@/components/ModernHero';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from '@/components/CallToAction';

const Admissions = () => {
  const { t } = useTranslation();
  
  return (
    <MainLayout
      title={`${t('admissions.pageTitle')} | AHEU`}
      description={t('admissions.pageDescription')}
    >
      <ModernHero 
        title={t('admissions.hero.title')}
        subtitle={t('admissions.hero.subtitle')}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('admissions.whyChoose.title')}</h2>
            <p className="section-subtitle">{t('admissions.whyChoose.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>
      
      <section className="py-16 bg-aheu-neutral-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('admissions.howToApply.title')}</h2>
            <p className="section-subtitle">{t('admissions.howToApply.subtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="undergraduate">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="undergraduate">{t('admissions.howToApply.tabs.undergraduate')}</TabsTrigger>
                <TabsTrigger value="graduate">{t('admissions.howToApply.tabs.graduate')}</TabsTrigger>
                <TabsTrigger value="international">{t('admissions.howToApply.tabs.international')}</TabsTrigger>
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
                      <button className="btn-primary">{t('admissions.howToApply.applyButton')}</button>
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
                      <button className="btn-primary">{t('admissions.howToApply.applyButton')}</button>
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
                      <button className="btn-primary">{t('admissions.howToApply.applyButton')}</button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('admissions.faq.title')}</h2>
            <p className="section-subtitle">{t('admissions.faq.subtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden border-aheu-neutral-medium px-6">
                <AccordionTrigger className="text-lg font-medium">{t('admissions.faq.questions.q1')}</AccordionTrigger>
                <AccordionContent className="text-aheu-neutral-dark">
                  {t('admissions.faq.answers.a1')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden border-aheu-neutral-medium px-6">
                <AccordionTrigger className="text-lg font-medium">{t('admissions.faq.questions.q2')}</AccordionTrigger>
                <AccordionContent className="text-aheu-neutral-dark">
                  {t('admissions.faq.answers.a2')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden border-aheu-neutral-medium px-6">
                <AccordionTrigger className="text-lg font-medium">{t('admissions.faq.questions.q3')}</AccordionTrigger>
                <AccordionContent className="text-aheu-neutral-dark">
                  {t('admissions.faq.answers.a3')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden border-aheu-neutral-medium px-6">
                <AccordionTrigger className="text-lg font-medium">{t('admissions.faq.questions.q4')}</AccordionTrigger>
                <AccordionContent className="text-aheu-neutral-dark">
                  {t('admissions.faq.answers.a4')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg overflow-hidden border-aheu-neutral-medium px-6">
                <AccordionTrigger className="text-lg font-medium">{t('admissions.faq.questions.q5')}</AccordionTrigger>
                <AccordionContent className="text-aheu-neutral-dark">
                  {t('admissions.faq.answers.a5')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title={t('admissions.callToAction.title')}
        description={t('admissions.callToAction.description')}
        primaryButtonText={t('admissions.callToAction.primaryButton')}
        secondaryButtonText={t('admissions.callToAction.secondaryButton')}
      />
    </MainLayout>
  );
};

export default Admissions;
