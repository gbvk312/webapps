import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-8">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-2xl font-extrabold text-gray-800">GBVK Webpage</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-500 font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-500 font-medium">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-500 font-medium">FAQ</a>
          </nav>
          <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700">Get Started</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-32 relative">
        <div className="absolute inset-0 bg-opacity-20 bg-[url('/src/assets/react.svg')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Welcome to GBVK Webpage</h1>
            <p className="text-lg md:text-2xl mb-8">Empowering tech engineers with cutting-edge solutions</p>
            <a href="#features" className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-100">Explore Features</a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/src/assets/react.svg" alt="Hero Graphic" className="w-3/4 md:w-full" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Innovative Solutions</h3>
              <p>We provide state-of-the-art tools to boost your productivity.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Trusted by Experts</h3>
              <p>Our platform is trusted by leading tech engineers worldwide.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
              <p>We are here to help you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <blockquote className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <p className="italic">"GBVK Webpage transformed our workflow!"</p>
              <footer className="mt-4 text-sm text-gray-600">- Alex, Tech Lead</footer>
            </blockquote>
            <blockquote className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <p className="italic">"A must-have for every tech engineer."</p>
              <footer className="mt-4 text-sm text-gray-600">- Jamie, Software Engineer</footer>
            </blockquote>
            <blockquote className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <p className="italic">"Exceptional support and features!"</p>
              <footer className="mt-4 text-sm text-gray-600">- Taylor, DevOps Specialist</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-6">© 2025 GBVK Webpage. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Use</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
