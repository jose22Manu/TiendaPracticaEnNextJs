import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from 'next/link';

// Configuramos Montserrat con los grosores necesarios (normal, semibold y black italic)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export default function Campanas_destacadas() {
  return (
    <section
      className={`${montserrat.className} bg-[#111111] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título superior de la sección */}
        <h2 className="mb-5 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
          Campañas destacadas
        </h2>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {/* Tarjeta 1 */}
          <Link href="/ofertas" className="flex flex-col overflow-hidden rounded-xl border border-neutral-700/80 bg-[#181818] transition-colors hover:border-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/oferta1.jpg"
                alt="Ofertas Black Friday"
                fill
                className="object-cover"
              />
            </div>
            {/* Contenido de la tarjeta */}
            <div className="flex min-w-0 flex-grow flex-col p-4 sm:p-5">
              <span className="text-neutral-300 font-semibold text-xs md:text-sm">
                Hasta el 30/11
              </span>

              <h3 className="mt-1 break-words text-2xl font-black italic leading-tight tracking-tight text-white sm:text-[26px]">
               
                  Ofertas Black Friday
       

              
              </h3>

              <p className="mt-2.5 text-neutral-300 text-sm leading-relaxed">
                ¡Aprovecha al máximo las nuevas ofertas! No te las pierdas.
              </p>

              {/* Botón alineado abajo a la derecha */}
              <div className="mt-auto pt-8 flex justify-end">
                <span className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-neutral-400/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  <span>&gt;</span>
                  <span className="underline underline-offset-4">
                    Ver ofertas
                  </span>
                </span>
              </div>
            </div>
          </Link>

          {/* Tarjeta 2 */}
          <div className="flex flex-col rounded-xl border border-neutral-700/80 bg-[#181818] overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/ofertas2.jpg"
                alt="Ofertas antes de Navidad"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-grow flex-col p-4 sm:p-5">
              <span className="text-neutral-300 font-semibold text-xs md:text-sm">
                Hasta el 1/1/2027
              </span>

              <h3 className="mt-1 break-words text-2xl font-black italic leading-tight tracking-tight text-white sm:text-[26px]">
                Ofertas antes de Navidad 🎅
              </h3>

              <p className="mt-2.5 text-neutral-300 text-sm leading-relaxed">
                Todo lo que necesitas para preparar tus regalos, ahora con las
                mejores ofertas. ¡No te las pierdas!
              </p>

              <div className="mt-auto pt-8 flex justify-end">
                <button className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-neutral-400/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  <span>&gt;</span>
                  <span className="underline underline-offset-4">
                    Ver ofertas
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col rounded-xl border border-neutral-700/80 bg-[#181818] overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/ofertas3.jpg"
                alt="Descuentos en Electrodomésticos"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-grow flex-col p-4 sm:p-5">
              <span className="text-neutral-300 font-semibold text-xs md:text-sm">
                Hasta el 30/11
              </span>

              <h3 className="mt-1 break-words text-2xl font-black italic leading-tight tracking-tight text-white sm:text-[26px]">
                Descuentos del 35% en Electrodomésticos
              </h3>

              <p className="mt-2.5 text-neutral-300 text-sm leading-relaxed">
                Nuestra selección de electrodomésticos con las mejores ofertas
                para equipar tu hogar al mejor precio.
              </p>

              <div className="mt-auto pt-8 flex justify-end">
                <button className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-neutral-400/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  <span>&gt;</span>
                  <span className="underline underline-offset-4">
                    Ver ofertas
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
