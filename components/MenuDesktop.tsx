const MenuDesktop = () => {
  return (
    <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-semibold text-[#e26631]  font-medium px-6 py-4 rounded-xl ">
      <a href="#" className="hover:underline hover:text-[#494949] transition duration-200">Ver Perfil</a>
      <a href="#" className="hover:underline hover:text-[#494949] transition duration-200">Meu Treino</a>
      <a href="#" className="hover:underline hover:text-[#494949] transition duration-200">Montar Treino</a>
      <a href="#" className="hover:underline hover:text-[#494949] transition duration-200">Calculadora IMC</a>
      <a href="#" className="hover:underline hover:text-[#494949] transition duration-200">Check-in</a>
    </nav>
  );
};

export default MenuDesktop;
