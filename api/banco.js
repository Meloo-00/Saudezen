// Conexão com o banco de dados bd_login (SQL Server), criado pelo script banco/bd_login.sql.
//
// Os dados da conexão NÃO ficam neste arquivo: vêm das variáveis de ambiente do computador
// (DB_USUARIO, DB_SENHA etc.). Assim a senha do banco nunca vai para o GitHub.

const sql = require('mssql');

const config = {
  server: process.env.DB_SERVIDOR || 'localhost',
  database: process.env.DB_NOME || 'bd_login',
  user: process.env.DB_USUARIO,
  password: process.env.DB_SENHA,
  options: {
    // Instância com nome (o SQL Server Express se chama "SQLEXPRESS").
    // Se DB_PORTA estiver definida, usamos a porta e ignoramos o nome.
    instanceName: process.env.DB_PORTA ? undefined : (process.env.DB_INSTANCIA || 'SQLEXPRESS'),
    encrypt: false,              // banco no próprio computador: não precisa de certificado
    trustServerCertificate: true
  },
  port: process.env.DB_PORTA ? Number(process.env.DB_PORTA) : undefined,
  pool: { max: 5, min: 0, idleTimeoutMillis: 30000 }
};

let promessaConexao = null; // guarda a conexão, para não abrir uma nova a cada pedido

// Devolve a conexão com o banco (abre na primeira vez)
function conectar() {
  if (!promessaConexao) {
    promessaConexao = sql.connect(config).catch(function (erro) {
      promessaConexao = null; // deu errado: tenta de novo no próximo pedido
      throw erro;
    });
  }
  return promessaConexao;
}

// Roda uma procedure com parâmetros. Exemplo:
//   procedure('sp_Logar', { email: [sql.VarChar(150), 'ana@email.com'] })
// Os valores vão como PARÂMETROS, nunca colados no texto do SQL: isso impede SQL injection.
async function procedure(nome, parametros) {
  const conexao = await conectar();
  const pedido = conexao.request();
  for (const [campo, [tipo, valor]] of Object.entries(parametros)) {
    pedido.input(campo, tipo, valor);
  }
  const resultado = await pedido.execute(nome);
  return resultado.recordset || [];
}

// Quantas vezes esse e-mail errou a senha nos últimos minutos (tabela LogLogin)
async function errosRecentes(email, minutos) {
  const conexao = await conectar();
  const resultado = await conexao.request()
    .input('email', sql.VarChar(150), email)
    .input('minutos', sql.Int, minutos)
    .query(`SELECT COUNT(*) AS total FROM LogLogin
            WHERE email_tentado = @email AND sucesso = 0
              AND data_tentativa > DATEADD(MINUTE, -@minutos, GETDATE())`);
  return resultado.recordset[0].total;
}

module.exports = { sql: sql, procedure: procedure, errosRecentes: errosRecentes };
