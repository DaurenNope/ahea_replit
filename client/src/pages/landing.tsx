import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { institutes } from '@/data/institutes';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const htmlLang = i18n.language || 'en';

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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const cardColors = [
    'from-blue-600 to-indigo-700',
    'from-emerald-600 to-teal-700',
    'from-rose-500 to-pink-700'
  ];

  const cardAccentColors = [
    'bg-blue-400',
    'bg-emerald-400',
    'bg-rose-400'
  ];

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>AHEU - Almaty Humanitarian Economic University</title>
        <meta name="description" content="Almaty Humanitarian Economic University - A leading educational institution in Kazakhstan." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 flex flex-col min-h-screen">
          
          {/* Header */}
          <header className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white text-gray-900 font-bold text-xl px-3 py-2 rounded-md">AHEU</div>
              <span className="hidden md:inline-block text-lg font-medium">Almaty Humanitarian Economic University</span>
            </Link>
            
            <div className="flex gap-4 items-center">
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                About
              </a>
              <Link href="/home" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Main Website
              </Link>
            </div>
          </header>
          
          {/* Hero section */}
          <div className="flex-grow flex flex-col justify-center items-center py-12 md:py-16 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                {t('landing.title', 'Almaty Humanitarian Economic University')}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                {t('landing.subtitle', 'Empowering minds, shaping futures through quality education')}
              </p>
              <Link href="/home" className="inline-block mt-4 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-md transition-all shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 transform hover:-translate-y-1">
                {t('landing.mainWebsite', 'Visit Main University Website')}
              </Link>
            </motion.div>
            
            {/* Three institution options */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-7xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Choose Your Institute</h2>
              
              <div className="grid md:grid-cols-3 gap-10">
                {institutes.map((institute, index) => (
                  <motion.div 
                    key={institute.id}
                    variants={itemVariants}
                    className={`relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group bg-gradient-to-br ${cardColors[index]} h-[420px] flex flex-col`}
                    style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)' }}
                  >
                    {/* Top gradient overlay */}
                    <div className={`absolute top-0 left-0 right-0 h-2 ${cardAccentColors[index]}`}></div>
                    
                    {/* Image with overlay */}
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40"></div>
                      
                      {/* Institute Icon/Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-2xl font-bold mb-3 text-white">
                        {t(`institutes.${institute.id}.shortName`)}
                      </h2>
                      
                      <p className="text-white/80 mb-4 flex-grow">
                        {t(`institutes.${institute.id}.shortDescription`)}
                      </p>
                      
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                          <span className="text-3xl font-bold text-white">{institute.programCount}</span>
                          <span className="text-sm text-white/70">{t('institutes.programs')}</span>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="text-3xl font-bold text-white">{institute.studentCount}+</span>
                          <span className="text-sm text-white/70">{t('institutes.students')}</span>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/institutions/${institute.id}`} 
                        className="block w-full bg-white/10 group-hover:bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-center py-3 rounded-md transition-colors font-medium"
                      >
                        {t('landing.visitInstitute', 'Visit Website')}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="py-6 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/70">&copy; {new Date().getFullYear()} {t('footer.copyright', 'Almaty Humanitarian Economic University. All rights reserved.')}</p>
                <div className="flex gap-6">
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Landing; 