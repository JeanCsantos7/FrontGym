import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/Home"
import LoginClientes from "./pages/LoginClientes"

const Rotas = () => {
  
  
    return(
        <BrowserRouter>
        <Routes>
         
         <Route path="/" element={<Home/>}/>
         <Route path="/LoginClientes" element={<LoginClientes/>}/>

        </Routes>
       </BrowserRouter>
    )
       
    

}

export default Rotas