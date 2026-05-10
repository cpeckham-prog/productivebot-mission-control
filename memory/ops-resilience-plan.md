# Ops Resilience Plan

## Goal
Detect when Shelia/OpenClaw becomes degraded or recovers after an outage, and post only state-change notifications to `#pb-ops-status`.

## Notification policy
- Channel: `#pb-ops-status`
- Mode: recovery/failure only
- No routine healthy chatter
- No duplicate notifications if state has not changed

## Desired messages
### Failure
- Shelia health issue detected
- Include failing component(s): gateway, Slack, Telegram, scheduler
- Include whether manual recovery may be needed

### Recovery
- Shelia recovered after host restart/outage
- Gateway: OK
- Slack: OK
- Telegram: OK
- Scheduled jobs: OK

## State tracking
Use a small local state file:
- `memory/ops-health-state.json`

Suggested fields:
```json
{
  "lastOverallState": "healthy",
  "lastGatewayOk": true,
  "lastSlackOk": true,
  "lastTelegramOk": true,
  "lastSchedulerOk": true,
  "lastFailureAt": null,
  "lastRecoveryAt": null,
  "lastNotifiedState": "healthy"
}
```

## Health-check logic
Each run should:
1. Run `openclaw status --deep`
2. Evaluate:
   - gateway reachable?
   - Slack OK?
   - Telegram OK?
3. Run `openclaw cron list`
4. Evaluate scheduler health:
   - required jobs present
   - recent status not failed
5. Derive overall state:
   - `healthy` if all required components pass
   - `degraded` if any required component fails
6. Compare against previous state file
7. Notify only on state change:
   - healthy -> degraded => send failure post
   - degraded -> healthy => send recovery post
   - same state => no post
8. Update state file

## Initial cadence recommendation
- every 10 or 15 minutes is enough
- frequent enough to catch outages
- infrequent enough to avoid waste/noise

## Required checks
### Required healthy components
- OpenClaw gateway reachable
- Slack status OK
- Telegram status OK
- Required cron jobs exist and are not currently failing

### Required cron jobs
- `Slack Email Triage`
- `Ladders Job Search Scan`

## Implementation shape
Preferred implementation order:
1. Create a small local script that:
   - runs the checks
   - reads/writes `memory/ops-health-state.json`
   - emits a compact result
   - emits a state-change-only message with `--emit-message`
2. Add a scheduled job to run it periodically
3. Route notifications to `#pb-ops-status`
4. Test both transitions:
   - simulated degraded
   - simulated recovery

## Current implementation status
### Completed
- Local checker script created: `scripts/ops-health-check.py`
- Local state file created: `memory/ops-health-state.json`
- Baseline handling implemented (`unknown -> healthy` = `baseline`, not `recovery`)
- Message emission mode implemented with `--emit-message`
- Manual tests completed:
  - no-change run => no output
  - forced scheduler failure => failure message + nonzero exit
  - restored healthy state => recovery message

### Pending
- Scheduled execution
- Delivery of state-change messages into `#pb-ops-status`
- Live end-to-end notification test through the actual channel path

## Proposed scheduling plan
- Cadence: every 10 minutes
- Command: `python3 /Users/productivebot/.openclaw/workspace/scripts/ops-health-check.py --emit-message`
- Behavior goal:
  - empty output on no change
  - failure message on healthy -> degraded
  - recovery message on degraded -> healthy

## Proposed delivery model
Two viable approaches:
1. Wrapper/scheduler route that sends stdout to `#pb-ops-status` only when stdout is non-empty
2. OpenClaw-managed periodic task that runs the checker, interprets output, and posts only when a message is present

Preferred outcome: use the simplest route that preserves state-change-only behavior and keeps logic local to the checker script.

## Open questions
- Whether to treat a single missed cron run as degraded immediately, or only after repeated failure
- Whether to include timestamp of last successful heartbeat in the recovery message
- Whether to notify on scheduler issues separately from channel/gateway issues

## Recommended defaults
- Scheduler should only count as degraded if a required job is missing or shows failure, not merely because its next run is later
- Keep messages concise
- Prefer one consolidated failure message over multiple fragmented alerts
