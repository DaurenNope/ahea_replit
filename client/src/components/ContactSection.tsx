import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-aheu-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('contact.sectionTitle')}</h2>
          <p className="section-subtitle">{t('contact.sectionSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
            {/* Map would be inserted here in production with proper API */}
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <i className="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold mb-2">{t('contact.ourLocation')}</h3>
                <p className="text-aheu-neutral-dark">
                  36, Aksay-3 microdistrict, 050031<br/>
                  {t('contact.almatyKazakhstan')}
                </p>
                <div className="mt-4">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Almaty+Humanitarian+Economic+University" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-secondary font-medium"
                  >
                    {t('contact.openInGoogleMaps')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* General Inquiries */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-3">
                  <i className="fas fa-envelope text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('contact.generalInquiries')}</h3>
                <p className="text-aheu-neutral-dark mb-2">{t('contact.email')}: info@aheu.edu.kz</p>
                <p className="text-aheu-neutral-dark">{t('contact.phone')}: +7 (727) 303-32-73</p>
              </div>
              
              {/* Admissions */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-3">
                  <i className="fas fa-user-graduate text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('contact.admissions')}</h3>
                <p className="text-aheu-neutral-dark mb-2">{t('contact.email')}: priem.ageu@mail.ru</p>
                <p className="text-aheu-neutral-dark">{t('contact.phone')}: +7 (727) 303-32-73</p>
              </div>
              
              {/* International Office */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-3">
                  <i className="fas fa-globe text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('contact.internationalOffice')}</h3>
                <p className="text-aheu-neutral-dark mb-2">{t('contact.email')}: international@aheu.edu.kz</p>
                <p className="text-aheu-neutral-dark">{t('contact.phone')}: +7 (727) 303-32-70</p>
              </div>
              
              {/* Office Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-3">
                  <i className="fas fa-clock text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('contact.officeHours')}</h3>
                <p className="text-aheu-neutral-dark mb-2">{t('contact.mondayFriday')}</p>
                <p className="text-aheu-neutral-dark">{t('contact.workHours')}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/contact">
                <a className="btn-primary">{t('contact.contactForm')}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
