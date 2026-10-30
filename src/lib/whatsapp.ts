import type { Produto, Variacao } from "@/types/produto";
import { formatBRL, PARCELAS_SEM_JUROS, valorParcela } from "./format";

export function productUrl(siteUrl: string, slug: string): string {
  return `${siteUrl.replace(/\/+$/, "")}/produto/${slug}/`;
}

type ProductMessageInput = {
  produto: Produto;
  variacao: Variacao;
  url: string;
};

export function buildProductMessage({ produto, variacao, url }: ProductMessageInput): string {
  const medidas = variacao.medidas ? ` (${variacao.medidas})` : "";
  return [
    "Olá! Vi este produto no site da Fênix e quero mais informações:",
    "",
    `*${produto.nome}*`,
    `Código: ${produto.codigo}`,
    `${produto.rotuloVariacao}: ${variacao.nome}${medidas}`,
    `À vista no PIX: ${formatBRL(variacao.precoVista)}`,
    `ou ${PARCELAS_SEM_JUROS}x de ${formatBRL(valorParcela(variacao.precoPrazo))} sem juros`,
    "",
    `Link: ${url}`,
  ].join("\n");
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  if (!/^\d{12,13}$/.test(phone)) {
    throw new Error(`Número de WhatsApp inválido: use só dígitos com DDI e DDD (recebido "${phone}")`);
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
