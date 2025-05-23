import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const InternationalPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('international.pageTitle', 'International Cooperation - AHEU University')}
      description={t('international.metaDescription', 'AHEU University offers extensive international cooperation opportunities through partnerships, exchange programs, and global research initiatives.')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('international.hero.title')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('international.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('international.title', 'International Cooperation')}</h2>
                
                {/* Introduction */}
                <div className="mb-8">
                  <p className="mb-4">
                    {t('international.welcomeText', 'At AHEU University, we believe that excellence in education and research requires a global perspective. Our international cooperation initiatives connect students, faculty, and researchers with leading institutions worldwide, creating opportunities for collaborative learning, innovative research, and cultural exchange.')}
                  </p>
                  <p className="mb-4">
                    {t('international.welcomeText2', 'Through strategic partnerships with prestigious universities, research institutions, and international organizations, we provide our community with global experiences that enhance academic quality and prepare graduates for success in an interconnected world.')}
                  </p>
                </div>
                
                {/* Global Impact Stats */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Global Reach</h3>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">52</div>
                      <p className="text-sm text-gray-700">{t('international.countriesTitle', 'Countries')}</p>
                      <p className="text-xs text-gray-600 mt-1">{t('international.countriesText', 'Spanning six continents')}</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">180+</div>
                      <p className="text-sm text-gray-700">{t('international.institutionsTitle', 'Partner Institutions')}</p>
                      <p className="text-xs text-gray-600 mt-1">{t('international.institutionsText', 'Leading universities worldwide')}</p>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                      <p className="text-sm text-gray-700">{t('international.programsTitle', 'Joint Programs')}</p>
                      <p className="text-xs text-gray-600 mt-1">{t('international.programsText', 'Dual and joint degrees')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Key Areas */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Key Areas of Cooperation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        {t('international.studentMobility', 'Student Mobility')}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {t('international.studentMobilityText', 'Our exchange programs enable students to study abroad at partner universities, gaining international experience while earning credits toward their AHEU degree.')}
                      </p>
                      <Link 
                        href="/international/students" 
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        {t('international.learnMore', 'Learn more')}
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        {t('international.facultyExchange', 'Faculty Exchange')}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {t('international.facultyExchangeText', 'We facilitate faculty mobility for teaching assignments, collaborative research, and professional development at partner institutions worldwide.')}
                      </p>
                      <Link 
                        href="/international/faculty" 
                        className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                      >
                        {t('international.learnMoreFaculty', 'Faculty opportunities')}
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Research Collaboration */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                    {t('international.researchTitle', 'International Research Collaboration')}
                  </h3>
                  <p className="mb-4">
                    {t('international.researchText', 'Research collaboration is a cornerstone of our international strategy. AHEU University engages in cutting-edge research with international partners to address global challenges and contribute to the advancement of knowledge.')}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {t('international.sustainableDev', 'Sustainable Development')}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t('international.sustainableDevText', 'Research on environmental sustainability, renewable energy, and climate change mitigation')}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {t('international.digitalTrans', 'Digital Transformation')}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t('international.digitalTransText', 'Studies on artificial intelligence, big data analytics, and digital innovation')}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* For International Students */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                    {t('international.internationalStudents', 'For International Students')}
                  </h3>
                  <p className="mb-6">
                    {t('international.internationalStudentsText', 'AHEU University welcomes students from around the world to join our diverse academic community. We provide comprehensive support services to help international students thrive during their time at AHEU.')}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-3">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        {t('international.admissionsSupport', 'Admissions Support')}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t('international.admissionsSupportText', 'Personalized guidance through the application process')}
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-3">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        {t('international.accommodation', 'Accommodation')}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t('international.accommodationText', 'Guaranteed housing for international students')}
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-3">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        {t('international.culturalIntegration', 'Cultural Integration')}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t('international.culturalIntegrationText', 'Language learning and cultural orientation programs')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">International Office</h3>
                  <p className="text-gray-700 mb-4">
                    Contact our International Office for information about partnerships, exchange programs, and international student services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/international/contact" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Contact Us
                    </Link>
                    <Link 
                      href="/international/students" 
                      className="inline-block border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors text-center"
                    >
                      For Students
                    </Link>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>International Office:</strong> <br />
                      Email: international@ageu.edu.kz <br />
                      Phone: +7 (727) 309-58-29
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InternationalPage; 