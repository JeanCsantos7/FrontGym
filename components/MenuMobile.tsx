

import { Link } from "react-router-dom"

const MenuMobile = () => {

return(
    <>
     <div className="bg-[#ff672b] text-[#fff] w-full h-[35vh] mt-[5%] mb-[8%] text-center p-[9%] flex flex-col gap-4.5">
        <Link to={"/Perfil"}>Ver Perfil</Link>
        <Link to={"/MeuTreino"}>Meu Treino</Link>
        <Link to={"/CriacaoTreinos"}>Montar Treino</Link>
        <Link to={"/CalculadoraIMC"}>Calculadora IMC</Link>
        <Link to={"/CheckIn"}>Check-in</Link>
   
     </div>

    </>
)

}

export default MenuMobile