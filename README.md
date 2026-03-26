# ComfyUI Linear Theme

A premium dark theme for ComfyUI. Ultra-clean, minimal, and optimized for maximum FPS.

## Features

- **Complete UI overhaul** — nodes, widgets, sidebars, dialogs, menus, buttons, inputs, scrollbars, tooltips
- **FPS Boost** — no glassmorphism, no transitions, no shadows. Idle throttle, skip rendering at low zoom, optimized execution glow
- **Snap Guides** — alignment lines when dragging nodes
- **Theme Editor** — right-click > Linear Theme to customize everything live
- **Execution glow** — running nodes highlight purple, completed flash green, errors flash red
- **Minimal groups** — thin border + dot + title, no blur or gradients
- **Collapsed nodes** — full title always visible with color-coded dots
- **Styled Manager** — ComfyUI Manager dialog fully themed
- **Context menu** — clean, borderless, with proper submenu spacing
- Color palette for LiteGraph canvas — nodes, links, slots
- Loads automatically as a custom node extension

## Theme Editor

Built-in floating panel to tweak the theme live:

- **Canvas** — background color, dot grid, node radius, connection width, link color, group color, FPS boost toggle, snap guides toggle
- **Nodes** — body, title, shadow, outline, widget colors
- **Slots** — per-type connection colors (CLIP, MODEL, IMAGE, etc.)
- **UI** — surfaces, borders, text colors, bars color, accent colors
- Per-field reset, save/load presets, persist across sessions

## Install

### Option 1: Clone into custom_nodes

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/Arroz-11/ComfyUI-Linear-Theme.git
```

### Option 2: Manual

1. Download this repo
2. Copy the folder into `ComfyUI/custom_nodes/`
3. Restart ComfyUI

### Color palette (optional)

Import `linear_dark.json` in **Settings > Appearance > Color Theme > Import** for the full canvas color palette.

## License

MIT
