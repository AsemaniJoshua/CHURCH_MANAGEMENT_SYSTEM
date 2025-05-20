import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Home/Hero'
import Relevant from './Components/Home/Relevant'
import Love from './Components/Home/Love'

function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />  
      <Relevant />  
      <Love />  
    </>
  )
}

export default Home;
