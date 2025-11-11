import React from 'react'
import Hero from './src/components/Hero'
import About from './src/components/About';

const Home:React.FC = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About/>
    </main>
  )
}

export default Home;