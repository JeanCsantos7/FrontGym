import { useState, useContext } from "react";
import axios from "axios";
import { Contexto } from "../context/ContextoIMC";
import Perfil from "./Perfil";

interface PerfilTypes {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  peso: number;
  altura: number;
  setPerfilData: React.Dispatch<React.SetStateAction<any>>;
}

const EditarPerfil = ({
  nome,
  cpf,
  email,
  genero,
  peso,
  altura,
  setPerfilData,
}: PerfilTypes) => {
  const contexto = useContext(Contexto);
  if (!contexto) return <div>Erro: Contexto não encontrado.</div>;

  const { editar, exibirPerfil, setEditar, setExibirPerfil } = contexto;

  const [editarNome, setEditarNome] = useState(nome);
  const [editarCPF, setEditarCPF] = useState(cpf);
  const [editarEmail, setEditarEmail] = useState(email);
  const [editarGenero, setEditarGenero] = useState(genero);
  const [editarPeso, setEditarPeso] = useState(peso);
  const [editarAltura, setEditarAltura] = useState(altura);

  const idArmazenado = sessionStorage.getItem("id");

  const editarDados = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const linkAPI = `http://localhost:5000/EditarPerfil/${idArmazenado}`;
    await axios.put(linkAPI, {
      nome: editarNome,
      cpf: editarCPF,
      email: editarEmail,
      genero: editarGenero,
      peso: editarPeso,
      altura: editarAltura,
    });

    setPerfilData((prev: any) => ({
      ...prev,
      nome: editarNome,
      cpf: editarCPF,
      email: editarEmail,
      genero: editarGenero,
      peso: editarPeso,
      altura: editarAltura,
    }));

    setEditar(false);
    setExibirPerfil(true);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg mt-6 p-6 mx-auto">
      <h2 className="text-xl font-semibold text-center text-[#e26631] mb-4">
        Dados Pessoais
      </h2>

      <form onSubmit={editarDados}>
        {editar && (
          <div className="text-[#444] space-y-4 text-[1rem]">
            <div>
              <label className="font-semibold text-[#e26631]">Nome Completo:</label>
              <input
                value={editarNome}
                onChange={(e) => setEditarNome(e.target.value)}
                className="mt-2 w-full px-4 py-2 border-2 border-[#e26631] rounded-lg outline-none"
                type="text"
              />
            </div>
            <div>
              <label className="font-semibold text-[#e26631]">CPF:</label>
              <input
                value={editarCPF}
                onChange={(e) => setEditarCPF(e.target.value)}
                className="mt-2 w-full px-4 py-2 border-2 border-[#e26631] rounded-lg outline-none"
                type="text"
              />
            </div>
            <div>
              <label className="font-semibold text-[#e26631]">Email:</label>
              <input
                value={editarEmail}
                onChange={(e) => setEditarEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2 border-2 border-[#e26631] rounded-lg outline-none"
                type="email"
              />
            </div>
            <div>
              <label className="font-semibold text-[#e26631]">Gênero:</label>
              <input
                value={editarGenero}
                onChange={(e) => setEditarGenero(e.target.value)}
                className="mt-2 w-full px-4 py-2 border-2 border-[#e26631] rounded-lg outline-none"
                type="text"
              />
            </div>
            <div>
              <label className="font-semibold text-[#e26631]">Peso:</label>
              <input
                value={editarPeso}
                onChange={(e) => setEditarPeso(parseFloat(e.target.value))}
                className="mt-2 w-full px-4 py-2 border-2 border-[#e26631] rounded-lg outline-none"
                type="number"
                step="0.01"
              />
            </div>
            <div>
              <label className="font-semibold text-[#e26631]">Altura:</label>
              <input
                value={editarAltura}
                onChange={(e) => setEditarAltura(parseFloat(e.target.value))}
                className="mt-2 w-full px-4 py-2 border-2 border-[#e26631] rounded-lg outline-none"
                type="number"
                step="0.01"
              />
            </div>

            <button
              type="submit"
              className="bg-[#e26631] text-white w-full py-2 mt-4 rounded-xl hover:bg-[#d45a28] transition-colors"
            >
              Salvar
            </button>
          </div>
        )}
      </form>

      {exibirPerfil && <Perfil />}
    </div>
  );
};

export default EditarPerfil;
