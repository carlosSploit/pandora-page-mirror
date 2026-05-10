import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/pendientes")({
  head: () => ({
    meta: [
      { title: "Pendientes | Pandora ES" },
      { name: "description", content: "Pendientes Pandora: aros, trepadores, colgantes y de presión." },
      { property: "og:title", content: "Pendientes | Pandora" },
      { property: "og:description", content: "Encuentra los pendientes Pandora perfectos para ti." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Pendientes"
      description="Pendientes Pandora con un toque único. Aros, trepadores y colgantes para todos los looks."
      productPrefix="Pendientes Pandora"
      highlights={["AROS", "PENDIENTES COLGANTES", "PENDIENTES DE PRESIÓN", "TREPADORES"]}
    />
  ),
});
