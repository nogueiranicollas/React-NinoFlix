////https://api.themoviedb.org/3/movie/now_playing?api_key=b51be87d499ec4686deef66c6510da77&language=pt-BR

import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import './home.css'


function Home(){

const[filmes,setFilmes] = useState([])

const[loading, setLoading] = useState(true)

useEffect(()=>{

async function loadFilmes(){
  const response = await api.get("movie/now_playing",{
    params:{
      api_key:"b51be87d499ec4686deef66c6510da77",
      language:"pt-BR",
      
        }
  })

  console.log(window.location)
  setFilmes(response.data.results.slice(0,10))
  setLoading(false)

}

loadFilmes()

},[])

if(loading){
return(
  <div>
    <h2 > Carregando Filmes...</h2>
  </div>
)

}

  return(
    <div className="container">
      <div className="listaFilmes">

      {filmes.map((filme)=>{
        return (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}` } alt={filme.title}/>
            <Link to={`/filme/${filme.id}`} > Acessar </Link>
          </article>
        )
      })}

      </div>
    </div>
  )
}

export default Home;