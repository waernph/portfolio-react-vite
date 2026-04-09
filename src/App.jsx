import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Hero />
      <main className='Main'>
        <AboutMe />
      </main>
      <footer className='Footer'>

      </footer>
    </div>
  )
}

export default App
