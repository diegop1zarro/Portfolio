import React from 'react'
import { Icon } from '@iconify/react'
import Shake from 'react-reveal/Shake';
import './Card.css'

const Card = ({ img, name }) => (
    <div className={`container_logo ${name}_`}>
        <Shake>
        <Icon
            icon={img}
            className='img'
            alt={name}
        />
        </Shake>
        <h3 className='subtitle'>{name}</h3>
    </div>
)

export default Card