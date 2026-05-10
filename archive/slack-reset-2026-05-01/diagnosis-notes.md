# Slack diagnosis notes — 2026-05-01

## Current evidence snapshot
- Slack plugin runtime-deps cache corruption was previously real and repaired.
- Current gateway shows Slack connected and `openclaw channels status --probe` reports `works`.
- Slack DM ingestion works, but with poor latency during recent testing.
- Managed Slack channel test messages still did not create matching agent sessions.
- Channel allowlist keys in live config use Slack channel IDs, which matches the docs.
- `openclaw doctor` warned that `channels.slack.groupPolicy` is `allowlist` while `allowFrom` / `groupAllowFrom` are empty, but Slack docs indicate channel allowlisting is driven by `channels.slack.channels`; this doctor warning appears generic and not a proven Slack root cause.
- Fresh process inspection showed one real gateway listener on port 18789; the earlier duplicate-gateway warning was not reproduced and likely reflected restart residue or a loose process match.

## Additional preflight finding
- Live logs confirm the configured Slack channels are resolving correctly by ID and name at startup (`pb-parking-lot`, `pb-ops-status`, `pb-daily-brief`, etc.).
- The 22:35-22:36 test phrase appears in the Slack DM session transcript but not in any matching channel session transcript.
- Searching the gateway log around the channel IDs shows config/reload and channel-resolution entries, but no corresponding inbound event/drop lines for the failed channel tests.
- That points more strongly to **channel events not reaching OpenClaw at all** (or not being emitted by the Slack app) rather than an in-app allowlist mismatch after receipt.
- The cleanest remaining Slack-specific preflight suspicion is now the Slack app/event-subscription layer itself: for example missing or stale `message.channels` / `message.groups` subscriptions, incomplete reinstall after manifest/scope changes, or stale app-install state.

## Likely conclusion
The remaining issue is not the already-fixed plugin startup problem, not an obvious channel-ID allowlist typo, and not a reproduced duplicate-gateway problem. It is likely a more specific Slack integration state problem at the app/install/event-delivery boundary.

## Operating decision
Use one bounded preflight fix attempt only if a single clear Slack app/event gate is identified.
Otherwise proceed with the clean integration rebuild path:
1. archive current state
2. disable current Slack integration cleanly
3. rebuild from a fresh Slack app baseline
4. prove DM only
5. prove one channel
6. controlled rollout
