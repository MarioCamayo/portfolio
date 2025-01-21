import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/MyWork/MyWork"
import NavBar from "./components/NavBar/NavBar"
// import Services from "./com  ponents/services/Services"
// import './App.css '

const App = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <About /> 
        {/* <Services /> */}
        <MyWork />
        <Contact />
        <Footer />
    </div>
  )
}

      

export default App