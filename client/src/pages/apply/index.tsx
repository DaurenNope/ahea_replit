import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

// Step components will be imported here
const PersonalInfoForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Citizenship</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select country</option>
            <option value="KZ">Kazakhstan</option>
            <option value="RU">Russia</option>
            <option value="UZ">Uzbekistan</option>
            <option value="KG">Kyrgyzstan</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const AcademicInfoForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Academic Information</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Previous Educational Institution</label>
        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type of Education</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select type</option>
            <option value="high_school">High School</option>
            <option value="college">College</option>
            <option value="university">University</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year of Completion</label>
          <input type="number" min="1990" max="2023" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">GPA or Average Score</label>
        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
    </div>
  );
};

const ProgramSelectionForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Program Selection</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Degree Level</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select degree level</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Faculty/School</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select faculty</option>
          <option value="business">School of Business & Management</option>
          <option value="engineering">School of Engineering</option>
          <option value="humanities">Faculty of Humanities</option>
          <option value="science">Faculty of Science</option>
          <option value="law">School of Law</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select program</option>
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
          <option value="management">Management</option>
          <option value="accounting">Accounting</option>
          <option value="economics">Economics</option>
        </select>
      </div>
    </div>
  );
};

const ReviewForm = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Application Review</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-2">Personal Information</h4>
        <p className="text-sm text-gray-600">Review your personal details before submission.</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-2">Academic Background</h4>
        <p className="text-sm text-gray-600">Verify your educational information.</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-2">Program Selection</h4>
        <p className="text-sm text-gray-600">Confirm your chosen program and degree level.</p>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center mb-4">
          <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500" />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            I confirm that all information provided is accurate and complete
          </label>
        </div>
        <div className="flex items-center">
          <input id="contact" name="contact" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500" />
          <label htmlFor="contact" className="ml-2 text-sm text-gray-700">
            I agree to be contacted regarding my application
          </label>
        </div>
      </div>
    </div>
  );
};

const ApplyPage: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const steps = [
    { id: 1, name: t('apply.personalInfo', 'Personal Information') },
    { id: 2, name: t('apply.academicInfo', 'Academic Information') },
    { id: 3, name: t('apply.programSelection', 'Program Selection') },
    { id: 4, name: t('apply.review', 'Review & Submit') },
  ];
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <AcademicInfoForm />;
      case 3:
        return <ProgramSelectionForm />;
      case 4:
        return <ReviewForm />;
      default:
        return null;
    }
  };

  return (
    <MainLayout
      title={t('apply.pageTitle', 'Apply to AHEU University')}
      description={t('apply.metaDescription', 'Start your application to AHEU University. Apply online for undergraduate, graduate, and doctoral programs.')}
    >
      {/* Simple header with title */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('apply.title', 'Apply to AHEU')}
            </h1>
            <p className="text-gray-600">
              {t('apply.subtitle', 'Start your journey with us today')}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-6 overflow-x-auto py-3 text-sm">
            <Link href="/admissions" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('admissions.overview', 'Overview')}
            </Link>
            <Link href="/admissions?tab=undergraduate" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('admissions.undergraduate', 'Undergraduate')}
            </Link>
            <Link href="/admissions?tab=graduate" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('admissions.graduate', 'Graduate')}
            </Link>
            <Link href="/admissions?tab=international" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('admissions.international', 'International')}
            </Link>
            <Link href="/admissions/tuition" className="text-gray-600 hover:text-green-600 whitespace-nowrap">
              {t('admissions.tuition', 'Tuition & Aid')}
            </Link>
            <Link href="/apply" className="text-green-600 font-medium border-b-2 border-green-600 whitespace-nowrap">
              {t('admissions.apply', 'Apply Now')}
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
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('apply.title', 'Application for Admission')}</h2>
                
                {/* Application progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {steps.map(step => (
                      <div 
                        key={step.id} 
                        className={`flex flex-col items-center ${currentStep >= step.id ? 'text-green-600' : 'text-gray-400'}`}
                      >
                        <div 
                          className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                            currentStep === step.id
                              ? 'border-green-600 bg-green-100'
                              : currentStep > step.id
                              ? 'border-green-600 bg-green-600 text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {currentStep > step.id ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            step.id
                          )}
                        </div>
                        <span className={`text-sm mt-2 font-medium hidden sm:block ${currentStep >= step.id ? '' : 'text-gray-500'}`}>{step.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Form content */}
                <div className="mb-8 bg-gray-50 rounded-lg p-6">
                  {renderStepContent()}
                </div>
                
                {/* Navigation buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-2 border border-gray-300 rounded-md shadow-sm font-medium ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t('apply.back', 'Back')}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`px-6 py-2 border border-transparent rounded-md shadow-sm font-medium text-white ${
                      currentStep === totalSteps
                        ? 'bg-green-700 hover:bg-green-800'
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {currentStep === totalSteps
                      ? t('apply.submit', 'Submit Application')
                      : t('apply.continue', 'Continue')}
                  </button>
                </div>
                
                {/* Help information */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-blue-800">{t('apply.needHelp', 'Need Help?')}</h3>
                      <p className="mt-1 text-sm text-blue-700">
                        {t('apply.helpText', 'If you have any questions or need assistance with your application, please contact our Admissions Office at ')}
                        <a href="mailto:admissions@aheu.edu.kz" className="font-medium underline">admissions@ageu.edu.kz</a> 
                        {t('apply.or', ' or call ')}
                        <a href="tel:+77273095829" className="font-medium underline">+7 (727) 309-58-29</a>.
                      </p>
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

export default ApplyPage; 