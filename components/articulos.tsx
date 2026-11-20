import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

interface TarjetaProductos {
  titulo: string;
  categoria: string;
  precio: number;
  image: string;
  OnOferta?: boolean;
  oferta?: number;
}

export default function Article({
  titulo,
  categoria,
  precio,
  image,
  OnOferta = false,
  oferta = 0,
}: TarjetaProductos) {
  const ofertaPorcentaje = `${oferta}%`;

  return (
    <article className="group min-w-0 w-full max-w-sm justify-self-center overflow-hidden rounded-2xl border border-neutral-700 bg-[#181818] text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-2xl">
      <div className="overflow-hidden bg-white">
        <Image
          src={image}
          alt={titulo}
          width={300}
          height={220}
          className="aspect-[4/3] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-4 sm:p-5">
        {OnOferta && (
          <span className="inline-flex rounded-full bg-red-600/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-400">
            Oferta destacada
          </span>
        )}

        <h2 className={`${montserrat.className} mt-3 break-words text-xl font-bold sm:text-2xl`}>
          {titulo}
        </h2>
        <p className="mt-1 text-sm text-neutral-400">{categoria}</p>

        <div className="mt-5 border-t border-neutral-700 pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
            Precio sin IVA
          </p>

          {OnOferta ? (
            <div>
              <p className="mt-1 text-2xl font-extrabold text-emerald-400 sm:text-3xl">
                {(precio * (1 - oferta / 100)).toFixed(2)} €{" "}
                <span className="mt-1 block text-sm font-semibold">
                  (Oferta del {ofertaPorcentaje})
                </span>
              </p>
              <p className="text-sm text-gray-400 line-through">
                {precio.toFixed(2)} €
              </p>
            </div>
          ) : (
            <p className="mt-1 text-2xl font-extrabold text-emerald-400 sm:text-3xl">
              {precio.toFixed(2)} €
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
