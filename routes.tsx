import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginClientes from "./pages/LoginClientes";
import Cadastro from "./pages/Cadastro";
import CriacaoTreinos from "./components/CriacaoTreinos";
import Exercicios from "./components/Exercicios";
import DetalhesExercicios from "./components/DetalhesExercicios";
import CheckIn from "./components/CheckIn";
import MeuTreino from "./components/MeuTreino";
import Perfil from "./components/Perfil";
import CalculadoraIMC from "./components/CalculadoraIMC";
import RotaPrivada from "./components/RotaPrivada";
import Erro404 from "./pages/Erro404";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginClientes" element={<LoginClientes />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route
          path="/Perfil"
          element={
            <RotaPrivada>
              <Perfil />
            </RotaPrivada>
          }
        />
        <Route
          path="/CriacaoTreinos"
          element={
            <RotaPrivada>
              <CriacaoTreinos />
            </RotaPrivada>
          }
        />
        <Route
          path="/CheckIn"
          element={
            <RotaPrivada>
              <CheckIn />
            </RotaPrivada>
          }
        />
        <Route
          path="/exercicios/:musculatura"
          element={
            <RotaPrivada>
              <Exercicios />
            </RotaPrivada>
          }
        />
        <Route
          path="/exercicios/:musculatura/:detalhes"
          element={
         
              <DetalhesExercicios />
         
          }
        />
        <Route
          path="/MeuTreino"
          element={
            <RotaPrivada>
              <MeuTreino />
            </RotaPrivada>
          }
        />
        <Route
          path="/CalculadoraIMC"
          element={
            <RotaPrivada>
              <CalculadoraIMC />
            </RotaPrivada>
          }
        />

        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
