import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/pulseras")({
  head: () => ({
    meta: [
      { title: "Pulseras | Pandora ES" },
      { name: "description", content: "Pulseras Pandora: para charms, rígidas, tennis y más." },
      { property: "og:title", content: "Pulseras | Pandora" },
      { property: "og:description", content: "Pulseras Pandora artesanales con estilo único." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Pulseras"
      description="Potencia tu look con las pulseras de Pandora. Pulseras artesanales que se pueden llevar de innumerables maneras."
      productPrefix="Pulsera Pandora"
      highlights={["CREA TU PULSERA -20%", "PULSERAS PARA CHARMS", "PULSERAS RÍGIDAS", "PULSERAS TENNIS"]}
    />
  ),
});
