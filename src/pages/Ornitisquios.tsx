import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

const ESPECIES = [
  {
    nombre: "Triceratops",
    arma: "Tres cuernos y un volante",
    texto:
      "El herbívoro cornudo más común del Cretácico norteamericano. El volante del cráneo protegía el cuello y servía de exhibición.",
    etiqueta: "Cuernos",
    img: `${import.meta.env.BASE_URL}img/triceratops.jpg`,
    alt: "Reconstrucción de Triceratops en un entorno boscoso.",
  },
  {
    nombre: "Stegosaurus",
    arma: "Placas y cola con púas",
    texto:
      "Las placas de la espalda no eran armadura: probablemente regulaban la temperatura o servían de señal social. La cola sí era peligrosa.",
    etiqueta: "Placas",
    img: `${import.meta.env.BASE_URL}img/stegosaurus.jpg`,
    alt: "Montaje de Sophie, el ejemplar de Stegosaurus mejor conservado.",
  },
  {
    nombre: "Ankylosaurus",
    arma: "Un tanque viviente",
    texto:
      "Cubierto de escudos óseos, con una maza de hueso al final de la cola capaz de romper la pierna de un depredador.",
    etiqueta: "Blindaje",
    img: `${import.meta.env.BASE_URL}img/ankylosaurus.jpg`,
    alt: "Réplica de la cabeza acorazada de un anquilosaurio.",
  },
  {
    nombre: "Parasaurolophus",
    arma: "Cresta hueca de casi 2 m",
    texto:
      "La cresta conectaba con la nariz. Los estudios sugieren que resonaba y servía para emitir llamadas de baja frecuencia.",
    etiqueta: "Cresta",
    img: `${import.meta.env.BASE_URL}img/parasaurolophus.jpg`,
    alt: "Fósil de Parasaurolophus cyrtocristatus.",
  },
];

export default function Ornitisquios() {
  const { prev, next } = prevNext("/ornitisquios");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">
          Ornitisquios
        </p>
        <h1 className="mt-4 max-w-[22ch] text-[2.4rem] md:text-[3rem]">
          Blindados y cornudos
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          El nombre significa "cadera de ave". Todos eran herbívoros, y su respuesta a los
          depredadores fue la defensa: cuernos, placas, mazas y crestas.
        </p>
      </section>

      {/* Bento con diversidad: 4 celdas, 2 con marco de dato destacado */}
      <section className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {ESPECIES.map((e, i) => (
            <Reveal key={e.nombre} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-[14px] border border-regla bg-papel p-6">
                <img
                  src={e.img}
                  alt={e.alt}
                  loading="eager"
                  className="aspect-[3/2] w-full rounded-[14px] border border-regla object-cover"
                />
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h2 className="text-[1.3rem] text-tinta">{e.nombre}</h2>
                  <span className="shrink-0 rounded-[14px] border border-regla bg-papel-alt px-3 py-1 text-[0.72rem] uppercase tracking-[0.12em] text-tinta-suave">
                    {e.etiqueta}
                  </span>
                </div>
                <p className="mt-2 text-[0.85rem] text-acento">{e.arma}</p>
                <p className="mt-3 text-[0.93rem] text-tinta-suave">{e.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Una celda ancha con el dato de conjunto, para dar ritmo al bento */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16 lg:px-8">
        <div className="rounded-[14px] border border-regla bg-papel-alt px-7 py-8">
          <h2 className="text-[1.4rem]">Un grupo, muchas defensas</h2>
          <p className="mt-3 max-w-[60ch] text-[0.95rem] text-tinta-suave">
            Los ornitisquios no evolucionaron hacia el tamaño de los saurópodos. Su
            estrategia fue otra: hacerse difíciles de comer. Cuernos para pelear, placas
            para resistir y colas con maza para romper huesos.
          </p>
          <p className="mt-4 text-[0.8rem] text-tinta-suave">
            La clasificación por cadera la propuso Harry Seeley en 1888 y sigue siendo la
            base de cómo se ordenan estos animales.
          </p>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/sauropodos",
            titulo: "La otra cadera",
            texto: "Los saurópodos y los terópodos compartían la cadera de lagarto.",
          },
          {
            to: "/terropodos",
            titulo: "Quién los atacaba",
            texto: "T. rex dejó marcas de mordedas en huesos de Triceratops.",
          },
          {
            to: "/epocas",
            titulo: "Su época",
            texto: "Los cornudos brillaron en el Cretácico, sobre todo al final.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
