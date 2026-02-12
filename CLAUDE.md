# ComfyUI Linear Theme — Project Notes

## Architecture
- Single file extension: `js/linear_theme.js`
- Injected via `comfyApp.registerExtension()` → `setup()`
- CSS is a template literal string injected as a `<style>` element
- LiteGraph canvas properties set programmatically in JS
- Sync target: `C:\Users\agstn\Documents\ComfyUI\resources\ComfyUI\custom_nodes\linear_theme\js\linear_theme.js`

## Critical Bug Fix: Font & Context Menu

### Problem
ComfyUI's native CSS chain for fonts is fragile:
- `body` gets `font-family: Inter, Arial, sans-serif`
- A Tailwind utility `[&_*]:!font-inter` on the Vue app root forces Inter on descendants
- BUT `<textarea>` browser default is monospace (user agent stylesheet)
- AND the litegraph context menu (`.litecontextmenu`) is appended to `body`, outside the Vue app container
- When the CSS inheritance chain breaks (race condition, custom node interference), textareas fall to monospace and the context menu loses styling

### Solution (DO NOT REMOVE)
We force `font-family: 'Inter', Arial, sans-serif !important` directly on:
- `body, body.litegraph`
- `textarea`, `input`, `.comfy-multiline-input`
- `.litemenu-entry`, `.litemenu-title`

We also force full context menu styling on `.litegraph.litecontextmenu` (border-radius, separators, hover, etc.) because litegraph context menu CSS selectors require `.litegraph` class ancestry.

### Key CSS Variables for Context Menu (native ComfyUI)
- `--border-default` → separator lines (we define as `#27272a`)
- `--content-hover-fg` → hover text (we define as `#ffffff`)
- `--contrast-mix-color` → computed hover backgrounds (we define as `#f4f4f5`)
- `--comfy-menu-bg` → menu background

### References
- [PR #711](https://github.com/comfyanonymous/ComfyUI/pull/711) — body needs `.litegraph` class
- [Issue #11121](https://github.com/Comfy-Org/ComfyUI/issues/11121) — textarea font not applied in Nodes 2.0
- [Issue #6481](https://github.com/Comfy-Org/ComfyUI_frontend/issues/6481) — Vue nodes font size

## PrimeVue Button Blue Prevention
PrimeVue uses `--p-button-primary-*` CSS variables internally. If not defined, buttons default to blue.
We define all `--p-button-primary-*` variables in `:root` to force ghost/outline style.

## Design Direction
- Aesthetic: Linear / Vercel / Raycast — pure black, minimal, zinc scale
- Dot grid background (not crosses) — drawn via `onDrawBackground` callback
- All buttons are ghost/outline (dark bg, subtle border, gray text, white on hover)
- No solid white or solid colored buttons anywhere
