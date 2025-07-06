import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
import './App.css'
import HowItWork from './components/HowItWork'
import Connect from './components/Connect'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
const App = () => {
  return (
  <>
    <div className="w-full min-h-screen bg-red-500">
      <Header/>
      <Hero/>
    </div>
    <Services/>
    <Aboutus/>
    <HowItWork/>
    <Connect/>
    <Feedback/>
    <Footer/>
    </>
  )
}

export default App