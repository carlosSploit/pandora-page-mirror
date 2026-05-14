import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/collares")({
  head: () => ({
    meta: [
      { title: "Collares | Aurea Luminere" },
      { name: "description", content: "Collares Aurea Luminere: cadenas, gargantillas y colgantes." },
      { property: "og:title", content: "Collares | Aurea Luminere" },
      { property: "og:description", content: "Cadenas y colgantes Aurea Luminere para tu día a día." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Collares"
      description="Collares y colgantes Aurea Luminere: cadenas finas, gargantillas y piezas con personalidad para llevar siempre contigo."
      productPrefix="Collar Aurea Luminere"
      highlights={["GARGANTILLAS", "COLGANTES", "CADENAS LARGAS", "COLLARES PERSONALIZABLES"]}
    />
  ),
});
