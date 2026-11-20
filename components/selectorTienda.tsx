"use client"
import { useState } from "react";

const LISTA_Store = [

{ nombre: "Sevilla" },

{ nombre: "Madrid" },

{ nombre: "Barcelona" }

];
export const StoreSelector: React.FC<StoreSelectorProps> = ({
  storeName,
  onSelectStore
}) => {
  const [Open, setOpen] = useState(false);
  const [tiendaSelect, settiendaSelect] = useState(""); // Empezamos vacíos

  // Priorizamos la prop si existe, si no, el estado local, y si no hay nada, el texto por defecto
  const currentStore = storeName || tiendaSelect || "No has seleccionado...";

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        type="button"
        onClick={() => setOpen(!Open)}
        className="flex items-center gap-2 rounded-md bg-[#DF0000] px-2 py-2 text-left text-white transition-colors hover:bg-black/10 focus:outline-none sm:gap-3 sm:px-3"
      >
        {/* Textos en columna */}
        <div className="flex flex-col whitespace-nowrap">
          <span className="text-sm font-bold leading-tight tracking-wide sm:text-lg">
            Mi tienda
          </span>
          <span className="max-w-[88px] truncate text-[11px] text-white/90 sm:max-w-[140px] sm:text-xs">
            {currentStore}
          </span>
        </div>

        {/* Flecha hacia abajo (rota si está abierto) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-white transition-transform duration-200 ${Open ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Menú desplegable */}
      {Open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-xl rounded-md p-1 z-50 border border-gray-100">
          {LISTA_Store.map((e, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setOpen(false);
                settiendaSelect(e.nombre);
                if (onSelectStore) onSelectStore(e.nombre);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded transition-colors"
            >
              {e.nombre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
