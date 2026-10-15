@echo off
title Shubhanshu Manjare Portfolio Server
echo ========================================================
echo   Launching Shubhanshu Manjare's Placement Portfolio
echo   http://localhost:3000
echo ========================================================
echo.
start http://localhost:3000
python -m http.server 3000
pause
