import { Link } from "react-router-dom";
import { ArrowRight, Bone, Mountains, Skull } from "@phosphor-icons/react";
import { Reveal } from "../components/Reveal";
import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { prevNext } from "../lib/paginas";

const ERAS = [
  {
    nombre: "Triásico",
    rango: "252 a 201 millones de años",
    texto:
      "Después de la peor extinción de la historia, los dinosaurios aparecen pequeños y pasan desapercibidos.",
    to: "/epocas",
    Icono: Bone,
  },
  {
    nombre: "Jurásico",
    rango: "201 a 145 millones de años",
    texto:
      "Los saurópodos se vuelven gigantes y los primeros terópodos empiezan a dominar la caza.",
    to: "/epocas",
    Icono: Mountains,
  },
  {
    nombre: "Cretácico",
    rango: "145 a 66 millones de años",
    texto:
      "El mundo más diverso que ha existido: cuernos, crestas, plumas y los mares llenos de reptiles.",
    to: "/epocas",
    Icono: Skull,
  },
];

export default function Inicio() {
  const { prev, next } = prevNext("/");

  return (
    <>
      {/* ── Hero asimétrico: texto a la izquierda, imagen real a la derecha ── */}
      <section className="mx-auto max-w-[1200px] px-5 pt-24 pb-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">
              Guía del Mesozoico
            </p>
            <h1 className="mt-4 text-[2.6rem] leading-[1.05] md:text-[3.6rem] lg:text-[4.2rem]">
              Los animales que gobernaron la Tierra
            </h1>
            <p className="mt-5 max-w-[52ch] text-[1.05rem] text-tinta-suave">
              Durante 160 millones de años, mucho más tiempo del que llevamos nosotros
              aquí, la Tierra tuvo otros dueños.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/epocas"
                className="inline-flex items-center gap-2 rounded-[14px] bg-acento px-6 py-3 text-[0.95rem] text-acento-texto transition-colors hover:bg-acento-hover"
              >
                Empieza por las épocas
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/terropodos"
                className="inline-flex items-center rounded-[14px] border border-regla px-6 py-3 text-[0.95rem] text-tinta transition-colors hover:border-acento hover:text-acento"
              >
                Ver los cazadores
              </Link>
            </div>
          </div>

          {/* Imagen real del hero: montaje de museo de T. rex */}
          <figure className="m-0">
            <img
              src={`${import.meta.env.BASE_URL}img/trex.jpg`}
              alt="Montaje de esqueleto de Tyrannosaurus rex en una exposición de dinosaurios."
              width={1200}
              height={800}
              loading="eager"
              className="aspect-[3/2] w-full rounded-[14px] border border-regla object-cover"
            />
            <figcaption className="mt-2 text-[0.78rem] text-tinta-suave">
              Tyrannosaurus rex, montaje de exposición. Imagen de Wikimedia Commons, CC BY-SA 4.0.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Marco de dato: la escala temporal ── */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="rounded-[14px] border border-regla bg-papel-alt p-7">
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-tinta-suave">
            Escala
          </p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-[0.85rem] text-tinta-suave">Reinaron</dt>
              <dd className="font-display text-[2.2rem] leading-none text-tinta">
                160 M de años
              </dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-tinta-suave">Los humanos llevamos</dt>
              <dd className="font-display text-[2.2rem] leading-none text-tinta">
                0,3 M de años
              </dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-tinta-suave">Se extinguieron hace</dt>
              <dd className="font-display text-[2.2rem] leading-none text-acento">
                66 M de años
              </dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-regla pt-3 text-[0.78rem] text-tinta-suave">
            Las tres cifras son órdenes de magnitud ampliamente aceptados; la cifra humana
            usa el margen habitual de 200.000 a 300.000 años para Homo sapiens.
          </p>
        </div>
      </section>

      {/* ── Bento de 3 eras: cada celda lleva su contenido, ninguna vacía ── */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8">
        <h2 className="text-[1.6rem] md:text-[2rem]">Tres eras, tres mundos</h2>
        <p className="mt-3 max-w-[60ch] text-[0.95rem] text-tinta-suave">
          El Mesozoico no fue un bloque uniforme. Cada era cambió qué animales existían y
          cómo era el planeta.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ERAS.map((era, i) => (
            <Reveal key={era.nombre} delay={i * 0.08}>
              <Link
                to={era.to}
                className="group flex h-full flex-col rounded-[14px] border border-regla bg-papel p-6 transition-colors hover:border-acento"
              >
                <era.Icono size={26} className="text-acento" weight="regular" />
                <h3 className="mt-4 text-[1.25rem] text-tinta group-hover:text-acento">
                  {era.nombre}
                </h3>
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.12em] text-tinta-suave">
                  {era.rango}
                </p>
                <p className="mt-3 text-[0.92rem] text-tinta-suave">{era.texto}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA a las cuatro temáticas de especies ── */}
      <section className="mx-auto max-w-[1200px] px-5 pb-4 lg:px-8">
        <div className="rounded-[14px] border border-regla bg-papel-alt px-7 py-9">
          <h2 className="text-[1.5rem]">Cuatro formas de ser dinosaurio</h2>
          <p className="mt-2 max-w-[58ch] text-[0.95rem] text-tinta-suave">
            Los paleontólogos los agrupan por la cadera. De ahí salen los dos grandes
            grupos y sus historias muy distintas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { to: "/terropodos", label: "Terópodos" },
              { to: "/sauropodos", label: "Saurópodos" },
              { to: "/ornitisquios", label: "Ornitisquios" },
              { to: "/marinos", label: "Y los del mar" },
            ].map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className="inline-flex items-center rounded-[14px] border border-regla bg-papel px-5 py-2.5 text-[0.9rem] text-tinta transition-colors hover:border-acento hover:text-acento"
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/epocas",
            titulo: "Recorre las tres eras",
            texto: "Qué apareció en cada una y por qué importa el orden.",
          },
          {
            to: "/extincion",
            titulo: "El último día",
            texto: "El asteroide de 10 a 15 km que cerró el Cretácico.",
          },
          {
            to: "/fuentes",
            titulo: "De dónde salen los datos",
            texto: "Papers, museos y estimaciones, con su margen de error.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
