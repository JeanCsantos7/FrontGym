import { createContext, ReactNode, useState } from "react";

interface ContextTypes{
    editar: boolean,
  setEditar: any,
  exibirPerfil: boolean,
  setExibirPerfil: any;
}
export const Contexto = createContext<ContextTypes | null>(null)


export const ContextoIMC = ({children} : {children:ReactNode}) => {
    
   const[editar, setEditar] = useState<boolean>(false)
   const[exibirPerfil, setExibirPerfil] = useState<boolean>(true)

  

    return(
       <Contexto.Provider value={{editar, setEditar, exibirPerfil, setExibirPerfil}}>
         
         {children}

       </Contexto.Provider>
    )
}

