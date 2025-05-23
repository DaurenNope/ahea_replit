import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const PartnersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('partners.pageTitle', 'Partner Universities - AHEU University')}
      description={t('partners.metaDescription', 'Discover our global network of partner universities and international collaborations for student exchange and academic cooperation.')}
    >
      {/* Simple header with title */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('partners.title', 'Partner Universities')}
            </h1>
            <p className="text-gray-600">
              {t('partners.subtitle', 'Global network of academic partnerships')}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-6 overflow-x-auto py-3 text-sm">
            <Link href="/international" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.overview', 'Overview')}
            </Link>
            <Link href="/international/partners" className="text-green-600 font-medium border-b-2 border-green-600 whitespace-nowrap">
              {t('international.partners', 'Partners')}
            </Link>
            <Link href="/international/students" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
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
                {/* Partner Universities by Region */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner Universities by Region</h2>
                  
                  {/* Europe */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-blue-200 pb-2">Europe</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">University of Warsaw</h4>
                        <p className="text-sm text-gray-600 mb-2">Poland</p>
                        <p className="text-xs text-gray-500">Business, Economics, Law</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Charles University</h4>
                        <p className="text-sm text-gray-600 mb-2">Czech Republic</p>
                        <p className="text-xs text-gray-500">Humanities, Social Sciences</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">University of Vienna</h4>
                        <p className="text-sm text-gray-600 mb-2">Austria</p>
                        <p className="text-xs text-gray-500">International Relations, Languages</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Bologna University</h4>
                        <p className="text-sm text-gray-600 mb-2">Italy</p>
                        <p className="text-xs text-gray-500">Design, Arts, Culture</p>
                      </div>
                    </div>
                  </div>

                  {/* Asia */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-green-900 mb-4 border-b border-green-200 pb-2">Asia</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Seoul National University</h4>
                        <p className="text-sm text-gray-600 mb-2">South Korea</p>
                        <p className="text-xs text-gray-500">Technology, Engineering, Business</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Kyoto University</h4>
                        <p className="text-sm text-gray-600 mb-2">Japan</p>
                        <p className="text-xs text-gray-500">Research, Innovation, Sciences</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Peking University</h4>
                        <p className="text-sm text-gray-600 mb-2">China</p>
                        <p className="text-xs text-gray-500">Economics, International Studies</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Istanbul University</h4>
                        <p className="text-sm text-gray-600 mb-2">Turkey</p>
                        <p className="text-xs text-gray-500">Law, History, Literature</p>
                      </div>
                    </div>
                  </div>

                  {/* CIS Countries */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4 border-b border-purple-200 pb-2">CIS Countries</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Moscow State University</h4>
                        <p className="text-sm text-gray-600 mb-2">Russia</p>
                        <p className="text-xs text-gray-500">All Disciplines</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Tashkent University</h4>
                        <p className="text-sm text-gray-600 mb-2">Uzbekistan</p>
                        <p className="text-xs text-gray-500">Regional Studies, Business</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Kyrgyz National University</h4>
                        <p className="text-sm text-gray-600 mb-2">Kyrgyzstan</p>
                        <p className="text-xs text-gray-500">Education, Social Sciences</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800">Belarusian State University</h4>
                        <p className="text-sm text-gray-600 mb-2">Belarus</p>
                        <p className="text-xs text-gray-500">Sciences, Technology</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partnership Benefits */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Student Exchange</h3>
                      <p className="text-sm text-gray-600">Semester or year-long study abroad opportunities</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Joint Degrees</h3>
                      <p className="text-sm text-gray-600">Dual degree programs with international recognition</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Research Collaboration</h3>
                      <p className="text-sm text-gray-600">Joint research projects and academic cooperation</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">International Partnerships Office</h3>
                  <p className="text-gray-700 mb-4">
                    For information about establishing new partnerships or collaboration opportunities, contact our International Partnerships Office.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Contact Information</p>
                      <p className="text-sm text-gray-600">Email: partnerships@ageu.edu.kz</p>
                      <p className="text-sm text-gray-600">Phone: +7 (727) 309-58-29 ext. 305</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Office Hours</p>
                      <p className="text-sm text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                      <p className="text-sm text-gray-600">Building A, Room 205</p>
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

export default PartnersPage; 