import {Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Experience from "./components/Experience.jsx"
import Project from "./components/Project.jsx"
import Academic from "./components/Academic.jsx"
import Certificate from "./components/Certificate.jsx"
import { useEffect } from "react"
import Skills from "./components/Skills.jsx"

function App() {

  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
 
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
          <Route path="academic" element={<Academic />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
