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
  const [inputs, setInputs] = useState<{ [id: number]: { carga: string; repeticoes: string } }>({});
  const [modalAberto, setModalAberto] = useState<number | null>(null);
  const [controlarBotao, setControlarBotao] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const idArmazenado = sessionStorage.getItem("id");

  const fetchAPI = async () => {
    if (!idArmazenado) return;
    setLoading(true);
    try {
      const linkAPI = `https://back-end-gym-goes.vercel.app/exibirExercicios/${idArmazenado}`;
      const response = await axios.get(linkAPI);
      setResult(response.data);

      const initialInputs: { [id: number]: { carga: string; repeticoes: string } } = {};
      response.data.forEach((item: TreinoTypes) => {
        initialInputs[item.id] = {
          carga: item.carga?.toString() || "",
          repeticoes: item.repeticoes?.toString() || "",
        };
      });
      setInputs(initialInputs);
    } catch (error) {
      console.error("Erro ao buscar exercícios:", error);
    } finally {
      setLoading(false);
    }
  };

  const aplicarFiltros = async () => {
    if (!idArmazenado) return;
    let linkAPI = "";
    setLoading(true);
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

      console.log("Aplicando filtros:", { linkAPI });

      const response = await axios.get(linkAPI);
      setResult(response.data);
    } catch (error) {
      console.error("Erro ao aplicar filtros:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [idArmazenado]);

  const handleInputChange = (id: number, campo: "carga" | "repeticoes", valor: string) => {
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
      alert("Informações salvas com sucesso");
      fetchAPI();
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  const abrirModal = (id: number) => setModalAberto(id);
  const fecharModal = () => setModalAberto(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
        <Header />
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-[#e26631] mb-2">
          Meu Treino
        </h1>

        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-sm sm:text-base">
          Aqui você encontra sua ficha de treino com os exercícios que adicionou.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {loading ? (
            <p className="text-center col-span-full">Carregando exercícios...</p>
          ) : result.length === 0 ? (
            <ErroFiltragem />
          ) : (
            result.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e26631] rounded-2xl shadow-lg hover:scale-[1.02] duration-300 transition-transform flex flex-col"
              >
                <img
                  src={item.imagem_url}
                  alt={`Imagem do exercício ${item.nome_exercicio}`}
                  className="w-full h-48 sm:h-56 object-contain rounded-t-2xl"
                />
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#e26631]">{item.nome_exercicio}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <span className="font-medium">Grupo Muscular:</span> {item.grupo_muscular}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <span className="font-medium">Equipamento:</span> {item.equipamento}
                  </p>

                  <form
                    onSubmit={(e) =>
                      enviarDados(
                        e,
                        item.id,
                        inputs[item.id]?.carga ?? "",
                        inputs[item.id]?.repeticoes ?? ""
                      )
                    }
                    className="space-y-2 sm:space-y-3 mt-auto"
                  >
                    <label className="block font-semibold text-[#e26631] text-sm sm:text-base">
                      Carga Atual (kg):
                      <input
                        type="text"
                        value={inputs[item.id]?.carga ?? ""}
                        onChange={(e) => handleInputChange(item.id, "carga", e.target.value)}
                        required
                        className="mt-1 w-full px-3 py-2 border border-[#e26631] rounded-md outline-none focus:ring-2 focus:ring-[#e26631]/40 text-sm"
                      />
                    </label>

                    <label className="block font-semibold text-[#e26631] text-sm sm:text-base">
                      Repetições:
                      <input
                        type="text"
                        value={inputs[item.id]?.repeticoes ?? ""}
                        onChange={(e) => handleInputChange(item.id, "repeticoes", e.target.value)}
                        required
                        className="mt-1 w-full px-3 py-2 border border-[#e26631] rounded-md outline-none focus:ring-2 focus:ring-[#e26631]/40 text-sm"
                      />
                    </label>

                    <button
                      type="submit"
                      className={`flex items-center justify-center gap-2 w-full mt-2 py-2 ${
                        inputs[item.id]?.carga && inputs[item.id]?.repeticoes
                          ? "bg-[#16d46c]"
                          : "bg-[#ffe345]"
                      } text-white font-medium rounded-xl transition-all duration-300 text-sm sm:text-base`}
                    >
                      {inputs[item.id]?.carga && inputs[item.id]?.repeticoes ? (
                        <>
                          <FaRegSave className="text-lg sm:text-2xl" />
                          Salvar Informações
                        </>
                      ) : (
                        <>
                          <FaPencilAlt className="text-lg sm:text-2xl" />
                          Editar Informações
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => abrirModal(item.id)}
                      className="flex items-center justify-center gap-2 w-full mt-2 py-2 bg-[#d61c1c] text-white font-medium rounded-xl hover:bg-[#d81919] transition-all duration-300 text-sm sm:text-base"
                    >
                      <IoTrashOutline className="text-lg sm:text-2xl" />
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
