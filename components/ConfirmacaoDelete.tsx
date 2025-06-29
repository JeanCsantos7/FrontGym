import Modal from "react-modal"
import axios from "axios";

interface ModalTypes{
    id: number,
    isOpen: boolean,
    isClosed: () => void,
    fetchApi: () => void

}


  const deletarExercicio = async (id: number, fetchAPI: () => void) => {
    const linkAPI = `https://back-end-gym-goes.vercel.app/deletarExercicio/${id}`;
    await axios.delete(linkAPI);
    fetchAPI()
      
    
  };




const ConfirmacaoDelete = ({id, isOpen, isClosed, fetchApi} : ModalTypes) => {

   return(
   <Modal
    isOpen={isOpen}
    onRequestClose={isClosed}
    className="bg-[#fff] outline-none shadow-lg shadow-[#ff672b] p-6 rounded-lg flex flex-col justify-between  w-[93%] h-[30vh] mx-auto mt-8 md:w-[85%]"
    overlayClassName="fixed inset-0 bg-black/65 flex items-center"

    >

   <button onClick={isClosed}  className="text-[#fff] text-lg ml-[90%] bg-[#ff672b] rounded-3xl">
            X
    </button> 

    <h1 className="text-center text-lg font-semibold">Tem certeza que deseja deletar esse exercício?</h1>
    
    <span className="flex items-center justify-evenly">
   <button onClick={() => deletarExercicio(id, fetchApi )} className="bg-[#ff672b] font-medium text-[#fff] w-[45%] h-[5vh] rounded-lg">Sim</button>
    <button onClick={isClosed} className="bg-[#ff672b] font-medium text-[#fff] w-[45%] h-[5vh] rounded-lg">Não</button>
    </span>
  

    </Modal>

   )
   
    
 

}

export default ConfirmacaoDelete