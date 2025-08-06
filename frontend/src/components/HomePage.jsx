import React, { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import CoreValues from './CoreValues'
import Clients from './Clients'

const HomePage = () => {
  useEffect(() => {
    // Handle hash-based navigation when component loads
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Small delay to ensure DOM is ready
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Clients />
    </>
  )
}

export default HomePage
