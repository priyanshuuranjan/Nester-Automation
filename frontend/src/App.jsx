import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import IndustrialAutomation from './components/projects/IndustrialAutomation'
import ControlPanelManufacture from './components/projects/ControlPanelManufacture'
import MechanicalDesigningManufacture from './components/projects/MechanicalDesigningManufacture'
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
          <Route path="/industrial-automation" element={<IndustrialAutomation />} />
          <Route path="/control-panel-manufacture" element={<ControlPanelManufacture />} />
          <Route path="/mechanical-designing-manufacture" element={<MechanicalDesigningManufacture />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
