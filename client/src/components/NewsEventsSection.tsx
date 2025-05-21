import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { newsItems, upcomingEvents } from '@/data/news';
import { formatDate } from '@/lib/utils';
import SectionTitle from '@/components/ui/section-title';

const NewsEventsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-aheu-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={t('newsEvents.sectionTitle')} 
          subtitle={t('newsEvents.sectionSubtitle')}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* News Items */}
          {newsItems.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={`https://images.unsplash.com/${item.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`} 
                alt={t(`newsEvents.news.${item.id}.imageAlt`)} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-aheu-neutral-dark mb-3">
                  <i className="far fa-calendar-alt mr-2"></i> {formatDate(item.date)}
                </div>
                <h3 className="font-bold text-lg mb-2">{t(`newsEvents.news.${item.id}.title`)}</h3>
                <p className="text-sm text-aheu-neutral-dark mb-4">{t(`newsEvents.news.${item.id}.excerpt`)}</p>
                <Link href={`/news/${item.id}`}>
                  <a className="text-primary hover:text-secondary font-medium">{t('common.readMore')}</a>
                </Link>
              </div>
            </div>
          ))}
          
          {/* Upcoming Events */}
          <div className="bg-primary text-white rounded-lg overflow-hidden shadow-md">
            <div className="p-5">
              <h3 className="font-bold text-xl mb-4 border-b border-white pb-3">{t('newsEvents.upcomingEvents')}</h3>
              
              <div className="space-y-4">
                {upcomingEvents.slice(0, 4).map((event) => (
                  <div key={event.id}>
                    <div className="flex items-center text-sm mb-1">
                      <i className="far fa-calendar-alt mr-2"></i> {formatDate(event.date)}
                    </div>
                    <h4 className="font-medium">{t(`newsEvents.events.${event.id}.title`)}</h4>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link href="/events">
                  <a className="inline-block border border-white text-white hover:bg-white hover:text-primary font-medium px-4 py-2 rounded transition text-sm">
                    {t('newsEvents.viewAllEvents')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
