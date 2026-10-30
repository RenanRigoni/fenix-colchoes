export const LOJA = {
  nome: "Fênix Colchões e Cia",
  slogan: "Conforto que você sente, qualidade que sua casa merece.",
  whatsapp: "5518991533576",
  whatsappExibicao: "(18) 99153-3576",
  telefone: "1821751302",
  telefoneExibicao: "(18) 2175-1302",
  instagram: "https://www.instagram.com/fenixcolchoes.mirandopolis/",
  instagramUsuario: "@fenixcolchoes.mirandopolis",
  linktree: "https://linktr.ee/fenixcolchoes",
  endereco: {
    rua: "Rua 9 de Julho, 946",
    bairro: "Centro",
    cidade: "Mirandópolis",
    uf: "SP",
  },
  regiao: "Mirandópolis e região",
  // Placeholder: confirmar com o dono antes de publicar.
  horarios: [
    { dias: "Segunda a sexta", horas: "8h às 18h" },
    { dias: "Sábado", horas: "8h às 13h" },
  ],
} as const;

export const ENDERECO_COMPLETO = `${LOJA.endereco.rua}, ${LOJA.endereco.bairro}, ${LOJA.endereco.cidade}/${LOJA.endereco.uf}`;

export const MAPS_QUERY = encodeURIComponent(`${LOJA.endereco.rua}, ${LOJA.endereco.cidade} - ${LOJA.endereco.uf}`);

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://renanrigoni.github.io/fenix-colchoes").replace(/\/+$/, "");

export const MENSAGEM_GERAL = "Olá! Vim pelo site da Fênix e quero atendimento.";
