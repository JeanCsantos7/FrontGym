import Modal from "react-modal";


import VerificarSituacaoIMC from "./VerificarSituacaoIMC";

interface Modaltypes {
  isOpen: boolean;
  isClosed: () => void;
  valorIMC: string;
}

const ModalIMC = ({ isOpen, isClosed, valorIMC }: Modaltypes) => {
  const nomeUsuario = sessionStorage.getItem("nome");
  const imcConvertido = parseFloat(valorIMC);


 


  return (
    <>
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={isClosed}
          className="bg-[#fff] outline-none shadow-lg shadow-[#ff672b] p-6 rounded-lg flex flex-col justify-between  w-[90%] h-[45vh] mx-auto mt-8 md:w-[85%]"
          overlayClassName="fixed inset-0 bg-black/65 flex items-center"
        >
          <button onClick={isClosed} className="text-[#fff] text-lg ml-[90%] bg-[#ff672b] rounded-3xl">
            X
          </button>
          <h1 className="text-2xl font-semibold text-[#ff672b]">
            Olá, {nomeUsuario}
          </h1>
          <p>De acordo com as medidas fornecidas segue abaixo seu IMC(Índice de Massa Corporal), fique de olho na classificação de acordo com seu resultado.</p>
          <h2 className="text-md font-semibold"> Resultado: {valorIMC}</h2>
          <div className="text-md text-[#fff] font-semibold bg-[#ff672b] w-full h-[7vh]  p-[2%] rounded-lg"> 
            Situação: <VerificarSituacaoIMC valorIMC={imcConvertido}/> 
            


          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalIMC;
