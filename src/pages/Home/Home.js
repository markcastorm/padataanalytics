import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Introduction from "./components/Introduction";
import StrategicPillars from "./components/StrategicPillars";
import EvidenceArchive from "./components/EvidenceArchive";
import IntelligenceBlueprint from "./components/IntelligenceBlueprint";
import FounderAbout from "./components/FounderAbout";
import GlobalImpact from "./components/GlobalImpact";
import DigitalProducts from "./components/DigitalProducts";
import TransformationLens from "./components/TransformationLens";












function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Introduction/>
        
        <StrategicPillars/>
        <EvidenceArchive/>
        {/* <TheProcessStack/> */}
        <IntelligenceBlueprint/> 
        <DigitalProducts/>
        <TransformationLens/>
        
        {/* <FounderAbout/> */}
        {/* <GlobalImpact/> */}
        
        
      
    </div>
  )
}

export default Home
