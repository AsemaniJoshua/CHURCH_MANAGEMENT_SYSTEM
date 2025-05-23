import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Navbar data-aos="fade-down" />
      <Hero data-aos="fade-up" />  
      <Relevant data-aos="fade-right" />  
      <Love data-aos="fade-left" />  
      <Benefit data-aos="fade-up" />
      <ChurchSermons data-aos="fade-right" />
      <Serve data-aos="fade-left" />
      <Blog data-aos="fade-up" />
      <Footer data-aos="fade" />    
    </>
  )
}

export default Home;
