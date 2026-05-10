# MEMORY.md

## Communication surface
- **Webchat is the current primary working surface** (as of May 2026).
- Slack status is uncertain — last tested May 1, 2026; replied with poor latency, end-to-end reliability across topic channels never fully confirmed.
- Slack infrastructure had recurring issues: babel.cjs plugin crash, allowlist misconfiguration, latency problems.
- If/when Slack is confirmed healthy again, revisit whether to shift back. Until then, webchat is where real work happens.
- The main Slack DM (if active) is high-signal only: active collaboration, decisions, approvals, urgent escalations, and blockers.
- Routine email summaries should not go to the main DM.

## Slack routing defaults
- Core operating surfaces:
  - main Slack DM = active collaboration, approvals, decisions, blockers, urgent escalations
  - `#pb-parking-lot` (`C0APHRE1G8N`) = backlog, ideas, reminders, loose ends, later-maybe items
  - `#pb-ops-status` (`C0AMVK2RQR4`) = config/fix/restart/verification work and meaningful technical status
  - `#pb-daily-brief` (`C0AMXGV4Y4S`) = non-urgent digest-style summaries and curated updates
- Active-work channels only when the lane is genuinely live:
  - `#pb-job-search` (`C0AMZRD0E2G`)
  - `#pb-gaming-channel` (`C0AQE1SLBRT`)
  - `#pb-lucid-lease` (`C0AMYABRRFX`)
  - `#pb-revenue-project` (`C0ANBN587MY`)
  - `#pb-timberland-band-app` (`C0AMV56Q84W`)
- Not part of the default routing model unless explicitly reactivated:
  - `#pb-important-email`
  - `#pb-email-low-priority`
  - `#pb-reading-queue`
  - `#pb-stock-market`
  - `#pb-granola-app`

## Current operating decisions
- Auto-updates policy: Shelia should handle update checks and low-risk updates autonomously, and ask Chris before anything meaningful.
- “True assistant” initial capability target includes all five: email drafting/reply support, ongoing project visibility, week-ahead prep, reminders/prep prompts, and better ownership of follow-through.
- Gaming/creator-channel work is now active and should move to `#pb-gaming-channel` (`C0AQE1SLBRT`) rather than staying parked in `#pb-parking-lot`.
- Shelia identity direction is now locked around the “Balanced Master” archetype: calm strategic operator, protective/precise, support-heavy with stealth elegance, and a high-trust second-in-command fit for Chris.
- Shelia signature colors are `#39D0D8` (signal cyan), `#18263A` (command navy), and `#7A5CFF` (phase violet).

## Messaging guardrails
- Main Slack DM is sacred: use it only for active collaboration, approvals, decisions, blockers, and urgent/time-sensitive items.
- `#pb-parking-lot` is the default capture surface for loose threads that should not interrupt active work.
- `#pb-daily-brief` is the default non-urgent summary surface.
- `#pb-ops-status` is the default surface for system/config/fix work.
- Active-work channels should only receive traffic when the underlying lane is truly active.
- Shelia should manage the Slack structure proactively: route messages to the correct surface, avoid DM leakage, and avoid one-message-per-event spam.
- When in doubt, prefer this order: DM for urgency/decision/blocker -> ops-status for technical work -> active project channel for live lane work -> daily-brief for useful non-urgent summaries -> parking-lot for future/backlog capture.

## Parking lot operating model
- `#pb-parking-lot` (`C0APHRE1G8N`) is the dedicated capture / parking-lot channel.
- Purpose: a running shared backlog for thoughts, ideas, questions, reminders, half-baked plans, and loose ends that should not derail the active working thread.
- Default behavior: capture, not immediate execution.
- Do not treat parking-lot posts as interrupts unless Chris explicitly marks them urgent or asks directly for action.
- Review the parking-lot channel every 24-48 hours and pull forward anything worth advancing during downtime.
- When an item becomes active work, move it into the appropriate execution context/channel rather than leaving it half-active in the parking lot.
- Working split:
  - main Slack DM = active work, decisions, live collaboration
  - `#pb-parking-lot` = backlog, open loops, come-back-to-this-later items
