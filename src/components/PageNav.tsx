import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type Prev = { to: string; label: string };
type Next = { to: string; label: string };

/** Bloque "anterior / siguiente" al pie de cada página. */
export function PageNav({ prev, next }: { prev?: Prev; next?: Next }) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Navegación entre páginas"
      className="mx-auto grid max-w-[1200px] gap-3 px-5 pb-16 sm:grid-cols-2 lg:px-8"
    >
      {prev ? (
        <Link
          to={prev.to}
          className="group flex items-center gap-3 rounded-[14px] border border-regla bg-papel px-5 py-4 transition-colors hover:border-acento"
        >
          <ArrowLeft size={18} className="shrink-0 text-tinta-suave" />
          <span className="min-w-0">
            <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-tinta-suave">
              Anterior
            </span>
            <span className="block truncate text-[0.95rem] text-tinta group-hover:text-acento">
              {prev.label}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          to={next.to}
          className="group flex items-center justify-end gap-3 rounded-[14px] border border-regla bg-papel px-5 py-4 text-right transition-colors hover:border-acento sm:col-start-2"
        >
          <span className="min-w-0">
            <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-tinta-suave">
              Siguiente
            </span>
            <span className="block truncate text-[0.95rem] text-tinta group-hover:text-acento">
              {next.label}
            </span>
          </span>
          <ArrowRight size={18} className="shrink-0 text-tinta-suave" />
        </Link>
      ) : null}
    </nav>
  );
}
