
import Button from './Evento/Button'
function Evento({numero}){
   function meuEvento(){
    console.log(`fuiaivado ${numero}`)
   }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button text="primeito evento"/>
            <button onClick={meuEvento}>Ativar</button>
        </div>
        )
}
export default Evento