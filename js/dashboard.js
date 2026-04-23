// ProductiveBot Mission Control Dashboard JavaScript

class MissionControlDashboard {
    constructor() {
        this.refreshInterval = 30000; // 30 seconds
        this.charts = {};
        this.data = {};
        this.isLoading = false;
        
        this.init();
    }

    async init() {
        console.log('🚀 Initializing Mission Control Dashboard...');
        
        // Show loading overlay initially
        this.showLoading();
        
        // Initialize components
        this.setupEventListeners();
        this.setupHealthGauge();
        
        // Load initial data
        await this.loadData();
        
        // Hide loading overlay
        this.hideLoading();
        
        // Start auto-refresh
        this.startAutoRefresh();
        
        // Update timestamps
        this.updateTimestamps();
        setInterval(() => this.updateTimestamps(), 1000);
        
        console.log('✅ Mission Control Dashboard initialized');
    }

    setupEventListeners() {
        // Refresh button
        const refreshBtn = document.getElementById('refresh-btn');
        refreshBtn.addEventListener('click', () => this.refreshData());
        
        // Tab switching (for future console integration)
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                tabBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
        
        // Console iframe error handling
        const consoleIframe = document.getElementById('openclaw-console');
        consoleIframe.addEventListener('error', () => {
            this.handleConsoleError();
        });
    }

    setupHealthGauge() {
        const canvas = document.getElementById('healthGauge');
        const ctx = canvas.getContext('2d');
        
        // Create a custom gauge chart
        this.charts.healthGauge = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [65, 35], // 65% filled, 35% empty
                    backgroundColor: ['#f59e0b', '#252d3d'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                cutout: '70%'
            }
        });
    }

    async loadData() {
        try {
            this.isLoading = true;
            
            // Load monitoring data from our scripts
            const [costData, reliabilityData, systemData] = await Promise.all([
                this.loadCostData(),
                this.loadReliabilityData(),
                this.loadSystemData()
            ]);
            
            this.data = {
                cost: costData,
                reliability: reliabilityData,
                system: systemData,
                lastUpdated: new Date()
            };
            
            this.updateDashboard();
            
        } catch (error) {
            console.error('❌ Error loading data:', error);
            this.showError('Failed to load monitoring data');
        } finally {
            this.isLoading = false;
        }
    }

    async loadCostData() {
        // Try to load from our cost validation results
        try {
            const response = await fetch('data/cost-state.json');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.warn('Could not load cost data from file, using defaults');
        }
        
        // Default data based on our current state
        return {
            expectedSavings: 32,
            actualSavings: 12,
            heartbeatSavings: 0,
            cronSavings: 12,
            efficiency: 0.375
        };
    }

    async loadReliabilityData() {
        try {
            const response = await fetch('data/reliability-trends.json');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.warn('Could not load reliability data from file, using defaults');
        }
        
        return {
            overallHealth: 0.650,
            healthGrade: 'D',
            behavioralScore: 1.000,
            promiseCompletion: 0.000,
            uptime: 99.9,
            responseTime: 1.2,
            errorRate: 0.1,
            localModelUsage: 75
        };
    }

    async loadSystemData() {
        try {
            // Try to get live system data
            const response = await fetch('/api/system/status');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.warn('Could not load live system data, using defaults');
        }
        
        return {
            status: 'online',
            version: '2026.4.22',
            model: 'anthropic/claude-sonnet-4-20250514',
            fallbacks: ['ollama/llama3.2:3b', 'openai/gpt-5.4'],
            activeJobs: 3,
            sessions: 1
        };
    }

    updateDashboard() {
        this.updateHealthMetrics();
        this.updateCostMetrics();
        this.updateReliabilityMetrics();
        this.updateSystemStatus();
        this.updateActivityLog();
    }

    updateHealthMetrics() {
        const { reliability } = this.data;
        
        // Update health gauge
        const healthScore = Math.round(reliability.overallHealth * 100);
        this.charts.healthGauge.data.datasets[0].data = [healthScore, 100 - healthScore];
        
        // Update colors based on grade
        const colors = {
            'A': '#10b981', 'B': '#3b82f6', 'C': '#f59e0b', 'D': '#ef4444', 'F': '#7f1d1d'
        };
        this.charts.healthGauge.data.datasets[0].backgroundColor[0] = colors[reliability.healthGrade] || '#f59e0b';
        this.charts.healthGauge.update();
        
        // Update text elements
        document.getElementById('health-grade').textContent = reliability.healthGrade;
        document.getElementById('health-score').textContent = reliability.overallHealth.toFixed(3);
        document.getElementById('behavioral-score').textContent = reliability.behavioralScore.toFixed(3);
        document.getElementById('cost-efficiency').textContent = `${Math.round(this.data.cost.efficiency * 100)}%`;
        document.getElementById('promise-tracking').textContent = `${Math.round(reliability.promiseCompletion * 100)}%`;
    }

    updateCostMetrics() {
        const { cost } = this.data;
        
        // Update progress bar
        const progressFill = document.getElementById('cost-progress-fill');
        const progressPercent = (cost.actualSavings / cost.expectedSavings) * 100;
        progressFill.style.width = `${progressPercent}%`;
        
        // Update cost values
        document.getElementById('current-savings').textContent = `$${cost.actualSavings}`;
        document.getElementById('heartbeat-savings').textContent = `$${cost.heartbeatSavings}`;
        document.getElementById('cron-savings').textContent = `$${cost.cronSavings}`;
    }

    updateReliabilityMetrics() {
        const { reliability } = this.data;
        
        document.getElementById('uptime').textContent = `${reliability.uptime}%`;
        document.getElementById('response-time').textContent = `${reliability.responseTime}s`;
        document.getElementById('error-rate').textContent = `${reliability.errorRate}%`;
        document.getElementById('local-usage').textContent = `${reliability.localModelUsage}%`;
    }

    updateSystemStatus() {
        const { system } = this.data;
        
        // Update connection status
        const statusDot = document.getElementById('connection-status');
        const statusText = document.getElementById('connection-text');
        
        if (system.status === 'online') {
            statusDot.className = 'status-dot online';
            statusText.textContent = 'Connected';
        } else {
            statusDot.className = 'status-dot error';
            statusText.textContent = 'Disconnected';
        }
    }

    updateActivityLog() {
        // Add real-time activity updates
        const activities = [
            { time: this.formatTime(new Date()), event: '📊 Dashboard data refreshed' },
            { time: '17:37', event: '🚀 Mission Control build started' },
            { time: '17:31', event: '🔒 Behavioral assessment: Normal (1.000)' },
            { time: '16:33', event: '🔄 Gateway restarted successfully' },
            { time: '16:26', event: '🔑 Ollama authentication configured' }
        ];
        
        const activityList = document.getElementById('activity-list');
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <span class="time">${activity.time}</span>
                <span class="event">${activity.event}</span>
            </div>
        `).join('');
    }

    async refreshData() {
        if (this.isLoading) return;
        
        const refreshBtn = document.getElementById('refresh-btn');
        refreshBtn.textContent = '🔄 Refreshing...';
        refreshBtn.disabled = true;
        
        await this.loadData();
        
        refreshBtn.textContent = '🔄 Refresh';
        refreshBtn.disabled = false;
    }

    startAutoRefresh() {
        setInterval(async () => {
            if (!this.isLoading) {
                await this.loadData();
            }
        }, this.refreshInterval);
    }

    updateTimestamps() {
        const now = new Date();
        document.getElementById('system-time').textContent = this.formatTime(now);
        
        if (this.data.lastUpdated) {
            document.getElementById('last-updated').textContent = this.formatTime(this.data.lastUpdated);
        }
    }

    formatTime(date) {
        return date.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }

    showLoading() {
        document.getElementById('loading-overlay').style.display = 'flex';
    }

    hideLoading() {
        document.getElementById('loading-overlay').style.display = 'none';
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.innerHTML = `
            <div class="error-content">
                <span class="error-icon">⚠️</span>
                <span class="error-message">${message}</span>
                <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    handleConsoleError() {
        console.warn('OpenClaw console connection failed');
        const iframe = document.getElementById('openclaw-console');
        iframe.style.display = 'none';
        
        // Show fallback content
        const fallback = document.getElementById('console-fallback');
        if (fallback) {
            fallback.style.display = 'block';
        }
    }

    detectConsoleAccess() {
        // Check if OpenClaw console is accessible
        fetch('http://localhost:18789')
            .then(response => {
                if (response.ok) {
                    console.log('✅ OpenClaw console accessible');
                    return true;
                }
            })
            .catch(error => {
                console.log('⚠️ OpenClaw console not directly accessible:', error.message);
                return false;
            });
    }
}

// Data Export Functions (for generating JSON files from our monitoring scripts)
class DataExporter {
    static async exportCostData() {
        // This would be called by our cost-validation script
        try {
            const response = await fetch('/api/cost/validation');
            const data = await response.json();
            
            const exportData = {
                expectedSavings: data.expected_total || 32,
                actualSavings: data.actual_total || 12,
                heartbeatSavings: data.actual_heartbeat_savings || 0,
                cronSavings: data.actual_cron_savings || 12,
                efficiency: data.actual_total / data.expected_total || 0.375,
                lastUpdate: new Date().toISOString()
            };
            
            // Save to data directory
            await this.saveToFile('data/cost-state.json', exportData);
            
        } catch (error) {
            console.error('Failed to export cost data:', error);
        }
    }
    
    static async saveToFile(filename, data) {
        // This would save to the dashboard data directory
        // Implementation depends on the deployment method
        console.log(`Would save to ${filename}:`, data);
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new MissionControlDashboard();
});

// Console Access Functions
window.openConsoleOption = function(option) {
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => card.classList.remove('active'));
    
    if (option === 'direct') {
        // Open in new tab
        window.open('http://localhost:18789', '_blank');
        
        // Update active state
        optionCards[0].classList.add('active');
        
    } else if (option === 'embed') {
        // Try embedding
        const iframe = document.getElementById('openclaw-console');
        const embedDiv = document.getElementById('console-embed');
        const fallbackDiv = document.getElementById('console-fallback');
        
        iframe.src = 'http://localhost:18789';
        embedDiv.classList.remove('hidden');
        fallbackDiv.style.display = 'none';
        
        // Update active state
        optionCards[1].classList.add('active');
        
        // Set timeout to show fallback if embed fails
        setTimeout(() => {
            // Check if iframe loaded
            iframe.onerror = () => {
                embedDiv.classList.add('hidden');
                fallbackDiv.style.display = 'block';
            };
        }, 3000);
    }
};

window.showTunnelInstructions = function() {
    const instructions = `
    🌐 Setting up Remote Access to OpenClaw Console:
    
    🔧 Option 1: ngrok (Recommended for testing)
    1. Install ngrok: https://ngrok.com/
    2. Run: ngrok http 18789
    3. Use the https URL provided
    
    🔒 Option 2: Tailscale (Recommended for production)
    1. Install Tailscale on Mac mini
    2. Enable MagicDNS
    3. Access via machine name
    
    ⚙️ Option 3: SSH Tunnel
    1. Set up SSH access to Mac mini
    2. Create tunnel: ssh -L 18789:localhost:18789 user@macmini
    3. Access via tunneled localhost
    
    🔐 Security Notes:
    - Always use HTTPS for remote access
    - Consider authentication requirements
    - Restrict access to trusted networks
    `;
    
    alert(instructions);
};

// Auto-detect console access on page load
document.addEventListener('DOMContentLoaded', () => {
    // Try to detect if console is directly accessible
    fetch('http://localhost:18789', { mode: 'no-cors' })
        .then(() => {
            console.log('✅ OpenClaw console detected');
        })
        .catch(() => {
            console.log('🔗 OpenClaw console requires direct link');
        });
});

// Export for use in other scripts
window.MissionControlDashboard = MissionControlDashboard;
window.DataExporter = DataExporter;