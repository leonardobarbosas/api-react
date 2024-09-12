export default function Produtos() {
  const listaProdutos = [
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

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {listaProdutos.map((produto) => (
          <div key={produto.id}>
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
