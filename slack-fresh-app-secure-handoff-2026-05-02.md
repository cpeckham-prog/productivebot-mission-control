# Secure Slack token handoff

## Best option
Do **not** paste the fresh Slack tokens into normal chat if you’d rather avoid it.

Instead, once you create the fresh Slack app, send me either:
- the tokens directly if you’re comfortable, **or**
- tell me you want a **local env/SecretRef path** and I’ll walk you through that safer route

## SecretRef-ready token names
If we use the safer env-backed path, we will use:
- `SLACK_BOT_TOKEN`
- `SLACK_APP_TOKEN`

## Planned config style
The clean DM-only re-enable can use SecretRef-backed config like:

```json5
{
  channels: {
    slack: {
      enabled: true,
      mode: "socket",
      appToken: { source: "env", provider: "default", id: "SLACK_APP_TOKEN" },
      botToken: { source: "env", provider: "default", id: "SLACK_BOT_TOKEN" },
      groupPolicy: "allowlist",
      channels: {}
    }
  }
}
```

## What I’ll do after that
- wire the fresh app into OpenClaw in DM-only mode
- restart the gateway
- verify DM works
- then move to one-channel proof
