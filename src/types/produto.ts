export type CategoriaId =
  | "colchoes"
  | "bases-e-box"
  | "cabeceiras"
  | "travesseiros"
  | "estofados"
  | "acessorios";

export type MarcaId = "castor" | "ortobom" | "americanflex" | "gazin";

/** Variação de venda: tamanho do colchão ("Queen") ou configuração do sofá ("3 lugares"). */
export type Variacao = {
  nome: string;
  medidas: string;
  precoVista: number;
  precoPrazo: number;
};

export type Especificacoes = {
  altura?: string;
  tipo?: string;
  molas?: string;
  firmeza?: string;
  suportaAte?: string;
  garantia?: string;
  revestimento?: string;
  estrutura?: string;
  medidas?: string;
};

/** Mesmo formato da futura tabela `produtos` no Supabase. */
export type Produto = {
  id: string;
  codigo: string;
  slug: string;
  nome: string;
  marca: MarcaId;
  categoria: CategoriaId;
  linha?: string;
  resumo: string;
  descricao: string;
  destaques: string[];
  especificacoes: Especificacoes;
  /** Rótulo do seletor: "Tamanho" (colchão/box) ou "Modelo" (sofá). */
  rotuloVariacao: string;
  variacoes: Variacao[];
  imagens: string[];
  emDestaque: boolean;
  ativo: boolean;
};

export type Categoria = { id: CategoriaId; nome: string; imagem: string };
export type Marca = { id: MarcaId; nome: string; logo?: string };
