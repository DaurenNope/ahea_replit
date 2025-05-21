import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Layout from '@/components/Layout';

const CollegePage: React.FC = () => {
  const { t } = useTranslation();

  // Primary color theme for AHEU College - orange tones
  const primaryColor = 'from-orange-600 to-orange-800';
  const secondaryColor = 'bg-orange-700';
  const accentColor = 'orange';

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`relative py-20 md:py-28 bg-gradient-to-br ${primaryColor} text-white overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-1/4 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute right-0 bottom-1/3 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('nav.college')}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl opacity-90 max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Providing quality vocational and professional education for future specialists
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#about" className="btn-white">
                {t('common.learnMore')}
              </a>
              <a href="#programs" className={`bg-white text-${accentColor}-800 hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors`}>
                View Programs
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About the College */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About AHEU College" 
            subtitle="Preparing skilled professionals for today's demanding job market with practical and theoretical education"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-lg text-aheu-neutral-darker mb-6">
                AHEU College offers vocational education programs that combine theoretical knowledge with hands-on practical training, preparing students for immediate entry into the workforce or further academic studies at university level.
              </p>
              <p className="text-lg text-aheu-neutral-darker mb-6">
                With modern facilities, experienced instructors, and strong industry connections, our college ensures that graduates are equipped with the skills and qualifications needed to succeed in their chosen professions.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>Business and Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>Information Technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>Design and Creative Arts</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>Hospitality and Tourism</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`mt-1 mr-3 w-4 h-4 rounded-full ${secondaryColor} flex-shrink-0`}></div>
                    <span>Legal and Administrative Studies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-80 md:h-full">
              <img 
                src="/images/college/college-main.jpg" 
                alt="Students at AHEU College" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholders/college-placeholder.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Programs" 
            subtitle="Explore our diverse range of vocational programs designed to meet industry demands"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Program Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/images/college/business-program.jpg" 
                  alt="Business Administration Program" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholders/program-placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business Administration</h3>
                <p className="text-aheu-neutral-darker mb-4">Diploma program preparing students for administrative and management roles in various business settings.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 2 years</span>
                  <a href="#" className={`text-${accentColor}-600 font-medium hover:text-${accentColor}-800`}>Learn More →</a>
                </div>
              </div>
            </div>
            
            {/* Program Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/images/college/it-program.jpg" alt="Information Technology Program" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Information Technology</h3>
                <p className="text-aheu-neutral-darker mb-4">Comprehensive program covering network administration, software development, and IT support services.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 2-3 years</span>
                  <a href="#" className={`text-${accentColor}-600 font-medium hover:text-${accentColor}-800`}>Learn More →</a>
                </div>
              </div>
            </div>
            
            {/* Program Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/images/college/design-program.jpg" alt="Graphic Design Program" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
                <p className="text-aheu-neutral-darker mb-4">Creative program focusing on digital design, typography, branding, and multimedia production.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 2 years</span>
                  <a href="#" className={`text-${accentColor}-600 font-medium hover:text-${accentColor}-800`}>Learn More →</a>
                </div>
              </div>
            </div>
            
            {/* Program Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/images/college/tourism-program.jpg" alt="Tourism and Hospitality Program" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tourism & Hospitality</h3>
                <p className="text-aheu-neutral-darker mb-4">Practical program providing skills for hotel management, event planning, and tourism services.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 2 years</span>
                  <a href="#" className={`text-${accentColor}-600 font-medium hover:text-${accentColor}-800`}>Learn More →</a>
                </div>
              </div>
            </div>
            
            {/* Program Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/images/college/legal-program.jpg" alt="Legal Studies Program" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Legal Studies</h3>
                <p className="text-aheu-neutral-darker mb-4">Program focused on paralegal training, legal administration, and foundation of law practice.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 2 years</span>
                  <a href="#" className={`text-${accentColor}-600 font-medium hover:text-${accentColor}-800`}>Learn More →</a>
                </div>
              </div>
            </div>
            
            {/* Program Card 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/images/college/accounting-program.jpg" alt="Accounting Program" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Accounting</h3>
                <p className="text-aheu-neutral-darker mb-4">Detailed program covering financial accounting, taxation, bookkeeping, and accounting software.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 2 years</span>
                  <a href="#" className={`text-${accentColor}-600 font-medium hover:text-${accentColor}-800`}>Learn More →</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className={`bg-${accentColor}-700 hover:bg-${accentColor}-800 text-white px-8 py-3 rounded font-medium transition-colors inline-block`}
            >
              View All Programs
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Future at AHEU College
          </h2>
          <p className="text-lg text-aheu-neutral-darker max-w-3xl mx-auto mb-10">
            Take the first step towards a successful career with our industry-focused vocational programs. Applications are now open for the upcoming academic year.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#" 
              className={`bg-${accentColor}-700 hover:bg-${accentColor}-800 text-white px-6 py-3 rounded font-medium transition-colors`}
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded font-medium transition-colors"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CollegePage; 