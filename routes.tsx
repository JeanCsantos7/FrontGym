import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/Home"
import LoginClientes from "./pages/LoginClientes"
import Cadastro from "./pages/Cadastro"

const Rotas = () => {
  
  
    return(
        <BrowserRouter>
        <Routes>
         
         <Route path="/" element={<Home/>}/>
         <Route path="/LoginClientes" element={<LoginClientes/>}/>
         <Route path="/Cadastro" element={<Cadastro/>}/>
         <Route path="/Cadastro" element={<Cadastro/>}/>

        </Routes>
       </BrowserRouter>
    )
       
    

}

export default Rotas