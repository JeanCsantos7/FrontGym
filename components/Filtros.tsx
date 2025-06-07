import { useEffect } from "react";



interface FiltrosType {

  grupo_muscular: string;
  setGrupoMuscular: React.Dispatch<React.SetStateAction<string>> ;
  equipamento: string;
  setEquipamento: React.Dispatch<React.SetStateAction<string>>;
  aplicarFiltros: () => void;
  fetchAPI: () => void;
  controlarBotao: boolean;
  setControlarBotao: React.Dispatch<React.SetStateAction<boolean>>


}

const Filtros = ({equipamento, setEquipamento, grupo_muscular, setGrupoMuscular, aplicarFiltros, controlarBotao, setControlarBotao, fetchAPI } : FiltrosType) => {
 
  

  


  const BotaoBuscar = () => {
    
    setControlarBotao(!controlarBotao)

    aplicarFiltros()
    

  }


  const LimparFiltros = () => {

     setControlarBotao(!controlarBotao)
     setGrupoMuscular("")
     setEquipamento("")
     fetchAPI()
  }

  

 

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <label htmlFor="">Filtrar por:</label>

     
        <select
          className="w-75 bg-[#e26631] px-4 py-2 rounded-xl text-white outline-none border-2 border-[#ff520d]"
          onChange={(e) => setGrupoMuscular(e.target.value)}
          value={grupo_muscular}
        >
          <option disabled selected value="">
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
          className="w-75 bg-[#e26631] px-4 py-2 rounded-xl text-white outline-none border-2 border-[#ff520d]"
          onChange={(e) => setEquipamento(e.target.value)}
          value={equipamento}
        >
          <option disabled selected value="">
            Selecione um Equipamento
          </option>
          <option value="Halteres">Halteres</option>
          <option value="Máquina">Máquina</option>
          <option value="Polia">Polia</option>
          <option value="Barra">Barra</option>
        </select>
    

      
      
      {
        controlarBotao ?    <button onClick={BotaoBuscar} className="w-75 mt-[6%] bg-[#e26631] px-4 py-3 rounded-xl text-white outline-none border-2 border-[#ff520d]">
        Buscar
      </button>  : <button onClick={LimparFiltros} className="w-75 mt-[6%] bg-[#e26631] px-4 py-3 rounded-xl text-white outline-none border-2 border-[#ff520d]">
        Limpar Filtros
      </button> 
      }
   



     
      
    </div>
  );
};

export default Filtros;
