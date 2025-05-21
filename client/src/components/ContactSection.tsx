import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/ui/section-title';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-aheu-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={t('contact.sectionTitle')} 
          subtitle={t('contact.sectionSubtitle')}
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">{t('contact.info.title')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('contact.info.address.title')}</h4>
                  <p className="text-aheu-neutral-dark">
                    36, Aksay-3 microdistrict, 050031<br/>
                    {t('contact.info.address.city')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('contact.info.phone.title')}</h4>
                  <p className="text-aheu-neutral-dark">
                    <a href="tel:+77273033273" className="hover:text-primary">+7 (727) 303-32-73</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('contact.info.email.title')}</h4>
                  <p className="text-aheu-neutral-dark">
                    <a href="mailto:info@aheu.edu.kz" className="hover:text-primary">info@aheu.edu.kz</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">{t('contact.form.title')}</h3>
            
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full rounded-md border border-aheu-neutral-medium p-2" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full rounded-md border border-aheu-neutral-medium p-2" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full rounded-md border border-aheu-neutral-medium p-2"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">{t('contact.form.submit')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
