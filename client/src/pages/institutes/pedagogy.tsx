import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const PedagogyInstitutePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title="Institute of Pedagogy, Business and Law | AHEU"
      description="Leading institute for education, business, and legal studies. Preparing future educators, business leaders, and legal professionals."
    >
      {/* Hero Section with Green Educational Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 text-white overflow-hidden">
        {/* Educational Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-green-400/10 rounded-full blur-2xl animate-bounce delay-300"></div>
        </div>
        
        {/* Educational Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM90 90c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex items-center min-h-screen">
          <div className="max-w-5xl mx-auto text-center py-20">
            {/* Educational Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-300/30 mb-8">
              <span className="text-emerald-100 text-sm font-medium">📚 Educational Excellence Since 1995</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Institute of
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Pedagogy, Business & Law
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empowering minds through education, commerce, and justice. We prepare compassionate educators, 
              innovative business leaders, and principled legal professionals for a better tomorrow.
            </p>
            
            {/* Educational CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/programs?institute=pedagogy">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center">
                    Explore Programs
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/apply">
                <button className="px-8 py-4 border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-500/20 rounded-xl font-semibold text-lg transition-all duration-300">
                  Start Learning
                </button>
              </Link>
            </div>
            
            {/* Educational Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-emerald-200">15</div>
                <div className="text-sm text-emerald-100">Programs</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-emerald-200">1200+</div>
                <div className="text-sm text-emerald-100">Students</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-emerald-200">110</div>
                <div className="text-sm text-emerald-100">Faculty</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-emerald-200">94%</div>
                <div className="text-sm text-emerald-100">Graduate Success</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Educational Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-300 rounded-full p-1">
            <div className="w-1 h-3 bg-emerald-300 rounded-full mx-auto animate-pulse"></div>
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
                  Building Tomorrow's 
                  <span className="text-emerald-600"> Leaders</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our institute stands at the intersection of education, business, and law - three pillars that 
                  shape society. We believe in fostering critical thinking, ethical leadership, and practical 
                  skills that make a real difference in the world.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  From preparing dedicated teachers who inspire future generations to training business innovators 
                  and principled legal advocates, our programs are designed to create positive change in Kazakhstan 
                  and beyond.
                </p>
                
                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Modern Pedagogy</h4>
                    <p className="text-sm text-gray-600">Innovative teaching methods and educational technology</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Ethics & Justice</h4>
                    <p className="text-sm text-gray-600">Strong foundation in legal principles and ethical leadership</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Students in classroom discussion" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Divisions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Academic Divisions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct yet interconnected fields of study that shape leaders and innovators
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Division */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-56 bg-gradient-to-br from-emerald-400 to-green-500 relative p-8 flex flex-col justify-end">
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                <p className="text-emerald-100 text-sm">Shaping tomorrow's educators</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Teacher Training Without Subject Specialization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Pedagogy and Psychology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Subject-Specialized Teacher Training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Natural Sciences Education</span>
                  </li>
                </ul>
                <Link href="/programs?division=education">
                  <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Education
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Division */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-indigo-500 relative p-8 flex flex-col justify-end">
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
                <p className="text-blue-100 text-sm">Developing business leaders</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Business and Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Social Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>International Business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Strategic Management</span>
                  </li>
                </ul>
                <Link href="/programs?division=business">
                  <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Business
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Law Division */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-56 bg-gradient-to-br from-purple-400 to-red-500 relative p-8 flex flex-col justify-end">
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Law</h3>
                <p className="text-purple-100 text-sm">Training legal professionals</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Legal Studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Constitutional Law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>International Law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Corporate Law</span>
                  </li>
                </ul>
                <Link href="/programs?division=law">
                  <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Law
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Our Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">5,000+</h3>
                <p className="text-gray-600">Graduates Making a Difference</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
                <p className="text-gray-600">School Partnerships</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">94%</h3>
                <p className="text-gray-600">Graduate Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
            Join the Institute of Pedagogy, Business and Law and become part of a community dedicated to 
            positive change through education, innovation, and justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <button className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-xl transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PedagogyInstitutePage; 