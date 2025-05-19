import React from 'react';
import { useParams } from 'wouter';
import { useTranslation } from 'react-i18next';
import InstitutionLayout from '@/layouts/InstitutionLayout';
import { institutes } from '@/data/institutes';

const InstitutionAbout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // Find the current institution from our data
  const institute = institutes.find(inst => inst.id === id);
  
  if (!institute) {
    return null;
  }

  return (
    <InstitutionLayout
      pageTitle={t('nav.about')}
      description={t(`institutes.${id}.aboutDescription`, 'Learn about our history, mission, and values.')}
    >
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('nav.about')}</h1>
          
          {/* Mission & Vision */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t('nav.missionVision')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">{t('about.mission.title')}</h3>
                <p className="text-gray-700">
                  {t(`institutes.${id}.mission`, t('about.mission.description'))}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">{t('about.vision.title')}</h3>
                <p className="text-gray-700">
                  {t(`institutes.${id}.vision`, t('about.vision.description'))}
                </p>
              </div>
            </div>
          </section>
          
          {/* History */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t('nav.historyHeritage')}</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{t('about.history.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t(`institutes.${id}.history1`, t('about.history.p1'))}
                </p>
                <p className="text-gray-700 mb-4">
                  {t(`institutes.${id}.history2`, t('about.history.p2'))}
                </p>
                <p className="text-gray-700">
                  {t(`institutes.${id}.history3`, t('about.history.p3'))}
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">{t('about.keyMilestones')}</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white font-bold py-1 px-3 rounded mr-4">{institute.established}</div>
                    <div>
                      <p className="font-medium">{t(`institutes.${id}.milestone1.title`, t('about.milestones.establishment'))}</p>
                      <p className="text-gray-600 text-sm">{t(`institutes.${id}.milestone1.description`, t('about.milestones.establishmentDesc'))}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white font-bold py-1 px-3 rounded mr-4">{institute.established + 5}</div>
                    <div>
                      <p className="font-medium">{t(`institutes.${id}.milestone2.title`, t('about.milestones.expansion'))}</p>
                      <p className="text-gray-600 text-sm">{t(`institutes.${id}.milestone2.description`, t('about.milestones.expansionDesc'))}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white font-bold py-1 px-3 rounded mr-4">{institute.established + 10}</div>
                    <div>
                      <p className="font-medium">{t(`institutes.${id}.milestone3.title`, t('about.milestones.recognition'))}</p>
                      <p className="text-gray-600 text-sm">{t(`institutes.${id}.milestone3.description`, t('about.milestones.recognitionDesc'))}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Leadership */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t('nav.leadership')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* This would be dynamically populated with institute-specific leadership */}
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{t(`institutes.${id}.leadership${index+1}.name`, `Dr. John Doe ${index+1}`)}</h3>
                    <p className="text-primary mb-3">{t(`institutes.${id}.leadership${index+1}.title`, `Dean of Faculty ${index+1}`)}</p>
                    <p className="text-gray-600 text-sm">
                      {t(`institutes.${id}.leadership${index+1}.bio`, 'Experienced educator with extensive background in research and academic leadership.')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Accreditation */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('nav.accreditation')}</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                {t(`institutes.${id}.accreditation`, t('about.accreditation.description'))}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array(4).fill(0).map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
                    <p className="font-medium text-center">{t(`about.accreditation.body${index+1}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </InstitutionLayout>
  );
};

export default InstitutionAbout; 