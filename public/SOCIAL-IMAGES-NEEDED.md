# Social Sharing Images Setup

To complete the social sharing preview setup, add these images to the `/public` folder:

## Required Images:

### 1. **og-image.png** (Open Graph / Facebook)
- **Size:** 1200 x 630 pixels
- **Format:** PNG or JPG
- **Usage:** Shows when sharing on Facebook, LinkedIn, Discord, iMessage
- **Recommended content:** App logo/title with "42 Fruits | Expert Combos" text over a cool Blox Fruits themed background

### 2. **twitter-card.png** (Twitter Card)
- **Size:** 1200 x 630 pixels (same as OG image)
- **Format:** PNG or JPG
- **Usage:** Shows when sharing on Twitter/X
- **Note:** Can be the same as og-image.png

### 3. **apple-touch-icon.png** (iOS Home Screen)
- **Size:** 180 x 180 pixels
- **Format:** PNG
- **Usage:** Shows when users add the app to their iOS home screen
- **Recommended content:** App logo/icon centered on transparent or solid background

## Design Tips:

- Use dark theme colors (#0d1117 background) to match the app
- Include recognizable Blox Fruits imagery (Dragon, Dough, etc.)
- Keep text large and readable on mobile
- Use high contrast colors for visibility
- Test on actual mobile devices before finalizing

## Quick Setup (Temporary):

For now, the app will work without these images. When shared, it will show:
- Default title and description (already set in HTML)
- No preview image until you add the files above

## How to Add:

1. Create the images following the specs above
2. Save them in the `/public` folder with exact names:
   - `og-image.png`
   - `twitter-card.png`
   - `apple-touch-icon.png`
3. Rebuild the app: `npm run build`
4. Deploy and test sharing on various platforms

The meta tags are already configured in `index.html` and ready to use!
