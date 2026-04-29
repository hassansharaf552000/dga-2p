# DGA Design System

> **Version:** 0.0.0 — **Angular:** 21.1.0 — **TypeScript:** 5.9.x

A comprehensive **Angular component library and interactive playground** built for the DGA (Digital Government Authority) design system. The project ships production-ready UI components together with live playground pages that let developers preview, test, and document every component in isolation.

---

## Table of Contents

1. [Business Overview](#business-overview)
2. [Technology Stack](#technology-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Component Catalogue](#component-catalogue)
6. [Design Tokens & Theming](#design-tokens--theming)
7. [Routing](#routing)
8. [Styles Architecture](#styles-architecture)
9. [Testing](#testing)
10. [Build & Deployment](#build--deployment)

---

## Business Overview

The **DGA Design System** provides a unified visual language for government digital products. It enforces brand consistency, accessibility, and RTL (right-to-left Arabic) support across all DGA-affiliated applications.

Key goals:
- **Consistency** — single source of truth for colors, spacing, typography, and interaction patterns.
- **Developer Experience** — every component has a matching *Playground* page that renders it interactively with configurable props.
- **Theming** — full light/dark mode support via CSS custom properties generated from Figma design tokens.
- **Scalability** — components are organised into domain categories so new ones can be added without impacting unrelated areas.

---

## Technology Stack

| Tool | Version | Purpose |
|---|---|---|
| Angular | 21.1.0 | Application framework |
| TypeScript | ~5.9.2 | Language |
| Angular Router | 21.1.0 | Lazy-loaded playground routes |
| Vitest | ^4.0.8 | Unit testing |
| CSS Custom Properties | — | Design tokens & theming |
| Prettier | — | Code formatting |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4200)
npm start

# Run unit tests
npm test

# Production build
npm run build
```

---

## Project Structure

```
dga-2p/
├── src/
│   ├── index.html                  # App entry HTML
│   ├── main.ts                     # Angular bootstrap
│   ├── styles.scss                 # Global SCSS entry
│   │
│   ├── styles/                     # Design system CSS
│   │   ├── main.css                # Imports all style layers in order
│   │   ├── tokens/                 # Primitive design tokens
│   │   │   ├── _colors.css
│   │   │   ├── _alpha.css
│   │   │   ├── _spacing.css
│   │   │   ├── _typography.css
│   │   │   └── _radius-widths.css
│   │   ├── themes/                 # Semantic token mappings
│   │   │   ├── _light.css
│   │   │   └── _dark.css
│   │   ├── base/
│   │   │   └── _responsive.css     # Breakpoints & resets
│   │   ├── utilities/
│   │   │   └── _utilities.css      # Reusable utility classes
│   │   └── components/             # Component-scoped global styles
│   │       ├── _buttons.css
│   │       ├── _cards.css
│   │       ├── _forms.css
│   │       ├── _links.css
│   │       ├── _tables.css
│   │       ├── _tags.css
│   │       └── _typography.css
│   │
│   └── app/
│       ├── app.ts                  # Root component
│       ├── app.config.ts           # Angular providers (router, etc.)
│       ├── app.routes.ts           # All lazy-loaded routes
│       ├── dga.tokens.json         # Raw Figma design tokens (source of truth)
│       │
│       └── components/             # All UI components
│           ├── core/               # Foundational atomic components
│           ├── data-display/       # Components that render data
│           ├── feedback/           # Alerts, notifications, modals
│           ├── form/               # All input & form controls
│           ├── layout/             # UI shell & structural components
│           ├── navigation/         # Navigation patterns
│           ├── utility/            # Standalone utility components
│           └── shared/             # Playground shell (sidebar, wrappers)
│
├── public/                         # Static assets served as-is
├── dist/                           # Production build output
├── out-tsc/                        # TypeScript compiler output
├── angular.json                    # Angular workspace config
├── tsconfig.json                   # TypeScript base config
├── tsconfig.app.json               # App-specific TS config
└── tsconfig.spec.json              # Test-specific TS config
```

### Component folder convention

Every component category contains two sub-folders that mirror each other:

```
components/<category>/
├── components/          # The actual reusable component
│   └── dga-<name>/
│       ├── dga-<name>.component.ts
│       ├── dga-<name>.component.html
│       └── dga-<name>.component.scss
└── playgrounds/         # Interactive demo page for that component
    └── dga-<name>-playground/
        ├── dga-<name>-playground.component.ts
        ├── dga-<name>-playground.component.html
        └── dga-<name>-playground.component.scss
```

### Shared infrastructure

| Folder | Purpose |
|---|---|
| `shared/dga-sidebar/` | Sidebar navigation listing all component routes |
| `shared/dga-playground/` | Wrapper layout used by every playground page |
| `shared/dga-main-playground/` | Landing page (`/`) listing all available components |

---

## Component Catalogue

### Core (atomic primitives)

| Component | Route | Description |
|---|---|---|
| `dga-accordion` | `/accordion` | Collapsible content sections |
| `dga-avatar` | `/avatar` | User avatar with image/initials fallback |
| `dga-badge` | `/badge` | Status or count indicators |
| `dga-button` | `/button` | Primary, secondary, ghost, and icon buttons |
| `dga-chip` | `/chip` | Selectable / removable tag chips |
| `dga-divider` | `/divider` | Horizontal or vertical separator |
| `dga-icon` | `/icon` | SVG icon renderer |
| `dga-link` | `/link` | Styled anchor element |

### Form

| Component | Route | Description |
|---|---|---|
| `dga-text-input` | `/text-input` | Single-line text field |
| `dga-textarea` | `/textarea` | Multi-line text field |
| `dga-number-input` | `/number-input` | Numeric input with stepper |
| `dga-checkbox` | `/checkbox` | Single & group checkboxes |
| `dga-radio` | `/radio` | Radio button group |
| `dga-switch` | `/switch` | Toggle switch |
| `dga-slider` | `/slider` | Range slider |
| `dga-rating` | `/rating` | Star rating input |
| `dga-date-picker` | `/date-picker` | Calendar date picker |
| `dga-dropdown` | `/dropdown` | Select / dropdown list |
| `dga-search-box` | `/search-box` | Search input with icon |
| `dga-file-upload` | `/file-upload` | Drag-and-drop file upload |

### Data Display

| Component | Route | Description |
|---|---|---|
| `dga-card` | `/card` | Content container card |
| `dga-table` | `/table` | Data table |
| `dga-list` | `/list` | Unstructured list |
| `dga-structured-list` | `/structured-list` | Key-value structured list |
| `dga-metric` | `/metric` | KPI / metric display |
| `dga-quote` | `/quote` | Block-quote component |
| `dga-code-snippet` | `/code-snippet` | Syntax-highlighted code block |
| `dga-charts` | `/charts` | Chart visualisations |
| `dga-progress-bar` | `/progress-bar` | Linear progress bar |
| `dga-progress-indicator` | `/progress-indicator` | Step progress indicator |
| `dga-skeleton` | `/skeleton` | Loading skeleton placeholder |
| `dga-digital-stamp` | `/digital-stamp` | Official digital stamp/seal |

### Feedback & Status

| Component | Route | Description |
|---|---|---|
| `dga-inline-alert` | `/inline-alert` | Inline contextual alert |
| `dga-notification` | `/notification` | Persistent notification banner |
| `dga-notification-toast` | `/notification-toast` | Auto-dismissing toast message |
| `dga-loading` | `/loading` | Loading spinner/overlay |
| `dga-modal` | `/modal` | Dialog / modal window |
| `dga-tooltip` | `/tooltip` | Hover tooltip |

### Navigation

| Component | Route | Description |
|---|---|---|
| `dga-breadcrumb` | `/breadcrumb` | Breadcrumb trail |
| `dga-pagination` | `/pagination` | Page navigation controls |
| `dga-tabs` | `/tabs` | Tabbed content switcher |
| `dga-menu` | `/menu` | Dropdown menu |
| `dga-slideout-menu` | `/slideout-menu` | Slide-out side panel menu |
| `dga-carousel` | `/carousel` | Image / content carousel |
| `dga-content-switcher` | `/content-switcher` | Toggle between content views |
| `dga-radial-stepper` | — | Circular step progress indicator |

### Layout (UI Shell)

| Component | Description |
|---|---|
| `dga-ui-shell-nav-header` | Top navigation header bar |
| `dga-ui-shell-nav-drawer` | Side navigation drawer |
| `dga-ui-shell-second-level-nav-header` | Secondary navigation header |
| `dga-ui-shell-table-of-content` | In-page table of contents |

### Utility

| Component | Description |
|---|---|
| `dga-filtration` | Advanced filter panel |
| `dga-floating-button` | Floating action button (FAB) |

---

## Design Tokens & Theming

Design tokens are defined in `src/app/dga.tokens.json` (generated from Figma) and compiled into CSS custom properties under `src/styles/tokens/`.

### Token categories

| File | Contains |
|---|---|
| `_colors.css` | Full color palette — neutral, brand green (`dga`), and semantic colors |
| `_alpha.css` | Transparent color variants |
| `_spacing.css` | Spacing scale (4px base grid) |
| `_typography.css` | Font families, sizes, weights, line-heights |
| `_radius-widths.css` | Border-radius and border-width scales |

### Theming

Semantic mappings (e.g. `--color-background`, `--color-text-primary`) are defined per theme:

- `themes/_light.css` — default light theme
- `themes/_dark.css` — dark mode overrides via `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)`

**DGA brand color:** `#25935F` (green-500), with a full tint/shade palette from `25` to `950`.

---

## Routing

All routes are **lazy-loaded** via `loadComponent()` to keep the initial bundle small. The root path `/` loads the main playground landing page. Every component has a dedicated playground route (see catalogue above).

```ts
// app.routes.ts pattern
{ path: 'button', loadComponent: () =>
    import('./components/core/playgrounds/dga-button-playground/...')
      .then(m => m.DgaButtonPlaygroundComponent) }
```

---

## Styles Architecture

CSS is loaded in a strict layered order inside `src/styles/main.css`:

```
1. Primitive Tokens  →  tokens/
2. Theme Mappings    →  themes/
3. Base / Responsive →  base/
4. Utility Classes   →  utilities/
5. Component Styles  →  components/   (global overrides, loaded via styles.scss)
```

Component-specific styles live alongside each component (`.component.scss`) and are encapsulated via Angular's view encapsulation.

---

## Testing

Unit tests use **Vitest** (not Jest) with JSDOM.

```bash
npm test          # Run all tests
ng test --watch   # Watch mode
```

Test files are co-located with each component: `*.spec.ts`.

---

## Build & Deployment

```bash
# Production build (outputs to dist/)
npm run build

# Development watch build
npm run watch
```

The build output goes to `dist/dga-system/`. Angular's production build applies:
- AOT compilation
- Tree-shaking
- Code splitting (one chunk per lazy route)
- Asset optimisation

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
