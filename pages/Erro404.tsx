
import Error404 from "../src/assets/Erro404.png"
import { useNavigate } from "react-router-dom"

const Erro404 = () => {

  const navigate = useNavigate()

  return(
    <>
    <div className="p-[4.5%] mt-[16%] flex justify-center items-center flex-col">

   
    <h1
    id="erro"
    className="font-semibold  text-center p-[2%] text-5xl text-[#e26631]">VOCÊ TENTOU ACESSAR UMA PÁGINA QUE NÃO EXISTE!</h1>
    <p className="text-center text-md p-[3.5%] ">A página que você tentou acessar não existe, mas você pode começar um novo caminho retornando para o nosso site.</p>
    <img className="w-full" src={Error404} alt="ImagemErro" />
    <button onClick={() => navigate("/")} className="w-[75%] font-semibold rounded-4xl text-[#fff] mt-[8%] bg-[#e26631] p-[4%]">Voltar para o site</button>
     </div>
    </>
  )

}

export default Erro404