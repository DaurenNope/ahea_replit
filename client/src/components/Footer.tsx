import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About AHEU */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.aboutAheu')}</h3>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="hover:underline">{t('footer.missionVision')}</a></Link></li>
              <li><Link href="/about/history"><a className="hover:underline">{t('footer.historyHeritage')}</a></Link></li>
              <li><Link href="/about/leadership"><a className="hover:underline">{t('footer.leadership')}</a></Link></li>
              <li><Link href="/about/accreditation"><a className="hover:underline">{t('footer.accreditation')}</a></Link></li>
              <li><Link href="/about/rankings"><a className="hover:underline">{t('footer.rankings')}</a></Link></li>
              <li><Link href="/about/facilities"><a className="hover:underline">{t('footer.campusFacilities')}</a></Link></li>
              <li><Link href="/contact"><a className="hover:underline">{t('footer.contactUs')}</a></Link></li>
            </ul>
          </div>
          
          {/* Academics */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.academics')}</h3>
            <ul className="space-y-3">
              <li><Link href="/institutes/pedagogy"><a className="hover:underline">{t('footer.pedagogyInstitute')}</a></Link></li>
              <li><Link href="/institutes/economics"><a className="hover:underline">{t('footer.economicsInstitute')}</a></Link></li>
              <li><Link href="/institutes/symbat"><a className="hover:underline">{t('footer.symbatInstitute')}</a></Link></li>
              <li><Link href="/programs?level=bachelor"><a className="hover:underline">{t('footer.bachelorPrograms')}</a></Link></li>
              <li><Link href="/programs?level=master"><a className="hover:underline">{t('footer.masterPrograms')}</a></Link></li>
              <li><Link href="/programs?level=phd"><a className="hover:underline">{t('footer.phdPrograms')}</a></Link></li>
              <li><Link href="/academics/calendar"><a className="hover:underline">{t('footer.academicCalendar')}</a></Link></li>
            </ul>
          </div>
          
          {/* Student Life */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.studentLife')}</h3>
            <ul className="space-y-3">
              <li><Link href="/student-life"><a className="hover:underline">{t('footer.campusLife')}</a></Link></li>
              <li><Link href="/student-life/accommodation"><a className="hover:underline">{t('footer.accommodation')}</a></Link></li>
              <li><Link href="/student-life/sports"><a className="hover:underline">{t('footer.sportsRecreation')}</a></Link></li>
              <li><Link href="/student-life/clubs"><a className="hover:underline">{t('footer.clubsSocieties')}</a></Link></li>
              <li><Link href="/student-life/support"><a className="hover:underline">{t('footer.studentSupport')}</a></Link></li>
              <li><Link href="/student-life/career"><a className="hover:underline">{t('footer.careerServices')}</a></Link></li>
              <li><Link href="/student-life/library"><a className="hover:underline">{t('footer.library')}</a></Link></li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.connectWithUs')}</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            
            <h4 className="font-bold mb-3">{t('footer.address')}</h4>
            <p className="text-sm mb-4">36, Aksay-3 microdistrict, 050031<br/>{t('footer.almatyKazakhstan')}</p>
            
            <h4 className="font-bold mb-3">{t('footer.contact')}</h4>
            <p className="text-sm mb-1">{t('footer.phone')}: +7 (727) 303-32-73</p>
            <p className="text-sm">{t('footer.email')}: priem.ageu@mail.ru</p>
          </div>
        </div>
        
        <hr className="border-t border-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy"><a className="hover:underline">{t('footer.privacyPolicy')}</a></Link>
            <Link href="/terms"><a className="hover:underline">{t('footer.termsOfUse')}</a></Link>
            <Link href="/sitemap"><a className="hover:underline">{t('footer.sitemap')}</a></Link>
            <Link href="/accessibility"><a className="hover:underline">{t('footer.accessibility')}</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
