import { PageNav } from "../components/PageNav";
import { ExploreCards } from "../components/ExploreCards";
import { Reveal } from "../components/Reveal";
import { prevNext } from "../lib/paginas";

const ESPECIES = [
  {
    nombre: "Argentinosaurus",
    titulo: "Uno de los más grandes que se conocen",
    texto:
      "Saurópodo del Cretácico de Argentina. Las estimaciones de peso oscilan mucho: los estudios recientes lo sitúan en torno a 70 toneladas, con rangos que llegan a 95 toneladas.",
    dato: "unos 35 m de largo",
    invertir: false,
    img: "img/argentinosaurus.jpg",
    alt: "Silueta a escala de Argentinosaurus comparada con un ser humano.",
  },
  {
    nombre: "Brachiosaurus",
    titulo: "El cuello que miraba hacia arriba",
    texto:
      "Famoso por su perfil jirafa: patas delanteras más largas que las traseras. Se ha usado como el saurópodo de referencia durante décadas.",
    dato: "unos 21 m de largo",
    invertir: true,
    img: "img/brachiosaurus.jpg",
    alt: "Montaje de Brachiosaurus en un museo.",
  },
  {
    nombre: "Diplodocus",
    titulo: "Largo y ligero para su tamaño",
    texto:
      "No era el más pesado, pero sí uno de los más largos. Su cola terminaba en un látigo delgado que pudo usarse como defensa.",
    dato: "unos 25 m de largo",
    invertir: false,
    img: "img/diplodocus.jpg",
    alt: "Esqueleto montado de Diplodocus carnegiei.",
  },
];

export default function Sauropodos() {
  const { prev, next } = prevNext("/sauropodos");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">Saurópodos</p>
        <h1 className="mt-4 max-w-[22ch] text-[2.4rem] md:text-[3rem]">
          Los animales más grandes
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          Ningún animal terrestre los ha superado. Para crecer así necesitaban comer casi
          sin parar, y su estrategia era simple: cuello largo, dientes de rastrillo y mucha
          fermentación.
        </p>
      </section>

      {/* Zigzag: máx 2 seguidas. El bloque final rompe el patrón a propósito. */}
      <section className="mx-auto max-w-[1000px] px-5 pb-8 lg:px-8">
        <div className="space-y-14">
          {ESPECIES.map((e, i) => (
            <Reveal key={e.nombre} delay={i * 0.05}>
              <article className="grid items-center gap-6 md:grid-cols-[1fr_1.2fr]">
                <img
                  src={e.img}
                  alt={e.alt}
                  loading="eager"
                  className={`aspect-[3/2] w-full rounded-[14px] border border-regla object-cover ${
                    e.invertir ? "md:order-2" : ""
                  }`}
                />
                <div>
                  <h2 className="text-[1.4rem] text-tinta">{e.nombre}</h2>
                  <p className="mt-1 text-[0.85rem] text-acento">{e.titulo}</p>
                  <p className="mt-3 text-[0.93rem] text-tinta-suave">{e.texto}</p>
                  <p className="mt-4 border-t border-regla pt-3 text-[0.85rem] text-acento">
                    {e.dato}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full-bleed que rompe el zigzag: por qué eran tan grandes */}
      <section className="bg-papel-alt">
        <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8">
          <h2 className="text-[1.6rem] md:text-[2rem]">Por qué pudieron crecer así</h2>
          <p className="mt-3 max-w-[62ch] text-[0.95rem] text-tinta-suave">
            No hay una sola respuesta, pero hay tres factores que los paleontólogos
            mencionan siempre que se plantean la pregunta.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Oxígeno y clima",
                d: "El Mesozoico fue cálido y con mucho CO2. Las plantas crecían rápido y todo el año en latitudes altas.",
              },
              {
                t: "Aves como modelo",
                d: "Su sistema respiratorio, parecido al de las aves, enfriaba el cuerpo y permitía tamaños que un mamífero no aguantaría.",
              },
              {
                t: "Comer sin masticar",
                d: "Tragaban el alimento y lo fermentaban. Eso permitía ingerir cantidades enormes de vegetal poco nutritivo.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="rounded-[14px] border border-regla bg-papel p-6">
                  <h3 className="text-[1.15rem] text-tinta">{c.t}</h3>
                  <p className="mt-2 text-[0.9rem] text-tinta-suave">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ExploreCards
        items={[
          {
            to: "/terropodos",
            titulo: "Quién los cazaba",
            texto: "Los terópodos, sus depredadores, y cómo atacaban a un gigante.",
          },
          {
            to: "/ornitisquios",
            titulo: "El otro grupo de herbívoros",
            texto: "Los que tenían la cadera como las aves, no como los lagartos.",
          },
          {
            to: "/epocas",
            titulo: "Su mejor momento",
            texto: "El Jurásico fue la era dorada de los saurópodos.",
          },
        ]}
      />

      <PageNav prev={prev} next={next} />
    </>
  );
}
