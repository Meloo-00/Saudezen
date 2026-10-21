# Ideias para o futuro

## Notícias automáticas (RSS)

Hoje as notícias da Home são fixas: alguém escreve o título, o resumo e o link no `index.html`.
Para um protótipo isso basta, mas elas ficam velhas rápido.

**Ideia:** buscar as notícias sozinho, pelo RSS das fontes. RSS é um arquivo que muitos sites
de notícia publicam com a lista das matérias mais novas (título, resumo, data e link).

**Como seria:**
1. Uma função na Vercel (`api/noticias.js`), igual à do Gemini, lê o RSS das fontes escolhidas.
   Tem que ser no servidor porque o navegador geralmente é bloqueado ao ler o RSS de outro site.
2. A função junta as matérias, ordena pela data e devolve as 5 mais novas.
3. A Home chama essa função e monta os cards com JavaScript.
4. Para não buscar a cada visita, a resposta fica guardada por algumas horas
   (cabeçalho `Cache-Control` na Vercel).
5. Se a busca falhar, a Home mostra as notícias fixas de hoje. Elas viram a reserva.

**Fontes possíveis (confirmar se cada uma tem RSS e se permite o uso):**
- Agência Brasil, seção Saúde
- Agência Fiocruz de Notícias
- Ministério da Saúde (gov.br)

**Cuidados:**
- Mostrar só título, um trecho curto, a data e o link para a fonte. Nunca copiar a matéria inteira (direitos autorais).
- Sempre citar a fonte em cada card.
- O resumo do RSS vem escrito pela fonte, não por nós. Não dá para garantir a linguagem simples.
  Uma opção seria pedir ao Gemini um resumo simples de cada título, mas isso gasta cota da IA
  e pode errar. Precisa ser avaliado antes.
- Filtrar temas: o RSS de saúde pode trazer assuntos pesados ou alarmistas, o que vai contra o tom calmo do site.
