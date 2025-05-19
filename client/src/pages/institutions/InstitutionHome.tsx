import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'wouter';
import { Helmet } from 'react-helmet';
import { institutes } from '@/data/institutes';

// This component will serve as a template for institution-specific home pages
const InstitutionHome: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const htmlLang = i18n.language || 'en';
  
  // Find the current institution from our data
  const institute = institutes.find(inst => inst.id === id);
  
  if (!institute) {
    return <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-red-500">Institution not found</p>
    </div>;
  }

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{t(`institutes.${id}.name`)} - AHEU</title>
        <meta name="description" content={t(`institutes.${id}.description`, 'A leading institution at Almaty Humanitarian Economic University.')} />
      </Helmet>

      <div className="min-h-screen">
        {/* Institution-specific header */}
        <header className="bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <a href="/" className="text-white hover:text-white/80">← AHEU</a>
                <h1 className="text-2xl md:text-3xl font-bold">{t(`institutes.${id}.shortName`)}</h1>
              </div>
              
              {/* Institution-specific language switcher and navigation could go here */}
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex gap-6">
                  <a href={`/institutions/${id}/about`} className="text-white hover:text-white/80">
                    {t('nav.about')}
                  </a>
                  <a href={`/institutions/${id}/programs`} className="text-white hover:text-white/80">
                    {t('nav.programs')}
                  </a>
                  <a href={`/institutions/${id}/faculty`} className="text-white hover:text-white/80">
                    {t('common.faculty')}
                  </a>
                  <a href={`/institutions/${id}/research`} className="text-white hover:text-white/80">
                    {t('common.research')}
                  </a>
                  <a href={`/institutions/${id}/contact`} className="text-white hover:text-white/80">
                    {t('nav.contactUs')}
                  </a>
                </nav>
                <a href="/home" className="text-white hover:text-white/80 border border-white px-3 py-1 rounded text-sm">
                  {t('common.mainUniversity', 'Main University')}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero section with institute-specific styling */}
        <section className="relative">
          <div 
            className="w-full h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: `url('https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')` }}
          >
            <div className="absolute inset-0 bg-primary/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                {t(`institutes.${id}.fullName`, t(`institutes.${id}.name`))}
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-3xl">
                {t(`institutes.${id}.description`)}
              </p>
            </div>
          </div>
        </section>

        {/* Key statistics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{institute.programCount}</div>
                <div className="text-lg">{t('institutes.programs')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{institute.studentCount}+</div>
                <div className="text-lg">{t('institutes.students')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{institute.facultyCount}</div>
                <div className="text-lg">{t('common.faculty')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{institute.established}</div>
                <div className="text-lg">{t('common.established')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured programs */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('programs.featuredPrograms')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* This would be dynamically populated with institute-specific programs */}
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t(`programs.items.${['business-administration', 'law', 'education'][index]}.title`)}</h3>
                    <p className="text-gray-600 mb-4">{t(`programs.items.${['business-administration', 'law', 'education'][index]}.description`)}</p>
                    <a href={`/institutions/${id}/programs/${['business-administration', 'law', 'education'][index]}`} className="text-primary font-medium hover:underline">
                      {t('common.learnMore')} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={`/institutions/${id}/programs`} className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                {t('programs.viewAllPrograms')}
              </a>
            </div>
          </div>
        </section>

        {/* News and events section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('nav.newsEvents')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('common.latestNews')}</h3>
                <div className="space-y-4">
                  {/* News items would be dynamically populated */}
                  {Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-1">{t(`news.items.${['research-grant', 'international-conference', 'award'][index]}.title`)}</h4>
                      <p className="text-gray-600 text-sm mb-2">{t(`news.items.${['research-grant', 'international-conference', 'award'][index]}.excerpt`)}</p>
                      <a href="#" className="text-primary text-sm font-medium hover:underline">{t('common.readMore')} →</a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('common.upcomingEvents')}</h3>
                <div className="space-y-4">
                  {/* Event items would be dynamically populated */}
                  {Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-1">{t(`events.${['open-house', 'orientation', 'summer-school'][index]}.title`)}</h4>
                      <p className="text-gray-600 text-sm">May {15 + index}, 2023</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institution-specific footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">{t(`institutes.${id}.shortName`)}</h3>
                <p className="text-gray-300 mb-4">{t(`institutes.${id}.slogan`, 'Excellence in education and research')}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
                <ul className="space-y-2">
                  <li><a href={`/institutions/${id}/about`} className="text-gray-300 hover:text-white">{t('nav.about')}</a></li>
                  <li><a href={`/institutions/${id}/programs`} className="text-gray-300 hover:text-white">{t('nav.programs')}</a></li>
                  <li><a href={`/institutions/${id}/faculty`} className="text-gray-300 hover:text-white">{t('common.faculty')}</a></li>
                  <li><a href={`/institutions/${id}/research`} className="text-gray-300 hover:text-white">{t('common.research')}</a></li>
                  <li><a href={`/institutions/${id}/news`} className="text-gray-300 hover:text-white">{t('nav.newsEvents')}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
                <address className="not-italic text-gray-300 space-y-2">
                  <div>{t('contact.address.street')}</div>
                  <div>{t('contact.address.city')}, {t('contact.address.postalCode')}</div>
                  <div>{t('contact.address.country')}</div>
                  <div className="pt-2">
                    <strong>{t('contact.phone')}:</strong> +7 (727) 279-95-69
                  </div>
                  <div>
                    <strong>{t('contact.email')}:</strong> info@aheu.edu.kz
                  </div>
                </address>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} {t(`institutes.${id}.shortName`)}. {t('footer.copyright')}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InstitutionHome; 