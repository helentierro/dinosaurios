import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

type Ficha = {
  nombre: string;
  epiteto: string;
  resumen: string;
  datos: { k: string; v: string }[];
  nota: string;
  img: string;
  alt: string;
};

const FICHAS: Ficha[] = [
  {
    nombre: "Tyrannosaurus rex",
    epiteto: "El depredador más conocido",
    resumen:
      "Bípedo, con la mordida más fuerte medida en cualquier animal terrestre. Vivió solo al final del Cretácico, en lo que hoy es Norteamérica.",
    datos: [
      { k: "Longitud", v: "unos 12 m" },
      { k: "Mordida", v: "entre 35.000 y 57.000 N, según las estimaciones" },
      { k: "Periodo", v: "Cretácico tardío, hace unos 68 a 66 M de años" },
    ],
    nota: "La cifra de mordida varía mucho entre estudios; algunas extrapolaciones llegan más alto, pero el rango citado es el más aceptado.",
    img: `${import.meta.env.BASE_URL}img/trex.jpg`,
    alt: "Montaje de esqueleto de Tyrannosaurus rex en una exposición.",
  },
  {
    nombre: "Velociraptor",
    epiteto: "Más pequeño de lo que el cine contó",
    resumen:
      "Del tamaño de un pavo, cubierto de plumas. Cazaba en grupo y tenía la garra curva del segundo dedo que le dio fama.",
    datos: [
      { k: "Longitud", v: "unos 2 m" },
      { k: "Altura", v: "unos 0,5 m a la cadera" },
      { k: "Periodo", v: "Cretácico tardío, hace unos 75 a 71 M de años" },
    ],
    nota: "Las películas lo agrandaron. Los fósiles de Mongolia muestran un animal del tamaño de un pavo.",
    img: `${import.meta.env.BASE_URL}img/velociraptor.jpg`,
    alt: "Esqueleto fosilizado de Velociraptor mongoliensis del Museo Americano de Historia Natural.",
  },
  {
    nombre: "Spinosaurus",
    epiteto: "El terópodo acuático",
    resumen:
      "Con una vela en la espalda y una cola adaptada para nadar. El estudio de 2020 cambió la idea de que cazaba solo en tierra.",
    datos: [
      { k: "Longitud", v: "unos 14 m" },
      { k: "Hábitat", v: "Ríos y deltas del norte de África" },
      { k: "Clave", v: "Cola con propulsión, descrita por Ibrahim et al. 2020" },
    ],
    nota: "La longitud es estimada a partir de restos parciales; el rango publicado va de 12 a 15 m.",
    img: `${import.meta.env.BASE_URL}img/spinosaurus.jpg`,
    alt: "Montaje de Spinosaurus con la vela dorsal característica.",
  },
  {
    nombre: "Allosaurus",
    epiteto: "El león del Jurásico",
    resumen:
      "El gran depredador de Norteamérica durante el Jurásico, antes de que T. rex existiera. Cazaba saurópodos jóvenes.",
    datos: [
      { k: "Longitud", v: "unos 8,5 m" },
      { k: "Periodo", v: "Jurásico tardío, hace unos 155 a 145 M de años" },
      { k: "Yacimiento", v: "Cantera de Cleveland-Lloyd, Utah" },
    ],
    nota: "Se han encontrado huesos de Allosaurus con marcas de mordedura de otros Allosaurus.",
    img: `${import.meta.env.BASE_URL}img/allosaurus.jpg`,
    alt: "Montaje de Allosaurus en el Museo de Historia Natural de San Diego.",
  },
];

export default function Terropodos() {
  const { prev, next } = prevNext("/terropodos");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">Terópodos</p>
        <h1 className="mt-4 max-w-[22ch] text-[2.4rem] md:text-[3rem]">
          Los cazadores de dos patas
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          Todos los dinosaurios carnívoros grandes pertenecen a este grupo. También las
          aves: un terópodo con plumas es, técnicamente, un dinosaurio vivo.
        </p>
      </section>

      {/* Spec grid 2-col: dato grande + "por qué importa", no tabla con bordes */}
      <section className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {FICHAS.map((f, i) => (
            <Reveal key={f.nombre} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-[14px] border border-regla bg-papel p-6">
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="eager"
                  className="aspect-[3/2] w-full rounded-[14px] border border-regla object-cover"
                />
                <h2 className="mt-5 text-[1.35rem] text-tinta">{f.nombre}</h2>
                <p className="mt-1 text-[0.82rem] text-acento">{f.epiteto}</p>
                <p className="mt-3 text-[0.93rem] text-tinta-suave">{f.resumen}</p>

                <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-regla pt-4 sm:grid-cols-3">
                  {f.datos.map((d) => (
                    <div key={d.k}>
                      <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-tinta-suave">
                        {d.k}
                      </dt>
                      <dd className="mt-0.5 text-[0.88rem] text-tinta">{d.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-4 text-[0.8rem] text-tinta-suave">{f.nota}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/sauropodos",
            titulo: "Su presa",
            texto: "Los saurópodos, los herbívoros más grandes que han pisado la Tierra.",
          },
          {
            to: "/ornitisquios",
            titulo: "Los herbívoros con cadera de ave",
            texto: "Triceratops y los blindados que también comían plantas.",
          },
          {
            to: "/epocas",
            titulo: "Cuándo vivió cada uno",
            texto: "El orden de las eras explica por qué T. rex y Allosaurus no se cruzaron.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
