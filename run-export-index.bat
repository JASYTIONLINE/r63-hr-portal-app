@echo off
cd /d "%~dp0"
echo Running project tree export...
node ".\assets\js\export-index-tree.mjs"
pause
