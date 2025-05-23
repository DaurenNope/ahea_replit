import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const InternationalStudentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('internationalStudents.pageTitle', 'International Students - AHEU University')}
      description={t('internationalStudents.metaDescription', 'Information and support for international students at AHEU University. Application process, visa requirements, accommodation, and student services.')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-secondary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('internationalStudents.title', 'International Students')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('internationalStudents.subtitle', 'Your guide to studying at AHEU University')}
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
                {/* Welcome Message */}
                <div className="mb-8 text-center bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">Welcome to AHEU University!</h2>
                  <p className="text-blue-800">
                    Join our diverse international community of students from over 25 countries studying at one of Kazakhstan's leading universities.
                  </p>
                </div>

                {/* Why Choose AHEU */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose AHEU?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Quality Education</h3>
                        <p className="text-sm text-gray-600">Internationally recognized programs with modern curriculum</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Affordable Tuition</h3>
                        <p className="text-sm text-gray-600">Competitive fees with scholarship opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Great Location</h3>
                        <p className="text-sm text-gray-600">Study in beautiful Almaty, Kazakhstan's cultural capital</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Multicultural Environment</h3>
                        <p className="text-sm text-gray-600">Diverse student body from around the world</p>
                      </div>
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
                        <h3 className="font-semibold text-gray-800">Submit Application</h3>
                        <p className="text-sm text-gray-600">Complete online application with required documents</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Document Review</h3>
                        <p className="text-sm text-gray-600">Admissions committee reviews your application</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Acceptance & Visa</h3>
                        <p className="text-sm text-gray-600">Receive acceptance letter and apply for student visa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Arrival & Orientation</h3>
                        <p className="text-sm text-gray-600">Attend orientation program and begin studies</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h2>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Completed application form</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Passport copy (valid for at least 2 years)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Academic transcripts (translated and notarized)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Diploma/degree certificate (if applicable)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>English proficiency test results (IELTS/TOEFL)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Medical certificate</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Passport-size photographs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Support Services */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Support Services</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Accommodation</h3>
                      <p className="text-sm text-gray-600">On-campus dormitories and off-campus housing assistance</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Language Support</h3>
                      <p className="text-sm text-gray-600">Russian and Kazakh language courses for international students</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Student Life</h3>
                      <p className="text-sm text-gray-600">Cultural activities, clubs, and international student organizations</p>
                    </div>
                  </div>
                </div>

                {/* Contact & Apply */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Ready to Apply?</h3>
                  <p className="text-gray-700 mb-4">
                    Start your journey at AHEU University today. Our international admissions team is here to help you every step of the way.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/apply" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Apply Now
                    </Link>
                    <Link 
                      href="/international/contact" 
                      className="inline-block border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>International Admissions Office:</strong> <br />
                      Email: international@ageu.edu.kz <br />
                      Phone: +7 (727) 309-58-29 ext. 302
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

export default InternationalStudentsPage; 