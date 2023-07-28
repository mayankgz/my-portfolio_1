import './App.css'
import About from './Components/Modules/About'
import Home from './Components/Modules/Home'
import Techstack from './Components/Modules/Techstack'
import Projects from './Components/Modules/projects'
import Contact from './Components/Modules/Contact'
function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Techstack/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
