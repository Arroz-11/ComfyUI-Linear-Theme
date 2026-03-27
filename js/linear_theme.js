import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

const comfyApp = app || window.comfyAPI?.app?.app;

/*
 * Premium Dark Theme v3 for ComfyUI
 * Comprehensive overhaul — ~200 CSS variables, exhaustive selectors.
 * Aesthetic: Ultra-clean monochrome dark, zinc scale, creative tool feel.
 */

const THEME = {
    CLEAR_BACKGROUND_COLOR: "#0d0d0d",
    NODE_TITLE_COLOR: "#ffffff",
    NODE_SELECTED_TITLE_COLOR: "#ffffff",
    NODE_TEXT_COLOR: "#ffffff",
    NODE_DEFAULT_COLOR: "#1a1a1a",
    NODE_DEFAULT_BGCOLOR: "#1a1a1a",
    NODE_DEFAULT_BOXCOLOR: "#ffffff",
    NODE_BOX_OUTLINE_COLOR: "#ffffff",
    NODE_BYPASS_BGCOLOR: "#7737AA",
    NODE_ERROR_COLOUR: "#ef4444",
    DEFAULT_SHADOW_COLOR: "rgba(0,0,0,0.15)",
    WIDGET_BGCOLOR: "#1a1a1a",
    WIDGET_OUTLINE_COLOR: "#1a1a1a",
    WIDGET_TEXT_COLOR: "#ffffff",
    WIDGET_SECONDARY_TEXT_COLOR: "#b0b0b0",
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
   Premium Dark v3 — Complete CSS Overhaul
   Ultra-clean monochrome creative tool theme.
   Zinc scale, alive but minimal.
   ============================================ */

:root {
    --fg-color: #e4e4e7;
    --bg-color: #0d0d0d;
    --primary-background: rgba(244,244,245,0.1);
    --primary-background-hover: rgba(244,244,245,0.15);
    --secondary-background: rgba(244,244,245,0.08);
    --secondary-background-hover: rgba(244,244,245,0.12);
    --comfy-menu-bg: #1a1a1a;
    --comfy-input-bg: #1a1a1a;
    --input-text: #e4e4e7;
    --descrip-text: #63636e;
    --drag-text: #8e8e99;
    --error-text: #f87171;
    --border-color: #1c1c20;
    --border-default: #242429;
    --content-hover-fg: #f4f4f5;
    --contrast-mix-color: #ffffff;
    --tr-even-bg-color: rgba(18,18,20,0.9);
    --tr-odd-bg-color: rgba(12,12,14,0.9);
    --comfy-menu-secondary-bg: #1a1a1a;
    --linear-accent: #e4e4e7;
    --linear-accent-hover: #f4f4f5;
    --linear-accent-subtle: rgba(244,244,245,0.06);
    --linear-accent-secondary: #a1a1aa;
    --linear-surface: #1a1a1a;
    --linear-surface-elevated: #111113;
    --linear-surface-raised: #1e1e21;
    --linear-border: #1c1c20;
    --linear-border-subtle: #151517;
    --linear-border-hover: #2c2c31;
    --linear-text-primary: #e4e4e7;
    --linear-text-secondary: #a1a1aa;
    --linear-text-muted: #63636e;
    --linear-text-faint: #48484f;
    --linear-danger: #f87171;
    --linear-danger-hover: #ef4444;
    --linear-success: #4ade80;
    --linear-warning: #fbbf24;
    --base-background: #0d0d0d;
    --base-foreground: #e4e4e7;
    --component-node-background: #1a1a1a;
    --component-node-background-hover: rgba(26,26,26,0.92);
    --component-node-border: #1a1a1a;
    --component-node-border-selected: #e4e4e7;
    --component-node-title-color: #ffffff;
    --component-node-text-color: #ffffff;
    --component-node-shadow: rgba(0,0,0,0.15);
    --component-node-widget-background: #1a1a1a;
    --component-node-widget-background-highlighted: #222224;
    --component-node-widget-background-hover: #1e1e21;
    --component-node-widget-border: #1e1e21;
    --component-node-widget-border-hover: #2c2c31;
    --component-node-widget-text: #e4e4e7;
    --component-node-widget-secondary-text: #a1a1aa;
    --interface-menu-surface: rgba(0,0,0,0.84);
    --interface-menu-border: #1c1c20;
    --interface-menu-item-hover: rgba(244,244,245,0.05);
    --interface-menu-item-active: rgba(244,244,245,0.08);
    --interface-menu-text: #e4e4e7;
    --interface-menu-text-secondary: #8e8e99;
    --linear-bars-bg: #1a1a1a;
    --p-highlight-background: rgba(244,244,245,0.07) !important;
    --p-highlight-color: rgba(244,244,245,0.9) !important;
    --p-divider-border-color: #242429;
    --interface-stroke: #1c1c20;
    --interface-panel-surface: #1a1a1a;
    --interface-panel-border: #1c1c20;
    --interface-panel-header: #1a1a1a;
    --interface-panel-selected-surface: rgba(244,244,245,0.07);
    --interface-panel-hover-surface: rgba(244,244,245,0.035);
    --dialog-surface: #1a1a1a;
    --dialog-border: #1c1c20;
    --dialog-overlay: rgba(0,0,0,0.65);
    --modal-card-background: #1a1a1a;
    --modal-card-border: #1c1c20;
    --button-surface: #141416;
    --button-surface-hover: #1e1e21;
    --button-active-surface: #222224;
    --button-hover-surface: #1e1e21;
    --button-border: #222224;
    --button-border-hover: #2c2c31;
    --button-text: #e4e4e7;
    --button-text-secondary: #8e8e99;
    --input-surface: #131315;
    --input-border: #1c1c20;
    --input-border-focus: #a1a1aa;
    --input-placeholder: #48484f;
    --node-component-border: #1e1e21;
    --node-component-surface: #111113;
    --node-component-surface-hover: #1e1e21;
    --text-primary: #e4e4e7;
    --text-secondary: #8e8e99;
    --text-muted: #63636e;
    --text-faint: #48484f;
    --color-text-primary: #e4e4e7;
    --color-text-secondary: #8e8e99;
    --p-surface-0: #0d0d0d;
    --p-surface-50: #0d0d0d;
    --p-surface-100: #1a1a1a;
    --p-surface-200: #1a1a1a;
    --p-surface-300: #1e1e21;
    --p-surface-400: #1c1c20;
    --p-surface-500: #242429;
    --p-surface-600: #3a3a41;
    --p-surface-700: #48484f;
    --p-surface-800: #63636e;
    --p-surface-900: #8e8e99;
    --p-primary-color: #e4e4e7;
    --p-primary-color-hover: #f4f4f5;
    --p-primary-color-focus: rgba(228,228,231,0.2);
    --p-primary-contrast-color: #09090b;
    --p-text-color: #e4e4e7;
    --p-text-muted-color: #63636e;
    --p-text-secondary-color: #a1a1aa;
    --p-content-background: #1a1a1a;
    --p-content-border-color: #1c1c20;
    --p-content-color: #e4e4e7;
    --p-content-hover-background: rgba(244,244,245,0.05);
    --p-content-hover-color: #f4f4f5;
    --p-overlay-background: #1a1a1a;
    --p-overlay-border-color: #1c1c20;
    --p-mask-background: rgba(0,0,0,0.65);
    --p-form-field-background: #131315;
    --p-form-field-border-color: #1c1c20;
    --p-form-field-focus-border-color: #a1a1aa;
    --p-form-field-color: #e4e4e7;
    --p-form-field-placeholder-color: #48484f;
    --p-form-field-hover-border-color: #2c2c31;
    --p-form-field-disabled-background: #1a1a1a;
    --p-form-field-disabled-color: #3a3a41;
    --p-navigation-item-active-background: rgba(244,244,245,0.07);
    --p-navigation-item-focus-background: rgba(244,244,245,0.05);
    --p-navigation-item-color: #8e8e99;
    --p-navigation-item-focus-color: #e4e4e7;
    --p-navigation-item-active-color: #f4f4f5;
    --p-anchor-gutter: 2px;
    --p-focus-ring-color: rgba(161,161,170,0.35);
    --p-focus-ring-width: 2px;
    --p-focus-ring-style: solid;
    --p-focus-ring-offset: 2px;
    --p-tabs-tablist-background: transparent;
    --p-tabs-tablist-border-color: #1c1c20;
    --p-tabs-tab-background: transparent;
    --p-tabs-tab-color: #63636e;
    --p-tabs-tab-hover-color: #e4e4e7;
    --p-tabs-tab-active-color: #f4f4f5;
    --p-tabs-tab-active-border-color: #e4e4e7;
    --p-tabs-tabpanel-background: transparent;
    --p-tabs-active-bar-background: #e4e4e7;
    --p-dialog-background: #1a1a1a;
    --p-dialog-border-color: #1c1c20;
    --p-dialog-color: #e4e4e7;
    --p-dialog-title-font-weight: 600;
    --p-button-background: #141416;
    --p-button-border-color: #1c1c20;
    --p-button-color: #8e8e99;
    --p-button-hover-background: #1e1e21;
    --p-button-hover-border-color: #2c2c31;
    --p-button-hover-color: #e4e4e7;
    --p-button-active-background: #222224;
    --p-button-active-border-color: #2c2c31;
    --p-button-focus-ring-color: rgba(161,161,170,0.35);
    --p-button-primary-background: #141416;
    --p-button-primary-border-color: #1c1c20;
    --p-button-primary-color: #8e8e99;
    --p-button-primary-hover-background: #1e1e21;
    --p-button-primary-hover-border-color: #2c2c31;
    --p-button-primary-hover-color: #e4e4e7;
    --p-button-primary-active-background: #222224;
    --p-button-primary-active-border-color: #2c2c31;
    --p-select-background: #131315;
    --p-select-border-color: #1c1c20;
    --p-select-color: #e4e4e7;
    --p-select-hover-border-color: #2c2c31;
    --p-select-focus-border-color: #a1a1aa;
    --p-select-overlay-background: #0e0e10;
    --p-select-overlay-border-color: #1c1c20;
    --p-select-option-color: #e4e4e7;
    --p-select-option-focus-background: rgba(244,244,245,0.05);
    --p-select-option-focus-color: #f4f4f5;
    --p-select-option-selected-background: rgba(244,244,245,0.08);
    --p-select-option-selected-color: #f4f4f5;
    --p-select-option-selected-focus-background: rgba(244,244,245,0.1);
    --p-select-option-selected-focus-color: #f4f4f5;
    --p-select-placeholder-color: #48484f;
    --p-inputtext-background: #131315;
    --p-inputtext-border-color: #1c1c20;
    --p-inputtext-color: #e4e4e7;
    --p-inputtext-hover-border-color: #2c2c31;
    --p-inputtext-focus-border-color: #a1a1aa;
    --p-inputtext-placeholder-color: #48484f;
    --p-checkbox-background: #131315;
    --p-checkbox-border-color: #1c1c20;
    --p-checkbox-hover-border-color: #2c2c31;
    --p-checkbox-checked-background: #e4e4e7;
    --p-checkbox-checked-border-color: #e4e4e7;
    --p-checkbox-checked-color: #09090b;
    --p-checkbox-icon-checked-color: #09090b;
    --p-toggleswitch-background: #222224;
    --p-toggleswitch-border-color: #2c2c31;
    --p-toggleswitch-checked-background: #e4e4e7;
    --p-toggleswitch-checked-border-color: #e4e4e7;
    --p-toggleswitch-handle-background: #63636e;
    --p-toggleswitch-handle-checked-background: #09090b;
    --p-datatable-header-background: #1a1a1a;
    --p-datatable-header-border-color: #1c1c20;
    --p-datatable-header-color: #63636e;
    --p-datatable-body-background: transparent;
    --p-datatable-row-background: transparent;
    --p-datatable-row-color: #e4e4e7;
    --p-datatable-row-hover-background: rgba(244,244,245,0.035);
    --p-datatable-row-hover-color: #f4f4f5;
    --p-datatable-body-cell-border-color: #151517;
    --p-toast-background: #111113;
    --p-toast-border-color: #1c1c20;
    --p-toast-color: #e4e4e7;
    --p-tooltip-background: #131315;
    --p-tooltip-border-color: #1c1c20;
    --p-tooltip-color: #e4e4e7;
    --p-progressbar-background: #131315;
    --p-progressbar-value-background: #e4e4e7;
    --p-tag-background: rgba(244,244,245,0.06);
    --p-tag-color: #e4e4e7;
    --p-badge-background: #e4e4e7;
    --p-badge-color: #09090b;
    --p-menu-background: #0e0e10;
    --p-menu-border-color: #1c1c20;
    --p-menu-color: #e4e4e7;
    --p-menu-item-color: #e4e4e7;
    --p-menu-item-focus-background: rgba(244,244,245,0.05);
    --p-menu-item-focus-color: #f4f4f5;
    --p-drawer-background: #1a1a1a;
    --p-drawer-border-color: #1c1c20;
    --p-sidebar-background: #1a1a1a;
    --p-sidebar-border-color: #1c1c20;
    --p-tree-background: transparent;
    --p-tree-color: #e4e4e7;
    --p-tree-node-hover-background: rgba(244,244,245,0.035);
    --p-tree-node-selected-background: rgba(244,244,245,0.07);
    --p-tree-node-color: #e4e4e7;
    --p-tree-node-hover-color: #f4f4f5;
    --p-tree-node-selected-color: #f4f4f5;
    --p-scrollbar-track-background: transparent;
    --p-scrollbar-thumb-background: #242429;
    --p-scrollbar-thumb-hover-background: #3a3a41;
    --p-divider-color: #1c1c20;
    --p-skeleton-background: #131315;
    --p-skeleton-animation-background: #1e1e21;
}

/* ── Base body ── */
body, body.litegraph { background: var(--bg-color, #0d0d0d) !important; color: var(--fg-color, #e4e4e7) !important; font-family: 'Inter', Arial, sans-serif !important; }

/* ── Dialog / Modal ── */
.manager-dialog, .p-dialog { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 14px !important; box-shadow: none !important; color: var(--linear-text-primary) !important; overflow: hidden !important; }
.p-dialog-mask { background: var(--dialog-overlay) !important; }
.p-dialog-header { background: transparent !important; border-bottom: 1px solid var(--linear-border) !important; color: var(--linear-text-primary) !important; padding: 18px 24px !important; font-size: 15px !important; letter-spacing: -0.01em !important; }
.p-dialog-content { background: var(--linear-surface) !important; color: var(--linear-text-primary) !important; padding: 20px 24px !important; }
.p-dialog-footer { background: var(--linear-surface-elevated) !important; border-top: 1px solid var(--linear-border) !important; padding: 14px 24px !important; }

/* ── Buttons ── */
.p-button, button.cm-button, .dialog button, .comfy-modal button, .manager-dialog button, .comfyui-button, .comfyui-button button, .comfyui-split-button button { background: var(--button-surface) !important; border: 1px solid var(--button-border) !important; border-radius: 7px !important; color: var(--linear-text-secondary) !important; font-weight: 500 !important; font-size: 13px !important; letter-spacing: -0.005em !important; box-shadow: none !important; cursor: pointer !important; }
.p-button:hover, button.cm-button:hover, .dialog button:hover, .comfy-modal button:hover, .manager-dialog button:hover, .comfyui-button:hover, .comfyui-button button:hover, .comfyui-split-button button:hover { background: var(--button-surface-hover) !important; border-color: var(--button-border-hover) !important; color: var(--linear-text-primary) !important; }
.p-button-primary { background: var(--button-surface) !important; border: 1px solid var(--button-border) !important; color: var(--linear-text-secondary) !important; }
.p-button-primary:hover { background: var(--button-surface-hover) !important; border-color: var(--button-border-hover) !important; color: var(--linear-text-primary) !important; }
.p-button-danger, button[style*="background-color: red"], button[style*="background: red"] { background: rgba(248,113,113,0.12) !important; border-color: rgba(248,113,113,0.25) !important; color: #f87171 !important; }
.p-button-danger:hover, button[style*="background-color: red"]:hover, button[style*="background: red"]:hover { background: rgba(248,113,113,0.18) !important; border-color: rgba(248,113,113,0.4) !important; color: #fca5a5 !important; }
.p-button-text, .p-button-outlined { background: transparent !important; border-color: transparent !important; color: var(--linear-text-secondary) !important; }
.p-button-text:hover, .p-button-outlined:hover { background: var(--linear-accent-subtle) !important; color: var(--linear-text-primary) !important; }
.p-button-secondary { background: var(--button-surface) !important; border-color: var(--button-border) !important; color: var(--linear-text-secondary) !important; }
.p-button-secondary:hover { background: var(--button-surface-hover) !important; border-color: var(--button-border-hover) !important; color: var(--linear-text-primary) !important; }

/* ── Selects / Dropdowns ── */
select, .p-select, .p-dropdown { background: var(--input-surface) !important; border: 1px solid var(--input-border) !important; border-radius: 7px !important; color: var(--linear-text-primary) !important; font-size: 13px !important; box-shadow: none !important; }
select:hover, .p-select:hover, .p-dropdown:hover { border-color: var(--linear-border-hover) !important; }
select:focus, .p-select:focus, .p-select.p-focus, .p-dropdown:focus { border-color: var(--linear-accent-secondary) !important; outline: none !important; }
select option, select optgroup { background: #0e0e10 !important; color: #e4e4e7 !important; }
.p-select-overlay, .p-dropdown-panel, .p-listbox, .p-popover { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; overflow: hidden !important; }
.p-select-option, .p-dropdown-item, .p-listbox-option { color: var(--linear-text-primary) !important; border-radius: 5px !important; margin: 2px 4px !important; padding: 7px 10px !important; }
.p-select-option:hover, .p-dropdown-item:hover, .p-listbox-option:hover, .p-select-option.p-focus, .p-listbox-option.p-focus { background: rgba(244,244,245,0.05) !important; }
.p-select-option.p-selected, .p-select-option.p-highlight, .p-dropdown-item.p-highlight, .p-listbox-option.p-selected, .p-listbox-option.p-highlight { background: rgba(244,244,245,0.08) !important; color: #f4f4f5 !important; }

/* ── Inputs ── */
input[type="text"], input[type="number"], input[type="search"], input[type="password"], input[type="email"], input[type="url"], textarea, .p-inputtext, .p-textarea, .comfy-multiline-input { background: var(--input-surface) !important; border: 1px solid var(--input-border) !important; border-radius: 7px !important; color: var(--linear-text-primary) !important; font-family: 'Inter', Arial, sans-serif !important; font-size: 13px !important; box-shadow: none !important; }
textarea.comfy-multiline-input { background: #1a1a1a !important; border-color: #1a1a1a !important; outline: none !important; }
input:hover, textarea:hover, .p-inputtext:hover { border-color: var(--linear-border-hover) !important; }
input:focus, textarea:focus, .p-inputtext:focus, .p-inputtext.p-focus { border-color: var(--linear-accent-secondary) !important; outline: none !important; }
input::placeholder, textarea::placeholder { color: var(--input-placeholder) !important; }

/* ── Tabs ── */
.p-tablist, .p-tabs { background: transparent !important; border-bottom: 1px solid var(--linear-border) !important; }
.p-tab, .p-tabpanel { color: var(--linear-text-muted) !important; background: transparent !important; border: none !important; font-size: 13px !important; font-weight: 500 !important; }
.p-tab:hover { color: var(--linear-text-primary) !important; }
.p-tab-active, .p-tab[data-p-active="true"], .p-tab.p-tab-active { color: #f4f4f5 !important; border-bottom: 2px solid var(--linear-accent) !important; }
.p-tablist .p-tabs-active-bar, .p-tab-active-bar { background: var(--linear-accent) !important; }
.workflow-tab, .workflow-tabs { background: transparent !important; border-color: var(--linear-border) !important; }
.workflow-tab { color: var(--linear-text-muted) !important; font-size: 12px !important; font-weight: 500 !important; }
.workflow-tab:hover { color: var(--linear-text-primary) !important; background: var(--linear-accent-subtle) !important; }
.workflow-tab.active, .workflow-tab[data-active="true"] { color: #f4f4f5 !important; background: rgba(244,244,245,0.06) !important; }

/* ── Tables ── */
.p-datatable, table { background: transparent !important; }
.p-datatable-thead > tr > th, table th { background: var(--linear-surface) !important; border-bottom: 1px solid var(--linear-border) !important; color: var(--linear-text-muted) !important; font-weight: 500 !important; font-size: 11px !important; text-transform: uppercase !important; letter-spacing: 0.04em !important; padding: 10px 14px !important; }
.p-datatable-tbody > tr, table tr { border-bottom: 1px solid var(--linear-border-subtle) !important; }
.p-datatable-tbody > tr:hover, table tr:hover { background: rgba(244,244,245,0.025) !important; }
.p-datatable-tbody > tr > td, table td { color: var(--linear-text-primary) !important; padding: 10px 14px !important; font-size: 13px !important; }

/* ── Scrollbars ── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #222224; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #3a3a41; }
* { scrollbar-width: thin; scrollbar-color: #222224 transparent; }

/* ── Tooltips ── */
.p-tooltip { background: var(--linear-surface-elevated) !important; border: 1px solid var(--linear-border) !important; border-radius: 7px !important; color: var(--linear-text-primary) !important; font-size: 12px !important; }
.p-tooltip .p-tooltip-text { background: transparent !important; color: inherit !important; }

/* ── Checkboxes / Toggles ── */
.p-checkbox .p-checkbox-box, .p-checkbox-box { background: var(--input-surface) !important; border: 1px solid #242429 !important; border-radius: 4px !important; }
.p-checkbox .p-checkbox-box.p-highlight, .p-checkbox-box.p-highlight, .p-checkbox.p-checkbox-checked .p-checkbox-box { background: #e4e4e7 !important; border-color: #e4e4e7 !important; }
.p-checkbox .p-checkbox-icon, .p-checkbox-icon { color: #09090b !important; }
.p-toggleswitch .p-toggleswitch-slider, .p-toggleswitch-slider { background: #222224 !important; border: 1px solid #2c2c31 !important; border-radius: 12px !important; }
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider, .p-toggleswitch-checked .p-toggleswitch-slider { background: #e4e4e7 !important; border-color: #e4e4e7 !important; }

/* ── Badges / Tags ── */
.p-badge, .p-tag { border-radius: 5px !important; font-weight: 500 !important; font-size: 11px !important; }
.p-badge { background: #e4e4e7 !important; color: #09090b !important; }
.p-tag { background: rgba(244,244,245,0.06) !important; color: #a1a1aa !important; border: 1px solid rgba(244,244,245,0.08) !important; }

/* ── Menus & Context Menus ── */
.p-menu, .p-contextmenu, .p-menubar { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; box-shadow: none !important; color: var(--linear-text-primary) !important; overflow: hidden !important; padding: 4px !important; }
.p-menuitem > .p-menuitem-content, .p-menuitem-link { color: var(--linear-text-primary) !important; border-radius: 6px !important; }
.p-menuitem:hover > .p-menuitem-content, .p-menuitem-link:hover { background: rgba(244,244,245,0.05) !important; }
.p-menuitem .p-menuitem-icon { color: var(--linear-text-muted) !important; }

/* Litegraph context menu */
.litegraph.litecontextmenu, .litegraph.litecontextmenu.dark { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; color: var(--linear-text-primary) !important; font-family: 'Inter', Arial, sans-serif !important; overflow: hidden !important; z-index: 9999 !important; padding: 4px !important; }
.litegraph .litemenu-entry, .litemenu-title { font-family: 'Inter', Arial, sans-serif !important; color: var(--linear-text-secondary) !important; padding: 5px 10px !important; border-radius: 5px !important; margin: 1px 0 !important; }
.litegraph .litemenu-entry:hover:not(.disabled):not(.separator) { background: rgba(244,244,245,0.05) !important; color: #f4f4f5 !important; }
.litegraph .litemenu-entry.separator { border-top: 1px solid var(--linear-border) !important; height: 0px !important; margin: 4px 8px !important; padding: 0 !important; background: transparent !important; }
.litegraph .litemenu-entry.has_submenu { border-right: 2px solid #48484f !important; }
.litegraph .litemenu-entry.disabled { opacity: 0.4 !important; color: var(--linear-text-muted) !important; }
.litemenu-title { color: #f4f4f5 !important; background: transparent !important; font-weight: 600 !important; font-size: 12px !important; padding: 8px 10px 6px !important; }

/* ── Sidebar / Panels ── */
.shadow-interface { box-shadow: none !important; }
[class*="shadow-"] { box-shadow: none !important; }
.drop-shadow-\(--interface-panel-drop-shadow\) { filter: none !important; --tw-drop-shadow: none !important; }
.side-tool-bar-container { background: transparent !important; border: none !important; }
.side-tool-bar-container.connected-sidebar { background-color: transparent !important; border: none !important; }
.side-tool-bar-container .sidebar-item-group { background-color: #131313 !important; border: none !important; box-shadow: none !important; }
.p-drawer, .p-sidebar, .comfy-sidebar, .side-bar-panel { background: #1a1a1a !important; border: none !important; box-shadow: none !important; color: var(--linear-text-primary) !important; }
.side-bar-panel { border: none !important; }
.p-panel { box-shadow: none !important; }
.p-panel .p-panel-content { background: #1a1a1a !important; border-color: var(--linear-border) !important; }
.actionbar-container { position: relative !important; background: #131313 !important; border: none !important; border-radius: 10px !important; isolation: isolate !important; }
.actionbar-container::before { content: ''; position: absolute; inset: 0; background: #131313; border-radius: inherit; z-index: -1; pointer-events: none; }
.actionbar.fixed, .actionbar[style*="position: fixed"], .actionbar[style*="position:fixed"] { background: #131313 !important; border: none !important; border-radius: 10px !important; }
.graph-canvas-panel .p-buttongroup, .graph-canvas-panel span.p-buttongroup { background: #131313 !important; border: none !important; border-radius: 10px !important; outline: none !important; }
.graph-canvas-panel .p-buttongroup button,
.graph-canvas-panel .p-buttongroup .p-button,
.graph-canvas-panel .p-buttongroup [class*="button"] { background: transparent !important; border: none !important; border-color: transparent !important; outline: none !important; color: #e4e4e7 !important; }
.graph-canvas-panel .p-buttongroup button:hover,
.graph-canvas-panel .p-buttongroup .p-button:hover { color: #e4e4e7 !important; background: rgba(244,244,245,0.06) !important; }
.graph-canvas-panel .p-buttongroup button[aria-pressed="true"],
.graph-canvas-panel .p-buttongroup .bg-interface-panel-selected-surface { background: rgba(244,244,245,0.08) !important; color: #e4e4e7 !important; border: none !important; }
.graph-canvas-panel .p-buttongroup [class*="separator"],
.graph-canvas-panel .p-buttongroup [class*="divider"] { background: #1e1e22 !important; }
.bottom-panel { background: #1a1a1a !important; border-top: 1px solid var(--linear-border) !important; }
.graph-canvas-container { background: var(--bg-color, #0d0d0d) !important; }
.side-bar-panel, .bottom-panel, .p-drawer, .p-sidebar { contain: layout style paint !important; }
.actionbar-container { contain: none !important; }
canvas { will-change: transform !important; }
.graph-canvas-container * { -webkit-font-smoothing: antialiased !important; }

/* Graph button / secondary backgrounds */
.bg-secondary-background { background: #131313 !important; border: none !important; }

/* Sidebar icon rail */
.side-tool-bar-container button { color: #48484f !important; border-radius: 7px !important; background: transparent !important; border: none !important; outline: none !important; }
.side-tool-bar-container button:hover { color: #a1a1aa !important; background: rgba(244,244,245,0.06) !important; border: none !important; }
.side-tool-bar-container button.active, .side-tool-bar-container button[aria-selected="true"] { color: #e4e4e7 !important; background: rgba(244,244,245,0.08) !important; border: none !important; }
hr, .p-divider { border-color: #242429 !important; }

/* ── Progress bars ── */
.p-progressbar { background: var(--linear-surface-elevated) !important; border-radius: 4px !important; height: 3px !important; overflow: hidden !important; }
.p-progressbar-value { background: #e4e4e7 !important; border-radius: 4px !important; }

/* ── Close buttons ── */
.p-dialog-header-close, .p-button-icon-only { color: var(--linear-text-muted) !important; background: transparent !important; border: none !important; }
.p-dialog-header-close:hover, .p-button-icon-only:hover { color: var(--linear-text-primary) !important; background: rgba(244,244,245,0.06) !important; border-radius: 6px !important; }

/* ── Toast ── */
.p-toast-message { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; color: var(--linear-text-primary) !important; }
.p-toast-message-content { color: inherit !important; }
.p-toast-close-button { color: var(--linear-text-muted) !important; }
.p-toast-close-button:hover { color: var(--linear-text-primary) !important; background: rgba(244,244,245,0.06) !important; }

/* ── Search / Filter ── */
.p-iconfield, .p-inputicon { color: var(--linear-text-muted) !important; }
.litesearchbox { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 12px !important; }
.litesearchbox .helper { overflow: auto !important; max-height: 300px !important; }
.invisible-dialog-root, .p-dialog.invisible-dialog-root { background: transparent !important; border: none !important; box-shadow: none !important; overflow: visible !important; }
.node-search-box-dialog-mask, .p-dialog-mask.node-search-box-dialog-mask { background: rgba(0,0,0,0.3) !important; }
.comfy-vue-node-search-container, .node-search-box { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 12px !important; color: var(--linear-text-primary) !important; }
.comfy-vue-node-search-container .p-autocomplete, .node-search-box .p-autocomplete { background: transparent !important; }
.comfy-vue-node-search-container .p-autocomplete-input, .node-search-box .p-autocomplete-input, .comfy-vue-node-search-container input, .node-search-box input { background: transparent !important; border: none !important; border-bottom: 1px solid var(--linear-border) !important; border-radius: 0 !important; color: var(--linear-text-primary) !important; font-size: 14px !important; padding: 12px 16px !important; }
.comfy-vue-node-search-container .p-autocomplete-input:focus, .node-search-box .p-autocomplete-input:focus { border-bottom-color: var(--linear-accent-secondary) !important; }
.comfy-vue-node-search-container .p-autocomplete-overlay, .comfy-vue-node-search-container .p-autocomplete-panel, .node-search-box .p-autocomplete-overlay, .node-search-box .p-autocomplete-panel, .p-autocomplete-overlay { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; color: var(--linear-text-primary) !important; }
.comfy-vue-node-search-container .p-autocomplete-option, .comfy-vue-node-search-container .p-autocomplete-item, .node-search-box .p-autocomplete-option, .node-search-box .p-autocomplete-item, .p-autocomplete-option { background: transparent !important; color: var(--linear-text-primary) !important; border-bottom: 1px solid var(--linear-border-subtle) !important; padding: 8px 16px !important; }
.comfy-vue-node-search-container .p-autocomplete-option:hover, .comfy-vue-node-search-container .p-autocomplete-item:hover, .p-autocomplete-option:hover, .p-autocomplete-option.p-focus { background: rgba(244,244,245,0.04) !important; color: #f4f4f5 !important; }
.comfy-vue-node-search-container .p-autocomplete-option.p-highlight, .p-autocomplete-option.p-highlight { background: rgba(244,244,245,0.07) !important; color: #f4f4f5 !important; }
.comfy-vue-node-search-container .p-tag, .comfy-vue-node-search-container .p-badge, .comfy-vue-node-search-container [class*="badge"], .node-search-box .p-tag { background: rgba(244,244,245,0.05) !important; color: var(--linear-text-muted) !important; border: 1px solid rgba(244,244,245,0.06) !important; border-radius: 5px !important; padding: 2px 8px !important; font-size: 11px !important; font-weight: 400 !important; line-height: 1.4 !important; }
.comfy-vue-node-search-container .option-badges { display: flex !important; align-items: center !important; gap: 6px !important; }
.comfy-vue-node-search-container .node-search-item-category, .comfy-vue-node-search-container [class*="category"], .comfy-vue-node-search-container [class*="subtitle"], .comfy-vue-node-search-container [class*="secondary"] { color: var(--linear-text-muted) !important; }
.comfy-vue-node-search-container .p-button, .node-search-box .p-button { background: transparent !important; border: 1px solid var(--linear-border) !important; color: var(--linear-text-secondary) !important; }
.comfy-vue-node-search-container .p-autocomplete-empty-message { color: var(--linear-text-muted) !important; padding: 16px !important; text-align: center !important; }
.litesearchbox input { background: transparent !important; border: none !important; border-bottom: 1px solid var(--linear-border) !important; border-radius: 0 !important; color: var(--linear-text-primary) !important; padding: 12px 16px !important; font-size: 14px !important; }
.lite-search-item, .litesearchbox .lite-search-item { color: var(--linear-text-secondary) !important; padding: 7px 16px !important; border-radius: 5px !important; margin: 1px 4px !important; }
.lite-search-item:hover, .litesearchbox .lite-search-item:hover { background: rgba(244,244,245,0.05) !important; color: #f4f4f5 !important; }
.lite-search-item.selected { background: rgba(244,244,245,0.08) !important; color: #f4f4f5 !important; }

/* ── Chip / Tag ── */
.p-chip { background: rgba(244,244,245,0.06) !important; color: var(--linear-text-primary) !important; border-radius: 5px !important; border: 1px solid rgba(244,244,245,0.08) !important; }

/* ── Settings dialog ── */
.comfy-settings, .settings-container { background: var(--linear-surface) !important; color: var(--linear-text-primary) !important; }
.comfy-settings .settings-header, .settings-container .settings-header { border-bottom: 1px solid var(--linear-border) !important; }
.p-dialog:has(.settings-container), .p-dialog:has([class*="settings"]) { border-radius: 14px !important; overflow: hidden !important; }
.settings-container { background: #0d0d0d !important; color: #e4e4e7 !important; }
.settings-container .p-splitter-panel:first-child, .settings-container [class*="sidebar"], .settings-container [class*="nav-panel"], .settings-container .left-panel { background: #111113 !important; border-right: 1px solid #1c1c20 !important; }
.settings-container [class*="section-header"], .settings-container [class*="nav-header"], .settings-container .p-listbox-option-group, .settings-container [class*="uppercase"] { color: #48484f !important; font-size: 10px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; padding: 12px 16px 6px !important; }
.settings-container .p-listbox-option, .settings-container [class*="nav-item"], .settings-container [class*="setting-category"] { color: #8e8e99 !important; border-radius: 6px !important; margin: 1px 8px !important; padding: 8px 12px !important; font-size: 13px !important; }
.settings-container .p-listbox-option:hover, .settings-container [class*="nav-item"]:hover { background: rgba(244,244,245,0.04) !important; color: #e4e4e7 !important; }
.settings-container .p-listbox-option.p-highlight, .settings-container .p-listbox-option.p-selected, .settings-container [class*="nav-item"].active, .settings-container [class*="nav-item"][aria-selected="true"] { background: rgba(244,244,245,0.07) !important; color: #f4f4f5 !important; font-weight: 500 !important; }
.settings-container .p-splitter-panel:last-child, .settings-container .right-panel, .settings-container [class*="content-panel"] { background: #0d0d0d !important; padding: 24px 32px !important; }
.settings-container [class*="content-header"], .settings-container h2, .settings-container h3 { color: #e4e4e7 !important; font-weight: 600 !important; letter-spacing: -0.01em !important; }
.settings-container input[type="search"], .settings-container input[type="text"], .settings-container .p-inputtext, .settings-container [class*="search"] input { background: #131315 !important; border: 1px solid #1c1c20 !important; border-radius: 7px !important; color: #e4e4e7 !important; font-size: 13px !important; height: 36px !important; }
.settings-container input:focus, .settings-container .p-inputtext:focus { border-color: #a1a1aa !important; outline: none !important; }
.settings-container [class*="setting-item"], .settings-container [class*="setting-row"] { padding: 16px 0 !important; border-bottom: 1px solid rgba(28,28,32,0.5) !important; }
.settings-container [class*="setting-label"], .settings-container label { color: #e4e4e7 !important; font-size: 13px !important; font-weight: 500 !important; }
.settings-container [class*="setting-description"], .settings-container [class*="setting-tooltip"], .settings-container .text-muted { color: #48484f !important; font-size: 12px !important; line-height: 1.5 !important; }
.settings-container .p-select, .settings-container select { background: #131315 !important; border: 1px solid #1c1c20 !important; border-radius: 7px !important; color: #e4e4e7 !important; font-size: 13px !important; min-height: 36px !important; }
.settings-container .p-select:hover, .settings-container select:hover { border-color: #2c2c31 !important; }
.settings-container .p-splitter-gutter { background: transparent !important; width: 1px !important; }
.settings-container .p-splitter-gutter-handle { background: #1c1c20 !important; }

/* ── Lists ── */
.comfy-list, .comfy-list-items { background: transparent !important; color: var(--linear-text-primary) !important; }
.comfy-list-items > * { border-bottom: 1px solid var(--linear-border-subtle) !important; padding: 8px 12px !important; }
.comfy-list-items > *:hover { background: rgba(244,244,245,0.03) !important; }
.comfyui-popup { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; color: var(--linear-text-primary) !important; }
.node-title-editor { background: #111113 !important; border-radius: 6px !important; min-width: 300px !important; box-sizing: border-box !important; }
.editable-text { color: var(--linear-text-primary) !important; }
.editable-text input, .editable-text textarea { background: var(--input-surface) !important; border: 1px solid var(--linear-accent-secondary) !important; border-radius: 5px !important; color: var(--linear-text-primary) !important; }

/* ── Tree / File explorer ── */
.tree-node, .tree-folder, .p-tree-node, .p-tree-node-content { color: var(--linear-text-primary) !important; border-radius: 6px !important; }
.tree-node:hover, .tree-folder:hover, .p-tree-node-content:hover { background: rgba(244,244,245,0.035) !important; }
.tree-node.selected, .p-tree-node-content.p-highlight, .p-tree-node.p-tree-node-selected > .p-tree-node-content { background: rgba(244,244,245,0.07) !important; color: #f4f4f5 !important; }

/* ── Markdown ── */
.comfy-markdown { color: var(--linear-text-primary) !important; }
.comfy-markdown a { color: #a1a1aa !important; text-decoration: underline !important; text-underline-offset: 2px !important; }
.comfy-markdown a:hover { color: #f4f4f5 !important; }
.comfy-markdown code { background: rgba(244,244,245,0.06) !important; border: 1px solid var(--linear-border) !important; border-radius: 4px !important; color: #a1a1aa !important; padding: 2px 5px !important; font-size: 12px !important; }
.comfy-markdown pre { background: var(--linear-surface-elevated) !important; border: 1px solid var(--linear-border) !important; border-radius: 8px !important; padding: 14px !important; }
.model_preview_top_container { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; }
.maskEditor-ui-container { background: var(--linear-surface) !important; color: var(--linear-text-primary) !important; }
.graph-canvas-container { background: var(--bg-color, #0d0d0d) !important; }
.comfyui-body-top, .comfyui-body-bottom, .comfyui-body-left, .comfyui-body-right { background: transparent !important; }
.selection-toolbox { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; }
.litegraph-minimap { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 8px !important; opacity: 0.75 !important; }
.comfyui-split-button { border-radius: 7px !important; overflow: hidden !important; }
.comfyui-split-button .comfyui-split-primary { border-right: 1px solid var(--linear-border) !important; }

/* ── Sliders ── */
.p-slider { background: #222224 !important; border-radius: 4px !important; height: 4px !important; }
.p-slider .p-slider-range { background: #a1a1aa !important; }
.p-slider .p-slider-handle { background: #e4e4e7 !important; border: 2px solid #e4e4e7 !important; width: 14px !important; height: 14px !important; border-radius: 50% !important; font-size: 0 !important; line-height: 0 !important; text-indent: -9999px !important; overflow: hidden !important; cursor: pointer !important; }
.p-slider .p-slider-handle:hover { transform: scale(1.15) !important; }
.p-slider .p-slider-handle::before, .p-slider .p-slider-handle::after { display: none !important; }

/* ── Accordion ── */
.p-accordion-header { background: transparent !important; border: none !important; border-bottom: 1px solid var(--linear-border) !important; color: var(--linear-text-primary) !important; }
.p-accordion-header:hover { background: rgba(244,244,245,0.03) !important; }
.p-accordion-content { background: transparent !important; border: none !important; color: var(--linear-text-primary) !important; }
.p-autocomplete-panel { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; }
.p-autocomplete-item { color: var(--linear-text-primary) !important; }
.p-autocomplete-item:hover { background: rgba(244,244,245,0.04) !important; }
.p-splitter { background: transparent !important; border: none !important; }
.p-splitter-gutter { background: var(--linear-border) !important; }
.p-card { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; box-shadow: none !important; color: var(--linear-text-primary) !important; }
.p-divider { border-color: var(--linear-border) !important; }
.p-skeleton { background: var(--linear-surface-elevated) !important; }
*:focus-visible { outline: 2px solid rgba(161,161,170,0.3) !important; outline-offset: 2px !important; }
.p-progress-spinner-circle { stroke: #a1a1aa !important; }
.p-fieldset { background: transparent !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; }
.p-fieldset-legend { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 6px !important; color: var(--linear-text-primary) !important; }
.p-scrollpanel .p-scrollpanel-bar { background: #222224 !important; border-radius: 3px !important; }
.p-scrollpanel .p-scrollpanel-bar:hover { background: #3a3a41 !important; }
.p-confirmdialog { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 14px !important; }
.p-inputnumber-button { background: var(--linear-surface-elevated) !important; border: 1px solid var(--linear-border) !important; color: var(--linear-text-muted) !important; }
.p-inputnumber-button:hover { background: var(--button-surface-hover) !important; color: var(--linear-text-primary) !important; }
.p-radiobutton .p-radiobutton-box { background: var(--input-surface) !important; border: 1px solid #242429 !important; }
.p-radiobutton .p-radiobutton-box.p-highlight { background: var(--input-surface) !important; border-color: #e4e4e7 !important; }
.p-radiobutton .p-radiobutton-icon { background: #e4e4e7 !important; }
.p-textarea { background: var(--input-surface) !important; border: 1px solid var(--input-border) !important; border-radius: 7px !important; color: var(--linear-text-primary) !important; }
.p-breadcrumb { background: transparent !important; border: none !important; }
.p-breadcrumb-item-link { color: var(--linear-text-muted) !important; }
.p-breadcrumb-item-link:hover { color: var(--linear-text-primary) !important; }
.p-panel { background: #1a1a1a !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; }
.p-panel-header { background: var(--linear-surface) !important; border-bottom: 1px solid var(--linear-border) !important; color: var(--linear-text-primary) !important; }
.p-panel-content { background: #1a1a1a !important; color: var(--linear-text-primary) !important; }
/* Panels inside dialogs/settings keep their parent bg */
.p-dialog .p-panel, .p-dialog .p-panel-content, .settings-container .p-panel, .settings-container .p-panel-content { background: transparent !important; }
.p-inline-message { border-radius: 7px !important; }
.p-paginator { background: transparent !important; border: none !important; color: var(--linear-text-secondary) !important; gap: 2px !important; }
.p-paginator-page, .p-paginator-next, .p-paginator-prev, .p-paginator-first, .p-paginator-last { color: var(--linear-text-secondary) !important; border-radius: 6px !important; }
.p-paginator-page:hover, .p-paginator-next:hover, .p-paginator-prev:hover { background: rgba(244,244,245,0.05) !important; color: var(--linear-text-primary) !important; }
.p-paginator-page.p-highlight { background: rgba(244,244,245,0.08) !important; color: #f4f4f5 !important; }

/* ── ComfyUI Manager — Custom Nodes ── */
.cn-manager { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; color: #e4e4e7 !important; --grid-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }
.cn-manager-header { gap: 10px !important; padding: 14px 16px !important; border-bottom: 1px solid #1c1c20 !important; }
.cn-manager-filter { background: #111113 !important; border: 1px solid #1c1c20 !important; border-radius: 7px !important; color: #8e8e99 !important; font-size: 13px !important; padding: 7px 28px 7px 10px !important; -webkit-appearance: none !important; appearance: none !important; background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%2348484f' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important; background-repeat: no-repeat !important; background-position: right 8px center !important; }
.cn-manager-filter:hover { border-color: #2c2c31 !important; color: #a1a1aa !important; filter: none !important; }
.cn-manager-filter:focus { border-color: #a1a1aa !important; outline: none !important; }
.cn-manager-keywords { background: #111113 !important; border: 1px solid #1c1c20 !important; border-radius: 7px !important; color: #e4e4e7 !important; font-size: 13px !important; padding: 7px 12px !important; flex: 1 !important; }
.cn-manager-keywords::placeholder { color: #3a3a41 !important; }
.cn-manager-keywords:hover { border-color: #2c2c31 !important; }
.cn-manager-keywords:focus { border-color: #a1a1aa !important; outline: none !important; }
.cn-manager-status { color: #3a3a41 !important; font-size: 12px !important; font-variant-numeric: tabular-nums !important; }
.cn-manager-grid { border: 1px solid #1c1c20 !important; border-radius: 10px !important; overflow: hidden !important; margin: 0 16px !important; }
.cn-manager-grid .tg-turbogrid { font-family: 'Inter', -apple-system, sans-serif !important; font-size: 13px !important; background: #0d0d0d !important; color: #e4e4e7 !important; }
.cn-manager-grid .tg-header-item { background: #111113 !important; border-bottom: 1px solid #1c1c20 !important; border-right: none !important; color: #48484f !important; font-size: 10px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; padding: 10px 12px !important; }
.cn-manager-grid .tg-column-name { color: inherit !important; }
.cn-manager-grid .tg-sort-indicator-icon { color: #63636e !important; }
.cn-manager-grid .tg-body { background: #0d0d0d !important; }
.cn-manager-grid .tg-row { border-bottom: 1px solid rgba(28,28,32,0.4) !important; }
.cn-manager-grid .tg-even { background: #0d0d0d !important; }
.cn-manager-grid .tg-odd { background: rgba(17,17,19,0.5) !important; }
.cn-manager-grid .tg-hover { background: rgba(244,244,245,0.025) !important; }
.cn-manager-grid .tg-cell { border-right: none !important; color: #8e8e99 !important; padding: 10px 12px !important; line-height: 1.5 !important; }
.cn-manager-grid .tg-cell-row-number { color: #242429 !important; font-size: 11px !important; font-variant-numeric: tabular-nums !important; }
.cn-manager-grid .tg-frozen-line-v { border-right: 1px solid #1c1c20 !important; }
.cn-manager-grid .tg-column-line { border-right: none !important; }
.cn-manager-grid .cn-pack-name a { color: #e4e4e7 !important; font-weight: 500 !important; text-decoration: none !important; }
.cn-manager-grid .cn-pack-name a:hover { color: #f4f4f5 !important; text-decoration: underline !important; text-underline-offset: 2px !important; }
.cn-manager-grid .cn-pack-desc { color: #63636e !important; font-size: 12px !important; line-height: 1.4 !important; }
.cn-manager-grid .cn-pack-desc a { color: #a1a1aa !important; text-decoration: underline !important; text-underline-offset: 2px !important; }
.cn-manager-grid .cn-pack-version { color: #48484f !important; font-variant-numeric: tabular-nums !important; font-size: 12px !important; }
.cn-manager-grid .cn-pack-nodes { color: #48484f !important; font-size: 12px !important; font-variant-numeric: tabular-nums !important; }
.cn-manager-grid .cn-pack-conflicts { color: #fbbf24 !important; font-size: 11px !important; font-weight: 500 !important; }
.cn-manager-grid .cn-pack-author { color: #63636e !important; font-size: 12px !important; }
.cn-manager-grid .cn-pack-stars { color: #3a3a41 !important; font-variant-numeric: tabular-nums !important; font-size: 11px !important; }
.cn-manager-grid .cn-pack-last-update { color: #3a3a41 !important; font-size: 11px !important; font-variant-numeric: tabular-nums !important; }
.cn-manager-grid .cn-pack-badge { background: rgba(244,244,245,0.04) !important; border: 1px solid rgba(244,244,245,0.06) !important; color: #48484f !important; font-size: 10px !important; font-weight: 500 !important; border-radius: 4px !important; padding: 2px 6px !important; }
.cn-manager-grid .tg-checkbox { border: none !important; background: transparent !important; }
.cn-manager-grid .tg-icon-checkbox { width: 16px !important; height: 16px !important; }
.cn-manager-grid .tg-checkbox-none { stroke: #3a3a41 !important; fill: none !important; }
.cn-manager-grid .tg-checkbox-selected { stroke: #e4e4e7 !important; fill: #e4e4e7 !important; }
.cn-manager-grid .tg-checkbox-mixed { stroke: #63636e !important; fill: #63636e !important; }
.cn-manager-grid .tg-turbogrid .tg-highlight::after { background-color: rgba(244,244,245,0.025) !important; }
.cn-manager-grid .tg-scrollbar-thumb { background: #222224 !important; border-radius: 3px !important; }
.cn-manager-grid .tg-scrollbar-thumb:hover, .cn-manager-grid .tg-scrollbar-thumb-hold { background: #3a3a41 !important; }
.cn-manager-grid .tg-scrollbar-track { background: transparent !important; }
.cn-manager-grid .tg-row-not-found { color: #3a3a41 !important; }

/* ── Manager Action Buttons ── */
.cn-manager .cn-install-buttons button { background: #111113 !important; border: 1px solid #222224 !important; border-radius: 6px !important; color: #8e8e99 !important; font-size: 11px !important; font-weight: 500 !important; padding: 4px 10px !important; min-width: 72px !important; filter: none !important; }
.cn-manager .cn-install-buttons button:hover { border-color: #2c2c31 !important; color: #e4e4e7 !important; background: #1a1a1c !important; filter: none !important; }
.cn-manager .cn-btn-install, .cn-manager .cn-btn-try-install, .cn-manager .cn-btn-update, .cn-manager .cn-btn-try-update, .cn-manager .cn-btn-enable, .cn-manager .cn-btn-disable, .cn-manager .cn-btn-switch, .cn-manager .cn-btn-try-fix, .cn-manager .cn-btn-reinstall { background: #111113 !important; color: #8e8e99 !important; }
.cn-manager .cn-btn-install:hover, .cn-manager .cn-btn-try-install:hover, .cn-manager .cn-btn-update:hover, .cn-manager .cn-btn-try-update:hover, .cn-manager .cn-btn-enable:hover, .cn-manager .cn-btn-disable:hover, .cn-manager .cn-btn-switch:hover, .cn-manager .cn-btn-try-fix:hover, .cn-manager .cn-btn-reinstall:hover { color: #e4e4e7 !important; }
.cn-manager .cn-btn-uninstall { background: #111113 !important; border-color: rgba(248,113,113,0.2) !important; color: #63636e !important; }
.cn-manager .cn-btn-uninstall:hover { border-color: rgba(248,113,113,0.5) !important; color: #f87171 !important; background: rgba(248,113,113,0.06) !important; }
.cn-manager button.cn-btn-loading { border-color: rgba(161,161,170,0.3) !important; background: #111113 !important; }
.cn-manager button.cn-btn-loading::after { background-image: repeating-linear-gradient(-45deg, rgba(161,161,170,0.1), rgba(161,161,170,0.1) 10px, transparent 10px, transparent 15px) !important; }
.cn-manager .cn-btn-import-failed { background: #111113 !important; border-color: rgba(248,113,113,0.25) !important; color: #f87171 !important; font-size: 10px !important; }

/* ── Manager Footer ── */
.cn-manager-footer { gap: 8px !important; padding: 12px 16px !important; border-top: 1px solid #1c1c20 !important; }
.cn-manager-footer button { background: #111113 !important; border: 1px solid #222224 !important; border-radius: 7px !important; color: #63636e !important; font-size: 12px !important; font-weight: 500 !important; padding: 7px 14px !important; filter: none !important; }
.cn-manager-footer button:hover { border-color: #2c2c31 !important; color: #e4e4e7 !important; background: #1a1a1c !important; filter: none !important; }
.cn-manager .cn-manager-restart { border-color: rgba(248,113,113,0.2) !important; color: #f87171 !important; background: #111113 !important; }
.cn-manager .cn-manager-restart:hover { border-color: rgba(248,113,113,0.5) !important; background: rgba(248,113,113,0.06) !important; }
.cn-manager-selection { gap: 8px !important; }
.cn-selected-buttons button { font-size: 12px !important; }

/* ── Manager Flyover ── */
.cn-flyover { background-color: #0e0e10 !important; border-left: 1px solid #1c1c20 !important; }
.cn-flyover::before { background-image: none !important; }
.cn-flyover-header { border-bottom: 1px solid #1c1c20 !important; color: #e4e4e7 !important; padding: 14px 16px !important; }
.cn-flyover-title { color: #e4e4e7 !important; font-size: 14px !important; font-weight: 600 !important; }
.cn-flyover-close { color: #63636e !important; }
.cn-flyover-close:hover { color: #e4e4e7 !important; }
.cn-flyover-body { background-color: #0e0e10 !important; }
.cn-nodes-row { border-bottom: 1px solid rgba(28,28,32,0.4) !important; padding: 6px 12px !important; }
.cn-nodes-row:nth-child(odd) { background-color: rgba(17,17,19,0.4) !important; }
.cn-nodes-row:hover { background-color: rgba(244,244,245,0.025) !important; }
.cn-nodes-sn { color: #3a3a41 !important; }
.cn-nodes-name { color: #e4e4e7 !important; }
.cn-nodes-pack { color: #8e8e99 !important; }
.cn-nodes-conflict .cn-nodes-name, .cn-nodes-conflict .cn-icon { color: #fbbf24 !important; }
.cn-popover { background: #0e0e10 !important; border: 1px solid #1c1c20 !important; border-radius: 10px !important; filter: none !important; }
.cn-preview { color: #e4e4e7 !important; }
.cn-preview-header { border-bottom: 1px solid #1c1c20 !important; }
.cn-preview-name { color: #e4e4e7 !important; font-weight: 600 !important; }
.cn-preview-value { color: #63636e !important; }
.cn-preview-string { background: #151517 !important; color: #8e8e99 !important; border-radius: 5px !important; }
.cn-preview-switch { background: #151517 !important; border: 1px solid #222224 !important; border-radius: 6px !important; }
.cn-preview-description { background: #151517 !important; color: #63636e !important; border-radius: 6px !important; }
.cn-tag-list > div { background-color: rgba(244,244,245,0.04) !important; border-radius: 4px !important; color: #63636e !important; font-size: 11px !important; }

/* ── Manager Version Selector ── */
.comfy-modal[style*="1100"], .comfy-modal[style*="z-index"] { background: #0e0e10 !important; border: 1px solid #1c1c20 !important; border-radius: 12px !important; color: #e4e4e7 !important; overflow: hidden !important; }
.comfy-modal[style*="1100"] select, .comfy-modal select { background: #151517 !important; border: 1px solid #222224 !important; border-radius: 7px !important; color: #e4e4e7 !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: 13px !important; }
.comfy-modal[style*="1100"] select:focus, .comfy-modal select:focus { border-color: #a1a1aa !important; outline: none !important; }
.comfy-modal[style*="1100"] select option, .comfy-modal select option { background: #151517 !important; color: #e4e4e7 !important; }
.comfy-modal[style*="1100"] button, .comfy-modal button { background: #111113 !important; border: 1px solid #222224 !important; border-radius: 7px !important; color: #8e8e99 !important; font-size: 13px !important; font-weight: 500 !important; }
.comfy-modal[style*="1100"] button:hover, .comfy-modal button:hover { border-color: #2c2c31 !important; color: #e4e4e7 !important; background: #1a1a1c !important; }
.cn-manager button:disabled, .cn-manager input:disabled, .cn-manager select:disabled { color: #3a3a41 !important; opacity: 0.45 !important; cursor: not-allowed !important; }
.cn-manager button { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; filter: none !important; }
.cn-manager button:hover { filter: none !important; }

/* ── Actionbar ── */
.actionbar .p-panel-content { background: #131313 !important; border: none !important; border-radius: 10px !important; padding: 4px 6px !important; }
.actionbar.p-0 .p-panel-content, .actionbar.border-none .p-panel-content { border: none !important; background: #131313 !important; border-radius: 10px !important; }
.actionbar .p-panel-content .flex > * { height: 32px !important; display: inline-flex !important; align-items: center !important; }
.actionbar .p-inputnumber .p-inputnumber-input, .actionbar .p-inputnumber .p-inputnumber-button, .actionbar .p-inputnumber-input, .actionbar .p-inputnumber-button, .actionbar .p-inputnumber-increment-button, .actionbar .p-inputnumber-decrement-button { border: 0 !important; border-width: 0 !important; border-style: none !important; }
.actionbar .drag-handle { opacity: 0.2 !important; }
.actionbar .drag-handle:hover { opacity: 0.5 !important; }
.comfyui-queue-button .p-splitbutton { border-radius: 7px !important; }
.comfyui-queue-button .p-splitbutton-button, .comfyui-queue-button .p-splitbutton-dropdown { background: rgba(244,244,245,0.05) !important; border: 1px solid #222224 !important; color: #e4e4e7 !important; font-size: 13px !important; font-weight: 500 !important; height: 32px !important; }
.comfyui-queue-button .p-splitbutton-button { border-radius: 7px 0 0 7px !important; padding: 0 14px !important; gap: 6px !important; }
.comfyui-queue-button .p-splitbutton-dropdown { border-radius: 0 7px 7px 0 !important; border-left: none !important; padding: 0 8px !important; color: #63636e !important; }
.comfyui-queue-button .p-splitbutton-button:hover { background: rgba(244,244,245,0.09) !important; color: #f4f4f5 !important; }
.comfyui-queue-button .p-splitbutton-dropdown:hover { background: rgba(244,244,245,0.07) !important; color: #e4e4e7 !important; }
.comfyui-queue-button .p-splitbutton-button .p-button-label { color: inherit !important; font-weight: 500 !important; }
.comfyui-queue-button .p-splitbutton-button .p-button-icon { color: #63636e !important; font-size: 14px !important; }
.actionbar button[variant="destructive"], .actionbar .p-button-destructive, .actionbar button:has(.icon-\\[lucide--x\\]) { background: rgba(14,14,16,0.5) !important; border: 1px solid rgba(248,113,113,0.15) !important; border-radius: 7px !important; color: #48484f !important; width: 32px !important; height: 32px !important; padding: 0 !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; }
.actionbar button[variant="destructive"]:hover, .actionbar .p-button-destructive:hover, .actionbar button:has(.icon-\\[lucide--x\\]):hover { border-color: rgba(248,113,113,0.4) !important; color: #f87171 !important; background: rgba(248,113,113,0.06) !important; }
.actionbar button[variant="destructive"]:disabled, .actionbar .p-button-destructive:disabled, .actionbar button:has(.icon-\\[lucide--x\\]):disabled { border-color: #1c1c20 !important; color: #242429 !important; opacity: 0.45 !important; }
/* Top bar buttons — all uniform, no colored backgrounds */
.comfyui-button.primary, button.comfyui-button.primary, .comfyui-menu-mobile-collapse.primary,
.actionbar-container .comfyui-button, .actionbar-container button.comfyui-button,
.actionbar-container .comfy-menu-mobile-collapse { background: transparent !important; border: none !important; border-radius: 7px !important; color: #48484f !important; font-size: 13px !important; font-weight: 500 !important; height: 32px !important; padding: 0 14px !important; }
.comfyui-button.primary:hover, button.comfyui-button.primary:hover, .comfyui-menu-mobile-collapse.primary:hover,
.actionbar-container .comfyui-button:hover, .actionbar-container button.comfyui-button:hover { border: none !important; color: #e4e4e7 !important; background: rgba(244,244,245,0.06) !important; }

/* Run button — subtle white, not blue */
.actionbar-container button[class*="Run"],
.actionbar button[class*="run"],
button.comfyui-button[style*="background"],
.actionbar-container [style*="0B8CE9"],
.actionbar-container [style*="background-color"] { background: rgba(244,244,245,0.08) !important; border: none !important; color: #e4e4e7 !important; }
.actionbar-container button[class*="Run"]:hover,
.actionbar button[class*="run"]:hover { background: rgba(244,244,245,0.12) !important; color: #ffffff !important; }

/* Favorite star + all icon buttons in top bar */
.actionbar-container .comfyui-button[style*="background"],
.actionbar-container button[style*="background"] { background: transparent !important; border: none !important; }
.actionbar-container .comfyui-button[style*="background"]:hover,
.actionbar-container button[style*="background"]:hover { background: rgba(244,244,245,0.06) !important; }
.actionbar .p-button-text, .actionbar .p-button-icon-only:not(.p-splitbutton-dropdown):not(.p-button-destructive):not(:has(.icon-\\[lucide--x\\])), .actionbar button[size="icon"]:not(:has(.icon-\\[lucide--x\\])) { background: transparent !important; border: 1px solid transparent !important; border-radius: 7px !important; color: #48484f !important; width: 32px !important; height: 32px !important; padding: 0 !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; }
.actionbar .p-button-text:hover, .actionbar .p-button-icon-only:not(.p-splitbutton-dropdown):not(.p-button-destructive):hover, .actionbar button[size="icon"]:not(:has(.icon-\\[lucide--x\\])):hover { color: #e4e4e7 !important; background: rgba(244,244,245,0.05) !important; border-color: transparent !important; }
.actionbar .p-inputnumber { height: 32px !important; }
.actionbar .p-inputnumber .p-inputnumber-input { background: rgba(14,14,16,0.5) !important; border: none !important; border-radius: 5px 0 0 5px !important; color: #8e8e99 !important; font-size: 12px !important; font-variant-numeric: tabular-nums !important; height: 32px !important; width: 32px !important; text-align: center !important; padding: 0 !important; }
.actionbar .p-inputnumber .p-inputnumber-input:focus { border: none !important; color: #e4e4e7 !important; }
.actionbar .p-inputnumber-button { background: rgba(14,14,16,0.5) !important; border: none !important; color: #48484f !important; width: 16px !important; height: 16px !important; padding: 0 !important; display: flex !important; align-items: center !important; justify-content: center !important; }
.actionbar .p-inputnumber-button .p-icon, .actionbar .p-inputnumber-button svg, .actionbar .p-inputnumber-button i { width: 10px !important; height: 10px !important; font-size: 10px !important; }
.actionbar .p-inputnumber-button:hover { color: #e4e4e7 !important; background: rgba(244,244,245,0.04) !important; }
.actionbar .p-inputnumber-button-up { border-radius: 0 5px 0 0 !important; }
.actionbar .p-inputnumber-button-down { border-radius: 0 0 5px 0 !important; }
.actionbar span[class*="active"], .actionbar .queue-count, .actionbar .p-panel-content .flex span { color: #48484f !important; font-size: 12px !important; font-weight: 500 !important; font-variant-numeric: tabular-nums !important; white-space: nowrap !important; }
.actionbar [class*="status"], .actionbar [class*="indicator"] { font-size: 12px !important; font-weight: 500 !important; color: #48484f !important; }
.actionbar [class*="running"], .actionbar [class*="active"]:not(button) { color: #4ade80 !important; }
.actionbar [class*="error"] { color: #f87171 !important; }
.actionbar [class*="separator"], .actionbar [class*="divider"], .actionbar hr { background: #1c1c20 !important; border-color: #1c1c20 !important; width: 1px !important; margin: 4px 2px !important; }
.comfyui-queue-button .p-menu, .p-splitbutton-menu, .p-tieredmenu { background: #0e0e10 !important; border: 1px solid #1c1c20 !important; border-radius: 10px !important; padding: 4px !important; }
.comfyui-queue-button .p-menuitem-link, .p-splitbutton-menu .p-menuitem-link, .p-tieredmenu .p-menuitem-link { border-radius: 6px !important; padding: 8px 12px !important; color: #8e8e99 !important; font-size: 13px !important; }
.comfyui-queue-button .p-menuitem-link:hover, .p-splitbutton-menu .p-menuitem-link:hover, .p-tieredmenu .p-menuitem-link:hover { background: rgba(244,244,245,0.05) !important; color: #e4e4e7 !important; }

/* ── Manager Main Dialog ── */
#cm-manager-dialog { background: #0e0e10 !important; border: 1px solid #1c1c20 !important; border-radius: 14px !important; box-shadow: none !important; color: #e4e4e7 !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; overflow: hidden !important; }
.cm-menu-container { gap: 20px !important; padding: 24px !important; }
.cm-menu-column { gap: 10px !important; }
.cm-menu-column > p, .cm-menu-column > span, #cm-manager-dialog p:not(:empty) { color: #48484f !important; font-size: 10px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; }
#cm-manager-dialog label, #cm-manager-dialog td { color: #63636e !important; font-size: 12px !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }
.cm-menu-combo, #cm-manager-dialog select { background: #111113 !important; border: 1px solid #1c1c20 !important; border-radius: 7px !important; color: #8e8e99 !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: 13px !important; padding: 8px 32px 8px 12px !important; cursor: pointer !important; width: 100% !important; -webkit-appearance: none !important; appearance: none !important; background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2348484f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important; background-repeat: no-repeat !important; background-position: right 10px center !important; }
.cm-menu-combo:hover, #cm-manager-dialog select:hover { border-color: #2c2c31 !important; color: #a1a1aa !important; }
.cm-menu-combo:focus, #cm-manager-dialog select:focus { border-color: #a1a1aa !important; outline: none !important; }
#cm-manager-dialog select option { background: #151517 !important; color: #e4e4e7 !important; }
.cm-button, #cm-manager-dialog button { background: #1a1a1a !important; border: 1px solid transparent !important; border-radius: 8px !important; color: #e4e4e7 !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: 13px !important; font-weight: 500 !important; padding: 9px 16px !important; cursor: pointer !important; filter: none !important; text-align: left !important; width: 100% !important; }
.cm-button:hover, #cm-manager-dialog button:hover { background: #222226 !important; border-color: #2a2a2e !important; color: #ffffff !important; filter: none !important; }
.cm-small-button { font-size: 12px !important; padding: 5px 12px !important; }
.cm-button-red, #cm-manager-dialog .cm-button-red { background: #111113 !important; border-color: rgba(248,113,113,0.2) !important; color: #63636e !important; }
.cm-button-red:hover, #cm-manager-dialog .cm-button-red:hover { border-color: rgba(248,113,113,0.5) !important; color: #f87171 !important; background: rgba(248,113,113,0.05) !important; }
.cm-button-orange, #cm-manager-dialog .cm-button-orange { background: #111113 !important; border: 1px solid #1c1c20 !important; color: #8e8e99 !important; }
.cm-button-orange:hover, #cm-manager-dialog .cm-button-orange:hover { border-color: #2c2c31 !important; color: #e4e4e7 !important; background: #1a1a1c !important; }
.cm-experimental { border: 1px solid rgba(28,28,32,0.6) !important; border-radius: 10px !important; padding: 14px !important; background: rgba(17,17,19,0.4) !important; }
.cm-experimental-legend { color: #3a3a41 !important; font-size: 10px !important; text-transform: uppercase !important; letter-spacing: 0.08em !important; font-weight: 600 !important; background: #0e0e10 !important; padding: 2px 10px !important; }
.cm-experimental-button { font-size: 12px !important; }
.cm-notice-board { background: #111113 !important; border: 1px solid #1c1c20 !important; border-radius: 10px !important; color: #63636e !important; font-size: 12px !important; padding: 14px 16px !important; line-height: 1.6 !important; }
.cm-notice-board h3, .cm-notice-board b, .cm-notice-board strong { color: #e4e4e7 !important; }
.cm-notice-board hr { border-color: #1c1c20 !important; }
.cm-notice-board a { color: #a1a1aa !important; text-decoration: underline !important; text-underline-offset: 2px !important; }
#cm-manager-dialog .comfy-modal-content > h2, #cm-manager-dialog h2, #cm-manager-dialog h3 { color: #e4e4e7 !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-weight: 600 !important; letter-spacing: -0.01em !important; }
#cm-manager-dialog table { border-collapse: collapse !important; }
#cm-manager-dialog table td { padding: 5px 10px !important; border: none !important; }
#cm-manager-dialog .p-dialog-header-close, #cm-manager-dialog > button:last-child { color: #63636e !important; }
#cm-manager-dialog .p-dialog-header-close:hover, #cm-manager-dialog > button:last-child:hover { color: #e4e4e7 !important; }
.cm-share-menu, .cm-dropdown-menu { background: #0e0e10 !important; border: 1px solid #1c1c20 !important; border-radius: 10px !important; padding: 4px !important; }
.cm-share-menu a, .cm-share-menu button, .cm-dropdown-menu a, .cm-dropdown-menu button { background: transparent !important; border: none !important; border-radius: 6px !important; color: #8e8e99 !important; padding: 8px 12px !important; display: block !important; width: 100% !important; text-align: left !important; }
.cm-share-menu a:hover, .cm-share-menu button:hover, .cm-dropdown-menu a:hover, .cm-dropdown-menu button:hover { background: rgba(244,244,245,0.05) !important; color: #e4e4e7 !important; }
.manager-dialog, #cm-manager-dialog { background: #0e0e10 !important; border: 1px solid #1c1c20 !important; border-radius: 14px !important; overflow: hidden !important; }

/* ── Canvas Bottom Toolbar ── */
[class*="z-1200"].p-buttongroup, [class*="z-1200"][class*="bg-comfy-menu-bg"], .p-buttongroup[class*="bottom-0"][class*="right-0"][class*="z-1200"] { background: #1a1a1a !important; border-color: var(--linear-border) !important; border-radius: 10px !important; overflow: hidden !important; }
[class*="z-1200"] > button, [class*="z-1200"] .p-button { background: transparent !important; border: none !important; color: #48484f !important; }
[class*="z-1200"] > button:hover, [class*="z-1200"] .p-button:hover { color: #e4e4e7 !important; background: rgba(244,244,245,0.05) !important; }
[class*="z-1200"] [class*="bg-node-divider"], [class*="z-1200"] > div[class*="w-\\[1px\\]"] { background: var(--linear-border) !important; }

/* ── Node Library Sidebar ── */
.comfy-vue-side-bar-header { background: transparent !important; border-bottom: 1px solid var(--linear-border) !important; padding: 10px 14px !important; }
.comfy-vue-side-bar-header .p-toolbar { background: transparent !important; border: none !important; padding: 0 !important; min-height: unset !important; }
.comfy-vue-side-bar-header .p-toolbar .p-button { background: transparent !important; border: none !important; color: #48484f !important; width: 28px !important; height: 28px !important; padding: 0 !important; border-radius: 6px !important; }
.comfy-vue-side-bar-header .p-toolbar .p-button:hover { color: #e4e4e7 !important; background: rgba(244,244,245,0.05) !important; }
.node-lib-search-box { background: transparent !important; padding: 10px 14px !important; }
.node-lib-search-box input, .node-lib-search-box .p-inputtext { background: var(--input-surface) !important; border: 1px solid var(--input-border) !important; border-radius: 7px !important; color: var(--linear-text-primary) !important; font-size: 13px !important; height: 34px !important; }
.node-lib-search-box input:focus, .node-lib-search-box .p-inputtext:focus { border-color: var(--linear-accent-secondary) !important; }
.node-lib-tree-explorer { background: transparent !important; }
.node-lib-tree-explorer .tree-explorer { background: transparent !important; }
.node-lib-tree-explorer .p-tree { background: transparent !important; border: none !important; padding: 4px 8px !important; }
.node-lib-tree-explorer .p-tree-node-content { border-radius: 6px !important; padding: 5px 8px !important; margin: 1px 0 !important; }
.node-lib-tree-explorer .p-tree-node-content:hover { background: rgba(244,244,245,0.035) !important; }
.node-lib-tree-explorer .p-tree-node-content.p-highlight, .node-lib-tree-explorer .p-tree-node.p-tree-node-selected > .p-tree-node-content { background: rgba(244,244,245,0.07) !important; }
.node-lib-tree-explorer .p-tree-node-label { color: #8e8e99 !important; font-size: 13px !important; font-weight: 400 !important; }
.node-lib-tree-explorer .p-tree-node-content:hover .p-tree-node-label, .node-lib-tree-explorer .p-tree-node-content.p-highlight .p-tree-node-label { color: #e4e4e7 !important; }
.node-lib-tree-explorer .p-tree-node-toggle-button, .node-lib-tree-explorer .p-tree-toggler { color: #3a3a41 !important; width: 20px !important; height: 20px !important; background: transparent !important; border: none !important; }
.node-lib-tree-explorer .p-tree-node-toggle-button:hover, .node-lib-tree-explorer .p-tree-toggler:hover { color: #63636e !important; background: transparent !important; }
.node-lib-tree-explorer .p-tree-node-icon { color: #48484f !important; font-size: 14px !important; }
.node-lib-tree-explorer .p-tree-node-content:hover .p-tree-node-icon { color: #63636e !important; }
.leaf-count-badge { background: rgba(244,244,245,0.04) !important; color: #3a3a41 !important; font-size: 10px !important; font-weight: 500 !important; border-radius: 4px !important; padding: 1px 6px !important; border: none !important; min-width: unset !important; }
.node-lib-node-preview, #node-library-node-preview-container { background: #111113 !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; color: var(--linear-text-primary) !important; overflow: hidden !important; }
.node-lib-bookmark-tree-explorer { background: transparent !important; }
.node-lib-bookmark-tree-explorer .p-tree { background: transparent !important; border: none !important; }

/* ── Sidebar Panels ── */
.side-bar-panel [class*="panel-header"], .side-bar-panel [class*="sidebar-header"], .side-bar-panel > div:first-child { border-bottom: 1px solid #1c1c20 !important; }
.side-bar-panel h3, .side-bar-panel [class*="panel-title"] { color: #e4e4e7 !important; font-size: 13px !important; font-weight: 600 !important; }
.side-bar-panel [class*="list-item"], .side-bar-panel [class*="tree-item"], .side-bar-panel .p-listbox-option { border-radius: 6px !important; color: #8e8e99 !important; font-size: 13px !important; margin: 1px 4px !important; padding: 6px 10px !important; }
.side-bar-panel [class*="list-item"]:hover, .side-bar-panel [class*="tree-item"]:hover, .side-bar-panel .p-listbox-option:hover { background: rgba(244,244,245,0.035) !important; color: #e4e4e7 !important; }
.side-bar-panel [class*="list-item"].active, .side-bar-panel [class*="list-item"][aria-selected="true"], .side-bar-panel .p-listbox-option.p-highlight { background: rgba(244,244,245,0.07) !important; color: #f4f4f5 !important; }
.side-bar-panel [class*="section-divider"], .side-bar-panel hr { border-color: #1c1c20 !important; margin: 8px 0 !important; }
.side-bar-panel [class*="empty-state"], .side-bar-panel [class*="no-results"] { color: #3a3a41 !important; font-size: 13px !important; text-align: center !important; padding: 32px 16px !important; }
.side-bar-panel [class*="model-item"], .side-bar-panel [class*="model-card"] { background: transparent !important; border: 1px solid transparent !important; border-radius: 8px !important; }
.side-bar-panel [class*="model-item"]:hover, .side-bar-panel [class*="model-card"]:hover { background: rgba(244,244,245,0.025) !important; border-color: #1c1c20 !important; }
.side-bar-panel [class*="thumbnail"], .side-bar-panel [class*="preview-image"] { border-radius: 6px !important; border: 1px solid #1c1c20 !important; }
.side-bar-panel [class*="workflow-item"], .side-bar-panel [class*="workflow-entry"] { border-bottom: 1px solid rgba(28,28,32,0.3) !important; padding: 10px 12px !important; }
.side-bar-panel [class*="workflow-item"]:hover { background: rgba(244,244,245,0.025) !important; }
.side-bar-panel .p-toolbar .p-button, .side-bar-panel [class*="toolbar"] button { background: transparent !important; border: none !important; color: #48484f !important; border-radius: 6px !important; width: 28px !important; height: 28px !important; padding: 0 !important; }
.side-bar-panel .p-toolbar .p-button:hover, .side-bar-panel [class*="toolbar"] button:hover { background: rgba(244,244,245,0.05) !important; color: #e4e4e7 !important; }
.comfyui-menu, [class*="top-bar"], .top-menubar { background: #0d0d0d !important; border-bottom: 1px solid #1c1c20 !important; }

/* ── Templates ── */
.workflow-template-selector, [class*="template-selector"], .p-dialog:has([class*="template"]) .p-dialog-content { background: var(--linear-surface) !important; color: var(--linear-text-primary) !important; }
.workflow-template-selector .left-side-panel, [class*="template"] .left-side-panel, .left-side-panel { background: transparent !important; border-right: 1px solid var(--linear-border) !important; }
.left-side-panel .p-listbox { background: transparent !important; border: none !important; }
.left-side-panel .p-listbox-option { border-radius: 6px !important; color: var(--linear-text-secondary) !important; margin: 1px 4px !important; }
.left-side-panel .p-listbox-option:hover { background: rgba(244,244,245,0.035) !important; color: var(--linear-text-primary) !important; }
.left-side-panel .p-listbox-option.p-highlight, .left-side-panel .p-listbox-option.p-selected { background: rgba(244,244,245,0.07) !important; color: #f4f4f5 !important; }
[class*="template"] .p-card, .workflow-template-card, [class*="variant-ghost"][class*="rounded-lg"] { background: var(--linear-surface) !important; border: 1px solid var(--linear-border) !important; border-radius: 10px !important; overflow: hidden !important; }
[class*="template"] .p-card:hover, .workflow-template-card:hover, [class*="variant-ghost"][class*="rounded-lg"]:hover { border-color: var(--linear-border-hover) !important; }
[class*="template"] .p-card img, .workflow-template-card img { border-radius: 8px !important; opacity: 0.85 !important; }
[class*="template"] .p-card:hover img, .workflow-template-card:hover img { opacity: 1 !important; }
[class*="template"] .p-card .p-card-title, .workflow-template-card [class*="font-semibold"] { color: var(--linear-text-primary) !important; font-weight: 500 !important; }
[class*="template"] .p-card .p-card-subtitle, .workflow-template-card [class*="text-muted"] { color: var(--linear-text-muted) !important; font-size: 12px !important; }
[class*="template"] .p-iconfield, .workflow-template-selector .p-iconfield { background: transparent !important; }
[class*="template"] .p-multiselect, [class*="template"] .p-select { background: var(--input-surface) !important; border: 1px solid var(--input-border) !important; border-radius: 7px !important; color: var(--linear-text-primary) !important; font-size: 13px !important; }
[class*="template"] .p-multiselect:hover, [class*="template"] .p-select:hover { border-color: var(--linear-border-hover) !important; }
[class*="template"] .square-chip, .square-chip { background: rgba(244,244,245,0.05) !important; border: 1px solid rgba(244,244,245,0.06) !important; border-radius: 4px !important; color: var(--linear-text-muted) !important; font-size: 11px !important; }
[class*="template"] .p-skeleton, [class*="template"] [class*="animate-pulse"] { background: var(--linear-surface-elevated) !important; border-radius: 6px !important; }
[class*="template"] [class*="text-neutral"], [class*="template"] [class*="text-muted"] { color: var(--linear-text-muted) !important; }
[class*="template"] [class*="text-2xl"], [class*="template"] [class*="font-semibold"] { color: var(--linear-text-primary) !important; }

/* ── Bottom Panel — Keyboard Shortcuts ── */
.bottom-panel .p-tablist { border-bottom: none !important; }
.bottom-panel .p-tab { font-size: 12px !important; font-weight: 500 !important; text-transform: uppercase !important; letter-spacing: 0.04em !important; color: #48484f !important; padding: 10px 16px !important; }
.bottom-panel .p-tab:hover { color: #8e8e99 !important; }
.bottom-panel .p-tab-active, .bottom-panel .p-tab[data-p-active="true"] { color: #e4e4e7 !important; }
.bottom-panel th, .bottom-panel [class*="section-title"], .bottom-panel [class*="column-header"] { color: #48484f !important; font-size: 10px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; padding: 8px 12px !important; border-bottom: 1px solid #1c1c20 !important; }
.bottom-panel td, .bottom-panel [class*="shortcut-label"], .bottom-panel [class*="command-name"] { color: #8e8e99 !important; font-size: 12px !important; padding: 6px 12px !important; }
.bottom-panel kbd, .bottom-panel [class*="keycap"], .bottom-panel [class*="key-badge"], .bottom-panel [class*="keyboard"], .bottom-panel [class*="shortcut"] code, .bottom-panel [class*="key"] { background: rgba(244,244,245,0.05) !important; border: 1px solid rgba(244,244,245,0.07) !important; border-radius: 4px !important; color: #a1a1aa !important; font-size: 11px !important; font-weight: 500 !important; padding: 2px 6px !important; font-family: 'Inter', monospace !important; }
.bottom-panel [class*="queue-item"], .bottom-panel [class*="job-item"] { border-bottom: 1px solid rgba(28,28,32,0.3) !important; padding: 8px 16px !important; }
.bottom-panel [class*="queue-item"]:hover, .bottom-panel [class*="job-item"]:hover { background: rgba(244,244,245,0.025) !important; }

/* ── Override Tailwind primary blue → white ── */
.bg-primary-background { background-color: rgba(244,244,245,0.1) !important; }
.hover\:bg-primary-background-hover:hover, .bg-primary-background:hover { background-color: rgba(244,244,245,0.15) !important; }
.bg-secondary-background { background-color: #131313 !important; }
.hover\:bg-secondary-background-hover:hover, .bg-secondary-background:hover { background-color: rgba(244,244,245,0.06) !important; }

/* ── Confirm Dialog ── */
.p-confirmdialog .p-dialog-header { padding: 20px 24px 12px !important; }
.p-confirmdialog .p-confirmdialog-message { color: #8e8e99 !important; font-size: 14px !important; line-height: 1.6 !important; }
.p-confirmdialog .p-dialog-footer { gap: 8px !important; padding: 16px 24px !important; }

/* ── Actionbar fix — override Tailwind bg-transparent ── */
.p-panel.actionbar,
.p-panel.actionbar.bg-transparent,
.actionbar.bg-transparent {
    background: #131313 !important;
    border: none !important;
    border-radius: 10px !important;
}
.p-panel.actionbar .p-panel-content,
.actionbar.bg-transparent .p-panel-content {
    background: #131313 !important;
    border: none !important;
    border-radius: 10px !important;
}

/* ══════════════════════════════════════
   v2.0 — Live session fixes
   ══════════════════════════════════════ */

/* Panel backgrounds — solid */
.bg-comfy-menu-bg { background-color: #131313 !important; }
.bg-base-background { background: #131313 !important; }

/* Tailwind primary blue → white */
.bg-primary-background { background-color: rgba(244,244,245,0.15) !important; }
.hover\:bg-primary-background-hover:hover { background-color: rgba(244,244,245,0.20) !important; }
.hover\:bg-secondary-background-hover:hover { background-color: rgba(244,244,245,0.08) !important; }
.hover\:bg-destructive-background-hover:hover { background-color: rgba(248,113,113,0.1) !important; }

/* All bars — icons/text white */
.side-tool-bar-container button { color: #a1a1aa !important; }
.side-tool-bar-container button:hover { color: #ffffff !important; }
.side-tool-bar-container button.active, .side-tool-bar-container button[aria-selected="true"] { color: #ffffff !important; }
.graph-canvas-panel button { color: #e4e4e7 !important; }
.graph-canvas-panel button:hover { color: #ffffff !important; }
.graph-canvas-panel span { color: #e4e4e7 !important; }

/* Canvas toolbar — no active button bg */
.graph-canvas-panel .bg-interface-panel-selected-surface, .graph-canvas-panel [class*="selected-surface"] { background: transparent !important; color: #ffffff !important; }

/* Tooltips — fix */
.p-tooltip { max-width: 250px !important; min-width: 120px !important; background: #131313 !important; border: 1px solid #1e1e22 !important; border-radius: 8px !important; color: #e4e4e7 !important; padding: 8px 12px !important; font-size: 12px !important; line-height: 1.5 !important; }
.p-tooltip-text { background: transparent !important; border: none !important; padding: 0 !important; color: #e4e4e7 !important; white-space: normal !important; }
.p-tooltip-arrow { display: none !important; }

/* Context menu entries — clean */
.litecontextmenu .litemenu-entry, .litecontextmenu .litemenu-entry.submenu { background: transparent !important; border: none !important; outline: none !important; color: #a1a1aa !important; }
.litecontextmenu .litemenu-entry:hover:not(.separator) { background: rgba(244,244,245,0.06) !important; color: #e4e4e7 !important; }
.litecontextmenu, .litegraph.litecontextmenu { background: #131313 !important; border: none !important; border-radius: 8px !important; box-shadow: none !important; }

/* Context menu submenu arrows */
.litecontextmenu .litemenu-entry.has_submenu { display: flex !important; justify-content: space-between !important; align-items: center !important; border-right: none !important; }
.litecontextmenu .litemenu-entry.has_submenu::after { content: '›' !important; color: #48484f !important; font-size: 16px !important; margin-left: 12px !important; }

/* Main Menu */
.comfy-command-menu, .p-tieredmenu { background: #131313 !important; border: none !important; border-radius: 10px !important; box-shadow: none !important; }
.comfy-command-menu[class*="bg-"], .p-tieredmenu[class*="bg-"] { background: #131313 !important; box-shadow: none !important; }
.p-tieredmenu-root-list, .comfy-command-menu .p-tieredmenu-root-list, .comfy-command-menu > ul, .p-tieredmenu > ul { background: #131313 !important; }
.comfy-command-menu .p-menuitem-content, .p-tieredmenu .p-menuitem-content { background: transparent !important; border: none !important; color: #e4e4e7 !important; border-radius: 6px !important; }
.comfy-command-menu .p-menuitem-content:hover, .comfy-command-menu .p-menuitem:hover > .p-menuitem-content { background: rgba(244,244,245,0.06) !important; }
.comfy-command-menu .p-menuitem-text, .comfy-command-menu span, .comfy-command-menu label, .p-tieredmenu .p-menuitem-text { color: #e4e4e7 !important; }
.comfy-command-menu svg, .comfy-command-menu i, .comfy-command-menu [class*="icon"], .p-tieredmenu .p-menuitem-icon { color: #e4e4e7 !important; }
.comfy-command-menu .p-submenu-icon { color: #48484f !important; }
.comfy-command-menu .p-menuitem-separator, .p-tieredmenu .p-menuitem-separator { border-color: #1e1e22 !important; background: transparent !important; margin: 4px 8px !important; }
.comfy-command-menu .p-badge, .comfy-command-menu .p-tag { background: rgba(244,244,245,0.12) !important; color: #a1a1aa !important; border: none !important; border-radius: 4px !important; }
.comfy-command-menu .p-submenu-header { background: transparent !important; color: #48484f !important; border: none !important; }
.p-tieredmenu .p-tieredmenu-submenu, .comfy-command-menu .p-tieredmenu-submenu { background: #131313 !important; border: none !important; border-radius: 10px !important; margin-left: 14px !important; box-shadow: none !important; }

/* Manager Dialog */
.global-dialog.p-dialog { background: #131313 !important; border: none !important; border-radius: 16px !important; }
.global-dialog .p-dialog-header { background: #131313 !important; border-bottom: 1px solid #1a1a1a !important; }
.global-dialog .p-dialog-content { background: #131313 !important; }
.global-dialog .p-dialog-title { color: #e4e4e7 !important; }
.global-dialog button:not(.p-dialog-header-close) { background: #1a1a1a !important; color: #e4e4e7 !important; }
.global-dialog button:not(.p-dialog-header-close):hover { background: #222226 !important; color: #ffffff !important; }
.global-dialog select { background: #1a1a1a !important; color: #e4e4e7 !important; color-scheme: dark !important; }

/* Manager cm classes — no borders until hover */
.cm-menu-combo, .cm-button, .cm-button-red, .cm-button-orange, .cm-experimental-button, select.cm-menu-combo { border: 1px solid transparent !important; }
.cm-menu-combo:hover, .cm-button:hover, .cm-button-red:hover, .cm-button-orange:hover, select.cm-menu-combo:hover { border: 1px solid #2a2a2e !important; }
fieldset.cm-experimental, [class*="experimental"] { border: none !important; background: transparent !important; }

/* Notice board */
.cm-notice-board { background: #1a1a1a !important; border: 1px solid #1a1a1a !important; border-radius: 10px !important; padding: 24px 28px !important; margin: 16px 8px !important; max-height: 200px !important; overflow-y: auto !important; color: #a1a1aa !important; }
.cm-notice-board b, .cm-notice-board strong { color: #e4e4e7 !important; }
.cm-notice-board a { color: #8e8e99 !important; }
.cm-notice-board hr { border: none !important; border-top: 1px solid #1a1a1a !important; }

/* Arrow buttons in Manager */
[id*="cm-manual-button-arrow"] { background: transparent !important; border: none !important; }

/* Slider handle centered */
.p-slider { position: relative !important; height: 4px !important; }
.p-slider .p-slider-handle { position: absolute !important; top: 50% !important; transform: translateY(-50%) !important; margin-top: 0 !important; width: 14px !important; height: 14px !important; border-radius: 50% !important; background: #e4e4e7 !important; border: 2px solid #e4e4e7 !important; font-size: 0 !important; text-indent: -9999px !important; overflow: hidden !important; }
.p-slider .p-slider-handle::before, .p-slider .p-slider-handle::after { display: none !important; }

/* Env button — no grey bg on icon */
.actionbar-container .mdi { background: transparent !important; }

/* Run button — white icon/text */
.actionbar .p-panel-content button[class*="bg-primary"] { color: #ffffff !important; }
.actionbar .p-panel-content button[class*="bg-primary"] svg { color: #ffffff !important; }

/* Drag handle — 6 dot grip */
.drag-handle { opacity: 0.6 !important; color: #52525b !important; }
.drag-handle:hover { opacity: 1 !important; color: #a1a1aa !important; }

/* Workflow badge in sidebar */
.side-tool-bar-container .p-badge { background: #e4e4e7 !important; color: #0d0d0d !important; font-size: 10px !important; font-weight: 600 !important; min-width: 16px !important; height: 16px !important; border-radius: 8px !important; }

/* Run dropdown */
.z-1000[class*="rounded-lg"][class*="border"], .border-border-subtle { background: #131313 !important; border-color: transparent !important; }

/* Workflow badge — extra selectors */
.side-tool-bar-container [class*="badge"], .side-tool-bar-container sup { background: #e4e4e7 !important; color: #0d0d0d !important; font-size: 10px !important; font-weight: 600 !important; border-radius: 8px !important; }

/* Node value editor (input popup on canvas) */
.graphdialog, .graphdialog input, .graphdialog select { background: #131313 !important; border: 1px solid #1e1e22 !important; border-radius: 8px !important; color: #e4e4e7 !important; }
.graphdialog button { background: #1a1a1a !important; border: none !important; color: #e4e4e7 !important; border-radius: 6px !important; }
.graphdialog button:hover { background: #222226 !important; }

/* LiteGraph value dropdown (filter list, combobox) */
.litecontextmenu .litemenu-entry.selected,
.litecontextmenu .litemenu-entry:focus,
.litecontextmenu .litemenu-entry[class*="selected"] { background: rgba(244,244,245,0.08) !important; color: #e4e4e7 !important; }

/* Node widget edit input */
.litesearchbox, .litesearchbox input { background: #131313 !important; color: #e4e4e7 !important; border-color: #1e1e22 !important; }

/* Generic dialog/popup value editing */
.graphdialog { color-scheme: dark !important; }

/* Widget combo dropdown */
.litecontextmenu input { background: #1a1a1a !important; border: 1px solid #1e1e22 !important; border-radius: 6px !important; color: #e4e4e7 !important; }

/* Highlighted/selected option in any dropdown — white not blue */
::highlight, ::selection { background: rgba(244,244,245,0.15) !important; color: #ffffff !important; }
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
    background: #131313;
    border: none; border-radius: 12px;
    z-index: 99999; font-family: Inter, system-ui, sans-serif;
    font-size: 12px; color: #a1a1aa;
    box-shadow: none;
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
.te-title { font-weight: 600; color: #e4e4e7; font-size: 13px; }
.te-header-btns { display: flex; gap: 6px; }
.te-btn {
    background: none; border: none; color: #71717a; cursor: pointer;
    font-size: 14px; padding: 2px 4px; border-radius: 4px; line-height: 1;
}
.te-btn:hover { color: #f4f4f5; background: rgba(244,244,245,0.06); }
.te-section { border-bottom: 1px solid #1a1a1a; }
.te-section:last-child { border-bottom: none; }
.te-section-header {
    display: flex; align-items: center; padding: 8px 12px;
    cursor: pointer; user-select: none; font-weight: 600;
    font-size: 11px; letter-spacing: 0.06em; color: #e4e4e7;
    text-transform: uppercase;
}
.te-section-header:hover { color: #ffffff; }
.te-arrow { margin-right: 6px; font-size: 8px; display: inline-block; }
.te-section.open .te-arrow { transform: rotate(90deg); }
.te-section-body { display: none; padding: 4px 12px 10px; }
.te-section.open .te-section-body { display: block; }
.te-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 4px 0; gap: 8px;
}
.te-label { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 11px; color: #a1a1aa; }
.te-color {
    -webkit-appearance: none; appearance: none;
    width: 28px; height: 20px; border: none; border-radius: 6px;
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
.te-range-val { width: 32px; text-align: right; font-size: 10px; color: #a1a1aa; font-variant-numeric: tabular-nums; }
.te-field-reset {
    font-size: 11px; padding: 1px 3px; opacity: 0; pointer-events: none; flex-shrink: 0;
}
.te-row.modified .te-field-reset { opacity: 1; pointer-events: auto; }
.te-presets { border-bottom: 1px solid #1a1a1a; padding: 8px 12px; }
.te-presets-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.te-presets-bar span { font-weight: 600; font-size: 11px; letter-spacing: 0.06em; color: #e4e4e7; text-transform: uppercase; }
.te-preset-save {
    font-size: 11px; padding: 4px 10px; border-radius: 6px;
    background: #1a1a1a; border: none;
    color: #e4e4e7; cursor: pointer;
}
.te-preset-save:hover { color: #ffffff; background: #222226; }
.te-preset-list { display: flex; flex-direction: column; gap: 2px; }
.te-preset-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 4px 6px; border-radius: 4px; cursor: pointer;
    font-size: 11px; color: #a1a1aa;
}
.te-preset-item:hover { background: rgba(244,244,245,0.06); color: #f4f4f5; }
.te-preset-item-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.te-preset-item-btns { display: flex; gap: 2px; opacity: 0; }
.te-preset-item:hover .te-preset-item-btns { opacity: 1; }
.te-preset-del { font-size: 10px; padding: 1px 3px; }
.te-preset-empty { font-size: 11px; color: #48484f; padding: 4px 0; }
.te-panel::-webkit-scrollbar { width: 4px; }
.te-panel::-webkit-scrollbar-track { background: transparent; }
.te-panel::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
`;

const THEME_DEFAULTS = {
    canvas: {
        backgroundColor: "#0d0d0d",
        dotGridOpacity: 0,
        nodeBorderRadius: 11,
        connectionWidth: 1.5,
        linkColor: "#52525b",
        groupColor: "#2a2a2e",
        fpsBoost: true,
        snapGuides: true,
    },
    nodes: {
        bodyColor: "#1a1a1a",
        titleColor: "#1a1a1a",
        shadowOpacity: 0,
        boxIndicatorColor: "#ffffff",
        outlineColor: "#ffffff",
        outlineTransparent: true,
        titleTextColor: "#ffffff",
        widgetBackground: "#1a1a1a",
    },
    slots: {
        CLIP: "#FACC15", CONDITIONING: "#FB923C", IMAGE: "#60A5FA",
        LATENT: "#F0ABFC", MASK: "#4ADE80", MODEL: "#A78BFA",
        VAE: "#F87171", CONTROL_NET: "#34D399",
    },
    ui: {
        barsBackground: "#1a1a1a",
        surface: "#1a1a1a", surfaceElevated: "#121212",
        border: "#1e1e22", textPrimary: "#ffffff",
        textSecondary: "#b0b0b0", textMuted: "#71717a",
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
            { key: "linkColor", label: "Link Color", type: "color" },
            { key: "groupColor", label: "Group Color", type: "color" },
            { key: "fpsBoost", label: "FPS Boost", type: "checkbox" },
            { key: "snapGuides", label: "Snap Guides", type: "checkbox" },
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

        // Link color
        if (c.linkColor && window.LiteGraph) {
            LiteGraph.LINK_COLOR = c.linkColor;
        }

        // Group color
        if (c.groupColor && window.LiteGraph) {
            LiteGraph.DEFAULT_GROUP_FONT_COLOR = c.groupColor;
        }

        // FPS Boost
        if (c.fpsBoost !== undefined && canvas) {
            canvas.render_shadows = !c.fpsBoost;
            canvas.highquality_render = !c.fpsBoost;
            canvas.render_connection_arrows = !c.fpsBoost;
            canvas.use_gradients = !c.fpsBoost;
            canvas.render_collapsed_slots = !c.fpsBoost;
            canvas.always_render_background = !c.fpsBoost;
            if (c.fpsBoost) {
                canvas.links_render_mode = 0; // straight lines
            }
        }
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
        // Bars — solid background (no glassmorphism)
        root.style.setProperty("--linear-bars-bg", u.barsBackground || "#1a1a1a");
    }

    _buildDotGrid(opacity) {
        const canvas = comfyApp.canvas;
        if (!canvas) return;
        if (opacity <= 0) {
            // Solid 1px tile instead of empty — fixes LiteGraph bg color bug at certain zoom levels
            const solid = document.createElement("canvas");
            solid.width = 1; solid.height = 1;
            const sctx = solid.getContext("2d");
            sctx.fillStyle = this.config.canvas.backgroundColor || "#0d0d0d";
            sctx.fillRect(0, 0, 1, 1);
            currentDotDataUrl = solid.toDataURL();
        } else {
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
        }
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
    const textX = 20;  // after collapse arrow
    const slotR = 20;  // space for output dot
    return textX + textW + slotR + 10;
}

function enforceTitleMinWidth(node) {
    const fontSize = LiteGraph.NODE_TEXT_SIZE || 14;
    const titleH = LiteGraph.NODE_TITLE_HEIGHT || 30;

    function getMinW() {
        const title = (node.getTitle ? node.getTitle() : node.title) || "";
        _measureCtx.font = `${fontSize}px Inter, Arial, sans-serif`;
        return _measureCtx.measureText(title).width + titleH * 2 + 4;
    }

    // Intercept _size (used by renderingSize getter) to clamp width & snap to grid
    const GRID = 10;
    function snap(w) { return Math.ceil(w / GRID) * GRID; }

    let _sizeVal = node._size;
    if (!node.flags?.collapsed) _sizeVal[0] = snap(Math.max(_sizeVal[0], getMinW()));
    Object.defineProperty(node, '_size', {
        get() {
            if (!node.flags?.collapsed) {
                const minW = getMinW();
                if (_sizeVal[0] < minW) _sizeVal[0] = snap(minW);
                else _sizeVal[0] = snap(_sizeVal[0]);
                _sizeVal[1] = snap(_sizeVal[1]);
            }
            return _sizeVal;
        },
        set(v) {
            _sizeVal = v;
            if (!node.flags?.collapsed) {
                const minW = getMinW();
                if (_sizeVal[0] < minW) _sizeVal[0] = snap(minW);
                else _sizeVal[0] = snap(_sizeVal[0]);
                _sizeVal[1] = snap(_sizeVal[1]);
            }
        },
        configurable: true
    });
}

function lockCollapsedWidth(node) {
    const GRID = 10;
    function snap(w) { return Math.ceil(w / GRID) * GRID; }
    const titleW = getCollapsedTitleWidth(node);
    let stored = node._collapsed_width || 0;
    Object.defineProperty(node, '_collapsed_width', {
        get() { return snap(Math.max(stored, titleW)); },
        set(v) { stored = v; },
        configurable: true
    });
}

// ── Group color palette (muted zinc tones) ──
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

        // Skip groups entirely when zoomed out very far
        if (scale < 0.2) { ctx.restore(); return; }

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            if (!group) continue;

            const pos = group._pos || group.pos;
            const size = group._size || group.size;
            if (!pos || !size) continue;

            const rawColor = group.color || '#335';
            const palette = LINEAR_GROUP_COLORS[rawColor] || { bg: rawColor, accent: rawColor };
            const accentRgb = _hexToRgb(palette.accent);

            const x = pos[0], y = pos[1], w = size[0], h = size[1];
            const r = 8;

            // ── Border only — 1px thin ──
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.strokeStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.35)`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // ── Small color dot ──
            const dotR = 3;
            const dotX = x + 12, dotY = y + 14;
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.8)`;
            ctx.fill();

            // ── Title text — simple, no shadow ──
            if (scale > 0.3) {
                const fontSize = 14;
                ctx.font = `500 ${fontSize}px Inter, Arial, sans-serif`;
                ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.6)`;
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillText(group.title || 'Group', x + 22, y + 14);
            }
        }

        ctx.restore();
    };
}

comfyApp.registerExtension({
    name: "Comfy.LinearTheme",
    nodeCreated(node) {
        stripNodeColor(node);
        enforceTitleMinWidth(node);
        lockCollapsedWidth(node);
    },
    loadedGraphNode(node) {
        stripNodeColor(node);
        enforceTitleMinWidth(node);
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
            // Performance optimizations
            canvas.render_connections_border = false;
            canvas.render_connection_arrows = false;
            canvas.highquality_render = false;
            canvas.render_shadows = false;
            canvas.show_info = false;
            canvas.render_execution_order = false;
            canvas.render_collapsed_slots = false;
            canvas.use_gradients = false;
            canvas.always_render_background = false;
            canvas.links_render_mode = 0; // straight lines (fastest)

            /* ═══════════════════════════════════════════════════════
               FPS Boost — Runtime rendering optimizations
               ═══════════════════════════════════════════════════════ */

            // 1. Throttle redraws when idle (no mouse/keyboard activity)
            //    LiteGraph redraws at full framerate even when nothing changes.
            //    We cap idle redraws to ~15fps and restore full speed on interaction.
            {
                let idleTimer = null;
                let isIdle = false;
                const IDLE_DELAY = 800; // ms before entering idle mode
                const IDLE_FPS = 15;
                const normalMaxFps = canvas.ds?.max_fps || 0;

                const wakeUp = () => {
                    if (isIdle) {
                        isIdle = false;
                        if (canvas.ds) canvas.ds.max_fps = normalMaxFps;
                        canvas.setDirty(true, true);
                    }
                    clearTimeout(idleTimer);
                    idleTimer = setTimeout(() => {
                        isIdle = true;
                        if (canvas.ds) canvas.ds.max_fps = IDLE_FPS;
                    }, IDLE_DELAY);
                };

                const canvasEl = canvas.canvas || document.querySelector("canvas");
                if (canvasEl) {
                    canvasEl.addEventListener("mousemove", wakeUp, { passive: true });
                    canvasEl.addEventListener("mousedown", wakeUp, { passive: true });
                    canvasEl.addEventListener("wheel", wakeUp, { passive: true });
                    document.addEventListener("keydown", wakeUp, { passive: true });
                }
                // Start in idle
                idleTimer = setTimeout(() => {
                    isIdle = true;
                    if (canvas.ds) canvas.ds.max_fps = IDLE_FPS;
                }, IDLE_DELAY);
            }

            // 2. Skip widget text rendering when zoomed out far
            //    Below 0.5 zoom, widgets are too small to read anyway.
            {
                const origDrawNodeWidgets = LGraphCanvas.prototype.drawNodeWidgets;
                if (origDrawNodeWidgets) {
                    LGraphCanvas.prototype.drawNodeWidgets = function(node, posY, ctx, active_widget) {
                        if (this.ds && this.ds.scale < 0.4) return; // skip widgets at low zoom
                        return origDrawNodeWidgets.call(this, node, posY, ctx, active_widget);
                    };
                }
            }

            // 3. Simplify link rendering during pan/drag
            //    While dragging the canvas, skip drawing link labels and reduce link detail.
            {
                const origDrawConnections = LGraphCanvas.prototype.drawConnections;
                if (origDrawConnections) {
                    LGraphCanvas.prototype.drawConnections = function(ctx) {
                        if (this.dragging_canvas) {
                            const prevBorder = this.render_connections_border;
                            this.render_connections_border = false;
                            const result = origDrawConnections.call(this, ctx);
                            this.render_connections_border = prevBorder;
                            return result;
                        }
                        return origDrawConnections.call(this, ctx);
                    };
                }
            }

            // 4. Skip title rendering when zoomed out very far
            {
                const origDrawNodeShape = LGraphCanvas.prototype.drawNodeShape;
                if (origDrawNodeShape) {
                    LGraphCanvas.prototype.drawNodeShape = function(node, ctx, size, fgcolor, bgcolor, selected, mouse_over) {
                        // At very low zoom, skip text-heavy rendering
                        if (this.ds && this.ds.scale < 0.3 && !selected) {
                            // Just draw a simple rectangle
                            ctx.fillStyle = bgcolor || "#1a1a1a";
                            const r = 8 * this.ds.scale;
                            ctx.beginPath();
                            ctx.roundRect(0, -LiteGraph.NODE_TITLE_HEIGHT, size[0], size[1] + LiteGraph.NODE_TITLE_HEIGHT, r);
                            ctx.fill();
                            if (selected) {
                                ctx.strokeStyle = "#ffffff";
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                            return;
                        }
                        return origDrawNodeShape.call(this, node, ctx, size, fgcolor, bgcolor, selected, mouse_over);
                    };
                }
            }

            /* ═══════════════════════════════════════════════════════
               End FPS Boost
               ═══════════════════════════════════════════════════════ */

            for (const [key, value] of Object.entries(THEME)) {
                if (key === "SLOT_COLORS") continue;
                if (canvas[key] !== undefined) {
                    canvas[key] = value;
                }
            }

            // Build dot grid only if opacity > 0 (skip for performance when dots disabled)
            if (THEME_DEFAULTS.canvas.dotGridOpacity > 0) {
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
            } else {
                // Create a solid 1px tile instead of empty string
                // Empty BACKGROUND_IMAGE causes LiteGraph to render wrong bg color at certain zoom levels
                // (see litegraph.js issues #276, #468)
                const solidCanvas = document.createElement("canvas");
                solidCanvas.width = 1; solidCanvas.height = 1;
                const solidCtx = solidCanvas.getContext("2d");
                solidCtx.fillStyle = THEME_DEFAULTS.canvas.backgroundColor || "#0d0d0d";
                solidCtx.fillRect(0, 0, 1, 1);
                currentDotDataUrl = solidCanvas.toDataURL();
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

        // Hide LiteGraph slot dots on collapsed nodes & store real slots for themed drawing
        const origDrawNode = LGraphCanvas.prototype.drawNode;
        LGraphCanvas.prototype.drawNode = function(node, ctx) {
            if (node.flags?.collapsed) {
                const savedInputs = node.inputs;
                const savedOutputs = node.outputs;
                node._realInputs = savedInputs;
                node._realOutputs = savedOutputs;
                node.inputs = [];
                node.outputs = [];
                const result = origDrawNode.call(this, node, ctx);
                node.inputs = savedInputs;
                node.outputs = savedOutputs;
                return result;
            }
            return origDrawNode.call(this, node, ctx);
        };

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

        // --- Fix: clamp floating actionbar within viewport + force visibility ---
        {
            const fixActionbar = () => {
                const ab = document.querySelector('.actionbar');
                if (!ab) return;
                // Force solid background always (Tailwind bg-transparent override)
                ab.style.setProperty('background', '#131313', 'important');
                ab.style.setProperty('border', 'none', 'important');
                ab.style.setProperty('border-radius', '10px', 'important');
                const pc = ab.querySelector('.p-panel-content');
                if (pc) {
                    pc.style.setProperty('background', '#131313', 'important');
                    pc.style.setProperty('border', 'none', 'important');
                    pc.style.setProperty('border-radius', '10px', 'important');
                }
                // Force all top bar buttons to have no inline background
                const container = document.querySelector('.actionbar-container');
                if (container) {
                    container.style.setProperty('background', '#131313', 'important');
                    container.style.setProperty('border', 'none', 'important');
                    container.querySelectorAll('button, .comfyui-button').forEach(btn => {
                        const inlineBg = btn.style.backgroundColor || btn.style.background;
                        if (inlineBg && inlineBg !== 'transparent' && inlineBg !== '#131313') {
                            btn.style.setProperty('background', 'transparent', 'important');
                            btn.style.setProperty('border', 'none', 'important');
                        }
                    });
                }
                // Clamp position if floating — use getBoundingClientRect for accurate position
                const pos = getComputedStyle(ab).position;
                if (pos === 'fixed' || pos === 'absolute') {
                    const rect = ab.getBoundingClientRect();
                    const vw = document.documentElement.clientWidth;
                    const vh = document.documentElement.clientHeight;
                    if (rect.right > vw || rect.left < 0 || rect.bottom > vh || rect.top < 0) {
                        // Off-screen — bring it back to center top
                        const newLeft = Math.max(10, (vw - rect.width) / 2);
                        const scale = (parseFloat(ab.style.left) || 0) / (rect.left || 1);
                        ab.style.left = (newLeft * (scale || 1)) + 'px';
                        ab.style.top = '60px';
                    }
                }
            };
            const ab = document.querySelector('.actionbar');
            if (ab) {
                fixActionbar();
                new MutationObserver(() => requestAnimationFrame(fixActionbar))
                    .observe(ab, { attributes: true, attributeFilter: ['class', 'style'] });
            }
            // Also observe the actionbar-container for button changes
            const abc = document.querySelector('.actionbar-container');
            if (abc) {
                fixActionbar();
                new MutationObserver(() => requestAnimationFrame(fixActionbar))
                    .observe(abc, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
            }
        }

        // --- Fix: top bar button hover (blue → white) ---
        {
            const addHoverFix = () => {
                const container = document.querySelector('.actionbar-container');
                if (!container) return;
                container.querySelectorAll('button, .comfyui-button').forEach(btn => {
                    if (btn._hoverFixed) return;
                    btn._hoverFixed = true;
                    btn.addEventListener('mouseenter', () => {
                        btn.style.setProperty('background-color', 'rgba(244,244,245,0.08)', 'important');
                    });
                    btn.addEventListener('mouseleave', () => {
                        if (btn.textContent?.trim() === 'Run') {
                            btn.style.setProperty('background-color', 'rgba(244,244,245,0.15)', 'important');
                        } else {
                            btn.style.setProperty('background-color', 'transparent', 'important');
                        }
                    });
                });
            };
            addHoverFix();
            // Re-apply periodically instead of MutationObserver on body (much less overhead)
            setInterval(addHoverFix, 2000);
        }

        // --- Snap Guides: alignment lines when dragging nodes ---
        {
            const titleH = LiteGraph.NODE_TITLE_HEIGHT || 30;
            const origDrawFront = LGraphCanvas.prototype.drawFrontCanvas;
            LGraphCanvas.prototype.drawFrontCanvas = function() {
                origDrawFront.call(this);

                // Check config — default to true if not set
                if (themeEditor?.config?.canvas?.snapGuides === false) return;

                const ctx = this.ctx;
                if (!ctx) return;
                const graph = this.graph;
                if (!graph?._nodes) return;

                // Only when actively dragging nodes (mouse down + selected nodes + mouse moving)
                const selected = this.selected_nodes;
                if (!selected || Object.keys(selected).length === 0) return;
                if (!this.last_mouse_dragging && !this.node_dragged) return;
                const d = Object.values(selected)[0];

                const THRESH = 8;
                const guides = [];
                const dx = d.pos[0], dy = d.pos[1] - titleH;
                const dw = d.size[0], dh = d.size[1] + titleH;
                const dr = dx + dw, db = dy + dh;
                const dcx = dx + dw/2, dcy = dy + dh/2;

                for (const n of graph._nodes) {
                    if (n.id === d.id || selected[n.id]) continue;
                    const nx = n.pos[0], ny = n.pos[1] - titleH;
                    const nw = n.size[0], nh = n.size[1] + titleH;
                    const nr = nx + nw, nb = ny + nh;
                    const ncx = nx + nw/2, ncy = ny + nh/2;
                    if (Math.abs(dx - nx) < THRESH) guides.push({t:'v', v:nx});
                    if (Math.abs(dr - nr) < THRESH) guides.push({t:'v', v:nr});
                    if (Math.abs(dcx - ncx) < THRESH) guides.push({t:'v', v:ncx});
                    if (Math.abs(dy - ny) < THRESH) guides.push({t:'h', v:ny});
                    if (Math.abs(db - nb) < THRESH) guides.push({t:'h', v:nb});
                    if (Math.abs(dcy - ncy) < THRESH) guides.push({t:'h', v:ncy});
                }
                if (graph._groups) {
                    for (const g of graph._groups) {
                        if (!g) continue;
                        const gx = g.pos[0], gy = g.pos[1], gw = g.size[0], gh = g.size[1];
                        if (Math.abs(dx - gx) < THRESH) guides.push({t:'v', v:gx});
                        if (Math.abs(dr - gx + gw) < THRESH) guides.push({t:'v', v:gx + gw});
                        if (Math.abs(dy - gy) < THRESH) guides.push({t:'h', v:gy});
                        if (Math.abs(db - gy + gh) < THRESH) guides.push({t:'h', v:gy + gh});
                    }
                }
                if (guides.length === 0) return;
                ctx.save();
                const scale = this.ds.scale, offset = this.ds.offset;
                ctx.strokeStyle = 'rgba(244,244,245,0.2)';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                const seen = new Set();
                for (const g of guides) {
                    const key = g.t + Math.round(g.v);
                    if (seen.has(key)) continue;
                    seen.add(key);
                    const sv = g.t === 'v' ? (g.v + offset[0]) * scale : (g.v + offset[1]) * scale;
                    ctx.beginPath();
                    if (g.t === 'v') { ctx.moveTo(sv, 0); ctx.lineTo(sv, ctx.canvas.height); }
                    else { ctx.moveTo(0, sv); ctx.lineTo(ctx.canvas.width, sv); }
                    ctx.stroke();
                }
                ctx.restore();
            };
        }

        console.log("[LinearTheme] Theme applied — v2.0");
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

            // Skip detailed drawing when zoomed out
            const scale = comfyApp.canvas?.ds?.scale || 1;
            if (scale < 0.4) return;

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
                    const textColor = isBypassed ? "#e8d5f5" : isMuted ? "#666666" : "#e4e4e7";
                    const r = 10; // match group border radius
                    const textX = 20;

                    // Force full opacity (LiteGraph reduces globalAlpha for bypass/mute)
                    const prevAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = 1;

                    // 1. Cover entire collapsed pill (overwrite LiteGraph's shape + text)
                    // Extend 2px to fully cover LiteGraph's bypass/mute shape
                    ctx.fillStyle = titleColor;
                    ctx.beginPath();
                    ctx.roundRect(0, -titleH, collW, titleH, r);
                    ctx.fill();

                    // 2. Collapse dot — colored by connected input(s), white if none
                    const canvas = comfyApp.canvas;
                    const byType = canvas?.default_connection_color_byType || {};
                    const fallbackColor = canvas?.default_connection_color?.output_on || "#aaa";
                    const centerY = -titleH * 0.5;
                    const realInputs = this._realInputs || this.inputs || [];
                    const realOutputs = this._realOutputs || this.outputs || [];

                    const connectedInputs = realInputs.filter(i => i.link != null);
                    let dotColor;
                    if (isBypassed) {
                        dotColor = "#c090e0";
                    } else if (isMuted) {
                        dotColor = "#555";
                    } else if (connectedInputs.length === 0) {
                        dotColor = "#e4e4e7";
                    } else if (connectedInputs.length === 1) {
                        dotColor = byType[connectedInputs[0].type] || fallbackColor;
                    } else {
                        // Blend connected input colors
                        let rr = 0, gg = 0, bb = 0;
                        connectedInputs.forEach(inp => {
                            const hex = (byType[inp.type] || fallbackColor).replace("#", "");
                            rr += parseInt(hex.substring(0, 2), 16);
                            gg += parseInt(hex.substring(2, 4), 16);
                            bb += parseInt(hex.substring(4, 6), 16);
                        });
                        const n = connectedInputs.length;
                        dotColor = `rgb(${Math.round(rr/n)},${Math.round(gg/n)},${Math.round(bb/n)})`;
                    }
                    ctx.beginPath();
                    ctx.arc(12, centerY, 5, 0, Math.PI * 2);
                    ctx.fillStyle = dotColor;
                    ctx.fill();

                    // 3. Draw full title text
                    ctx.font = `${fontSize}px Inter, Arial, sans-serif`;
                    ctx.fillStyle = textColor;
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillText(titleText, textX, centerY);

                    // 4. Output: small rounded tick inside pill, right edge
                    realOutputs.forEach(out => {
                        if (out.links?.length > 0) {
                            ctx.fillStyle = byType[out.type] || fallbackColor;
                            ctx.beginPath();
                            ctx.roundRect(collW - 6, centerY - 5, 3, 10, 1.5);
                            ctx.fill();
                        }
                    });

                    ctx.globalAlpha = prevAlpha;

                    ctx.restore();
                }
            }

            // ── Execution glow ──
            const nodeId = this.id;
            const now = performance.now();
            let glowColor = null;
            let alpha = 0;

            // Running: simple accent border (no pulse — saves setDirty calls)
            if (executionState.runningNodeId == nodeId) {
                alpha = 0.25;
                glowColor = `rgba(168, 162, 255, ${alpha})`;
            }
            // Completed: brief green border (no fade animation — saves frames)
            else if (executionState.completedNodes[nodeId]) {
                const elapsed = now - executionState.completedNodes[nodeId];
                if (elapsed < 400) {
                    alpha = 0.3;
                    glowColor = `rgba(34, 197, 94, ${alpha})`;
                } else {
                    delete executionState.completedNodes[nodeId];
                }
            }
            // Error: red border (no fade animation)
            else if (executionState.errorNodes[nodeId]) {
                const elapsed = now - executionState.errorNodes[nodeId];
                if (elapsed < 800) {
                    alpha = 0.35;
                    glowColor = `rgba(239, 68, 68, ${alpha})`;
                } else {
                    delete executionState.errorNodes[nodeId];
                }
            }

            if (glowColor && alpha > 0.01) {
                ctx.save();
                ctx.strokeStyle = glowColor;
                ctx.lineWidth = 2;

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
