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
    CONNECTING_LINK_COLOR: "#f4f4f5",

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
    --comfy-menu-bg: rgba(9,9,11,0.98);
    --comfy-input-bg: #18181b;
    --input-text: #e4e4e7;
    --descrip-text: #71717a;
    --drag-text: #a1a1aa;
    --error-text: #ef4444;
    --border-color: #1e1e22;
    --tr-even-bg-color: rgba(20,20,23,0.9);
    --tr-odd-bg-color: rgba(12,12,14,0.9);
    --comfy-menu-secondary-bg: rgba(14,14,16,0.98);

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
    --interface-menu-surface: rgba(9,9,11,0.98);
    --interface-menu-border: #1e1e22;
    --interface-menu-item-hover: rgba(244,244,245,0.06);
    --interface-menu-item-active: rgba(244,244,245,0.1);
    --interface-menu-text: #f4f4f5;
    --interface-menu-text-secondary: #a1a1aa;

    /* ── Interface: Panel / Sidebar ── */
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
.p-textarea {
    background: var(--input-surface) !important;
    border: 1px solid var(--input-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
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
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 16px 32px -8px rgba(0,0,0,0.5) !important;
    color: var(--linear-text-primary) !important;
    overflow: hidden !important;
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

/* ============================================
   Sidebar / Panels
   ============================================ */
.p-drawer,
.p-sidebar,
.comfy-sidebar,
.side-bar-panel {
    background: var(--interface-panel-surface) !important;
    border-right: 1px solid var(--interface-panel-border) !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
}

.side-bar-panel {
    border-left: 1px solid var(--interface-panel-border) !important;
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

/* New search component v0.13+ */
.invisible-dialog-root {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    overflow: visible !important;
}
.node-search-box-dialog-mask {
    background: transparent !important;
}

/* Node search container & autocomplete */
.comfy-vue-node-search-container,
.node-search-box,
[class*="node-search"] {
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
    background: rgba(244,244,245,0.08) !important;
    color: var(--linear-text-secondary) !important;
    border: 1px solid var(--linear-border) !important;
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
`;

/* ═══════════════════════════════════════════════════════════════════
   Extension Registration
   ═══════════════════════════════════════════════════════════════════ */

comfyApp.registerExtension({
    name: "Comfy.LinearTheme",
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
        }

        // Apply slot colors
        if (window.LiteGraph) {
            for (const [type, color] of Object.entries(THEME.SLOT_COLORS)) {
                LiteGraph.registerNodeSlotColor?.(type, color);
            }
        }

        console.log("[LinearTheme] Theme applied — v2");
    }
});
