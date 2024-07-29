
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className ="overflow-x-hidden text-neutral-300 bg-[#0E1630]">

           <div className=" container mx-auto px-8"> 
                <Navbar/>
                <Hero/>
                <Projects/>
                <Contact/>
           </div>   
    
    
    </div>
  )
}

export default App