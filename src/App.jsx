import { useState, useEffect } from 'react'
import Cuerpo from './components/Cuerpo/Cuerpo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import ComponenteClase from './components/ComponenteClase';
import Titulo from './components/Titulo/Titulo';
import Container from './components/Container/Container';

function App() {    
    const [ count, setCount ] = useState(0)

    function agregar() {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    return (
        <>
        <Menu/>
        <div>
            <h2>la cantidad es = {count}</h2>
            <button onClick={agregar}>Sumar ➕</button>      
            <button onClick={restar}>Restar ➖</button>      
        </div>
        </>
    )
}

//App()

export default App
