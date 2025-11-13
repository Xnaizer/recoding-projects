import React from 'react'
import Hero from './src/components/Hero'
import About from './src/components/About';
import Navbar from './src/components/Navbar';
import Features from './src/components/Features';
import Story from './src/components/Story';
import Footer from './src/components/Footer';
import Contact from './src/components/Contact';

const Home:React.FC = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About/>
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home;