
import React from 'react';
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
// import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import ToolsSkills from './Components/Skills&Tools.jsx';
import SocialProfiles from './Components/SocialProfiles.jsx';
import Timeline from './Components/Timeline.jsx';


function App() {
  return (
    <div>
     <Navbar />
      <Hero />
      {/* <Projects /> */}
      <About />
      <Timeline/>
    <ToolsSkills/>
    <div className="min-h-screen bg-gray-900">
      <SocialProfiles />
    </div>
      <Contact />
    </div>
  );
}

export default App;
