import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import References from './components/References'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Hero />
      <main className='Main'>
        <AboutMe />
        <Skills />
        <Portfolio />
        <References />
      </main>
      <footer className='Footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
