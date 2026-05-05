# CPD SVG rebuild brief — 2026-05-05

## Locked master
- Approved master PNG: `cpd-final-approved-lockup.png`
- Supporting reference PNG: `cpd-final-approved-reference.png`

## Requested path
approved PNG master → manual SVG rebuild → surgical vector fix → raster exports

## Invariants to preserve
- same logo family and crossing/interlock logic as the approved PNG master
- same restrained professional tone
- same dark navy mark/wordmark relationship
- no broad restyle, no concept swap, no drift into a different symbol family

## Working assumption
- The currently approved master Chris means is the CPD approved lockup in `mission-control-dashboard/logo-assets/`.
- If that assumption proves wrong, stop and relock before further cleanup.

## Execution approach
1. Build a controllable SVG base directly from the approved master geometry.
2. Use the SVG base as the only editable master for surgical vector cleanup.
3. Export fresh raster outputs from that cleaned SVG.

## Current status
- Master locked.
- SVG base generation in progress.
