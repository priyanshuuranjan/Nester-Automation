import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const location = useLocation()

  const projectSections = [
    { name: 'Industrial Automation', href: '/industrial-automation' },
    { name: 'Control Panel Manufacture', href: '/control-panel-manufacture' },
    { name: 'Mechanical Designing & Manufacture', href: '/mechanical-designing-manufacture' }
  ]

  // Function to handle smooth scrolling to sections on home page
  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/#${sectionId}`
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="./images/Logo.png" 
                alt="Nester Automation" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-2xl font-bold gradient-text">Nester Automation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleSectionClick('home')} className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Home</button>
              <button onClick={() => handleSectionClick('about')} className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">About Us</button>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => {
                          handleSectionClick('services');
                          setIsServicesDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-primary transition-colors duration-200"
                      >
                        Our Services
                      </button>
                      <Link
                        to="/portfolio"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Our Product Portfolio
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                  onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Projects</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isProjectsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {projectSections.map((section, index) => (
                        <Link
                          key={index}
                          to={section.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-primary transition-colors duration-200"
                          onClick={() => setIsProjectsDropdownOpen(false)}
                        >
                          {section.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button onClick={() => handleSectionClick('values')} className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Core Values</button>
              <button onClick={() => handleSectionClick('clients')} className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Clients</button>
              <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => handleSectionClick('home')} className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left">Home</button>
              <button onClick={() => handleSectionClick('about')} className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left">About Us</button>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-blue-500 ml-3 pl-3">
                <div className="text-gray-600 text-sm font-semibold mb-2">Services</div>
                <button 
                  onClick={() => handleSectionClick('services')} 
                  className="text-gray-700 hover:text-primary block px-3 py-2 text-sm w-full text-left"
                >
                  Our Services
                </button>
                <Link
                  to="/portfolio"
                  className="text-gray-700 hover:text-primary block px-3 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Product Portfolio
                </Link>
              </div>
              
              {/* Mobile Projects Section */}
              <div className="border-l-2 border-red-500 ml-3 pl-3">
                <div className="text-gray-600 text-sm font-semibold mb-2">Projects</div>
                {projectSections.map((section, index) => (
                  <Link
                    key={index}
                    to={section.href}
                    className="text-gray-700 hover:text-primary block px-3 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
              
              <button onClick={() => handleSectionClick('values')} className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left">Core Values</button>
              <button onClick={() => handleSectionClick('clients')} className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left">Clients</button>
              <Link to="/contact" className="bg-primary text-white block px-3 py-2 text-base font-medium rounded-md text-left transition duration-300" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
