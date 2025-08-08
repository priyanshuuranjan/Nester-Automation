import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Career from './components/Career'
import Gallery from './components/Gallery'
import IndustrialAutomation from './components/projects/IndustrialAutomation'
import RoboticAutomation from './components/projects/RoboticAutomation'
import ControlPanelManufacture from './components/projects/ControlPanelManufacture'
import MechanicalDesigningManufacture from './components/projects/MechanicalDesigningManufacture'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/industrial-automation" element={<IndustrialAutomation />} />
          <Route path="/robotic-automation" element={<RoboticAutomation />} />
          <Route path="/control-panel-manufacture" element={<ControlPanelManufacture />} />
          <Route path="/mechanical-designing-manufacture" element={<MechanicalDesigningManufacture />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
