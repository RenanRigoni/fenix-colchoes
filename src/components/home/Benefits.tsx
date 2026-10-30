import { CreditCard, ShieldCheck, Truck, UserRoundCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const BENEFICIOS = [
  { icone: UserRoundCheck, titulo: "Atendimento especializado", texto: "A equipe ajuda você a escolher o colchão certo para o seu peso e o seu jeito de dormir." },
  { icone: CreditCard, titulo: "Pagamento facilitado", texto: "Até 18x sem juros no cartão ou desconto à vista no PIX." },
  { icone: Truck, titulo: "Entrega para toda a região", texto: "Entregamos rápido e com cuidado em Mirandópolis e nas cidades vizinhas." },
  { icone: ShieldCheck, titulo: "Qualidade garantida", texto: "Só trabalhamos com marcas reconhecidas e produtos originais, com garantia de fábrica." },
];

export function Benefits() {
  return (
    <section className="border-b border-linha py-14 sm:py-16">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-linha">
          {BENEFICIOS.map(({ icone: Icone, titulo, texto }) => (
            <li key={titulo} className="revela lg:px-7 lg:first:pl-0 lg:last:pr-0">
              <Icone className="size-8 text-azul-600" strokeWidth={1.5} />
              <h3 className="mt-4 font-extrabold text-tinta">{titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-suave">{texto}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
