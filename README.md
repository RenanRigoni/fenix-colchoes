# Fênix Colchões e Cia — catálogo (demo)

Catálogo online sem checkout: o cliente escolhe o produto e o tamanho, e o botão **Comprar pelo WhatsApp** abre a conversa com a loja já com nome, código de referência, tamanho, preço e link do produto.

Stack: Next.js 16 (App Router, `output: "export"`), React 19, Tailwind CSS 4, Vitest. Hospedagem: GitHub Pages.

## Rodar

```bash
npm install
npm run dev          # desenvolvimento em http://localhost:3000/fenix-colchoes
npm test             # testes (mensagem do WhatsApp, preços, filtros, integridade do catálogo)
npm run build        # gera out/ (export estático) + postbuild
npm run preview      # serve out/ em http://localhost:4173/fenix-colchoes/
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Produtos, preços, fotos | `src/data/produtos.ts` (formato = futura tabela do banco) |
| WhatsApp, endereço, horários, e-mail | `src/data/loja.ts` |
| Categorias e marcas | `src/data/categorias.ts`, `src/data/marcas.ts` |
| Texto da mensagem do WhatsApp | `src/lib/whatsapp.ts` |
| Fotos | `public/produtos/<slug>/1.webp, 2.webp…` + `og.jpg` (1200×630, preview do link) |

Variáveis de ambiente (opcionais):
- `NEXT_PUBLIC_BASE_PATH`: prefixo do site (padrão `/fenix-colchoes`; use `""` em domínio próprio)
- `NEXT_PUBLIC_SITE_URL`: URL pública usada nos links da mensagem e no Open Graph

## Pendências para produção
- Confirmar com o dono: e-mail, horário de funcionamento, link do Facebook, textos da página Sobre e do FAQ.
- Trocar preços ilustrativos pelos reais.
- `scripts/postbuild-flatten-rsc.mjs` contorna um descompasso do Next 16.4 no export estático (prefetch de segmentos). Remover quando o Next corrigir.

## Fase 2 (se fechar)
Supabase (tabela `produtos` + Storage de fotos + login) e painel para o dono cadastrar produtos, deploy na Vercel com domínio próprio.
