import React, { useEffect, useState, JSX } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmacaoAlert from "./ConfirmacaoAlert";

interface exerciciosTypes {
  id: number;
  nome: string;
  descricao: string;
  grupo_muscular: string;
  imagem_url: string;
  equipamento: string;
}

const DetalhesExercicios = () => {
  const paramsRoute = useLocation();
  const nameRoute = paramsRoute.pathname.split("/");
  const pegarParametro = nameRoute[3];
  const [confirmarAdicao, setConfirmar] = useState<JSX.Element | string>("");

  const navigate = useNavigate();
  const [result, setResult] = useState<exerciciosTypes[]>([]);

  const fetchAPI = async () => {
    const linkAPI = `https://back-end-gym-goes.vercel.app/filtro/${pegarParametro}`;
    const response = await axios.get(linkAPI);
    setResult(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const adicionarExercicio = async (
    e: React.FormEvent<HTMLFormElement>,
    item: exerciciosTypes
  ) => {
    e.preventDefault();

    const idArmazenado = sessionStorage.getItem("id");

    try {
      const linkAPI = `https://back-end-gym-goes.vercel.app/AdicionarExercicios`;
      await axios.post(
        linkAPI,
        {
          usuario_id: idArmazenado,
          nome_exercicio: item.nome,
          grupo_muscular: item.grupo_muscular,
          imagem_url: item.imagem_url,
          equipamento: item.equipamento,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setConfirmar(<ConfirmacaoAlert />);
      
      setTimeout(() => {
        setConfirmar("");
    
      }, 5400);

          fetchAPI();

      
      navigate(`/exercicios/${pegarParametro}/${item.nome}`);
    } catch (error) {
      console.error(`Não foi possível concluir sua solicitação: ${error}`);
      setConfirmar("");
    }
  };

  return (
    <>
      {result.map((item) => (
        <form
          key={item.id}
          method="POST"
          onSubmit={(e) => adicionarExercicio(e, item)}
        >
          <div className="flex flex-col items-center px-6 py-8 max-w-xl mx-auto">
            <img
              className="w-full max-w-md rounded-lg shadow-lg"
              src={item.imagem_url}
              alt={item.nome}
            />

            <h1 className="text-2xl font-bold text-[#e26631] text-center mt-6">
              {item.nome}
            </h1>

            <h2 className="text-md font-medium mt-2">
              Equipamento Necessário:{" "}
              <span className="text-gray-700">{item.equipamento}</span>
            </h2>

            <h2 className="text-md font-medium mt-2">
              Grupo Muscular:{" "}
              <span className="text-gray-700">{item.grupo_muscular}</span>
            </h2>

            <p className="text-justify text-base text-gray-800 mt-4 leading-relaxed">
              {item.descricao}
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 flex items-center justify-center">
                  <h2 className="text-xl font-semibold">12</h2>
                </div>
                <p className="mt-2 text-sm">Repetições</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-[#e26631] flex items-center justify-center">
                  <h2 className="text-xl font-semibold">2:00</h2>
                </div>
                <p className="mt-2 text-sm">Tempo de Descanso</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 flex items-center justify-center">
                  <h2 className="text-xl font-semibold">4</h2>
                </div>
                <p className="mt-2 text-sm">Séries</p>
              </div>
            </div>

          
            <button
              type="submit"
              className="bg-[#e26631] cursor-pointer text-[#fff] font-semibold rounded-xl w-full h-[6vh] mt-[6%] p-[3%]"
            >
              Adicionar na sua ficha
            </button>

            <div>{confirmarAdicao}</div>
          </div>
        </form>
      ))}
    </>
  );
};

export default DetalhesExercicios;
