import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServicesHero from './components/ServicesHero'
import PillarSystem from './components/PillarSystem'
import CapabilityVault from './components/CapabilityVault'
import CommercialTiers from './components/CommercialTiers'
import DeploymentContinuity from './components/DeploymentContinuity'
import ServiceCTA from './components/ServiceCTA'

function Services() {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <PillarSystem />
        <CapabilityVault/>
        <CommercialTiers/>
        <DeploymentContinuity/>
        <ServiceCTA/> 
        
        <Footer/>
      
    </div>
  )
}

export default Services
