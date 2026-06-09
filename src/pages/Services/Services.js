import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServicesHero from './components/ServicesHero'
import PillarSystem from './components/PillarSystem'
import CapabilityVault from './components/CapabilityVault'

function Services() {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <PillarSystem />
        <CapabilityVault/>
        <Footer/>
      
    </div>
  )
}

export default Services
