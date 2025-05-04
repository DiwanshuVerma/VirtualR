import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Workflow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className='max-w-7xl m-auto px-6'>
        <HeroSection />
        <Features />
        <Workflow />
      </div>
    </div>
  )
}

export default App
