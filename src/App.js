import React from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import ReactPlayer from 'react-player';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <iframe src="https://player.vimeo.com/video/531000373?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="iamvotingintro"></iframe>
    </div>
  );
}

export default App;
