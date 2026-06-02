import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Introduction from "./components/Introduction";
import StrategicPillars from "./components/StrategicPillars";
import EvidenceArchive from "./components/EvidenceArchive";






function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Introduction/>
        
        <StrategicPillars/>
        <EvidenceArchive/>
        
        
      
    </div>
  )
}

export default Home
