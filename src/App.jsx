import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
// import Trust from './Components/Trust'
// import Cvinfo from './Components/Cvinfo'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Skill />
    <Projects />
    {/* <Trust /> */}
    {/* <Cvinfo /> */}
    <Contact />
    <Footer />
    </>
  )
}

export default App
