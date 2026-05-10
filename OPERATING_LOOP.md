# OPERATING_LOOP.md

Current recurring structure after legacy cleanup (2026-04-24).

## Primary model strategy
- Main work: `anthropic/claude-sonnet-4-20250514`
- Routine checks / heartbeat: `ollama/llama3.2:3b`
- Local model is used for lightweight checks and validation, not as a pretend intelligent router

## Source of truth for work lanes
- `ACTIVE_WORK.md` is the live lane snapshot
- If a lane is marked blocked/non-active there, recurring routines must not revive it implicitly
- A lane becomes active only with a real current next proof or explicit Chris activation

## Recurring loops kept active
1. **Heartbeat**
   - Purpose: quiet forward motion, not monitoring theater
   - Uses local model
   - Should stay quiet when there is no real active lane or meaningful alert

2. **Daily Operating Review**
   - Main accountability loop
   - Reconciles trackers against reality once per day
   - May update docs/logs when reality changed

## Retired recurring loops
- Hourly Drift Check
  - legacy board/worklane drift machinery
  - removed because it conflicted with the current blocked/non-active lane model

- Parking Lot Review
  - removed because it created routine review overhead outside the current core loop

- Weekly Strategic Review
  - removed pending renewed need
  - not useful while core lanes are blocked/non-active

- Slack Email Triage / Job Search scans
  - removed from cron
  - related legacy planning artifacts were moved out of the active workspace surface
  - should not be assumed to provide active coverage

## Cleanup principle
- Fewer recurring loops, clearer truth
- No routine checks pretending to be progress
- No stale automations silently implying active work
- Legacy helper scripts tied to removed cron loops should be retired from the active scripts surface
