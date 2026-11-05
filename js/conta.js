// Conta da pessoa (login), usada em todas as páginas.
//
// Quem cuida das contas é o nosso servidor (servidor.js + api/conta.js), que guarda os
// dados no banco bd_login (SQL Server). Esta parte só conversa com ele.
// Por isso o login só funciona com o servidor ligado (npm start), não abrindo o arquivo
// direto no computador.

const Conta = (function () {

  // Manda um pedido para a API da conta e devolve { ok, status, dados }.
  // Exemplo: Conta.pedir('/api/entrar', { email: 'ana@email.com', senha: '...' })
  // Se o servidor não responder (desligado, sem internet), devolve status 0.
  async function pedir(endereco, corpo) {
    try {
      const resposta = await fetch(endereco, {
        method: corpo ? 'POST' : 'GET',
        headers: corpo ? { 'Content-Type': 'application/json' } : {},
        body: corpo ? JSON.stringify(corpo) : undefined
      });
      let dados = {};
      try { dados = await resposta.json(); } catch (erro) { /* resposta sem JSON */ }
      return { ok: resposta.ok, status: resposta.status, dados: dados };
    } catch (erro) {
      return { ok: false, status: 0, dados: {} };
    }
  }

  // O login funciona? Só com o servidor ligado (não em file://)
  function loginDisponivel() {
    return location.protocol !== 'file:';
  }

  // Devolve quem está logado ({ nome, email }) ou null. Pergunta ao servidor.
  async function obterSessao() {
    if (!loginDisponivel()) return null;
    const resposta = await pedir('/api/eu');
    return resposta.ok ? resposta.dados.usuario : null;
  }

  // Jeito rápido de saber se PARECE que a pessoa está logada, sem esperar o servidor:
  // ao entrar, o servidor cria o cookie "logado=1". Serve só para trocar "Entrar" por
  // "Sua conta" no menu. A conferência de verdade acontece no servidor, antes de usar a IA.
  function pareceLogado() {
    return document.cookie.split(';').some(function (cookie) {
      return cookie.trim() === 'logado=1';
    });
  }

  // No menu, o link "Entrar" vira "Sua conta" para quem já entrou
  function atualizarMenu() {
    const link = document.querySelector('[data-conta]');
    if (link) link.textContent = pareceLogado() ? 'Sua conta' : 'Entrar';
  }

  atualizarMenu();

  return {
    pedir: pedir,
    loginDisponivel: loginDisponivel,
    obterSessao: obterSessao,
    pareceLogado: pareceLogado,
    atualizarMenu: atualizarMenu
  };
})();
