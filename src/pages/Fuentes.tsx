import { PageNav } from "../components/PageNav";
import { prevNext } from "../lib/paginas";

const FUENTES = [
  {
    nombre: "Chicxulub crater",
    editorial: "Britannica",
    uso: "Diámetro y velocidad del asteroide, edad del impacto.",
    url: "https://www.britannica.com/place/Chicxulub",
  },
  {
    nombre: "Chicxulub crater",
    editorial: "Wikipedia",
    uso: "Crater, edad y detalles del límite Cretácico-Paleógeno.",
    url: "https://en.wikipedia.org/wiki/Chicxulub_crater",
  },
  {
    nombre: "The largest-ever flying animal behaved like a giant heron",
    editorial: "Natural History Museum, Londres",
    uso: "Envergadura de Quetzalcoatlus northropi, unos 11 m, y el modelo de despegue.",
    url: "https://www.nhm.ac.uk/discover/news/2021/december/largest-ever-flying-animal-behaved-like-giant-heron.html",
  },
  {
    nombre: "Quetzalcoatlus",
    editorial: "Wikipedia",
    uso: "Rango histórico de estimaciones de envergadura, de 5,2 a 25,8 m.",
    url: "https://en.wikipedia.org/wiki/Quetzalcoatlus",
  },
  {
    nombre: "Argentinosaurus",
    editorial: "Wikipedia",
    uso: "Estimaciones de masa, desde las cuestionadas de 90 a 95 t hasta las de 2016 en torno a 73 t.",
    url: "https://en.wikipedia.org/wiki/Argentinosaurus",
  },
  {
    nombre: "Maximum bite force in Tyrannosaurus rex",
    editorial: "Erickson et al., recogido en varias fuentes",
    uso: "Rango de mordida de T. rex, entre 35.000 y 57.000 N.",
    url: "https://en.wikipedia.org/wiki/Tyrannosaurus",
  },
  {
    nombre: "Tail-propelled aquatic locomotion in a theropod dinosaur",
    editorial: "Ibrahim et al., Nature, 2020",
    uso: "La cola de Spinosaurus y su adaptación al medio acuático.",
    url: "https://www.nature.com/articles/s41586-020-2190-3",
  },
  {
    nombre: "Spinosaurus",
    editorial: "Wikipedia",
    uso: "Longitud estimada y hábitat del norte de África.",
    url: "https://en.wikipedia.org/wiki/Spinosaurus",
  },
];

const IMAGENES = [
  {
    titulo: "Tyrannosaurus Rex, Expo Dinosaurios 2023 - A740966",
    uso: "Inicio y Terópodos",
    author: "Rjcastillo",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex,_Expo_Dinosaurios_2023_-_A740966.jpg",
  },
  {
    titulo: "Velociraptor mongoliensis AMNH 6515",
    uso: "Terópodos",
    author: "Smokeybjb",
    license: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Velociraptor_mongoliensis_AMNH_6515.jpg",
  },
  {
    titulo: "Spinosaurus Crane",
    uso: "Terópodos",
    author: "Didier Descouens",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Spinosaurus_Crane.jpg",
  },
  {
    titulo: "Allosaurus SDNHM",
    uso: "Terópodos",
    author: "No machine-readable author provided. Sheep81~commonswiki assumed (based on copyright claims).",
    license: "Public domain",
    url: "https://commons.wikimedia.org/wiki/File:Allosaurus_SDNHM.jpg",
  },
  {
    titulo: "Argentinosaurus BW",
    uso: "Saurópodos",
    author: "Nobu Tamura (http://spinops.blogspot.com)",
    license: "CC BY 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Argentinosaurus_BW.jpg",
  },
  {
    titulo: "Brachiosaurus mount",
    uso: "Saurópodos",
    author: "Matt Wedel",
    license: "CC BY 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Brachiosaurus_mount.jpg",
  },
  {
    titulo: "Diplodocus carnegiei",
    uso: "Saurópodos",
    author: "Gunnar Ries Amphibol",
    license: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Diplodocus_carnegiei.jpg",
  },
  {
    titulo: "TriceratopsFernForest",
    uso: "Ornitisquios",
    author: "Martinvl",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:TriceratopsFernForest.jpg",
  },
  {
    titulo: "Hul - Stegosaurus stenops, Sophie - 6",
    uso: "Ornitisquios",
    author: "Emőke Dénes",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Hul_-_Stegosaurus_stenops,_Sophie_-_6.jpg",
  },
  {
    titulo: "Ankylosaur head - cast - Custer County Montana - Museum of the Rockies - 2013-07-08",
    uso: "Ornitisquios",
    author: "Tim Evanson",
    license: "CC BY-SA 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Ankylosaur_head_-_cast_-_Custer_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg",
  },
  {
    titulo: "Parasaurolophus cyrtocristatus",
    uso: "Ornitisquios",
    author: "Lisa Andres from Riverside, USA",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Parasaurolophus_cyrtocristatus.jpg",
  },
  {
    titulo: "Mosasaurus hoffmannii - skeleton",
    uso: "Reptiles marinos",
    author: "Ghedoghedo",
    license: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Mosasaurus_hoffmannii_-_skeleton.jpg",
  },
  {
    titulo: "Ichthyosaurus BW",
    uso: "Reptiles marinos",
    author: "Nobu Tamura (http://spinops.blogspot.com)",
    license: "CC BY 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Ichthyosaurus_BW.jpg",
  },
  {
    titulo: "Elasmosaurus",
    uso: "Reptiles marinos",
    author: "Corbin Rainbolt",
    license: "CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Elasmosaurus.jpg",
  },
  {
    titulo: "Quetzalcoatlus07",
    uso: "Pterosaurios",
    author: "ДиБгд at Russian Wikipedia",
    license: "Public domain",
    url: "https://commons.wikimedia.org/wiki/File:Quetzalcoatlus07.jpg",
  },
  {
    titulo: "Pteranodon AMNH",
    uso: "Pterosaurios",
    author: "Jonathan Chen",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Pteranodon_AMNH.jpg",
  },
  {
    titulo: "Chicxulub",
    uso: "Extinción",
    author: "Shuttle Radar Topography Mission",
    license: "Public domain",
    url: "https://commons.wikimedia.org/wiki/File:Chicxulub.jpg",
  },
];

export default function Fuentes() {
  const { prev, next } = prevNext("/fuentes");

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-acento">Fuentes</p>
        <h1 className="mt-4 max-w-[24ch] text-[2.4rem] md:text-[3rem]">
          De dónde salen estos datos
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1rem] text-tinta-suave">
          Cada cifra de la web remite a una de estas fuentes. Donde los estudios discrepan,
          la página muestra el rango en vez de inventar una cifra.
        </p>
      </section>

      {/* Fuentes de datos: agrupado, no una tabla larga con borde en cada fila */}
      <section className="mx-auto max-w-[1000px] px-5 pb-12 lg:px-8">
        <h2 className="text-[1.4rem] text-tinta">Datos y estimaciones</h2>
        <div className="mt-5 space-y-4">
          {FUENTES.map((f) => (
            <article
              key={f.url}
              className="rounded-[14px] border border-regla bg-papel px-6 py-5"
            >
              <h3 className="text-[1.1rem] text-tinta">{f.nombre}</h3>
              <p className="mt-1 text-[0.82rem] text-acento">{f.editorial}</p>
              <p className="mt-2 text-[0.9rem] text-tinta-suave">{f.uso}</p>
              <a
                href={f.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block break-all text-[0.82rem] text-tinta-suave underline hover:text-acento"
              >
                {f.url}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Créditos de imagen: cada foto con autor, licencia y enlace */}
      <section className="mx-auto max-w-[1000px] px-5 pb-12 lg:px-8">
        <h2 className="text-[1.4rem] text-tinta">Imágenes</h2>
        <p className="mt-3 max-w-[60ch] text-[0.93rem] text-tinta-suave">
          Todas las fotos e ilustraciones son de Wikimedia Commons. Se respeta la licencia
          de cada una; las de Creative Commons exigen esta atribución.
        </p>
        <div className="mt-5 space-y-3">
          {IMAGENES.map((im) => (
            <article
              key={im.url}
              className="rounded-[14px] border border-regla bg-papel px-6 py-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[1rem] text-tinta">{im.titulo}</h3>
                <span className="rounded-[14px] border border-regla bg-papel-alt px-3 py-1 text-[0.72rem] uppercase tracking-[0.12em] text-tinta-suave">
                  {im.license}
                </span>
              </div>
              <p className="mt-1 text-[0.85rem] text-tinta-suave">
                {im.author} · usada en {im.uso}
              </p>
              <a
                href={im.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block break-all text-[0.8rem] text-tinta-suave underline hover:text-acento"
              >
                {im.url}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 pb-16 lg:px-8">
        <div className="rounded-[14px] border border-regla bg-papel-alt px-7 py-7">
          <h2 className="text-[1.3rem] text-tinta">Sobre las estimaciones</h2>
          <p className="mt-3 max-w-[60ch] text-[0.93rem] text-tinta-suave">
            La paleontología trabaja con restos parciales. El peso o la longitud de un
            dinosaurio son cálculos a partir de un hueso, y dos equipos pueden llegar a
            cifras distintas. Cuando una página da un número exacto sin rango, conviene
            desconfiar.
          </p>
        </div>
      </section>

      <PageNav prev={prev} next={next} />
    </>
  );
}
