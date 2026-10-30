import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Produto } from "@/types/produto";
import { nomeMarca } from "@/data/marcas";
import { menorPreco } from "@/lib/catalog";
import { formatBRL, PARCELAS_SEM_JUROS, valorParcela } from "@/lib/format";
import { asset } from "@/lib/asset";

type Props = { produto: Produto; isPrioritario?: boolean };

export function ProductCard({ produto, isPrioritario = false }: Props) {
  const preco = menorPreco(produto);
  const temVariasOpcoes = produto.variacoes.length > 1;
  const href = `/produto/${produto.slug}/`;

  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-linha/70 bg-white shadow-card transition duration-300 ease-(--ease-saida) hover:-translate-y-1 hover:shadow-card-hover focus-within:ring-2 focus-within:ring-azul-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-fundo to-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(produto.imagens[0])}
          alt={produto.nome}
          loading={isPrioritario ? "eager" : "lazy"}
          className="size-full object-contain p-4 mix-blend-multiply transition duration-700 ease-(--ease-saida) group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold tracking-wide text-suave shadow-sm backdrop-blur">
          {produto.codigo}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
        <p className="text-lg font-extrabold tracking-tight text-navy-900">{nomeMarca(produto.marca)}</p>
        <h3 className="mt-0.5 text-[15px] leading-snug font-bold text-tinta">
          <Link href={href} className="after:absolute after:inset-0">
            {produto.nome}
          </Link>
        </h3>
        <p className="mt-1.5 mb-4 line-clamp-2 text-sm leading-relaxed text-texto">{produto.resumo}</p>

        <div className="mt-auto border-t border-dashed border-linha pt-3">
          <p className="text-xs text-suave">{temVariasOpcoes ? "a partir de" : "à vista no PIX"}</p>
          <p className="text-xl font-extrabold tracking-tight text-navy-900">
            {formatBRL(preco.precoVista)}
            {temVariasOpcoes && <span className="ml-1.5 text-xs font-semibold text-suave">no PIX</span>}
          </p>
          <p className="text-xs font-medium text-azul-600">
            ou {PARCELAS_SEM_JUROS}x de {formatBRL(valorParcela(preco.precoPrazo))} sem juros
          </p>
        </div>

        <span aria-hidden="true" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-3 text-sm font-bold text-white transition group-hover:bg-azul-600">
          Ver detalhes
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
