
import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/skills'


function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Introduction></Introduction>
    <Skills></Skills>
    <h2 id='projects' className='text-center text-3xl border-t-2 border-b-2 py-6 mx-20 mt-20'>Project</h2>

    <Projects></Projects>
    <h2 id='education' className='text-center text-3xl border-t-2 border-b-2 py-6 mx-20 mt-20'>Education</h2>
    <Education></Education>
    <div id='contact' className='h-[20px]'></div>
    <Contact></Contact>
    <Footer></Footer>
    
       
    </>
  )
}

export default App
