import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  hasTransparentHeader?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'AHEU - Almaty Humanitarian Economic University',
  description = 'Leading educational institution in Kazakhstan offering diverse academic programs through three specialized institutes.',
  hasTransparentHeader = false
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#1E293B" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className={`flex-grow ${hasTransparentHeader ? '' : 'pt-20'}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
