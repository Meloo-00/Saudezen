// Servidor do Saudezen: roda no computador com "npm start" e abre em http://localhost:3000
//
// Ele faz três coisas:
// 1. Mostra as páginas do site (HTML, CSS, JS e imagens).
// 2. Cuida da conta (criar, entrar, sair, esqueci a senha) usando o banco bd_login (api/conta.js).
// 3. Manda o exame para a IA, só para quem está logado (api/analisar.js).
//
// Variáveis de ambiente (configuradas no Windows, nunca escritas em arquivo):
//   GEMINI_API_KEY  chave da IA
//   DB_USUARIO, DB_SENHA  login do SQL Server (e, se precisar, DB_SERVIDOR, DB_INSTANCIA, DB_PORTA)

const path = require('path');
const express = require('express');
const { rotas: rotasConta } = require('./api/conta');
const analisar = require('./api/analisar');

const app = express();
const PORTA = process.env.PORT || 3000;

app.disable('x-powered-by'); // não conta para quem visita qual programa roda o servidor

// Lê o corpo dos pedidos em JSON. Limite maior por causa do exame (imagem/PDF em texto).
app.use(express.json({ limit: '6mb' }));

// ---------- Rotas da API ----------
app.use('/api', rotasConta);
app.post('/api/analisar', analisar);

// ---------- Páginas ----------
// Só estas pastas e páginas ficam públicas. O resto (servidor.js, banco/, api/, CLAUDE.md...)
// não aparece para quem visita, mesmo que alguém digite o endereço.
const PAGINAS = ['index.html', 'doencas.html', 'entrar.html', 'analise.html', 'aviso.html'];

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/imagens', express.static(path.join(__dirname, 'imagens')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/:pagina', function (req, res, proximo) {
  if (!PAGINAS.includes(req.params.pagina)) return proximo();
  res.sendFile(path.join(__dirname, req.params.pagina));
});

// Qualquer outro endereço: página não encontrada
app.use(function (req, res) {
  res.status(404).send('Página não encontrada. <a href="/">Voltar para o início</a>');
});

app.listen(PORTA, function () {
  console.log('Saudezen rodando em http://localhost:' + PORTA);
  if (!process.env.DB_USUARIO || !process.env.DB_SENHA) {
    console.log('Atenção: DB_USUARIO e DB_SENHA não estão definidas. O login não vai funcionar.');
  }
  if (!process.env.GEMINI_API_KEY) {
    console.log('Atenção: GEMINI_API_KEY não está definida. A análise do exame não vai funcionar.');
  }
});
