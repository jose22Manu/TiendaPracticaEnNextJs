# 🛒 Tienda Online de Electrónica (Proyecto de Portafolio)

Aplicación web de comercio electrónico desarrollada con **Next.js**, **TypeScript** y **Tailwind CSS**, inspirada en la estética visual y estructura de catálogo de tiendas de electrónica como **MediaMarkt**.

El objetivo de este proyecto es construir una base sólida y escalable para mi portafolio de desarrollo web, practicando arquitectura de componentes, tipado estricto y gestión de datos locales.

---

## 🚀 Tecnologías utilizadas

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Fuentes:** `next/font` (Montserrat / Geist)
- **Datos e imágenes:** Almacenamiento local mediante archivos JSON y carpeta `public/`

---

## ✨ Características actuales y planificadas

- [x] Tarjetas de producto reutilizables y tipadas con TypeScript (`Article`)
- [x] Cálculo dinámico de descuentos y visualización de ofertas destacadas
- [x] Diseño responsivo en cuadrícula (*grid*) con tema oscuro
- [ ] Filtrado por categorías y barra de búsqueda
- [ ] Vista de detalle de producto
- [ ] Carrito de compras persistente en `localStorage`

---

## 📦 Estructura de datos (JSON)

Los productos se almacenan localmente en formato JSON siguiendo esta estructura:

```json
{
  "id": 1,
  "nombre": "Portátil gaming",
  "descripcion": "512 GB SSD, Intel Core i7, 12 GB RAM, NVIDIA GeForce RTX 3080",
  "img": "/images/image.jpg",
  "precio": 1200,
  "on_oferta": true,
  "descuento_porcentaje": 20
}
