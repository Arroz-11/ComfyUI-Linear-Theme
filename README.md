# ComfyUI Linear Theme

A premium dark theme for ComfyUI. Pure black aesthetic, FPS-optimized, fully customizable.

Inspired by Linear, Vercel, and Raycast.

![Canvas](screenshots/01-canvas.png)

## Features

### Visual
- **Complete UI overhaul** — nodes, widgets, sidebars, dialogs, menus, buttons, inputs, scrollbars, tooltips
- **Pure black palette** — zinc scale, no glassmorphism, no gradients, no transitions
- **Chevron arrows** on connection inputs — clean directional markers, color-matched per slot type
- **Minimal groups** — thin border + dot + title, no blur, no shadows
- **Collapsed nodes** — full title always visible, color-coded dots based on connected inputs
- **Execution glow** — running nodes highlight purple, completed flash green, errors flash red
- **Styled Manager** — ComfyUI Manager dialog fully themed

### Performance
- **FPS Boost** — idle throttle, low-zoom render skip, no shadowBlur, straight links
- **Snap Guides** — alignment lines when dragging nodes (toggleable)
- **Lightweight** — single JS file, no dependencies, no build step

### Customization
- **Theme Editor** — right-click → Linear Theme to tweak everything live
  - **Canvas** — background, dot grid, node radius, connection width, link color, group color
  - **Nodes** — body, title, shadow, outline, widget colors
  - **Slots** — per-type connection colors (CLIP, MODEL, IMAGE, etc.)
  - **UI** — surfaces, borders, text, bars, accents
- Per-field reset, save/load presets, persists across sessions

![Theme Editor and menus](screenshots/02-theme-editor.png)

## Screenshots

### ComfyUI Manager — fully themed
![Manager dialog](screenshots/03-manager.png)

### Custom Nodes Manager
![Custom Nodes Manager](screenshots/04-custom-nodes.png)

## Install

### Option 1: ComfyUI Manager (recommended)
Search for **Linear Theme** in the Manager and install.

### Option 2: Clone
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/Arroz-11/ComfyUI-Linear-Theme.git
```

Restart ComfyUI after installing.

### Optional: canvas color palette
Import `linear_dark.json` in **Settings → Appearance → Color Theme → Import** for the full LiteGraph canvas palette (slot colors, link colors, node body, etc.).

## License

MIT
