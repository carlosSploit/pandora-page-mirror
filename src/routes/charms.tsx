import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/charms")({
  head: () => ({
    meta: [
      { title: "Charms | Pandora ES" },
      { name: "description", content: "Charms Pandora para personalizar tus joyas." },
      { property: "og:title", content: "Charms | Pandora" },
      { property: "og:description", content: "Cuenta tu historia con los charms Pandora." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Charms"
      description="Cuenta tu historia con la colección de charms Pandora. Encuentra el charm perfecto para cada momento."
      productPrefix="Charm Pandora"
      highlights={["CHARMS NUEVOS", "CHARMS DISNEY", "CHARMS COLGANTES", "CHARMS GRABADOS"]}
    />
  ),
});
