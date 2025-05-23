import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import PageBreadcrumb from '../components/PageBreadcrumb';

const ApplyPage: React.FC = () => {
  const { t } = useTranslation();
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>{t('apply.pageTitle', 'Apply to AHEU University')}</title>
        <meta 
          name="description" 
          content={t('apply.metaDescription', 'Start your application to AHEU University. Our simple application process will help you begin your journey with us.')}
        />
      </Helmet>
      
      <MainLayout>
        <PageBreadcrumb 
          items={[
            { label: t('common.home'), href: '/' },
            { label: t('nav.admissions'), href: '/admissions' },
            { label: t('common.apply'), href: '/apply' }
          ]}
        />

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('apply.title', 'Apply to AHEU University')}
          </h1>
          
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {t('apply.thankYou', 'Thank You for Your Application!')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('apply.applicationReceived', 'Your application has been successfully submitted. You will receive a confirmation email shortly with further instructions.')}
                </p>
                <a
                  href="/"
                  className="inline-block bg-green-600 text-white px-6 py-2.5 rounded-md hover:bg-green-700 transition-colors"
                >
                  {t('common.backToHome', 'Back to Home')}
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {t('apply.applicationForm', 'Application Form')}
                    </h2>
                    <div className="text-sm font-medium text-gray-500">
                      {t('apply.step', 'Step')} {formStep} {t('apply.of', 'of')} 3
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                    <div
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(formStep / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Step 1: Personal Information */}
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {t('apply.personalInfo', 'Personal Information')}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('apply.firstName', 'First Name')}*
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('apply.lastName', 'Last Name')}*
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('apply.email', 'Email Address')}*
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('apply.phone', 'Phone Number')}*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Academic Information */}
                  {formStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {t('apply.academicInfo', 'Academic Information')}
                      </h3>
                      
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('apply.program', 'Program of Interest')}*
                        </label>
                        <select
                          id="program"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        >
                          <option value="">{t('apply.selectProgram', 'Select a program')}</option>
                          <option value="business">Business Administration</option>
                          <option value="economics">Economics</option>
                          <option value="law">Law</option>
                          <option value="education">Education</option>
                          <option value="design">Design</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('apply.education', 'Highest Level of Education')}*
                        </label>
                        <select
                          id="education"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        >
                          <option value="">{t('apply.selectEducation', 'Select education level')}</option>
                          <option value="highSchool">{t('apply.highSchool', 'High School')}</option>
                          <option value="bachelor">{t('apply.bachelor', "Bachelor's Degree")}</option>
                          <option value="master">{t('apply.master', "Master's Degree")}</option>
                          <option value="doctorate">{t('apply.doctorate', 'Doctorate')}</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Additional Information */}
                  {formStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {t('apply.additionalInfo', 'Additional Information')}
                      </h3>
                      
                      <div>
                        <label htmlFor="hear" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('apply.howHeard', 'How did you hear about us?')}
                        </label>
                        <select
                          id="hear"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">{t('apply.select', 'Select an option')}</option>
                          <option value="website">{t('apply.website', 'Website')}</option>
                          <option value="socialMedia">{t('apply.socialMedia', 'Social Media')}</option>
                          <option value="friend">{t('apply.friend', 'Friend or Family')}</option>
                          <option value="event">{t('apply.event', 'Event or Fair')}</option>
                          <option value="other">{t('apply.other', 'Other')}</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('apply.comments', 'Additional Comments')}
                        </label>
                        <textarea
                          id="comments"
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agree"
                          className="mt-1"
                          required
                        />
                        <label htmlFor="agree" className="ml-2 block text-sm text-gray-700">
                          {t('apply.agreeTerms', 'I agree to the terms and conditions and privacy policy')}*
                        </label>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-between">
                    {formStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        {t('common.back', 'Back')}
                      </button>
                    )}
                    
                    <div className="ml-auto">
                      {formStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          {t('common.next', 'Next')}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          {t('apply.submit', 'Submit Application')}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            <div className="mt-12 bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">
                {t('apply.contactAdmissions', 'Contact Admissions')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('apply.questions', 'Have questions about the application process? Our admissions team is here to help.')}
              </p>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:admissions@aheu.edu.kz" className="text-green-600 hover:underline">
                  admissions@aheu.edu.kz
                </a>
              </div>
              <div className="flex items-center mt-2">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">+7 (727) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ApplyPage; 