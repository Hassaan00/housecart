# rsc-cloud design system — how to build with it

This library is the retail-store-cloud front end: an **MUI v6** theme plus the
"global table v2" surfaces. Build screens that look like rsc-cloud by composing
these real components inside the provider below.

## Always wrap in `<DesignSystemProvider>`

Every screen and every component must be rendered inside `DesignSystemProvider`.
It supplies the MUI theme (the `--mui-palette-*` CSS variables, typography,
radii, shadows), translations, and the date-picker localization the filter
surfaces need. **Without it, themed colors don't resolve and `TableFilters` /
`GroupButton` throw** (they read translations and theme context).

```jsx
import { DesignSystemProvider, GroupButton } from "rsc-cloud";

export default function Screen() {
  return (
    <DesignSystemProvider primaryColor="acceoBlue">
      {/* your layout + components here */}
    </DesignSystemProvider>
  );
}
```

`primaryColor` accepts `"acceoBlue"` (default, #1E95D3), `"chateauGreen"`,
`"royalBlue"`, or `"tomatoOrange"`. `direction` accepts `"ltr"` (default) / `"rtl"`.

## Styling idiom: MUI `sx` + theme tokens — no utility classes

There is **no CSS class vocabulary** and no static stylesheet (styles are
injected at runtime by the theme). Style your own layout with MUI's `sx` prop and
the components' props, always referencing theme tokens — never hard-coded hex.
Use the `var(--mui-palette-*)` form inside `sx`, or the MUI shorthand (`color`,
`bgcolor`) with token paths like `"primary.main"`, `"text.secondary"`.

Real tokens shipped by this theme (verified in the bundle):

| Token | Use |
| --- | --- |
| `--mui-palette-primary-main` (`primary.main`) | brand accent — active sort, primary buttons, selected (#1E95D3) |
| `--mui-palette-text-primary` / `-text-secondary` | body / secondary text |
| `--mui-palette-divider` | borders, table/cell rules |
| `--mui-palette-background-paper` / `-background-default` | surfaces / page background |
| `--mui-palette-error-main` (`error.main`) | destructive — Clear all, delete |
| `success` / `warning` / `info` `.main` | semantic status |

The theme has light **and** dark color schemes; tokens resolve per scheme, so
token-based styling adapts automatically. Table-surface tints (header band
`#F1F4F8`, group band, the slate `#64748B` selection accent, `#00659E` hover)
are documented in `guidelines/` (the table design reference).

## Components

- **`DesignSystemProvider`** — the required wrapper (see above).
- **`GlobalTableV2`** — the server-driven data table (`tableId` + `dataFetcher`;
  fetches its own column dictionary). Import and feed it real fetchers; it is not
  rendered in a static preview because it needs a backend. API in its `.d.ts`.
- **`GroupButton`** — row-grouping control: a pill that opens a command-palette
  modal of groupable columns (search, ↑↓, checkbox = active group, L1 badge).
- **`ColumnSelectorPanel`** — column visibility + drag-reorder list (eye toggles,
  joined children indented). Renders inside a right-anchored Drawer in the app.
- **`TableFilters`** — the advanced-filter toolbar + panel: global search,
  "+ Add filter" column picker, active-filter chips, and per-column filter cards
  (text / date / numeric-range rules) with date & number range popovers.
- **`SortableLabel`** — a column-header label with the blue sort triangle.
- **`PulseDots`** — inline three-dot loading indicator.

## Where the truth lives

Read a component's `<Name>.prompt.md` (usage) and `<Name>.d.ts` (exact props)
before composing it. The `guidelines/` folder holds the table design reference
(color tokens, column/format types, breakpoints).

# RscCloudDS (rsc-cloud@0.2.0)

This design system is the published rsc-cloud React library, bundled as a single
browser global. All 6 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.RscCloudDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry (tokens and fonts; this DS injects component styles at runtime). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (1 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.RscCloudDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { ColumnSelectorPanel } = window.RscCloudDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<ColumnSelectorPanel />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<DesignSystemProvider>{children}</DesignSystemProvider>
```

## Tokens

0 CSS custom properties from rsc-cloud. Names are
preserved verbatim from upstream. None detected — this DS may compute styles at runtime (CSS-in-JS).



## Components

### acceo-global-table-v2
- `ColumnSelectorPanel`
- `GroupButton`
- `PulseDots`
- `SortableLabel`

### design-system
- `DesignSystemProvider`

### acceo-universal-table
- `TableFilters`
