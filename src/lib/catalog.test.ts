import { describe, expect, it } from "vitest";
import { contarPorCategoria, filterProducts, menorPreco, searchProducts, sortProducts } from "./catalog";
import type { Produto } from "@/types/produto";

function make(p: Partial<Produto> & Pick<Produto, "id" | "nome">): Produto {
  return {
    codigo: `FNX-${p.id}`,
    slug: p.id,
    marca: "castor",
    categoria: "colchoes",
    resumo: "",
    descricao: "",
    destaques: [],
    especificacoes: {},
    rotuloVariacao: "Tamanho",
    variacoes: [{ nome: "Casal", medidas: "", precoVista: 1000, precoPrazo: 1100 }],
    imagens: [],
    emDestaque: false,
    ativo: true,
    ...p,
  };
}

const lista: Produto[] = [
  make({ id: "a", nome: "Colchão Ortobom Pró-Vida", marca: "ortobom", variacoes: [
    { nome: "Solteiro", medidas: "", precoVista: 900, precoPrazo: 1000 },
    { nome: "Casal", medidas: "", precoVista: 1500, precoPrazo: 1700 },
  ] }),
  make({ id: "b", nome: "Sofá Retrátil Cloud", categoria: "estofados", marca: "gazin", emDestaque: true, variacoes: [
    { nome: "2 lugares", medidas: "", precoVista: 2500, precoPrazo: 2800 },
  ] }),
  make({ id: "c", nome: "Colchão Castor Black & White", emDestaque: true }),
  make({ id: "d", nome: "Inativo", ativo: false }),
];

describe("menorPreco", () => {
  it("retorna a variação mais barata à vista", () => {
    expect(menorPreco(lista[0]).precoVista).toBe(900);
  });
});

describe("filterProducts", () => {
  it("sem filtro retorna só ativos", () => {
    expect(filterProducts(lista, {}).map((p) => p.id)).toEqual(["a", "b", "c"]);
  });

  it("filtra por categoria", () => {
    expect(filterProducts(lista, { categoria: "estofados" }).map((p) => p.id)).toEqual(["b"]);
  });

  it("filtra por categoria e marca juntas", () => {
    expect(
      filterProducts(lista, { categoria: "colchoes", marca: "castor" }).map((p) => p.id),
    ).toEqual(["c"]);
  });

  it("ignora valores de filtro desconhecidos vindos da URL", () => {
    expect(filterProducts(lista, { categoria: "xyz" }).map((p) => p.id)).toEqual(["a", "b", "c"]);
  });
});

describe("sortProducts", () => {
  it("menor preço primeiro", () => {
    expect(sortProducts(lista.slice(0, 3), "menor-preco").map((p) => p.id)).toEqual(["a", "c", "b"]);
  });

  it("maior preço primeiro", () => {
    expect(sortProducts(lista.slice(0, 3), "maior-preco").map((p) => p.id)).toEqual(["b", "c", "a"]);
  });

  it("destaques primeiro mantendo ordem original", () => {
    expect(sortProducts(lista.slice(0, 3), "destaque").map((p) => p.id)).toEqual(["b", "c", "a"]);
  });

  it("não altera o array original", () => {
    const original = lista.slice(0, 3);
    sortProducts(original, "nome");
    expect(original.map((p) => p.id)).toEqual(["a", "b", "c"]);
  });
});

describe("searchProducts", () => {
  it("busca sem acento e sem diferenciar maiúsculas", () => {
    expect(searchProducts(lista, "pro vida").map((p) => p.id)).toEqual(["a"]);
    expect(searchProducts(lista, "SOFA").map((p) => p.id)).toEqual(["b"]);
  });

  it("busca pelo código de referência", () => {
    expect(searchProducts(lista, "fnx-c").map((p) => p.id)).toEqual(["c"]);
  });

  it("aceita palavras fora de ordem", () => {
    expect(searchProducts(lista, "castor colchão").map((p) => p.id)).toEqual(["c"]);
    expect(searchProducts(lista, "sofa gazin").map((p) => p.id)).toEqual(["b"]);
  });

  it("consulta vazia retorna lista vazia", () => {
    expect(searchProducts(lista, "  ")).toEqual([]);
  });
});

describe("contarPorCategoria", () => {
  it("conta só produtos ativos de cada categoria", () => {
    expect(contarPorCategoria(lista)).toEqual({ colchoes: 2, estofados: 1 });
  });
});
