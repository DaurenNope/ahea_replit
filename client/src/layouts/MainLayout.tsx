import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Simplified MainLayout that's more performance-focused
interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  minimal?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'AHEU - Almaty Humanitarian Economic University',
  description = 'Leading educational institution in Kazakhstan offering diverse academic programs through three specialized institutes.',
  minimal = false
}) => {
  const { i18n } = useTranslation();
  const htmlLang = i18n.language || 'en';
  
  // For extremely slow devices, we can render an even more minimal version
  if (minimal) {
    return (
      <>
        <Helmet>
          <html lang={htmlLang} />
          <title>{title}</title>
        </Helmet>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="text-2xl font-bold text-primary">AHEU</div>
          </div>
        </header>
        <main>{children}</main>
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
