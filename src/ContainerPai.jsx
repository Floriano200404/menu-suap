import './Perfil.css'
import Title from "./Title"
import Button from './Button';
function ContainerPai({nome}){
    return(
        <div className='card'>
           <Title />
            <p className='cardTitle'>{nome}</p>
    <div className="caixa" >
                <p className='texto'>10/10/2020 08:13</p>
                <p>Notícias - Zona Norte ... Notícias - São Miguel do Guaporé ...
                O Instituto Federal de Educação, Ciência e Tecnologia de Rondônia
                IFRO vem a público"</p>
                
            </div>
            <div className="caixa" >
                <p className='texto'>10/10/2020  08:13</p>
                <p>Notícias - Zona Norte ... Notícias - São Miguel do Guaporé ...
                O Instituto Federal de Educação, Ciência e Tecnologia de Rondônia
                IFRO vem a público"</p>
                
            </div>
            <div className="caixa" >
                <p className='texto'>10/10/2020  08:13</p>
                <p>Notícias - Zona Norte ... Notícias - São Miguel do Guaporé ...
                O Instituto Federal de Educação, Ciência e Tecnologia de Rondônia
                IFRO vem a público"</p>
                
            </div>
            <div className="caixa" >
                <p className='texto'>10/10/2020  08:13</p>
                <p>Notícias - Zona Norte ... Notícias - São Miguel do Guaporé ...
                O Instituto Federal de Educação, Ciência e Tecnologia de Rondônia
                IFRO vem a público" </p>
                
            </div>
            <div className="caixa" >
                <p className='texto'>10/10/2020  08:13</p>
                <p>Notícias - Zona Norte ... Notícias - São Miguel do Guaporé ...
                O Instituto Federal de Educação, Ciência e Tecnologia de Rondônia
                IFRO vem a público"</p>
                
            </div>
                <Button />
        </div>    
    )
}

export default ContainerPai;