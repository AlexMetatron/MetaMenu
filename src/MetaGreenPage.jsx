import React from "react";

export default function MetaGreenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-blue-800 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide">MetaGreen</h1>
        <p className="text-lg mt-2 text-green-200">Productos 4:20 de alta vibración</p>
      </header>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="bg-green-800/40 border border-green-600 rounded-xl p-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Metatrons_cube.svg/2048px-Metatrons_cube.svg.png"
            alt="Cubo de Metatrón"
            className="rounded-xl w-full h-48 object-contain mb-4"
          />
          <h2 className="text-xl font-semibold text-green-100">Producto Ejemplo</h2>
          <p className="text-sm text-green-300">Descripción breve del producto 4:20.</p>
          <button className="mt-4 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white">
            Comprar
          </button>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-green-300">
        © 2025 MetaGreen. Todos los derechos reservados.
      </footer>
    </main>
  );
}
