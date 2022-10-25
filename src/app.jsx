import { useState, useEffect } from 'preact/hooks'
import axios from "axios"
import './app.css'
//import { Card } from './card/Card'
import { Car2 } from './card2/Car2'

export function App() {
  // //TRABAJO CON POKEAPI Y FETCH//
  //   const [ api, setApi ] = useState([])
  //   const [click, setClick] = useState (false)
  //   const [pokemones, setPokemones] = useState([])

  //   const urlApi = " https://pokeapi.co/api/v2/pokemon"

  //   const cargarDatos = async (e) =>{
  //     e.preventDefault()
  //     const pokeDatos = await fetch (urlApi)
  //     const pokeRespuesta = await pokeDatos.json()
  //     setApi(pokeRespuesta.results)
  //     !click? setClick(true): setClick(false)
  //   }
    
  //   cargarDatos()


  // useEffect(()=>{
  //   const transformador =  (datos) => {
  //     const pokes = datos.map((pokemon) => {
  //       const pokeArr = pokemon.url.split("/")
  //       const pokeId = pokeArr[6]
  //       const nombre = pokemon.name
  //       const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
        
  //       return(
  //           {
  //           id : pokeId,
  //           name: nombre,
  //           image:pokeImg}
  //       )
  //     })
  //     setPokemones(pokes)
  //   }
  //   transformador(api)
  // },[api])
  // //FIN DE TRABAJO CON POKEAPI Y FETCH//
   

  //TRABAJO CON RICK&MORTHY Y AXIOS//
   const [api2, setApi2] = useState([])
   const UrlRandM= "https://rickandmortyapi.com/api/character"

   useEffect (()=>{
    const getApi = async() =>{
       const response = await axios.get(UrlRandM)
       const responseData = response.data
       setApi2(responseData.results)
    }
    getApi()
   },[])
    console.log(api2)
   const [valor, setValor] = useState("")
   const [opcion, setOpcion] = useState("")
   const [locatioon, setLocatioon] = useState("")

    const handleChange = (e) =>{ 
      setValor(e.target.value)
   }

    const handleSelect = (e) =>{
      //console.log(e.target.value)
      setOpcion(e.target.value)
    }
     //console.log(valor)
    const handleSelect2 = (e) =>{
      //console.log(e.target.value)
      setLocatioon(e.target.value)
    }
  return (
    <>
      {/* <div className='container'>
        <section>
           <h3>Obtener api: </h3>
           <button type='submit' onClick={cargarDatos}>ver</button>
           
        </section>
        <div className='constainerPoke'>
          { click &&  pokemones.map(personaje => <Card api={personaje}/>)}
        </div>
      </div> */}
      <br/>
      <br/>
      <br/>
      <div className='contPadre'>
        <div className='containerApi2'>
          <div className='busquedaPj'>
            <h2 className='h2cont'>BUSCAR PERSONAJES</h2>
            <input type="text" name="nombre" placeholder='Ingresa el nombre' onChange={handleChange} value={valor}/>
            <select onChange={handleSelect}>
              <option value="" selected>Todos</option>
              <option value="alive">alive</option>
              <option value="death">death</option>
              <option value="unknown">undefined</option>
            </select>
            <select onChange={handleSelect2}>
            <option value="" selected>Todos</option>
              <option value="Earth">tierra</option>
              <option value="unknown">nc</option>
              <option value="Citadel of Ricks">galaxia</option>
            </select>
          </div>
          <section className='container2'>
            
            {api2.filter( el => el.name.toLowerCase().includes(valor))
            .filter(el=> el.status.toLowerCase().includes(opcion))
            .filter(el=> el.location.name.includes(locatioon))
            .map(el => (<Car2 key={el.id} data={el}/>))}
          </section>
        </div>
      </div>
    </>
  )
}
