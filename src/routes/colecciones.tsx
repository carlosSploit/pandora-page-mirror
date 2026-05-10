import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/colecciones")({
  head: () => ({
    meta: [
      { title: "Colecciones | Pandora ES" },
      { name: "description", content: "Explora todas las colecciones de joyas Pandora." },
      { property: "og:title", content: "Colecciones | Pandora" },
      { property: "og:description", content: "Descubre las colecciones más icónicas de Pandora." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Colecciones"
      description="Explora las colecciones más icónicas de Pandora: Moments, ME, Timeless, Disney y mucho más."
      productPrefix="Pieza Pandora"
      highlights={["PANDORA MOMENTS", "PANDORA ME", "PANDORA TIMELESS", "PANDORA DISNEY"]}
    />
  ),
});
