import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

const ESPECIES = [
  {
    nombre: "Quetzalcoatlus northropi",
    texto:
      "Candidato al animal volador más grande que ha existido. El Museo de Historia Natural de Londres calcula una envergadura de unos 11 m. Las estimaciones antiguas iban de 5,2 a 25,8 m porque el único fósil conocido es muy fragmentario.",
    envergadura: "unos 11 m",
    nota: "Estimación del NHM; el rango histórico es mucho más amplio por lo incompleto del material.",
    img: `${import.meta.env.BASE_URL}img/quetzalcoatlus.jpg`,
    alt: "Silueta de Quetzalcoatlus northropi en vuelo.",
  },
  {
    nombre: "Pteranodon",
    texto:
      "El pterosaurio más popular, con una cresta larga hacia atrás. No tenía dientes: pescaba con el pico. Su envergadura era grande, pero muy por debajo de la de Quetzalcoatlus.",
    envergadura: "unos 6 m",
    nota: "Cifra estable en la literatura, con menos controversia que la de su pariente gigante.",
    img: `${import.meta.env.BASE_URL}img/pteranodon.jpg`,
    alt: "Montaje de Pteranodon en el Museo Americano de Historia Natural.",
  },
];

export default function Pterosaurios() {
  const { prev, next } = prevNext("/pterosaurios");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">
          Pterosaurios
        </p>
        <h1 className="mt-4 max-w-[24ch] text-[2.4rem] md:text-[3rem]">
          Los cielos del Mesozoico
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          Los primeros vertebrados que lograron el vuelo activo. No eran dinosaurios, pero
          compartieron el mundo con ellos durante 160 millones de años.
        </p>
      </section>

      {/* Comparativa de escala: número grande + silueta textual, sin barras con track */}
      <section className="mx-auto max-w-[1000px] px-5 pb-8 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {ESPECIES.map((e, i) => (
            <Reveal key={e.nombre} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-[14px] border border-regla bg-papel p-6">
                <img
                  src={e.img}
                  alt={e.alt}
                  loading="eager"
                  className="aspect-[3/2] w-full rounded-[14px] border border-regla object-cover"
                />
                <h2 className="mt-5 text-[1.3rem] text-tinta">{e.nombre}</h2>

                {/* Comparativa honesta: número + referencia, no barra de progreso */}
                <div className="mt-5 rounded-[14px] border border-regla bg-papel-alt p-5 text-center">
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-tinta-suave">
                    Envergadura
                  </p>
                  <p className="mt-1 font-display text-[2.2rem] leading-none text-acento">
                    {e.envergadura}
                  </p>
                  <p className="mt-3 text-[0.8rem] text-tinta-suave">
                    Referencia: una avioneta ligera ronda los 10 m de ala a ala.
                  </p>
                </div>

                <p className="mt-4 text-[0.93rem] text-tinta-suave">{e.texto}</p>
                <p className="mt-4 border-t border-regla pt-3 text-[0.8rem] text-tinta-suave">
                  {e.nota}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dato de cierre: cómo despegaban */}
      <section className="mx-auto max-w-[1000px] px-5 pb-16 lg:px-8">
        <div className="rounded-[14px] border border-regla bg-papel-alt px-7 py-8">
          <h2 className="text-[1.4rem]">Cómo despegaba un gigante</h2>
          <p className="mt-3 max-w-[60ch] text-[0.95rem] text-tinta-suave">
            Con 11 m de ala y cientos de kilos, Quetzalcoatlus no podía impulsarse solo
            desde el suelo como un pájaro. Los modelos sugieren que se lanzaba desde una
            posición elevada o daba un salto usando las extremidades delanteras, parecido
            a cómo despega una garza.
          </p>
          <p className="mt-4 text-[0.8rem] text-tinta-suave">
            El modelo del NHM de 2021 propone ese comportamiento de garza, cazando al
            acecho en lugar de planeando en altura.
          </p>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/marinos",
            titulo: "Los reptiles marinos",
            texto: "Otra rama de reptiles que mucha gente confunde con dinosaurios.",
          },
          {
            to: "/terropodos",
            titulo: "Sus vecinos terrestres",
            texto: "Los dinosaurios con los que compartían el cielo y la tierra.",
          },
          {
            to: "/extincion",
            titulo: "Su final",
            texto: "Los pterosaurios se extinguieron con los dinosaurios no aviares.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
