import Logotipo from "../src/assets/Logotipo.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[55vh] px-4">
        <img
          className="lg:w-[13%] w-[65%] max-w-xs"
          src={Logotipo}
          alt="Logotipo"
        />

        <span className="flex flex-col sm:flex-row gap-6 mt-8 w-full max-w-md justify-center items-center">
          <button
            onClick={() => navigate("/LoginClientes")}
            className="bg-[#e26631] cursor-pointer text-md rounded-3xl px-6 py-3 w-[80%] sm:w-[48%] text-white font-semibold hover:bg-[#ec8e66] transition-colors duration-500"
          >
            Entrar
          </button>

          <button
            onClick={() => navigate("/Cadastro")}
            className="border-2 text-md border-[#787878] text-[#e26631] rounded-3xl px-6 py-3 w-[80%] sm:w-[48%] font-semibold"
          >
            Cadastrar
          </button>
        </span>
      </div>

      <Footer />
    </>
  );
}
