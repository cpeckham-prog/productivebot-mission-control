# Slack DM-only enable plan

## After Chris provides fresh tokens

### 1) Patch config with fresh tokens
Use:
- `/Users/productivebot/.openclaw/workspace/slack-fresh-app-token-patch-template-2026-05-02.json5`

### 2) DM-only config state
Enable Slack with:
- `enabled: true`
- `mode: "socket"`
- fresh `appToken`
- fresh `botToken`
- `groupPolicy: "allowlist"`
- `channels: {}`

This intentionally keeps channel handling off for the first proof step.

### 3) Restart gateway
- `openclaw gateway restart`

### 4) Verify DM-only state
- `openclaw status --deep`
- `openclaw channels status --probe`
- live DM test from Chris

### 5) Success criteria
- Slack shows enabled/running/connected
- DM message reaches the main Slack DM session promptly
- reply is delivered without the prior long delay

### 6) Only after DM passes
Add exactly one channel for proof, recommended:
- `#pb-ops-status`
