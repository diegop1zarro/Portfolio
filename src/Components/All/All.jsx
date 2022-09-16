import React, { useState , useEffect } from 'react';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
// import Fade from 'react-reveal/Fade';
// import Jello from 'react-reveal/Jello';
// import HeadShake from 'react-reveal/HeadShake'; // se mueve un poco de izq a der
// import Pulse from 'react-reveal/Pulse';  // se agranda y se achica
import RubberBand from 'react-reveal/RubberBand'; // tambien pero con mas flow
// import Shake from 'react-reveal/Shake'; // se bate para los costado
// import Spin from 'react-reveal/Spin'; // una locura gira como un espiner
// import Swing from 'react-reveal/Swing'; // me gusta 10/10
// import Tada from 'react-reveal/Tada'; // ta hueno
// import Wobble from 'react-reveal/Wobble'; // muy exagerado
// import Slide from 'react-reveal/Slide';
// import LightSpeed from 'react-reveal/LightSpeed'; // ta hueno
import './All.css'
export default function All() {
  return (
       <div className='All'>
     {/* <Fade top cascade> */}
     <RubberBand>
<div className='All_Title'>
{/* <h1>Bienvenidos a mi portfolio</h1> */}
<svg viewBox="0 0 1320 100">
  <symbol id="s-text">
    <text text-anchor="middle"
          x="50%" y="50%" dy=".35em">
      Bienvenidos a mi portfolio
    </text>
  </symbol>  
  <use href="#s-text" className="text"
       ></use>
  <use href="#s-text" className="text"
       ></use>
  <use href="#s-text" className="text"
       ></use>
  <use href="#s-text" className="text"
       ></use>
  <use href="#s-text" className="text"
       ></use>
</svg>
</div>
</RubberBand>
{/* </Fade> */}
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  )
}
