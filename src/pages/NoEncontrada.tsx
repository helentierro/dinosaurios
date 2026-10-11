import { Link } from "react-router-dom";
import { ExploreCards } from "../components/ExploreCards";

export default function NoEncontrada() {
  return (
    <>
      <section className="mx-auto max-w-[900px] px-5 pt-24 pb-12 text-center lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">Error 404</p>
        <h1 className="mt-4 text-[2.4rem] md:text-[3rem]">
          Esta página se extinguió
        </h1>
        <p className="mx-auto mt-5 max-w-[46ch] text-[1rem] text-tinta-suave">
          La dirección que buscas no existe en esta web. Vuelve al inicio y sigue el
          recorrido desde ahí.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-[14px] bg-acento px-6 py-3 text-[0.95rem] text-acento-texto transition-colors hover:bg-acento-hover"
        >
          Volver al inicio
        </Link>
      </section>

      <ExploreCards
        items={[
          { to: "/epocas", titulo: "Épocas", texto: "El recorrido por las tres eras." },
          { to: "/terropodos", titulo: "Terópodos", texto: "Los cazadores de dos patas." },
          { to: "/fuentes", titulo: "Fuentes", texto: "De dónde salen los datos." },
        ]}
      />
    </>
  );
}
