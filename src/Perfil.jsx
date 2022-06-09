import { useState } from "react";
import Button from "./Button";
import './Perfil.css'

function Perfil({nome, foto, idade}){
    const [numeroVisualizacao, setNumeroVisualizacao] = useState (0);
    function aumentarVisualizacoes(){
        setNumeroVisualizacao(numeroVisualizacao + 1)
    }

    return(
        <div className='card'>
           
            <p className='cardTitle'>{nome}</p>
            <div className="caixa">
                <p></p>
            </div>
        </div>
    );
}

export default Perfil;