import './App.css'
import AboutMe from './components/AboutMe'
import FeaturedProject from './components/FeaturedProject'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import Programing from './components/Programing'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <main className='bg-[#11071F] text-[#fff] mainContainer'>
      <Header />
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
