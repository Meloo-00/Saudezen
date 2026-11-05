-- =====================================================
-- Banco de dados de LOGIN (SQL Server)
-- Baseado na tela: E-mail, Senha, Logar, Esqueci minha senha, Criar conta
-- =====================================================

IF DB_ID('bd_login') IS NOT NULL
BEGIN
    ALTER DATABASE bd_login SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE bd_login;
END
GO

CREATE DATABASE bd_login;
GO

USE bd_login;
GO

-- -----------------------------------------------------
-- Tabela Usuario  (botão "Criar conta" / campos E-mail e Senha)
-- -----------------------------------------------------
CREATE TABLE Usuario (
    id_usuario     INT IDENTITY(1,1) PRIMARY KEY,
    nome           VARCHAR(100)  NOT NULL,
    email          VARCHAR(150)  NOT NULL UNIQUE,
    senha_hash     VARCHAR(255)  NOT NULL,   -- nunca guarde a senha pura
    ativo          BIT           NOT NULL DEFAULT 1,
    data_criacao   DATETIME      NOT NULL DEFAULT GETDATE()
);
GO

-- -----------------------------------------------------
-- Tabela RecuperarSenha  (botão "Esqueci minha senha")
-- -----------------------------------------------------
CREATE TABLE RecuperarSenha (
    id_recuperacao INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario     INT           NOT NULL,
    token          VARCHAR(100)  NOT NULL UNIQUE,
    data_criacao   DATETIME      NOT NULL DEFAULT GETDATE(),
    data_expiracao DATETIME      NOT NULL,
    usado          BIT           NOT NULL DEFAULT 0,
    CONSTRAINT FK_Recuperar_Usuario FOREIGN KEY (id_usuario)
        REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);
GO

-- -----------------------------------------------------
-- Tabela LogLogin  (histórico de tentativas do botão "Logar")
-- -----------------------------------------------------
CREATE TABLE LogLogin (
    id_log         INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario     INT           NULL,
    email_tentado  VARCHAR(150)  NOT NULL,
    sucesso        BIT           NOT NULL,
    data_tentativa DATETIME      NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_Log_Usuario FOREIGN KEY (id_usuario)
        REFERENCES Usuario(id_usuario) ON DELETE SET NULL
);
GO

-- -----------------------------------------------------
-- Procedure: Criar conta
-- -----------------------------------------------------
CREATE PROCEDURE sp_CriarConta
    @nome       VARCHAR(100),
    @email      VARCHAR(150),
    @senha_hash VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    IF EXISTS (SELECT 1 FROM Usuario WHERE email = @email)
    BEGIN
        RAISERROR('E-mail já cadastrado.', 16, 1);
        RETURN;
    END
    INSERT INTO Usuario (nome, email, senha_hash)
    VALUES (@nome, @email, @senha_hash);
    SELECT SCOPE_IDENTITY() AS id_usuario;
END
GO

-- -----------------------------------------------------
-- Procedure: Logar
-- Devolve o hash do usuário; o back-end compara com a senha digitada
-- -----------------------------------------------------
CREATE PROCEDURE sp_Logar
    @email VARCHAR(150)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT id_usuario, nome, email, senha_hash
    FROM Usuario
    WHERE email = @email AND ativo = 1;
END
GO

-- -----------------------------------------------------
-- Procedure: registrar tentativa de login
-- -----------------------------------------------------
CREATE PROCEDURE sp_RegistrarLogin
    @email   VARCHAR(150),
    @sucesso BIT
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO LogLogin (id_usuario, email_tentado, sucesso)
    VALUES ((SELECT id_usuario FROM Usuario WHERE email = @email), @email, @sucesso);
END
GO

-- -----------------------------------------------------
-- Procedure: Esqueci minha senha (gera o pedido, token vem do back-end)
-- -----------------------------------------------------
CREATE PROCEDURE sp_SolicitarRecuperacao
    @email VARCHAR(150),
    @token VARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @id INT = (SELECT id_usuario FROM Usuario WHERE email = @email AND ativo = 1);
    IF @id IS NULL RETURN;
    INSERT INTO RecuperarSenha (id_usuario, token, data_expiracao)
    VALUES (@id, @token, DATEADD(HOUR, 1, GETDATE()));
END
GO

-- -----------------------------------------------------
-- Procedure: redefinir a senha usando o token
-- -----------------------------------------------------
CREATE PROCEDURE sp_RedefinirSenha
    @token         VARCHAR(100),
    @nova_senha_hash VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @id INT = (
        SELECT id_usuario FROM RecuperarSenha
        WHERE token = @token AND usado = 0 AND data_expiracao > GETDATE()
    );
    IF @id IS NULL
    BEGIN
        RAISERROR('Token inválido ou expirado.', 16, 1);
        RETURN;
    END
    UPDATE Usuario SET senha_hash = @nova_senha_hash WHERE id_usuario = @id;
    UPDATE RecuperarSenha SET usado = 1 WHERE token = @token;
END
GO

-- -----------------------------------------------------
-- Teste rápido (o hash abaixo é só de exemplo)
-- -----------------------------------------------------
EXEC sp_CriarConta 'Usuário Teste', 'teste@email.com', 'HASH_DE_EXEMPLO';
EXEC sp_Logar 'teste@email.com';
GO
