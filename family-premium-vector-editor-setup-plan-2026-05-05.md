# Family Premium Emblem — vector editor setup plan (2026-05-05)

## Goal
Resume the family-premium emblem surgical cleanup only after a controllable vector-edit environment exists.

## Recommended path
### Option A — Inkscape (recommended fastest path)
- Availability check: Homebrew cask exists and is current (`inkscape 1.4.3`)
- Install command:
  ```bash
  brew install --cask inkscape
  ```
- Why this path:
  - true node/path editing
  - local and controllable
  - no extra subscription required
  - enough precision for the lower-center orange surgery

### Option B — Adobe Illustrator (best-in-class)
- Best if Chris already has Adobe access or wants the strongest professional environment
- Use when exact bezier control and premium export workflow matter most

## Locked source pack for the editor session
- `mission-control-dashboard/logo-assets/family-premium-emblem-final.png`
- `mission-control-dashboard/logo-assets/family-premium-emblem-annotated-box.png`
- `mission-control-dashboard/logo-assets/family-premium-emblem-lower-center-crop.png`
- `family-premium-emblem-relock-brief-2026-05-05.md`
- `family-premium-emblem-problem-area-brief-2026-05-05.md`
- `family-premium-emblem-capability-check-2026-05-05.md`

## Exact first editor workflow
1. Open the locked master PNG as the non-editable background/reference.
2. Create a new vector layer only for the lower-center orange construction.
3. Rebuild only that orange segment as paths.
4. Keep all surrounding geometry as locked visual reference; do not redraw the full emblem.
5. Compare at high zoom against the crop and against the full boxed master.
6. Export SVG + high-res PNG.
7. Run side-by-side comparison against the locked master before any review hosting.

## Hard rules for the editor session
- No full-emblem retrace.
- No CPD lane work.
- No simplification that weakens the premium integrated feel.
- No review hosting until master comparison passes.

## Resume condition
When a controllable vector editor is installed and available, resume from this plan rather than re-deciding the lane/master/path.
