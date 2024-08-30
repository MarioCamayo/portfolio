import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/MyWork/MyWork"
import NavBar from "./components/NavBar"
import Services from "./components/services/Services"
// import './App.css '

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  )
}

      

export default App