import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

const ERAS = [
  {
    nombre: "Triásico",
    rango: "252 a 201 millones de años",
    clima: "Un solo supercontinente, Pangea. Interior árido, sin hielo en los polos.",
    hitos: [
      "Aparecen los primeros dinosaurios, del tamaño de un perro.",
      "Los mamíferos ancestrales también nacen aquí, diminutos y nocturnos.",
      "Termina con una extinción que abre la puerta a los gigantes.",
    ],
  },
  {
    nombre: "Jurásico",
    rango: "201 a 145 millones de años",
    clima: "Pangea se rompe. Clima cálido y húmedo, bosques de coníferas.",
    hitos: [
      "Los saurópodos alcanzan tamaños que ningún animal terrestre ha vuelto a tocar.",
      "Aparecen las primeras aves: Archaeopteryx, con plumas y dientes.",
      "Los mares se llenan de ictiosaurios y plesiosaurios.",
    ],
  },
  {
    nombre: "Cretácico",
    rango: "145 a 66 millones de años",
    clima: "Los continentes se separan más. Florecen las plantas con flor.",
    hitos: [
      "Triceratops y la familia de los cornudos dominan Norteamérica.",
      "T. rex aparece al final, en los últimos dos millones de años de la era.",
      "Cierra con el impacto de Chicxulub y la extinción de los no aviares.",
    ],
  },
];

export default function Epocas() {
  const { prev, next } = prevNext("/epocas");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">Épocas</p>
        <h1 className="mt-4 max-w-[24ch] text-[2.4rem] md:text-[3rem]">
          Tres eras, tres mundos
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          El Mesozoico dura 186 millones de años. Repartirlo en tres bloques ayuda a
          entender qué animal vivió cuándo y por qué el paisaje era otro.
        </p>
      </section>

      {/* Timeline: filas alternas con revelado en scroll, no marquesina */}
      <section className="mx-auto max-w-[900px] px-5 pb-8 lg:px-8">
        <ol className="relative space-y-12 border-l border-regla pl-8">
          {ERAS.map((era, i) => (
            <Reveal key={era.nombre} delay={i * 0.06}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full bg-acento"
                />
                <h2 className="text-[1.6rem] text-tinta">{era.nombre}</h2>
                <p className="mt-1 text-[0.8rem] uppercase tracking-[0.12em] text-tinta-suave">
                  {era.rango}
                </p>
                <p className="mt-3 text-[0.95rem] text-tinta-suave">{era.clima}</p>
                <ul className="mt-4 space-y-2">
                  {era.hitos.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[0.92rem] text-tinta">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-regla" />
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Nota de cierre de la página */}
      <section className="mx-auto max-w-[900px] px-5 pb-16 lg:px-8">
        <div className="rounded-[14px] border border-regla bg-papel-alt px-6 py-6">
          <h2 className="text-[1.2rem]">Las fechas son aproximadas</h2>
          <p className="mt-2 text-[0.9rem] text-tinta-suave">
            Los límites entre eras vienen de la escala estratigráfica internacional y se
            ajustan con cada estudio nuevo. Las cifras de esta página usan la escala
            vigente; no son fechas exactas al año.
          </p>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/terropodos",
            titulo: "Los cazadores",
            texto: "T. rex y los bípedos que definieron el Triásico tardío.",
          },
          {
            to: "/sauropodos",
            titulo: "Los gigantes",
            texto: "Cuellos largos y toneladas de peso en el Jurásico.",
          },
          {
            to: "/extincion",
            titulo: "El final",
            texto: "Cómo se cerró el Cretácico y qué pasó después.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
