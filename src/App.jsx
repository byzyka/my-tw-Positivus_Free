import { useState } from 'react'
import Navbar from './assets/sections/Navbar'
import Declaration from './assets/sections/Declaration'
import Band from './assets/sections/Band.jsx'
import Services from './assets/sections/Services.jsx'
import Happen from'./assets/sections/Happen.jsx'
import Case from'./assets/sections/Cases.jsx'
import WorkingProcess from './assets/sections/WorkingProcess.jsx'
import './App.css'
import Team from './assets/sections/Team.jsx'
import Testimonials from './assets/sections/Testimonials.jsx'

function App() {
  const [count, setCount] = useState(0)

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
      </main>
    </div>
    
    </>
  )
}

export default App
