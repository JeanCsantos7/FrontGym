import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const LoginClientes = () => {
  const navigate = useNavigate();
  const[email, setEmail] = useState<string>("")
  const[senha, setSenha] = useState<string>("")
  const[erroAcesso, setErroAcesso] = useState<string>("")




 const fetchAPI = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault()

  try {
    const linkAPI = "https://back-end-gym-goes.vercel.app/Login"
   
    const response = await axios.post(linkAPI, 
    {email,senha})
 
   const { token, id, nome } = response.data
 
     sessionStorage.setItem("token", token)
     sessionStorage.setItem("id", id)
     sessionStorage.setItem("nome", nome)

   navigate("/CriacaoTreinos")
  


  } 
  
  catch (error) {
    
    console.error(`Não foi possível concluir o login: ${error}`)
    
    setErroAcesso("Email ou senha inválidos tente novamente!")
    setEmail("")
    setSenha("")
    
    
    setTimeout(() => {
      setErroAcesso("")

    }, 5100)
   
  }



  



 }

  return (
    <>
      <div className="flex items-center">
        <div className="w-[45vw]  bg-[#e26631] h-[40vh] max-h-[45vh] rounded-t-[25%] -skew-y-16 mt-[9%] scale-x-165 "></div>
        <h1 className="z-8 ml-[0.3%]   font-semibold text-5xl text-[#787878] ">
          Login
        </h1>
      </div>

      <h2 className="mt-[15%] font-semibold text-center text-xl text-[#787878] ">
        Bem-Vindo de volta <br /> preencha seus dados para acessar.
      </h2>
      <div className="  rounded-2xl mt-[8.5%] m-auto w-[82%] h-[36vh] font-bebas">
        
        <form onSubmit={fetchAPI} method="POST" action="">

    
        <span className="flex flex-col p-[8%]">
          <label className="text-[#e26631] font-semibold text-lg" htmlFor="">
            E-mail
          </label>
          <input
            className=" border-2 border-[#e26631] rounded-lg w-full h-[6.5vh] mt-[4%] outline-none p-[3%]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />
          <label
            className="text-[#e26631] font-semibold text-lg mt-[8%] "
            htmlFor=""
          >
            Senha
          </label>
          <input
            className=" border-2 border-[#e26631] rounded-md  mt-[4%] w-full h-[6.5vh] p-[3%] outline-none"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="mt-[14%] h-[6.3vh] rounded-lg bg-[#e26631] text-[#ffffff] font-bold hover:bg-[#ec8e66] transition-discrete ease-linear duration-500">
            Entrar
          </button>
          <h3 className="text-center text-sm mt-[7.5%]">
            Ainda não tem uma conta?{" "}
            <u
              onClick={() => navigate("/Cadastro")}
              className="text-[#e26631] font-bold"
            >
              Cadastre-se
            </u>
          </h3>
        </span>

        <p className="text-center text-[#eb3838] text-md p-[4.5%] ">{erroAcesso}</p>

        </form>
      </div>
    </>
  );
};

export default LoginClientes;
