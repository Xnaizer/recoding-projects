import React from 'react'
import Hero from './src/components/Hero'
import About from './src/components/About';
import Navbar from './src/components/Navbar';
import Features from './src/components/Features';

const Home:React.FC = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About/>
      <Features />
      <section className='min-h-screen bg-black' />
    </main>
  )
}

export default Home;