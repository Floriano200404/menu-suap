function Button({cor, frase, contador, atualiza}){
    function click(){
        atualiza(contador + 1)
    }
    return(
        <button style={{backgroundColor: cor}} onClick= {click}> {frase} {contador} {atualiza}
        </button>);
        
}
export default Button;