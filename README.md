# FullHD Photo Carousel

A lightweight static web application that displays a fullscreen rotating carousel of FullHD images. Designed to run smoothly on Azure Static Web Apps or any static web hosting platform.

## Features

- Automatic fullscreen image rotation
- Detects the number of available images dynamically (1.jpg, 2.jpg, etc.)
- No frameworks or build steps required
- Mobile and desktop responsive

## How It Works

On page load, the app attempts to load images from the `images/` folder in numerical order (e.g. `1.jpg`, `2.jpg`, ...). When it fails to load the next image (e.g. missing `6.jpg`), it stops and rotates through the successfully loaded images.

## Project Structure
<pre lang="text"><code>
.
├── index.html          # Main HTML page
├── script.js           # JavaScript logic for loading and rotating images
├── style.css           # Basic fullscreen styling
└── images/             # Folder with images (1.jpg, 2.jpg, …)
</code></pre>
## Hosting on Azure Static Web Apps

1. Choose the **Custom** preset when setting up Azure Static Web App.
2. Set the following values:
   - **App location**: `.`
   - **API location**: *(leave empty)*
   - **Output location**: `.`
3. Use the provided GitHub Actions workflow or deploy manually.

> ℹ️ The app does not require any backend or build process.

## Adding Your Images

Place your FullHD images (1920x1080) in the `images/` directory.
Ensure they are named numerically:
<pre lang="text"><code>
images/
├── 1.jpg
├── 2.jpg
├── 3.jpg
└── …
</code></pre>
## Configuration

To change the carousel interval, edit the `startCarousel()` function in `script.js`:
```javascript
startCarousel(5000); // Interval in milliseconds
