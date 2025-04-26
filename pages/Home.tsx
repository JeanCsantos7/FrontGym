import React from "react"
import Logotipo from "../src/assets/Logotipo.png";
import Logotipo2 from "../src/assets/Logotipo 2.png";
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

  
      <div className="relative w-full h-[27vh] overflow-hidden">
        <div className="absolute rounded-t-4xl inset-0 bg-[#e26631] transform scale-x-150 skew-y-9 origin-bottom-left" />
        <div className="relative z-10 flex justify-center items-center h-full"></div>
      </div>

  
      <div className="relative w-full h-[32vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#787878] transform skew-x-6 scale-x-110 rounded-tl-2xl origin-top-right" />
        <div className="relative z-10 flex justify-center items-center h-full">
          <span className="text-center text-[#fff] flex flex-col justify-center items-center">
            <img className="w-[44%] m-auto" src={Logotipo2} alt="Logotipo Footer" />
            <h1 className="text-lg">Gym Goes - 2025</h1>
            <h2 className="text-md">Todos os direitos reservados</h2>
          </span>
        </div>
      </div>
    </>
  );
}
