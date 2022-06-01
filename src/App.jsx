import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './Cuerpo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Cuerpo/>
    </>
  )
}

export default App
