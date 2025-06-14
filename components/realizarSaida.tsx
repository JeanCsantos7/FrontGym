
import Vetor3 from "../src/assets/Vetor 3.png"

const RealizarSaida = () => {
  return (
    <div className="fixed inset-0 bg-[#2C2C2C] flex flex-col items-center justify-center z-50 animate-fadeInUp">
      <span className="text-white text-3xl font-bold tracking-wide mb-6 animate-pulse">
        Saindo...
      </span>
    
        
   
      
      <img src={Vetor3} alt="" className="w-[45%] max-w-xs animate-spin delay-700" />
    </div>
  );
};

export default RealizarSaida;
