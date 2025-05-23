import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const EconomicsInstitutePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title="Institute of Economics, Statistics and IT Technologies | AHEU"
      description="Leading institute for economics, statistics, and IT education in Kazakhstan. Modern programs preparing future business leaders and IT specialists."
    >
      {/* Hero Section with Blue Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex items-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center py-20">
            {/* Institute Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-8">
              <span className="text-blue-200 text-sm font-medium">🏛️ Leading Institute Since 1998</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Institute of
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Economics, Statistics & IT
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Preparing future leaders in business analytics, economic analysis, and cutting-edge information technologies. 
              Where traditional economics meets digital innovation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/programs?institute=economics">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center">
                    Explore Programs
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/apply">
                <button className="px-8 py-4 border-2 border-blue-300 text-blue-100 hover:bg-blue-500/20 rounded-xl font-semibold text-lg transition-all duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-300">13</div>
                <div className="text-sm text-blue-200">Programs</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-300">950+</div>
                <div className="text-sm text-blue-200">Students</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-300">95</div>
                <div className="text-sm text-blue-200">Faculty</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-300">89%</div>
                <div className="text-sm text-blue-200">Employment Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full p-1">
            <div className="w-1 h-3 bg-blue-300 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Shaping Tomorrow's 
                  <span className="text-blue-600"> Digital Economy</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our institute combines traditional economic principles with cutting-edge statistical analysis and 
                  modern IT technologies. We prepare graduates who understand both the financial markets and the 
                  digital tools that drive them.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  With partnerships across Russia, Poland, Germany, Turkey, and Azerbaijan, our students gain 
                  global perspectives while mastering local market dynamics.
                </p>
                
                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Data Analytics</h4>
                    <p className="text-sm text-gray-600">Advanced statistical modeling and business intelligence</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">FinTech Innovation</h4>
                    <p className="text-sm text-gray-600">Digital banking, blockchain, and financial technology</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Students working with data analytics" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education from bachelor's to doctoral levels, designed for the digital economy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bachelor's Programs */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bachelor's</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Business and Management</li>
                  <li>• Mathematics and Statistics</li>
                  <li>• Information Technology</li>
                  <li>• Transport Services</li>
                </ul>
                <Link href="/programs?level=bachelor&institute=economics">
                  <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                    View Programs
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Master's Programs */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Master's</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Business and Management</li>
                  <li>• Advanced Statistics</li>
                  <li>• IT Management</li>
                  <li>• Economic Research</li>
                </ul>
                <Link href="/programs?level=master&institute=economics">
                  <button className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors">
                    View Programs
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Doctoral Programs */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Doctoral</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Economic Theory</li>
                  <li>• Econometric Methods</li>
                  <li>• Digital Economics</li>
                  <li>• Research Leadership</li>
                </ul>
                <Link href="/programs?level=phd&institute=economics">
                  <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors">
                    View Programs
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join Kazakhstan's leading institute for economics and IT. Start your journey toward becoming a 
            leader in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-xl transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EconomicsInstitutePage; 