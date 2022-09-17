import React from 'react';
import fotodiego from '../../fotodiego.jpg';
import Swing from 'react-reveal/Swing'; 
import Fade from 'react-reveal/Fade';
import './About.css'

export default function About() {
  return (
    <div className="About">
      <Swing>
        <h2>Un poco sobre mi</h2>
      </Swing>
            <h3>Diego E. Pizarro A.</h3>
        <div className="About_MContainer">
        <p>
          <Fade delay={1200} top cascade>
          Hola mi nombre es Diego y soy desarrollador web Full Stack, mis conocimientos se los debo a Henry, un bootcamp intensivo el cúal no solo me enseño de tecnologías si no a nunca rendirme, a pensar en positivo y que todo tiene una solución, si usted está buscando una persona que sea responsable, apasionada y que le guste hacer amigos, no dude en contactarme.
          <div>
          Email: diego.cab.1016@gmail.com
          </div>
          </Fade>
        </p>
        <div>
          <a className='cinta uno'>
        <img src={fotodiego} alt='diego' />
        <div className='nac'>nac: 04/11/2002</div>
          </a>
        </div>
        {/* <a href="" download="">Download Text</a> */}
        </div>

    </div>
  )
}
