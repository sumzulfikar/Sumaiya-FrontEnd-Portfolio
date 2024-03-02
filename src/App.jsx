import React from "react";
import "/src/index.css"
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Mission from './components/Mission'
import Contact from './components/Contact'
import AboutMe  from "./components/AboutMe";
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'



function App() {
  
  return (
    <div>
      <Navbar/>
      <Mission/>
      <Profile/>
      <AboutMe/>
      <Contact/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </div>
);

  
}

export default App
