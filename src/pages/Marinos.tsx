import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

const GRUPOS = [
  {
    nombre: "Mosasaurus",
    siglo: "Cretácico tardío",
    texto:
      "Un lagarto marino gigante, emparentado con los varanos actuales. No era un dinosaurio, sino un reptil marino que ocupó el lugar del superdepredador oceánico.",
    tamano: "hasta unos 17 m",
    img: "img/mosasaurus.jpg",
    alt: "Esqueleto de Mosasaurus hoffmannii.",
  },
  {
    nombre: "Ictiosaurios",
    siglo: "Triásico y Jurásico",
    texto:
      "Con forma de delfín y ojos enormes. Aparecieron antes que los dinosaurios y se extinguieron antes que ellos. Su parecido con los delfines es un caso clásico de evolución convergente.",
    tamano: "de 1 a más de 20 m según la especie",
    img: "img/ichthyosaur.jpg",
    alt: "Silueta de ictiosaurio comparada con un ser humano.",
  },
  {
    nombre: "Plesiosaurios",
    siglo: "Jurásico y Cretácico",
    texto:
      "Cuello largo y cuatro aletas que batían como alas. Algunos tenían cuellos de varios metros; otros, cortos y cabezas enormes. Tampoco eran dinosaurios.",
    tamano: "de 3 a unos 15 m",
    img: "img/plesiosaur.jpg",
    alt: "Silueta de Elasmosaurus con su largo cuello.",
  },
];

export default function Marinos() {
  const { prev, next } = prevNext("/marinos");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">
          Reptiles marinos
        </p>
        <h1 className="mt-4 max-w-[24ch] text-[2.4rem] md:text-[3rem]">
          Dueños del mar, pero no dinosaurios
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          Esta es la corrección que casi todas las guías antiguas necesitan. Los grandes
          reptiles marinos del Mesozoico eran parientes lejanos de los lagartos, no
          dinosaurios.
        </p>
      </section>

      {/* Pills scroll-snap para el tamaño + tarjeta por grupo */}
      <section className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {GRUPOS.map((g, i) => (
            <Reveal key={g.nombre} delay={i * 0.05} className="min-w-[260px] md:min-w-0">
              <article className="flex h-full flex-col rounded-[14px] border border-regla bg-papel p-6">
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="eager"
                  className="aspect-[3/2] w-full rounded-[14px] border border-regla object-cover"
                />
                <h2 className="mt-5 text-[1.3rem] text-tinta">{g.nombre}</h2>
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.12em] text-tinta-suave">
                  {g.siglo}
                </p>
                <p className="mt-3 flex-1 text-[0.93rem] text-tinta-suave">{g.texto}</p>
                <p className="mt-4 border-t border-regla pt-3 text-[0.85rem] text-acento">
                  {g.tamano}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nota taxonómica destacada: la honestidad que la página promete */}
      <section className="mx-auto max-w-[1000px] px-5 pb-16 lg:px-8">
        <div className="rounded-[14px] border-2 border-acento bg-acento-texto px-7 py-8">
          <h2 className="text-[1.4rem] text-tinta">Entonces, ¿qué era un dinosaurio?</h2>
          <p className="mt-3 max-w-[60ch] text-[0.95rem] text-tinta-suave">
            Un dinosaurio es un animal del grupo que incluye a todos los descendientes del
            último ancestro común de los saurópodos, los terópodos y los ornitisquios.
            Los ictiosaurios, plesiosaurios y mosasaurios quedan fuera de ese grupo: eran
            reptiles marinos con otra rama evolutiva.
          </p>
          <p className="mt-4 text-[0.85rem] text-tinta-suave">
            Los pterosaurios, los del cielo, tampoco eran dinosaurios. Tienen su propia
            página por lo popular que son.
          </p>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/pterosaurios",
            titulo: "Los del cielo",
            texto: "Tampoco eran dinosaurios, y uno tuvo la mayor envergadura conocida.",
          },
          {
            to: "/sauropodos",
            titulo: "Los gigantes de tierra",
            texto: "Lo que sí eran dinosaurios, y de los más grandes.",
          },
          {
            to: "/fuentes",
            titulo: "Las fuentes",
            texto: "Papers y museos de donde salen estas clasificaciones.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
