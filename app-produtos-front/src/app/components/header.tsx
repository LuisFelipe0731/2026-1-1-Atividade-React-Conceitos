"use client";

interface HeaderProps {
  setTermo: (valor: string) => void;
}

export function Header({ setTermo }: HeaderProps) {
  return (
    <header className="w-full bg-white border-b p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-800">PROJETO</h1>
      <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setTermo(e.target.value)}
        />
      </form>
    </header>
  );
}