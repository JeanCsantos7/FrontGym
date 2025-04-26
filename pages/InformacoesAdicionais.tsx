import React, { useState } from "react";
import { IoMale } from "react-icons/io5";
import { IoMdFemale } from "react-icons/io";
import { GiBodyHeight } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";

const InformacoesAdicionais = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(1);

  return (
    <div className="flex flex-col items-center w-full px-4 mt-[8%]">
      <h1 className="text-xl text-[#e26631] font-semibold mt-10 text-center">
        Qual seu Gênero?
      </h1>

      <div className="w-full flex flex-col items-center gap-4 mt-4">
        <div className="w-[85%] h-[8vh] bg-white rounded-2xl flex items-center justify-center gap-4 shadow">
          <button className="cursor-pointer" onClick={() => {}}>
            <IoMale className="text-blue-400 text-4xl" />
          </button>
          <h2 className="text-[#787878] font-semibold">Masculino</h2>
        </div>

        <div className="w-[85%] h-[8vh] bg-white rounded-2xl flex items-center justify-center gap-4 shadow">
          <button className="cursor-pointer" onClick={() => {}}>
            <IoMdFemale className="text-pink-300 text-4xl" />
          </button>
          <h2 className="text-[#787878] font-semibold">Feminino</h2>
        </div>
      </div>

     
      <h1 className="text-xl text-[#e26631] font-semibold mt-10 text-center">
        Selecione seu peso
      </h1>

      <div className="w-[85%] h-[8vh] bg-white rounded-2xl flex items-center justify-between px-4 shadow mt-4">
        <FaBalanceScale className="text-[#e26631] text-3xl" />
        <input
          type="range"
          min="0"
          max="110"
          className="w-full mx-4 range-custom"
          onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
        <p className="text-[#787878] font-semibold">{peso} kg</p>
      </div>

     
      <h1 className="text-xl text-[#e26631] font-semibold mt-10 text-center">
        Selecione sua altura
      </h1>

      <div className="w-[85%] h-[8vh] bg-white rounded-2xl flex items-center justify-between px-4 shadow mt-4">
        <GiBodyHeight className="text-[#e26631] text-3xl" />
        <input
          type="range"
          min="1.00"
          max="2.15"
          step="0.01"
          className="w-full mx-4 range-custom"
          onChange={(e) => setAltura(parseFloat(e.target.value))}
        />
        <p className="text-[#787878] font-semibold">{altura.toFixed(2)} m</p>
      </div>


      <button
        type="submit"
        className="bg-[#e26631] text-white rounded-lg w-[72vw] h-[5vh] mt-12 hover:bg-[#ec8e66] transition-all duration-300"
      >
        Finalizar Cadastro
      </button>
    </div>
  );
};

export default InformacoesAdicionais;
