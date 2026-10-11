import { Link, NavLink as RRNavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "../lib/cn";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/epocas", label: "Épocas" },
  { to: "/terropodos", label: "Terópodos" },
  { to: "/sauropodos", label: "Saurópodos" },
  { to: "/ornitisquios", label: "Ornitisquios" },
  { to: "/marinos", label: "Marinos" },
  { to: "/pterosaurios", label: "Pterosaurios" },
  { to: "/extincion", label: "Extinción" },
  { to: "/fuentes", label: "Fuentes" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-regla bg-papel/95 backdrop-blur">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/" className="flex items-baseline gap-2" aria-label="Ir al inicio">
          <span className="font-display text-[1.2rem] font-semibold tracking-tight text-tinta">
            Tiempo Profundo
          </span>
          <span className="hidden text-[0.72rem] uppercase tracking-[0.16em] text-tinta-suave sm:inline">
            Dinosaurios
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-regla text-tinta lg:hidden"
        >
          {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Navegación móvil" className="border-t border-regla bg-papel lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-5 py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[0.95rem] text-tinta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <RRNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "inline-flex items-center rounded-[14px] px-3 py-2 text-[0.9rem] transition-colors",
          isActive ? "text-acento" : "text-tinta-suave hover:text-tinta",
        )
      }
    >
      {children}
    </RRNavLink>
  );
}
