import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import NewsFeed from './components/NewsFeed';

// Reusable FeatureCard Component
function FeatureCard({ title, description }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Reusable TestimonialCard Component
function TestimonialCard({ quote, author }) {
  return (
    <blockquote className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
      <p className="italic">"{quote}"</p>
      <footer className="mt-4 text-sm text-gray-600">- {author}</footer>
    </blockquote>
  );
}

function App() {
  return (
    <Router basename="/webapps">
      <div className="font-sans">
        {/* Header */}
        <header className="sticky top-0 bg-white shadow-lg z-50">
          <div className="container mx-auto flex items-center justify-between py-4 px-8">
            <a href="/" className="flex items-center" aria-label="Homepage">
              <img src={logo} alt="GBVK Logo" className="h-6 w-6 mr-3" />
              <span className="text-2xl font-extrabold text-gray-800">GBVK Solutions</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/login" className="text-gray-700 hover:text-blue-500 font-medium">Login</a>
              <a href="/signup" className="text-gray-700 hover:text-blue-500 font-medium">Signup</a>
              <a href="/profile" className="text-gray-700 hover:text-blue-500 font-medium">Profile</a>
              <a href="/newsfeed" className="text-gray-700 hover:text-blue-500 font-medium">News Feed</a>
            </nav>
            <nav className="md:hidden">
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700">Get in Touch</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-32 relative">
          <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Welcome to GBVK Solutions</h1>
              <p className="text-lg md:text-2xl mb-8">Innovating the future with cutting-edge technology solutions.</p>
              <a href="#services" className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-100">Our Services</a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/src/assets/react.svg" alt="Hero Graphic" className="w-3/4 md:w-full" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-700">At GBVK Solutions, we are dedicated to providing innovative and reliable technology solutions to empower businesses worldwide. Our team of experts is committed to excellence and customer satisfaction.</p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard title="Custom Software Development" description="Tailored software solutions to meet your business needs." />
              <FeatureCard title="Cloud Integration" description="Seamless integration of cloud services for scalability." />
              <FeatureCard title="24/7 IT Support" description="Round-the-clock support to ensure your operations run smoothly." />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-6">Have questions or need assistance? Reach out to us today!</p>
            <a href="mailto:contact@gbvksolutions.com" className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700">Email Us</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-6">© 2025 GBVK Solutions. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Use</a>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
        </footer>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
