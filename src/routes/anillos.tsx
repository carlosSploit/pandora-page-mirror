import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/anillos")({
  head: () => ({
    meta: [
      { title: "Anillos | Aurea Luminere" },
      { name: "description", content: "Anillos Aurea Luminere: solitarios, eternity, apilables y más." },
      { property: "og:title", content: "Anillos | Aurea Luminere" },
      { property: "og:description", content: "Descubre los anillos Aurea Luminere para cada estilo." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Anillos"
      description="Descubre los anillos Aurea Luminere: solitarios, eternity y diseños apilables para crear tu propio estilo."
      productPrefix="Anillo Aurea Luminere"
      highlights={["ANILLOS APILABLES", "ANILLOS SOLITARIOS", "ANILLOS ETERNITY", "ANILLOS DE PROMESA"]}
    />
  ),
});
