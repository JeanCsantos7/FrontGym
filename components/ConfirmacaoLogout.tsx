import { useState } from "react";
import Modal from "react-modal";
import { JSX } from "react";
import RealizarSaida from "./realizarSaida";
import { useNavigate } from "react-router-dom";

interface LogoutOFF {
  isOpen: boolean;
  isClosed: () => void;
}

const LogoutOFF = ({ isOpen, isClosed }: LogoutOFF) => {
  
  const[renderizarItem, setRenderizarItem] = useState<JSX.Element>()
  const navigate = useNavigate()

   const realizarSaida = () => {
    
    setRenderizarItem(<RealizarSaida/>)

   

            setTimeout(() => {
      
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("nome");
      sessionStorage.removeItem("id");

      navigate("/")
      
    }, 3500);

  
      
  
    
   }

  
  
  
    return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClosed}
        className="bg-[#fff] outline-none shadow-md shadow-[#ff672b] p-6 rounded-lg flex flex-col justify-between  w-[93%] h-[30vh] mx-auto mt-8 md:w-[85%]"
        overlayClassName="fixed inset-0 bg-black/65 flex items-center"
      >
        <button
          onClick={isClosed}
          className="text-[#fff] text-lg ml-[90%] bg-[#ff672b] rounded-3xl"
        >
          X
        </button>

        <h1 className="text-center text-lg font-semibold">Tem certeza que deseja encerrar sua sessão?</h1>

         <span className="flex items-center justify-evenly">
   <button onClick={realizarSaida}  className="bg-[#ff672b] font-medium text-[#fff] w-[45%] h-[5vh] rounded-lg">Sim</button>
   <div>{renderizarItem}</div>
    <button onClick={isClosed} className="bg-[#ff672b] font-medium text-[#fff] w-[45%] h-[5vh] rounded-lg">Não</button>
    </span>
      </Modal>
    </>
  );
};

export default LogoutOFF;
