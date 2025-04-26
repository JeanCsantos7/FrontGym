
import React from "react"
import Logotipo from "../src/assets/Logotipo.png"
import { useNavigate } from "react-router-dom"


const Cadastro = () => {

     const navigate = useNavigate()
     
    return(
        <>
        <div className="flex flex-col justify-center items-center">
        <img className="w-[55%]" src={Logotipo} alt="" />
        <h1 className="text-center text-[#e26631] font-semibold text-2xl">Cadastre-se</h1>
      
        <form action="" className="flex flex-col mt-[5%]  justify-center items-center">

        <input required className="bg-[#fff] outline-none rounded-lg w-[72vw] h-[5vh] m-auto p-[5%]" type="text" placeholder="Qual seu nome?" />
        <input required className="bg-[#fff] outline-none rounded-lg w-[72vw] h-[5vh]  m-auto mt-7 p-[5%]" type="text" placeholder="Informe seu melhor E-mail" />
        <input required className="bg-[#fff] outline-none rounded-lg w-[72vw] h-[5vh]  m-auto mt-7 p-[5%]" type="text" placeholder="Informe sua senha" />
        <button type="submit" onClick={() => navigate("/InformacoesAdicionais")} className="bg-[#e26631] text-[#fff] rounded-lg w-[72vw] h-[5vh] mt-[12%] hover:bg-[#ec8e66] transition-discrete ease-linear duration-500">Continuar</button>
        </form>
  
        
        </div>
      
        </>
    )

}

export default Cadastro