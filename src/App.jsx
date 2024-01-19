import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import FeaturedProject from './components/FeaturedProject'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import Programing from './components/Programing'
import WorkExperience from './components/WorkExperience'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const changeMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main className={`mainContainer ${darkMode ? "" : "dark"} transition-colors`}>
      <Header changeMode={changeMode} darkMode={darkMode}/>
      <Profile />
      <AboutMe />
      <WorkExperience />
      <Programing />
      <FeaturedProject/>
      <Footer/>
    </main>
  )
}

export default App
