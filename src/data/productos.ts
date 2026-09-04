export type Categoria = "id" | "finca" | "ganadero";

export interface Producto {
  categoria: Categoria;
  icono: string;
  titulo: string;
  descripcion: string;
  precio: string;
  nota: string;
  etiqueta: string;
  destacado?: boolean;
}

export const CATEGORIAS: Record<Categoria, string> = {
  id: "Identificación",
  finca: "Manejo de finca",
  ganadero: "Para el ganadero",
};

// PILOTO ACTUAL: solo "id" está activo para la prueba de mercado.
// Las demás categorías quedan en el catálogo para cuando se validen.
export const PRODUCTOS: Producto[] = [
  {
    categoria: "id",
    icono: "orejera",
    titulo: "Aretes de manejo numerados · 100 unidades",
    descripcion:
      "Para el control interno del hato. No reemplazan el DIN oficial, pero sirven para organizar lotes desde ya.",
    precio: "$260.000",
    nota: "Caja x 100",
    etiqueta: "Identificación",
    destacado: true,
  },
  {
    categoria: "id",
    icono: "tenaza",
    titulo: "Tenaza aplicadora de orejeras",
    descripcion:
      "Aplicación limpia y rápida. Compatible con orejera visual tipo paleta y botón electrónico.",
    precio: "$95.000",
    nota: "Unidad",
    etiqueta: "Identificación",
  },
  {
    categoria: "id",
    icono: "marcador",
    titulo: "Marcador industrial para orejeras · 3 unidades",
    descripcion:
      "Tinta indeleble resistente a sol y lluvia. Para numeración temporal y marcación de lotes.",
    precio: "$48.000",
    nota: "Pack x 3",
    etiqueta: "Identificación",
  },
  {
    categoria: "finca",
    icono: "solar",
    titulo: "Kit impulsor solar para cerca eléctrica 12V",
    descripcion:
      "Panel, batería y gabinete. Autónomo, para potreros sin red eléctrica.",
    precio: "$780.000",
    nota: "Kit completo",
    etiqueta: "Manejo de finca",
  },
  {
    categoria: "ganadero",
    icono: "sombrero",
    titulo: "Sombrero de fieltro copa alta",
    descripcion:
      "Fieltro de lana prensada, badana de cuero. Para feria y para trabajo.",
    precio: "$320.000",
    nota: "Tallas 56–62",
    etiqueta: "Para el ganadero",
  },
];
