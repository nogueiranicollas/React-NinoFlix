import { Link } from 'react-router-dom'
import './erro.css'

function Erro(){

    return (
        <div className="container_Error">
            <img className='img2' src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w" />
            <div className='Letters'>
                <h1>404</h1>
                <h2 className='title_error'> AWWW...Não Chore!!!</h2>
                <p> Que tal poder voltar para nossa pagina inicial?</p>
                <Link to='/'>Pagina Inicial</Link>
            </div>
        </div>
        
    )
}

export default Erro