import axios from "axios";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaPencilAlt, FaRegSave } from "react-icons/fa";
import Filtros from "./Filtros";
import ConfirmacaoDelete from "./ConfirmacaoDelete";
import Header from "./Header";
import ErroFiltragem from "./ErroFiltragem";

interface TreinoTypes {
  id: number;
  nome_exercicio: string;
  grupo_muscular: string;
  equipamento: string;
  imagem_url: string;
  carga: number;
  repeticoes: number;
}

const MeuTreino = () => {
  const [result, setResult] = useState<TreinoTypes[]>([]);
  const [grupo_muscular, setGrupoMuscular] = useState<string>("");
  const [equipamento, setEquipamento] = useState<string>("");
  const [inputs, setInputs] = useState<{
    [id: number]: { carga: string; repeticoes: string };
  }>({});
  const [modalAberto, setModalAberto] = useState<number | null>(null);
  const [controlarBotao, setControlarBotao] = useState<boolean>(true);

  const idArmazenado = sessionStorage.getItem("id");

  const fetchAPI = async () => {
    try {
      const linkAPI = `https://back-end-gym-goes.vercel.app/exibirExercicios/${idArmazenado}`;
      const response = await axios.get(linkAPI);
      setResult(response.data);

      const initialInputs: {
        [id: number]: { carga: string; repeticoes: string };
      } = {};
      response.data.forEach((item: TreinoTypes) => {
        initialInputs[item.id] = {
          carga: item.carga?.toString() || "",
          repeticoes: item.repeticoes?.toString() || "",
        };
      });
      setInputs(initialInputs);
    } catch (error) {
      console.error("Erro ao buscar exercícios:", error);
    }
  };

  const aplicarFiltros = async () => {
    let linkAPI = "";
    try {
      if (equipamento && grupo_muscular) {
        linkAPI = `https://back-end-gym-goes.vercel.app/filtroCombinado/${idArmazenado}/${equipamento}/${grupo_muscular}`;
      } else if (equipamento) {
        linkAPI = `https://back-end-gym-goes.vercel.app/filtroEquipamentos/${equipamento}`;
      } else if (grupo_muscular) {
        linkAPI = `https://back-end-gym-goes.vercel.app/filtroMusculo/${grupo_muscular}`;
      } else {
        fetchAPI();
        return;
      }

      const response = await axios.get(linkAPI);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [idArmazenado]);

  const handleInputChange = (
    id: number,
    campo: "carga" | "repeticoes",
    valor: string
  ) => {
    setInputs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [campo]: valor,
      },
    }));
  };

  const enviarDados = async (
    e: React.FormEvent,
    id: number,
    carga: string,
    repeticoes: string
  ) => {
    e.preventDefault();
    try {
      await axios.put(`https://back-end-gym-goes.vercel.app/atualizarDados/${id}`, {
        carga,
        repeticoes,
      });
      fetchAPI();
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  const abrirModal = (id: number) => setModalAberto(id);
  const fecharModal = () => setModalAberto(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <Header />
        <h1 className="text-3xl text-center font-bold text-[#e26631] mb-2">
          Meu Treino
        </h1>

        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Aqui você encontra sua ficha de treino com os exercícios que
          adicionou.
        </p>

        <Filtros
          equipamento={equipamento}
          setEquipamento={setEquipamento}
          setGrupoMuscular={setGrupoMuscular}
          grupo_muscular={grupo_muscular}
          aplicarFiltros={aplicarFiltros}
          controlarBotao={controlarBotao}
          setControlarBotao={setControlarBotao}
          fetchAPI={fetchAPI}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {result.length === 0 ? (
            <ErroFiltragem />
          ) : (
            result.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e26631] rounded-2xl shadow-lg hover:scale-[1.03] duration-300 transition-transform"
              >
                <img
                  src={item.imagem_url}
                  alt={`Imagem do exercício ${item.nome_exercicio}`}
                  className="w-full h-56 object-contain"
                />

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-[#e26631]">
                    {item.nome_exercicio}
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-medium">Grupo Muscular:</span>{" "}
                    {item.grupo_muscular}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Equipamento:</span>{" "}
                    {item.equipamento}
                  </p>

                  <form
                    onSubmit={(e) =>
                      enviarDados(
                        e,
                        item.id,
                        inputs[item.id]?.carga || "",
                        inputs[item.id]?.repeticoes || ""
                      )
                    }
                    className="space-y-3"
                  >
                    <label className="block font-semibold text-[#e26631]">
                      Carga Atual (kg):
                      <input
                        type="text"
                        value={inputs[item.id]?.carga || ""}
                        onChange={(e) =>
                          handleInputChange(item.id, "carga", e.target.value)
                        }
                        required
                        className="mt-1 w-full px-4 py-2 border border-[#e26631] rounded-md outline-none focus:ring-2 focus:ring-[#e26631]/40"
                      />
                    </label>

                    <label className="block font-semibold text-[#e26631]">
                      Repetições:
                      <input
                        type="text"
                        value={inputs[item.id]?.repeticoes || ""}
                        onChange={(e) =>
                          handleInputChange(
                            item.id,
                            "repeticoes",
                            e.target.value
                          )
                        }
                        required
                        className="mt-1 w-full px-4 py-2 border border-[#e26631] rounded-md outline-none focus:ring-2 focus:ring-[#e26631]/40"
                      />
                    </label>

                    <button
                      type="submit"
                      className={`flex items-center justify-center gap-2 w-full mt-2 py-2 ${
                        inputs[item.id]?.carga && inputs[item.id]?.repeticoes
                          ? "bg-[#16d46c]"
                          : "bg-[#ffe345]"
                      } text-white font-medium rounded-xl transition-all duration-300`}
                    >
                      {inputs[item.id]?.carga && inputs[item.id]?.repeticoes ? (
                        <>
                          <FaRegSave className="text-2xl" />
                          Salvar Informações
                        </>
                      ) : (
                        <>
                          <FaPencilAlt className="text-2xl" />
                          Editar Informações
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => abrirModal(item.id)}
                      className="flex items-center justify-center gap-2 w-full mt-2 py-2 bg-[#d61c1c] text-white font-medium rounded-xl hover:bg-[#d81919] transition-all duration-300"
                    >
                      <IoTrashOutline className="text-2xl" />
                      Remover Exercício
                    </button>

                    <ConfirmacaoDelete
                      id={item.id}
                      isOpen={modalAberto === item.id}
                      isClosed={fecharModal}
                      fetchApi={fetchAPI}
                    />
                  </form>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MeuTreino;
