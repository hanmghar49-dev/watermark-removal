# CleanPix Video — free static starter

This is a browser-based video corner-cleanup demo. It uses FFmpeg.wasm's `delogo` filter; it is **not AI inpainting** and does not automatically detect a watermark. The user selects a corner and approximate region size.

## Run it
- Open `index.html` in a modern browser while connected to the internet. The FFmpeg browser libraries are loaded from public CDNs.
- For best results, serve it from a static HTTPS host (GitHub Pages). Browsers may restrict some features when opening a local file directly.
- Test with a short MP4 first. FFmpeg.wasm can be memory-intensive and may fail on large/long videos.

## Publish on GitHub Pages
1. Create a GitHub repository, e.g. `cleanpix-video`.
2. Upload `index.html` and this README to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then Save.
6. Wait for the deployment to finish and open the URL shown in Pages settings.

## Important
- This static app uses no API key and does not intentionally upload user videos to a server.
- FFmpeg assets load from CDNs, so internet access is needed.
- Do not use it to remove copyright/ownership marks from content without permission.
- To make this a genuine AI automatic remover, you would need a compatible video watermark detector/mask generator and an inpainting model that can run within browser memory. That is not included in this starter.
