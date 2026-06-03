import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Introduction from "./components/Introduction";
import StrategicPillars from "./components/StrategicPillars";
import EvidenceArchive from "./components/EvidenceArchive";
import IntelligenceBlueprint from "./components/IntelligenceBlueprint";
import DigitalProducts from "./components/DigitalProducts";









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
        
        
      
    </div>
  )
}

export default Home
