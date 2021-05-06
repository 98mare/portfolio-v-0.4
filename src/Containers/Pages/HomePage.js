import React, { useEffect } from 'react'
import About from '../../Components/About';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Services from './Services';

import WorkGAllery from '../../Components/WorkGAllery';


function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className="App">

      <NavBar />
      <Hero />
      <About />
      <WorkGAllery />
      <Services />
      <Footer />

    </div>
  );
}

export default HomePage;
