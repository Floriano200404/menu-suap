
import ContainerPai from "./ContainerPai";

function App() {
  const lista_pessoas = [
    {
      nome:" NOTICIAS PORTAL DO IFRO",
      
      
    },
    
    
  ]
    return(
      <div>
        
       

      { lista_pessoas.map( ( pessoa) => { 
        return<ContainerPai 
        
        nome={pessoa.nome}
        
      />
      } ) }

        </div>
    );
}

export default App
