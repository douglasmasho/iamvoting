import React from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import ReactPlayer from 'react-player';
import Intro from "./components/Intro";
import Socials from "./components/Socials";


function App() {
  return (
    <div className="App">
        <Navbar/>
        {/*main route*/}  
        <Hero/>
        <Intro/>
        {/* put the counters here */}
        <Socials/>
        {/* //main route */}
    </div>
  );
}

export default App;
