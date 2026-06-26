import { useState } from 'react'
import Navbar from './assets/sections/Navbar'
import Declaration from './assets/sections/Declaration'
import Band from './assets/sections/Band.jsx'
import Services from './assets/sections/Services.jsx'

import './App.css'


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
      </main>
    </div>
    
    </>
  )
}

export default App
