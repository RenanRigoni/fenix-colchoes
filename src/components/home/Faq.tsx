import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_GERAL } from "@/lib/links";

// Respostas provisórias: validar com o dono da loja antes de publicar.
const PERGUNTAS = [
  {
    p: "Vocês entregam na minha cidade?",
    r: "Entregamos em Mirandópolis e nas cidades da região. Chame no WhatsApp com o seu endereço que a gente confirma o prazo e o valor do frete.",
  },
  {
    p: "Quais são as formas de pagamento?",
    r: "À vista no PIX, com desconto, ou no cartão de crédito em até 18x sem juros. Outras formas a gente combina no atendimento.",
  },
  {
    p: "O preço do site é o preço final?",
    r: "É o preço de referência. Condições especiais, combos com box e promoções do dia a gente passa no atendimento.",
  },
  {
    p: "Qual colchão é melhor para mim?",
    r: "Depende do seu peso, de como você dorme (de lado, de costas ou de bruços) e se tem dor nas costas. Conte isso pra gente no WhatsApp que indicamos as melhores opções.",
  },
  {
    p: "Os produtos têm garantia?",
    r: "Sim. Todos os produtos são originais e têm garantia de fábrica. Alguns modelos Castor, por exemplo, têm 3 anos de garantia no molejo.",
  },
  {
    p: "Posso ver o produto pessoalmente?",
    r: "Pode, e vale a pena deitar no colchão antes de escolher. A loja fica na Rua 9 de Julho, 946, no centro de Mirandópolis.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-azul-600 uppercase">Dúvidas frequentes</p>
          <h2 className="mt-3 text-3xl leading-[1.08] font-extrabold tracking-tight text-navy-900 sm:text-[2.75rem]">
            Ficou alguma <span className="destaque text-azul-600">dúvida?</span>
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-texto">Aqui estão as perguntas que mais recebemos. Se a sua não estiver na lista, é só chamar.</p>
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-wpp px-7 py-3.5 font-bold text-white transition hover:bg-wpp-escuro"
          >
            <WhatsAppIcon /> Tirar dúvida no WhatsApp
          </a>
        </div>
        <div className="divide-y divide-linha border-y border-linha">
          {PERGUNTAS.map(({ p, r }) => (
            <details key={p} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-tinta transition hover:text-azul-600 [&::-webkit-details-marker]:hidden">
                {p}
                <Plus className="size-5 shrink-0 text-azul-500 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pb-5 leading-relaxed text-texto">{r}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
