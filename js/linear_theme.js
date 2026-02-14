import { app } from "../../scripts/app.js";

const comfyApp = app || window.comfyAPI?.app?.app;

/*
 * Linear Dark Theme v2 for ComfyUI
 * Full remake — ~200 CSS variables, Framer Motion animations, exhaustive selectors.
 * Aesthetic: Linear / Vercel / Raycast — pure black, minimal, zinc scale.
 */

const THEME = {
    CLEAR_BACKGROUND_COLOR: "#09090b",
    NODE_TITLE_COLOR: "#e4e4e7",
    NODE_SELECTED_TITLE_COLOR: "#ffffff",
    NODE_TEXT_COLOR: "#f4f4f5",
    NODE_DEFAULT_COLOR: "#18181b",
    NODE_DEFAULT_BGCOLOR: "rgba(20,20,23,0.9)",
    NODE_DEFAULT_BOXCOLOR: "rgba(255,255,255,0.5)",
    NODE_BOX_OUTLINE_COLOR: "#f4f4f5",
    NODE_BYPASS_BGCOLOR: "#7737AA",
    NODE_ERROR_COLOUR: "#ef4444",
    DEFAULT_SHADOW_COLOR: "rgba(0,0,0,0)",
    WIDGET_BGCOLOR: "#18181b",
    WIDGET_OUTLINE_COLOR: "#222226",
    WIDGET_TEXT_COLOR: "#e4e4e7",
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
    --fg-color: #f4f4f5;
    --bg-color: #09090b;
    --comfy-menu-bg: rgba(9,9,11,0.82);
    --comfy-input-bg: #18181b;
    --input-text: #e4e4e7;
    --descrip-text: #71717a;
    --drag-text: #a1a1aa;
    --error-text: #ef4444;
    --border-color: #1e1e22;
    --border-default: #27272a;
    --content-hover-fg: #ffffff;
    --contrast-mix-color: #f4f4f5;
    --tr-even-bg-color: rgba(20,20,23,0.9);
    --tr-odd-bg-color: rgba(12,12,14,0.9);
    --comfy-menu-secondary-bg: rgba(14,14,16,0.82);

    /* ── Linear design tokens ── */
    --linear-accent: #f4f4f5;
    --linear-accent-hover: #ffffff;
    --linear-accent-subtle: rgba(244,244,245,0.08);
    --linear-accent-secondary: #818cf8;
    --linear-surface: #0c0c0e;
    --linear-surface-elevated: #141417;
    --linear-surface-raised: #18181b;
    --linear-border: #1e1e22;
    --linear-border-subtle: #18181b;
    --linear-border-hover: #2a2a2e;
    --linear-text-primary: #f4f4f5;
    --linear-text-secondary: #a1a1aa;
    --linear-text-muted: #71717a;
    --linear-text-faint: #52525b;
    --linear-danger: #ef4444;
    --linear-danger-hover: #dc2626;
    --linear-success: #22c55e;
    --linear-warning: #f59e0b;

    /* ── Component: Base ── */
    --base-background: #09090b;
    --base-foreground: #f4f4f5;

    /* ── Component: Node ── */
    --component-node-background: rgba(20,20,23,0.9);
    --component-node-background-hover: rgba(24,24,27,0.92);
    --component-node-border: #18181b;
    --component-node-border-selected: #f4f4f5;
    --component-node-title-color: #e4e4e7;
    --component-node-text-color: #f4f4f5;
    --component-node-shadow: rgba(0,0,0,0);

    /* ── Component: Node widgets ── */
    --component-node-widget-background: #18181b;
    --component-node-widget-background-highlighted: #222226;
    --component-node-widget-background-hover: #1e1e22;
    --component-node-widget-border: #222226;
    --component-node-widget-border-hover: #2a2a2e;
    --component-node-widget-text: #e4e4e7;
    --component-node-widget-secondary-text: #a1a1aa;

    /* ── Interface: Menu ── */
    --interface-menu-surface: rgba(9,9,11,0.82);
    --interface-menu-border: #1e1e22;
    --interface-menu-item-hover: rgba(244,244,245,0.06);
    --interface-menu-item-active: rgba(244,244,245,0.1);
    --interface-menu-text: #f4f4f5;
    --interface-menu-text-secondary: #a1a1aa;

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
    --button-surface: #141417;
    --button-surface-hover: #1e1e22;
    --button-active-surface: #222226;
    --button-hover-surface: #1e1e22;
    --button-border: #222226;
    --button-border-hover: #2a2a2e;
    --button-text: #f4f4f5;
    --button-text-secondary: #a1a1aa;

    /* ── Input ── */
    --input-surface: #141417;
    --input-border: #222226;
    --input-border-focus: #818cf8;
    --input-placeholder: #52525b;

    /* ── Node component (additional) ── */
    --node-component-border: #222226;
    --node-component-surface: #141417;
    --node-component-surface-hover: #1e1e22;

    /* ── Text tokens ── */
    --text-primary: #f4f4f5;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --text-faint: #52525b;
    --color-text-primary: #f4f4f5;
    --color-text-secondary: #a1a1aa;

    /* ── PrimeVue surface tokens ── */
    --p-surface-0: #000000;
    --p-surface-50: #09090b;
    --p-surface-100: #0c0c0e;
    --p-surface-200: #141417;
    --p-surface-300: #18181b;
    --p-surface-400: #1e1e22;
    --p-surface-500: #27272a;
    --p-surface-600: #3f3f46;
    --p-surface-700: #52525b;
    --p-surface-800: #71717a;
    --p-surface-900: #a1a1aa;

    /* ── PrimeVue primary ── */
    --p-primary-color: #f4f4f5;
    --p-primary-color-hover: #ffffff;
    --p-primary-color-focus: rgba(244,244,245,0.2);
    --p-primary-contrast-color: #09090b;

    /* ── PrimeVue text ── */
    --p-text-color: #f4f4f5;
    --p-text-muted-color: #71717a;
    --p-text-secondary-color: #a1a1aa;

    /* ── PrimeVue content ── */
    --p-content-background: #0c0c0e;
    --p-content-border-color: #1e1e22;
    --p-content-color: #f4f4f5;
    --p-content-hover-background: rgba(244,244,245,0.06);
    --p-content-hover-color: #ffffff;

    /* ── PrimeVue overlay ── */
    --p-overlay-background: #0c0c0e;
    --p-overlay-border-color: #1e1e22;

    /* ── PrimeVue mask ── */
    --p-mask-background: rgba(0,0,0,0.6);

    /* ── PrimeVue form field ── */
    --p-form-field-background: #141417;
    --p-form-field-border-color: #222226;
    --p-form-field-focus-border-color: #818cf8;
    --p-form-field-color: #f4f4f5;
    --p-form-field-placeholder-color: #52525b;
    --p-form-field-hover-border-color: #2a2a2e;
    --p-form-field-disabled-background: #0c0c0e;
    --p-form-field-disabled-color: #3f3f46;

    /* ── PrimeVue navigation ── */
    --p-navigation-item-active-background: rgba(244,244,245,0.08);
    --p-navigation-item-focus-background: rgba(244,244,245,0.06);
    --p-navigation-item-color: #a1a1aa;
    --p-navigation-item-focus-color: #f4f4f5;
    --p-navigation-item-active-color: #f4f4f5;

    /* ── PrimeVue anchor ── */
    --p-anchor-gutter: 2px;

    /* ── PrimeVue focus ring ── */
    --p-focus-ring-color: rgba(129,140,248,0.4);
    --p-focus-ring-width: 2px;
    --p-focus-ring-style: solid;
    --p-focus-ring-offset: 2px;

    /* ── PrimeVue tabs ── */
    --p-tabs-tablist-background: transparent;
    --p-tabs-tablist-border-color: #1e1e22;
    --p-tabs-tab-background: transparent;
    --p-tabs-tab-color: #71717a;
    --p-tabs-tab-hover-color: #f4f4f5;
    --p-tabs-tab-active-color: #f4f4f5;
    --p-tabs-tab-active-border-color: #f4f4f5;
    --p-tabs-tabpanel-background: transparent;
    --p-tabs-active-bar-background: #f4f4f5;

    /* ── PrimeVue dialog ── */
    --p-dialog-background: #0c0c0e;
    --p-dialog-border-color: #1e1e22;
    --p-dialog-color: #f4f4f5;
    --p-dialog-title-font-weight: 600;

    /* ── PrimeVue button ── */
    --p-button-background: #141417;
    --p-button-border-color: #222226;
    --p-button-color: #a1a1aa;
    --p-button-hover-background: #1e1e22;
    --p-button-hover-border-color: #2a2a2e;
    --p-button-hover-color: #ffffff;
    --p-button-active-background: #222226;
    --p-button-active-border-color: #2a2a2e;
    --p-button-focus-ring-color: rgba(129,140,248,0.4);

    /* ── PrimeVue button primary (prevent blue) ── */
    --p-button-primary-background: #141417;
    --p-button-primary-border-color: #222226;
    --p-button-primary-color: #a1a1aa;
    --p-button-primary-hover-background: #1e1e22;
    --p-button-primary-hover-border-color: #2a2a2e;
    --p-button-primary-hover-color: #f4f4f5;
    --p-button-primary-active-background: #222226;
    --p-button-primary-active-border-color: #2a2a2e;

    /* ── PrimeVue select / dropdown ── */
    --p-select-background: #141417;
    --p-select-border-color: #222226;
    --p-select-color: #f4f4f5;
    --p-select-hover-border-color: #2a2a2e;
    --p-select-focus-border-color: #818cf8;
    --p-select-overlay-background: #0c0c0e;
    --p-select-overlay-border-color: #1e1e22;
    --p-select-option-color: #f4f4f5;
    --p-select-option-focus-background: rgba(244,244,245,0.06);
    --p-select-option-focus-color: #ffffff;
    --p-select-option-selected-background: rgba(244,244,245,0.1);
    --p-select-option-selected-color: #f4f4f5;
    --p-select-option-selected-focus-background: rgba(244,244,245,0.12);
    --p-select-option-selected-focus-color: #ffffff;
    --p-select-placeholder-color: #52525b;

    /* ── PrimeVue input ── */
    --p-inputtext-background: #141417;
    --p-inputtext-border-color: #222226;
    --p-inputtext-color: #f4f4f5;
    --p-inputtext-hover-border-color: #2a2a2e;
    --p-inputtext-focus-border-color: #818cf8;
    --p-inputtext-placeholder-color: #52525b;

    /* ── PrimeVue checkbox ── */
    --p-checkbox-background: #141417;
    --p-checkbox-border-color: #222226;
    --p-checkbox-hover-border-color: #2a2a2e;
    --p-checkbox-checked-background: #f4f4f5;
    --p-checkbox-checked-border-color: #f4f4f5;
    --p-checkbox-checked-color: #09090b;
    --p-checkbox-icon-checked-color: #09090b;

    /* ── PrimeVue toggle switch ── */
    --p-toggleswitch-background: #222226;
    --p-toggleswitch-border-color: #2a2a2e;
    --p-toggleswitch-checked-background: #f4f4f5;
    --p-toggleswitch-checked-border-color: #f4f4f5;
    --p-toggleswitch-handle-background: #71717a;
    --p-toggleswitch-handle-checked-background: #09090b;

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
    background: #09090b !important;
    color: #f4f4f5 !important;
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
    background: rgba(9,9,11,0.82) !important;
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
    background-color: rgba(9,9,11,0.82) !important;
    border-color: rgba(30,30,34,0.7) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

.side-tool-bar-container .sidebar-item-group {
    background-color: rgba(9,9,11,0.82) !important;
    border: 1px solid rgba(30,30,34,0.7) !important;
    box-shadow: none !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

.p-drawer,
.p-sidebar,
.comfy-sidebar,
.side-bar-panel {
    background: rgba(12,12,14,0.82) !important;
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
    background: rgba(9,9,11,0.82) !important;
    border-color: rgba(30,30,34,0.7) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
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
    background: rgba(20,20,23,0.95) !important;
    border-radius: 4px !important;
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
    background: #09090b !important;
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
    background: rgba(9,9,11,0.82) !important;
    border: none !important;
    border-radius: 10px !important;
    padding: 4px 6px !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
}

/* When docked in top menu */
.actionbar.p-0 .p-panel-content,
.actionbar.border-none .p-panel-content {
    border: none !important;
    background: transparent !important;
    backdrop-filter: none !important;
}

/* ── Uniform height for all items ── */
.actionbar .p-panel-content .flex > * {
    height: 32px !important;
    display: inline-flex !important;
    align-items: center !important;
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
    background: rgba(10,10,10,0.5) !important;
    border: 1px solid #222226 !important;
    color: #a1a1aa !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    height: 32px !important;
    transition: border-color 150ms ease, color 150ms ease !important;
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
    border-color: #2a2a2e !important;
    color: #f4f4f5 !important;
    background: rgba(244,244,245,0.04) !important;
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
    border: 1px solid #222226 !important;
    border-right: none !important;
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
    border-color: #818cf8 !important;
    color: #f4f4f5 !important;
}

.actionbar .p-inputnumber-button {
    background: rgba(10,10,10,0.5) !important;
    border: 1px solid #222226 !important;
    border-left: none !important;
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
    background: rgba(9,9,11,0.82) !important;
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

comfyApp.registerExtension({
    name: "Comfy.LinearTheme",
    nodeCreated(node) {
        stripNodeColor(node);
    },
    loadedGraphNode(node) {
        stripNodeColor(node);
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
            for (const [key, value] of Object.entries(THEME)) {
                if (key === "SLOT_COLORS") continue;
                if (canvas[key] !== undefined) {
                    canvas[key] = value;
                }
            }

            // Replace cross grid with square dot pattern (10px spacing)
            const tileSize = 100;
            const dotSpacing = 10;
            const dotCanvas = document.createElement("canvas");
            dotCanvas.width = tileSize;
            dotCanvas.height = tileSize;
            const dotCtx = dotCanvas.getContext("2d");
            dotCtx.fillStyle = "rgba(255,255,255,0.14)";
            for (let gy = 0; gy < tileSize; gy += dotSpacing) {
                for (let gx = 0; gx < tileSize; gx += dotSpacing) {
                    dotCtx.fillRect(gx, gy, 1, 1);
                }
            }
            const dotDataUrl = dotCanvas.toDataURL();

            canvas.background_image = dotDataUrl;
            canvas._pattern = null;
            canvas._pattern_img = null;

            // Lock BACKGROUND_IMAGE so palette loading can't overwrite it
            if (window.LiteGraph) {
                Object.defineProperty(LiteGraph, "BACKGROUND_IMAGE", {
                    get() { return dotDataUrl; },
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

        console.log("[LinearTheme] Theme applied — v2.2");
    }
});
