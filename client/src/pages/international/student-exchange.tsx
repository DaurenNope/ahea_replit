import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const StudentExchangePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('studentExchange.pageTitle', 'Student Exchange Programs - AHEU University')}
      description={t('studentExchange.metaDescription', 'Explore international student exchange opportunities at AHEU University. Partner universities, eligibility requirements, application process, and more.')}
    >
      {/* Simple header with title */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('studentExchange.hero.title', 'Student Exchange Programs')}
            </h1>
            <p className="text-gray-600">
              {t('studentExchange.hero.subtitle', 'Discover the world through academic exchange')}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary navigation for international section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-6 overflow-x-auto py-3 text-sm">
            <Link href="/international" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.overview', 'Overview')}
            </Link>
            <Link href="/international/partners" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.partners', 'Partners')}
            </Link>
            <Link href="/international/students" className="text-green-600 font-medium border-b-2 border-green-600 whitespace-nowrap">
              {t('international.students', 'International Students')}
            </Link>
            <Link href="/international/faculty" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.faculty', 'Faculty Exchange')}
            </Link>
            <Link href="/international/contact" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.contact', 'Contact')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('studentExchange.title', 'Student Exchange Programs')}</h2>
                
                {/* About Exchange Programs */}
                <div className="mb-8">
                  <p className="mb-4">
                    {t('studentExchange.programsDescription', 'The AHEU University Student Exchange Programs offer unique opportunities for academic and cultural exchange with prestigious universities around the world. Our programs are designed to enrich your educational experience and provide valuable international exposure.')}
                  </p>
                  <p className="mb-4">
                    {t('studentExchange.benefits', 'Participating in an exchange program allows you to earn credits toward your AHEU degree while experiencing different teaching methodologies, expanding your global network, and enhancing your language skills.')}
                  </p>
                </div>
                
                {/* Partner Universities */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                    {t('studentExchange.partnerUniversities', 'Partner Universities')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">University of Warsaw</h4>
                      <p className="text-sm text-gray-600">Poland • Business & Economics</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">Istanbul University</h4>
                      <p className="text-sm text-gray-600">Turkey • Law & Humanities</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">Seoul National University</h4>
                      <p className="text-sm text-gray-600">South Korea • Technology & Engineering</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">Kyoto University</h4>
                      <p className="text-sm text-gray-600">Japan • International Relations</p>
                    </div>
                  </div>
                </div>
                
                {/* Requirements & Process */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                      {t('studentExchange.eligibility', 'Eligibility Requirements')}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>{t('studentExchange.requirement1', 'Completion of at least one year of study at AHEU University')}</li>
                      <li>{t('studentExchange.requirement2', 'Minimum GPA of 3.0 or equivalent')}</li>
                      <li>{t('studentExchange.requirement3', 'Language proficiency requirements')}</li>
                      <li>{t('studentExchange.requirement4', 'Good academic and disciplinary standing')}</li>
                      <li>{t('studentExchange.requirement5', 'Department approval')}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                      {t('studentExchange.importantDates', 'Important Dates')}
                    </h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                        <p className="text-sm text-gray-600">{t('studentExchange.fallSemester', 'Fall Semester Applications')}</p>
                        <p className="font-medium">March 15 - April 30</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                        <p className="text-sm text-gray-600">{t('studentExchange.springSemester', 'Spring Semester Applications')}</p>
                        <p className="font-medium">September 15 - October 31</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Application Process */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mt-6 mb-3 text-primary">
                    {t('studentExchange.application', 'Application Process')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">1</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-800">
                            {t('studentExchange.step1Title', 'Research and Select')}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t('studentExchange.step1Description', 'Research partner universities and select your preferred destinations.')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">2</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-800">
                            {t('studentExchange.step2Title', 'Consult with Advisor')}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t('studentExchange.step2Description', 'Meet with your academic advisor for course planning and approval.')}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">3</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-800">
                            {t('studentExchange.step3Title', 'Submit Application')}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t('studentExchange.step3Description', 'Complete application with required documents and essays.')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">4</div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-800">
                            {t('studentExchange.step4Title', 'Selection and Nomination')}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t('studentExchange.step4Description', 'Review process and nomination to partner university.')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {t('studentExchange.contactInfo', 'Contact Information')}
                  </h3>
                  <p className="mb-4 text-gray-700">{t('studentExchange.internationalOffice', 'International Office')}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>international@ageu.edu.kz</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>+7 (727) 309-58-29 ext. 304</span>
                    </div>
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

export default StudentExchangePage; 