import Image from "next/image";
import { Montserrat } from "next/font/google";
import Article from '@/components/articulos'
import productos from "@/data/data_base.json";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export default function OfertasTecno() {
  return (
    <main className="flex min-h-[60vh] min-w-0 flex-1 flex-col items-center gap-6 px-4 py-6 sm:gap-8 sm:py-8">
      <section className="w-full max-w-[890px] overflow-hidden rounded-2xl border border-neutral-700 bg-[#181818] shadow-xl">
        <Image
          src="/oferta1.jpg"
          alt="Campaña de ofertas Black Friday"
          width={890}
          height={330}
          className="h-auto w-full"
        />
        <div className="px-5 py-5 text-center sm:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Hasta el 30/11
          </span>
          <h1 className={`${montserrat.className} mt-2 text-2xl font-bold text-white sm:text-4xl`}>
            Ofertas Black Friday 🖤
          </h1>
        </div>
      </section>

      <hr className="w-full max-w-[890px] border-t border-neutral-700" />

      <section className="grid w-full max-w-7xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {productos
          .filter((producto) => producto.on_oferta)
          .map((producto) => (
            <Article
              key={producto.id}
              titulo={producto.nombre}
              categoria={producto.categoria}
              precio={producto.precio}
              image={producto.img}
              OnOferta={producto.on_oferta}
              oferta={producto.descuento_porcentaje}
            />
          ))}

      </section>
    </main>
  );
}
