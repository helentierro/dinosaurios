import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

export default function Extincion() {
  const { prev, next } = prevNext("/extincion");

  return (
    <>
      {/* Única sección oscura de la web: excepción deliberada al Page Theme Lock */}
      <section className="bg-tinta text-papel">
        <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-12 lg:px-8">
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento-texto/80">
            Extinción
          </p>
          <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h1 className="max-w-[22ch] text-[2.4rem] text-papel md:text-[3rem]">
                El último día
              </h1>
              <p className="mt-5 max-w-[52ch] text-[1rem] text-papel/80">
                Hace 66 millones de años, un asteroide de 10 a 15 km de diámetro golpeó
                lo que hoy es la península de Yucatán. Fue el final de los dinosaurios no
                aviares.
              </p>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}img/chicxulub.jpg`}
              alt="Mapa del cráter de Chicxulub en la península de Yucatán."
              loading="eager"
              className="aspect-[16/9] w-full rounded-[14px] border border-papel/20 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cifras del impacto */}
      <section className="bg-tinta text-papel">
        <div className="mx-auto max-w-[1200px] px-5 pb-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                v: "10 a 15 km",
                k: "Diámetro del asteroide",
                n: "Cifra de Britannica y de la literatura sobre el cráter de Chicxulub.",
              },
              {
                v: "20 km/s",
                k: "Velocidad de impacto",
                n: "Unas 72.000 km/h, muy por encima de cualquier proyectil humano.",
              },
              {
                v: "66 M de años",
                k: "Cuándo ocurrió",
                n: "Límite Cretácico-Paleógeno, la escala estratigráfica vigente.",
              },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 0.06}>
                <div className="rounded-[14px] border border-papel/20 bg-papel/5 p-6">
                  <p className="font-display text-[2.1rem] leading-none text-papel">{c.v}</p>
                  <p className="mt-2 text-[0.82rem] uppercase tracking-[0.12em] text-acento-texto">
                    {c.k}
                  </p>
                  <p className="mt-3 text-[0.85rem] text-papel/70">{c.n}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vuelta al tema claro: qué pasó después */}
      <section className="bg-papel">
        <div className="mx-auto max-w-[900px] px-5 py-14 lg:px-8">
          <h2 className="text-[1.6rem] text-tinta">Y después, ¿qué?</h2>
          <p className="mt-3 max-w-[60ch] text-[0.95rem] text-tinta-suave">
            El impacto no mató a los dinosaurios por el choque. Los mató lo que vino
            después: el polvo tapando el sol, el hundimiento de las cadenas alimentarias y
            un invierno que duró años.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "La cadena de las plantas se rompió primero, y con ella todo lo que comía plantas.",
              "Los supervivientes fueron los pequeños: los que podían esconderse, comer casi cualquier cosa y reproducirse rápido.",
              "De un grupo de terópodos con plumas salieron las aves, el único linaje de dinosaurios que llegó hasta hoy.",
            ].map((t) => (
              <p key={t} className="flex gap-2.5 text-[0.95rem] text-tinta">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acento" />
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/terropodos",
            titulo: "De quién sobrevivieron las aves",
            texto: "Las aves salieron de un grupo de terópodos con plumas.",
          },
          {
            to: "/epocas",
            titulo: "Repasa las tres eras",
            texto: "El orden completo, desde el Triásico hasta el final del Cretácico.",
          },
          {
            to: "/fuentes",
            titulo: "Las fuentes",
            texto: "Papers y museos de donde sale la historia del impacto.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
