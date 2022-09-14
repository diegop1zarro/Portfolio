import React, { useState , useEffect } from 'react';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import './All.css'
export default function All() {
//  const [activar , setActivar] = useState(false)
// useEffect(()=>{
//   setActivar(true)
// },[])
  return (
    <div className='All'>
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
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  )
}
