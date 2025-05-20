import React, { useState } from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { institutes } from '@/data/institutes';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// Language flags mapping
const languageFlags: Record<string, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  kz: '🇰🇿'
};

const Landing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const htmlLang = i18n.language || 'en';
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  // Language switcher function
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 24,
        mass: 1.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>AHEU - Almaty Humanitarian Economic University</title>
        <meta name="description" content="Almaty Humanitarian Economic University - A leading educational institution in Kazakhstan." />
      </Helmet>

      {/* Modern static gradient background */}
      <div 
        className="min-h-screen relative overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #4a1d96 0%, #7e22ce 50%, #6b21a8 100%)',
          backgroundSize: 'cover',
          cursor: 'default' // Ensure default cursor is used
        }}
      >
        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 flex flex-col min-h-screen">
          
          {/* Header with hover animation */}
          <header className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="bg-white text-gray-900 font-bold text-xl px-3 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                AHEU
              </motion.div>
              <span className="hidden md:inline-block text-lg font-medium">
                Almaty Humanitarian Economic University
              </span>
            </Link>
            
            <div className="flex gap-6 items-center">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="group flex items-center gap-2 bg-white/5 backdrop-blur-md text-white px-4 py-2.5 rounded-full border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
                >
                  <span className="text-lg">{languageFlags[i18n.language || 'en']}</span>
                  <span className="font-medium">{i18n.language?.toUpperCase() || 'EN'}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform duration-300 opacity-70 group-hover:opacity-100 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl shadow-black/40 p-1"
                    >
                      {Object.keys(languageFlags).map((lng) => (
                        <motion.button
                          key={lng}
                          onClick={() => changeLanguage(lng)}
                          whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                          className={`flex items-center gap-3 px-5 py-2.5 w-full text-left rounded-lg transition-colors ${
                            i18n.language === lng ? 'bg-white/10 font-medium text-white' : 'text-white/80'
                          }`}
                        >
                          <span className="text-lg">{languageFlags[lng]}</span>
                          <span>{lng === 'en' ? 'English' : lng === 'ru' ? 'Русский' : 'Қазақша'}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/home">
                <motion.div
                  className="bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-md text-sm font-medium transition-all shadow-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Main Website
                </motion.div>
              </Link>
            </div>
          </header>
          
          {/* Hero section */}
          <div className="flex-grow flex flex-col justify-center items-center pt-8 pb-12 md:py-16">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-16 text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {t('landing.title', 'Almaty Humanitarian Economic University')}
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-6">
                {t('landing.subtitle', 'Empowering minds, shaping futures through quality education')}
              </p>
              
              <p className="text-lg text-white/60">
                Choose your institute below
              </p>
            </motion.div>
            
            {/* Institute cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-10">
                {institutes.map((institute, index) => (
                  <motion.div
                    key={institute.id}
                    variants={itemVariants}
                    className="group cursor-pointer relative"
                    onMouseEnter={() => setHoveredCard(institute.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ y: -10 }}
                  >
                    <Link href={`/institutions/${institute.id}`} className="block h-full">
                      {/* Glass card effect */}
                      <motion.div 
                        className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-white/10 transform-gpu"
                        style={{ 
                          background: 'rgba(30, 30, 30, 0.8)',
                          backdropFilter: 'blur(10px)',
                          borderColor: hoveredCard === institute.id ? institute.primaryColor : 'rgba(255,255,255,0.1)',
                          borderWidth: hoveredCard === institute.id ? '2px' : '1px'
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7)`
                        }}
                      >
                        {/* Colorful top border */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-2`}
                          style={{ background: institute.primaryColor }}
                        />
                        
                        {/* Institute specialty badge */}
                        <div 
                          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: `${institute.primaryColor}90`,
                            color: 'white',
                            border: `1px solid ${institute.primaryColor}`
                          }}
                        >
                          {institute.id === 'pedagogy' && 'Education & Law'}
                          {institute.id === 'economics' && 'Business & IT'}
                          {institute.id === 'symbat' && 'Design & Tech'}
                        </div>
                        
                        <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
                          {/* Logo with glow effect */}
                          <div className="mb-8 relative">
                            {/* Logo circular area with institution-specific color */}
                            <div 
                              className={`w-40 h-40 relative flex items-center justify-center rounded-full`}
                              style={{
                                background: `radial-gradient(circle, ${institute.primaryColor}50 20%, rgba(30, 30, 30, 0.8) 80%)`
                              }}
                            >
                              {/* The logo image */}
                              <img 
                                src={institute.logoImage} 
                                alt={`${t(`institutes.${institute.id}.shortName`)} Logo`} 
                                className="w-full h-full object-contain p-6"
                                onError={(e) => {
                                  console.error(`Failed to load image: ${institute.logoImage}`);
                                  const target = e.target as HTMLImageElement;
                                  target.style.border = '2px solid red';
                                  target.style.padding = '10px';
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Institute name */}
                          <div className="mb-3 overflow-hidden h-16 flex items-center justify-center">
                            <h2 
                              className="text-2xl font-bold"
                              style={{ color: institute.primaryColor }}
                            >
                              {t(`institutes.${institute.id}.shortName`)}
                            </h2>
                          </div>
                          
                          {/* Stats */}
                          <div className="flex justify-center items-center gap-10 mt-4">
                            <div className="flex flex-col">
                              <span className="text-xl font-bold text-white">{institute.programCount}</span>
                              <span className="text-xs text-white/60">{t('institutes.programs')}</span>
                            </div>
                            
                            <div className="flex flex-col">
                              <span className="text-xl font-bold text-white">{institute.studentCount}+</span>
                              <span className="text-xs text-white/60">{t('institutes.students')}</span>
                            </div>
                          </div>
                          
                          {/* Call-to-action button */}
                          <div 
                            className="mt-6 py-3 px-8 rounded-full text-sm font-medium relative overflow-hidden flex items-center justify-center gap-2"
                            style={{ 
                              backgroundColor: institute.primaryColor,
                              color: 'white'
                            }}
                          >
                            <span>Visit Website</span>
                            
                            {/* Arrow icon */}
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4"
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="py-8 border-t border-white/10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white text-gray-900 font-bold text-sm px-2 py-1 rounded">AHEU</div>
                    <span className="text-md font-medium text-white/80">University</span>
                  </div>
                  <p className="text-sm text-white/60">
                    A leading educational institution committed to academic excellence and innovation in Kazakhstan.
                  </p>
                </div>
                
                <div className="md:col-span-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-white/80">+7 (727) 279-95-69</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white/80">info@aheu.edu.kz</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:col-span-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Connect</h3>
                  <div className="flex gap-4">
                    {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                      <a 
                        key={social}
                        href="#" 
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Almaty Humanitarian Economic University. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Landing; 