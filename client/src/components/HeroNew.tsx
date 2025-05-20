import * as React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  title: string;
  subtitle: string;
}

const HeroNew: React.FC<HeroProps> = ({ title, subtitle }) => {
  const { t } = useTranslation();
  
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
    <section className="relative w-full">
      {/* Full-height hero that adapts to both mobile and desktop */}
      <div className="h-[100vh] w-full relative overflow-hidden">
        {/* Video background with overlay */}
        <div className="absolute inset-0 z-0 bg-black">
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

        {/* Content container with flex layout */}
        <div className="relative z-10 h-full w-full container mx-auto px-4 md:px-6">
          <div className="h-full flex flex-col">
            {/* Title section - takes 40% of height */}
            <div className="h-[40%] flex flex-col justify-end items-center pb-4 md:pb-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center drop-shadow-lg">
                {title}
              </h1>
              <div className="w-16 md:w-24 h-1 bg-white/70 rounded-full my-3 md:my-4"></div>
              <h2 className="text-sm md:text-xl lg:text-2xl font-medium text-white text-center max-w-xs md:max-w-2xl drop-shadow-lg">
                {subtitle}
              </h2>
              
              {/* Scroll indicator */}
              <div className="mt-4 md:mt-6 animate-bounce">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            
            {/* Institutes section - takes 60% of height */}
            <div className="h-[60%] w-full flex items-center justify-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 py-4">
                {Object.entries(instituteConfig).map(([id, institute]) => (
                  <div 
                    key={id}
                    className="flex flex-col items-center justify-center"
                  >
                    {/* Circle with icon */}
                    <Link href={`/institutes/${id}`}>
                      <div className={`
                        w-20 h-20 
                        sm:w-24 sm:h-24 
                        md:w-32 md:h-32 
                        lg:w-40 lg:h-40
                        rounded-full ${institute.circleBg} 
                        shadow-lg 
                        flex items-center justify-center 
                        relative cursor-pointer 
                        transition-transform duration-300 
                        hover:scale-105 hover:shadow-xl
                      `}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-full"></div>
                        <div className="relative z-10 flex items-center justify-center w-full h-full p-3 md:p-5">
                          <img 
                            src={institute.logoPath} 
                            alt={institute.name} 
                            className="w-full h-full object-contain brightness-0 invert"
                            loading="eager" 
                          />
                        </div>
                      </div>
                    </Link>
                    
                    {/* Title */}
                    <h3 className="
                      text-sm sm:text-base md:text-lg lg:text-xl 
                      font-bold text-white 
                      text-center drop-shadow 
                      mt-3 mb-3 
                      w-full max-w-[180px] 
                      line-clamp-2
                    ">
                      {institute.name}
                    </h3>
                    
                    {/* Button */}
                    <Link href={`/institutes/${id}`}>
                      <button className={`
                        px-4 py-1.5
                        sm:px-5 sm:py-2
                        md:px-6 md:py-2.5
                        text-xs sm:text-sm md:text-base
                        text-white font-medium 
                        rounded-full 
                        transition-all 
                        ${institute.buttonColor} 
                        shadow-md hover:shadow-lg
                      `}>
                        {institute.buttonText}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew; 