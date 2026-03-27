# ComfyUI Linear Theme — Project Notes

## Architecture
- Single file extension: `js/linear_theme.js`
- Injected via `comfyApp.registerExtension()` → `setup()`
- CSS is a template literal string injected as a `<style>` element
- LiteGraph canvas properties set programmatically in JS
- Sync target: `C:\Users\agstn\Documents\ComfyUI\custom_nodes\comfyui-linear-theme\js\linear_theme.js`
- Version: 2.0.0

## KNOWN BUGS — DO NOT RE-INTRODUCE

### Bug #1: Font Falls to Monospace (CRITICAL)

**Problem:**
ComfyUI's native CSS chain for fonts is fragile:
- `body` gets `font-family: Inter, Arial, sans-serif`
- A Tailwind utility `[&_*]:!font-inter` on the Vue app root forces Inter on descendants
- BUT `<textarea>` browser default is monospace (user agent stylesheet)
- AND the litegraph context menu (`.litecontextmenu`) is appended to `body`, outside the Vue app container
- When the CSS inheritance chain breaks (race condition, custom node interference), textareas fall to monospace and the context menu loses styling

**Solution (DO NOT REMOVE):**
We force `font-family: 'Inter', Arial, sans-serif !important` directly on:
- `body, body.litegraph`
- `textarea`, `input`, `.comfy-multiline-input`
- `.litemenu-entry`, `.litemenu-title`

We also force full context menu styling on `.litegraph.litecontextmenu` because litegraph context menu CSS selectors require `.litegraph` class ancestry.

**References:**
- [PR #711](https://github.com/comfyanonymous/ComfyUI/pull/711) — body needs `.litegraph` class
- [Issue #11121](https://github.com/Comfy-Org/ComfyUI/issues/11121) — textarea font not applied in Nodes 2.0
- [Issue #6481](https://github.com/Comfy-Org/ComfyUI_frontend/issues/6481) — Vue nodes font size

### Bug #2: Canvas Background Changes Color at Certain Zoom Levels (CRITICAL)

**Problem:**
When `BACKGROUND_IMAGE` is empty (`""`), LiteGraph does not consistently use `CLEAR_BACKGROUND_COLOR` to fill the canvas at all zoom levels. At certain zoom levels (typically >149%), the canvas falls back to a different color (usually the body background or LiteGraph default), causing a visible color mismatch.

This happens because LiteGraph uses the `BACKGROUND_IMAGE` pattern tile to fill the canvas background. When the image is empty, it has no pattern to draw and the behavior becomes inconsistent across zoom levels.

**Solution (DO NOT REMOVE):**
NEVER set `BACKGROUND_IMAGE` to empty string `""`. Instead, when dot grid opacity is 0 (no dots), create a solid 1x1 pixel tile of the background color. This ensures LiteGraph always has a valid pattern to draw.

```js
// CORRECT — solid 1px tile
const solid = document.createElement("canvas");
solid.width = 1; solid.height = 1;
const ctx = solid.getContext("2d");
ctx.fillStyle = "#0d0d0d";
ctx.fillRect(0, 0, 1, 1);
currentDotDataUrl = solid.toDataURL();

// WRONG — causes bg color mismatch at certain zoom levels
currentDotDataUrl = "";
```

**References:**
- [litegraph.js Issue #276](https://github.com/jagenjo/litegraph.js/issues/276) — Background changes color when zooming in and out
- [litegraph.js Issue #468](https://github.com/jagenjo/litegraph.js/issues/468) — Background turns black when zooming out
- [ComfyUI Issue #741](https://github.com/comfyanonymous/ComfyUI/issues/741) — White theme is not white (canvas bg issue)

### Bug #3: PrimeVue Buttons Default to Blue

**Problem:**
PrimeVue uses `--p-button-primary-*` CSS variables internally. If not defined, buttons default to blue.

**Solution:**
We define all `--p-button-primary-*` variables in `:root` to force ghost/outline style. Also override Tailwind compiled classes `bg-primary-background` and `hover:bg-primary-background-hover` directly in CSS since they are compiled statically and don't read CSS variables at runtime.

### Bug #4: Floating Actionbar Invisible When Undocked

**Problem:**
When the actionbar (Run button area) is undocked/floated, it becomes invisible because:
1. ComfyUI adds Tailwind class `bg-transparent` which overrides our background
2. The `contain: layout style paint` CSS property on `.actionbar-container` creates a new containing block that breaks `position: fixed` positioning of the child `.actionbar` element

**Solution:**
- `actionbar-container` must have `contain: none !important` (DO NOT add `contain` to it)
- Use JS MutationObserver to force `background: #131313` on the actionbar when Tailwind classes change
- Use `setInterval` for hover fix on top bar buttons (MutationObserver on `document.body` is too expensive for FPS)

## Key CSS Variables for Context Menu (native ComfyUI)
- `--border-default` → separator lines (we define as `#27272a`)
- `--content-hover-fg` → hover text (we define as `#ffffff`)
- `--contrast-mix-color` → computed hover backgrounds (we define as `#f4f4f5`)
- `--comfy-menu-bg` → menu background

## Tailwind Overrides Required
These Tailwind classes compile to static values and CANNOT be overridden via CSS variables:
- `bg-primary-background` → must override the class directly with `!important`
- `hover:bg-primary-background-hover` → same
- `bg-secondary-background` → same
- `hover:bg-secondary-background-hover` → same
- `bg-comfy-menu-bg` → same
- `bg-base-background` → same
- `bg-transparent` on `.actionbar` → must use JS to override

## Color Palette (v2.0)
- Background: `#0d0d0d`
- Bars/panels: `#131313`
- Nodes/surface: `#1a1a1a`
- Border: `#1e1e22`
- Text primary: `#e4e4e7`
- Text secondary: `#a1a1aa`
- Text muted: `#71717a`

## Design Direction
- Premium dark theme — unique identity, not a copy of any specific app
- No glassmorphism (removed for FPS)
- No transitions, no backdrop-filter, no box-shadows
- All buttons ghost/outline (dark bg, no border until hover)
- Solid backgrounds only, no transparency
- FPS Boost: idle throttle, skip rendering at low zoom, no shadowBlur
