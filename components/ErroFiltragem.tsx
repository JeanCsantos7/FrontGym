
import FunkoErro from "../src/assets/funko vetor.png"


const ErroFiltragem = () => {

    return(
        <>
        <div className="flex flex-col justify-center items-center">
       <h1 className="text-center font-semibold text-lg text-[#000000] ">Oops Não encontramos resultados pra sua busca!</h1>
        <img className="w-[45%]" src={FunkoErro} alt="vetor de erro" />
        </div>
       
        </>
    )

}

export default ErroFiltragem