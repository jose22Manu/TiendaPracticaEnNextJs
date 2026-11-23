import Campanas_destacadas from "@/components/campanasdest";
import Article from "@/components/articulos";
import productos from '@/data/data_base.json'

export default function Home() {


  return (
    <main className="min-w-0 flex-1">
      <h1 className="mt-6 px-4 text-center text-2xl font-bold sm:mt-7 sm:text-3xl">
        Ofertas destacadas
      </h1>
      <Campanas_destacadas />
       <section className="grid w-full max-w-6xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 mx-auto">
        {productos
          .filter((producto) => producto.on_oferta === false)
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
