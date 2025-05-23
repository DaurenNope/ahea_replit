import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const TuitionPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('tuition.pageTitle', 'Tuition & Scholarships - AHEU University')}
      description={t('tuition.metaDescription', 'Learn about tuition fees, payment options, and scholarship opportunities at AHEU University. Financial aid and support for students.')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('tuition.title', 'Tuition & Scholarships')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('tuition.subtitle', 'Affordable education with financial support opportunities')}
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
                {/* Tuition Fees */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuition Fees</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Undergraduate Programs</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Annual Tuition (Local)</span>
                          <span className="font-medium">₸850,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Annual Tuition (International)</span>
                          <span className="font-medium">$3,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Registration Fee</span>
                          <span className="font-medium">₸25,000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Graduate Programs</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Annual Tuition (Local)</span>
                          <span className="font-medium">₸950,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Annual Tuition (International)</span>
                          <span className="font-medium">$4,200</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Thesis Fee</span>
                          <span className="font-medium">₸50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Full Payment</h4>
                      <p className="text-sm text-gray-600">Pay annual tuition in full and receive 5% discount</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Semester Payment</h4>
                      <p className="text-sm text-gray-600">Pay tuition twice per year at semester start</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Monthly Installment</h4>
                      <p className="text-sm text-gray-600">Spread payments over 10 months with no interest</p>
                    </div>
                  </div>
                </div>

                {/* Scholarships */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">Merit Scholarships</h4>
                      <p className="text-sm text-gray-700 mb-2">Up to 50% tuition reduction for outstanding academic performance</p>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>GPA 3.8+ : 50% scholarship</li>
                        <li>GPA 3.5-3.7: 30% scholarship</li>
                        <li>GPA 3.2-3.4: 15% scholarship</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">Need-Based Aid</h4>
                      <p className="text-sm text-gray-700">Financial assistance for students demonstrating economic need</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 bg-green-50 p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">Government Grants</h4>
                      <p className="text-sm text-gray-700">State educational grants for eligible Kazakhstani students</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Information</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Tuition fees are subject to annual review and may change</li>
                    <li>• Additional fees may apply for laboratory courses and field trips</li>
                    <li>• International students may require additional health insurance</li>
                    <li>• Scholarship applications must be submitted by May 1st</li>
                    <li>• Financial aid counselors are available for consultation</li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Contact Financial Aid Office:</strong> <br />
                      Email: finance@ageu.edu.kz <br />
                      Phone: +7 (727) 309-58-29 ext. 201
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

export default TuitionPage; 