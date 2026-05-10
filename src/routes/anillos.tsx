import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/anillos")({
  head: () => ({
    meta: [
      { title: "Anillos | Pandora ES" },
      { name: "description", content: "Anillos Pandora: solitarios, eternity, apilables y más." },
      { property: "og:title", content: "Anillos | Pandora" },
      { property: "og:description", content: "Descubre los anillos Pandora para cada estilo." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Anillos"
      description="Descubre los anillos Pandora: solitarios, eternity y diseños apilables para crear tu propio estilo."
      productPrefix="Anillo Pandora"
      highlights={["ANILLOS APILABLES", "ANILLOS SOLITARIOS", "ANILLOS ETERNITY", "ANILLOS DE PROMESA"]}
    />
  ),
});
