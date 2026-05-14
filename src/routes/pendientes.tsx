import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/pendientes")({
  head: () => ({
    meta: [
      { title: "Pendientes | Aurea Luminere" },
      { name: "description", content: "Pendientes Aurea Luminere: aros, trepadores, colgantes y de presión." },
      { property: "og:title", content: "Pendientes | Aurea Luminere" },
      { property: "og:description", content: "Encuentra los pendientes Aurea Luminere perfectos para ti." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Pendientes"
      description="Pendientes Aurea Luminere con un toque único. Aros, trepadores y colgantes para todos los looks."
      productPrefix="Pendientes Aurea Luminere"
      highlights={["AROS", "PENDIENTES COLGANTES", "PENDIENTES DE PRESIÓN", "TREPADORES"]}
    />
  ),
});
