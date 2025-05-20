import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Ultra-bare-bones home page for maximum performance
 * No component imports, no React Router, just pure HTML
 */
const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
      {/* Ultra minimal header */}
      <header style={{ marginBottom: '24px', borderBottom: '1px solid #ddd', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2e7d32' }}>AHEU</h1>
      </header>
      
      <main>
        {/* Hero section */}
        <section style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>
            {t('home.hero.title')}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px' }}>
            {t('home.hero.subtitle')}
          </p>
          <div>
            <a 
              href="/admissions" 
              style={{ 
                backgroundColor: '#2e7d32', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '4px', 
                textDecoration: 'none',
                fontWeight: 'bold',
                marginRight: '16px'
              }}
            >
              {t('home.hero.primaryButton')}
            </a>
            <a 
              href="/programs" 
              style={{ 
                borderWidth: '1px', 
                borderStyle: 'solid',
                borderColor: '#2e7d32',
                color: '#2e7d32', 
                padding: '8px 16px', 
                borderRadius: '4px', 
                textDecoration: 'none',
                fontWeight: 'bold' 
              }}
            >
              {t('home.hero.secondaryButton')}
            </a>
          </div>
        </section>
        
        {/* Institutions as simple text links */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
            Our Institutions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2e7d32', marginBottom: '8px' }}>
                Pedagogy, Business &amp; Law
              </h3>
              <p style={{ marginBottom: '16px' }}>Training specialists in education, business management and legal research.</p>
              <a href="/institutes/pedagogy" style={{ color: '#2e7d32' }}>Learn more</a>
            </div>
            
            <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1565c0', marginBottom: '8px' }}>
                Economics, Statistics &amp; IT
              </h3>
              <p style={{ marginBottom: '16px' }}>Development of professionals in economics, statistics and IT.</p>
              <a href="/institutes/economics" style={{ color: '#1565c0' }}>Learn more</a>
            </div>
            
            <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#6a1b9a', marginBottom: '8px' }}>
                Design &amp; Technology
              </h3>
              <p style={{ marginBottom: '16px' }}>Development of creativity and innovation in design and technologies.</p>
              <a href="/institutes/symbat" style={{ color: '#6a1b9a' }}>Learn more</a>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section style={{ textAlign: 'center', padding: '16px', marginBottom: '32px', backgroundColor: '#f5f5f5' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            {t('home.callToAction.title')}
          </h2>
          <p style={{ marginBottom: '16px' }}>{t('home.callToAction.description')}</p>
          <a 
            href="/admissions" 
            style={{ 
              backgroundColor: '#2e7d32', 
              color: 'white', 
              padding: '8px 16px', 
              borderRadius: '4px', 
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            {t('home.callToAction.primaryButton')}
          </a>
        </section>
      </main>
      
      {/* Ultra minimal footer */}
      <footer style={{ borderTop: '1px solid #ddd', paddingTop: '16px' }}>
        <p>© 2023 Almaty Humanitarian Economic University</p>
      </footer>
    </div>
  );
};

export default Home;
