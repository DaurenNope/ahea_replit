import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aheu-neutral-darker text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.aboutAheu')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('footer.missionVision')}</Link></li>
              <li><Link href="/about?tab=history" className="hover:text-primary transition-colors">{t('footer.historyHeritage')}</Link></li>
              <li><Link href="/about?tab=leadership" className="hover:text-primary transition-colors">{t('footer.leadership')}</Link></li>
              <li><Link href="/about?tab=rankings" className="hover:text-primary transition-colors">{t('footer.rankings')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('footer.contactUs')}</Link></li>
            </ul>
          </div>
          
          {/* Column 2: Academics */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.academics')}</h3>
            <ul className="space-y-2">
              <li><Link href="/institutes/pedagogy" className="hover:text-primary transition-colors">{t('footer.pedagogyInstitute')}</Link></li>
              <li><Link href="/institutes/economics" className="hover:text-primary transition-colors">{t('footer.economicsInstitute')}</Link></li>
              <li><Link href="/institutes/symbat" className="hover:text-primary transition-colors">{t('footer.symbatInstitute')}</Link></li>
              <li><Link href="/college" className="hover:text-primary transition-colors">{t('nav.college')}</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Student Life */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.studentLife')}</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.connectWithUs')}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-300">{t('footer.address')}</p>
                <p>Almaty, Kazakhstan</p>
              </div>
              <div>
                <p className="font-medium text-gray-300">{t('footer.email')}</p>
                <p>info@aheu.edu.kz</p>
              </div>
              <div>
                <p className="font-medium text-gray-300">{t('footer.phone')}</p>
                <p>+7 (727) 123-45-67</p>
              </div>
              <div className="flex space-x-4 text-xl">
                <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-youtube"></i></a>
                <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{t('footer.termsOfUse')}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{t('footer.sitemap')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
