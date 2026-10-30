import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getProduto } from "@/data/produtos";
import { nomeMarca } from "@/data/marcas";
import { menorPreco } from "@/lib/catalog";
import { formatBRL, PARCELAS_SEM_JUROS, valorParcela } from "@/lib/format";
import { WHATSAPP_GERAL } from "@/lib/links";
import { asset } from "@/lib/asset";

const SLUG_VITRINE = "castor-silver-star-air-pocket";

function CardVitrine() {
  const produto = getProduto(SLUG_VITRINE);
  if (!produto) return null;
  const preco = menorPreco(produto);
  return (
    <Link
      href={`/produto/${produto.slug}/`}
      className="anima-flutuar group absolute right-6 bottom-28 hidden w-72 rounded-3xl bg-white p-4 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.55)] -rotate-2 transition duration-500 ease-(--ease-saida) hover:rotate-0 hover:-translate-y-1 lg:block xl:right-8"
    >
      <span className="absolute -top-3 left-5 rounded-full bg-ouro px-3 py-1 text-[11px] font-extrabold tracking-wide text-navy-950 uppercase">
        Mais procurado
      </span>
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-azul-50 to-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(produto.imagens[0])}
          alt=""
          width={256}
          height={160}
          className="h-40 w-full object-contain p-3 mix-blend-multiply transition-transform duration-700 ease-(--ease-saida) group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-xs font-bold tracking-wide text-azul-600 uppercase">{nomeMarca(produto.marca)}</p>
      <p className="mt-0.5 leading-snug font-bold text-tinta">{produto.linha ?? produto.nome}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-xs leading-tight text-suave">
          a partir de
          <span className="block text-lg font-extrabold text-tinta">{formatBRL(preco.precoVista)}</span>
          ou {PARCELAS_SEM_JUROS}x de {formatBRL(valorParcela(preco.precoPrazo))}
        </p>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-900 text-white transition group-hover:bg-azul-500">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </Link>
  );
}

export function Hero() {
  return (
    <section className="grao relative isolate overflow-hidden bg-navy-950">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/hero.webp")}
        alt=""
        fetchPriority="high"
        width={2000}
        height={2400}
        className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-[60%_45%] opacity-60 md:w-[68%] md:opacity-100 md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
      />
      {/* Navy à esquerda para o texto, brilho quente vindo da foto. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20 md:via-navy-950/60 md:to-transparent" />
      <div className="absolute top-1/3 right-[18%] -z-10 hidden size-[34rem] rounded-full bg-ouro/25 blur-[120px] md:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/80 to-transparent" />

      <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-44">
        <div className="max-w-3xl">
          <p className="anima-subir flex items-center gap-3 text-xs font-semibold tracking-[0.35em] text-ouro-claro uppercase">
            <span className="h-px w-10 bg-ouro" aria-hidden="true" />
            Conforto e qualidade
          </p>
          <h1 className="anima-surgir mt-6 max-w-[15ch] text-[clamp(2.3rem,6vw,5.25rem)] leading-[0.98] font-extrabold tracking-tight text-balance text-white [animation-delay:80ms]">
            Colchões para todas as fases <span className="destaque text-ouro-claro">da sua vida.</span>
          </h1>
          <p className="anima-subir mt-7 max-w-md text-lg leading-relaxed text-white/85 [animation-delay:160ms]">
            Mais conforto e noites de sono melhores para você e para a sua família.
          </p>
          <div className="anima-subir mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Link
              href="/produtos/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ouro px-7 py-4 font-extrabold text-navy-950 shadow-[0_18px_40px_-14px_var(--color-ouro)] transition hover:-translate-y-0.5 hover:bg-ouro-claro"
            >
              Ver produtos
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WHATSAPP_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              <WhatsAppIcon className="size-5" />
              Chamar no WhatsApp
            </a>
          </div>
          <p className="anima-subir mt-8 text-sm text-white/70 [animation-delay:320ms]">
            <span className="whitespace-nowrap">
              <strong className="text-white">{PARCELAS_SEM_JUROS}x sem juros</strong> no cartão
            </span>
            <span className="mx-2 text-ouro" aria-hidden="true">•</span>
            <span className="whitespace-nowrap">desconto no PIX</span>
            <span className="mx-2 text-ouro" aria-hidden="true">•</span>
            <span className="whitespace-nowrap">entrega na região</span>
          </p>
        </div>
        <CardVitrine />
      </Container>
    </section>
  );
}
