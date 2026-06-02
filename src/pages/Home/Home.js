import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Introduction from "./components/Introduction";
import NarrativeExpertise from "./components/NarrativeExpertise";





function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Introduction/>
        <NarrativeExpertise/>
        
        
      
    </div>
  )
}

export default Home
