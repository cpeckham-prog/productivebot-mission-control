# Fresh Slack app checklist

## What to create
A brand-new Slack app using this manifest:
- `/Users/productivebot/.openclaw/workspace/slack-fresh-app-manifest-2026-05-02.json`

## Steps
1. Go to https://api.slack.com/apps
2. Click **Create New App**
3. Choose **From an app manifest**
4. Select the workspace
5. Paste the manifest JSON from the file above
6. Create the app
7. In the app settings, generate an **App-Level Token** with scope:
   - `connections:write`
8. Install the app to the workspace
9. Copy these two values:
   - **Bot Token** (`xoxb-...`)
   - **App Token** (`xapp-...`)

## What to send back
Send me only:
- the new `xoxb-...` token
- the new `xapp-...` token

Once I have them, I’ll handle the rest:
- wire them into OpenClaw
- enable DM-only first
- restart + verify
- then do the one-channel proof
