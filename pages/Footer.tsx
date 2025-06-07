import React from "react"
import Logotipo2 from "../src/assets/Logotipo 2.png";

const Footer = () => {

    return(
        <>
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
    )
}


export default Footer