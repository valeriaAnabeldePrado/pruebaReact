import { useState, useEffect } from 'preact/hooks'

import './app.css'
import { Card } from './card/Card'

export function App() {
    const [ api, setApi ] = useState([])
    const [click, setClick] = useState (false)

    const urlApi = " https://pokeapi.co/api/v2/pokemon"

    const cargarDatos = async (e) =>{
      e.preventDefault()
      const pokeDatos = await fetch (urlApi)
      const pokeRespuesta = await pokeDatos.json()
      setApi(pokeRespuesta.results)
       console.log("hola")
      !click? setClick(true): setClick(false)
    }

  useEffect(()=>{
    cargarDatos()
  },[])
  
  //ARROJABA ESA
  //const nombre = getPokeName.map(el => console.log(el.length))
  const random = ()=>{
    //console.log(Math.floor(Math.random()* 10))

  }
random()

  return (
    <>
      <div className='container'>
        <section>
           <h3>Obtener api: </h3>
           <button type='submit' onClick={cargarDatos}>ver</button>
           como seria con setClick? no entendi si era en estado o reemplazando el onClick xD
        </section>
        <div className='constainerPoke'>
        { click &&  api.map(personaje => <Card api={personaje}/>)}
        </div>
        
      </div>
    </>
  )
}
