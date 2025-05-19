import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { institutes } from '@/data/institutes';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Create a subtle parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Language switcher function
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Update mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Dynamic background gradient
  const bgRotate = useTransform(
    x,
    [0, window.innerWidth],
    [0, 15]
  );

  const bgScale = useTransform(
    y,
    [0, window.innerHeight],
    [1, 1.1]
  );

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>AHEU - Almaty Humanitarian Economic University</title>
        <meta name="description" content="Almaty Humanitarian Economic University - A leading educational institution in Kazakhstan." />
      </Helmet>

      {/* Custom cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference bg-white"
        style={{
          x: useTransform(x, (value) => value - 12),
          y: useTransform(y, (value) => value - 12),
          opacity: hoveredCard ? 0.8 : 0.5,
          scale: hoveredCard ? 1.8 : 1
        }}
      />

      {/* Modern static gradient background */}
      <div 
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        {/* Static background gradient */}
        <div 
          className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-500"
        />

        {/* 3D Parallax Card Effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-full h-full">
            {/* Animated particles that follow cursor subtly */}
            {Array.from({ length: 50 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  opacity: Math.random() * 0.5,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: (mousePosition.x - window.innerWidth / 2) * (index % 10) * 0.005,
                  y: (mousePosition.y - window.innerHeight / 2) * (index % 10) * 0.005,
                }}
                transition={{
                  duration: 0.1,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          {/* Animated gradient spots that move subtly */}
          <motion.div
            className="absolute w-[60vh] h-[60vh] rounded-full filter blur-[120px] opacity-30 bg-blue-500"
            style={{ top: '20%', left: '20%' }}
            animate={{
              x: [20, -20, 20],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-[50vh] h-[50vh] rounded-full filter blur-[120px] opacity-20 bg-purple-600"
            style={{ top: '50%', right: '20%' }}
            animate={{
              x: [-30, 30, -30],
              y: [30, -30, 30],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 flex flex-col min-h-screen">
          
          {/* Header with hover animation */}
          <header className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="bg-white text-gray-900 font-bold text-xl px-3 py-2 rounded-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255,255,255,0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                AHEU
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="hidden md:inline-block text-lg font-medium"
              >
                Almaty Humanitarian Economic University
              </motion.span>
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-6 items-center"
            >
              {/* Redesigned elegant language switcher */}
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
                    backgroundColor: "rgba(255,255,255,0.2)",
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Main Website
                </motion.div>
              </Link>
            </motion.div>
          </header>
          
          {/* Hero section with text reveal animation */}
          <div className="flex-grow flex flex-col justify-center items-center pt-8 pb-12 md:py-16">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto mb-16 text-center"
            >
              <motion.div
                initial={{ opacity: 1 }}
                className="overflow-hidden mb-6"
              >
                <motion.h1 
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    delay: 0.2 
                  }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white leading-tight"
                >
                  {t('landing.title', 'Almaty Humanitarian Economic University')}
                </motion.h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/80 mb-6"
              >
                {t('landing.subtitle', 'Empowering minds, shaping futures through quality education')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.p 
                  className="text-lg text-white/60"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut" 
                  }}
                >
                  Choose your institute below
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Institute cards with advanced hover effects */}
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
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.15 + 0.5,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Link href={`/institutions/${institute.id}`} className="block h-full">
                      {/* Glass card effect with thematic background and 3D tilt effect */}
                      <motion.div 
                        className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-white/10 transform-gpu"
                        style={{ 
                          background: `linear-gradient(135deg, rgba(25,25,25,0.3) 0%, rgba(40,40,40,0.2) 100%)`,
                          backdropFilter: 'blur(10px)',
                          borderColor: hoveredCard === institute.id ? institute.primaryColor : 'rgba(255,255,255,0.1)',
                          borderWidth: hoveredCard === institute.id ? '2px' : '1px',
                          transformStyle: 'preserve-3d',
                        }}
                        whileHover={{ 
                          y: -10,
                          scale: 1.03,
                          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px ${institute.primaryColor}30 inset`,
                          transition: { 
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            duration: 0.2
                          }
                        }}
                        // Add subtle 3D rotation on mouse move
                        animate={{
                          rotateX: hoveredCard === institute.id ? 
                            (mousePosition.y - window.innerHeight / 2) * 0.01 : 0,
                          rotateY: hoveredCard === institute.id ? 
                            -(mousePosition.x - window.innerWidth / 2) * 0.01 : 0,
                        }}
                        transition={{
                          rotateX: { duration: 0.1, ease: "easeOut" },
                          rotateY: { duration: 0.1, ease: "easeOut" },
                        }}
                        layoutId={`card-container-${institute.id}`}
                      >
                        {/* Thematic background image based on institute type */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: institute.id === 'pedagogy' 
                              ? 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop")'
                              : institute.id === 'economics'
                              ? 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop")'
                              : 'url("https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'saturate(0.5) brightness(0.5)'
                          }}
                        />

                        {/* Dark overlay for better text contrast */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
                          }}
                        />

                        {/* Simplified shine effect on hover - vary by institute */}
                        {hoveredCard === institute.id && (
                          <div 
                            className="absolute inset-0 opacity-30 transition-opacity duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${institute.primaryColor}40 0%, transparent 80%)`,
                            }}
                          />
                        )}
                        
                        {/* Colorful top border */}
                        <div
                          className={`absolute top-0 left-0 right-0 transition-all duration-300 ${hoveredCard === institute.id ? 'h-3' : 'h-2'}`}
                          style={{ background: institute.primaryColor }}
                        />
                        
                        {/* Institute specialty badge - enlarge on hover */}
                        <div 
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                            hoveredCard === institute.id ? 'scale-110' : ''
                          }`}
                          style={{ 
                            backgroundColor: hoveredCard === institute.id 
                              ? `${institute.primaryColor}90`
                              : `${institute.primaryColor}70`, 
                            color: 'white',
                            border: `1px solid ${institute.primaryColor}`,
                            boxShadow: hoveredCard === institute.id 
                              ? `0 3px 10px rgba(0,0,0,0.4)`
                              : 'none'
                          }}
                        >
                          {institute.id === 'pedagogy' && 'Education & Law'}
                          {institute.id === 'economics' && 'Business & IT'}
                          {institute.id === 'symbat' && 'Design & Tech'}
                        </div>
                        
                        <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
                          {/* Logo with glow effect - no white background bubble */}
                          <motion.div 
                            className="mb-8 relative"
                            animate={{ 
                              y: hoveredCard === institute.id ? -8 : 0
                            }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 300, 
                              damping: 15 
                            }}
                          >
                            {/* Outer glow */}
                            <motion.div 
                              className="absolute -inset-4 rounded-full blur-xl"
                              animate={{ 
                                opacity: hoveredCard === institute.id ? 0.7 : 0,
                                scale: hoveredCard === institute.id ? 1.1 : 1
                              }}
                              style={{ backgroundColor: `${institute.primaryColor}30` }}
                            />
                            
                            {/* Logo container - full size without white background */}
                            <div 
                              className={`w-40 h-40 relative flex items-center justify-center rounded-full transition-all duration-300 ${
                                hoveredCard === institute.id ? 'scale-110 -translate-y-2' : ''
                              }`}
                              style={{
                                boxShadow: hoveredCard === institute.id 
                                  ? `0 0 30px ${institute.primaryColor}50` 
                                  : 'none',
                                // Enhanced circular backdrop for better logo visibility
                                background: institute.id === 'economics' 
                                  ? 'radial-gradient(circle, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 75%)' 
                                  : 'none'
                              }}
                            >
                              {/* The logo image - full size circle with enhanced brightness for blue logo */}
                              <img 
                                src={institute.logoImage} 
                                alt={`${t(`institutes.${institute.id}.shortName`)} Logo`} 
                                className={`w-full h-full object-contain transition-all duration-300 ${hoveredCard === institute.id ? 'scale-110' : ''}`}
                                style={{
                                  filter: institute.id === 'economics'
                                    ? 'brightness(1.7) contrast(1.2) drop-shadow(0 5px 15px rgba(0,0,0,0.3))'
                                    : hoveredCard === institute.id 
                                      ? 'drop-shadow(0 5px 15px rgba(0,0,0,0.25))' 
                                      : 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))'
                                }}
                                onError={(e) => {
                                  console.error(`Failed to load image: ${institute.logoImage}`);
                                  const target = e.target as HTMLImageElement;
                                  target.style.border = '2px solid red';
                                  target.style.padding = '10px';
                                  target.style.backgroundColor = '#ffeeee';
                                }}
                              />
                            </div>
                          </motion.div>
                          
                          {/* Institute name with staggered letter animation - fixed height container */}
                          <div className="mb-3 overflow-hidden h-16 flex items-center justify-center">
                            <motion.h2 
                              className={`text-2xl font-bold transition-all duration-300 ${
                                hoveredCard === institute.id ? 'scale-105' : ''
                              }`}
                              style={{ 
                                color: institute.primaryColor,
                                textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 5px rgba(0,0,0,0.9)'
                              }}
                            >
                              {t(`institutes.${institute.id}.shortName`)}
                            </motion.h2>
                          </div>
                          
                          {/* Stats with highlight on hover */}
                          <motion.div 
                            className="flex justify-center items-center gap-10 mt-4"
                          >
                            <div 
                              className={`flex flex-col transition-all duration-300 ${
                                hoveredCard === institute.id ? 'transform -translate-y-1' : ''
                              }`}
                            >
                              <span className="text-xl font-bold text-white">{institute.programCount}</span>
                              <span className="text-xs text-white/60">{t('institutes.programs')}</span>
                            </div>
                            
                            <div 
                              className={`flex flex-col transition-all duration-300 ${
                                hoveredCard === institute.id ? 'transform -translate-y-1 delay-75' : ''
                              }`}
                            >
                              <span className="text-xl font-bold text-white">{institute.studentCount}+</span>
                              <span className="text-xs text-white/60">{t('institutes.students')}</span>
                            </div>
                          </motion.div>
                          
                          {/* Call-to-action button with optimized effects */}
                          <div 
                            className={`mt-6 py-3 px-8 rounded-full text-sm font-medium relative overflow-hidden flex items-center justify-center gap-2 transition-all duration-300
                              ${hoveredCard === institute.id ? 'translate-y-[-4px] shadow-lg' : ''}
                            `}
                            style={{ 
                              backgroundColor: hoveredCard === institute.id 
                                ? institute.primaryColor 
                                : 'rgba(255,255,255,0.15)',
                              color: hoveredCard === institute.id ? 'white' : '#ffffff',
                              boxShadow: hoveredCard === institute.id ? `0 10px 20px ${institute.primaryColor}40` : 'none',
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            <span className="relative z-10">Visit Website</span>
                            
                            {/* Simple arrow icon */}
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 relative z-10 transition-transform duration-300 ${hoveredCard === institute.id ? 'translate-x-1' : ''}`}
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

          {/* Animated footer */}
          <motion.footer 
            className="py-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
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
                      <motion.a 
                        key={social}
                        href="#" 
                        className="text-white/70 hover:text-white transition-colors"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, 10, -10, 0],
                          color: '#ffffff'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          {/* Icon paths based on the social media */}
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-8 pt-6 border-t border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Almaty Humanitarian Economic University. All rights reserved.</p>
              </motion.div>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
};

export default Landing; 