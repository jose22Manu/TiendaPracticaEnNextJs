"use client"
import Link from "next/link";
import Image from "next/image";
import { TecnomarkLogo } from "../public/tecnomarklogo";
import { UserIcon } from "../public/userlogo";
import { HeartIcon } from "../public/love";
import { CartIcon } from "../public/carticon";
import { StoreSelector } from "./selectorTienda";
import Categorias from "./categorias";

export default function Navbar() {
  return (
    <header className="w-full bg-[#DF0000] shadow-md">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
        
        {/* --- FILA SUPERIOR: Logo, Buscador, Tienda e Iconos --- */}
        <div className="flex min-w-0 flex-col items-center justify-between gap-3 sm:gap-4 lg:flex-row">
          
          {/* 1. Logo */}
          <Link href="/" className="flex w-40 shrink-0 cursor-pointer items-center sm:w-52">
            <TecnomarkLogo />
          </Link>

          {/* 2. Barra de búsqueda central */}
          <div className="w-full max-w-2xl min-w-0 lg:flex-1">
            <div className="relative w-full flex items-center">
              <input 
                type="text" 
                placeholder="Buscar productos, marcas y más..." 
                className="w-full h-11 bg-white text-gray-900 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base placeholder:text-gray-400"
              />
              <button className="h-11 shrink-0 cursor-pointer rounded-r-md bg-black px-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 sm:px-5 sm:text-base">
                Buscar
              </button>
            </div>
          </div>

          {/* 3. Selector de Tienda e Iconos de Usuario/Favoritos/Carrito */}
          <div className="flex w-full min-w-0 items-center justify-between gap-2 sm:gap-3 lg:w-auto lg:justify-end">
            <StoreSelector />

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <Link href="/" aria-label="Mi cuenta" className="rounded-full bg-gray-100 p-2 transition-colors shadow-sm hover:bg-white sm:p-2.5">
                <UserIcon size={20} />
              </Link>
              <Link href="/" aria-label="Favoritos" className="rounded-full bg-gray-100 p-2 transition-colors shadow-sm hover:bg-white sm:p-2.5">
                <HeartIcon size={20} />
              </Link>
              <Link href="/" aria-label="Carrito" className="rounded-full bg-gray-100 p-2 transition-colors shadow-sm hover:bg-white sm:p-2.5">
                <CartIcon size={20} />
              </Link>
            </div>
          </div>

        </div>

        {/* --- FILA INFERIOR: Categorías con Scroll Horizontal en Móvil --- */}
        <div className="mt-3 w-full border-t border-red-600 bg-[#DF0000] pt-2">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap py-2 text-sm font-bold text-white sm:gap-6 sm:text-base">
            <div className="shrink-0">
              <Categorias />
            </div>
            <span className="cursor-pointer hover:underline">Electronica</span>
            <span className="cursor-pointer hover:underline">Informatica</span>
            <span className="cursor-pointer hover:underline">Videojuegos</span>
            <span className="cursor-pointer hover:underline">Telefonia</span>
            <span className="cursor-pointer hover:underline">Pequeños Electrodomesticos</span>
            <span className="cursor-pointer hover:underline">Televisiones</span>
          </div>
        </div>

      </div>
    </header>
  );
}
