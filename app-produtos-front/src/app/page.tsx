"use client";

import { useEffect, useState } from "react";
import { getProdutosTodos } from "@/services/api"; 
import { Header } from "./components/header"; 
import { ProductCard } from "./components/ProductCard";

export default function Home() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    getProdutosTodos().then((resultado) => {
      // Ajuste conforme o retorno da sua API (geralmente data.products)
      setProdutos(resultado.data.products || []);
    }).catch(err => console.error("Erro ao carregar produtos", err));
  }, []);

  // Filtra os produtos baseados no que foi digitado no Header
  const produtosFiltrados = produtos.filter((p) =>
    p.title.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* O Header fica aqui no topo, recebendo a função de busca */}
      <Header setTermo={setPesquisa} />

      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          {pesquisa ? 'Resultados para: ${pesquisa}' : "Lista de Produtos"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((item) => (
              <ProductCard key={item.id} produto={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">
                {pesquisa ? "Nenhum produto encontrado." : "Carregando produtos..."}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}