# Retired Scripts

These scripts were moved out of the active `scripts/` surface on 2026-04-24 because they were tied to removed or obsolete loop-management flows.

Retired here:
- `optimize-cron-models.py`
- `selective-cron-enable.py`
- `heartbeat-diagnostic.py`
- `monitor.py`

Reason:
- they referenced older cron/job mixes or exploratory diagnostics that no longer match the simplified live operating model
- keeping them in the active scripts surface would create ambiguity about what is still operational

Not retired:
- enforcement, verification, promise tracking, reliability, and current monitoring scripts that still support the live model
