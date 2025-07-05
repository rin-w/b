ImageMagick command is typically used to batch convert all screenshots or other media into its compressed versions.

We can run a batch script for PNGs like: 

```bat
for /r %i in (*.png) do magick "%i" -define webp:lossless=true "%~dpi%~ni.webp"
```

This will create WEBP versions of PNGs that exist in every subdirectories right from this directory.

WEBP animations should replace GIFs, but since reduced motion is preferable, it should be used sparingly. Instead, WEBMs should be used for demonstrations that require visual aid in motion.