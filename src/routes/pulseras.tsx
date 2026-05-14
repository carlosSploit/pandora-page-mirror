import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/pulseras")({
  head: () => ({
    meta: [
      { title: "Pulseras | Aurea Luminere" },
      { name: "description", content: "Pulseras Aurea Luminere: para charms, rígidas, tennis y más." },
      { property: "og:title", content: "Pulseras | Aurea Luminere" },
      { property: "og:description", content: "Pulseras Aurea Luminere artesanales con estilo único." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Pulseras"
      description="Potencia tu look con las pulseras de Aurea Luminere. Pulseras artesanales que se pueden llevar de innumerables maneras."
      productPrefix="Pulsera Aurea Luminere"
      highlights={["CREA TU PULSERA -20%", "PULSERAS PARA CHARMS", "PULSERAS RÍGIDAS", "PULSERAS TENNIS"]}
    />
  ),
});
