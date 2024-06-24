import { IIngredientes, IIngredientesResults } from "../../types/churrasco";
import { useNavigate } from "react-router-dom";

type Props = {
  resultadoChurrasco: IIngredientesResults;
  quantidadePessoas: number;
  churrasco: IIngredientes;
  setResultadoChurrasco: React.Dispatch<
    React.SetStateAction<IIngredientesResults>
  >;
  setInfoChurrasco: React.Dispatch<React.SetStateAction<IIngredientes>>;
  setQuantidadePessoas: React.Dispatch<React.SetStateAction<number>>;
};

const Resultado = ({
  resultadoChurrasco,
  quantidadePessoas,
  churrasco,
  setResultadoChurrasco,
  setQuantidadePessoas,
  setInfoChurrasco,
}: Props) => {
  const navigate = useNavigate()

  const handleReset = () => {
    setResultadoChurrasco({ carne: 0, linguica: 0, frango: 0, paoAlho: 0 });
    setInfoChurrasco(churrasco);
    setQuantidadePessoas(0)

    navigate("/");
  };

  return (
    <section className="flex flex-col justify-center bg-white m-5 p-10 w-92 rounded-xl text-center">
      <h4>Resultado para {quantidadePessoas} pessoas</h4>
      <ul>
        <li>Carne: {resultadoChurrasco?.carne} Kg</li>
        <li>Frango: {resultadoChurrasco?.frango} Kg</li>
        <li>linguiça: {resultadoChurrasco?.linguica} Kg</li>
        <li>Pão de alho: {resultadoChurrasco?.paoAlho} Kg</li>
      </ul>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 mt-4 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => handleReset()}
      >
        Reiniciar
      </button>
    </section>
  );
};

export default Resultado;
