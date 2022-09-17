import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from '@iconify/react';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import css3 from '@iconify-icons/logos/css-3';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import javascriptIcon from '@iconify-icons/logos/javascript';
import html5 from '@iconify-icons/logos/html-5';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import sequelizeIcon from '@iconify-icons/logos/sequelize';
import expressIcon from '@iconify-icons/logos/express';
import sassIcon from '@iconify-icons/logos/sass';
import Card from './Card/Card';
import Swing from 'react-reveal/Swing';
import  './Skills.css';

const Skills = () => {
  const logos = [
    [css3, "css3"],
    [expressIcon, "express"],
    [html5, "html5"],
    [javascriptIcon, "javaScript"],
    // [materialUi, "material"],
    [nodejsIcon, "nodeJS"],
    [postgresqlIcon, "postgreSQL"],
    [reactIcon, "react"],
    [reduxIcon, "redux"],
    // [typeScript, "typeScript"],
    [sequelizeIcon, "sequelize"],
    [bootstrapIcon, "bootstrap"],
    [sassIcon, "sass"],
]
  return (
    <div className='container_main'>
      <Swing>
            <h2>Tecnologías</h2>
      </Swing>
      <Fade delay={1800} top cascade>
            <div className='container_logos'>
                {logos.map((k, i) => (
                    <div className='logo' key={i}>
                        <Card img={k[0]} name={k[1]} />
                    </div>
                ))}
            </div>
      </Fade>
        </div>
  );
};

export default Skills;