import Titulo from "../Titulo/Titulo"

const Formulario = () => {
    return(
        <form className="form-control" >
            {/* <Titulo  titulo={'Titulo de Form'} subTitulo='Eso es subtitulo de Form' /> */}
            <input type="text" />
            <button>Enviar</button>
        </form> 
    )
}

export default Formulario