import React, { useState } from "react";

interface TransacaoFormProps {
  onAdicionar: (
    descricao: string,
    valor: number,
    tipo: "receita" | "despesa"
  ) => void;
}

const TransacaoForm: React.FC<TransacaoFormProps> = ({ onAdicionar }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState<"receita" | "despesa">("receita");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdicionar(descricao, valor, tipo);
    setDescricao("");
    setValor(0);
  };

  return (
    <div className="container p-5 rounded-xl h-auto mb-10 max-w-5xl mt-5 w-full mx-auto  px-2 sm:px-6 lg:px-8 text-black">
      <label
        htmlFor=""
        className="w-full mt-5 mb-5  flex items-center justify-center text-3xl font-bold text-[#043c94]"
      >
        Cadastro de Transações
      </label>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-10 rounded-xl m-auto"
      >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="font-bold text-lg">
            Descriçao
          </label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição"
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="" className="font-bold text-lg">
            Valor
          </label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(parseFloat(e.target.value))}
            placeholder="Digite o valor"
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="" className="font-bold text-lg">
            Tipo
          </label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as "receita" | "despesa")}
            className="border p-2 w-full"
          >
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-96 bg-blue-500  text-white p-2  hover:bg-blue-900 flex items-center justify-center rounded-xl"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransacaoForm;
