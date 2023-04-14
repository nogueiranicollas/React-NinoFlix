import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'

import { toast } from 'react-toastify'

function Favoritos(){

    const [filmes,setFilmes] = useState([])

    

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@ninoflix");
        setFilmes(JSON.parse(minhaLista) || [])



    })

    function excluirFilme(id, titulo){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !==id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@ninoflix",JSON.stringify(filtroFilmes))
        toast.success(`Filme ${titulo} removido com sucesso`)

    }


    return (
        <div className="meusFilmes">
            
        <h1> Meus Filmes</h1>
        {filmes.length ===0 && <span>Você não possui filmes salvos ainda</span>}

        <ul>
            {filmes.map((filme)=>{
                return(
                    <li key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}` } alt={filme.title}/>
                        <span>{filme.title} </span>

                        <div>
                            <Link to={`/filme/${filme.id}`}>Detalhes</Link>
                        <button onClick={() => excluirFilme(filme.id, filme.title)}>Excluir </button>
                        </div>

                    </li>
                )
            })}

        </ul>
        </div>
        
    )
}

export default Favoritos