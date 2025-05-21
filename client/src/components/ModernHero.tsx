import * as React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

interface ModernHeroProps {
  title: string;
  subtitle: string;
}

const ModernHero: React.FC<ModernHeroProps> = ({ title, subtitle }) => {
  const { t } = useTranslation();
  
  // Animation styles as a React component
  const Animations = () => (
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(-2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(10px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        .animate-float-delay-2 {
          animation: float 6s ease-in-out 4s infinite;
        }
        
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
          }
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .logo-green {
          filter: drop-shadow(0 0 10px rgba(0, 56, 38, 0.5));
        }
        
        .logo-blue {
          filter: drop-shadow(0 0 10px rgba(42, 77, 143, 0.5));
        }
        
        .logo-orange {
          filter: drop-shadow(0 0 10px rgba(233, 157, 52, 0.5));
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .aheu-highlight {
          font-style: italic;
        }
      `
    }} />
  );
  
  const institutes = [
    {
      id: 'pedagogy',
      color: '#003826',
      name: 'Педагогика, бизнес и право',
      logoPath: '/logos/pedagogy.png',
      animationDelay: '',
      logoClass: 'logo-green'
    },
    {
      id: 'economics',
      color: '#2A4D8F',
      name: 'Экономика, статистика и ИТ',
      logoPath: '/logos/economics.png',
      animationDelay: 'animate-float-delay-1',
      logoClass: 'logo-blue'
    },
    {
      id: 'symbat',
      color: '#E99D34',
      name: 'Дизайн и технологии',
      logoPath: '/logos/design.png',
      animationDelay: 'animate-float-delay-2',
      logoClass: 'logo-orange'
    }
  ];

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Animation styles */}
      <Animations />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        
        {/* Transparent overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50"></div>
      </div>

      {/* Main content - centered both horizontally and vertically */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center h-full">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-[120%] rounded-full border border-white/5 sm:border-white/10 aspect-square"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] sm:w-[90%] rounded-full border border-white/10 sm:border-white/20 aspect-square"></div>
        
        {/* Content container - everything in one centered flex column */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16">
          {/* Hero text section - slogan as title */}
          <div className="relative z-20 text-center w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white max-w-4xl mx-auto font-light drop-shadow-lg px-2 tracking-wide leading-relaxed">
              AHEU — a place to <span className="text-white font-normal italic">A</span>chieve, <span className="text-white font-normal italic">H</span>ighlight, <span className="text-white font-normal italic">E</span>xplore, <span className="text-white font-normal italic">U</span>nite
            </h1>
          </div>

          {/* Scroll indicator with just the arrow */}
          <div className="text-white/70 flex flex-col items-center scroll-indicator">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Institute logos - even larger for desktop */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 mt-2 sm:mt-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 lg:gap-16">
              {institutes.map((institute) => (
                <Link 
                  key={institute.id} 
                  href={`/institutes/${institute.id}`} 
                  className="flex flex-col items-center group"
                >
                  {/* Logo container with enlarged sizing */}
                  <div className={`${institute.animationDelay || 'animate-float'} flex justify-center`}>
                    <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 relative group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={institute.logoPath} 
                        alt={institute.name} 
                        className={`w-full h-full object-contain drop-shadow-xl ${institute.logoClass}`} 
                        loading="eager" 
                      />
                      
                      {/* Colored glow effect on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-2xl"
                        style={{ backgroundColor: institute.color }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Institute name - enlarged */}
                  <div className="mt-3 sm:mt-5 md:mt-6 text-center">
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg mb-2 sm:mb-3 group-hover:text-white/90 transition-all leading-tight">
                      {institute.name}
                    </h3>
                    
                    {/* Larger button */}
                    <div className="inline-flex items-center justify-center space-x-1 text-white/80 group-hover:text-white transition-colors mt-1 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-white/20">
                      <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide">Подробнее</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="relative h-12 sm:h-16 md:h-24 mt-auto z-10">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,229.3C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ModernHero; 