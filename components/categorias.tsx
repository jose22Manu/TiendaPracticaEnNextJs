"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CATEGORIES = [
  "Electrónica",
  "Informática",
  "Consolas y videojuegos",
  "Telefonía",
  "Electrodomésticos",
  "Pequeños Electrodomésticos",
  "Televisiones",
];

function Categorias() {
  const [openCate, setOpenCate] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenCate(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Botón principal para abrir el menú */}
      <button
        type="button"
        onClick={() => setOpenCate((prev) => !prev)}
        className="px-4 py-2 font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        Categorías
      </button>

      {/* Menú desplegable / Panel lateral responsivo */}
      {openCate && (
        <div
          className="fixed inset-0 z-50 animate-[fadeIn_200ms_ease-out] bg-black/50"
          onClick={() => setOpenCate(false)}
        >
          <aside
            className="absolute inset-y-0 left-0 flex w-[min(28rem,90vw)] animate-[drawerIn_450ms_cubic-bezier(0.16,1,0.3,1)] flex-col bg-white p-6 text-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
          {/* Cabecera del menú */}
          <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-lg font-bold uppercase text-gray-700">
              Todas las Categorías
            </h2>
            <button 
              type="button"
              className="px-3 py-1.5 text-sm font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-colors cursor-pointer" 
              onClick={() => setOpenCate(false)}
            >
              ✕ Cerrar
            </button>
          </div>

          {/* Enlace destacado de ofertas */}
          <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-3 text-base shadow-sm">
            <Link
              href="/ofertas"
              className="block text-gray-800 hover:text-[#DF0000] transition-colors"
              onClick={() => setOpenCate(false)}
            >
              🔥 Oportunidades y Ofertas
            </Link>
          </div>

          {/* Lista de categorías */}
          <ul className="flex flex-col gap-1 overflow-y-auto rounded-lg border border-gray-100 bg-white p-2 text-black shadow-sm">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-2 hover:bg-gray-100 transition-colors text-sm md:text-base"
                  onClick={() => setOpenCate(false)}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Categorias;
