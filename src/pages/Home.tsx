import React, { useState, useEffect } from "react";

import api from "../services/api";
import { Transacao } from "../types/transacao";
import Header from "../components/header/Header";
import TransacaoForm from "../components/transacaoForm/TransacaoForm";
import TransacaoList from "../components/transacaoList/transaçaoList";

const Home: React.FC = () => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [saldo, setSaldo] = useState(0);

  const fetchTransacoes = async () => {
    const response = await api.get("/transacoes");
    setTransacoes(response.data);
  };

  useEffect(() => {
    fetchTransacoes();
  }, []);

  useEffect(() => {
    const receitas = transacoes
      .filter((t) => t.tipo === "receita")
      .reduce((acc, t) => acc + t.valor, 0);
    const despesas = transacoes
      .filter((t) => t.tipo === "despesa")
      .reduce((acc, t) => acc + t.valor, 0);
    setSaldo(receitas - despesas);
  }, [transacoes]);

  const handleAdicionar = async (
    descricao: string,
    valor: number,
    tipo: "receita" | "despesa"
  ) => {
    const response = await api.post("/transacoes", { descricao, valor, tipo });
    setTransacoes([...transacoes, response.data]);
  };

  const handleRemover = async (id: number) => {
    await api.delete(`/transacoes/${id}`);
    setTransacoes(transacoes.filter((t) => t.id !== id));
  };

  return (
    <div>
      <Header saldo={saldo} />
      <div className="p-4">
        <TransacaoForm onAdicionar={handleAdicionar} />
        <TransacaoList transacoes={transacoes} onRemover={handleRemover} />
      </div>
    </div>
  );
};

export default Home;
