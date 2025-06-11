import Header from "./Header";
import imagemPerfil from "../src/assets/ImagemPerfil.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import EditarPerfil from "./EditarPerfil";
import { Contexto } from "../context/ContextoIMC";

interface PerfilTypes {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  peso: number;
  altura: number;
  imc: string;
}

const Perfil = () => {
  const [perfilData, setPerfilData] = useState<PerfilTypes | null>(null);
  const idArmazenado = sessionStorage.getItem("id");
  const contexto = useContext(Contexto);

  if (!contexto) return <div>Erro: Contexto não encontrado.</div>;

  const { editar, setEditar, exibirPerfil, setExibirPerfil } = contexto;

  useEffect(() => {
    const fetchAPI = async () => {
      const linkAPI = `https://back-end-gym-goes.vercel.app/buscarIMC/${idArmazenado}`;
      const response = await axios.get(linkAPI);
      setPerfilData(response.data[0]);
    };

    fetchAPI();
  }, [idArmazenado]);

  const habilitarEdicao = () => {
    setExibirPerfil(false);
    setEditar(true);
  };

  return (
    <>
     
      <Header />

      {exibirPerfil && perfilData && (
        <div className="flex flex-col items-center mt-10 px-4">
          <img
            className="w-32 h-32 rounded-full shadow-md mb-4"
            src={imagemPerfil}
            alt="Foto de perfil"
          />
          <h1 className="text-2xl font-bold text-[#e26631] mb-2">{perfilData.nome}</h1>

          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg mt-6 p-6">
            <h2 className="text-xl font-semibold text-center text-[#e26631] mb-4">
              Dados Pessoais
            </h2>

            <div className="text-[#444] space-y-3 text-[1rem]">
              <p><span className="font-semibold text-[#e26631]">Nome:</span> {perfilData.nome}</p>
              <p><span className="font-semibold text-[#e26631]">CPF:</span> {perfilData.cpf}</p>
              <p><span className="font-semibold text-[#e26631]">Email:</span> {perfilData.email}</p>
              <p><span className="font-semibold text-[#e26631]">Gênero:</span> {perfilData.genero}</p>
              <p><span className="font-semibold text-[#e26631]">Peso:</span> {perfilData.peso}</p>
              <p><span className="font-semibold text-[#e26631]">Altura:</span> {perfilData.altura}</p>
              <p><span className="font-semibold text-[#e26631]">IMC:</span> {perfilData.imc}</p>

              <button
                onClick={habilitarEdicao}
                className="bg-[#e26631] text-white w-full py-2 mt-4 rounded-xl"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      )}

      {editar && perfilData && (
        <EditarPerfil
          nome={perfilData.nome}
          cpf={perfilData.cpf}
          email={perfilData.email}
          genero={perfilData.genero}
          peso={perfilData.peso}
          altura={perfilData.altura}
          setPerfilData={setPerfilData}
        />
      )}
    </>
  );
};

export default Perfil;
