import { useState } from 'react'
import Navbar from './assets/sections/Navbar'
import Declaration from './assets/sections/Declaration'
import Band from './assets/sections/Band.jsx'
import Services from './assets/sections/Services.jsx'
import Happen from'./assets/sections/Happen.jsx'
import Case from'./assets/sections/Cases.jsx'
import WorkingProcess from './assets/sections/WorkingProcess.jsx'
import Team from './assets/sections/Team.jsx'
import Testimonials from './assets/sections/Testimonials.jsx'
import Contact from './assets/sections/Contact.jsx'
import Footer from './assets/sections/Footer.jsx'

function App() {
 

  return (
    <>
    <div className='min-h-screen overflow-x-hidden '>
      <Navbar />
      <main>
        <Declaration/>
        <Band/>
        <Services/>
        <Happen/>
        <Case/>
        <WorkingProcess/>
        <Team/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
