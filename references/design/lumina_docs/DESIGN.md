```markdown
# Design System: High-End Editorial Documentation

## 1. Overview & Creative North Star: "The Digital Curator"
Most documentation sites feel like utilitarian filing cabinets. This design system rejects the "standard template" in favor of **The Digital Curator**—a philosophy that treats technical information with the prestige of a high-end editorial magazine. 

By leveraging intentional asymmetry, expansive whitespace, and sophisticated tonal layering, we move beyond the "GitBook clone" into a signature experience. We use the contrast between dense, technical code blocks and airy, breathable prose to create a rhythmic reading experience. The layout is not a grid to be filled; it is a canvas where information is curated, not just displayed.

---

### 2. Colors & Surface Philosophy
The palette is rooted in a clinical yet sophisticated range of grays, punctuated by a surgical application of `primary` blue.

#### The "No-Line" Rule
Traditional 1px borders create visual noise. In this system, **1px solid borders are prohibited for sectioning.** Boundaries are defined strictly through background shifts:
- Use `surface-container-low` (#f0f4f7) for large layout sections.
- Use `surface-container-lowest` (#ffffff) for the primary reading canvas.
- This creates "implicit edges" that feel more architectural and less "web-like."

#### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine paper sheets. 
- **Base Level:** `background` (#f7f9fb)
- **Navigation/Sidebar:** `surface-container` (#e8eff3)
- **Main Content Well:** `surface-container-lowest` (#ffffff)
- **Hover States/Inlays:** `surface-container-high` (#e1e9ee)

#### The "Glass & Gradient" Rule
To elevate the "Modern" aesthetic, floating elements (like Search Modals or Tooltips) must use **Glassmorphism**. Use `surface` colors at 80% opacity with a `20px` backdrop-blur. For primary CTAs, apply a subtle linear gradient from `primary` (#005ac2) to `primary_dim` (#004fab) at a 135-degree angle to add "soul" to the flat geometry.

---

### 3. Typography: The Editorial Scale
We use **Inter** as a variable font to create a crisp, authoritative hierarchy. The goal is "Readability as Luxury."

*   **Display (The Statement):** `display-md` (2.75rem) for landing page heroes. Use tight letter-spacing (-0.02em) and `on_surface` color.
*   **Headlines (The Anchor):** `headline-sm` (1.5rem) for article titles. Use generous `line-height` (1.4) to allow the eye to rest.
*   **Body (The Content):** `body-lg` (1rem) for documentation prose. Set to `on_surface_variant` (#566166) to reduce eye strain, switching to `on_surface` (#2a3439) for bolded emphasis.
*   **Labels (The Metadata):** `label-md` (0.75rem) in `secondary` (#5e5f65) for breadcrumbs and sidebar categories. Always uppercase with +0.05em tracking.

---

### 4. Elevation & Depth
We eschew heavy shadows for **Tonal Layering**. Depth is a result of color proximity, not artificial lighting.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift in hex value provides all the separation required.
*   **Ambient Shadows:** If a component must "float" (e.g., a dropdown), use a shadow: `0px 12px 32px rgba(42, 52, 57, 0.06)`. The tint is derived from `on_surface`, never pure black.
*   **The "Ghost Border" Fallback:** For high-density components like Code Blocks, use a "Ghost Border": `outline-variant` (#a9b4b9) at **15% opacity**.

---

### 5. Components

#### Sidebar Navigation
- **Architecture:** No vertical dividers. Use `spacing.4` (1.4rem) horizontal padding.
- **Active State:** Instead of a box, use a `primary` vertical "pill" indicator (2px wide) on the left of the text, with the text color shifting to `primary`.

#### Code Blocks (The Centerpiece)
- **Styling:** Use `surface_container_highest` (#d9e4ea) for the background. 
- **Details:** Apply `roundedness.lg` (0.5rem). No border. Syntax highlighting should use a muted palette based on `tertiary` and `secondary` tokens to avoid clashing with the primary blue.

#### Callout Boxes (Info, Warning, Tip)
- **Styling:** Do not use heavy background fills. Use a thick 4px left-border of the semantic color (`primary` for info, `error` for warning).
- **Background:** Use the semantic container color at 30% opacity (e.g., `primary_container` at 30%).

#### Buttons
- **Primary:** Gradient fill (`primary` to `primary_dim`), `roundedness.md`, `label-md` typography.
- **Tertiary (Ghost):** No background or border. Use `on_surface_variant`. On hover, shift to `surface_container_low`.

#### Interactive Table of Contents (Right Sidebar)
- **Asymmetry:** Positioned to the right with a smaller type size (`body-sm`). 
- **Indicator:** A "progress trace" line in `outline_variant` that highlights the current section in `primary`.

---

### 6. Do's and Don'ts

#### Do
- **Do** use `spacing.16` or `spacing.20` between major sections to emphasize the "Editorial" feel.
- **Do** use `roundedness.full` for chips and search bars to contrast against the structured, rectangular content blocks.
- **Do** use `surface-bright` for the very top layer of the UI to lead the user’s eye.

#### Don'ts
- **Don't** use `0.5px` or `1px` lines to separate list items; use `spacing.2` vertical gaps instead.
- **Don't** use pure black (#000000) for text. Always use `on_surface` or `on_surface_variant` to maintain the premium, soft-contrast look.
- **Don't** crowd the sidebar. If a category has more than 10 items, use "Surface Nesting" to group them into a `surface-container-low` sub-menu.

---

### Director's Closing Note
This system succeeds when it feels "quiet." Every element—from the spacing scale to the ghost borders—is designed to disappear, leaving only the user's content. If a design choice feels "loud," pull back the opacity or increase the white space. We are building a gallery, not the art itself.```