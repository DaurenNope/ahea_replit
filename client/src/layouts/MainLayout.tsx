import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  preloadImages?: string[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'AHEU - Almaty Humanitarian Economic University',
  description = 'Leading educational institution in Kazakhstan offering diverse academic programs through three specialized institutes.',
  preloadImages = []
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
        
        {/* Performance optimization hints */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Preload critical images */}
        {preloadImages.map((img, index) => (
          <link key={index} rel="preload" as="image" href={img} />
        ))}
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
