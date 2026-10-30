import type { Categoria, CategoriaId } from "@/types/produto";

// imagem: foto de produto com fundo branco, usada como "recorte" nos cards de categoria.
export const CATEGORIAS: Categoria[] = [
  { id: "colchoes", nome: "Colchões", imagem: "/produtos/americanflex-abrace-ensacado/1.webp" },
  { id: "bases-e-box", nome: "Bases e Box", imagem: "/produtos/castor-box-bau-universal/1.webp" },
  { id: "estofados", nome: "Sofás", imagem: "/produtos/sofa-castor-infinity/1.webp" },
  { id: "cabeceiras", nome: "Cabeceiras", imagem: "/produtos/cabeceira-castor-requinte/1.webp" },
  { id: "travesseiros", nome: "Travesseiros", imagem: "/produtos/travesseiro-castor-visco-soft/1.webp" },
  { id: "acessorios", nome: "Cama e Acessórios", imagem: "/produtos/jogo-de-cama-castor-terni/1.webp" },
];

export function nomeCategoria(id: CategoriaId): string {
  return CATEGORIAS.find((c) => c.id === id)?.nome ?? id;
}
