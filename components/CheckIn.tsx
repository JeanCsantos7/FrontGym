import { useEffect, useState } from "react";
import Logotipo from "../src/assets/Logotipo.png";
import axios from "axios";
import ConfirmacaoCheckIn from "./ConfirmacaoCheckIn";
import Header from "./Header";

interface checkTypes {
  id: number;
  nome: string;
  frequencia: number;
}

const CheckIn = () => {
  const [result, setResult] = useState<checkTypes[]>([]);
  const[isOpen, setIsOpen] = useState(false)
  const nome = sessionStorage.getItem("nome")


  const openModal = () => {
     
    setIsOpen(true)

  }

  const closeModal = () => {
  
    setIsOpen(false)

  }

  const fetchAPI = async () => {
      const linkAPI = `http://localhost:5000/exibirPresenca/${nome}`;
      const response = await axios.get(linkAPI);

      setResult(response.data);
    };

  useEffect(() => {
    

    fetchAPI();
  }, []);

  const fazerCheckIn = async () => {
    const nome = sessionStorage.getItem("nome");
    const id = sessionStorage.getItem("id");

    try {
      const linkAPI = `http://localhost:5000/checkIn`;
      const response = await axios.post(linkAPI, {
        id: id,
        nome: nome,
      });

      fetchAPI()
      openModal()

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <>

      <Header/>
   <div className="min-h-screen flex flex-col justify-center items-center bg-[#f3f4f6] px-4">
     
     
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center space-y-5">
      
      
        <img src={Logotipo} className="w-50 h-auto" alt="Logotipo" />

        <h1 className="text-2xl font-bold text-[#e26631] text-center">
          Realizar Check-In
        </h1>

        <p className="text-gray-700 text-center text-md">
          Essa sessão simula um check-in no estilo do Wellhub, permitindo que o
          usuário acompanhe quantas vezes frequentou a academia.
        </p>

        <button
          className="bg-[#e26631] hover:bg-[#cc5527] text-white w-full py-2 rounded-xl font-semibold transition duration-300"
          onClick={fazerCheckIn}
        >
          Fazer Check-in
        </button>

        <ConfirmacaoCheckIn isOpen={isOpen} isClosed={closeModal}/>

        <p className="text-gray-800 font-medium">
          Check-ins realizados:
        
          <span className="text-[#e26631] text-center font-bold">
            
            { result.length === 0 ? <div>0</div> : 
              result.map((item) => {
              
                return(
                  <>
                 <div>{item.frequencia}</div>
                  </>
                )

              }) 
            }
            
          </span>
        </p>
      </div>
    </div>
    </>
    
  );
};

export default CheckIn;
