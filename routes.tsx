import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import LoginClientes from "./pages/LoginClientes"
import Cadastro from "./pages/Cadastro"
import InformacoesAdicionais from "./pages/InformacoesAdicionais"

const Rotas = () => {
  
  
    return(
        <BrowserRouter>
        <Routes>
         
         <Route path="/" element={<Home/>}/>
         <Route path="/LoginClientes" element={<LoginClientes/>}/>
         <Route path="/Cadastro" element={<Cadastro/>}/>
         <Route path="/InformacoesAdicionais" element={<InformacoesAdicionais/>}/>

        </Routes>
       </BrowserRouter>
    )
       
    

}

export default Rotas