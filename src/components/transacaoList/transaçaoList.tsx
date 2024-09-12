import React from "react";
import { Transacao } from "../../types/transacao";
import { MdDelete } from "react-icons/md";

interface TransacaoListProps {
  transacoes: Transacao[];
  onRemover: (id: number) => void;
}

const TransacaoList: React.FC<TransacaoListProps> = ({
  transacoes,
  onRemover,
}) => {
  return (
    <div className="rounded-2xl  container  w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black">
      {transacoes.length === 0 ? (
        <table className="w-full bg-white rounded-2xl ">
          <div className="w-full flex flex-col  items-center justify-center p-5 rounded-2xl  ">
            <p className="text-center py-4 font-semibold text-3xl">
              Sem finanças no momento
            </p>
            <span className="font-medium">realize um cadastro!</span>
          </div>
        </table>
      ) : (
        <table className="min-w-full  border rounded-2xl mb-11">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Descrição</th>
              <th className="px-4 py-2 border">Valor</th>
              <th className="px-4 py-2 border">Tipo</th>
              <th className="px-4 py-2 border">Ação</th>
            </tr>
          </thead>
          <tbody>
            {transacoes.map((transacao) => (
              <tr key={transacao.id}>
                <td className="px-4 py-2 border">{transacao.descricao}</td>
                <td className="px-4 py-2 border">R${transacao.valor}</td>
                <td className="px-4 py-2 border">{transacao.tipo}</td>
                <td className="px-4 py-2 border">
                  <div className="w-full flex items-center justify-center">
                    <button
                      onClick={() => onRemover(transacao.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <MdDelete className="text-2xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransacaoList;
