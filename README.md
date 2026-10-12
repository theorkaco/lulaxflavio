# Landing page — Lula x Flávio: O Brasil Depois de 25/10

Projeto estático para **teste inicial no GitHub Pages**, sem framework, dependências, cookies ou pixels de rastreamento.

## Arquivos

- `index.html` — copy completa (8 seções), CTA e FAQ.
- `style.css` — layout editorial premium, mobile-first.
- `script.js` — abre prévias se imagens forem fornecidas e mostra CTA fixo em telas pequenas.
- `politica-de-privacidade.html` — informações sobre tratamento de dados e direitos do titular.
- `termos-de-compra.html` — condições de aquisição e acesso ao PDF.
- `politica-de-reembolso.html` — direito de arrependimento e canal de reembolso da Kiwify.
- `legal.css` — estilo tipográfico mínimo para as três páginas jurídicas, sem JavaScript.
- `assets/favicon.svg` — ícone simples do site.
- `assets/` — pasta onde adicionar imagens reais.

## Checkout

Todos os botões de compra já apontam para:

`https://pay.kiwify.com.br/gMo2Lv3`

Confira o preço **R$ 9,90** e a entrega real do produto na Kiwify antes da publicação.

## SUBSTITUIR ANTES DE PUBLICAR PARA O PÚBLICO

1. **Capa:** o mockup no Hero é **ilustrativo, criado em HTML/CSS**. Substitua pela capa/mockup real do PDF quando estiver disponível. É importante que a apresentação seja fiel ao arquivo final.
2. **Prévias:** exporte as páginas reais do e-book, em WebP, e salve como:
   - `assets/previa-pagina-4.webp`
   - `assets/previa-pagina-12.webp`
   A página detecta e mostra essas imagens automaticamente. Até lá, exibe placeholders explicitamente identificados. Verifique que correspondem exatamente ao conteúdo e aos números de página mencionados na copy.
3. **Dados reais obrigatórios antes de vender:** substitua `[NOME_DO_RESPONSAVEL_OU_EMPRESA]`, `[CNPJ_OU_DADOS_APLICAVEIS]`, `[EMAIL_DE_SUPORTE]` no `index.html` e nos três documentos legais. Substitua também `[ENDERECO_DE_CONTATO]` no rodapé principal e nos documentos legais. Verifique se identificação, endereço e meios de contato estão disponíveis de forma ostensiva ao consumidor. Os links das três páginas legais já estão conectados ao rodapé.
4. **Verificação do PDF:** confirmar que há 14 páginas, comparações documentadas, referências e data de fechamento em 11/10/2026, tal como afirma a copy.
5. **Domínio:** configurar nome de domínio (se houver), ajustar metadados e Open Graph após a publicação definitiva.
6. **Políticas de anúncios:** nenhuma hospedagem ou identidade editorial, por si só, dispensa obrigações legais e regras específicas da Meta/TSE para publicidade envolvendo eleições. Validar o enquadramento antes de anunciar.
7. **LGPD:** se adicionar pixel, analytics, formulários ou cookies, revisar necessidade, base legal, transparência, políticas e gestão de consentimento quando aplicável.

## Como testar localmente

Abra `index.html` no navegador. Para simular corretamente o GitHub Pages e testar URLs relativas, pode executar:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/`.

## Publicar no GitHub Pages

1. Crie um repositório e suba os arquivos **na raiz** do repositório.
2. Abra `Settings` → `Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Selecione `main` e a pasta `/ (root)`; salve.
5. Aguarde o endereço HTTPS ser disponibilizado e teste nos dispositivos.

## Alterações rápidas

- Cores: variáveis em `:root` no início de `style.css`.
- Checkout: buscar `https://pay.kiwify.com.br/gMo2Lv3` no `index.html` para substituir.
- Textos: editar em cada seção comentada no `index.html`.
- Pixel futuro: adicionar somente após avaliar requisitos de transparência/privacidade pertinentes; por ora não há integração.

## Observações de design

As páginas PDF fornecidas como referência usam linguagem e símbolos explicitamente partidários. Foram aproveitadas apenas características genéricas de UX (headline objetiva, blocos claros, CTAs diretos, FAQ), sem copiar visuais de campanha, supostos endossos, certificados ou provas sociais não fornecidas.

## Atenção: políticas jurídicas

As três páginas foram redigidas como modelos baseados nas características informadas do produto e nas regras gerais brasileiras de consumo e privacidade. Conferir a identidade jurídica do vendedor e os processos reais antes de publicar; se instalar pixel, cookies ou ferramentas de analytics, atualizar especialmente a Política de Privacidade. Estes modelos não substituem revisão jurídica.
