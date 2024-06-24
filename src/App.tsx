import { useState } from "react";
import CalcForms from "./components/CalcForms";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  IIngredientes,
  IIngredientesResults,
  Ingredientes,
} from "./types/churrasco";
import Resultado from "./pages/Resultado/Resultado";

export default function App() {
  const churrasco = {
    carne: false,
    linguica: false,
    frango: false,
    paoAlho: false,
  };

  const [infoChurrasco, setInfoChurrasco] = useState<IIngredientes>(churrasco);
  const [quantidadePessoas, setQuantidadePessoas] = useState<number>(0);
  const [resultadoChurrasco, setResultadoChurrasco] =
    useState<IIngredientesResults>({
      carne: 0,
      linguica: 0,
      frango: 0,
      paoAlho: 0,
    });

  const calcularChurras = () => {
    let totalResults: IIngredientesResults = {
      carne: 0,
      linguica: 0,
      frango: 0,
      paoAlho: 0,
    };

    Object.keys(infoChurrasco).forEach((key) => {
      if (infoChurrasco[key as keyof IIngredientes]) {
        totalResults[key as keyof IIngredientesResults] =
          (Ingredientes[key as keyof typeof Ingredientes] * quantidadePessoas) /
          1000;
      }
    });

    setResultadoChurrasco(totalResults);
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <CalcForms
                quantidadePessoas={quantidadePessoas}
                setQuantidadePessoas={setQuantidadePessoas}
                setInfoChurrasco={setInfoChurrasco}
                calcularChurras={calcularChurras}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Resultado
                setInfoChurrasco={setInfoChurrasco}
                setResultadoChurrasco={setResultadoChurrasco}
                churrasco={churrasco}
                resultadoChurrasco={resultadoChurrasco}
                quantidadePessoas={quantidadePessoas}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
