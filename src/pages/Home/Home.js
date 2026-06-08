import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Introduction from "./components/Introduction";
import StrategicPillars from "./components/StrategicPillars";
// import EvidenceArchive from "./components/EvidenceArchive";
import IntelligenceBlueprint from "./components/Backup components/IntelligenceBlueprint";
import FounderAbout from "./components/FounderAbout";
import GlobalImpact from "./components/GlobalImpact";
import DigitalProducts from "./components/DigitalProducts";
import TransformationLens from "./components/TransformationLens";
import GlobalPulse from "./components/GlobalPulse";
import PersonaConcierge from "./components/PersonaConcierge";
import TechnicalAuthority from "./components/TechnicalAuthority";
import TheDecisionRetainer from './components/TheDecisionRetainer';
import Footer from '../../components/Footer';










function Home() {
  return (
    <div>
        <Navbar variant="dark" />
        <Hero/>
        <Introduction/>
        <PersonaConcierge/>
        <TechnicalAuthority/>
        <StrategicPillars/>
        <DigitalProducts/>
        <TransformationLens/>
        <GlobalPulse/>
        <FounderAbout/> 
        <TheDecisionRetainer/>
       <Footer/>
        
    </div>
  )
}

export default Home
