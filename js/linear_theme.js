import { app } from "../../scripts/app.js";

/*
 * Linear Dark Theme for ComfyUI
 * Inspired by Linear, Vercel, and Raycast aesthetics.
 * Applies color palette + full CSS overhaul for a cohesive dark UI.
 */

const THEME = {
    // -- Canvas / LiteGraph --
    CLEAR_BACKGROUND_COLOR: "#09090b",
    NODE_TITLE_COLOR: "#e4e4e7",
    NODE_SELECTED_TITLE_COLOR: "#ffffff",
    NODE_TEXT_COLOR: "#f4f4f5",
    NODE_DEFAULT_COLOR: "#18181b",
    NODE_DEFAULT_BGCOLOR: "rgba(24,24,27,0.94)",
    NODE_DEFAULT_BOXCOLOR: "rgba(255,255,255,0.5)",
    NODE_BOX_OUTLINE_COLOR: "#818cf8",
    NODE_BYPASS_BGCOLOR: "#7737AA",
    NODE_ERROR_COLOUR: "#ef4444",
    DEFAULT_SHADOW_COLOR: "rgba(0,0,0,0)",
    WIDGET_BGCOLOR: "#1c1c20",
    WIDGET_OUTLINE_COLOR: "#2c2c32",
    WIDGET_TEXT_COLOR: "#e4e4e7",
    WIDGET_SECONDARY_TEXT_COLOR: "#a1a1aa",
    LINK_COLOR: "#71717a",
    EVENT_LINK_COLOR: "#a8a29e",
    CONNECTING_LINK_COLOR: "#818cf8",

    // -- Slot colors --
    SLOT_COLORS: {
        CLIP: "#FFD500",
        CLIP_VISION: "#A8DADC",
        CLIP_VISION_OUTPUT: "#ad7452",
        CONDITIONING: "#FFA931",
        CONTROL_NET: "#6EE7B7",
        IMAGE: "#818cf8",
        LATENT: "#FF9CF9",
        MASK: "#81C784",
        MODEL: "#B39DDB",
        STYLE_MODEL: "#C2FFAE",
        VAE: "#FF6E6E",
        TAESD: "#DCC274",
        PIPE_LINE: "#7737AA",
        PIPE_LINE_SDXL: "#7737AA",
        INT: "#29699C",
        X_Y: "#38291f",
        XYPLOT: "#74DA5D",
        LORA_STACK: "#94dccd",
        CONTROL_NET_STACK: "#94dccd",
        FAST_MODEL_LOADER: "#ffd399",
        SAMPLING: "#818cf8"
    }
};

const CSS = `
/* ============================================
   Linear Dark — Global CSS Overrides
   ============================================ */

:root {
    --fg-color: #f4f4f5;
    --bg-color: #09090b;
    --comfy-menu-bg: rgba(24,24,27,0.96);
    --comfy-input-bg: #1c1c20;
    --input-text: #e4e4e7;
    --descrip-text: #71717a;
    --drag-text: #a1a1aa;
    --error-text: #ef4444;
    --border-color: #27272a;
    --tr-even-bg-color: rgba(24,24,27,0.9);
    --tr-odd-bg-color: rgba(14,14,16,0.9);
    --comfy-menu-secondary-bg: rgba(28,28,32,0.96);

    /* Linear accent tokens */
    --linear-accent: #818cf8;
    --linear-accent-hover: #6366f1;
    --linear-accent-subtle: rgba(129,140,248,0.12);
    --linear-surface: #18181b;
    --linear-surface-elevated: #1c1c20;
    --linear-border: #27272a;
    --linear-border-subtle: #1f1f23;
    --linear-text-primary: #f4f4f5;
    --linear-text-secondary: #a1a1aa;
    --linear-text-muted: #71717a;
    --linear-danger: #ef4444;
    --linear-danger-hover: #dc2626;
    --linear-success: #22c55e;
    --linear-warning: #f59e0b;
}

/* ---- Base body ---- */
body.litegraph {
    background: #09090b !important;
    color: #f4f4f5 !important;
}

/* ============================================
   Manager Dialog
   ============================================ */
.manager-dialog,
.p-dialog {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 12px !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
}

.p-dialog-header {
    background: transparent !important;
    border-bottom: 1px solid var(--linear-border) !important;
    color: var(--linear-text-primary) !important;
}

.p-dialog-content {
    background: var(--linear-surface) !important;
    color: var(--linear-text-primary) !important;
}

.p-dialog-footer {
    background: transparent !important;
    border-top: 1px solid var(--linear-border) !important;
}

/* ---- All buttons (Manager + global) ---- */
.p-button,
button.cm-button,
.dialog button,
.comfy-modal button,
.manager-dialog button {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    color: var(--linear-text-primary) !important;
    font-weight: 500 !important;
    transition: background 150ms ease, border-color 150ms ease !important;
    box-shadow: none !important;
    cursor: pointer !important;
}

.p-button:hover,
button.cm-button:hover,
.dialog button:hover,
.comfy-modal button:hover,
.manager-dialog button:hover {
    background: #27272a !important;
    border-color: #3f3f46 !important;
}

.p-button:active,
button.cm-button:active,
.dialog button:active,
.manager-dialog button:active {
    transform: scale(0.98);
}

/* Primary / accent buttons */
.p-button-primary,
.p-button.p-component:not(.p-button-text):not(.p-button-outlined):not(.p-button-secondary) {
    background: var(--linear-accent) !important;
    border-color: var(--linear-accent) !important;
    color: #fff !important;
}

.p-button-primary:hover,
.p-button.p-component:not(.p-button-text):not(.p-button-outlined):not(.p-button-secondary):hover {
    background: var(--linear-accent-hover) !important;
    border-color: var(--linear-accent-hover) !important;
}

/* Danger buttons (Restart, delete, etc.) */
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

/* ---- Selects / Dropdowns ---- */
select,
.p-select,
.p-dropdown {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    box-shadow: none !important;
}

select:hover,
.p-select:hover,
.p-dropdown:hover {
    border-color: #3f3f46 !important;
}

select:focus,
.p-select:focus,
.p-dropdown:focus {
    border-color: var(--linear-accent) !important;
    outline: none !important;
}

/* Dropdown panels */
.p-select-overlay,
.p-dropdown-panel,
.p-listbox {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: none !important;
}

.p-select-option,
.p-dropdown-item,
.p-listbox-option {
    color: var(--linear-text-primary) !important;
}

.p-select-option:hover,
.p-dropdown-item:hover,
.p-listbox-option:hover,
.p-select-option.p-focus,
.p-listbox-option.p-focus {
    background: var(--linear-accent-subtle) !important;
}

.p-select-option.p-selected,
.p-dropdown-item.p-highlight,
.p-listbox-option.p-selected {
    background: var(--linear-accent-subtle) !important;
    color: var(--linear-accent) !important;
}

/* ---- Inputs ---- */
input[type="text"],
input[type="number"],
input[type="search"],
textarea,
.p-inputtext {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    box-shadow: none !important;
}

input:focus,
textarea:focus,
.p-inputtext:focus {
    border-color: var(--linear-accent) !important;
    outline: none !important;
}

/* ---- Tabs ---- */
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

/* ---- Tables ---- */
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
    transition: background 150ms ease !important;
}

.p-datatable-tbody > tr:hover,
table tr:hover {
    background: var(--linear-accent-subtle) !important;
}

/* ---- Scrollbars ---- */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #27272a;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3f3f46;
}

/* ---- Tooltips ---- */
.p-tooltip {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 6px !important;
    color: var(--linear-text-primary) !important;
    box-shadow: none !important;
}

/* ---- Checkboxes / Toggles ---- */
.p-checkbox .p-checkbox-box,
.p-toggleswitch .p-toggleswitch-slider {
    background: var(--linear-surface-elevated) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 4px !important;
}

.p-checkbox .p-checkbox-box.p-highlight,
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: var(--linear-accent) !important;
    border-color: var(--linear-accent) !important;
}

/* ---- Badges / Tags ---- */
.p-badge,
.p-tag {
    border-radius: 6px !important;
    font-weight: 500 !important;
}

/* ---- Menus & context menus ---- */
.p-menu,
.p-contextmenu,
.p-menubar,
.litegraph .litemenu-entry,
.litecontextmenu {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
}

.p-menuitem:hover,
.litegraph .litemenu-entry:hover,
.litecontextmenu .litemenu-entry:hover {
    background: var(--linear-accent-subtle) !important;
}

/* ---- Sidebar / Panels ---- */
.p-drawer,
.p-sidebar,
.comfy-sidebar {
    background: var(--linear-surface) !important;
    border-right: 1px solid var(--linear-border) !important;
    box-shadow: none !important;
}

/* ---- Progress bars ---- */
.p-progressbar {
    background: var(--linear-surface-elevated) !important;
    border-radius: 4px !important;
    height: 4px !important;
}

.p-progressbar-value {
    background: var(--linear-accent) !important;
    border-radius: 4px !important;
}

/* ---- Close buttons (X) ---- */
.p-dialog-header-close,
.p-button-icon-only {
    color: var(--linear-text-muted) !important;
    background: transparent !important;
    border: none !important;
}

.p-dialog-header-close:hover,
.p-button-icon-only:hover {
    color: var(--linear-text-primary) !important;
    background: rgba(255,255,255,0.06) !important;
    border-radius: 6px !important;
}

/* ---- Toast / Notifications ---- */
.p-toast-message {
    background: var(--linear-surface) !important;
    border: 1px solid var(--linear-border) !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--linear-text-primary) !important;
}

/* ---- Search / Filter inputs ---- */
.p-iconfield,
.p-inputicon {
    color: var(--linear-text-muted) !important;
}

/* ---- Chip / Tag ---- */
.p-chip {
    background: var(--linear-accent-subtle) !important;
    color: var(--linear-accent) !important;
    border-radius: 6px !important;
}
`;

app.registerExtension({
    name: "Comfy.LinearTheme",
    async setup() {
        // Inject CSS
        const style = document.createElement("style");
        style.id = "linear-theme-css";
        style.textContent = CSS;
        document.head.appendChild(style);

        // Apply LiteGraph theme
        const canvas = app.canvas;
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

        console.log("[LinearTheme] Theme applied");
    }
});
