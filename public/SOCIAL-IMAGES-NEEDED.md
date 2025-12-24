# Social Sharing Images Setup 🎨

To complete the social sharing preview setup, add these colorful images to the `/public` folder:

## Required Images:

### 1. **og-image.png** (Open Graph / Facebook/iMessage) 📱
- **Size:** 1200 x 630 pixels
- **Format:** PNG or JPG
- **Usage:** Shows when sharing on Facebook, LinkedIn, Discord, **iMessage** (text messages)
- **Design for Kids:**
  - **Background:** Vibrant gradient from `#ff6b35` (orange) to `#ff4500` (red-orange)
  - **Main Visual:** Large, bold "BLOX FRUITS" text in white with thick black outline
  - **Subtitle:** "42 FRUITS | EXPERT COMBOS" in bright cyan/yellow
  - **Graphics:**
    - Colorful fruit icons (Dragon, Dough, Shadow) scattered around
    - Game controller emoji (🎮) or explosion effects (💥⚡)
    - Bright borders and drop shadows for "pop" effect
  - **Style:** Think Saturday morning cartoon - bright, energetic, fun!

### 2. **twitter-card.png** (Twitter Card)
- **Size:** 1200 x 630 pixels (same as OG image)
- **Format:** PNG or JPG
- **Usage:** Shows when sharing on Twitter/X
- **Note:** Can be the exact same as og-image.png

### 3. **apple-touch-icon.png** (iOS Home Screen Icon) 🍎
- **Size:** 180 x 180 pixels
- **Format:** PNG
- **Usage:** Shows when users add the app to their iOS home screen
- **Design for Kids:**
  - **Background:** Bright gradient (orange to red or cyan to blue)
  - **Icon:** Single fruit emoji or letter "B" in bold white with colored outline
  - **Border:** Rounded corners with bright border
  - **Keep it SIMPLE** - needs to be recognizable at small size

## Design Tips for Maximum Appeal:

### For the Share Preview (og-image.png):
✨ **Make it POP!** Kids love:
- Bright, contrasting colors (orange, cyan, yellow, lime green)
- Large, bold text they can read easily on phones
- Emoji and fun graphics (🍎🐉⚡💥🎮)
- Comic book style effects (POW! BOOM!)
- Gradients and glows

### Color Palette Suggestions:
```
Primary Orange: #ff6b35
Accent Cyan:    #00d9ff
Bright Yellow:  #ffd700
Lime Green:     #39ff14
Hot Pink:       #ff1493
Electric Blue:  #0080ff
```

### Text Layout Example:
```
[Top] 🎮 BLOX FRUITS COMBO GUIDE 🎮
[Center - HUGE] "42 FRUITS"
[Bottom] ⚡ DEADLY PVP COMBOS ⚡
```

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
