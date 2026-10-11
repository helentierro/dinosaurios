import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/inter";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";
import Inicio from "./pages/Inicio";
import Epocas from "./pages/Epocas";
import Terropodos from "./pages/Terropodos";
import Sauropodos from "./pages/Sauropodos";
import Ornitisquios from "./pages/Ornitisquios";
import Marinos from "./pages/Marinos";
import Pterosaurios from "./pages/Pterosaurios";
import Extincion from "./pages/Extincion";
import Fuentes from "./pages/Fuentes";
import NoEncontrada from "./pages/NoEncontrada";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/epocas" element={<Epocas />} />
          <Route path="/terropodos" element={<Terropodos />} />
          <Route path="/sauropodos" element={<Sauropodos />} />
          <Route path="/ornitisquios" element={<Ornitisquios />} />
          <Route path="/marinos" element={<Marinos />} />
          <Route path="/pterosaurios" element={<Pterosaurios />} />
          <Route path="/extincion" element={<Extincion />} />
          <Route path="/fuentes" element={<Fuentes />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
