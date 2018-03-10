@ECHO OFF
SETLOCAL ENABLEEXTENSIONS
PUSHD "%~dp0" >NUL && SET parent=%CD% && POPD >NUL

WHERE node
IF %ERRORLEVEL% NEQ 0 (
  START https://nodejs.org/
  EXIT
)

CD %parent%\..\src
IF NOT EXIST "node_modules" npm install

START "" /B node bin\server.js
TIMEOUT 2 >NULL
START http://localhost:3000/
PAUSE
