import * as React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle
}) => {
  const { t } = useTranslation();
  
  // Simplified institute configuration
  const instituteConfig = {
    pedagogy: {
      circleBg: "bg-[#003826]",
      buttonColor: "bg-[#003826] hover:bg-[#0a543e]",
      buttonText: "Подробнее",
      name: "Педагогика, бизнес и право",
      logoPath: "/logos/pedagogy.png"
    },
    economics: {
      circleBg: "bg-[#2A4D8F]",
      buttonColor: "bg-[#2A4D8F] hover:bg-[#3a67bb]",
      buttonText: "Подробнее",
      name: "Экономика, статистика и ИТ",
      logoPath: "/logos/economics.png"
    },
    symbat: {
      circleBg: "bg-[#E99D34]",
      buttonColor: "bg-[#E99D34] hover:bg-[#f0b662]",
      buttonText: "Подробнее",
      name: "Дизайн и технологии",
      logoPath: "/logos/design.png"
    }
  };
  
  return (
    <section className="relative h-[90vh] md:h-screen flex flex-col overflow-hidden">
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
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
      </div>

      {/* Balanced content container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full py-8 md:py-12">
        {/* Top content */}
        <div className="flex flex-col items-center mb-12 md:mb-20">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 text-white drop-shadow-md text-center">
            {title}
          </h1>
          <div className="w-16 md:w-24 h-1 bg-white/60 mx-auto rounded-full mb-4"></div>
          
          {/* Subtitle */}
          <h2 className="text-sm md:text-xl lg:text-2xl font-medium text-white drop-shadow-md text-center max-w-xs md:max-w-2xl mb-4 md:mb-8">
            {subtitle}
          </h2>
          
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        
        {/* Institute Cards - Balanced for both mobile and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto w-full">
          {Object.entries(instituteConfig).map(([id, institute]) => (
            <div 
              key={id}
              className="flex flex-col items-center"
            >
              <Link href={`/institutes/${id}`}>
                <div className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full ${institute.circleBg} shadow-lg flex items-center justify-center relative cursor-pointer overflow-hidden transition-transform hover:scale-105`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                  <div className="relative z-10 flex items-center justify-center w-full h-full p-4 md:p-6">
                    <img 
                      src={institute.logoPath} 
                      alt={institute.name} 
                      className="w-full h-full object-contain brightness-0 invert"
                      loading="eager" 
                    />
                  </div>
                </div>
              </Link>
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white text-center drop-shadow mt-3 mb-3 max-w-[200px] line-clamp-2">
                {institute.name}
              </h3>
              <Link href={`/institutes/${id}`}>
                <button className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base text-white font-medium rounded-full transition-all ${institute.buttonColor} shadow-lg hover:shadow-xl`}>
                  {institute.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
