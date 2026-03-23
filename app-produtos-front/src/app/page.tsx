"use client";

import { useEffect, useState } from "react";
import { getProdutosTodos } from "@/services/api";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getProdutosTodos().then((resultado) => {
      setProdutos(resultado.data.products);
    });
  }, []);

  // Filtra os produtos pelo título
  const produtosFiltrados = produtos.filter((produto) =>
    produto.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Pesquisa de produtos</h1>
        <input
          type="text"
          placeholder="Digite o nome do produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            padding: "8px",
            marginTop: "10px",
            width: "300px",
          }}
        />
      </header>

      <main style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "20px" }}>
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={produto.thumbnail}
              alt={produto.title}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>{produto.title}</h3>
            <p>R$ {produto.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}