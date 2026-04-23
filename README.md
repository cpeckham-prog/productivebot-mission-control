# 🤖 ProductiveBot Mission Control Dashboard

A comprehensive monitoring and control dashboard for the ProductiveBot OpenClaw system, featuring real-time metrics, system health monitoring, and full console integration.

## Features

### 📊 **Live Monitoring Dashboard**
- **System Health Gauge** - Visual health score with A-F grading
- **Cost Optimization Tracking** - Real-time savings progress ($12/$32 target)
- **Reliability Metrics** - Uptime, response time, error rates
- **Activity Log** - Recent system events and changes

### 🖥️ **Full OpenClaw Console Integration**
- **Complete Web Interface** - All OpenClaw functionality embedded
- **Chat Interface** - Direct communication with ProductiveBot
- **Session Management** - Multi-session control and monitoring
- **Configuration Access** - Live system configuration management
- **Logs & Diagnostics** - Real-time system monitoring

### 🚀 **Real-Time Data**
- **Auto-refresh every 30 seconds**
- **Live cost validation** from Phase 5.4 monitoring system
- **Behavioral reliability scoring** (current: 1.000 A+)
- **Promise tracking** and completion rates
- **Cross-session consistency** monitoring

## Quick Start

### Local Development
```bash
# Navigate to dashboard directory
cd /Users/productivebot/.openclaw/workspace/mission-control-dashboard

# Export latest monitoring data
python3 ../scripts/export-dashboard-data.py

# Start local server (Python 3)
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Production Deployment

#### Option 1: GitHub Pages (Recommended)
1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "🚀 Initial Mission Control Dashboard"
   git branch -M main
   git remote add origin https://github.com/productivebot/mission-control.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/` (root)

3. **Configure custom domain:**
   - Add `monitor.cpdgrp.com` to GitHub Pages custom domain
   - Add CNAME record in Squarespace DNS: `monitor` → `productivebot.github.io`

#### Option 2: Direct Hosting
- Upload files to web hosting service
- Ensure JSON data files are accessible at `/data/` path
- Configure CORS headers for iframe embedding

## Architecture

### Data Flow
```
Mac Mini OpenClaw System
    ↓ (monitoring scripts)
Phase 5.4 Monitoring System
    ↓ (export-dashboard-data.py)
JSON Data Files (/data/)
    ↓ (dashboard.js)
Live Dashboard Display
    ↓ (iframe embed)
Full OpenClaw Console
```

### File Structure
```
mission-control-dashboard/
├── index.html              # Main dashboard page
├── css/
│   └── dashboard.css        # Dashboard styling
├── js/
│   └── dashboard.js         # Dashboard logic & data loading
├── data/                    # Live monitoring data (auto-generated)
│   ├── cost-state.json      # Cost optimization metrics
│   ├── reliability-trends.json # System health & reliability
│   ├── system-status.json   # Live system status
│   └── activity-log.json    # Recent activity feed
└── README.md               # This file
```

### Data Sources Integration
- **Cost Validation:** Phase 5.4 `cost-validation.py` results
- **Reliability Trends:** `reliability-trends.py` health assessments  
- **System Status:** Live OpenClaw gateway status
- **Activity Log:** Memory files and system events
- **Promise Tracking:** Advanced promise tracking system data

## Configuration

### OpenClaw Console Access
For full console functionality, ensure:

1. **Local Access (Development):**
   - OpenClaw running on localhost:18789
   - Browser on same network as Mac mini

2. **Remote Access (Production):**
   - Set up secure tunnel (ngrok, Tailscale, or similar)
   - Update iframe `src` to public URL
   - Configure authentication as needed

### Data Updates
The dashboard auto-refreshes data every 30 seconds. For more frequent updates:

1. **Modify refresh interval** in `dashboard.js`:
   ```javascript
   this.refreshInterval = 15000; // 15 seconds
   ```

2. **Set up automated data export** via cron:
   ```bash
   # Add to crontab for every 5 minutes
   */5 * * * * cd /Users/productivebot/.openclaw/workspace && python3 scripts/export-dashboard-data.py
   ```

## Customization

### Visual Theme
- Edit CSS variables in `:root` section of `dashboard.css`
- Color scheme: Dark theme with accent color `#00d2ff`
- Responsive design supports desktop, tablet, mobile

### Metrics Display
- Add new metrics in `dashboard.js` `loadData()` methods
- Create corresponding HTML elements in `index.html`
- Style new elements in `dashboard.css`

### Console Integration
- Modify iframe source for different console URLs
- Add authentication headers as needed
- Customize fallback content for offline scenarios

## Monitoring Integration

### Phase 5.4 System Integration
This dashboard integrates with all Phase 5.4 monitoring components:

- **✅ Real-time Cost Validation** - Live savings tracking
- **✅ Usage Analytics Engine** - Model usage patterns
- **✅ Reliability Trend Analysis** - Long-term health insights  
- **✅ System Optimization Engine** - Improvement recommendations

### Health Grading System
- **A (90-100%):** Excellent system health, all optimizations working
- **B (80-89%):** Good performance, minor improvements available
- **C (70-79%):** Acceptable performance, optimization needed
- **D (60-69%):** Poor performance, immediate attention required
- **F (<60%):** Critical issues, system intervention needed

**Current System Grade: D (65.0%) - Improvement needed in cost optimization**

## Deployment Status

- **✅ Dashboard Built:** Complete monitoring interface
- **✅ Data Export:** Real monitoring data integrated
- **✅ Console Ready:** Full OpenClaw console embed prepared
- **🔄 Deployment Pending:** Awaiting hosting configuration
- **⏳ Domain Setup:** `monitor.cpdgrp.com` configuration needed

## Security Considerations

### Authentication
- Dashboard displays system metrics (consider access control)
- Console access provides full system control (requires secure tunnel)
- Consider OAuth integration with `shelia@cpdgrp.com` account

### Network Security
- Use HTTPS for production deployment
- Configure CORS policies appropriately
- Implement secure tunneling for console access

## Support & Troubleshooting

### Common Issues
1. **Console not loading:** Check OpenClaw gateway status and network access
2. **Data not updating:** Verify `export-dashboard-data.py` execution and file permissions
3. **Styling issues:** Check CSS file loading and browser compatibility

### Debug Mode
Enable console logging in `dashboard.js`:
```javascript
console.log('🚀 Initializing Mission Control Dashboard...');
```

---

**🎉 Ready to deploy your Mission Control Dashboard!**

This dashboard provides a complete overview of your ProductiveBot system with full operational control capabilities. The combination of monitoring metrics and console integration creates a true "mission control" experience for managing the entire OpenClaw system.

*Built with Phase 5.4 Enhanced Performance Monitoring System integration*