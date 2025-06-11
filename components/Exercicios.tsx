import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

import Logotipo2 from "../src/assets/Logotipo 2.png"

interface exerciciosTypes {
  id: number
  nome: string
  descricao: string
  grupo_muscular: string
  imagem_url: string
  equipamento: string
}

const Exercicios = () => {
  const paramsRoute = useLocation()
  const formatarParametro = paramsRoute.pathname.split("/")
  const recortar = formatarParametro[2]

  const [result, setResult] = useState<exerciciosTypes[]>([])
  
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAPI = async () => {
      const linkAPI = `https://back-end-gym-goes.vercel.app/exercicio/${recortar}`
      const response = await axios.get(linkAPI)
      setResult(response.data)
    }

    fetchAPI()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-between">
      <div className="w-full px-6 py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#e26631] mb-8">
          Exercícios: {recortar}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {result.map((item) => (
            <div
             
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-[#e26631] transition-transform hover:scale-105 duration-300"
            >
              <img
                src={item.imagem_url}
                alt={`Imagem do exercício ${item.nome}`}
                className="w-full h-auto max-h-[400px] object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#e26631] mb-2">
                  {item.nome}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Grupo Muscular:</span>{" "}
                  {item.grupo_muscular}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Equipamento:</span>{" "}
                  {item.equipamento}
                </p>
                <button onClick={() => navigate(`/exercicios/${recortar}/${item.nome}`)} className="bg-[#e26631] text-[#fff] font-semibold rounded-xl w-full h-[6vh] mt-[6%] p-[3%]">Ver detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className="w-full mt-12">
     
        <div className="relative w-full h-[15vh] overflow-hidden">
          <div className="absolute inset-0 bg-[#e26631] transform scale-x-150 skew-y-6 origin-bottom-left rounded-t-2xl" />
        </div>


        <div className="relative w-full bg-[#787878] py-6 px-4 flex flex-col items-center text-white">
          <img className="w-40 mb-2" src={Logotipo2} alt="Logotipo Footer" />
          <h1 className="text-lg font-semibold">Gym Goes - 2025</h1>
          <h2 className="text-sm">Todos os direitos reservados</h2>
        </div>
      </div>
    </div>
  )
}

export default Exercicios
