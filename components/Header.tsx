import { useState } from "react";
import { IoMenuSharp, IoLogOutSharp } from "react-icons/io5";
import Logotipo from "../src/assets/Logotipo.png";
import MenuMobile from "../components/MenuMobile";
import MenuDesktop from "./MenuDesktop";
import ConfirmacaoLogout from "../components/ConfirmacaoLogout"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[isOpen, setIsOpen] = useState(false)


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isClosed = () => {
    
     setIsOpen(false)

 
  };


  const abrirModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <nav className="flex  items-center justify-between px-6 py-4 ">
        <img src={Logotipo} alt="Logotipo" className="w-40" />

        <div className="flex items-center gap-6">
          <IoMenuSharp
            onClick={toggleMenu}
            className="lg:hidden  text-4xl text-[#e26631] font-extrabold cursor-pointer"
          />
            
          <div className="md: hidden lg:block">
          <MenuDesktop />
          </div>
        
          <IoLogOutSharp
           onClick={abrirModal}
            className="text-4xl text-[#e26631] font-extrabold cursor-pointer"
          />

          <ConfirmacaoLogout isOpen={isOpen} isClosed={isClosed}/>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="  mt-2">
          <MenuMobile />
        </div>
      )}
    </>
  );
};

export default Header;
