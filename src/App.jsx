
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import  Experience from "./components/Experience"
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className ="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900">
        
           <div className ="fixed top-0 -z-10 h-full w-full">
               <div className="relative size-full bg-black">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                  linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
                   <div className="absolute inset-x-0 top-[-10%] size-[1000px] rounded-full 
                 bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
            </div>
           </div>


           <div className=" container mx-auto px-8"> 
                <Navbar/>
                <Hero/>
                <Projects/>
                <Experience/>
                <Contact/>
           </div>   
    
    
    </div>
  )
}

export default App