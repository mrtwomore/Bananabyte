# Hero Carousel Images

This folder contains the images used in the website's homepage hero carousel.

## How to Update the Carousel

1. **Add your new images to this folder (`public/images/hero/`)**.
   - High quality landscape images work best (recommended resolution: 1920x1080)
   - Optimize images for web to maintain good performance

2. **Update the image list in the carousel component**:
   - Open `components/HeroCarousel.js`
   - Find the `images` array (around line 9)
   - Add your new image paths following the existing pattern:
   ```javascript
   const images = [
     '/images/hero/_DSC4181.jpg',
     '/images/hero/LEL_headshots 5.JPG',
     '/images/hero/Still 2024-07-17 191245_1.3.1.JPG',
     '/images/hero/your-new-image.jpg',  // Add new images here
   ];
   ```

3. **Adjusting carousel settings** (optional):
   - To change the rotation speed, modify the `10000` value (in milliseconds) in the `setInterval` function
   - For transition effects, check the CSS in `styles/HeroCarousel.module.css`

The carousel will automatically rotate through all images in the array with a smooth fade transition every 10 seconds. 