import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/charms")({
  head: () => ({
    meta: [
      { title: "Charms | Aurea Luminere" },
      { name: "description", content: "Charms Aurea Luminere para personalizar tus joyas." },
      { property: "og:title", content: "Charms | Aurea Luminere" },
      { property: "og:description", content: "Cuenta tu historia con los charms Aurea Luminere." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Charms"
      description="Cuenta tu historia con la colección de charms Aurea Luminere. Encuentra el charm perfecto para cada momento."
      productPrefix="Charm Aurea Luminere"
      highlights={["CHARMS NUEVOS", "CHARMS DISNEY", "CHARMS COLGANTES", "CHARMS GRABADOS"]}
    />
  ),
});
