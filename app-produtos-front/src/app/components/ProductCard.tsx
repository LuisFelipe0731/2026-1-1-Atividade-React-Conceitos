interface ProductCardProps {
  produto: any; // Você pode detalhar a interface depois para melhor tipagem
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={produto.images[0]} 
        alt={produto.title} 
        className="w-full h-40 object-contain mb-4" 
      />
      <h3 className="font-bold text-lg text-gray-900 truncate">{produto.title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2 my-2">{produto.description}</p>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 font-bold">${produto.price}</span>
        <span className="text-sm text-gray-600">⭐ {produto.rating}</span>
      </div>

      <div className="flex flex-wrap gap-1 mt-3">
        {produto.tags?.map((tag: string) => (
          <span key={tag} className="text-[10px] bg-gray-100 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}