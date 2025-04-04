import React from 'react';
import Navbar from './components/Navabr';
import { ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import FeaturesSection from './components/Feature';
import ChatPreview from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center lg:text-left lg:col-span-6">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Revolutionizing</span>
                    <span className="block text-blue-600">Land Registry with AI</span>
                  </h1>
                  
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                    Transform your land registry process with cutting-edge AI technology. Secure, efficient, and transparent property management for the digital age.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-3">
                      <ShieldCheck className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">Advanced fraud detection systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">Real-time property verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileCheck className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">Smart contract integration</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                        Try the Chatbot
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <img
                      className="w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                      alt="Modern building architecture"
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <FeaturesSection />
      <ChatPreview />
      <Footer />
    </div>
  );
}

export default App;