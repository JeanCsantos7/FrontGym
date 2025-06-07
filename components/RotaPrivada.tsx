import { Navigate, useLocation } from "react-router-dom";
import { JSX, useEffect } from "react";

const RotaPrivada = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  const rotasPrivadas = [
    "/CriacaoTreinos",
    "/CheckIn",
    "/Perfil",
    "/CalculadoraIMC",
    "/MeuTreino",
    "/exercicios/Peitoral",
    "/exercicios/Triceps",
    "/exercicios/Ombros",
    "/exercicios/Costas",
    "/exercicios/Biceps",
    "/exercicios/Quadriceps",
    "/exercicios/Panturrilha",
    "/exercicios/Gluteo",
    "/exercicios/Abdomen",
    "/exercicios/Posterior(Coxa)",
    "/exercicios/Costas/Puxada%20Alta%20Aberta",
    "/exercicios/Costas/Puxada%20com%20o%20triângulo",
    "/exercicios/Costas/Barra%20fixa%20com%20pegada%20aberta%20pronada",
    "/exercicios/Costas/Remada%20Curvada%20com%20Barra",
    "/exercicios/Costas/Remada%20Baixa",
    "/exercicios/Costas/Remada%20Serrote",
    "/exercicios/Costas/Remada%20Cavalinho",
    "/exercicios/Costas/Pulldown",
    "/exercicios/Biceps/Rosca%20direta%20com%20barra",
    "/exercicios/Biceps/Rosca%20Scott(Barra%20W)",
    "/exercicios/Biceps/Rosca%20Martelo%20Halteres",
    "/exercicios/Biceps/Rosca%20no%20banco%2045",
    "/exercicios/Peitoral/Supino%20Inclinado%20Halteres",
    "/exercicios/Peitoral/Supino%20Reto%20com%20Barra",
    "/exercicios/Peitoral/Peck%20Deck",
    "/exercicios/Peitoral/Crossover%20Polia%20Baixa",
    "/exercicios/Peitoral/Crossover%20Polia%20Alta",
    "/exercicios/Peitoral/Mergulho%20entre%20paralelas",
    "/exercicios/Triceps/Tríceps%20testa%20na%20polia",
    "/exercicios/Triceps/Tríceps%20frânces%20na%20polia",
    "/exercicios/Triceps/Tríceps%20Pulley%20Corda",
    "/exercicios/Triceps/Tríceps%20Testa%20no%20banco%20inclinado%20Barra%20W",
    "/exercicios/Ombros/Elevação%20Lateral",
    "/exercicios/Ombros/Elevação%20Unilateral%20%20Polia",
    "/exercicios/Ombros/Elevação%20Frontal%20com%20Halteres",
    "/exercicios/Ombros/Desenvolvimento%20com%20Halteres",
    "/exercicios/Ombros/Elevação%20frontal%20com%20cabo%20ou%20barra",
    "/exercicios/Ombros/Crucifixo%20Inverso%20Peck%20Deck",
    "/exercicios/Ombros/Crucifixo%20Inverso%20Halteres",
    "/exercicios/Abdomen/Abdominal%20Infra",
    "/exercicios/Abdomen/Abdominal%20Supra",
    "/exercicios/Abdomen/Abdominal%20Prancha",
    "/exercicios/Abdomen/Ponte",
    "/exercicios/Quadriceps/Cadeira%20Extensora",
    "/exercicios/Quadriceps/Agachamento%20Hack",
    "/exercicios/Quadriceps/Agachamento%20no%20Smith",
    "/exercicios/Quadriceps/Leg%20Press",
    "/exercicios/Posterior(Coxa)/Stiff%20com%20barra",
    "/exercicios/Posterior(Coxa)/Mesa%20Flexora",
    "/exercicios/Posterior(Coxa)/Cadeira%20Flexora",
    "/exercicios/Posterior(Coxa)/Afundo%20com%20halteres",
    "/exercicios/Gluteo/Elevação%20pelvica%20barra",
    "/exercicios/Gluteo/Agachamento%20Sumô%20Halteres",
    "/exercicios/Gluteo/Coice%20na%20polia",
    "/exercicios/Gluteo/Agachamento%20búlgaro",
    "/exercicios/Gluteo/Levantamento%20terra%20sumo",
    "/exercicios/Panturrilha/Panturrilha%20Sentado%20na%20Máquina",
    "/exercicios/Panturrilha/Elevação%20de%20panturrilhas%20em%20pé",
    "/exercicios/Panturrilha/Panturrilha%20no%20Leg%20Press"






  ];
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!rotasPrivadas.includes(location.pathname)) {
     
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("nome");
      
    }
  }, [location.pathname]);

  return token ? children : <Navigate to={"/LoginClientes"} />;
};

export default RotaPrivada;
