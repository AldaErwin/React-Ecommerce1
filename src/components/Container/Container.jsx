import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

function ComponentContainer ({ sal }){
    // llamadas a las apis
  return (
    <div>
        <Titulo 
            titulo={'soy titulo de componente container'} 
            subTitulo='Eso es subtitulo de container'
            // form={() => Formulario()}  
        >
        <Formulario />
        </Titulo>
            {/* <Formulario /> */}
        <button onClick={sal}>saludo</button>
    </div>
  )
}

export default ComponentContainer