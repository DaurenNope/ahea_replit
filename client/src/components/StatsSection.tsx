import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Statistics data with targets for animation
  const stats = [
    {
      id: "students",
      icon: (
        <svg className="w-12 h-12 text-white drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5V18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1.5"></path>
          <path d="M12 2v4"></path>
          <path d="M4.93 10.93l2.83-2.83"></path>
          <path d="M19.07 10.93l-2.83-2.83"></path>
          <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          <path d="M12 15v3"></path>
        </svg>
      ),
      value: 9000,
      suffix: "+",
      label: "stats.students.text",
      defaultLabel: "Студентов"
    },
    {
      id: "faculty",
      icon: (
        <svg className="w-12 h-12 text-white drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      value: 350,
      suffix: "+",
      label: "stats.faculty.text",
      defaultLabel: "Преподавателей и исследователей"
    },
    {
      id: "programs",
      icon: (
        <svg className="w-12 h-12 text-white drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      value: 39,
      suffix: "",
      label: "stats.programs.text",
      defaultLabel: "Образовательных программ"
    },
    {
      id: "employment",
      icon: (
        <svg className="w-12 h-12 text-white drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      ),
      value: 95,
      suffix: "%",
      label: "stats.employment.text",
      defaultLabel: "Уровень трудоустройства выпускников спустя полгода после окончания университета"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-12 md:h-16 fill-white transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,229.3C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-1/3 w-60 h-60 rounded-full bg-gradient-to-tl from-secondary/5 to-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title with decorative elements */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center w-full max-w-4xl mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="w-3 h-3 rounded-full bg-primary mx-3 animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center px-4 text-primary">
            {t('stats.title', 'Цифры и факты')}
          </h2>
          
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>
        
        {/* Stats grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Map through stats array for DRY code */}
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              className="group relative flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 -z-10"></div>
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-7 relative transform transition-transform group-hover:scale-105 duration-500">
                <div className="absolute inset-0.5 rounded-full bg-white p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
              </div>
              
              {/* Animated counter component */}
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix} 
                duration={2500}
              />
              
              <p className="text-center text-sm md:text-base text-aheu-neutral-darker px-2 md:px-4 max-w-xs mx-auto">
                {t(stat.label, stat.defaultLabel)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-12 md:h-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,229.3C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default StatsSection; 