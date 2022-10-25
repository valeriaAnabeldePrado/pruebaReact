import React from 'react'
import './card2.css'

const Car2 = ({data}) => {
    //console.log(data)
    const {name, image} = data
  return (
    <div className='containerCard2'>
        <h2>Name<br></br>{name}</h2>
        <img className='imgg' style={{borderRadius:'5px!important'}} src={image} alt={name}/>
    </div>
  )
}

export {Car2}