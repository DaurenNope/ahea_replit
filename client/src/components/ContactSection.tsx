import React from 'react';
import { useTranslation } from 'react-i18next';
import { institutes } from '@/data/institutes';

interface ContactSectionProps {
  institutionId?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ institutionId }) => {
  const { t } = useTranslation();
  
  // Get institution-specific contact info if available
  const institution = institutionId 
    ? institutes.find(inst => inst.id === institutionId)
    : null;
  
  return (
    <section className="py-16 bg-aheu-neutral-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {institutionId
                ? t(`institutes.${institutionId}.contactTitle`, t('contact.sectionTitle'))
                : t('contact.sectionTitle')}
            </h2>
            <p className="mb-8">
              {institutionId
                ? t(`institutes.${institutionId}.contactSubtitle`, t('contact.sectionSubtitle'))
                : t('contact.sectionSubtitle')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact.address.title')}</h3>
                  <address className="not-italic">
                    <p>{t('contact.address.street')}</p>
                    <p>{t('contact.address.city')}, {t('contact.address.postalCode')}</p>
                    <p>{t('contact.address.country')}</p>
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact.phone')}</h3>
                  <p>{institution?.phone || '+7 (727) 279-95-69'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact.email')}</h3>
                  <p>{institution?.email || 'info@aheu.edu.kz'}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white p-6 rounded-lg shadow-lg text-aheu-neutral-darker">
              <h3 className="text-2xl font-bold mb-6 text-aheu-neutral-darker">{t('contact.formTitle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-aheu-neutral-medium rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-aheu-neutral-medium rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('contact.form.subject')}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-aheu-neutral-medium rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-aheu-neutral-medium rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
