import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";

/** Tarjeta de "sigue explorando": 3 por página, cada una apunta a otra página del sitio. */
export function ExploreCards({
  items,
}: {
  items: { to: string; titulo: string; texto: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8">
      <h2 className="text-[1.6rem] md:text-[2rem]">Sigue explorando</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="group flex flex-col rounded-[14px] border border-regla bg-papel p-6 transition-colors hover:border-acento"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[1.15rem] text-tinta group-hover:text-acento">{it.titulo}</h3>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-tinta-suave transition-colors group-hover:text-acento"
              />
            </div>
            <p className="mt-2 text-[0.92rem] text-tinta-suave">{it.texto}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
