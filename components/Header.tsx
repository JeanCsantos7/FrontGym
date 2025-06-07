import { useState } from "react";
import { IoMenuSharp, IoLogOutSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Logotipo from "../src/assets/Logotipo.png";
import MenuMobile from "../components/MenuMobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const Logout = () => {
    setTimeout(() => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("nome");
      sessionStorage.removeItem("id");
      navigate("/");
    }, 3500);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 ">
        <img src={Logotipo} alt="Logotipo" className="w-40" />

        <div className="flex items-center gap-6">
          <IoMenuSharp
            onClick={toggleMenu}
            className="text-4xl text-[#e26631] font-extrabold cursor-pointer"
          />
          <IoLogOutSharp
            onClick={Logout}
            className="text-4xl text-[#e26631] font-extrabold cursor-pointer"
          />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mt-2">
          <MenuMobile />
        </div>
      )}
    </>
  );
};

export default Header;
