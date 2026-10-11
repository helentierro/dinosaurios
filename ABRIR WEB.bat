@echo off
REM ─────────────────────────────────────────────────────────────
REM  Abre la web de Dinosaurios en el navegador.
REM  Levanta un servidor local que imita cómo la sirve GitHub
REM  Pages (bajo el prefijo /dinosaurios/).
REM ─────────────────────────────────────────────────────────────
cd /d "%~dp0dist"
start "" /min node "%~dp0servir.mjs"
timeout /t 2 /nobreak >nul
start "" "http://localhost:8790/dinosaurios/"
