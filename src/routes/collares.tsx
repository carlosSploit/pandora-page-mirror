import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/collares")({
  head: () => ({
    meta: [
      { title: "Collares | Pandora ES" },
      { name: "description", content: "Collares Pandora: cadenas, gargantillas y colgantes." },
      { property: "og:title", content: "Collares | Pandora" },
      { property: "og:description", content: "Cadenas y colgantes Pandora para tu día a día." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Collares"
      description="Collares y colgantes Pandora: cadenas finas, gargantillas y piezas con personalidad para llevar siempre contigo."
      productPrefix="Collar Pandora"
      highlights={["GARGANTILLAS", "COLGANTES", "CADENAS LARGAS", "COLLARES PERSONALIZABLES"]}
    />
  ),
});
