import React from 'react'
import './card.css'

const Card = ({api}) => {
  const {name, id, image}= api
    return (
    <>
    <div className='containerCard'>
        <h4>{name}</h4>
        <img src={image} alt="img" />
    </div>
    </>
  )
}

export {Card}