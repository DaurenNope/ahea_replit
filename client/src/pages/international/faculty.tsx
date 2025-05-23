import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const InternationalFacultyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('internationalFaculty.pageTitle', 'International Faculty Exchange - AHEU University')}
      description={t('internationalFaculty.metaDescription', 'Faculty exchange programs and visiting scholar opportunities at AHEU University. International collaboration for academic staff and researchers.')}
    >
      {/* Simple header with title */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('internationalFaculty.title', 'International Faculty Exchange')}
            </h1>
            <p className="text-gray-600">
              {t('internationalFaculty.subtitle', 'Global academic collaboration and faculty mobility')}
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
            <Link href="/international/partners" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.partners', 'Partners')}
            </Link>
            <Link href="/international/students" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.students', 'International Students')}
            </Link>
            <Link href="/international/faculty" className="text-green-600 font-medium border-b-2 border-green-600 whitespace-nowrap">
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
                {/* Overview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Faculty Exchange Programs</h2>
                  <p className="text-gray-700 mb-4">
                    AHEU University actively promotes international faculty exchange to enhance academic quality, foster research collaboration, and provide enriching global experiences for our academic community.
                  </p>
                  <p className="text-gray-700">
                    Our exchange programs offer opportunities for faculty members to teach, conduct research, and engage in professional development at partner institutions worldwide.
                  </p>
                </div>

                {/* Exchange Types */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Exchange Programs</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Teaching Exchange</h3>
                      <p className="text-gray-700 mb-3">
                        Faculty members teach courses at partner universities while experiencing different educational systems and methodologies.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Duration: 1 semester to 1 academic year</li>
                        <li>• Language of instruction: English, Russian, or local language</li>
                        <li>• Full salary maintenance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Research Exchange</h3>
                      <p className="text-gray-700 mb-3">
                        Collaborative research projects with international colleagues, accessing specialized facilities and expertise.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Duration: 1 month to 1 year</li>
                        <li>• Joint research publications</li>
                        <li>• Shared resources and funding</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits for Faculty</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Professional Development</h3>
                      <p className="text-sm text-gray-600">Enhance teaching methods and research skills through international exposure</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Network Building</h3>
                      <p className="text-sm text-gray-600">Establish lasting professional relationships with international colleagues</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Research Innovation</h3>
                      <p className="text-sm text-gray-600">Access to new perspectives, methodologies, and research opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Application Process */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Initial Application</h3>
                        <p className="text-sm text-gray-600">Submit expression of interest with CV and research/teaching proposal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Internal Review</h3>
                        <p className="text-sm text-gray-600">Faculty committee evaluates application and selects candidates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Partner Matching</h3>
                        <p className="text-sm text-gray-600">Coordination with partner institutions for placement and timing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Final Approval</h3>
                        <p className="text-sm text-gray-600">Administrative processing and exchange agreement finalization</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Minimum 3 years of teaching/research experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Demonstrated research productivity and publications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Language proficiency (English, Russian, or partner institution language)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Department head recommendation and approval</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Clear academic objectives and expected outcomes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Visiting Faculty */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hosting Visiting Faculty</h2>
                  <p className="text-gray-700 mb-4">
                    AHEU University welcomes international visiting faculty members who can contribute to our academic programs and research initiatives.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">What We Offer</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Office space and research facilities</li>
                        <li>• Library and database access</li>
                        <li>• Administrative support</li>
                        <li>• Cultural orientation and social activities</li>
                        <li>• Assistance with visa and accommodation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Areas of Interest</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Business and Economics</li>
                        <li>• International Relations</li>
                        <li>• Pedagogy and Education</li>
                        <li>• Information Technology</li>
                        <li>• Environmental Studies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Faculty Exchange Office</h3>
                  <p className="text-gray-700 mb-4">
                    For more information about faculty exchange opportunities or to apply for a program, contact our Faculty Exchange Office.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Contact Information</p>
                      <p className="text-sm text-gray-600">Email: faculty.exchange@ageu.edu.kz</p>
                      <p className="text-sm text-gray-600">Phone: +7 (727) 309-58-29 ext. 306</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Office Hours</p>
                      <p className="text-sm text-gray-600">Monday - Friday: 9:00 - 17:30</p>
                      <p className="text-sm text-gray-600">Building B, Room 301</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Application Deadlines:</strong> <br />
                      Fall Semester: March 1 | Spring Semester: October 1
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

export default InternationalFacultyPage; 