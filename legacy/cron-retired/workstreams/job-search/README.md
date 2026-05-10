# Job Search Workstream

Status: live, bounded parallel workstream
Owner mode: separate session/task when running reviews

## Purpose
Run a simple, high-signal review of exactly five logged-in sources without rebuilding the old automation stack.

## In scope
Fractional
1. Catalant dashboard/profile: https://app.gocatalant.com/c/_/u/0/dashboard/
2. Business Talent Group projects: https://talent.businesstalentgroup.com/projects

Permanent
3. LinkedIn Revenue search
4. LinkedIn Operations search
5. Ladders search

Canonical saved-search URLs for LinkedIn live in `memory/job-search-criteria.md`.
Ladders should use the logged-in search already used in prior manual/browser review sessions.

## Operating model
Use this as its own bounded review session, separate from gaming/creator work.
Do not run cron, wide scraping, or governance loops.
Do direct logged-in browser review, source by source.
Capture only worthwhile opportunities.

### Default run shape
1. Open the five sources in the logged-in browser context.
2. Review visible opportunities/projects.
3. Classify each worthwhile item as `Apply`, `Review`, or `Ignore`.
4. Record only worthwhile items in `opportunities.md`.
5. Add one short run summary to `run-log.md`.
6. Report only net-new or materially changed high-signal items back to Chris.

### Review standard
Surface items only when they plausibly fit Chris's target lane:
- executive or near-executive operations, revenue, GTM, or fractional leadership
- credible company/client or strong project economics
- enough scope, seniority, and context to justify human attention

Skip noisy coverage theater. If a source is blocked, logged out, or anti-bot limited, say so plainly and do not pretend the scan was complete.

## Classification rules
### Apply
Use when the role/project looks strong enough to actively pursue now.
Capture a concrete next step.

### Review
Use when the item is promising but needs judgment, tailoring, or a deeper look.

### Ignore
Use for obvious non-fits, but do not clutter the tracker with routine ignores unless they are notable or explain an important pattern.

## Separation from other work
- This workstream lives only in `workstreams/job-search/` plus the long-term reference files already in `memory/`.
- Gaming/creator work should stay in its own session/channel/surfaces.
- Do not revive archived `ACTIVE_WORK.md` or `STATUS_BOARD.md` for this.

## Recommended session usage
When job-search review is needed, spawn or use a dedicated session labeled `job-search-workstream` and keep that session focused on this folder and these five sources only.

## Minimal maintenance rule
If this workflow starts needing more machinery to stay alive, stop and simplify rather than adding more automation.
