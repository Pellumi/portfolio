import './App.css'
import About from './components/About'
import MyWorks from './components/MyWorks'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from "./components/Navbar"
import ServicesComponent from './components/ServicesComponent'
import Jobs from './components/Jobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <MyWorks />
      <Jobs />
      <ServicesComponent />
      <Footer />
    </>
  )
}

export default App
