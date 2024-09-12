import { useEffect, useState } from "react";
import { TipoProduto } from "../../types";
import { Link } from "react-router-dom";

export default function Produtos() {
  localStorage.getItem("lista");

  const [produtos, setProdutos] = useState<TipoProduto[]>([
    { id: 0, nome: "", preco: 0 },
  ]);

  useEffect(() => {
    const listaProdutos: TipoProduto[] = [
      {
        id: 1,
        nome: "Camiseta",
        preco: 19.99,
      },
      {
        id: 2,
        nome: "Calça",
        preco: 29.33,
      },
      {
        id: 3,
        nome: "Sapatos",
        preco: 39.66,
      },
    ];

    if (!localStorage.getItem("lista")) {
      localStorage.setItem("lista", JSON.stringify(listaProdutos));
    }

    const listaProdutosString = localStorage.getItem("lista") || "[]";
    const lista = JSON.parse(listaProdutosString);
    setProdutos(lista);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button>
              <Link to={`/editar/produtos/${produto.id}`}>Editar</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
