import React from 'react'
import { Icon } from '@iconify/react'
import './Card.css'

const Card = ({ img, name }) => (
    <div className={`container_logo ${name}_`}>
        <Icon
            icon={img}
            className='img'
            alt={name}
        />
        <h3 className='subtitle'>{name}</h3>
    </div>
)

export default Card