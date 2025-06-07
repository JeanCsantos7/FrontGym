import { JSX, useState } from "react";
import Header from "../components/Header";
import Loading from "./Loading";
import ModalIMC from "./Modal";

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [resultadoIMC, setResultado] = useState<string>("");
  const [renderizarLoading, setRenderizarLoading] = useState<
    JSX.Element | string
>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const calcularIMC = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRenderizarLoading(<Loading />);

    setTimeout(() => {
      const converterPeso = parseFloat(peso);
      const converterAltura = parseFloat(altura) / 100;
      const calculoIMC = converterPeso / (converterAltura * converterAltura);
      const formatar = calculoIMC.toFixed(2);

      setResultado(formatar);

      setRenderizarLoading("");
      openModal();

      return calculoIMC;
    }, 4500);
  };

  return (
    <>
      <Header />
      <div className="border-2 border-[#e26631] bg-[#ffffff] w-[90vw] rounded-2xl h-[55vh] p-[8%] mt-[9%]   m-auto">
        <h1 className="text-3xl font-bold text-center text-[#e26631] mb-8 mt-[5%]">
          Cálculo IMC
        </h1>

        <form action="" onSubmit={calcularIMC}>
          <span className="flex flex-col m-[8%]">
            <label htmlFor="">Peso(kg)</label>
            <input
              onChange={(e) => setPeso(e.target.value)}
              required
              className="mt-[6%] w-full h-[5vh] p-[7%] border-2 border-[#e26631] rounded-lg outline-none"
              type="text"
              placeholder="Digite aqui seu peso"
            />

            <label className="mt-[10%]" htmlFor="">
              Altura(cm)
            </label>
            <input
              onChange={(e) => setAltura(e.target.value)}
              required
              className="mt-[6%] w-full h-[5vh] p-[7%] border-2 border-[#e26631] rounded-lg outline-none"
              type="text"
              placeholder="Digite aqui sua altura"
            />

            <button
              type="submit"
              className="bg-[#e26631] text-[#fff] font-semibold rounded-xl w-full h-[6vh] mt-[18%] p-[1%]"
            >
              Calcular
            </button>
            {renderizarLoading}

            <ModalIMC
              isOpen={modalIsOpen}
              isClosed={closeModal}
              valorIMC={resultadoIMC}
            />
          </span>
        </form>
      </div>
    </>
  );
};

export default CalculadoraIMC;
