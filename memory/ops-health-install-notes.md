# Ops Health Notify Install Notes

## Files
- Checker: `scripts/ops-health-check.py`
- Wrapper: `scripts/ops-health-notify.sh`
- State: `memory/ops-health-state.json`
- Example LaunchAgent: `memory/ops-health-launchd-example.plist`

## Intended behavior
- Run every 10 minutes
- Execute the checker in message-emission mode
- If checker prints nothing, do nothing
- If checker prints a failure/recovery message, send it to `#pb-ops-status`

## Verified local send command
Verified supported host-local command:
```bash
openclaw message send --channel slack --target "$CHANNEL_ID" --message "$MESSAGE"
```

## Install readiness
- The wrapper now uses the verified `openclaw message send` CLI path.
- The remaining work is install/load/testing, not command discovery.

## Example install flow after command verification
```bash
chmod +x /Users/productivebot/.openclaw/workspace/scripts/ops-health-notify.sh
cp /Users/productivebot/.openclaw/workspace/memory/ops-health-launchd-example.plist ~/Library/LaunchAgents/ai.productivebot.ops-health-notify.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/ai.productivebot.ops-health-notify.plist
launchctl enable gui/$(id -u)/ai.productivebot.ops-health-notify
launchctl kickstart -k gui/$(id -u)/ai.productivebot.ops-health-notify
```
