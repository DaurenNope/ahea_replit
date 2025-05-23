import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const SymbatInstitutePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title="Symbat Institute of Design and Technologies | AHEU"
      description="Creative institute specializing in design, fashion, and modern technologies. Where artistic vision meets technological innovation."
    >
      {/* Hero Section with Creative Orange Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-pink-400/10 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>
        
        {/* Creative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3e%3cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3e%3c/g%3e%3c/svg%3e")`,
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex items-center min-h-screen">
          <div className="max-w-5xl mx-auto text-center py-20">
            {/* Creative Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-300/30 mb-8">
              <span className="text-orange-100 text-sm font-medium">🎨 Creative Excellence Since 2003</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                SYMBAT
              </span>
              <span className="text-3xl md:text-4xl font-light block mt-4">
                Institute of Design & Technologies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Where creativity meets innovation. We nurture artistic vision, design thinking, and technological mastery 
              to create the next generation of creative professionals and industry leaders.
            </p>
            
            {/* Creative CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/programs?institute=symbat">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center">
                    Explore Programs
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/apply">
                <button className="px-8 py-4 border-2 border-orange-300 text-orange-100 hover:bg-orange-500/20 rounded-xl font-semibold text-lg transition-all duration-300">
                  Start Creating
                </button>
              </Link>
            </div>
            
            {/* Creative Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-orange-200">12</div>
                <div className="text-sm text-orange-100">Programs</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-orange-200">850+</div>
                <div className="text-sm text-orange-100">Students</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-orange-200">80</div>
                <div className="text-sm text-orange-100">Faculty</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-orange-200">92%</div>
                <div className="text-sm text-orange-100">Portfolio Success</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Creative Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-300 rounded-full p-1">
            <div className="w-1 h-3 bg-orange-300 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559163499-413811fb2344?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Design students working" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Creating the 
                  <span className="text-orange-600"> Future of Design</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Symbat Institute is where artistic tradition meets cutting-edge technology. We believe in 
                  nurturing creative minds while equipping them with the technical skills needed to thrive in 
                  today's digital creative industries.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  From fashion design to digital media, industrial design to user experience, our programs 
                  prepare students to become creative leaders and innovators in their chosen fields.
                </p>
                
                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Digital Design</h4>
                    <p className="text-sm text-gray-600">Modern tools and techniques for digital creativity</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Fashion Technology</h4>
                    <p className="text-sm text-gray-600">Sustainable fashion with modern production methods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Creative Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of creative and technical programs designed for the modern creative economy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fashion Design */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fashion Design</h3>
                <p className="text-gray-600 mb-4">Sustainable fashion design, textile innovation, and garment technology</p>
                <Link href="/programs?specialization=fashion">
                  <button className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Fashion
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Digital Media */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Media</h3>
                <p className="text-gray-600 mb-4">Video production, animation, and interactive media design</p>
                <Link href="/programs?specialization=media">
                  <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Media
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Industrial Design */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Design</h3>
                <p className="text-gray-600 mb-4">Product design, 3D modeling, and manufacturing processes</p>
                <Link href="/programs?specialization=industrial">
                  <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Design
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Graphic Design */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Graphic Design</h3>
                <p className="text-gray-600 mb-4">Visual communication, branding, and digital graphics</p>
                <Link href="/programs?specialization=graphic">
                  <button className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Graphics
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* UX/UI Design */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">UX/UI Design</h3>
                <p className="text-gray-600 mb-4">User experience design and digital interface creation</p>
                <Link href="/programs?specialization=ux">
                  <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                    Explore UX
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* Art & Technology */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Art & Technology</h3>
                <p className="text-gray-600 mb-4">Fusion of traditional art with cutting-edge technology</p>
                <Link href="/programs?specialization=arttech">
                  <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                    Explore Art Tech
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Future?</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-12">
            Join the Symbat Institute and transform your creative vision into reality. Where imagination 
            meets innovation, and dreams become careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <button className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Creating
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-xl transition-all duration-300">
                Visit Our Studios
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SymbatInstitutePage; 