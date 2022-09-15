import React from 'react';
import dogs from './image/dogs.png';
import henryshoes from './image/henryshoes.png';
import videogame from './image/videogame.png';
import './Projects.css'
export default function Projects() {
  return (
    <div className='Projects'>
        <h2>Mis Proyectos</h2>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className='Projects_container'>
            <div>
      <img src={dogs} className="Projects_img" alt="..."/>
      <a href='https://deploy-dogs.vercel.app' target='_blank' size="small">
      <h4>Dogs</h4>
      </a>
            </div>
       <div className='tecnologías'>
      <p>Proyecto individual "SPA" utilizando API "the dogs api".
      </p>
      <p>Tecnologías utilizadas:</p>
      <span>SQL</span>
      <span>NodeJS</span>
      <span>Sequelize</span>
      <span>PostgresSQL</span>
      <span>Javascript</span>
      <span>React</span>
      <span>Redux</span>
      <span>CSS</span>
      <span>HTML</span>
      </div>
        </div>
        
        <a href='https://github.com/diegop1zarro/proyect-Dogs' target='_blank' size="small">
        <h4>Repositorio 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="projects_svg" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>  
</h4>
        </a>
        
    </div>
    <div className="carousel-item">
       <div className='Projects_container'>   
       <div>
      <img src={henryshoes} className="Projects_img" alt="..."/>
      <a href='https://app-henry-shoes.herokuapp.com' target='_blank' size="small">
      <h4>Henry Shoes</h4>
      </a>
       </div>
      <p>Proyecto Grupal "SPA", E-commerce. 
        Este proyecto fue realizado para el proyecto final de Henry, consta de un E-commerce de zapatillas, el cual nos permite logearnos, agregar productos a nuestro carrito, ver estado de nuestra compra, etc. También cuenta con panel de Administrador para añadir productos, categorías, marcas, cambiar el estado de compras, etc. 
      </p>
       </div> 
       <a href='https://github.com/alemosmusi/ecommerce' target='_blank' size="small">
       <h4>Repositorio 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="projects_svg" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>  
        </h4>
        </a>
    </div>
    <div className="carousel-item">
        <div className='Projects_container'>
            <div>
      <img src={videogame} className="Projects_img" alt="..."/>
      <a href='https://videogame-app.vercel.app' target='_blank' size="small">
      <h4>Videogames</h4>
      </a>
       </div>
       <div className='tecnologías'>
      <p>Proyecto individual "SPA" utilizando API de videogames "Rawg". </p>
      <p>Tecnologías utilizadas:</p>
      <span>SQL</span>
      <span>NodeJS</span>
      <span>Sequelize</span>
      <span>PostgresSQL</span>
      <span>Javascript</span>
      <span>React</span>
      <span>Redux</span>
      <span>CSS</span>
      <span>HTML</span>
       </div>
        </div>
        <a href=' https://github.com/diegop1zarro/proyect-videogames' target='_blank' size="small">
        <h4>
         Repositorio
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="projects_svg" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>  
        </h4> 
        </a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
