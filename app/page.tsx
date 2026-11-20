import Campanas_destacadas from "@/components/campanasdest";


export default function Home() {


  return (
    <main className="min-w-0 flex-1">
      <h1 className="mt-6 px-4 text-center text-2xl font-bold sm:mt-7 sm:text-3xl">
        Ofertas destacadas
      </h1>
      <Campanas_destacadas />
    </main>
  );
}
