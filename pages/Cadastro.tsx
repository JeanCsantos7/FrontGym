import { useState } from "react";
import Logotipo from "../src/assets/Logotipo.png";

import axios from "axios";
import { IoMale } from "react-icons/io5";
import { IoMdFemale } from "react-icons/io";
import { GiBodyHeight } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";

const Cadastro = () => {
 
  const [nome, setNome] = useState<string>("");
  const[cpf, setCPF]= useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(1);
  const [genero, setGeneroEscolhido] = useState<string | null>("");

  const fetchAPI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const linkAPI = "https://back-end-gym-goes.vercel.app/Cadastro";

      const response = await axios.post(
        linkAPI,
        {
          nome,
          cpf,
          email,
          senha,
          genero,
          peso,
          altura,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setNome("")
      setEmail("")
      setCPF("")
      setGeneroEscolhido("")
      setPeso(0)
      setAltura(0)
       
     return response
  
   
    } catch (error) {
      console.error("Não foi possível concluir o cadastro");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 mt-10">
      <img className="w-[55%]" src={Logotipo} alt="Logo" />
      <h1 className="text-center text-[#e26631] font-semibold text-2xl mt-6">
        Cadastre-se
      </h1>

      <form
        onSubmit={fetchAPI}
        className="flex flex-col mt-8 justify-center items-center w-full max-w-md"
      >
        <input
          required
          className="bg-white outline-none rounded-lg w-full h-[5vh] p-4 border-2 border-[#e26631]"
          type="text"
          placeholder="Qual seu nome?"
          onChange={(e) => setNome(e.target.value)}
        />


    <input
          required
          className="bg-white outline-none rounded-lg w-full h-[5vh] mt-6 p-4 border-2 border-[#e26631]"
          type="number"
          placeholder="Informe seu CPF"
          onChange={(e) => setCPF(e.target.value)}
        />


        
        <input
          required
          className="bg-white outline-none rounded-lg w-full h-[5vh] mt-6 p-4 border-2 border-[#e26631]"
          type="email"
          placeholder="Informe seu melhor E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />




        <input
          required
          className="bg-white outline-none rounded-lg w-full h-[5vh] mt-6 p-4 border-2 border-[#e26631]"
          type="password"
          placeholder="Informe sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <h2 className="text-xl text-[#e26631] font-semibold mt-10 text-center w-full">
          Qual seu Gênero?
        </h2>

        <div className="w-full flex flex-col items-center gap-4 mt-4">
          <div
            className={`w-full h-[8vh] cursor-pointer bg-white rounded-2xl flex items-center justify-center gap-4 shadow ${
              genero === "masculino" ? "border-2 border-blue-400" : ""
            }`}
            onClick={() => setGeneroEscolhido("masculino")}
          >
            <IoMale className="text-blue-400 text-4xl" />
            <h3 className="text-[#787878] font-semibold">Masculino</h3>
          </div>

          <div
            className={`w-full h-[8vh] cursor-pointer bg-white rounded-2xl flex items-center justify-center gap-4 shadow ${
              genero === "feminino" ? "border-2 border-pink-300" : ""
            }`}
            onClick={() => setGeneroEscolhido("feminino")}
          >
            <IoMdFemale className="text-pink-300 text-4xl" />
            <h3 className="text-[#787878] font-semibold">Feminino</h3>
          </div>
        </div>

        <h2 className="text-xl text-[#e26631] font-semibold mt-10 text-center w-full">
          Selecione seu peso
        </h2>

        <div className="w-full h-[8vh] bg-white rounded-2xl flex items-center justify-between px-4 shadow mt-4">
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

        <h2 className="text-xl text-[#e26631] font-semibold mt-10 text-center w-full">
          Selecione sua altura
        </h2>

        <div className="w-full h-[8vh] bg-white rounded-2xl flex items-center justify-between px-4 shadow mt-4">
          <GiBodyHeight className="text-[#e26631] text-3xl" />
          <input
            type="range"
            min="1.0"
            max="2.15"
            step="0.01"
            className="w-full mx-4 range-custom"
            onChange={(e) => setAltura(parseFloat(e.target.value))}
          />
          <p className="text-[#787878] font-semibold">{altura.toFixed(2)} m</p>
        </div>

        <button
          type="submit"
          className="bg-[#e26631]  text-white rounded-lg w-full h-[6.3vh] mt-7 mb-9 hover:bg-[#ec8e66] transition-all duration-300"
        >
          Finalizar Cadastro
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
