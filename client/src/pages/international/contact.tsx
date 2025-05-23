import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const InternationalContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('internationalContact.pageTitle', 'International Office Contact - AHEU University')}
      description={t('internationalContact.metaDescription', 'Contact information for AHEU University International Office. Get in touch for international programs, partnerships, and student services.')}
    >
      {/* Simple header with title */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('internationalContact.title', 'International Office Contact')}
            </h1>
            <p className="text-gray-600">
              {t('internationalContact.subtitle', 'Connect with our international programs team')}
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
            <Link href="/international/faculty" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('international.faculty', 'Faculty Exchange')}
            </Link>
            <Link href="/international/contact" className="text-green-600 font-medium border-b-2 border-green-600 whitespace-nowrap">
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
                {/* Main Contact Information */}
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">International Office</h2>
                  <p className="text-gray-700 mb-6">
                    Our International Office is your primary point of contact for all international activities, partnerships, and student services at AHEU University.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">General Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700">international@ageu.edu.kz</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-700">+7 (727) 309-58-29</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700">Building A, 2nd Floor, Room 205</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Monday - Friday: 9:00 - 18:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Office Location</h3>
                    <p className="text-gray-700 mb-4">
                      Visit us at the AHEU University main campus. The International Office is conveniently located on the second floor of Building A.
                    </p>
                    <div className="bg-white p-4 rounded border border-green-200">
                      <p className="text-sm font-medium text-gray-800">Address:</p>
                      <p className="text-sm text-gray-600">
                        AHEU University<br />
                        050010, Almaty, Kazakhstan<br />
                        Al-Farabi Avenue, 95
                      </p>
                    </div>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">International Admissions</h3>
                      <p className="text-sm text-gray-600 mb-3">For prospective international students</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Email:</span>
                          <span className="text-gray-700">admissions@ageu.edu.kz</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Phone:</span>
                          <span className="text-gray-700">ext. 302</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Contact:</span>
                          <span className="text-gray-700">Ms. Aida Nazarbayeva</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Student Exchange</h3>
                      <p className="text-sm text-gray-600 mb-3">For exchange programs and mobility</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Email:</span>
                          <span className="text-gray-700">exchange@ageu.edu.kz</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Phone:</span>
                          <span className="text-gray-700">ext. 304</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Contact:</span>
                          <span className="text-gray-700">Mr. Yerlan Omarov</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Partnerships</h3>
                      <p className="text-sm text-gray-600 mb-3">For institutional partnerships</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Email:</span>
                          <span className="text-gray-700">partnerships@ageu.edu.kz</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Phone:</span>
                          <span className="text-gray-700">ext. 305</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Contact:</span>
                          <span className="text-gray-700">Dr. Saule Zhaksylykova</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Faculty Exchange</h3>
                      <p className="text-sm text-gray-600 mb-3">For faculty mobility programs</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Email:</span>
                          <span className="text-gray-700">faculty.exchange@ageu.edu.kz</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Phone:</span>
                          <span className="text-gray-700">ext. 306</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-16 text-gray-500">Contact:</span>
                          <span className="text-gray-700">Prof. Marat Tulegenov</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours & Services */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Services & Office Hours</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-yellow-900 mb-3">Services We Provide</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• International student applications and admissions</li>
                        <li>• Student and faculty exchange coordination</li>
                        <li>• Partnership development and management</li>
                        <li>• Visa and immigration assistance</li>
                        <li>• Cultural orientation programs</li>
                        <li>• International student support services</li>
                        <li>• Study abroad counseling</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">Office Hours</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-gray-800">Regular Hours</p>
                          <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                          <p className="text-gray-600">Saturday: 9:00 - 13:00 (by appointment)</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Lunch Break</p>
                          <p className="text-gray-600">Monday - Friday: 13:00 - 14:00</p>
                        </div>
                        <div className="pt-2 border-t border-purple-200">
                          <p className="text-xs text-gray-500">
                            Walk-ins welcome during office hours.<br />
                            Appointments recommended for in-depth consultations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Link 
                      href="/apply" 
                      className="block bg-white border border-gray-200 p-4 rounded hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-800 mb-1">Apply Now</h4>
                      <p className="text-sm text-gray-600">Start your application to AHEU University</p>
                    </Link>
                    
                    <Link 
                      href="/international/students" 
                      className="block bg-white border border-gray-200 p-4 rounded hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-800 mb-1">International Students</h4>
                      <p className="text-sm text-gray-600">Information for prospective students</p>
                    </Link>
                    
                    <Link 
                      href="/international/partners" 
                      className="block bg-white border border-gray-200 p-4 rounded hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-800 mb-1">Partner Universities</h4>
                      <p className="text-sm text-gray-600">Explore our global network</p>
                    </Link>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Emergency Contact:</strong> For urgent matters outside office hours, 
                      please call the main university number at +7 (727) 309-58-29 and ask for the duty officer.
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

export default InternationalContactPage; 