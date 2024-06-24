import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IIngredientes } from "../types/churrasco";

type Props = {
  setInfoChurrasco: React.Dispatch<React.SetStateAction<IIngredientes>>;
  setQuantidadePessoas: React.Dispatch<React.SetStateAction<number>>;
  calcularChurras: () => void;
  quantidadePessoas: number;
};

const CalcForms = ({
  setInfoChurrasco,
  calcularChurras,
  setQuantidadePessoas,
  quantidadePessoas
}: Props) => {
  const navigate = useNavigate();

  const handleFormCalculation = (e: FormEvent) => {
    e.preventDefault();

    calcularChurras();

    navigate("/results");
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    setInfoChurrasco((prevInfo) => ({
      ...prevInfo,
      [name]: checked,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const quantidadePessoas = parseInt(value, 10);

    setQuantidadePessoas(quantidadePessoas);
  };

  return (
    <section className="flex flex-col justify-center bg-white m-5 p-10 w-92 rounded-xl text-center">
      <form onSubmit={handleFormCalculation} className="flex flex-col gap-3">
        <label htmlFor="" className="flex items-center gap-5">
          Número de pessoas:
          <input
            type="number"
            value={quantidadePessoas}
            onChange={handleInputChange}
            placeholder="Digite quantas pessoas"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </label>
        <label htmlFor="" className="flex flex-col items-start gap-3">
          Selecione os alimentos para churrasco:
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="carne"
              onChange={(e) => handleCheckBox(e)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Carne</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="linguica"
              onChange={(e) => handleCheckBox(e)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Linguiça</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="frango"
              onChange={(e) => handleCheckBox(e)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Frango</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="paoAlho"
              onChange={(e) => handleCheckBox(e)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Pão de alho</span>
          </label>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Calcular
        </button>
      </form>
    </section>
  );
};

export default CalcForms;
