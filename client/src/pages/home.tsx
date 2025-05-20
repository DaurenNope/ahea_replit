import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Redesigned home page that matches the shared image design
 */
const Home: React.FC = () => {
  const { t } = useTranslation();
  
  // Remove any custom cursors when this page loads
  useEffect(() => {
    // Store original styles
    const originalCursor = document.body.style.cursor;
    const originalOverflow = document.body.style.overflow;
    
    // Reset cursor and remove any cursor-related elements
    document.body.style.cursor = 'default';
    
    // Remove any potential circle cursor elements
    const cursorElements = document.querySelectorAll('.cursor-circle, .cursor-dot, .custom-cursor');
    cursorElements.forEach(el => el.remove());
    
    // Restore original styles when component unmounts
    return () => {
      document.body.style.cursor = originalCursor;
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  
  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e2761 0%, #392f77 50%, #5a2d88 100%)',
      backgroundAttachment: 'fixed',
      cursor: 'default' // Ensure default cursor on this page
    }}>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 15px' }}>
        <h1 style={{ 
          color: 'white', 
          textAlign: 'center', 
          marginBottom: '50px',
          fontSize: '28px'
        }}>
          Choose your institute below
        </h1>
        
        {/* Card grid */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {/* Pedagogy Card */}
          <div style={{ 
            backgroundColor: 'rgba(17, 19, 31, 0.8)',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '320px',
            borderTop: '2px solid #2e7d32',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}>
            <div style={{ padding: '8px', textAlign: 'right' }}>
              <span style={{ 
                backgroundColor: '#2e7d32',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                Education & Law
              </span>
            </div>
            
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                border: '2px solid #2e7d32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#2e7d32', fontSize: '36px' }}>PDG</span>
              </div>
              
              <h3 style={{ 
                color: '#2e7d32', 
                fontSize: '22px',
                marginBottom: '24px'
              }}>
                Pedagogy, Business & Law
              </h3>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                marginBottom: '24px',
                color: 'white',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>14</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>Programs</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1200+</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>Students</div>
                </div>
              </div>
              
              <a href="/institutes/pedagogy" style={{ 
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '16px'
              }}>
                Visit Website →
              </a>
            </div>
          </div>
          
          {/* Economics Card */}
          <div style={{ 
            backgroundColor: 'rgba(17, 19, 31, 0.8)',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '320px',
            borderTop: '2px solid #1565c0',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}>
            <div style={{ padding: '8px', textAlign: 'right' }}>
              <span style={{ 
                backgroundColor: '#1565c0',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                Business & IT
              </span>
            </div>
            
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                backgroundColor: 'rgba(21, 101, 192, 0.1)',
                border: '2px solid #1565c0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(21, 101, 192, 0.3)'
              }}>
                <span style={{ color: '#1565c0', fontSize: '36px' }}>ECO</span>
              </div>
              
              <h3 style={{ 
                color: '#1565c0', 
                fontSize: '22px',
                marginBottom: '24px'
              }}>
                Economics, Statistics & IT
              </h3>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                marginBottom: '24px',
                color: 'white',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>13</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>Programs</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>950+</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>Students</div>
                </div>
              </div>
              
              <a href="/institutes/economics" style={{ 
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '16px'
              }}>
                Visit Website →
              </a>
            </div>
          </div>
          
          {/* Design Card */}
          <div style={{ 
            backgroundColor: 'rgba(17, 19, 31, 0.8)',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '320px',
            borderTop: '2px solid #f9a825',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}>
            <div style={{ padding: '8px', textAlign: 'right' }}>
              <span style={{ 
                backgroundColor: '#f9a825',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                Design & Tech
              </span>
            </div>
            
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                backgroundColor: 'rgba(249, 168, 37, 0.1)',
                border: '2px solid #f9a825',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#f9a825', fontSize: '36px' }}>DSN</span>
              </div>
              
              <h3 style={{ 
                color: '#f9a825', 
                fontSize: '22px',
                marginBottom: '24px'
              }}>
                Design & Technology
              </h3>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                marginBottom: '24px',
                color: 'white',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>12</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>Programs</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>850+</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>Students</div>
                </div>
              </div>
              
              <a href="/institutes/symbat" style={{ 
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '16px'
              }}>
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
