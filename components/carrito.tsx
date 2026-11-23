"use client";

interface CarritoProps {
  onClose: () => void;
}

export default function Carrito({ onClose }: CarritoProps) {
  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/40"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white text-gray-800 shadow-xl"
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 id="cart-title" className="text-lg font-bold">Tu carrito</h2>
          <button type="button" onClick={onClose} aria-label="Cerrar carrito" className="rounded p-2 text-2xl leading-none hover:bg-gray-100">
            &times;
          </button>
        </div>
        <p className="p-5 text-sm text-gray-600">Tu carrito está vacío.</p>
      </aside>
    </div>
  );
}
