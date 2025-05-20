import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { institutes } from '@/data/institutes';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  announcement?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  announcement
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<{[key: string]: boolean}>({});
  
  // Enhanced animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.08,
      boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 } 
    }
  };
  
  // Arrow bounce animation
  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  // Institute configuration with proper logo paths
  const instituteConfig = {
    pedagogy: {
      circleBg: "bg-[#003826]",
      buttonColor: "bg-[#003826] hover:bg-[#0a543e]",
      buttonText: "Подробнее",
      name: "Педагогика, бизнес и право",
      logoPath: "/logos/pedagogy.png",
      icon: (
        <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 20C42.8 20 36 23.4 31.6 29L50 50L68.4 29C64 23.4 57.2 20 50 20Z" fill="currentColor"/>
          <path d="M50 80C57.2 80 64 76.6 68.4 71L50 50L31.6 71C36 76.6 42.8 80 50 80Z" fill="currentColor"/>
          <path d="M20 50C20 57.2 23.4 64 29 68.4L50 50L29 31.6C23.4 36 20 42.8 20 50Z" fill="currentColor"/>
          <path d="M80 50C80 42.8 76.6 36 71 31.6L50 50L71 68.4C76.6 64 80 57.2 80 50Z" fill="currentColor"/>
        </svg>
      )
    },
    economics: {
      circleBg: "bg-[#2A4D8F]",
      buttonColor: "bg-[#2A4D8F] hover:bg-[#3a67bb]",
      buttonText: "Подробнее",
      name: "Экономика, статистика и ИТ",
      logoPath: "/logos/economics.png",
      icon: (
        <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 70V50H40V70H30Z" fill="currentColor"/>
          <path d="M45 70V35H55V70H45Z" fill="currentColor"/>
          <path d="M60 70V45H70V70H60Z" fill="currentColor"/>
          <path d="M25 30L50 15L75 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    symbat: {
      circleBg: "bg-[#E99D34]",
      buttonColor: "bg-[#E99D34] hover:bg-[#f0b662]",
      buttonText: "Подробнее",
      name: "Дизайн и технологии",
      logoPath: "/logos/design.png",
      icon: (
        <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 50C30 40 38 30 50 30C62 30 70 40 70 50" stroke="currentColor" strokeWidth="3"/>
          <path d="M25 45L30 50L35 45" stroke="currentColor" strokeWidth="2"/>
          <path d="M75 45L70 50L65 45" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 70C44.5 70 40 65.5 40 60C40 54.5 44.5 50 50 50C55.5 50 60 54.5 60 60C60 65.5 55.5 70 50 70Z" fill="currentColor"/>
        </svg>
      )
    }
  };

  const handleImageError = (instituteId: string) => {
    setLoadError(prev => ({...prev, [instituteId]: true}));
  };
  
  return (
    <div className="relative">
      {/* Main Hero Section with Video Background */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <video 
            className="absolute inset-0 min-w-full min-h-full object-cover opacity-60"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            {/* Fallback image is set as poster above */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
          {/* Modern overlay pattern */}
          <div className="absolute inset-0 opacity-10" 
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }}>
          </div>
        </div>

        {/* Hero Content - Properly Centered */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col flex-1">
          {/* Use margin to push content down from the top */}
          <div className="flex flex-col justify-center items-center h-full pt-16 pb-0 md:pt-12">
            {/* Combined Title and Institution Area */}
            <div className="w-full max-w-5xl mx-auto">
              {/* Main Title */}
              <motion.div 
                className="text-center mb-8 md:mb-10"
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-md text-white">
                  Добро пожаловать в АГЭУ
                </h1>
                <div className="w-16 md:w-24 h-1 bg-white/60 mx-auto rounded-full"></div>
              </motion.div>

              {/* Integration Text with Arrow */}
              <motion.div
                className="text-center mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white drop-shadow-md">
                  Выберите ваше учреждение
                </h2>
                
                {/* Bouncing down arrow */}
                <motion.div 
                  className="mt-4 flex justify-center"
                  initial="initial"
                  animate="animate"
                  variants={arrowVariants}
                >
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            
              {/* Institute logos in a unified design */}
              <motion.div 
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
                {institutes.map((institute, index) => {
                    const config = instituteConfig[institute.id as keyof typeof instituteConfig];
                    const hasError = loadError[institute.id];
                  
                  return (
                    <motion.div 
                      key={institute.id}
                        className="flex flex-col items-center mb-8 sm:mb-0"
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      variants={cardVariants}
                      whileHover="hover"
                      onMouseEnter={() => setIsHovered(institute.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                        {/* Logo circle */}
                        <Link href={`/institutes/${institute.id}`} className="block w-full flex justify-center">
                          <motion.div 
                            className={`w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full ${config.circleBg} shadow-lg shadow-black/30 flex items-center justify-center relative cursor-pointer overflow-hidden`}
                            whileHover={{
                              boxShadow: "0px 0px 30px 0px rgba(255,255,255,0.2)",
                              transition: { duration: 0.3 }
                            }}
                          >
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                            
                            {/* Actual logo or SVG fallback */}
                            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                              {!hasError ? (
                            <img 
                                  src={config.logoPath}
                                  alt={config.name}
                                  className="w-full h-full object-contain brightness-0 invert"
                                  onError={() => handleImageError(institute.id)}
                                />
                              ) : config.icon}
          </div>
                          </motion.div>
                        </Link>

                        {/* Institute name */}
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center drop-shadow mt-4 mb-3 px-2">
                          {config.name}
                    </h3>
                          
                        {/* Learn More Button */}
                        <Link href={`/institutes/${institute.id}`}>
                          <motion.button 
                            className={`px-6 md:px-8 py-2 md:py-3 text-sm sm:text-base text-white font-medium rounded-full transition-all ${config.buttonColor} shadow-lg backdrop-blur-sm`}
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                          >
                            {config.buttonText}
                          </motion.button>
                    </Link>
                    </motion.div>
                  );
                })}
              </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Announcement Banner */}
        {announcement && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-secondary p-3 text-white text-center backdrop-blur-sm bg-opacity-85 z-20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-lg">{announcement}</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Hero;
