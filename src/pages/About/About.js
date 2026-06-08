import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutHero from './components/AboutHero'
import TheNorthStar from './components/TheNorthStar'
// import FounderManifesto from './components/FounderManifesto'
import AnalystPhilosophy from './components/AnalystPhilosophy'
import MethodologyDossier from './components/MethodologyDossier'
import TechnicalHeritage from './components/TechnicalHeritage'


function About() {
  return (
    <div>
        <Navbar variant="light" />
        
        <AboutHero/>
        <TheNorthStar/>
        {/* <FounderManifesto/> */}
        {/* <AnalystPhilosophy/> */}
        <MethodologyDossier/>
        <TechnicalHeritage/>
        
        <Footer/>
      
    </div>
  )
}

export default About
