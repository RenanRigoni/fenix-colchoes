import type { Marca, MarcaId } from "@/types/produto";

export const MARCAS: Marca[] = [
  { id: "castor", nome: "Castor", logo: "/marcas/castor-logo.png" },
  { id: "ortobom", nome: "Ortobom", logo: "/marcas/ortobom-logo.png" },
  { id: "americanflex", nome: "Americanflex", logo: "/marcas/americanflex-logo.png" },
  { id: "gazin", nome: "Gazin" },
];

export function nomeMarca(id: MarcaId): string {
  return MARCAS.find((m) => m.id === id)?.nome ?? id;
}
