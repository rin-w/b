for /r %%i in (*.png) do magick "%%i" -define webp:lossless=true "%%~dpi%%~ni.webp"
pause
