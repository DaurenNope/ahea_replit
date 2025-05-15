import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'AHEU - Almaty Humanitarian Economic University',
  description = 'Leading educational institution in Kazakhstan offering diverse academic programs through three specialized institutes.'
}) => {
  const { t, i18n } = useTranslation();
  
  // Determine the HTML lang attribute based on current language
  const htmlLang = i18n.language || 'en';
  
  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aheu.edu.kz" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
