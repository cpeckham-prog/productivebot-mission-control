# 🚀 External Access Deployment Guide

## Quick Setup for monitor.cpdgrp.com

### Step 1: GitHub Repository Setup

1. **Create GitHub repository:**
   ```bash
   # From the dashboard directory
   git add .
   git commit -m "🤖 Initial ProductiveBot Mission Control Dashboard"
   git remote add origin https://github.com/YOUR_USERNAME/productivebot-mission-control.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"  
   - Branch: `main` / `/ (root)`
   - ✅ Enforce HTTPS

### Step 2: Domain Configuration in Squarespace

1. **Add DNS record in Squarespace:**
   - Go to Settings → Domains → DNS Settings
   - Add CNAME record:
     ```
     Type: CNAME
     Host: monitor
     Value: YOUR_USERNAME.github.io
     ```

2. **Wait for DNS propagation** (5-60 minutes)

### Step 3: Secure Tunnel for Console Access

#### Option A: Tailscale (Recommended for production)

1. **Install Tailscale on Mac mini:**
   ```bash
   # Install via Homebrew
   brew install tailscale
   
   # Start Tailscale
   sudo tailscale up
   ```

2. **Enable MagicDNS and HTTPS:**
   - Go to Tailscale admin console
   - Enable MagicDNS
   - Enable HTTPS certificates
   
3. **Update console URL:**
   - Mac mini will be accessible as: `https://macmini.TAILNET.ts.net:18789`
   - Update dashboard config with this URL

#### Option B: ngrok (Quick testing)

1. **Install ngrok:**
   ```bash
   # Install via Homebrew  
   brew install ngrok
   
   # Sign up and get auth token from https://ngrok.com/
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ```

2. **Start tunnel:**
   ```bash
   # Tunnel OpenClaw console
   ngrok http 18789
   ```

3. **Use the HTTPS URL** provided by ngrok in dashboard

#### Option C: Cloudflare Tunnel (Production alternative)

1. **Install cloudflared:**
   ```bash
   brew install cloudflare/cloudflare/cloudflared
   ```

2. **Login and create tunnel:**
   ```bash
   cloudflared tunnel login
   cloudflared tunnel create productivebot-console
   ```

3. **Configure tunnel** for port 18789

### Step 4: Update Dashboard Config

Update the console URL in `js/dashboard.js`:

```javascript
// Replace localhost URL with your tunnel URL
const CONSOLE_URL = 'https://your-tunnel-url.ngrok.io'; // or Tailscale URL
```

### Step 5: Automated Data Updates

The dashboard includes GitHub Actions to update monitoring data every 5 minutes. For real-time data from your Mac mini:

1. **Create webhook endpoint** on Mac mini
2. **Configure push updates** from monitoring scripts  
3. **Or set up reverse sync** from Mac mini to GitHub

## Security Considerations

### Authentication
- Tailscale provides automatic authentication
- For ngrok/public tunnels, consider adding basic auth:
  ```bash
  ngrok http 18789 --basic-auth="username:password"
  ```

### Network Security  
- Use HTTPS only for external access
- Consider IP whitelist for console access
- Regular security updates for tunnel software

## Troubleshooting

### Domain Not Resolving
- Check DNS settings in Squarespace
- Verify CNAME points to correct GitHub Pages URL
- Wait for DNS propagation (up to 24 hours)

### Console Access Issues
- Verify tunnel is running and accessible
- Check firewall settings on Mac mini
- Test tunnel URL directly in browser

### Dashboard Data Not Updating
- Check GitHub Actions are enabled and running
- Verify webhook endpoints if using real-time updates
- Manual refresh: commit changes to trigger update

---

**🎯 Result:** Full external access to ProductiveBot Mission Control at `https://monitor.cpdgrp.com` with secure console tunneling!