import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would be a real API call in production
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('contact.form.submitSuccess'),
        description: t('contact.form.submitSuccessMessage'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: t('contact.form.submitError'),
        description: t('contact.form.submitErrorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <MainLayout
      title={`${t('contact.pageTitle')} | AHEU`}
      description={t('contact.pageDescription')}
    >
      {/* Header with background image */}
      <div 
        className="relative py-16 border-b border-green-200 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
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
                <div className="text-center mb-12">
                  <h2 className="section-title">{t('contact.form.title')}</h2>
                  <p className="section-subtitle">{t('contact.form.subtitle')}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-primary">{t('contact.contactInfo.title')}</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{t('contact.contactInfo.address.title')}</h4>
                          <p className="text-aheu-neutral-dark">
                            36, Aksay-3 microdistrict, 050031<br/>
                            {t('contact.contactInfo.address.city')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{t('contact.contactInfo.phone.title')}</h4>
                          <p className="text-aheu-neutral-dark">
                            <a href="tel:+77273033273" className="hover:text-primary">+7 (727) 303-32-73</a><br/>
                            <a href="tel:+77273033270" className="hover:text-primary">+7 (727) 303-32-70</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{t('contact.contactInfo.email.title')}</h4>
                          <p className="text-aheu-neutral-dark">
                            <a href="mailto:priem.ageu@mail.ru" className="hover:text-primary">priem.ageu@mail.ru</a> ({t('contact.contactInfo.email.admissions')})<br/>
                            <a href="mailto:info@aheu.edu.kz" className="hover:text-primary">info@aheu.edu.kz</a> ({t('contact.contactInfo.email.general')})
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                          <i className="fas fa-clock"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{t('contact.contactInfo.hours.title')}</h4>
                          <p className="text-aheu-neutral-dark">
                            {t('contact.contactInfo.hours.weekdays')}<br/>
                            {t('contact.contactInfo.hours.time')}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-10 mb-4 text-primary">{t('contact.socialMedia.title')}</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-aheu-neutral-light p-6 rounded-lg">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">{t('contact.form.name')}</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">{t('contact.form.email')}</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                          <Input 
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="message">{t('contact.form.message')}</Label>
                          <Textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-secondary" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Additional Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg mt-12">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Visit Our Campus</h3>
                  <p className="text-gray-700 mb-4">
                    Experience AHEU University firsthand. Schedule a campus visit or take our virtual tour to explore our facilities and meet our community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/about/virtual-tour" 
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Virtual Campus Tour
                    </Link>
                    <Link 
                      href="/apply" 
                      className="inline-block border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors text-center"
                    >
                      Schedule Visit
                    </Link>
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

export default Contact;
