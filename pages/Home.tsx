import React from "react";
import Logotipo from "../src/assets/Logotipo.png";
import Logotipo2 from "../src/assets/Logotipo 2.png";
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-[55vh]">
        <img className="w-[65%]" src={Logotipo} alt="Logotipo" />

        <span className="flex gap-[7%] mt-8">
          <button
            onClick={() => navigate("/LoginClientes")}
            className="bg-[#e26631] cursor-pointer text-md rounded-3xl p-[4%] w-[35vw] h-[50px] text-white font-semibold hover:bg-[#ec8e66] transition-discrete ease-linear duration-500"
          >
            Entrar
          </button>

          <button
          onClick={() => navigate("/Cadastro")}
            className="border-2 text-md border-[#787878] text-[#e26631] rounded-3xl p-[4%] w-[35vw] h-[50px] font-semibold"
          >
            Cadastrar
          </button>
        </span>
      </div>

  
    <Footer/>

      
    </>
  );
}
