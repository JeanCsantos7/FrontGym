import Modal from "react-modal";
import Logotipo from "../src/assets/Logotipo.png"

interface ConfirmacaoProps{
    isOpen: boolean,
    isClosed: () => void
}


const ConfirmacaoCheckIn = ({isOpen, isClosed} : ConfirmacaoProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClosed}
        className="bg-[#fff] outline-none shadow-lg shadow-[#ff672b] p-6 rounded-lg flex flex-col justify-between  w-[93%] h-[55vh] mx-auto mt-8 md:w-[85%]"
        overlayClassName="fixed inset-0 bg-black/65 flex items-center"
      >

          <button onClick={isClosed} className="text-[#fff] text-lg ml-[90%] bg-[#ff672b] rounded-3xl">
            X
          </button>

        <div className="flex flex-col justify-center items-center">
          <img className="w-[65%]" src={Logotipo} alt="Logotipo" />
          <p className="text-justify text-md">Parabéns por mais um check-in! Sua presença e comprometimento nos treinamentos mostram o quanto você está focado no seu crescimento. Continue assim, cada passo conta!</p>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmacaoCheckIn;
