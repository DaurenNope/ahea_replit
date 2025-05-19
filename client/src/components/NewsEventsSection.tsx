import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { news, events } from '@/data/news';

interface NewsEventsSectionProps {
  institutionId?: string;
}

const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({ institutionId }) => {
  const { t } = useTranslation();
  
  // Filter news and events by institution if institutionId is provided
  const filteredNews = institutionId
    ? news.filter(item => item.institute === institutionId || item.institute === 'all')
    : news;
    
  const filteredEvents = institutionId
    ? events.filter(item => item.institute === institutionId || item.institute === 'all')
    : events;
  
  // Get the latest 3 news and events
  const latestNews = filteredNews.slice(0, 3);
  const upcomingEvents = filteredEvents.slice(0, 3);
  
  return (
    <section className="py-16 bg-aheu-neutral-lighter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {institutionId 
              ? t(`institutes.${institutionId}.newsEventsTitle`, t('news.sectionTitle'))
              : t('news.sectionTitle')}
          </h2>
          <p className="section-subtitle">
            {institutionId
              ? t(`institutes.${institutionId}.newsEventsSubtitle`, t('news.sectionSubtitle')) 
              : t('news.sectionSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* News Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('news.latestNews')}</h3>
            <div className="space-y-6">
              {latestNews.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center text-aheu-neutral-medium text-sm mb-2">
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{t(`news.categories.${item.category}`)}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {t(`news.items.${item.id}.title`)}
                    </h4>
                    <p className="text-aheu-neutral-dark mb-4">
                      {t(`news.items.${item.id}.excerpt`)}
                    </p>
                    <Link href={`/news/${item.id}`}>
                      <a className="text-primary hover:text-secondary font-medium flex items-center">
                        {t('common.readMore')}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href={institutionId ? `/institutions/${institutionId}/news` : "/news"}>
                <a className="text-primary hover:text-secondary font-medium">
                  {t('news.viewAll')}
                </a>
              </Link>
            </div>
          </div>
          
          {/* Events Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('events.upcomingEvents')}</h3>
            <div className="space-y-6">
              {upcomingEvents.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <div className="flex items-center text-aheu-neutral-medium text-sm mb-2">
                          <span>{item.date}</span>
                          <span className="mx-2">•</span>
                          <span>{t(`events.categories.${item.category}`)}</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">
                          {t(`events.${item.id}.title`)}
                        </h4>
                        <p className="text-aheu-neutral-dark">
                          {t(`events.${item.id}.location`)}
                        </p>
                      </div>
                      <div className="bg-primary text-white rounded-md px-3 py-2 text-center min-w-[60px]">
                        <div className="text-xs">{t(`events.${item.id}.month`)}</div>
                        <div className="text-xl font-bold">{t(`events.${item.id}.day`)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href={institutionId ? `/institutions/${institutionId}/events` : "/events"}>
                <a className="text-primary hover:text-secondary font-medium">
                  {t('events.viewAll')}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
