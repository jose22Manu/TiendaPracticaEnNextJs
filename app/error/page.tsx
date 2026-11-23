export default function ErrorPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
      <section
        aria-labelledby="error-title"
        className="w-full max-w-xl rounded-3xl border border-blue-400 bg-gray-900 p-8 text-center shadow-xl shadow-red-950/10 sm:p-12"
      >
        <div
          aria-hidden="true"
          className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-200 text-3xl text-[#ff1818]"
        >
          ⚠
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#DF0000]">
          Ha ocurrido un error
        </p>
        <h1
          id="error-title"
          className="text-2xl font-extrabold tracking-tight text-shadow-gray-400 sm:text-3xl"
        >
          Algo salió mal
        </h1>
        <p className="mx-auto max-w-md text-base leading-7 sm:text-lg text-gray-400 p-3">
          No hemos podido completar tu solicitud. Prueba de nuevo dentro de un
          momento.
        </p>
      </section>
    </main>
  );
}
