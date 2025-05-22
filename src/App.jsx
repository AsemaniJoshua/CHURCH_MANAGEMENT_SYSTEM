import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Home/Hero'
import Relevant from './Components/Home/Relevant'
import Love from './Components/Home/Love'
import Benefit from './Components/Home/Benefit'
import ChurchSermons from './Components/Home/Sermons'
import Serve from './Components/Home/Serve'
import Blog from './Components/Home/Blog'
import Footer from './Components/Footer'

function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />  
      <Relevant />  
      <Love />  
      <Benefit />
      <ChurchSermons />
      <Serve />
      <Blog />
      <Footer />      
    </>
  )
}

export default Home;
