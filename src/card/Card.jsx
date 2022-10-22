import React from 'react'
import './card.css'

const Card = ({api}) => {
  const {name}= api
    return (
    <>
    <div className='containerCard'>
        <h4>{name}</h4>
        

    </div>
    </>
  )
}

export {Card}