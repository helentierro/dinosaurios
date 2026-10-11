import { Link } from "react-router-dom";

const GRUPOS = [
  {
    titulo: "Recorridos",
    enlaces: [
      { to: "/epocas", label: "Épocas" },
      { to: "/terropodos", label: "Terópodos" },
      { to: "/sauropodos", label: "Saurópodos" },
      { to: "/ornitisquios", label: "Ornitisquios" },
    ],
  },
  {
    titulo: "Otros reptiles",
    enlaces: [
      { to: "/marinos", label: "Reptiles marinos" },
      { to: "/pterosaurios", label: "Pterosaurios" },
    ],
  },
  {
    titulo: "Cierre",
    enlaces: [
      { to: "/extincion", label: "Extinción" },
      { to: "/fuentes", label: "Fuentes" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-regla bg-papel-alt">
      <div className="mx-auto max-w-[1200px] px-5 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-[1.15rem] font-semibold text-tinta">Tiempo Profundo</p>
            <p className="mt-2 max-w-[34ch] text-[0.9rem] text-tinta-suave">
              Recorrido editorial por los animales que dominaron la Tierra durante 160
              millones de años.
            </p>
          </div>

          {GRUPOS.map((g) => (
            <nav key={g.titulo} aria-label={g.titulo}>
              <p className="text-[0.72rem] uppercase tracking-[0.16em] text-tinta-suave">
                {g.titulo}
              </p>
              <ul className="mt-3 space-y-2">
                {g.enlaces.map((e) => (
                  <li key={e.to}>
                    <Link to={e.to} className="text-[0.9rem] text-tinta hover:text-acento">
                      {e.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-regla pt-5 text-[0.8rem] text-tinta-suave">
          <p>
            Datos paleontológicos con fuente citada. Las imágenes son de Wikimedia Commons
            con su licencia.
          </p>
        </div>
      </div>
    </footer>
  );
}
