// Conta da pessoa (login), usada em todas as páginas.
//
// Quem cuida das contas é o Supabase (um serviço pronto de login). Assim o Saudezen
// nunca guarda senha nenhuma: o Supabase guarda, criptografada.
//
// As chaves do Supabase NÃO ficam neste arquivo. O site pergunta para a nossa função
// /api/config (na Vercel), que lê as chaves das variáveis de ambiente.
// Por isso o login só funciona no site publicado, não abrindo o arquivo direto no computador.

const Conta = (function () {
  // Versão fixa da biblioteca do Supabase (versão fixa = o site não quebra se sair uma versão nova)
  const ENDERECO_SUPABASE = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';

  let promessaCliente = null; // guarda o "pedido" do cliente, para não carregar duas vezes

  // Carrega um arquivo .js de outro site e espera ele terminar
  function carregarScript(endereco) {
    return new Promise(function (resolver, falhar) {
      const script = document.createElement('script');
      script.src = endereco;
      script.onload = resolver;
      script.onerror = function () { falhar(new Error('script')); };
      document.head.appendChild(script);
    });
  }

  // Devolve o "cliente" do Supabase: o objeto que faz login, cadastro, sair etc.
  // Se o login não estiver configurado (ou o site estiver aberto direto do computador), devolve null.
  function obterCliente() {
    if (promessaCliente) return promessaCliente;

    promessaCliente = (async function () {
      if (location.protocol === 'file:') return null;
      try {
        const resposta = await fetch('/api/config');
        if (!resposta.ok) return null;
        const config = await resposta.json();
        if (!config.supabaseUrl || !config.supabaseChave) return null;

        if (!window.supabase) await carregarScript(ENDERECO_SUPABASE);
        return window.supabase.createClient(config.supabaseUrl, config.supabaseChave);
      } catch (erro) {
        return null;
      }
    })();
    return promessaCliente;
  }

  // Devolve a sessão (quem está logado) ou null
  async function obterSessao() {
    const cliente = await obterCliente();
    if (!cliente) return null;
    const { data } = await cliente.auth.getSession();
    return data.session;
  }

  // Jeito rápido de saber se PARECE que a pessoa está logada, sem carregar o Supabase:
  // o Supabase guarda a sessão no navegador com um nome tipo "sb-xxxx-auth-token".
  // Serve só para trocar "Entrar" por "Sua conta" no menu. A conferência de verdade
  // acontece no servidor, antes de usar a IA.
  function pareceLogado() {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const nome = localStorage.key(i);
        if (nome.startsWith('sb-') && nome.endsWith('-auth-token')) return true;
      }
    } catch (erro) { /* navegador sem localStorage: segue como não logado */ }
    return false;
  }

  // No menu, o link "Entrar" vira "Sua conta" para quem já entrou
  function atualizarMenu() {
    const link = document.querySelector('[data-conta]');
    if (link && pareceLogado()) link.textContent = 'Sua conta';
  }

  atualizarMenu();

  return { obterCliente: obterCliente, obterSessao: obterSessao, pareceLogado: pareceLogado };
})();
