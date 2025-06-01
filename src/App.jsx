import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import InfoCard from './components/InfoCard';
import DashboardChart from './components/DashboardChart';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 font-sans">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-8 py-3 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-emerald-600">gbvk</div>
          <div className="flex space-x-6">
            <a href="#tutorials" className="hover:text-emerald-600 transition-colors">Tutorials</a>
            <a href="#exercises" className="hover:text-emerald-600 transition-colors">Exercises</a>
            <a href="#certificates" className="hover:text-emerald-600 transition-colors">Certificates</a>
            <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search..." 
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
            />
            <button className="absolute right-3 top-2.5 text-gray-400 hover:text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-6">
          <button className="text-emerald-600 hover:text-emerald-700">Spaces</button>
          <button className="text-emerald-600 hover:text-emerald-700">Get Certified</button>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-gray-900 text-white overflow-x-auto">
        <div className="flex space-x-6 px-8 py-3 text-sm">
          <a href="#html" className="hover:text-yellow-400">HTML</a>
          <a href="#css" className="hover:text-yellow-400">CSS</a>
          <a href="#javascript" className="hover:text-yellow-400">JAVASCRIPT</a>
          <a href="#sql" className="hover:text-yellow-400">SQL</a>
          <a href="#python" className="hover:text-yellow-400">PYTHON</a>
          <a href="#java" className="hover:text-yellow-400">JAVA</a>
          <a href="#php" className="hover:text-yellow-400">PHP</a>
          <a href="#react" className="hover:text-yellow-400">REACT</a>
          <a href="#node" className="hover:text-yellow-400">NODE.JS</a>
          <a href="#mysql" className="hover:text-yellow-400">MYSQL</a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center py-24 md:py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl absolute -top-24 -left-24 animate-pulse" />
          <div className="w-80 h-80 bg-blue-200/40 rounded-full blur-3xl absolute -bottom-24 -right-24 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-900">Learn to Code</h1>
        <p className="text-2xl md:text-3xl max-w-2xl mb-8 text-gray-600">With the world's largest web developer site.</p>
        <div className="w-full max-w-xl px-4">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search our tutorials, e.g. HTML" 
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:border-emerald-500"
            />
            <button className="absolute right-4 top-4 bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <a href="#start" className="mt-8 text-emerald-600 hover:text-emerald-700 font-semibold text-xl">Not Sure Where To Begin?</a>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="px-4 md:px-16 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-emerald-600">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <InfoCard title="Users" value="1,234" />
          <InfoCard title="Revenue" value="$12,345" />
          <InfoCard title="Growth" value="8%" />
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <DashboardChart />
        </div>
      </section>

      {/* Footer with Time */}
      <footer className="flex justify-between items-center px-8 py-4 text-gray-500 text-sm bg-gray-50">
        <div>&copy; {currentTime.getFullYear()} gbvk. Built with React & Tailwind CSS.</div>
        <div className="font-mono">
          {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </div>
      </footer>
    </div>
  )
}

export default App
