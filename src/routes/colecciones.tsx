import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/colecciones")({
  head: () => ({
    meta: [
      { title: "Colecciones | Aurea Luminere" },
      { name: "description", content: "Explora todas las colecciones de joyas Aurea Luminere." },
      { property: "og:title", content: "Colecciones | Aurea Luminere" },
      { property: "og:description", content: "Descubre las colecciones más icónicas de Aurea Luminere." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Colecciones"
      description="Explora las colecciones más icónicas de Aurea Luminere: Moments, ME, Timeless, Disney y mucho más."
      productPrefix="Pieza Aurea Luminere"
      highlights={["AUREA LUMINERE MOMENTS", "AUREA LUMINERE ME", "AUREA LUMINERE TIMELESS", "AUREA LUMINERE DISNEY"]}
    />
  ),
});
