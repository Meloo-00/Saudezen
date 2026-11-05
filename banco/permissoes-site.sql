-- =====================================================
-- Permissões do site no banco bd_login
-- Rode DEPOIS do bd_login.sql (e de novo sempre que recriar o banco,
-- porque o bd_login.sql apaga o banco e as permissões somem junto).
--
-- O site entra no banco com o login "saudezen_app" (criado uma vez só,
-- com a senha guardada na variável de ambiente DB_SENHA).
-- Ele só pode rodar as procedures e ler o LogLogin: não apaga nem altera tabelas.
-- =====================================================

USE bd_login;
GO

IF NOT EXISTS (SELECT 1 FROM sys.database_principals WHERE name = 'saudezen_app')
    CREATE USER saudezen_app FOR LOGIN saudezen_app;
GO

GRANT EXECUTE ON sp_CriarConta           TO saudezen_app;
GRANT EXECUTE ON sp_Logar                TO saudezen_app;
GRANT EXECUTE ON sp_RegistrarLogin       TO saudezen_app;
GRANT EXECUTE ON sp_SolicitarRecuperacao TO saudezen_app;
GRANT EXECUTE ON sp_RedefinirSenha       TO saudezen_app;
GRANT SELECT  ON LogLogin                TO saudezen_app;  -- contar senhas erradas (bloqueio)
GO
