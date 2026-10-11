export type Pagina = {
  to: string;
  label: string;
  titulo: string;
};

/** Orden canónico de las 8 páginas. Deriva prev/next para el PageNav. */
export const PAGINAS: Pagina[] = [
  { to: "/", label: "Inicio", titulo: "Tiempo Profundo" },
  { to: "/epocas", label: "Épocas", titulo: "Tres eras, tres mundos" },
  { to: "/terropodos", label: "Terópodos", titulo: "Los cazadores de dos patas" },
  { to: "/sauropodos", label: "Saurópodos", titulo: "Los animales más grandes" },
  { to: "/ornitisquios", label: "Ornitisquios", titulo: "Blindados y cornudos" },
  { to: "/marinos", label: "Marinos", titulo: "Dueños del mar" },
  { to: "/pterosaurios", label: "Pterosaurios", titulo: "Los cielos del Mesozoico" },
  { to: "/extincion", label: "Extinción", titulo: "El último día" },
  { to: "/fuentes", label: "Fuentes", titulo: "De dónde salen estos datos" },
];

export function prevNext(ruta: string) {
  const i = PAGINAS.findIndex((p) => p.to === ruta);
  if (i < 0) return {};
  const prev = i > 0 ? PAGINAS[i - 1] : undefined;
  const next = i < PAGINAS.length - 1 ? PAGINAS[i + 1] : undefined;
  return {
    prev: prev && { to: prev.to, label: prev.label },
    next: next && { to: next.to, label: next.label },
  };
}
