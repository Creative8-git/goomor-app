@echo off
echo Starting Backend...
start "Backend" cmd /k "cd /d "%~dp0Backend" && node server.js"

echo Starting Frontend...
start "Frontend" cmd /k "cd /d "%~dp0Frontend" && npm start"

echo Both servers starting. Open http://localhost:3000 in your browser.
