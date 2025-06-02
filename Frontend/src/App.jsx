import './index.css'
import {Home, Toggle, Contact, About, Projects, Achievements, Skills, Footer} from './components'
export default function App() {
  return (
    <div className='font-[Inter] relative overflow-x-hidden selection:bg-[#3d3d3d] selection:text-gray-50 dark:selection:text-[#3d3d3d] dark:selection:bg-gray-50'>
      <Home />
      <Toggle />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}