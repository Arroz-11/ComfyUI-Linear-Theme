import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

const comfyApp = app || window.comfyAPI?.app?.app;

/*
 * Linear Dark Theme v2 for ComfyUI
 * Full remake — ~200 CSS variables, Framer Motion animations, exhaustive selectors.
 * Aesthetic: Linear / Vercel / Raycast — pure black, minimal, zinc scale.
 */

const THEME = {
    CLEAR_BACKGROUND_COLOR: "#000000",
    NODE_TITLE_COLOR: "#ffffff",
    NODE_SELECTED_TITLE_COLOR: "#ffffff",
    NODE_TEXT_COLOR: "#ffffff",
    NODE_DEFAULT_COLOR: "#141414",
    NODE_DEFAULT_BGCOLOR: "#141414",
    NODE_DEFAULT_BOXCOLOR: "#ffffff",
    NODE_BOX_OUTLINE_COLOR: "#ffffff",
    NODE_BYPASS_BGCOLOR: "#7737AA",
    NODE_ERROR_COLOUR: "#ef4444",
    DEFAULT_SHADOW_COLOR: "rgba(0,0,0,0.15)",
    WIDGET_BGCOLOR: "#141414",
    WIDGET_OUTLINE_COLOR: "#141414",
    WIDGET_TEXT_COLOR: "#ffffff",
    WIDGET_SECONDARY_TEXT_COLOR: "#a1a1aa",
    LINK_COLOR: "#52525b",
    EVENT_LINK_COLOR: "#a8a29e",
    SLOT_COLORS: {
        CLIP: "#FACC15",
        CLIP_VISION: "#67E8F9",
        CLIP_VISION_OUTPUT: "#ad7452",
        CONDITIONING: "#FB923C",
        CONTROL_NET: "#34D399",
        IMAGE: "#60A5FA",
        LATENT: "#F0ABFC",
        MASK: "#4ADE80",
        MODEL: "#A78BFA",
        STYLE_MODEL: "#C2FFAE",
        VAE: "#F87171",
        TAESD: "#D4A955",
        PIPE_LINE: "#7737AA",
        PIPE_LINE_SDXL: "#7737AA",
        INT: "#29699C",
        X_Y: "#38291f",
        XYPLOT: "#74DA5D",
        LORA_STACK: "#94dccd",
        CONTROL_NET_STACK: "#94dccd",
        FAST_MODEL_LOADER: "#ffd399",
        SAMPLING: "#60A5FA"
    }
};

/* ═══════════════════════════════════════════════════════════════════
   CSS — Variables + Selectors + Animations
   ═══════════════════════════════════════════════════════════════════ */

const CSS = `
/* ============================================
   Linear Dark v2 — Complete CSS Overhaul
   ============================================ */

:root {
    /* ── Base tokens ── */
    --fg-color: #ffffff;
    --bg-color: #000000;
    --comfy-menu-bg: rgba(8,8,10,0.75);
    --comfy-input-bg: #141414;
    --input-text: #ffffff;
    --descrip-text: #71717a;
    --drag-text: #a1a1aa;
    --error-text: #ef4444;
    --border-color: #1e1e22;
    --border-default: #27272a;
    --content-hover-fg: #ffffff;
    --contrast-mix-color: #ffffff;
    --tr-even-bg-color: rgba(20,20,20,0.9);
    --tr-odd-bg-color: rgba(12,12,12,0.9);
    --comfy-menu-secondary-bg: rgba(6,6,8,0.75);

    /* ── Linear design tokens ── */
    --linear-accent: #ffffff;
    --linear-accent-hover: #ffffff;
    --linear-accent-subtle: rgba(255,255,255,0.08);
    --linear-accent-secondary: #ffffff;
    --linear-surface: #0c0c0e;
    --linear-surface-elevated: #121212;
    --linear-surface-raised: #141414;
    --linear-border: #1e1e22;
    --linear-border-subtle: #141414;
    --linear-border-hover: #2a2a2e;
    --linear-text-primary: #ffffff;
    --linear-text-secondary: #a1a1aa;
    --linear-text-muted: #71717a;
    --linear-text-faint: #52525b;
    --linear-danger: #ef4444;
    --linear-danger-hover: #dc2626;
    --linear-success: #22c55e;
    --linear-warning: #f59e0b;

    /* ── Component: Base ── */
    --base-background: #000000;
    --base-foreground: #ffffff;

    /* ── Component: Node ── */
    --component-node-background: #141414;
    --component-node-background-hover: rgba(20,20,20,0.92);
    --component-node-border: #141414;
    --component-node-border-selected: #ffffff;
    --component-node-title-color: #ffffff;
    --component-node-text-color: #ffffff;
    --component-node-shadow: rgba(0,0,0,0.15);

    /* ── Component: Node widgets ── */
    --component-node-widget-background: #141414;
    --component-node-widget-background-highlighted: #1e1e1e;
    --component-node-widget-background-hover: #1a1a1a;
    --component-node-widget-border: #1e1e1e;
    --component-node-widget-border-hover: #2a2a2e;
    --component-node-widget-text: #ffffff;
    --component-node-widget-secondary-text: #a1a1aa;

    /* ── Interface: Menu ── */
    --interface-menu-surface: rgba(0,0,0,0.82);
    --interface-menu-border: #1e1e22;
    --interface-menu-item-hover: rgba(255,255,255,0.06);
    --interface-menu-item-active: rgba(255,255,255,0.1);
    --interface-menu-text: #ffffff;
    --interface-menu-text-secondary: #a1a1aa;

    /* ── Bars / floating panels (glassmorphism) ── */
    --linear-bars-bg: rgba(8,8,10,0.75);

    /* ── Highlight / Selection — neutral white instead of blue ── */
    --p-highlight-background: rgba(255,255,255,0.08) !important;
    --p-highlight-color: rgba(255,255,255,0.87) !important;

    /* ── Dividers / Separators ── */
    --p-divider-border-color: #27272a;

    /* ── Interface: Panel / Sidebar ── */
    --interface-stroke: #1e1e22;
    --interface-panel-surface: #0c0c0e;
    --interface-panel-border: #1e1e22;
    --interface-panel-header: #0c0c0e;
    --interface-panel-selected-surface: rgba(244,244,245,0.08);
    --interface-panel-hover-surface: rgba(244,244,245,0.04);

    /* ── Dialog / Modal ── */
    --dialog-surface: #0c0c0e;
    --dialog-border: #1e1e22;
    --dialog-overlay: rgba(0,0,0,0.6);
    --modal-card-background: #0c0c0e;
    --modal-card-border: #1e1e22;

    /* ── Button ── */
    --button-surface: #121212;
    --button-surface-hover: #1e1e22;
    --button-active-surface: #222226;
    --button-hover-surface: #1e1e22;
    --button-border: #222226;
    --button-border-hover: #2a2a2e;
    --button-text: #ffffff;
    --button-text-secondary: #a1a1aa;

    /* ── Input ── */
    --input-surface: #141414;
    --input-border: #1e1e22;
    --input-border-focus: #ffffff;
    --input-placeholder: #52525b;

    /* ── Node component (additional) ── */
    --node-component-border: #1e1e1e;
    --node-component-surface: #121212;
    --node-component-surface-hover: #1e1e22;

    /* ── Text tokens ── */
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --text-faint: #52525b;
    --color-text-primary: #ffffff;
    --color-text-secondary: #a1a1aa;

    /* ── PrimeVue surface tokens ── */
    --p-surface-0: #000000;
    --p-surface-50: #000000;
    --p-surface-100: #0c0c0e;
    --p-surface-200: #121212;
    --p-surface-300: #141414;
    --p-surface-400: #1e1e22;
    --p-surface-500: #27272a;
    --p-surface-600: #3f3f46;
    --p-surface-700: #52525b;
    --p-surface-800: #71717a;
    --p-surface-900: #a1a1aa;

    /* ── PrimeVue primary ── */
    --p-primary-color: #ffffff;
    --p-primary-color-hover: #ffffff;
    --p-primary-color-focus: rgba(255,255,255,0.2);
    --p-primary-contrast-color: #000000;

    /* ── PrimeVue text ── */
    --p-text-color: #ffffff;
    --p-text-muted-color: #71717a;
    --p-text-secondary-color: #a1a1aa;

    /* ── PrimeVue content ── */
    --p-content-background: #0c0c0e;
    --p-content-border-color: #1e1e22;
    --p-content-color: #ffffff;
    --p-content-hover-background: rgba(255,255,255,0.06);
    --p-content-hover-color: #ffffff;

    /* ── PrimeVue overlay ── */
    --p-overlay-background: #0c0c0e;
    --p-overlay-border-color: #1e1e22;

    /* ── PrimeVue mask ── */
    --p-mask-background: rgba(0,0,0,0.6);

    /* ── PrimeVue form field ── */
    --p-form-field-background: #121212;
    --p-form-field-border-color: #1e1e1e;
    --p-form-field-focus-border-color: #ffffff;
    --p-form-field-color: #ffffff;
    --p-form-field-placeholder-color: #52525b;
    --p-form-field-hover-border-color: #2a2a2e;
    --p-form-field-disabled-background: #0c0c0e;
    --p-form-field-disabled-color: #3f3f46;

    /* ── PrimeVue navigation ── */
    --p-navigation-item-active-background: rgba(255,255,255,0.08);
    --p-navigation-item-focus-background: rgba(255,255,255,0.06);
    --p-navigation-item-color: #a1a1aa;
    --p-navigation-item-focus-color: #ffffff;
    --p-navigation-item-active-color: #ffffff;

    /* ── PrimeVue anchor ── */
    --p-anchor-gutter: 2px;

    /* ── PrimeVue focus ring ── */
    --p-focus-ring-color: rgba(255,255,255,0.4);
    --p-focus-ring-width: 2px;
    --p-focus-ring-style: solid;
    --p-focus-ring-offset: 2px;

    /* ── PrimeVue tabs ── */
    --p-tabs-tablist-background: transparent;
    --p-tabs-tablist-border-color: #1e1e22;
    --p-tabs-tab-background: transparent;
    --p-tabs-tab-color: #71717a;
    --p-tabs-tab-hover-color: #ffffff;
    --p-tabs-tab-active-color: #ffffff;
    --p-tabs-tab-active-border-color: #ffffff;
    --p-tabs-tabpanel-background: transparent;
    --p-tabs-active-bar-background: #ffffff;

    /* ── PrimeVue dialog ── */
    --p-dialog-background: #0c0c0e;
    --p-dialog-border-color: #1e1e22;
    --p-dialog-color: #ffffff;
    --p-dialog-title-font-weight: 600;

    /* ── PrimeVue button ── */
    --p-button-background: #121212;
    --p-button-border-color: #1e1e1e;
    --p-button-color: #a1a1aa;
    --p-button-hover-background: #1e1e22;
    --p-button-hover-border-color: #2a2a2e;
    --p-button-hover-color: #ffffff;
    --p-button-active-background: #222226;
    --p-button-active-border-color: #2a2a2e;
    --p-button-focus-ring-color: rgba(255,255,255,0.4);

    /* ── PrimeVue button primary (prevent blue) ── */
    --p-button-primary-background: #121212;
    --p-button-primary-border-color: #1e1e1e;
    --p-button-primary-color: #a1a1aa;
    --p-button-primary-hover-background: #1e1e22;
    --p-button-primary-hover-border-color: #2a2a2e;
    --p-button-primary-hover-color: #ffffff;
    --p-button-primary-active-background: #222226;
    --p-button-primary-active-border-color: #2a2a2e;

    /* ── PrimeVue select / dropdown ── */
    --p-select-background: #121212;
    --p-select-border-color: #1e1e1e;
    --p-select-color: #ffffff;
    --p-select-hover-border-color: #2a2a2e;
    --p-select-focus-border-color: #ffffff;
    --p-select-overlay-background: #0c0c0e;
    --p-select-overlay-border-color: #1e1e22;
    --p-select-option-color: #ffffff;
    --p-select-option-focus-background: rgba(255,255,255,0.06);
    --p-select-option-focus-color: #ffffff;
    --p-select-option-selected-background: rgba(255,255,255,0.1);
    --p-select-option-selected-color: #ffffff;
    --p-select-option-selected-focus-background: rgba(255,255,255,0.12);
    --p-select-option-selected-focus-color: #ffffff;
    --p-select-placeholder-color: #52525b;

    /* ── PrimeVue input ── */
    --p-inputtext-background: #121212;
    --p-inputtext-border-color: #1e1e1e;
    --p-inputtext-color: #ffffff;
    --p-inputtext-hover-border-color: #2a2a2e;
    --p-inputtext-focus-border-color: #ffffff;
    --p-inputtext-placeholder-color: #52525b;

    /* ── PrimeVue checkbox ── */
    --p-checkbox-background: #121212;
    --p-checkbox-border-color: #1e1e1e;
    --p-checkbox-hover-border-color: #2a2a2e;
    --p-checkbox-checked-background: #ffffff;
    --p-checkbox-checked-border-color: #ffffff;
    --p-checkbox-checked-color: #000000;
    --p-checkbox-icon-checked-color: #000000;

    /* ── PrimeVue toggle switch ── */
    --p-toggleswitch-background: #222226;
    --p-toggleswitch-border-color: #2a2a2e;
    --p-toggleswitch-checked-background: #ffffff;
    --p-toggleswitch-checked-border-color: #ffffff;
    --p-toggleswitch-handle-background: #71717a;
    --p-toggleswitch-handle-checked-background: #000000;

    /* ── PrimeVue datatable ── */
    --p-datatable-header-background: #0c0c0e;
    --p-datatable-header-border-color: #1e1e22;
    --p-datatable-header-color: #71717a;
    --p-datatable-body-background: transparent;
    --p-datatable-row-background: transparent;
    --p-datatable-row-color: #f4f4f5;
    --p-datatable-row-hover-background: rgba(244,244,245,0.04);
    --p-datatable-row-hover-color: #ffffff;
    --p-datatable-body-cell-border-color: #18181b;

    /* ── PrimeVue toast ── */
    --p-toast-background: #0c0c0e;
    --p-toast-border-color: #1e1e22;
    --p-toast-color: #f4f4f5;

    /* ── PrimeVue tooltip ── */
    --p-tooltip-background: #141417;
    --p-tooltip-border-color: #1e1e22;
    --p-tooltip-color: #f4f4f5;

    /* ── PrimeVue progressbar ── */
    --p-progressbar-background: #141417;
    --p-progressbar-value-background: #f4f4f5;

    /* ── PrimeVue tag / badge ── */
    --p-tag-background: rgba(244,244,245,0.08);
    --p-tag-color: #f4f4f5;
    --p-badge-background: #f4f4f5;
    --p-badge-color: #09090b;

    /* ── PrimeVue menu ── */
    --p-menu-background: #0c0c0e;
    --p-menu-border-color: #1e1e22;
    --p-menu-color: #f4f4f5;
    --p-menu-item-color: #f4f4f5;
    --p-menu-item-focus-background: rgba(244,244,245,0.06);
    --p-menu-item-focus-color: #ffffff;

    /* ── PrimeVue sidebar / drawer ── */
    --p-drawer-background: #0c0c0e;
    --p-drawer-border-color: #1e1e22;
    --p-sidebar-background: #0c0c0e;
    --p-sidebar-border-color: #1e1e22;

    /* ── PrimeVue tree ── */
    --p-tree-background: transparent;
    --p-tree-color: #f4f4f5;
    --p-tree-node-hover-background: rgba(244,244,245,0.04);
    --p-tree-node-selected-background: rgba(244,244,245,0.08);
    --p-tree-node-color: #f4f4f5;
    --p-tree-node-hover-color: #ffffff;
    --p-tree-node-selected-color: #ffffff;

    /* ── PrimeVue scrollbar ── */
    --p-scrollbar-track-background: transparent;
    --p-scrollbar-thumb-background: #27272a;
    --p-scrollbar-thumb-hover-background: #3f3f46;

    /* ── PrimeVue misc ── */
    --p-divider-color: #1e1e22;
    --p-skeleton-background: #141417;
    --p-skeleton-animation-background: #1e1e22;
}

/* ============================================
   Base body
   ============================================ */
body,
body.litegraph {
    background: var(--bg-color, #000000) !important;
    color: var(--fg-color, #ffffff) !important;
    font-family: 'Inter', Arial, sans-serif !important;
}

/* ============================================
   Dialog / Modal
   ============================================ */
.manager-dialog,
.p-dialog {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 12px !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
}

.p-dialog-mask {
    background: var(--dialog-overlay) !important;
}

.p-dialog-header {
    background: transparent !important;
    border-bottom: 1px solid var(--linear-border) !important;
    color: var(--linear-text-primary) !important;
    padding: 16px 20px !important;
}

.p-dialog-content {
    background: var(--linear-surface) !important;
    color: var(--linear-text-primary) !important;
    padding: 16px 20px !important;
}

.p-dialog-footer {
    background: transparent !important;
    border-top: 1px solid var(--linear-border) !important;
    padding: 12px 20px !important;
}

/* ============================================
   Buttons — All variants
   ============================================ */
.p-button,
button.cm-button,
.dialog button,
.comfy-modal button,
.manager-dialog button,
.comfyui-button,
.comfyui-button button,
.comfyui-split-button button {
    background: var(--button-surface) !important;
    border: 1px solid var(--button-border) !important;
    border-radius: 8px !important;
    color: var(--linear-text-secondary) !important;
    font-weight: 500 !important;
    box-shadow: none !important;
    cursor: pointer !important;
}

.p-button:hover,
button.cm-button:hover,
.dialog button:hover,
.comfy-modal button:hover,
.manager-dialog button:hover,
.comfyui-button:hover,
.comfyui-button button:hover,
.comfyui-split-button button:hover {
    background: var(--button-surface-hover) !important;
    border-color: var(--button-border-hover) !important;
    color: var(--linear-text-primary) !important;
}

/* Primary buttons — force ghost, prevent PrimeVue blue */
.p-button-primary {
    background: var(--button-surface) !important;
    border: 1px solid var(--button-border) !important;
    color: var(--linear-text-secondary) !important;
}
.p-button-primary:hover {
    background: var(--button-surface-hover) !important;
    border-color: var(--button-border-hover) !important;
    color: var(--linear-text-primary) !important;
}

/* Danger buttons */
.p-button-danger,
button[style*="background-color: red"],
button[style*="background: red"] {
    background: var(--linear-danger) !important;
    border-color: var(--linear-danger) !important;
    color: #fff !important;
}

.p-button-danger:hover,
button[style*="background-color: red"]:hover,
button[style*="background: red"]:hover {
    background: var(--linear-danger-hover) !important;
    border-color: var(--linear-danger-hover) !important;
}

/* Text / Outlined / Secondary buttons */
.p-button-text,
.p-button-outlined {
    background: transparent !important;
    border-color: transparent !important;
    color: var(--linear-text-secondary) !important;
}
.p-button-text:hover,
.p-button-outlined:hover {
    background: var(--linear-accent-subtle) !important;
    color: var(--linear-text-primary) !important;
}

.p-button-secondary {
    background: var(--button-surface) !important;
    border-color: var(--button-border) !important;
    color: var(--linear-text-secondary) !important;
}
.p-button-secondary:hover {
    background: var(--button-surface-hover) !important;
    border-color: var(--button-border-hover) !important;
    color: var(--linear-text-primary) !important;
}

/* ============================================
   Selects / Dropdowns
   ============================================ */
select,
.p-select,
.p-dropdown {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    box-shadow: none !important;
    transition: border-color 150ms ease !important;
}

select:hover,
.p-select:hover,
.p-dropdown:hover {
    border-color: var(--linear-border-hover) !important;
}

select:focus,
.p-select:focus,
.p-select.p-focus,
.p-dropdown:focus {
    border-color: var(--linear-accent-secondary) !important;
    outline: none !important;
    box-shadow: 0 0 0 2px rgba(129,140,248,0.2) !important;
}

/* Native select options */
select option,
select optgroup {
    background: #0c0c0e !important;
    color: #f4f4f5 !important;
}

/* Dropdown panels / overlays */
.p-select-overlay,
.p-dropdown-panel,
.p-listbox,
.p-popover {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 16px 32px -8px rgba(0,0,0,0.5) !important;
    overflow: hidden !important;
}

.p-select-option,
.p-dropdown-item,
.p-listbox-option {
    color: var(--linear-text-primary) !important;
    border-radius: 4px !important;
    transition: background 100ms ease !important;
}

.p-select-option:hover,
.p-dropdown-item:hover,
.p-listbox-option:hover,
.p-select-option.p-focus,
.p-listbox-option.p-focus {
    background: var(--linear-accent-subtle) !important;
}

.p-select-option.p-selected,
.p-select-option.p-highlight,
.p-dropdown-item.p-highlight,
.p-listbox-option.p-selected,
.p-listbox-option.p-highlight {
    background: rgba(244,244,245,0.1) !important;
    color: var(--linear-text-primary) !important;
}

/* ============================================
   Inputs
   ============================================ */
input[type="text"],
input[type="number"],
input[type="search"],
input[type="password"],
input[type="email"],
input[type="url"],
textarea,
.p-inputtext,
.p-textarea,
.comfy-multiline-input {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    font-family: 'Inter', Arial, sans-serif !important;
    box-shadow: none !important;
    transition: border-color 150ms ease, box-shadow 150ms ease !important;
}

input:hover,
textarea:hover,
.p-inputtext:hover {
    border-color: var(--linear-border-hover) !important;
}

input:focus,
textarea:focus,
.p-inputtext:focus,
.p-inputtext.p-focus {
    border-color: var(--linear-accent-secondary) !important;
    outline: none !important;
    box-shadow: 0 0 0 2px rgba(129,140,248,0.2) !important;
}

input::placeholder,
textarea::placeholder {
    color: var(--input-placeholder) !important;
}

/* ============================================
   Tabs
   ============================================ */
.p-tablist,
.p-tabs {
    background: transparent !important;
    border-bottom: 1px solid var(--linear-border) !important;
}

.p-tab,
.p-tabpanel {
    color: var(--linear-text-muted) !important;
    background: transparent !important;
    border: none !important;
    transition: color 150ms ease !important;
}

.p-tab:hover {
    color: var(--linear-text-primary) !important;
}

.p-tab-active,
.p-tab[data-p-active="true"],
.p-tab.p-tab-active {
    color: var(--linear-text-primary) !important;
    border-bottom: 2px solid var(--linear-accent) !important;
}

/* Tab active bar / ink bar */
.p-tablist .p-tabs-active-bar,
.p-tab-active-bar {
    background: var(--linear-accent) !important;
}

/* Workflow tabs */
.workflow-tab,
.workflow-tabs {
    background: transparent !important;
    border-color: var(--linear-border) !important;
}

.workflow-tab {
    color: var(--linear-text-muted) !important;
    transition: color 150ms ease, background 150ms ease !important;
}

.workflow-tab:hover {
    color: var(--linear-text-primary) !important;
    background: var(--linear-accent-subtle) !important;
}

.workflow-tab.active,
.workflow-tab[data-active="true"] {
    color: var(--linear-text-primary) !important;
    background: rgba(244,244,245,0.06) !important;
}

/* ============================================
   Tables
   ============================================ */
.p-datatable,
table {
    background: transparent !important;
}

.p-datatable-thead > tr > th,
table th {
    background: var(--linear-surface) !important;
    border-bottom: 1px solid var(--linear-border) !important;
    color: var(--linear-text-muted) !important;
    font-weight: 500 !important;
}

.p-datatable-tbody > tr,
table tr {
    border-bottom: 1px solid var(--linear-border-subtle) !important;
    transition: background 100ms ease !important;
}

.p-datatable-tbody > tr:hover,
table tr:hover {
    background: var(--linear-accent-subtle) !important;
}

.p-datatable-tbody > tr > td,
table td {
    color: var(--linear-text-primary) !important;
}

/* ============================================
   Scrollbars
   ============================================ */
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #222226;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3f3f46;
}

/* Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: #222226 transparent;
}

/* ============================================
   Tooltips
   ============================================ */
.p-tooltip {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    box-shadow: 0 8px 16px -4px rgba(0,0,0,0.4) !important;
}

.p-tooltip .p-tooltip-text {
    background: transparent !important;
    color: inherit !important;
}

/* ============================================
   Checkboxes / Toggles
   ============================================ */
.p-checkbox .p-checkbox-box,
.p-checkbox-box {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 4px !important;
    transition: background 150ms ease, border-color 150ms ease !important;
}

.p-checkbox .p-checkbox-box.p-highlight,
.p-checkbox-box.p-highlight,
.p-checkbox.p-checkbox-checked .p-checkbox-box {
    background: #f4f4f5 !important;
    border-color: #f4f4f5 !important;
}

.p-checkbox .p-checkbox-icon,
.p-checkbox-icon {
    color: #09090b !important;
}

.p-toggleswitch .p-toggleswitch-slider,
.p-toggleswitch-slider {
    background: #222226 !important;
    border: 1px solid #2a2a2e !important;
    transition: background 200ms ease !important;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider,
.p-toggleswitch-checked .p-toggleswitch-slider {
    background: #f4f4f5 !important;
    border-color: #f4f4f5 !important;
}

/* ============================================
   Badges / Tags
   ============================================ */
.p-badge,
.p-tag {
    border-radius: 6px !important;
    font-weight: 500 !important;
}

.p-badge {
    background: #f4f4f5 !important;
    color: #09090b !important;
}

.p-tag {
    background: rgba(244,244,245,0.08) !important;
    color: #f4f4f5 !important;
}

/* ============================================
   Menus & Context Menus
   ============================================ */
.p-menu,
.p-contextmenu,
.p-menubar {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    border: 1px solid rgba(30,30,34,0.7) !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
    overflow: hidden !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

.p-menuitem > .p-menuitem-content,
.p-menuitem-link {
    color: var(--linear-text-primary) !important;
    transition: background 100ms ease !important;
}

.p-menuitem:hover > .p-menuitem-content,
.p-menuitem-link:hover {
    background: var(--linear-accent-subtle) !important;
}

.p-menuitem .p-menuitem-icon {
    color: var(--linear-text-muted) !important;
}

/* Litegraph context menu — forced styling */
.litegraph.litecontextmenu,
.litegraph.litecontextmenu.dark {
    background: var(--comfy-menu-bg) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 8px 24px -4px rgba(0,0,0,0.5) !important;
    color: var(--linear-text-primary) !important;
    font-family: 'Inter', Arial, sans-serif !important;
    overflow: hidden !important;
    z-index: 9999 !important;
}

.litegraph .litemenu-entry,
.litemenu-title {
    font-family: 'Inter', Arial, sans-serif !important;
    color: var(--linear-text-secondary) !important;
    padding: 4px 8px !important;
}

.litegraph .litemenu-entry:hover:not(.disabled):not(.separator) {
    background: rgba(244,244,245,0.06) !important;
    color: var(--linear-text-primary) !important;
}

.litegraph .litemenu-entry.separator {
    border-top: 1px solid var(--border-default) !important;
    height: 0px !important;
    margin: 3px 0 2px !important;
    padding: 0 !important;
    background: transparent !important;
}

.litegraph .litemenu-entry.has_submenu {
    border-right: 2px solid var(--linear-accent-secondary) !important;
}

.litegraph .litemenu-entry.disabled {
    opacity: 0.5 !important;
    color: var(--linear-text-muted) !important;
}

.litemenu-title {
    color: var(--linear-text-primary) !important;
    background: var(--linear-surface-elevated) !important;
}

/* ============================================
   Sidebar / Panels
   ============================================ */

/* Kill shadow-interface globally — removes warm tinted box-shadow */
.shadow-interface {
    box-shadow: none !important;
}

/* Sidebar icon toolbar (left rail) */
.side-tool-bar-container {
    background: transparent !important;
}

.side-tool-bar-container.connected-sidebar {
    background-color: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    border-color: rgba(30,30,34,0.7) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

.side-tool-bar-container .sidebar-item-group {
    background-color: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    border: 1px solid rgba(30,30,34,0.7) !important;
    box-shadow: none !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

.p-drawer,
.p-sidebar,
.comfy-sidebar,
.side-bar-panel {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    border-right: 1px solid rgba(30,30,34,0.7) !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

.side-bar-panel {
    border-left: 1px solid var(--interface-panel-border) !important;
}

/* P-Panel used in floating panels (canvas toolbar, actionbar, etc.) */
.p-panel {
    box-shadow: none !important;
}

.p-panel .p-panel-content {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    border-color: rgba(30,30,34,0.7) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

/* Top menu bar container — glassmorphism via ::before pseudo-element.
   backdrop-filter on the container itself breaks position:fixed on the undocked actionbar,
   but ::before doesn't create a containing block for siblings */
.actionbar-container {
    position: relative !important;
    background: transparent !important;
    isolation: isolate !important;
}
.actionbar-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--linear-bars-bg, rgba(8,8,10,0.75));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: inherit;
    z-index: -1;
    pointer-events: none;
}

/* Bottom canvas toolbar (zoom, cursor, layout toggles) */
.graph-canvas-panel .p-buttongroup {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

/* Bottom panel (queue/logs) — glassmorphism */
.bottom-panel {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

/* Canvas container — match canvas background, avoid bluish zinc tint */
.graph-canvas-container {
    background: var(--bg-color, #000000) !important;
}

/* Sidebar icon rail — subtle cool gray tint */
.side-tool-bar-container button {
    color: #8a8e94 !important;
}
.side-tool-bar-container button:hover {
    color: #d4d4d8 !important;
}
.side-tool-bar-container button.active,
.side-tool-bar-container button[aria-selected="true"] {
    color: #f4f4f5 !important;
}

/* Separators/dividers — subtle */
hr, .p-divider {
    border-color: #27272a !important;
}

/* ============================================
   Progress bars
   ============================================ */
.p-progressbar {
    background: var(--linear-surface-elevated) !important;
    border-radius: 4px !important;
    height: 4px !important;
    overflow: hidden !important;
}

.p-progressbar-value {
    background: #f4f4f5 !important;
    border-radius: 4px !important;
    transition: width 300ms ease !important;
}

/* ============================================
   Close buttons (X)
   ============================================ */
.p-dialog-header-close,
.p-button-icon-only {
    color: var(--linear-text-muted) !important;
    background: transparent !important;
    border: none !important;
    transition: color 150ms ease, background 150ms ease !important;
}

.p-dialog-header-close:hover,
.p-button-icon-only:hover {
    color: var(--linear-text-primary) !important;
    background: rgba(244,244,245,0.06) !important;
    border-radius: 6px !important;
}

/* ============================================
   Toast / Notifications
   ============================================ */
.p-toast-message {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 8px 16px -4px rgba(0,0,0,0.4) !important;
    color: var(--linear-text-primary) !important;
}

.p-toast-message-content {
    color: inherit !important;
}

.p-toast-close-button {
    color: var(--linear-text-muted) !important;
}
.p-toast-close-button:hover {
    color: var(--linear-text-primary) !important;
    background: rgba(244,244,245,0.06) !important;
}

/* ============================================
   Search / Filter inputs
   ============================================ */
.p-iconfield,
.p-inputicon {
    color: var(--linear-text-muted) !important;
}

/* Node search box (litegraph) */
.litesearchbox {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 10px !important;
    box-shadow: 0 16px 32px -8px rgba(0,0,0,0.5) !important;
}

.litesearchbox .helper {
    overflow: auto !important;
    max-height: 300px !important;
}

/* New search component v0.13+ — dialog must be invisible */
.invisible-dialog-root,
.p-dialog.invisible-dialog-root {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    overflow: visible !important;
}
.node-search-box-dialog-mask,
.p-dialog-mask.node-search-box-dialog-mask {
    background: rgba(0,0,0,0.25) !important;
}

/* Node search container & autocomplete */
.comfy-vue-node-search-container,
.node-search-box {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 10px !important;
    box-shadow: 0 16px 32px -8px rgba(0,0,0,0.5) !important;
    color: var(--linear-text-primary) !important;
}

.comfy-vue-node-search-container .p-autocomplete,
.node-search-box .p-autocomplete {
    background: transparent !important;
}

.comfy-vue-node-search-container .p-autocomplete-input,
.node-search-box .p-autocomplete-input,
.comfy-vue-node-search-container input,
.node-search-box input {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    color: var(--linear-text-primary) !important;
}

.comfy-vue-node-search-container .p-autocomplete-input:focus,
.node-search-box .p-autocomplete-input:focus {
    border-color: var(--linear-accent-secondary) !important;
    box-shadow: 0 0 0 2px rgba(129,140,248,0.2) !important;
}

/* Search results overlay */
.comfy-vue-node-search-container .p-autocomplete-overlay,
.comfy-vue-node-search-container .p-autocomplete-panel,
.node-search-box .p-autocomplete-overlay,
.node-search-box .p-autocomplete-panel,
.p-autocomplete-overlay {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 16px 32px -8px rgba(0,0,0,0.5) !important;
    color: var(--linear-text-primary) !important;
}

/* Search result items */
.comfy-vue-node-search-container .p-autocomplete-option,
.comfy-vue-node-search-container .p-autocomplete-item,
.node-search-box .p-autocomplete-option,
.node-search-box .p-autocomplete-item,
.p-autocomplete-option {
    background: transparent !important;
    color: var(--linear-text-primary) !important;
    border-bottom: 1px solid var(--linear-border-subtle) !important;
}

.comfy-vue-node-search-container .p-autocomplete-option:hover,
.comfy-vue-node-search-container .p-autocomplete-item:hover,
.p-autocomplete-option:hover,
.p-autocomplete-option.p-focus {
    background: var(--linear-accent-subtle) !important;
    color: var(--linear-text-primary) !important;
}

.comfy-vue-node-search-container .p-autocomplete-option.p-highlight,
.p-autocomplete-option.p-highlight {
    background: rgba(244,244,245,0.1) !important;
    color: var(--linear-text-primary) !important;
}

/* Search result badges/tags */
.comfy-vue-node-search-container .p-tag,
.comfy-vue-node-search-container .p-badge,
.comfy-vue-node-search-container [class*="badge"],
.node-search-box .p-tag {
    background: rgba(244,244,245,0.06) !important;
    color: var(--linear-text-muted) !important;
    border: 1px solid rgba(39,39,42,0.6) !important;
    border-radius: 6px !important;
    padding: 2px 8px !important;
    font-size: 11px !important;
    font-weight: 400 !important;
    line-height: 1.4 !important;
}

/* Badge container — flex with gap */
.comfy-vue-node-search-container .option-badges {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
}

/* Search result secondary text */
.comfy-vue-node-search-container .node-search-item-category,
.comfy-vue-node-search-container [class*="category"],
.comfy-vue-node-search-container [class*="subtitle"],
.comfy-vue-node-search-container [class*="secondary"] {
    color: var(--linear-text-muted) !important;
}

/* Search filter icon/button */
.comfy-vue-node-search-container .p-button,
.node-search-box .p-button {
    background: var(--button-surface) !important;
    border: 1px solid var(--button-border) !important;
    color: var(--linear-text-secondary) !important;
}

/* Search empty state */
.comfy-vue-node-search-container .p-autocomplete-empty-message {
    color: var(--linear-text-muted) !important;
}

.litesearchbox input {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid var(--linear-border) !important;
    border-radius: 0 !important;
    color: var(--linear-text-primary) !important;
    padding: 10px 14px !important;
}

.lite-search-item,
.litesearchbox .lite-search-item {
    color: var(--linear-text-secondary) !important;
    padding: 6px 14px !important;
    transition: background 100ms ease !important;
}

.lite-search-item:hover,
.litesearchbox .lite-search-item:hover {
    background: var(--linear-accent-subtle) !important;
    color: var(--linear-text-primary) !important;
}

.lite-search-item.selected {
    background: rgba(244,244,245,0.1) !important;
    color: var(--linear-text-primary) !important;
}

/* ============================================
   Chip / Tag
   ============================================ */
.p-chip {
    background: rgba(244,244,245,0.08) !important;
    color: var(--linear-text-primary) !important;
    border-radius: 6px !important;
    border: 1px solid var(--linear-border) !important;
}

/* ============================================
   ComfyUI-specific components
   ============================================ */

/* -- Settings panel -- */
.comfy-settings,
.settings-container {
    background: var(--linear-surface) !important;
    color: var(--linear-text-primary) !important;
}

.comfy-settings .settings-header,
.settings-container .settings-header {
    border-bottom: 1px solid var(--linear-border) !important;
}

/* -- Lists -- */
.comfy-list,
.comfy-list-items {
    background: transparent !important;
    color: var(--linear-text-primary) !important;
}

.comfy-list-items > * {
    border-bottom: 1px solid var(--linear-border-subtle) !important;
    transition: background 100ms ease !important;
}

.comfy-list-items > *:hover {
    background: var(--linear-accent-subtle) !important;
}

/* -- Popups -- */
.comfyui-popup {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 16px 32px -8px rgba(0,0,0,0.5) !important;
    color: var(--linear-text-primary) !important;
}

/* -- Node / Group title inline editor -- */
.node-title-editor {
    background: rgb(20,20,23) !important;
    border-radius: 4px !important;
    min-width: 300px !important;
    box-sizing: border-box !important;
}

/* -- Editable text -- */
.editable-text {
    color: var(--linear-text-primary) !important;
}

.editable-text input,
.editable-text textarea {
    background: var(--input-surface) !important;
    border: 1px solid var(--linear-accent-secondary) !important;
    border-radius: 4px !important;
    color: var(--linear-text-primary) !important;
}

/* -- Tree / File explorer -- */
.tree-node,
.tree-folder,
.p-tree-node,
.p-tree-node-content {
    color: var(--linear-text-primary) !important;
    transition: background 100ms ease !important;
}

.tree-node:hover,
.tree-folder:hover,
.p-tree-node-content:hover {
    background: var(--linear-accent-subtle) !important;
}

.tree-node.selected,
.p-tree-node-content.p-highlight,
.p-tree-node.p-tree-node-selected > .p-tree-node-content {
    background: rgba(244,244,245,0.08) !important;
    color: #ffffff !important;
}

/* -- Markdown content -- */
.comfy-markdown {
    color: var(--linear-text-primary) !important;
}

.comfy-markdown a {
    color: var(--linear-accent-secondary) !important;
}

.comfy-markdown code {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 4px !important;
    color: var(--linear-text-primary) !important;
    padding: 1px 4px !important;
}

.comfy-markdown pre {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
}

/* -- Model preview -- */
.model_preview_top_container {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
}

/* -- Mask editor -- */
.maskEditor-ui-container {
    background: var(--linear-surface) !important;
    color: var(--linear-text-primary) !important;
}

/* -- Graph canvas container -- */
.graph-canvas-container {
    background: var(--bg-color, #000000) !important;
}

/* -- Main layout -- */
.comfyui-body-top,
.comfyui-body-bottom,
.comfyui-body-left,
.comfyui-body-right {
    background: transparent !important;
}

/* -- Selection toolbox -- */
.selection-toolbox {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 8px 16px -4px rgba(0,0,0,0.4) !important;
}

/* -- Minimap -- */
.litegraph-minimap {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 6px !important;
    opacity: 0.8 !important;
}

/* ============================================
   ComfyUI Split Button
   ============================================ */
.comfyui-split-button {
    border-radius: 8px !important;
    overflow: hidden !important;
}

.comfyui-split-button .comfyui-split-primary {
    border-right: 1px solid var(--linear-border) !important;
}

/* ============================================
   Sliders / Range
   ============================================ */
.p-slider {
    background: #222226 !important;
    border-radius: 4px !important;
}

.p-slider .p-slider-range {
    background: #f4f4f5 !important;
}

.p-slider .p-slider-handle {
    background: #f4f4f5 !important;
    border: 2px solid #f4f4f5 !important;
    transition: transform 100ms ease !important;
}

.p-slider .p-slider-handle:hover {
    transform: scale(1.2) !important;
}

/* ============================================
   Accordion
   ============================================ */
.p-accordion-header {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid var(--linear-border) !important;
    color: var(--linear-text-primary) !important;
}

.p-accordion-header:hover {
    background: var(--linear-accent-subtle) !important;
}

.p-accordion-content {
    background: transparent !important;
    border: none !important;
    color: var(--linear-text-primary) !important;
}

/* ============================================
   Chips / Autocomplete
   ============================================ */
.p-autocomplete-panel {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 16px 32px -8px rgba(0,0,0,0.5) !important;
}

.p-autocomplete-item {
    color: var(--linear-text-primary) !important;
    transition: background 100ms ease !important;
}

.p-autocomplete-item:hover {
    background: var(--linear-accent-subtle) !important;
}

/* ============================================
   Splitter
   ============================================ */
.p-splitter {
    background: transparent !important;
    border: none !important;
}

.p-splitter-gutter {
    background: var(--linear-border) !important;
}

/* ============================================
   Card
   ============================================ */
.p-card {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
}

/* ============================================
   Divider
   ============================================ */
.p-divider {
    border-color: var(--linear-border) !important;
}

/* ============================================
   Skeleton
   ============================================ */
.p-skeleton {
    background: var(--linear-surface-elevated) !important;
}

/* ============================================
   Overrides — remove unwanted colors
   ============================================ */

/* Remove blue tint from focus states globally */
*:focus-visible {
    outline: 2px solid rgba(129,140,248,0.4) !important;
    outline-offset: 2px !important;
}

/* Loading bar / spinner */
.p-progress-spinner-circle {
    stroke: #f4f4f5 !important;
}

/* Fieldset */
.p-fieldset {
    background: transparent !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
}

.p-fieldset-legend {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
}

/* Scrollable panel */
.p-scrollpanel .p-scrollpanel-bar {
    background: #222226 !important;
    border-radius: 3px !important;
}

.p-scrollpanel .p-scrollpanel-bar:hover {
    background: #3f3f46 !important;
}

/* Confirm dialog */
.p-confirmdialog {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 12px !important;
}

/* Number input spinner buttons */
.p-inputnumber-button {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    color: var(--linear-text-muted) !important;
}

.p-inputnumber-button:hover {
    background: var(--button-surface-hover) !important;
    color: var(--linear-text-primary) !important;
}

/* Radio buttons */
.p-radiobutton .p-radiobutton-box {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    transition: border-color 150ms ease !important;
}

.p-radiobutton .p-radiobutton-box.p-highlight {
    background: var(--input-surface) !important;
    border-color: #f4f4f5 !important;
}

.p-radiobutton .p-radiobutton-icon {
    background: #f4f4f5 !important;
}

/* Textarea */
.p-textarea {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
}

/* Breadcrumb */
.p-breadcrumb {
    background: transparent !important;
    border: none !important;
}

.p-breadcrumb-item-link {
    color: var(--linear-text-muted) !important;
    transition: color 150ms ease !important;
}

.p-breadcrumb-item-link:hover {
    color: var(--linear-text-primary) !important;
}

/* Panel */
.p-panel {
    background: transparent !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
}

.p-panel-header {
    background: var(--linear-surface) !important;
    border-bottom: 1px solid var(--linear-border) !important;
    color: var(--linear-text-primary) !important;
}

.p-panel-content {
    background: transparent !important;
    color: var(--linear-text-primary) !important;
}

/* Inline message */
.p-inline-message {
    border-radius: 6px !important;
}

/* Paginator */
.p-paginator {
    background: transparent !important;
    border: none !important;
    color: var(--linear-text-secondary) !important;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-prev,
.p-paginator-first,
.p-paginator-last {
    color: var(--linear-text-secondary) !important;
    transition: background 100ms ease, color 100ms ease !important;
}

.p-paginator-page:hover,
.p-paginator-next:hover,
.p-paginator-prev:hover {
    background: var(--linear-accent-subtle) !important;
    color: var(--linear-text-primary) !important;
}

.p-paginator-page.p-highlight {
    background: rgba(244,244,245,0.1) !important;
    color: var(--linear-text-primary) !important;
}

/* ============================================
   ComfyUI Manager — Custom Nodes List
   ============================================ */

/* ── Main container ── */
.cn-manager {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    color: #f4f4f5 !important;
    --grid-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

/* ── Header / filter bar ── */
.cn-manager-header {
    gap: 8px !important;
}

.cn-manager-filter {
    background: #0a0a0a !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #a1a1aa !important;
    font-size: 13px !important;
    transition: border-color 150ms ease !important;
}

.cn-manager-filter:hover {
    border-color: #2a2a2e !important;
    filter: none !important;
}

.cn-manager-filter:focus {
    border-color: #818cf8 !important;
    outline: none !important;
}

.cn-manager-keywords {
    background-color: #0a0a0a !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #f4f4f5 !important;
    font-size: 13px !important;
    transition: border-color 150ms ease !important;
}

.cn-manager-keywords:hover {
    border-color: #2a2a2e !important;
}

.cn-manager-keywords:focus {
    border-color: #818cf8 !important;
    outline: none !important;
}

.cn-manager-status {
    color: #71717a !important;
    font-size: 13px !important;
}

/* ── Grid container ── */
.cn-manager-grid {
    border: 1px solid #1e1e22 !important;
    border-radius: 8px !important;
    overflow: hidden !important;
}

/* ── TurboGrid base ── */
.cn-manager-grid .tg-turbogrid {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 13px !important;
    background: #0a0a0a !important;
    color: #f4f4f5 !important;
}

/* ── Header cells ── */
.cn-manager-grid .tg-header-item {
    background: #0a0a0a !important;
    border-bottom: 1px solid #1e1e22 !important;
    border-right: none !important;
    color: #71717a !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
}

.cn-manager-grid .tg-column-name {
    color: #71717a !important;
}

/* ── Sort indicators ── */
.cn-manager-grid .tg-sort-indicator-icon {
    color: #a1a1aa !important;
}

/* ── Body rows ── */
.cn-manager-grid .tg-body {
    background: #0a0a0a !important;
}

.cn-manager-grid .tg-row {
    border-bottom: 1px solid rgba(30,30,34,0.5) !important;
    transition: background 150ms ease !important;
}

.cn-manager-grid .tg-even {
    background: #0a0a0a !important;
}

.cn-manager-grid .tg-odd {
    background: rgba(14,14,16,0.8) !important;
}

.cn-manager-grid .tg-hover {
    background: rgba(244,244,245,0.03) !important;
}

/* ── Cells ── */
.cn-manager-grid .tg-cell {
    border-right: none !important;
    color: #a1a1aa !important;
    padding: 8px 12px !important;
}

/* ── Row number (ID) ── */
.cn-manager-grid .tg-cell-row-number {
    color: #3f3f46 !important;
    font-size: 12px !important;
    font-variant-numeric: tabular-nums !important;
}

/* ── Frozen column separator ── */
.cn-manager-grid .tg-frozen-line-v {
    border-right: 1px solid #1e1e22 !important;
}

/* ── Column separators ── */
.cn-manager-grid .tg-column-line {
    border-right: none !important;
}

/* ── Title / pack name links ── */
.cn-manager-grid .cn-pack-name a {
    color: #f4f4f5 !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    transition: color 150ms ease !important;
}

.cn-manager-grid .cn-pack-name a:hover {
    color: #ffffff !important;
    text-decoration: none !important;
}

/* ── Description links ── */
.cn-manager-grid .cn-pack-desc a {
    color: #818cf8 !important;
    font-weight: 500 !important;
}

/* ── Version ── */
.cn-manager-grid .cn-pack-version {
    color: #71717a !important;
    font-variant-numeric: tabular-nums !important;
    font-size: 12px !important;
}

/* ── Nodes count ── */
.cn-manager-grid .cn-pack-nodes {
    color: #71717a !important;
    font-size: 12px !important;
}

/* ── Conflicts ── */
.cn-manager-grid .cn-pack-conflicts {
    color: #f59e0b !important;
    font-size: 11px !important;
}

/* ── Author ── */
.cn-manager-grid .cn-pack-author {
    color: #a1a1aa !important;
}

/* ── Stars ── */
.cn-manager-grid .cn-pack-stars {
    color: #52525b !important;
    font-variant-numeric: tabular-nums !important;
    font-size: 12px !important;
}

/* ── Last update ── */
.cn-manager-grid .cn-pack-last-update {
    color: #52525b !important;
    font-size: 12px !important;
    font-variant-numeric: tabular-nums !important;
}

/* ── Badges ── */
.cn-manager-grid .cn-pack-badge {
    background: rgba(244,244,245,0.05) !important;
    border: 1px solid #222226 !important;
    color: #71717a !important;
    font-size: 11px !important;
    border-radius: 4px !important;
}

/* ── Checkboxes (SVG-based via TurboGrid) ── */
.cn-manager-grid .tg-checkbox {
    border: none !important;
    background: transparent !important;
}

.cn-manager-grid .tg-icon-checkbox {
    width: 16px !important;
    height: 16px !important;
}

/* Unchecked state */
.cn-manager-grid .tg-checkbox-none {
    stroke: #3f3f46 !important;
    fill: none !important;
}

/* Checked state */
.cn-manager-grid .tg-checkbox-selected {
    stroke: #f4f4f5 !important;
    fill: #f4f4f5 !important;
}

/* Mixed/indeterminate state */
.cn-manager-grid .tg-checkbox-mixed {
    stroke: #71717a !important;
    fill: #71717a !important;
}

/* ── Highlight ── */
.cn-manager-grid .tg-turbogrid .tg-highlight::after {
    background-color: rgba(244,244,245,0.03) !important;
}

/* ── Scrollbar ── */
.cn-manager-grid .tg-scrollbar-thumb {
    background: #222226 !important;
    border-radius: 3px !important;
}

.cn-manager-grid .tg-scrollbar-thumb:hover,
.cn-manager-grid .tg-scrollbar-thumb-hold {
    background: #3f3f46 !important;
}

.cn-manager-grid .tg-scrollbar-track {
    background: transparent !important;
}

/* ── Row not found ── */
.cn-manager-grid .tg-row-not-found {
    color: #52525b !important;
}

/* ============================================
   Manager — Action Buttons (in-row)
   ============================================ */

.cn-manager .cn-install-buttons button {
    background: #0a0a0a !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #a1a1aa !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 4px 10px !important;
    min-width: 80px !important;
    transition: border-color 150ms ease, color 150ms ease !important;
    filter: none !important;
}

.cn-manager .cn-install-buttons button:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
    filter: none !important;
}

/* Override all colored button states to ghost */
.cn-manager .cn-btn-install,
.cn-manager .cn-btn-try-install,
.cn-manager .cn-btn-update,
.cn-manager .cn-btn-try-update,
.cn-manager .cn-btn-enable,
.cn-manager .cn-btn-disable,
.cn-manager .cn-btn-switch,
.cn-manager .cn-btn-try-fix,
.cn-manager .cn-btn-reinstall {
    background: #0a0a0a !important;
    color: #a1a1aa !important;
}

.cn-manager .cn-btn-install:hover,
.cn-manager .cn-btn-try-install:hover,
.cn-manager .cn-btn-update:hover,
.cn-manager .cn-btn-try-update:hover,
.cn-manager .cn-btn-enable:hover,
.cn-manager .cn-btn-disable:hover,
.cn-manager .cn-btn-switch:hover,
.cn-manager .cn-btn-try-fix:hover,
.cn-manager .cn-btn-reinstall:hover {
    color: #f4f4f5 !important;
}

/* Uninstall — subtle danger */
.cn-manager .cn-btn-uninstall {
    background: #0a0a0a !important;
    border-color: rgba(239,68,68,0.3) !important;
    color: #71717a !important;
}

.cn-manager .cn-btn-uninstall:hover {
    border-color: #ef4444 !important;
    color: #ef4444 !important;
    background: rgba(239,68,68,0.05) !important;
}

/* Loading state */
.cn-manager button.cn-btn-loading {
    border-color: rgba(129,140,248,0.4) !important;
    background: #0a0a0a !important;
}

.cn-manager button.cn-btn-loading::after {
    background-image: repeating-linear-gradient(
        -45deg,
        rgba(129,140,248,0.15),
        rgba(129,140,248,0.15) 10px,
        transparent 10px,
        transparent 15px
    ) !important;
}

/* Import failed */
.cn-manager .cn-btn-import-failed {
    background: #0a0a0a !important;
    border-color: rgba(239,68,68,0.3) !important;
    color: #ef4444 !important;
    font-size: 10px !important;
}

/* ============================================
   Manager — Footer Buttons
   ============================================ */

.cn-manager-footer {
    gap: 8px !important;
}

.cn-manager-footer button {
    background: #0a0a0a !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #71717a !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    padding: 6px 14px !important;
    transition: border-color 150ms ease, color 150ms ease !important;
    filter: none !important;
}

.cn-manager-footer button:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
    filter: none !important;
}

/* Restart button — subtle danger */
.cn-manager .cn-manager-restart {
    border-color: rgba(239,68,68,0.3) !important;
    color: #ef4444 !important;
    background: #0a0a0a !important;
}

.cn-manager .cn-manager-restart:hover {
    border-color: #ef4444 !important;
    background: rgba(239,68,68,0.05) !important;
}

/* ============================================
   Manager — Selection Area
   ============================================ */

.cn-manager-selection {
    gap: 8px !important;
}

.cn-selected-buttons button {
    font-size: 12px !important;
}

/* ============================================
   Manager — Flyover / Side Panel
   ============================================ */

.cn-flyover {
    background-color: #0a0a0a !important;
    border-left: 1px solid #1e1e22 !important;
}

.cn-flyover::before {
    background-image: none !important;
}

.cn-flyover-header {
    border-bottom: 1px solid #1e1e22 !important;
    color: #f4f4f5 !important;
}

.cn-flyover-title {
    color: #f4f4f5 !important;
    font-size: 14px !important;
}

.cn-flyover-close {
    color: #71717a !important;
    transition: color 150ms ease !important;
}

.cn-flyover-close:hover {
    color: #f4f4f5 !important;
}

.cn-flyover-body {
    background-color: #0a0a0a !important;
}

/* Flyover node rows */
.cn-nodes-row {
    border-bottom: 1px solid rgba(30,30,34,0.5) !important;
}

.cn-nodes-row:nth-child(odd) {
    background-color: rgba(14,14,16,0.5) !important;
}

.cn-nodes-row:hover {
    background-color: rgba(244,244,245,0.03) !important;
}

.cn-nodes-sn {
    color: #3f3f46 !important;
}

.cn-nodes-name {
    color: #f4f4f5 !important;
}

.cn-nodes-pack {
    color: #818cf8 !important;
}

.cn-nodes-conflict .cn-nodes-name,
.cn-nodes-conflict .cn-icon {
    color: #f59e0b !important;
}

/* Node preview popover */
.cn-popover {
    background: #0a0a0a !important;
    border: 1px solid #1e1e22 !important;
    border-radius: 8px !important;
    filter: none !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.5) !important;
}

.cn-preview {
    color: #f4f4f5 !important;
}

.cn-preview-header {
    border-bottom: 1px solid #1e1e22 !important;
}

.cn-preview-name {
    color: #f4f4f5 !important;
}

.cn-preview-value {
    color: #71717a !important;
}

.cn-preview-string {
    background: #18181b !important;
    color: #a1a1aa !important;
}

.cn-preview-switch {
    background: #18181b !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
}

.cn-preview-description {
    background: #18181b !important;
    color: #71717a !important;
    border-radius: 6px !important;
}

.cn-tag-list > div {
    background-color: rgba(244,244,245,0.05) !important;
    border-radius: 4px !important;
    color: #71717a !important;
}

/* ============================================
   Manager — Version Selector Dialog
   ============================================ */

/* Target the ComfyDialog that contains version selector (z-index 1100) */
.comfy-modal[style*="1100"],
.comfy-modal[style*="z-index"] {
    background: #0a0a0a !important;
    border: 1px solid #1e1e22 !important;
    border-radius: 10px !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.5) !important;
    color: #f4f4f5 !important;
    overflow: hidden !important;
}

.comfy-modal[style*="1100"] select,
.comfy-modal select {
    background: #18181b !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #f4f4f5 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 13px !important;
    padding: 6px 8px !important;
    transition: border-color 150ms ease !important;
}

.comfy-modal[style*="1100"] select:focus,
.comfy-modal select:focus {
    border-color: #818cf8 !important;
    outline: none !important;
}

.comfy-modal[style*="1100"] select option,
.comfy-modal select option {
    background: #18181b !important;
    color: #f4f4f5 !important;
    padding: 6px 8px !important;
}

.comfy-modal[style*="1100"] select option:hover,
.comfy-modal select option:hover,
.comfy-modal select option:checked {
    background: rgba(244,244,245,0.08) !important;
}

.comfy-modal[style*="1100"] button,
.comfy-modal button {
    background: #0a0a0a !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #a1a1aa !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    transition: border-color 150ms ease, color 150ms ease !important;
}

.comfy-modal[style*="1100"] button:hover,
.comfy-modal button:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
}

/* ============================================
   Manager — Disabled states
   ============================================ */

.cn-manager button:disabled,
.cn-manager input:disabled,
.cn-manager select:disabled {
    color: #3f3f46 !important;
    opacity: 0.5 !important;
    cursor: not-allowed !important;
}

/* ============================================
   Manager — General button override
   ============================================ */

.cn-manager button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    filter: none !important;
}

.cn-manager button:hover {
    filter: none !important;
}

/* ============================================
   Actionbar — Bottom Toolbar
   ============================================ */

/* ── Panel container ── */
.actionbar .p-panel-content {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    border: none !important;
    border-radius: 10px !important;
    padding: 4px 6px !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

/* When docked in top menu — keep glassmorphism */
.actionbar.p-0 .p-panel-content,
.actionbar.border-none .p-panel-content {
    border: none !important;
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border-radius: 10px !important;
}

/* ── Uniform height for all items ── */
.actionbar .p-panel-content .flex > * {
    height: 32px !important;
    display: inline-flex !important;
    align-items: center !important;
}

/* ── Batch count spinner — remove inner borders ── */
.actionbar .p-inputnumber .p-inputnumber-input,
.actionbar .p-inputnumber .p-inputnumber-button,
.actionbar .p-inputnumber-input,
.actionbar .p-inputnumber-button,
.actionbar .p-inputnumber-increment-button,
.actionbar .p-inputnumber-decrement-button {
    border: 0 !important;
    border-width: 0 !important;
    border-style: none !important;
}

/* ── Drag handle ── */
.actionbar .drag-handle {
    opacity: 0.25 !important;
    transition: opacity 150ms ease !important;
}

.actionbar .drag-handle:hover {
    opacity: 0.6 !important;
}

/* ── Queue / Run split button ── */
.comfyui-queue-button .p-splitbutton-button,
.comfyui-queue-button .p-splitbutton-dropdown {
    background: rgba(8,8,10,0.4) !important;
    border: none !important;
    color: #a1a1aa !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    height: 32px !important;
    transition: color 150ms ease, background 150ms ease !important;
}

.comfyui-queue-button .p-splitbutton-button {
    border-radius: 6px 0 0 6px !important;
    padding: 0 12px !important;
    gap: 6px !important;
}

.comfyui-queue-button .p-splitbutton-dropdown {
    border-radius: 0 6px 6px 0 !important;
    border-left: none !important;
    padding: 0 6px !important;
}

.comfyui-queue-button .p-splitbutton-button:hover,
.comfyui-queue-button .p-splitbutton-dropdown:hover {
    color: #f4f4f5 !important;
    background: rgba(255,255,255,0.06) !important;
}

/* Run label */
.comfyui-queue-button .p-splitbutton-button .p-button-label {
    color: inherit !important;
    font-weight: 500 !important;
}

/* Warning icon inside run button — subtle */
.comfyui-queue-button .p-splitbutton-button .p-button-icon {
    color: #71717a !important;
    font-size: 14px !important;
}

/* ── Cancel / Interrupt button (destructive) ── */
.actionbar button[variant="destructive"],
.actionbar .p-button-destructive,
.actionbar button:has(.icon-\\[lucide--x\\]) {
    background: rgba(10,10,10,0.5) !important;
    border: 1px solid rgba(239,68,68,0.2) !important;
    border-radius: 6px !important;
    color: #52525b !important;
    width: 32px !important;
    height: 32px !important;
    padding: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: border-color 150ms ease, color 150ms ease !important;
}

.actionbar button[variant="destructive"]:hover,
.actionbar .p-button-destructive:hover,
.actionbar button:has(.icon-\\[lucide--x\\]):hover {
    border-color: #ef4444 !important;
    color: #ef4444 !important;
    background: rgba(239,68,68,0.05) !important;
}

.actionbar button[variant="destructive"]:disabled,
.actionbar .p-button-destructive:disabled,
.actionbar button:has(.icon-\\[lucide--x\\]):disabled {
    border-color: #1e1e22 !important;
    color: #27272a !important;
    opacity: 0.5 !important;
}

/* ── Manager button in actionbar — neutralize green ── */
.comfyui-button.primary,
button.comfyui-button.primary,
.comfyui-menu-mobile-collapse.primary {
    background: rgba(10,10,10,0.5) !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #a1a1aa !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    height: 32px !important;
    padding: 0 12px !important;
    transition: border-color 150ms ease, color 150ms ease !important;
}

.comfyui-button.primary:hover,
button.comfyui-button.primary:hover,
.comfyui-menu-mobile-collapse.primary:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
}

/* ── Icon buttons in actionbar (star, bell, arrows, layout) ── */
.actionbar .p-button-text,
.actionbar .p-button-icon-only:not(.p-splitbutton-dropdown):not(.p-button-destructive):not(:has(.icon-\\[lucide--x\\])),
.actionbar button[size="icon"]:not(:has(.icon-\\[lucide--x\\])) {
    background: transparent !important;
    border: 1px solid transparent !important;
    border-radius: 6px !important;
    color: #52525b !important;
    width: 32px !important;
    height: 32px !important;
    padding: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: color 150ms ease, background 150ms ease !important;
}

.actionbar .p-button-text:hover,
.actionbar .p-button-icon-only:not(.p-splitbutton-dropdown):not(.p-button-destructive):hover,
.actionbar button[size="icon"]:not(:has(.icon-\\[lucide--x\\])):hover {
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.06) !important;
    border-color: transparent !important;
}

/* ── Batch count input ── */
.actionbar .p-inputnumber {
    height: 32px !important;
}

.actionbar .p-inputnumber .p-inputnumber-input {
    background: rgba(10,10,10,0.5) !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    color: #a1a1aa !important;
    font-size: 12px !important;
    font-variant-numeric: tabular-nums !important;
    height: 32px !important;
    width: 32px !important;
    text-align: center !important;
    padding: 0 !important;
}

.actionbar .p-inputnumber .p-inputnumber-input:focus {
    border: none !important;
    color: #f4f4f5 !important;
}

.actionbar .p-inputnumber-button {
    background: rgba(10,10,10,0.5) !important;
    border: none !important;
    color: #52525b !important;
    width: 16px !important;
    height: 16px !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: color 150ms ease, border-color 150ms ease !important;
}

.actionbar .p-inputnumber-button .p-icon,
.actionbar .p-inputnumber-button svg,
.actionbar .p-inputnumber-button i {
    width: 10px !important;
    height: 10px !important;
    font-size: 10px !important;
}

.actionbar .p-inputnumber-button:hover {
    color: #f4f4f5 !important;
    border-color: #2a2a2e !important;
    background: rgba(244,244,245,0.04) !important;
}

.actionbar .p-inputnumber-button-up {
    border-radius: 0 4px 0 0 !important;
    border-bottom: none !important;
}

.actionbar .p-inputnumber-button-down {
    border-radius: 0 0 4px 0 !important;
    border-top: none !important;
}

/* ── Queue status text ("0 active") ── */
.actionbar span[class*="active"],
.actionbar .queue-count,
.actionbar .p-panel-content .flex span {
    color: #52525b !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    font-variant-numeric: tabular-nums !important;
    white-space: nowrap !important;
}

/* ── SplitButton dropdown menu ── */
.comfyui-queue-button .p-menu,
.p-splitbutton-menu,
.p-tieredmenu {
    background: #0a0a0a !important;
    border: 1px solid #1e1e22 !important;
    border-radius: 8px !important;
    padding: 4px !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.5) !important;
}

.comfyui-queue-button .p-menuitem-link,
.p-splitbutton-menu .p-menuitem-link,
.p-tieredmenu .p-menuitem-link {
    border-radius: 6px !important;
    padding: 8px 12px !important;
    color: #a1a1aa !important;
    transition: background 150ms ease, color 150ms ease !important;
}

.comfyui-queue-button .p-menuitem-link:hover,
.p-splitbutton-menu .p-menuitem-link:hover,
.p-tieredmenu .p-menuitem-link:hover {
    background: rgba(244,244,245,0.06) !important;
    color: #f4f4f5 !important;
}

/* ============================================
   Manager — Main Settings Panel
   ============================================ */

/* Dialog container */
#cm-manager-dialog {
    background: #0a0a0a !important;
    border: 1px solid #1e1e22 !important;
    border-radius: 12px !important;
    box-shadow: none !important;
    color: #f4f4f5 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

/* Three-column layout */
.cm-menu-container {
    gap: 16px !important;
    padding: 20px !important;
}

.cm-menu-column {
    gap: 8px !important;
}

/* Labels next to dropdowns */
#cm-manager-dialog label,
#cm-manager-dialog td {
    color: #71717a !important;
    font-size: 13px !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

/* Dropdown selects (Channel, Preview method, Share, Component) */
.cm-menu-combo,
#cm-manager-dialog select {
    background: #18181b !important;
    border: 1px solid #222226 !important;
    border-radius: 6px !important;
    color: #a1a1aa !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 13px !important;
    padding: 6px 10px !important;
    cursor: pointer !important;
    transition: border-color 150ms ease !important;
    -webkit-appearance: none !important;
    appearance: none !important;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: right 8px center !important;
    padding-right: 28px !important;
}

.cm-menu-combo:hover,
#cm-manager-dialog select:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
}

.cm-menu-combo:focus,
#cm-manager-dialog select:focus {
    border-color: #818cf8 !important;
    outline: none !important;
}

#cm-manager-dialog select option {
    background: #18181b !important;
    color: #f4f4f5 !important;
}

/* Standard buttons (Community Manual, Workflow Gallery, Nodes Info, etc.) */
.cm-button,
#cm-manager-dialog button {
    background: #0a0a0a !important;
    border: 1px solid #222226 !important;
    border-radius: 8px !important;
    color: #a1a1aa !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    padding: 8px 16px !important;
    cursor: pointer !important;
    transition: border-color 150ms ease, color 150ms ease, background 150ms ease !important;
    filter: none !important;
}

.cm-button:hover,
#cm-manager-dialog button:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
    filter: none !important;
}

/* Small buttons */
.cm-small-button {
    font-size: 12px !important;
    padding: 5px 12px !important;
}

/* Red/danger buttons */
.cm-button-red,
#cm-manager-dialog .cm-button-red {
    background: #0a0a0a !important;
    border-color: rgba(239,68,68,0.3) !important;
    color: #71717a !important;
}

.cm-button-red:hover,
#cm-manager-dialog .cm-button-red:hover {
    border-color: #ef4444 !important;
    color: #ef4444 !important;
    background: rgba(239,68,68,0.05) !important;
}

/* Orange/emphasis buttons — neutralize to ghost */
.cm-button-orange,
#cm-manager-dialog .cm-button-orange {
    background: #0a0a0a !important;
    border: 1px solid #222226 !important;
    color: #a1a1aa !important;
}

.cm-button-orange:hover,
#cm-manager-dialog .cm-button-orange:hover {
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
}

/* Experimental section */
.cm-experimental {
    border: 1px solid #1e1e22 !important;
    border-radius: 8px !important;
    padding: 12px !important;
    background: transparent !important;
}

.cm-experimental-legend {
    color: #52525b !important;
    font-size: 11px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    background: #0a0a0a !important;
    padding: 2px 8px !important;
}

.cm-experimental-button {
    font-size: 12px !important;
}

/* Notice board (Keywords, Issue News) */
.cm-notice-board {
    background: #18181b !important;
    border: 1px solid #1e1e22 !important;
    border-radius: 8px !important;
    color: #a1a1aa !important;
    font-size: 13px !important;
    padding: 12px 16px !important;
}

.cm-notice-board h3,
.cm-notice-board b,
.cm-notice-board strong {
    color: #f4f4f5 !important;
}

.cm-notice-board hr {
    border-color: #1e1e22 !important;
}

.cm-notice-board a {
    color: #818cf8 !important;
}

/* Title bar */
#cm-manager-dialog .comfy-modal-content > h2,
#cm-manager-dialog h2,
#cm-manager-dialog h3 {
    color: #f4f4f5 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-weight: 600 !important;
}

/* Tables inside the dialog */
#cm-manager-dialog table {
    border-collapse: collapse !important;
}

#cm-manager-dialog table td {
    padding: 4px 8px !important;
    border: none !important;
}

/* Close button override */
#cm-manager-dialog .p-dialog-header-close,
#cm-manager-dialog > button:last-child {
    color: #71717a !important;
}

#cm-manager-dialog .p-dialog-header-close:hover,
#cm-manager-dialog > button:last-child:hover {
    color: #f4f4f5 !important;
}

/* Share dropdown menu */
.cm-share-menu,
.cm-dropdown-menu {
    background: #0a0a0a !important;
    border: 1px solid #1e1e22 !important;
    border-radius: 8px !important;
    padding: 4px !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.5) !important;
}

.cm-share-menu a,
.cm-share-menu button,
.cm-dropdown-menu a,
.cm-dropdown-menu button {
    background: transparent !important;
    border: none !important;
    border-radius: 6px !important;
    color: #a1a1aa !important;
    padding: 8px 12px !important;
    display: block !important;
    width: 100% !important;
    text-align: left !important;
    transition: background 150ms ease, color 150ms ease !important;
}

.cm-share-menu a:hover,
.cm-share-menu button:hover,
.cm-dropdown-menu a:hover,
.cm-dropdown-menu button:hover {
    background: rgba(244,244,245,0.06) !important;
    color: #f4f4f5 !important;
}

/* ============================================
   Canvas Bottom Toolbar — Glassmorphism
   ============================================ */

/* ButtonGroup at z-1200 (GraphCanvasMenu) */
[class*="z-1200"].p-buttongroup,
[class*="z-1200"][class*="bg-comfy-menu-bg"],
.p-buttongroup[class*="bottom-0"][class*="right-0"][class*="z-1200"] {
    background: var(--linear-bars-bg, rgba(8,8,10,0.75)) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border-color: rgba(30,30,34,0.7) !important;
    border-radius: 10px !important;
    overflow: hidden !important;
}

/* Individual buttons inside canvas toolbar */
[class*="z-1200"] > button,
[class*="z-1200"] .p-button {
    background: transparent !important;
    border: none !important;
    color: #52525b !important;
    transition: color 150ms ease, background 150ms ease !important;
}

[class*="z-1200"] > button:hover,
[class*="z-1200"] .p-button:hover {
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.06) !important;
}

/* Dividers inside canvas toolbar */
[class*="z-1200"] [class*="bg-node-divider"],
[class*="z-1200"] > div[class*="w-\\[1px\\]"] {
    background: rgba(30,30,34,0.7) !important;
}

/* ============================================
   Node Library / Nodes Map — Sidebar Panel
   ============================================ */

/* Sidebar tab header toolbar */
.comfy-vue-side-bar-header {
    background: transparent !important;
    border-bottom: 1px solid var(--linear-border) !important;
    padding: 8px 12px !important;
}

.comfy-vue-side-bar-header .p-toolbar {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    min-height: unset !important;
}

.comfy-vue-side-bar-header .p-toolbar .p-button {
    background: transparent !important;
    border: none !important;
    color: #52525b !important;
    width: 28px !important;
    height: 28px !important;
    padding: 0 !important;
    border-radius: 6px !important;
    transition: color 150ms ease, background 150ms ease !important;
}

.comfy-vue-side-bar-header .p-toolbar .p-button:hover {
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.06) !important;
}

/* Search box in node library */
.node-lib-search-box {
    background: transparent !important;
    padding: 8px 12px !important;
}

.node-lib-search-box input,
.node-lib-search-box .p-inputtext {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    font-size: 13px !important;
    height: 32px !important;
}

.node-lib-search-box input:focus,
.node-lib-search-box .p-inputtext:focus {
    border-color: var(--linear-accent-secondary) !important;
    box-shadow: 0 0 0 2px rgba(129,140,248,0.2) !important;
}

/* Tree explorer */
.node-lib-tree-explorer {
    background: transparent !important;
}

.node-lib-tree-explorer .tree-explorer {
    background: transparent !important;
}

.node-lib-tree-explorer .p-tree {
    background: transparent !important;
    border: none !important;
    padding: 0 4px !important;
}

.node-lib-tree-explorer .p-tree-node-content {
    border-radius: 6px !important;
    padding: 4px 8px !important;
    margin: 1px 0 !important;
    transition: background 100ms ease !important;
}

.node-lib-tree-explorer .p-tree-node-content:hover {
    background: rgba(244,244,245,0.04) !important;
}

.node-lib-tree-explorer .p-tree-node-content.p-highlight,
.node-lib-tree-explorer .p-tree-node.p-tree-node-selected > .p-tree-node-content {
    background: rgba(244,244,245,0.08) !important;
}

/* Tree node labels */
.node-lib-tree-explorer .p-tree-node-label {
    color: var(--linear-text-secondary) !important;
    font-size: 13px !important;
    font-weight: 400 !important;
}

.node-lib-tree-explorer .p-tree-node-content:hover .p-tree-node-label,
.node-lib-tree-explorer .p-tree-node-content.p-highlight .p-tree-node-label {
    color: var(--linear-text-primary) !important;
}

/* Toggle icons (chevrons) */
.node-lib-tree-explorer .p-tree-node-toggle-button,
.node-lib-tree-explorer .p-tree-toggler {
    color: #3f3f46 !important;
    width: 20px !important;
    height: 20px !important;
    background: transparent !important;
    border: none !important;
}

.node-lib-tree-explorer .p-tree-node-toggle-button:hover,
.node-lib-tree-explorer .p-tree-toggler:hover {
    color: #71717a !important;
    background: transparent !important;
}

/* Folder icons */
.node-lib-tree-explorer .p-tree-node-icon {
    color: #52525b !important;
    font-size: 14px !important;
}

.node-lib-tree-explorer .p-tree-node-content:hover .p-tree-node-icon {
    color: #71717a !important;
}

/* Leaf count badges */
.leaf-count-badge {
    background: rgba(244,244,245,0.05) !important;
    color: #3f3f46 !important;
    font-size: 11px !important;
    font-weight: 400 !important;
    border-radius: 4px !important;
    padding: 1px 6px !important;
    border: none !important;
    min-width: unset !important;
}

/* Node preview popup */
.node-lib-node-preview,
#node-library-node-preview-container {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 8px 24px -4px rgba(0,0,0,0.5) !important;
    color: var(--linear-text-primary) !important;
    overflow: hidden !important;
}

/* Bookmark tree */
.node-lib-bookmark-tree-explorer {
    background: transparent !important;
}

.node-lib-bookmark-tree-explorer .p-tree {
    background: transparent !important;
    border: none !important;
}

/* ============================================
   Templates Panel — Linear Redesign
   ============================================ */

/* Template selector dialog — ensure dark background */
.workflow-template-selector,
[class*="template-selector"],
.p-dialog:has([class*="template"]) .p-dialog-content {
    background: var(--linear-surface) !important;
    color: var(--linear-text-primary) !important;
}

/* Left side panel (categories) */
.workflow-template-selector .left-side-panel,
[class*="template"] .left-side-panel,
.left-side-panel {
    background: transparent !important;
    border-right: 1px solid var(--linear-border) !important;
}

.left-side-panel .p-listbox {
    background: transparent !important;
    border: none !important;
}

.left-side-panel .p-listbox-option {
    border-radius: 6px !important;
    color: var(--linear-text-secondary) !important;
    transition: background 100ms ease, color 100ms ease !important;
    margin: 1px 4px !important;
}

.left-side-panel .p-listbox-option:hover {
    background: rgba(244,244,245,0.04) !important;
    color: var(--linear-text-primary) !important;
}

.left-side-panel .p-listbox-option.p-highlight,
.left-side-panel .p-listbox-option.p-selected {
    background: rgba(244,244,245,0.08) !important;
    color: var(--linear-text-primary) !important;
}

/* Template cards */
[class*="template"] .p-card,
.workflow-template-card,
[class*="variant-ghost"][class*="rounded-lg"] {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    transition: border-color 150ms ease, background 150ms ease !important;
    overflow: hidden !important;
}

[class*="template"] .p-card:hover,
.workflow-template-card:hover,
[class*="variant-ghost"][class*="rounded-lg"]:hover {
    border-color: var(--linear-border-hover) !important;
    background: var(--linear-surface-elevated) !important;
}

/* Card thumbnail area */
[class*="template"] .p-card img,
.workflow-template-card img {
    border-radius: 6px !important;
    opacity: 0.9 !important;
    transition: opacity 150ms ease !important;
}

[class*="template"] .p-card:hover img,
.workflow-template-card:hover img {
    opacity: 1 !important;
}

/* Card title / description */
[class*="template"] .p-card .p-card-title,
.workflow-template-card [class*="font-semibold"] {
    color: var(--linear-text-primary) !important;
    font-weight: 500 !important;
}

[class*="template"] .p-card .p-card-subtitle,
.workflow-template-card [class*="text-muted"] {
    color: var(--linear-text-muted) !important;
    font-size: 13px !important;
}

/* Template search area */
[class*="template"] .p-iconfield,
.workflow-template-selector .p-iconfield {
    background: transparent !important;
}

/* MultiSelect / SingleSelect filters in template dialog */
[class*="template"] .p-multiselect,
[class*="template"] .p-select {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    font-size: 13px !important;
}

[class*="template"] .p-multiselect:hover,
[class*="template"] .p-select:hover {
    border-color: var(--linear-border-hover) !important;
}

/* SquareChip tags in templates */
[class*="template"] .square-chip,
.square-chip {
    background: rgba(244,244,245,0.06) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 4px !important;
    color: var(--linear-text-muted) !important;
    font-size: 11px !important;
}

/* Skeleton loading in templates */
[class*="template"] .p-skeleton,
[class*="template"] [class*="animate-pulse"] {
    background: var(--linear-surface-elevated) !important;
    border-radius: 6px !important;
}

/* Result count / status text */
[class*="template"] [class*="text-neutral"],
[class*="template"] [class*="text-muted"] {
    color: var(--linear-text-muted) !important;
}

/* Section headers inside template dialog */
[class*="template"] [class*="text-2xl"],
[class*="template"] [class*="font-semibold"] {
    color: var(--linear-text-primary) !important;
}
`;

/* ═══════════════════════════════════════════════════════════════════
   Extension Registration
   ═══════════════════════════════════════════════════════════════════ */

function stripNodeColor(node) {
    delete node.color;
    delete node.bgcolor;
}

// Ensure node is wide enough to show full title without truncation

/* ── Arrange selected nodes: straight main chain, sub-nodes below target ── */
function arrangeSelectedNodes(selectedNodes) {
    if (selectedNodes.length === 0) return;

    const graph = comfyApp.graph;
    const GRID = 10;
    const H_GAP = 40;  // 4 dots horizontal
    const V_GAP = 10;  // 1 dot vertical

    const nodeSet = new Set(selectedNodes.map(n => n.id));
    const nodeById = {};
    for (const n of selectedNodes) nodeById[n.id] = n;

    // --- 1. Topological depth (column index) ---
    const depth = {};
    const computing = new Set();

    function getDepth(node) {
        if (depth[node.id] !== undefined) return depth[node.id];
        if (computing.has(node.id)) return 0;
        computing.add(node.id);

        let maxParentDepth = -1;
        if (node.inputs) {
            for (const input of node.inputs) {
                if (input.link != null) {
                    const linkInfo = graph.links[input.link];
                    if (linkInfo && nodeSet.has(linkInfo.origin_id)) {
                        const pd = getDepth(nodeById[linkInfo.origin_id]);
                        if (pd > maxParentDepth) maxParentDepth = pd;
                    }
                }
            }
        }

        depth[node.id] = maxParentDepth + 1;
        computing.delete(node.id);
        return depth[node.id];
    }

    for (const node of selectedNodes) getDepth(node);

    // --- 1b. Find main path early (needed for depth reassignment) ---
    function findMainPathEarly() {
        const roots = selectedNodes.filter(n => depth[n.id] === 0);
        let bestPath = [];

        function dfs(node, path) {
            path.push(node);
            let extended = false;
            if (node.outputs) {
                for (const out of node.outputs) {
                    if (out.links) {
                        for (const linkId of out.links) {
                            const linkInfo = graph.links[linkId];
                            if (linkInfo && nodeSet.has(linkInfo.target_id)) {
                                dfs(nodeById[linkInfo.target_id], path);
                                extended = true;
                            }
                        }
                    }
                }
            }
            if (!extended && path.length > bestPath.length) {
                bestPath = [...path];
            }
            path.pop();
        }

        for (const root of roots) dfs(root, []);
        return new Set(bestPath.map(n => n.id));
    }

    const mainPathIds = findMainPathEarly();

    // --- 1c. Reassign sub-node depths: place at min(target_depth) - 1 ---
    // Places sub-nodes next to their EARLIEST target, not the latest
    let changed = true;
    while (changed) {
        changed = false;
        for (const node of selectedNodes) {
            if (mainPathIds.has(node.id)) continue;
            if (!node.outputs) continue;

            // Find the MINIMUM target depth in selection
            let minTargetDepth = Infinity;
            for (const out of node.outputs) {
                if (out.links) {
                    for (const linkId of out.links) {
                        const linkInfo = graph.links[linkId];
                        if (linkInfo && nodeSet.has(linkInfo.target_id)) {
                            if (depth[linkInfo.target_id] < minTargetDepth) {
                                minTargetDepth = depth[linkInfo.target_id];
                            }
                        }
                    }
                }
            }

            if (minTargetDepth !== Infinity) {
                const newDepth = minTargetDepth - 1;
                if (newDepth >= 0 && newDepth > depth[node.id]) {
                    depth[node.id] = newDepth;
                    changed = true;
                }
            }
        }
    }

    // --- 2. Group by depth ---
    const columns = {};
    for (const node of selectedNodes) {
        const d = depth[node.id];
        if (!columns[d]) columns[d] = [];
        columns[d].push(node);
    }

    // --- 3. Helpers ---
    function getNodeSize(node) {
        if (node.flags.collapsed) {
            return [
                node._collapsed_width || node.size[0],
                LiteGraph.NODE_TITLE_HEIGHT || 30
            ];
        }
        return [node.size[0], node.size[1]];
    }

    function findTarget(node) {
        if (!node.outputs) return null;
        let best = null;
        let bestDepthDiff = Infinity;

        for (const out of node.outputs) {
            if (out.links) {
                for (const linkId of out.links) {
                    const linkInfo = graph.links[linkId];
                    if (linkInfo && nodeSet.has(linkInfo.target_id)) {
                        const target = nodeById[linkInfo.target_id];
                        const dd = depth[target.id] - depth[node.id];
                        if (dd < bestDepthDiff || (dd === bestDepthDiff && (!best || linkInfo.target_slot < best.slot))) {
                            best = { node: target, slot: linkInfo.target_slot };
                            bestDepthDiff = dd;
                        }
                    }
                }
            }
        }
        return best;
    }

    const snap = (v) => Math.round(v / GRID) * GRID;
    const startX = Math.min(...selectedNodes.map(n => n.pos[0]));
    const startY = Math.min(...selectedNodes.map(n => n.pos[1]));
    const mainY = snap(startY);
    const depths = Object.keys(columns).map(Number).sort((a, b) => a - b);

    // --- 5. Compute X positions (left → right) ---
    const columnX = {};
    let curX = snap(startX);
    for (const d of depths) {
        columnX[d] = curX;
        let maxW = 0;
        for (const node of columns[d]) {
            const [w] = getNodeSize(node);
            if (w > maxW) maxW = w;
        }
        curX = snap(curX + maxW + H_GAP);
    }

    // --- DEBUG: log main path and columns ---
    console.log(`[Arrange] mainY: ${mainY}`);
    console.log(`[Arrange] Main path:`, [...mainPathIds].map(id => nodeById[id]?.title || nodeById[id]?.type || id));
    for (const d of depths) {
        console.log(`[Arrange] Col ${d}:`, columns[d].map(n => `${n.title || n.type} (${mainPathIds.has(n.id) ? 'MAIN' : 'sub'})`));
    }

    // --- 6. Place ALL nodes per column, sorted by target slot (slot 0 = top) ---
    for (const d of depths) {
        const col = columns[d];

        // Sort all nodes by the slot they connect to on their target
        col.sort((a, b) => {
            const ta = findTarget(a);
            const tb = findTarget(b);
            const sa = ta ? ta.slot : -1; // no target = top (roots)
            const sb = tb ? tb.slot : -1;
            return sa - sb;
        });

        // Stack from mainY
        let curY = snap(mainY);
        for (const node of col) {
            const [, h] = getNodeSize(node);
            node.pos[0] = columnX[d];
            node.pos[1] = curY;
            curY = snap(curY + h + V_GAP);
        }
    }

    comfyApp.canvas.setDirty(true, true);
}

/* ═══════════════════════════════════════════════════════════════════
   Module-scope dot grid data URL (shared with ThemeEditor)
   ═══════════════════════════════════════════════════════════════════ */
let currentDotDataUrl = null;

/* ═══════════════════════════════════════════════════════════════════
   Execution Glow — State Tracking
   ═══════════════════════════════════════════════════════════════════ */
const executionState = {
    runningNodeId: null,
    completedNodes: {},  // nodeId → timestamp
    errorNodes: {},      // nodeId → timestamp
};

/* ═══════════════════════════════════════════════════════════════════
   Theme Editor — Floating Panel
   ═══════════════════════════════════════════════════════════════════ */

const THEME_EDITOR_CSS = `
.te-panel {
    position: fixed; top: 60px; right: 20px; width: 280px;
    max-height: calc(100vh - 80px); overflow-y: auto;
    background: rgba(9,9,11,0.92); backdrop-filter: blur(16px);
    border: 1px solid #1e1e22; border-radius: 12px;
    z-index: 99999; font-family: Inter, system-ui, sans-serif;
    font-size: 12px; color: #a1a1aa;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    display: none;
}
.te-panel.open { display: block; }
.te-panel * { box-sizing: border-box; }
.te-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 12px; cursor: grab; user-select: none;
    border-bottom: 1px solid #1e1e22;
}
.te-header:active { cursor: grabbing; }
.te-title { font-weight: 600; color: #f4f4f5; font-size: 13px; }
.te-header-btns { display: flex; gap: 6px; }
.te-btn {
    background: none; border: none; color: #71717a; cursor: pointer;
    font-size: 14px; padding: 2px 4px; border-radius: 4px; line-height: 1;
}
.te-btn:hover { color: #f4f4f5; background: rgba(244,244,245,0.06); }
.te-section { border-bottom: 1px solid #18181b; }
.te-section:last-child { border-bottom: none; }
.te-section-header {
    display: flex; align-items: center; padding: 8px 12px;
    cursor: pointer; user-select: none; font-weight: 600;
    font-size: 10px; letter-spacing: 0.08em; color: #71717a;
    text-transform: uppercase;
}
.te-section-header:hover { color: #a1a1aa; }
.te-arrow { margin-right: 6px; font-size: 8px; transition: transform 0.15s; display: inline-block; }
.te-section.open .te-arrow { transform: rotate(90deg); }
.te-section-body { display: none; padding: 4px 12px 10px; }
.te-section.open .te-section-body { display: block; }
.te-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 4px 0; gap: 8px;
}
.te-label { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 11px; }
.te-color {
    -webkit-appearance: none; appearance: none;
    width: 28px; height: 20px; border: 1px solid #27272a; border-radius: 4px;
    cursor: pointer; background: none; padding: 0;
}
.te-color::-webkit-color-swatch-wrapper { padding: 0; }
.te-color::-webkit-color-swatch { border: none; border-radius: 3px; }
.te-color::-moz-color-swatch { border: none; border-radius: 3px; }
.te-range {
    width: 90px; height: 4px; -webkit-appearance: none; appearance: none;
    background: #27272a; border-radius: 2px; outline: none; cursor: pointer;
}
.te-range::-webkit-slider-thumb {
    -webkit-appearance: none; width: 12px; height: 12px;
    background: #f4f4f5; border-radius: 50%; cursor: pointer;
}
.te-range::-moz-range-thumb {
    width: 12px; height: 12px; background: #f4f4f5;
    border-radius: 50%; cursor: pointer; border: none;
}
.te-range-val { width: 32px; text-align: right; font-size: 10px; color: #52525b; font-variant-numeric: tabular-nums; }
.te-field-reset {
    font-size: 11px; padding: 1px 3px; opacity: 0; pointer-events: none;
    transition: opacity 0.15s; flex-shrink: 0;
}
.te-row.modified .te-field-reset { opacity: 1; pointer-events: auto; }
.te-presets { border-bottom: 1px solid #1e1e22; padding: 8px 12px; }
.te-presets-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.te-presets-bar span { font-weight: 600; font-size: 10px; letter-spacing: 0.08em; color: #71717a; text-transform: uppercase; }
.te-preset-save {
    font-size: 10px; padding: 3px 8px; border-radius: 4px;
    background: rgba(244,244,245,0.06); border: 1px solid #27272a;
    color: #a1a1aa; cursor: pointer;
}
.te-preset-save:hover { color: #f4f4f5; border-color: #3f3f46; }
.te-preset-list { display: flex; flex-direction: column; gap: 2px; }
.te-preset-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 4px 6px; border-radius: 4px; cursor: pointer;
    font-size: 11px; color: #a1a1aa;
}
.te-preset-item:hover { background: rgba(244,244,245,0.06); color: #f4f4f5; }
.te-preset-item-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.te-preset-item-btns { display: flex; gap: 2px; opacity: 0; transition: opacity 0.1s; }
.te-preset-item:hover .te-preset-item-btns { opacity: 1; }
.te-preset-del { font-size: 10px; padding: 1px 3px; }
.te-preset-empty { font-size: 10px; color: #3f3f46; padding: 4px 0; }
.te-panel::-webkit-scrollbar { width: 4px; }
.te-panel::-webkit-scrollbar-track { background: transparent; }
.te-panel::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
`;

const THEME_DEFAULTS = {
    canvas: {
        backgroundColor: "#000000",
        dotGridOpacity: 0.5,
        nodeBorderRadius: 10,
        connectionWidth: 1.5,
    },
    nodes: {
        bodyColor: "#141414",
        titleColor: "#141414",
        shadowOpacity: 0.15,
        boxIndicatorColor: "#ffffff",
        outlineColor: "#ffffff",
        outlineTransparent: false,
        titleTextColor: "#ffffff",
        widgetBackground: "#141414",
    },
    slots: {
        CLIP: "#FACC15", CONDITIONING: "#FB923C", IMAGE: "#60A5FA",
        LATENT: "#F0ABFC", MASK: "#4ADE80", MODEL: "#A78BFA",
        VAE: "#F87171", CONTROL_NET: "#34D399",
    },
    ui: {
        barsBackground: "#08080a",
        barsOpacity: 0.75,
        surface: "#0c0c0e", surfaceElevated: "#121212",
        border: "#1e1e22", textPrimary: "#ffffff",
        textSecondary: "#a1a1aa", textMuted: "#71717a",
        accent: "#ffffff", accentSecondary: "#ffffff",
    },
};

const UI_VAR_MAP = {
    surface: [
        "--linear-surface", "--interface-panel-surface", "--interface-panel-header",
        "--p-content-background", "--p-overlay-background", "--dialog-surface",
        "--modal-card-background", "--p-dialog-background", "--p-surface-100",
    ],
    surfaceElevated: [
        "--linear-surface-elevated", "--p-surface-200",
        "--button-surface", "--p-form-field-background", "--p-inputtext-background",
        "--p-select-background", "--p-button-background", "--p-button-primary-background",
        "--node-component-surface",
    ],
    border: [
        "--linear-border", "--border-color", "--interface-stroke",
        "--interface-panel-border", "--p-content-border-color",
        "--p-overlay-border-color", "--dialog-border", "--modal-card-border",
        "--p-dialog-border-color", "--p-tabs-tablist-border-color",
    ],
    textPrimary: [
        "--linear-text-primary", "--fg-color", "--text-primary", "--color-text-primary",
        "--base-foreground", "--p-text-color", "--p-content-color",
        "--interface-menu-text", "--button-text", "--p-form-field-color",
        "--p-inputtext-color", "--p-select-color",
        "--p-datatable-row-color", "--p-toast-color", "--p-dialog-color",
    ],
    textSecondary: [
        "--linear-text-secondary", "--text-secondary", "--color-text-secondary",
        "--drag-text", "--p-text-secondary-color", "--interface-menu-text-secondary",
        "--button-text-secondary",
    ],
    textMuted: [
        "--linear-text-muted", "--text-muted", "--descrip-text",
        "--p-text-muted-color", "--p-tabs-tab-color",
    ],
    accent: [
        "--linear-accent", "--p-primary-color",
    ],
    accentSecondary: [
        "--linear-accent-secondary", "--input-border-focus",
        "--p-form-field-focus-border-color", "--p-select-focus-border-color",
        "--p-inputtext-focus-border-color", "--p-focus-ring-color",
    ],
};

const SECTION_DEFS = [
    {
        key: "canvas", label: "Canvas",
        fields: [
            { key: "backgroundColor", label: "Background", type: "color" },
            { key: "dotGridOpacity", label: "Dot Grid", type: "range", min: 0, max: 0.5, step: 0.01 },
            { key: "nodeBorderRadius", label: "Node Radius", type: "range", min: 0, max: 20, step: 1 },
            { key: "connectionWidth", label: "Connection Width", type: "range", min: 1, max: 6, step: 0.5 },
        ],
    },
    {
        key: "nodes", label: "Nodes",
        fields: [
            { key: "bodyColor", label: "Body Color", type: "color" },
            { key: "titleColor", label: "Title Color", type: "color" },
            { key: "shadowOpacity", label: "Shadow", type: "range", min: 0, max: 1, step: 0.05 },
            { key: "boxIndicatorColor", label: "Box Indicator", type: "color" },
            { key: "outlineColor", label: "Outline", type: "color" },
            { key: "outlineTransparent", label: "Outline Transparent", type: "checkbox" },
            { key: "titleTextColor", label: "Title Text", type: "color" },
            { key: "widgetBackground", label: "Widget BG", type: "color" },
        ],
    },
    {
        key: "slots", label: "Slots",
        fields: Object.keys(THEME_DEFAULTS.slots).map(k => ({ key: k, label: k, type: "color" })),
    },
    {
        key: "ui", label: "UI",
        fields: [
            { key: "barsBackground", label: "Bars Color", type: "color" },
            { key: "barsOpacity", label: "Bars Opacity", type: "range", min: 0.3, max: 1, step: 0.02 },
            { key: "surface", label: "Surface", type: "color" },
            { key: "surfaceElevated", label: "Surface Elevated", type: "color" },
            { key: "border", label: "Border", type: "color" },
            { key: "textPrimary", label: "Text Primary", type: "color" },
            { key: "textSecondary", label: "Text Secondary", type: "color" },
            { key: "textMuted", label: "Text Muted", type: "color" },
            { key: "accent", label: "Accent", type: "color" },
            { key: "accentSecondary", label: "Accent Secondary", type: "color" },
        ],
    },
];

class ThemeEditor {
    constructor() {
        this.config = JSON.parse(JSON.stringify(THEME_DEFAULTS));
        this.panel = null;
        this._styleEl = null;
        this._rangeDebounce = null;
    }

    async init() {
        this._injectCSS();
        this._createPanel();
        await this._loadConfig();
        this._syncInputsToConfig();
        this.applyConfig();
        this._renderPresets();
    }

    _injectCSS() {
        if (this._styleEl) return;
        this._styleEl = document.createElement("style");
        this._styleEl.textContent = THEME_EDITOR_CSS;
        document.head.appendChild(this._styleEl);
    }

    _createPanel() {
        const panel = document.createElement("div");
        panel.className = "te-panel";
        panel.innerHTML = `
            <div class="te-header">
                <span class="te-title">Theme Editor</span>
                <div class="te-header-btns">
                    <button class="te-btn te-reset" title="Reset to defaults">↺</button>
                    <button class="te-btn te-close" title="Close">✕</button>
                </div>
            </div>
            <div class="te-body"></div>
        `;

        const body = panel.querySelector(".te-body");

        // Presets section
        const presetsDiv = document.createElement("div");
        presetsDiv.className = "te-presets";
        presetsDiv.innerHTML = `
            <div class="te-presets-bar">
                <span>Presets</span>
                <button class="te-preset-save">Save</button>
            </div>
            <div class="te-preset-list"></div>
        `;
        body.appendChild(presetsDiv);
        this._presetListEl = presetsDiv.querySelector(".te-preset-list");

        presetsDiv.querySelector(".te-preset-save").addEventListener("click", () => {
            const name = prompt("Preset name:");
            if (name && name.trim()) this._savePreset(name.trim());
        });

        const savedSections = this._loadSections();

        for (const sec of SECTION_DEFS) {
            const section = document.createElement("div");
            section.className = "te-section" + (savedSections[sec.key] ? " open" : "");
            section.dataset.section = sec.key;

            const resetBtn = `<button class="te-btn te-field-reset" data-section="\${sec}" data-key="\${key}" title="Reset to default">↺</button>`;

            let fieldsHtml = "";
            for (const f of sec.fields) {
                const val = this.config[sec.key][f.key];
                const rb = `<button class="te-btn te-field-reset" data-section="${sec.key}" data-key="${f.key}" title="Reset to default">↺</button>`;
                if (f.type === "color") {
                    fieldsHtml += `<div class="te-row">
                        <span class="te-label">${f.label}</span>
                        <input type="color" class="te-color" data-section="${sec.key}" data-key="${f.key}" value="${val}">
                        ${rb}
                    </div>`;
                } else if (f.type === "range") {
                    fieldsHtml += `<div class="te-row">
                        <span class="te-label">${f.label}</span>
                        <input type="range" class="te-range" data-section="${sec.key}" data-key="${f.key}"
                            min="${f.min}" max="${f.max}" step="${f.step}" value="${val}">
                        <span class="te-range-val">${val}</span>
                        ${rb}
                    </div>`;
                } else if (f.type === "checkbox") {
                    fieldsHtml += `<div class="te-row">
                        <span class="te-label">${f.label}</span>
                        <input type="checkbox" data-section="${sec.key}" data-key="${f.key}"
                            ${val ? "checked" : ""} style="cursor:pointer;">
                        ${rb}
                    </div>`;
                }
            }

            section.innerHTML = `
                <div class="te-section-header"><span class="te-arrow">▶</span>${sec.label}</div>
                <div class="te-section-body">${fieldsHtml}</div>
            `;
            body.appendChild(section);
        }

        // Stop propagation so canvas doesn't react
        for (const evt of ["pointerdown", "pointermove", "pointerup", "wheel", "keydown", "keyup"]) {
            panel.addEventListener(evt, e => e.stopPropagation());
        }

        panel.querySelector(".te-close").addEventListener("click", () => this.toggle(false));
        panel.querySelector(".te-reset").addEventListener("click", () => this.resetConfig());

        // Per-field reset buttons
        panel.addEventListener("click", (e) => {
            const btn = e.target.closest(".te-field-reset");
            if (!btn) return;
            const section = btn.dataset.section;
            const key = btn.dataset.key;
            if (!section || !key) return;
            this.config[section][key] = THEME_DEFAULTS[section][key];
            this._applySection(section);
            this._syncInputsToConfig();
            this._updateModifiedState();
        });

        panel.querySelectorAll(".te-section-header").forEach(header => {
            header.addEventListener("click", () => {
                header.parentElement.classList.toggle("open");
                this._saveSections();
            });
        });

        panel.addEventListener("input", (e) => this._onInputChange(e));
        this._setupDrag(panel);

        const pos = this._loadPosition();
        if (pos) {
            panel.style.top = pos.y + "px";
            panel.style.left = pos.x + "px";
            panel.style.right = "auto";
        }

        document.body.appendChild(panel);
        this.panel = panel;
    }

    toggle(force) {
        if (!this.panel) return;
        const show = force !== undefined ? force : !this.panel.classList.contains("open");
        this.panel.classList.toggle("open", show);
    }

    // ── Apply functions ──

    applyConfig() {
        this.applyCanvas();
        this.applyNodes();
        this.applySlots();
        this.applyUI();
        this.saveConfig();
        if (comfyApp.canvas) comfyApp.canvas.setDirty(true, true);
    }

    applyCanvas() {
        const c = this.config.canvas;
        const canvas = comfyApp.canvas;
        if (!canvas) return;

        // Background color — target every possible source
        if (window.LiteGraph) {
            LiteGraph.CLEAR_BACKGROUND_COLOR = c.backgroundColor;
        }
        // Instance property (what LiteGraph actually reads during render)
        canvas.clear_background_color = c.backgroundColor;
        document.body.style.background = c.backgroundColor;
        // Set --bg-color on both root AND body (ComfyUI palette sets its own --bg-color on body)
        document.documentElement.style.setProperty("--bg-color", c.backgroundColor);
        document.body.style.setProperty("--bg-color", c.backgroundColor);
        document.documentElement.style.setProperty("--base-background", c.backgroundColor);
        document.documentElement.style.setProperty("--p-surface-0", c.backgroundColor);
        document.documentElement.style.setProperty("--p-surface-50", c.backgroundColor);
        if (canvas.canvas) canvas.canvas.style.background = c.backgroundColor;

        this._buildDotGrid(c.dotGridOpacity);
        canvas.round_radius = c.nodeBorderRadius;
        canvas.connections_width = c.connectionWidth;
    }

    applyNodes() {
        const n = this.config.nodes;
        if (!window.LiteGraph) return;

        LiteGraph.NODE_DEFAULT_BGCOLOR = n.bodyColor;
        LiteGraph.NODE_DEFAULT_COLOR = n.titleColor;
        LiteGraph.DEFAULT_SHADOW_COLOR = `rgba(0,0,0,${n.shadowOpacity})`;
        LiteGraph.NODE_DEFAULT_BOXCOLOR = n.boxIndicatorColor;
        LiteGraph.NODE_BOX_OUTLINE_COLOR = n.outlineTransparent ? "rgba(0,0,0,0)" : n.outlineColor;
        LiteGraph.NODE_TITLE_COLOR = n.titleTextColor;
        document.documentElement.style.setProperty("--component-node-title-color", n.titleTextColor);
        LiteGraph.WIDGET_BGCOLOR = n.widgetBackground;
        LiteGraph.WIDGET_OUTLINE_COLOR = n.widgetBackground;

        if (comfyApp.graph?._nodes) {
            for (const node of comfyApp.graph._nodes) {
                delete node.color;
                delete node.bgcolor;
            }
        }
    }

    applySlots() {
        const canvas = comfyApp.canvas;
        if (!canvas) return;
        if (!canvas.default_connection_color_byType) canvas.default_connection_color_byType = {};
        for (const [type, color] of Object.entries(this.config.slots)) {
            canvas.default_connection_color_byType[type] = color;
        }
    }

    applyUI() {
        const u = this.config.ui;
        const root = document.documentElement;
        for (const [key, vars] of Object.entries(UI_VAR_MAP)) {
            const val = u[key];
            if (!val) continue;
            for (const v of vars) {
                if (v === "--p-focus-ring-color") {
                    root.style.setProperty(v, val + "66");
                } else {
                    root.style.setProperty(v, val);
                }
            }
        }
        // Bars glassmorphism — convert hex + opacity to rgba
        const hex = u.barsBackground || "#08080a";
        const op = u.barsOpacity ?? 0.75;
        const r = parseInt(hex.slice(1,3), 16);
        const g = parseInt(hex.slice(3,5), 16);
        const b = parseInt(hex.slice(5,7), 16);
        root.style.setProperty("--linear-bars-bg", `rgba(${r},${g},${b},${op})`);
    }

    _buildDotGrid(opacity) {
        const canvas = comfyApp.canvas;
        if (!canvas) return;
        const tileSize = 100, dotSpacing = 10;
        const c = document.createElement("canvas");
        c.width = tileSize; c.height = tileSize;
        const ctx = c.getContext("2d");
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        for (let gy = 0; gy < tileSize; gy += dotSpacing) {
            for (let gx = 0; gx < tileSize; gx += dotSpacing) {
                ctx.fillRect(gx, gy, 1, 1);
            }
        }
        currentDotDataUrl = c.toDataURL();
        canvas.background_image = currentDotDataUrl;
        canvas._pattern = null;
        canvas._pattern_img = null;

        if (window.LiteGraph) {
            Object.defineProperty(LiteGraph, "BACKGROUND_IMAGE", {
                get() { return currentDotDataUrl; },
                set() {},
                configurable: true
            });
        }
    }

    // ── Persistence ──

    async _loadConfig() {
        try {
            const resp = await fetch("/linear-theme/config");
            if (resp.ok) {
                const saved = await resp.json();
                if (saved && Object.keys(saved).length > 0) {
                    for (const section of Object.keys(THEME_DEFAULTS)) {
                        if (saved[section]) {
                            this.config[section] = { ...THEME_DEFAULTS[section], ...saved[section] };
                        }
                    }
                }
            }
        } catch (e) {
            console.warn("[LinearTheme] Failed to load config:", e);
        }
    }

    saveConfig() {
        try {
            fetch("/linear-theme/config", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.config)
            });
        } catch (e) {
            console.warn("[LinearTheme] Failed to save config:", e);
        }
    }

    resetConfig() {
        this.config = JSON.parse(JSON.stringify(THEME_DEFAULTS));
        this.applyConfig();
        this._syncInputsToConfig();
    }

    _loadPosition() {
        try {
            const raw = localStorage.getItem("linearTheme.panelPos");
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    }

    _savePosition(x, y) {
        try {
            localStorage.setItem("linearTheme.panelPos", JSON.stringify({ x, y }));
        } catch {}
    }

    _loadSections() {
        try {
            const raw = localStorage.getItem("linearTheme.sections");
            return raw ? JSON.parse(raw) : { canvas: true };
        } catch { return { canvas: true }; }
    }

    _saveSections() {
        if (!this.panel) return;
        const state = {};
        this.panel.querySelectorAll(".te-section").forEach(s => {
            state[s.dataset.section] = s.classList.contains("open");
        });
        try {
            localStorage.setItem("linearTheme.sections", JSON.stringify(state));
        } catch {}
    }

    // ── Events ──

    _onInputChange(e) {
        const el = e.target;
        const section = el.dataset.section;
        const key = el.dataset.key;
        if (!section || !key) return;

        if (el.type === "color") {
            this.config[section][key] = el.value;
            this._applySection(section);
            this._updateModifiedState();
        } else if (el.type === "range") {
            const val = parseFloat(el.value);
            this.config[section][key] = val;
            const valSpan = el.parentElement.querySelector(".te-range-val");
            if (valSpan) valSpan.textContent = val;
            clearTimeout(this._rangeDebounce);
            this._rangeDebounce = setTimeout(() => {
                this._applySection(section);
                this._updateModifiedState();
            }, 30);
            return;
        } else if (el.type === "checkbox") {
            this.config[section][key] = el.checked;
            this._applySection(section);
            this._updateModifiedState();
        }
    }

    _applySection(section) {
        switch (section) {
            case "canvas": this.applyCanvas(); break;
            case "nodes": this.applyNodes(); break;
            case "slots": this.applySlots(); break;
            case "ui": this.applyUI(); break;
        }
        this.saveConfig();
        if (comfyApp.canvas) comfyApp.canvas.setDirty(true, true);
    }

    _syncInputsToConfig() {
        if (!this.panel) return;
        this.panel.querySelectorAll("[data-section][data-key]").forEach(el => {
            const val = this.config[el.dataset.section]?.[el.dataset.key];
            if (val === undefined) return;
            if (el.type === "color") {
                el.value = val;
            } else if (el.type === "range") {
                el.value = val;
                const valSpan = el.parentElement.querySelector(".te-range-val");
                if (valSpan) valSpan.textContent = val;
            } else if (el.type === "checkbox") {
                el.checked = val;
            }
        });
        this._updateModifiedState();
    }

    _updateModifiedState() {
        if (!this.panel) return;
        this.panel.querySelectorAll(".te-row").forEach(row => {
            const input = row.querySelector("[data-section][data-key]");
            if (!input) return;
            const section = input.dataset.section;
            const key = input.dataset.key;
            const current = this.config[section]?.[key];
            const def = THEME_DEFAULTS[section]?.[key];
            const isModified = current !== def;
            row.classList.toggle("modified", isModified);
        });
    }

    // ── Presets ──

    _getPresets() {
        try {
            const raw = localStorage.getItem("linearTheme.presets");
            return raw ? JSON.parse(raw) : [];
        } catch { return []; }
    }

    _setPresets(presets) {
        try {
            localStorage.setItem("linearTheme.presets", JSON.stringify(presets));
        } catch {}
    }

    _savePreset(name) {
        const presets = this._getPresets();
        const existing = presets.findIndex(p => p.name === name);
        const entry = { name, config: JSON.parse(JSON.stringify(this.config)) };
        if (existing >= 0) {
            presets[existing] = entry;
        } else {
            presets.push(entry);
        }
        this._setPresets(presets);
        this._renderPresets();
    }

    _loadPreset(name) {
        const presets = this._getPresets();
        const preset = presets.find(p => p.name === name);
        if (!preset) return;
        // Deep merge with defaults for forward-compat
        for (const section of Object.keys(THEME_DEFAULTS)) {
            if (preset.config[section]) {
                this.config[section] = { ...THEME_DEFAULTS[section], ...preset.config[section] };
            }
        }
        this.applyConfig();
        this._syncInputsToConfig();
    }

    _deletePreset(name) {
        const presets = this._getPresets().filter(p => p.name !== name);
        this._setPresets(presets);
        this._renderPresets();
    }

    _renderPresets() {
        if (!this._presetListEl) return;
        const presets = this._getPresets();
        if (presets.length === 0) {
            this._presetListEl.innerHTML = `<div class="te-preset-empty">No saved presets</div>`;
            return;
        }
        this._presetListEl.innerHTML = presets.map(p => `
            <div class="te-preset-item" data-preset="${p.name.replace(/"/g, '&quot;')}">
                <span class="te-preset-item-name">${p.name.replace(/</g, '&lt;')}</span>
                <div class="te-preset-item-btns">
                    <button class="te-btn te-preset-del" data-preset-del="${p.name.replace(/"/g, '&quot;')}" title="Delete">✕</button>
                </div>
            </div>
        `).join("");

        // Click to load
        this._presetListEl.querySelectorAll(".te-preset-item").forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target.closest(".te-preset-del")) return;
                this._loadPreset(item.dataset.preset);
            });
        });

        // Delete buttons
        this._presetListEl.querySelectorAll(".te-preset-del").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                this._deletePreset(btn.dataset.presetDel);
            });
        });
    }

    // ── Drag ──

    _setupDrag(panel) {
        const header = panel.querySelector(".te-header");
        let dragging = false, startX, startY, origX, origY;

        header.addEventListener("pointerdown", (e) => {
            if (e.target.closest(".te-btn")) return;
            dragging = true;
            startX = e.clientX; startY = e.clientY;
            const rect = panel.getBoundingClientRect();
            origX = rect.left; origY = rect.top;
            header.setPointerCapture(e.pointerId);
        });

        header.addEventListener("pointermove", (e) => {
            if (!dragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            panel.style.left = (origX + dx) + "px";
            panel.style.top = (origY + dy) + "px";
            panel.style.right = "auto";
        });

        header.addEventListener("pointerup", (e) => {
            if (!dragging) return;
            dragging = false;
            header.releasePointerCapture(e.pointerId);
            const rect = panel.getBoundingClientRect();
            this._savePosition(rect.left, rect.top);
        });
    }
}

const themeEditor = new ThemeEditor();

// Offscreen canvas for measuring text width
const _measureCtx = document.createElement("canvas").getContext("2d");

function getCollapsedTitleWidth(node) {
    const title = (node.getTitle ? node.getTitle() : node.title) || "";
    const fontSize = LiteGraph.NODE_TEXT_SIZE || 14;
    _measureCtx.font = `${fontSize}px Inter, Arial, sans-serif`;
    const textW = _measureCtx.measureText(title).width;
    const textX = 25;  // after collapse arrow
    const slotR = 20;  // space for output dot
    return textX + textW + slotR + 10;
}

function lockCollapsedWidth(node) {
    const titleW = getCollapsedTitleWidth(node);
    let stored = node._collapsed_width || 0;
    Object.defineProperty(node, '_collapsed_width', {
        get() { return Math.max(stored, titleW); },
        set(v) { stored = v; },
        configurable: true
    });
}

// ── Group color palette (Linear-style muted colors) ──
const LINEAR_GROUP_COLORS = {
    '#335':    { bg: '#2a2a2e', accent: '#a1a1aa' },   // default (no color) → zinc
    '#8AA':    { bg: '#2d4a4a', accent: '#2dd4bf' },   // teal/cyan
    '#A88':    { bg: '#4a2d2d', accent: '#f87171' },   // red/rose
    '#b06634': { bg: '#4a3320', accent: '#fb923c' },   // brown/amber
    '#8A8':    { bg: '#2d4a2d', accent: '#4ade80' },   // green/emerald
    '#88A':    { bg: '#2d2d4a', accent: '#60a5fa' },   // blue
    '#3f789e': { bg: '#1e3a4d', accent: '#38bdf8' },   // pale blue/sky
    '#a1309b': { bg: '#3d1e3d', accent: '#c084fc' },   // purple
    '#b58b2a': { bg: '#3d3520', accent: '#fbbf24' },   // yellow/gold
};

function _hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

function installGroupOverride() {
    if (!LGraphCanvas.prototype._origDrawGroups) {
        LGraphCanvas.prototype._origDrawGroups = LGraphCanvas.prototype.drawGroups;
    }

    LGraphCanvas.prototype.drawGroups = function(canvas, ctx) {
        if (!this.graph) return;
        const groups = this.graph._groups;
        if (!groups || groups.length === 0) return;

        ctx.save();
        const scale = this.ds?.scale || 1;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            if (!group) continue;

            const pos = group._pos || group.pos;
            const size = group._size || group.size;
            if (!pos || !size) continue;

            const rawColor = group.color || '#335';
            const palette = LINEAR_GROUP_COLORS[rawColor] || { bg: rawColor, accent: rawColor };
            const bgRgb = _hexToRgb(palette.bg);
            const accentRgb = _hexToRgb(palette.accent);

            const x = pos[0], y = pos[1], w = size[0], h = size[1];
            const titleH = 34, r = 10, lineW = 1.5 / scale;

            // ── Clipped region ──
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.clip();

            // Blur backdrop
            ctx.filter = 'blur(8px)';
            ctx.fillStyle = `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, 0.3)`;
            ctx.fillRect(x - 10, y - 10, w + 20, h + 20);
            ctx.filter = 'none';

            // Frosted base
            ctx.fillStyle = `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, 0.2)`;
            ctx.fillRect(x, y, w, h);

            // Diagonal gradient (texture)
            const diagGrad = ctx.createLinearGradient(x, y, x + w, y + h);
            diagGrad.addColorStop(0, 'rgba(255,255,255,0.025)');
            diagGrad.addColorStop(0.5, 'rgba(255,255,255,0)');
            diagGrad.addColorStop(1, 'rgba(255,255,255,0.015)');
            ctx.fillStyle = diagGrad;
            ctx.fillRect(x, y, w, h);

            // Inner shadows (top light, bottom/right dark)
            const innerTop = ctx.createLinearGradient(x, y, x, y + 20);
            innerTop.addColorStop(0, 'rgba(255,255,255,0.04)');
            innerTop.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = innerTop;
            ctx.fillRect(x, y, w, 20);

            const innerBot = ctx.createLinearGradient(x, y + h - 30, x, y + h);
            innerBot.addColorStop(0, 'rgba(0,0,0,0)');
            innerBot.addColorStop(1, 'rgba(0,0,0,0.15)');
            ctx.fillStyle = innerBot;
            ctx.fillRect(x, y + h - 30, w, 30);

            const innerLeft = ctx.createLinearGradient(x, y, x + 15, y);
            innerLeft.addColorStop(0, 'rgba(255,255,255,0.02)');
            innerLeft.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = innerLeft;
            ctx.fillRect(x, y, 15, h);

            const innerRight = ctx.createLinearGradient(x + w - 15, y, x + w, y);
            innerRight.addColorStop(0, 'rgba(0,0,0,0)');
            innerRight.addColorStop(1, 'rgba(0,0,0,0.08)');
            ctx.fillStyle = innerRight;
            ctx.fillRect(x + w - 15, y, 15, h);

            // Header bar with gradient
            const headerGrad = ctx.createLinearGradient(x, y, x + w, y);
            headerGrad.addColorStop(0, `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, 0.45)`);
            headerGrad.addColorStop(1, `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, 0.1)`);
            ctx.fillStyle = headerGrad;
            ctx.fillRect(x, y, w, titleH);

            // Separator line
            ctx.beginPath();
            ctx.moveTo(x, y + titleH);
            ctx.lineTo(x + w, y + titleH);
            ctx.strokeStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.2)`;
            ctx.lineWidth = 1 / scale;
            ctx.stroke();

            // Left accent bar
            ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.6)`;
            ctx.fillRect(x, y, 3 / scale, titleH);

            ctx.restore(); // end clip

            // ── Border ──
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.strokeStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.12)`;
            ctx.lineWidth = lineW;
            ctx.stroke();

            // Top highlight
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.strokeStyle = 'rgba(255,255,255,0.06)';
            ctx.lineWidth = 1 / scale;
            ctx.stroke();

            // ── Color dot badge with LED glow ──
            const dotR = 4 / scale;
            const dotX = x + 14, dotY = y + titleH / 2;

            const outerGlow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, dotR * 4);
            outerGlow.addColorStop(0, `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.3)`);
            outerGlow.addColorStop(0.4, `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.08)`);
            outerGlow.addColorStop(1, `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0)`);
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotR * 4, 0, Math.PI * 2);
            ctx.fillStyle = outerGlow;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 1)`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dotX - 1/scale, dotY - 1/scale, dotR * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            ctx.fill();

            // ── Title text with shadow ──
            const fontSize = (LiteGraph.DEFAULT_GROUP_FONT || 24) * 0.75;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 1;
            ctx.font = `500 ${fontSize}px Inter, Arial, sans-serif`;
            ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.95)`;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(group.title || 'Group', x + 26, y + titleH / 2);
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
        }

        ctx.restore();
    };
}

comfyApp.registerExtension({
    name: "Comfy.LinearTheme",
    nodeCreated(node) {
        stripNodeColor(node);
        lockCollapsedWidth(node);
    },
    loadedGraphNode(node) {
        stripNodeColor(node);
        lockCollapsedWidth(node);
    },
    async setup() {
        // Inject CSS
        const existing = document.getElementById("linear-theme-css");
        if (existing) existing.remove();

        const style = document.createElement("style");
        style.id = "linear-theme-css";
        style.textContent = CSS;
        document.head.appendChild(style);

        // Apply LiteGraph canvas theme
        const canvas = comfyApp.canvas;
        if (canvas) {
            canvas.render_connections_border = false;

            for (const [key, value] of Object.entries(THEME)) {
                if (key === "SLOT_COLORS") continue;
                if (canvas[key] !== undefined) {
                    canvas[key] = value;
                }
            }

            // Build initial dot grid (ThemeEditor may override via applyConfig)
            {
                const tileSize = 100, dotSpacing = 10;
                const dotCanvas = document.createElement("canvas");
                dotCanvas.width = tileSize; dotCanvas.height = tileSize;
                const dotCtx = dotCanvas.getContext("2d");
                dotCtx.fillStyle = "rgba(255,255,255,0.5)";
                for (let gy = 0; gy < tileSize; gy += dotSpacing) {
                    for (let gx = 0; gx < tileSize; gx += dotSpacing) {
                        dotCtx.fillRect(gx, gy, 1, 1);
                    }
                }
                currentDotDataUrl = dotCanvas.toDataURL();
            }

            canvas.background_image = currentDotDataUrl;
            canvas._pattern = null;
            canvas._pattern_img = null;

            // Lock BACKGROUND_IMAGE so palette loading can't overwrite it
            if (window.LiteGraph) {
                Object.defineProperty(LiteGraph, "BACKGROUND_IMAGE", {
                    get() { return currentDotDataUrl; },
                    set() {},
                    configurable: true
                });
            }
        }

        // Apply theme properties to LiteGraph statics (CONNECTING_LINK_COLOR, LINK_COLOR, etc.)
        if (window.LiteGraph) {
            for (const [key, value] of Object.entries(THEME)) {
                if (key === "SLOT_COLORS") continue;
                if (typeof value === "string" && LiteGraph[key] !== undefined) {
                    LiteGraph[key] = value;
                }
            }
        }

        // Override group rendering with Linear-style groups
        installGroupOverride();

        // Force --bg-color on body (ComfyUI palette sets its own value on body)
        document.body.style.setProperty("--bg-color", THEME.CLEAR_BACKGROUND_COLOR);

        // Apply slot colors
        if (window.LiteGraph) {
            for (const [type, color] of Object.entries(THEME.SLOT_COLORS)) {
                LiteGraph.registerNodeSlotColor?.(type, color);
            }
        }

        // Dynamic CONNECTING_LINK_COLOR — reads the type from the link being
        // dragged (connecting_links[0].output/input.type) and returns its
        // byType color so links don't change color mid-drag
        if (canvas && window.LiteGraph) {
            const fallback = canvas.default_connection_color?.output_on || "#7F7";
            Object.defineProperty(LiteGraph, "CONNECTING_LINK_COLOR", {
                get() {
                    const c = comfyApp.canvas;
                    const links = c?.connecting_links || c?._connecting_links;
                    if (links && links.length > 0) {
                        const type = links[0].output?.type || links[0].input?.type;
                        if (type) {
                            const tc = c.default_connection_color_byType?.[type];
                            if (tc) return tc;
                        }
                    }
                    return fallback;
                },
                set() {},
                configurable: true
            });
        }

        // Patch image dimension text font (drawn as "10px sans-serif" by default)
        const graphCanvas = document.querySelector("canvas");
        if (graphCanvas) {
            const ctx = graphCanvas.getContext("2d");
            const origFillText = ctx.__proto__.fillText;
            ctx.__proto__.fillText = function (text, x, y, maxWidth) {
                if (typeof text === "string" && /^\d{2,5}\s*[×x]\s*\d{2,5}$/.test(text)) {
                    this.font = "11px Inter, Arial, sans-serif";
                    this.fillStyle = "#71717a";
                }
                return maxWidth !== undefined
                    ? origFillText.call(this, text, x, y, maxWidth)
                    : origFillText.call(this, text, x, y);
            };
        }

        // --- Context menu: Linear Theme submenu (compact / collapse) ---
        const origGetCanvasMenuOptions = LGraphCanvas.prototype.getCanvasMenuOptions;
        LGraphCanvas.prototype.getCanvasMenuOptions = function (...args) {
            const options = origGetCanvasMenuOptions.apply(this, args);
            const selectedNodes = Object.values(this.selected_nodes || {});
            const hasSelection = selectedNodes.length > 0;

            options.push(null); // separator
            options.push({
                content: "Linear Theme",
                has_submenu: true,
                submenu: {
                    options: [
                        {
                            content: "Compact Selected Nodes",
                            disabled: !hasSelection,
                            callback: () => {
                                for (const node of selectedNodes) {
                                    if (!node.flags.collapsed) {
                                        const minSize = node.computeSize();
                                        node.setSize(minSize);
                                    }
                                }
                                comfyApp.canvas.setDirty(true, true);
                            }
                        },
                        {
                            content: "Collapse Selected Nodes",
                            disabled: !hasSelection,
                            callback: () => {
                                for (const node of selectedNodes) {
                                    if (!node.flags.collapsed) {
                                        node.collapse();
                                    }
                                }
                                comfyApp.canvas.setDirty(true, true);
                            }
                        },
                        {
                            content: "Arrange Selected Nodes",
                            disabled: !hasSelection,
                            callback: () => {
                                arrangeSelectedNodes(selectedNodes);
                            }
                        },
                        null, // separator
                        {
                            content: "Expand Selected Nodes",
                            disabled: !hasSelection,
                            callback: () => {
                                for (const node of selectedNodes) {
                                    if (node.flags.collapsed) {
                                        node.collapse(); // toggles back
                                    }
                                }
                                comfyApp.canvas.setDirty(true, true);
                            }
                        },
                        null, // separator
                        {
                            content: "Theme Editor",
                            callback: () => {
                                themeEditor.toggle();
                            }
                        },
                    ],
                },
            });

            return options;
        };

        // --- Execution glow: API listeners ---
        if (api) {
            api.addEventListener("execution_start", () => {
                executionState.runningNodeId = null;
                const now = performance.now();
                for (const id in executionState.completedNodes) {
                    if (now - executionState.completedNodes[id] > 700) {
                        delete executionState.completedNodes[id];
                    }
                }
                executionState.errorNodes = {};
            });

            api.addEventListener("executing", (e) => {
                const nodeId = e?.detail;
                if (executionState.runningNodeId && executionState.runningNodeId !== nodeId) {
                    executionState.completedNodes[executionState.runningNodeId] = performance.now();
                    comfyApp.canvas?.setDirty(true, false);
                }
                executionState.runningNodeId = nodeId || null;
                if (nodeId) {
                    comfyApp.canvas?.setDirty(true, false);
                }
                if (!nodeId) {
                    executionState.runningNodeId = null;
                }
            });

            api.addEventListener("execution_error", (e) => {
                const nodeId = e?.detail?.node_id;
                if (nodeId) {
                    executionState.errorNodes[nodeId] = performance.now();
                    executionState.runningNodeId = null;
                    comfyApp.canvas?.setDirty(true, false);
                }
            });
        }

        // --- Theme Editor: initialize & apply saved config ---
        await themeEditor.init();

        // --- Fix: clamp floating actionbar within viewport ---
        {
            const clampActionbar = () => {
                const ab = document.querySelector('.actionbar');
                if (!ab || getComputedStyle(ab).position !== 'fixed') return;
                const maxX = window.innerWidth - ab.offsetWidth - 10;
                const maxY = window.innerHeight - ab.offsetHeight - 10;
                const curX = parseFloat(ab.style.left) || 0;
                const curY = parseFloat(ab.style.top) || 0;
                if (curX > maxX) ab.style.left = maxX + 'px';
                if (curX < 0) ab.style.left = '10px';
                if (curY > maxY) ab.style.top = maxY + 'px';
                if (curY < 0) ab.style.top = '10px';
            };
            const ab = document.querySelector('.actionbar');
            if (ab) {
                new MutationObserver(() => requestAnimationFrame(clampActionbar))
                    .observe(ab, { attributes: true, attributeFilter: ['class', 'style'] });
            }
        }

        console.log("[LinearTheme] Theme applied — v3.2 (editor + glow)");
    },

    beforeRegisterNodeDef(nodeType, nodeData) {
        const origDrawFg = nodeType.prototype.onDrawForeground;

        nodeType.prototype.onDrawForeground = function (ctx) {
            try {
                if (origDrawFg) origDrawFg.apply(this, arguments);
            } catch(e) {}

            const w = this.size[0];
            const h = this.size[1];
            const titleH = LiteGraph.NODE_TITLE_HEIGHT || 30;
            const radius = 8;

            // Cover the anti-aliasing seam between title and body
            if (!this.flags?.collapsed) {
                ctx.fillStyle = themeEditor?.config?.nodes?.bodyColor || "#18181b";
                ctx.fillRect(0, -1, w, 2);
            }

            // ── Collapsed: redraw title area (LiteGraph clips text to old width) ──
            if (this.flags?.collapsed) {
                const titleText = this.getTitle ? this.getTitle() : this.title;
                if (titleText) {
                    ctx.save();
                    const fontSize = LiteGraph.NODE_TEXT_SIZE || 14;
                    const collW = this._collapsed_width || w;
                    const normalTitleColor = themeEditor?.config?.nodes?.titleColor || "#18181b";
                    // Respect bypass (mode 4) and mute (mode 2) states
                    const isBypassed = this.mode === 4;
                    const isMuted = this.mode === 2;
                    const titleColor = isBypassed ? "#4a2060" : isMuted ? "#2a2a2a" : normalTitleColor;
                    const textColor = isBypassed ? "#b080d0" : isMuted ? "#666666" : "#e4e4e7";
                    const r = 8;
                    const arrowEnd = 22; // after collapse arrow circle
                    const textX = 25;

                    // 1. Cover LiteGraph's clipped title (after the collapse arrow)
                    ctx.fillStyle = titleColor;
                    ctx.beginPath();
                    ctx.moveTo(arrowEnd, -titleH);
                    ctx.lineTo(collW - r, -titleH);
                    ctx.arcTo(collW, -titleH, collW, -titleH + r, r);
                    ctx.lineTo(collW, -r);
                    ctx.arcTo(collW, 0, collW - r, 0, r);
                    ctx.lineTo(arrowEnd, 0);
                    ctx.closePath();
                    ctx.fill();

                    // 2. Draw full title text
                    ctx.font = `${fontSize}px Inter, Arial, sans-serif`;
                    ctx.fillStyle = textColor;
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillText(titleText, textX, -titleH * 0.5);

                    ctx.restore();
                }
            }


            // ── Execution glow ──
            const nodeId = this.id;
            const now = performance.now();
            let glowColor = null;
            let alpha = 0;

            // Running: pulsing accent glow
            if (executionState.runningNodeId == nodeId) {
                const pulse = 0.15 + 0.1 * Math.sin(now * 0.004);
                glowColor = `rgba(168, 162, 255, ${pulse})`;
                alpha = pulse;
                comfyApp.canvas?.setDirty(true, false);
            }
            // Completed: green flash that fades in 600ms
            else if (executionState.completedNodes[nodeId]) {
                const elapsed = now - executionState.completedNodes[nodeId];
                if (elapsed < 600) {
                    const t = 1 - elapsed / 600;
                    alpha = 0.35 * t;
                    glowColor = `rgba(34, 197, 94, ${alpha})`;
                    comfyApp.canvas?.setDirty(true, false);
                } else {
                    delete executionState.completedNodes[nodeId];
                }
            }
            // Error: red glow that fades in 1200ms
            else if (executionState.errorNodes[nodeId]) {
                const elapsed = now - executionState.errorNodes[nodeId];
                if (elapsed < 1200) {
                    const t = 1 - elapsed / 1200;
                    alpha = 0.4 * t;
                    glowColor = `rgba(239, 68, 68, ${alpha})`;
                    comfyApp.canvas?.setDirty(true, false);
                } else {
                    delete executionState.errorNodes[nodeId];
                }
            }

            if (glowColor && alpha > 0.01) {
                ctx.save();
                ctx.globalCompositeOperation = "lighter";
                ctx.strokeStyle = glowColor;
                ctx.lineWidth = 1.5;
                ctx.shadowColor = glowColor;
                ctx.shadowBlur = 12;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                let gx, gy, gw, gh, gr;
                if (this.flags?.collapsed) {
                    const collW = this._collapsed_width || w;
                    gx = 0;
                    gy = -titleH;
                    gw = collW;
                    gh = titleH;
                    gr = titleH * 0.5; // pill shape
                } else {
                    gx = 0;
                    gy = -titleH;
                    gw = w;
                    gh = h + titleH;
                    gr = radius;
                }

                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(gx, gy, gw, gh, [gr]);
                } else {
                    ctx.rect(gx, gy, gw, gh);
                }
                ctx.stroke();
                ctx.restore();
            }
        };
    }
});
