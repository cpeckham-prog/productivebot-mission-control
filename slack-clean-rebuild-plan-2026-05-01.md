# Slack Clean Rebuild Plan — 2026-05-01

## Recommendation
Do a clean rebuild of the OpenClaw↔Slack integration boundary rather than continuing to patch the current instance.

Do **not** destroy the Slack workspace, channels, or message history.
Do **archive and replace** the current Slack app / OpenClaw integration setup.

## Why
Current state suggests mixed-layer drift:
- Slack plugin runtime-deps corruption occurred and was repaired
- Slack DM ingestion/delivery now works, but with bad latency
- Managed Slack channels still do not reliably create agent sessions
- Config allowlist + `requireMention: false` are already present for the core managed channels
- `openclaw doctor` also flagged a likely Slack group authorization gap: `groupPolicy: "allowlist"` with no Slack `groupAllowFrom` / group sender allowlist populated, which can silently drop group/channel messages before they reach the agent

That combination points to a messy integration state, though the Slack sender-allowlist warning is the one last narrow pre-rebuild check worth verifying explicitly.

## Goal state
Bring Slack back in with a minimal, provable rollout:
1. Chris DM works reliably
2. one test channel works reliably
3. only then add the rest of the managed channels

## Safety / backup scope
Before touching the integration, capture:
- `~/.openclaw/openclaw.json`
- current Slack app identifiers/secrets currently referenced by OpenClaw
- current managed channel map / IDs
- latest relevant gateway log slices
- current Slack operating-model docs in workspace

Recommended archive directory:
- `/Users/productivebot/.openclaw/workspace/archive/slack-reset-2026-05-01/`

## Proposed execution phases

### Preflight checkpoint — one last narrow validation before rebuild
Before disabling the current integration, do one bounded check on the doctor finding:
- verify the intended Slack sender ID allowlist model for group/channel traffic from docs
- compare that to the live config
- if the fix is a single clean sender-allowlist addition, test exactly one channel once
- if it still fails, stop patching and proceed with the rebuild

This is the final allowed pre-rebuild fix attempt; no iterative drift beyond that checkpoint.


### Phase 0 — Archive current state
Create a dated archive with:
- config snapshot
- extracted Slack-related config snippet
- channel ID map
- current diagnosis notes
- relevant logs showing DM partial success + channel ingestion failure

### Phase 1 — Disable the current Slack integration cleanly
- remove or disable Slack channel config in OpenClaw
- stop relying on the current Slack app/runtime state
- restart gateway cleanly
- verify OpenClaw is healthy without Slack enabled

### Phase 2 — Rebuild from a fresh Slack app baseline
- create a fresh Slack app / clean bot install path
- grant only the minimum scopes needed for DM + controlled channel tests
- reinstall to workspace cleanly
- wire fresh credentials into OpenClaw

### Phase 3 — DM-only proof
- enable only Chris DM first
- send a live test
- verify:
  - inbound message creates/uses the expected Slack DM session
  - response latency is acceptable
  - delivery succeeds reliably

### Phase 4 — Single-channel proof
- enable only one managed channel (recommend `#pb-ops-status` for testing)
- send a live test message
- verify:
  - channel message is ingested
  - agent session is created
  - response is delivered in-channel
  - mention/no-mention behavior matches design

### Phase 5 — Controlled rollout
If DM + one channel pass:
- add `#pb-parking-lot`
- add `#pb-daily-brief`
- then add any additional active-work channels only as needed

### Phase 6 — Decommission old integration artifacts
Once new Slack path is proven:
- archive obsolete config references
- retire old app references / stale credentials
- keep notes on what was removed and why

## Rollback
If the fresh integration still behaves badly:
- restore archived config snapshot
- revert to non-Slack primary communication temporarily
- continue from a known-good baseline rather than mixed partial fixes

## Decision points for Chris
1. Approve clean rebuild approach
2. Decide whether to preserve the current Slack app as dormant backup or fully replace it
3. Choose first test channel after DM-only proof (recommended: `#pb-ops-status`)

## Best next move
If approved, execute only through Phases 0-1 first, then stop and verify before creating the fresh Slack app path.
