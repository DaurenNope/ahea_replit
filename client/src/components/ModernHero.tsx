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
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden">
      {/* Animation styles */}
      <Animations />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-primary/40"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-1 flex-col">
        <div className="flex-1 flex flex-col items-center justify-center py-4 relative">
          {/* Decorative elements - scaled down on mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] xs:w-[95%] sm:w-[110%] md:w-[120%] h-[85%] xs:h-[95%] sm:h-[110%] md:h-[120%] rounded-full border border-white/5 sm:border-white/10 backdrop-blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] xs:w-[70%] sm:w-[80%] md:w-[90%] h-[60%] xs:h-[70%] sm:h-[80%] md:h-[90%] rounded-full border border-white/10 sm:border-white/20"></div>
          
          {/* Hero text section - now positioned on top of blurred elements */}
          <div className="relative z-20 pt-8 sm:pt-10 md:pt-16 lg:pt-12 pb-4 sm:pb-6 text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight drop-shadow-lg">
              {title}
            </h1>
            
            <div className="w-12 sm:w-16 md:w-24 h-1 bg-white/70 rounded-full mx-auto mb-3 sm:mb-4 md:mb-6 shadow-glow"></div>
            
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white max-w-3xl mx-auto font-light drop-shadow-lg px-2">
              {subtitle}
            </p>
          </div>

          {/* Institute logos in a responsive grid layout */}
          <div className="relative z-10 w-full max-w-6xl mt-6 sm:mt-8 md:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-12">
              {institutes.map((institute) => (
                <Link 
                  key={institute.id} 
                  href={`/institutes/${institute.id}`} 
                  className="flex flex-col items-center group"
                >
                  {/* Logo with consistent sizing */}
                  <div className={`w-full flex justify-center items-center ${institute.animationDelay || 'animate-float'}`}>
                    <div className="w-[50%] xs:w-[55%] sm:w-[65%] md:w-[70%] lg:w-[75%] aspect-square relative group-hover:scale-110 transition-transform duration-500 animate-glow">
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
                  
                  {/* Institute name - adjusted for better mobile display */}
                  <div className="mt-3 sm:mt-4 md:mt-6 text-center w-full">
                    <h3 className="text-sm xs:text-base md:text-lg lg:text-xl font-bold text-white drop-shadow-lg mb-1 sm:mb-2 group-hover:text-white/90 transition-all min-h-[2rem] xs:min-h-[2.25rem] md:min-h-[3rem] flex items-center justify-center px-1">
                      {institute.name}
                    </h3>
                    
                    {/* Animated arrow button */}
                    <div className="inline-flex items-center justify-center space-x-1 text-white/70 group-hover:text-white transition-colors mt-1">
                      <span className="text-xs sm:text-sm font-medium tracking-wide">Подробнее</span>
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
      
      {/* Dynamic wave divider */}
      <div className="relative h-12 sm:h-16 md:h-24 mt-2 sm:mt-4 md:mt-0">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,229.3C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ModernHero; 