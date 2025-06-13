interface FiltrosType {
  grupo_muscular: string;
  setGrupoMuscular: React.Dispatch<React.SetStateAction<string>>;
  equipamento: string;
  setEquipamento: React.Dispatch<React.SetStateAction<string>>;
  aplicarFiltros: () => void;
  fetchAPI: () => void;
  controlarBotao: boolean;
  setControlarBotao: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filtros = ({
  equipamento,
  setEquipamento,
  grupo_muscular,
  setGrupoMuscular,
  aplicarFiltros,
  controlarBotao,
  setControlarBotao,
  fetchAPI,
}: FiltrosType) => {
  const BotaoBuscar = () => {
    setControlarBotao(!controlarBotao);
    aplicarFiltros();
  };

  const LimparFiltros = () => {
    setControlarBotao(!controlarBotao);
    setGrupoMuscular("");
    setEquipamento("");
    fetchAPI();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10 w-full px-4">
      <label className="text-lg font-semibold text-gray-700">Filtrar por:</label>

      <select
        className="w-full max-w-md min-h-[5rem] bg-[#e26631] px-6 py-3 rounded-xl text-white text-lg outline-none border-2 border-[#ff520d] focus:ring-2 focus:ring-[#e26631]/50"
        onChange={(e) => setGrupoMuscular(e.target.value)}
        value={grupo_muscular}
      >
        <option disabled value="">
          Selecione um grupo muscular
        </option>
        <option value="Abdomen">Abdomen</option>
        <option value="Biceps">Biceps</option>
        <option value="Costas">Costas</option>
        <option value="Peitoral">Peitoral</option>
        <option value="Triceps">Triceps</option>
        <option value="Ombros">Ombros</option>
        <option value="Quadriceps">Quadriceps</option>
        <option value="Panturrilha">Panturrilha</option>
        <option value="Posterior de coxa">Posterior de coxa</option>
        <option value="Gluteo">Gluteo</option>
      </select>

      <select
        className="w-full max-w-md min-h-[5rem] bg-[#e26631] px-6 py-3 rounded-xl text-white text-lg outline-none border-2 border-[#ff520d] focus:ring-2 focus:ring-[#e26631]/50"
        onChange={(e) => setEquipamento(e.target.value)}
        value={equipamento}
      >
        <option disabled value="">
          Selecione um Equipamento
        </option>
        <option value="Halteres">Halteres</option>
        <option value="Máquina">Máquina</option>
        <option value="Polia">Polia</option>
        <option value="Barra">Barra</option>
      </select>

      {controlarBotao ? (
        <button
          onClick={BotaoBuscar}
          className="w-full max-w-md mt-4 bg-[#e26631] px-4 py-3 rounded-xl text-white text-lg outline-none border-2 border-[#ff520d] hover:bg-[#cf521d] transition-colors"
        >
          Buscar
        </button>
      ) : (
        <button
          onClick={LimparFiltros}
          className="w-full max-w-md mt-4 bg-[#e26631] px-4 py-3 rounded-xl text-white text-lg outline-none border-2 border-[#ff520d] hover:bg-[#cf521d] transition-colors"
        >
          Limpar Filtros
        </button>
      )}
    </div>
  );
};

export default Filtros;
