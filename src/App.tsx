import * as React from "react";
import { useEffect } from "react";
import "/src/index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import TechSkills from './components/skills/TechSkills';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
// import Resume from './components/Resume';
import ReactGA from 'react-ga';
import { NextUIProvider } from "@nextui-org/react";
// import RouteChangeTracker from './components/RouteChangeTracker'
const gaTracking = "G-5J66D3HVRR";
ReactGA.initialize(gaTracking);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, []);

  return (
    <NextUIProvider>
      <Router>
        <Navbar />
        <Mission />
        {/* <RouteChangeTracker /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myskills" element={<TechSkills />} />
          <Route path="/myprojects" element={<Projects />} />
          {/* <Route path="/myresume" element={<Resume />} /> */}
          <Route path="/contactme" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </NextUIProvider>
  );


}

export default App;
