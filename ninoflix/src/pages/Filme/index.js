import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

import './filme.css'

function Filme(){

  
  const [filmes,setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigate()

  const {id} = useParams()

  useEffect(()=>{

    async function loadFilmes(){
      const url =`/movie/${id}`
      const response = await api.get(url,{
        params:{
          api_key:"b51be87d499ec4686deef66c6510da77",
          language:"pt-BR",
          
            }
      }).then((response)=>{
        setFilmes(response.data)
        setLoading(false)
 
      }).catch(()=>{

        navigation("/",{replace:true})
        return;

      })
    
      console.log(response.data)
      
      
    
    
    }
    
    loadFilmes()

    return() =>{
      console.log('COMPONENTE DESMONTADO')
    }
    
    },[navigation, id])


    function salvarFilme(){
      const minhalista = localStorage.getItem("@ninoflix")

      let filmesSalvos =  JSON.parse(minhalista) || []

      const hasFilme = filmesSalvos.some((filmesSalvos) =>filmesSalvos.id === filmes.id)

      if(hasFilme){
        toast.warn('este filme ja está na lista')
        return
      }

      filmesSalvos.push(filmes)
      localStorage.setItem("@ninoflix",JSON.stringify(filmesSalvos))
      toast.success("Filme Salvo com Sucesso")

    }
    
    if(loading){
      return(
        <div className="filme-info">
          <h1>Carregando Detalhes</h1>
        </div>
      )
    }

    const trailer = filmes.title.replace(' ','+')
    const baseTrailer = ' https://www.youtube.com/results?search_query='
     
      return(
        <div className="filme-info">
          
            <h1>{filmes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}` } alt={filmes.title}/>
            <h3> Sinopse:</h3>
            <span>{filmes.overview}</span>
            <strong> Avaliação:{parseFloat(filmes.vote_average).toFixed(1)}/10</strong>
          
          <div className="area-buttons"> 
            <button onClick={salvarFilme} >Salvar</button>
           
              <a href={`${baseTrailer}${trailer} trailer dublado`} target="blank" rel="noopener noreferrer">Trailer              </a>
            
          </div>
      
        </div>
      )
    }


export default Filme;