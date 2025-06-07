import { useNavigate } from "react-router-dom";

const Confirmacao = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center  mt-1 p-[7%]">
      <div
        className="w-full max-w-xl p-6 rounded-2xl bg-[#e26631] text-[#fff] border border-[#d86846] shadow-md"
        role="alert"
      >
        <div className="flex items-start gap-3 mb-4">
          <svg
            className="w-6 h-6 mt-1 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div>
            <h2 className="text-lg font-semibold mb-1">
              Exercício adicionado com sucesso!
            </h2>
            <p className="text-sm leading-relaxed">
              Caso deseje adicionar outros exercícios, continue navegando
              normalmente ou veja sua ficha atual de treino abaixo:
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/MeuTreino")}
          className="w-full bg-[#e26631] text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Ver Minha Ficha
        </button>
      </div>
    </div>
  );
};

export default Confirmacao;
