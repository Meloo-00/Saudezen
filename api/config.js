// Função da Vercel que entrega ao site o endereço e a chave PÚBLICA do Supabase (o serviço de login).
//
// Por que existe: a regra do projeto é nunca escrever chaves nos arquivos. Assim elas ficam só
// nas variáveis de ambiente da Vercel (SUPABASE_URL e SUPABASE_ANON_KEY).
//
// A "anon key" do Supabase foi feita para ficar no navegador: sozinha ela não dá acesso a nada
// além do que as regras do Supabase permitem (criar conta e entrar). NUNCA coloque aqui a
// "service_role key", essa sim é secreta.

module.exports = function handler(req, res) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseChave = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseChave) {
    return res.status(503).json({ erro: 'login-desligado' });
  }

  // Pode guardar por 1 hora no navegador: a configuração quase nunca muda
  res.setHeader('Cache-Control', 'public, max-age=3600');
  return res.status(200).json({ supabaseUrl: supabaseUrl, supabaseChave: supabaseChave });
};
