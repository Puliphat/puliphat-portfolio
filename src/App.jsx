import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <section id="home">
        <Hero/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </>
  )
}

export default App
