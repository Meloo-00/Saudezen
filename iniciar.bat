@echo off
rem Liga o site do Saudezen: de dois cliques neste arquivo.
rem Para desligar, feche esta janela (ou aperte Ctrl + C).
title Saudezen - servidor
cd /d "%~dp0"

if not exist node_modules (
  echo Instalando as bibliotecas do site, so na primeira vez...
  call npm.cmd install
)

rem Abre o navegador 2 segundos depois, quando o servidor ja estiver ligado
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:3000"

call npm.cmd start
pause
