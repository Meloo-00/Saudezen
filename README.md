# Saudezen

Site de saúde em linguagem simples: explica o hemograma com inteligência artificial
e traz mais de 120 doenças comuns explicadas a partir de fontes oficiais.
Projeto escolar do ITB Brasílio Flores de Azevedo (FIEB).

## Pastas

| Pasta / arquivo | O que tem |
|---|---|
| `*.html` | As 5 páginas: Início, Doenças de A a Z, Entrar, Análise e Aviso |
| `css/` e `js/` | Visual e funcionamento das páginas |
| `imagens/` | Imagens do site |
| `servidor.js` | Servidor do site (Node.js) |
| `api/` | Login, conexão com o banco e análise do exame com IA |
| `banco/` | Banco de dados SQL Server (`bd_login.sql`) e permissões do site |

## Como rodar

Precisa de **Node.js** e **SQL Server** instalados.

1. No SQL Server, rode `banco/bd_login.sql` e depois `banco/permissoes-site.sql`.
2. Crie o login do site no SQL Server e coloque nas variáveis de ambiente do Windows:
   `DB_USUARIO`, `DB_SENHA` e `GEMINI_API_KEY` (chave da IA do Google).
3. Dê dois cliques em `iniciar.bat`: ele instala o que falta, liga o site e abre http://localhost:3000.
   Para desligar, feche a janela preta.
