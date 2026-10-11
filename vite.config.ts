import { defineConfig } from "vite";

// GitHub Pages sirve el sitio desde /<nombre-del-repo>/, no desde la raíz.
// Sin este base, los assets y las imágenes buscarían en la raíz de github.io.
export default defineConfig({
  base: "/dinosaurios/",
});
