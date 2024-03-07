import React from "react";
import "/src/index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Contact from './components/Contact';
import AboutMe  from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  
  return (
    <Router>
      <Navbar/>
      <Mission/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/myskills" element={<TechStack/>}/>
        <Route path="/myprojects" element={<Projects/>}/>
        <Route path="/contactme" element={<Contact/>}/>
      
      </Routes>
      <Footer/>
    </Router>
);

  
}

export default App
