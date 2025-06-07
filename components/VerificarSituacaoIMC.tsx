import { useEffect, useState } from "react";


 interface PropsType{
  
    valorIMC : number

 }


const VerificarSituacaoIMC = ({valorIMC} : PropsType) => {
 

  const [situacaoIMC, setSituacaoIMC] = useState<string>("");

 const verificarResultado =  () => {
    if (valorIMC < 18.5) {
      setSituacaoIMC("Abaixo do Peso");
    } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
      setSituacaoIMC("Peso Normal");
    } else if (valorIMC >= 25 && valorIMC < 29.9) {
      setSituacaoIMC("Acima do peso");
    } else if (valorIMC >= 30 && valorIMC < 34.9) {
      setSituacaoIMC("Obesidade Grau I");
    } else if (valorIMC >= 35 && valorIMC < 39.9) {
      setSituacaoIMC("Obesidade Grau II");
    } else if(valorIMC > 40) {
      setSituacaoIMC("Obesidade Grau III");
    }
  };

  useEffect(() => {
    
    verificarResultado()

  }, [valorIMC])

  

    return(
      <>
      <p>{situacaoIMC}</p>
      </>
    )

}

export default VerificarSituacaoIMC