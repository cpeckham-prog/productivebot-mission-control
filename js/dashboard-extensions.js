// Dashboard Extensions - Additional card update methods

// Extend the main dashboard class with new methods
if (typeof MissionControlDashboard !== 'undefined') {
    
    MissionControlDashboard.prototype.updateActivityLog = function() {
        // Load activity from our logs - no scroll, grid layout
        const activities = [
            { icon: '📊', text: 'Dashboard data refreshed', time: '2 min ago' },
            { icon: '🚀', text: 'Mission Control deployed', time: '1 hr ago' },
            { icon: '🔒', text: 'Behavioral assessment: Normal', time: '1 hr ago' },
            { icon: '⚡', text: 'Cron optimization enabled', time: '2 hr ago' }
        ];
        
        const activityList = document.getElementById('activity-list');
        if (activityList) {
            activityList.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <span class="activity-icon">${activity.icon}</span>
                    <div class="activity-content">
                        <span class="activity-text">${activity.text}</span>
                        <span class="activity-time">${activity.time}</span>
                    </div>
                </div>
            `).join('');
        }
    };
    
    MissionControlDashboard.prototype.updateSessionsCard = function() {
        // Update active sessions display
        const sessionCount = document.getElementById('session-count');
        if (sessionCount) {
            sessionCount.textContent = '3';
        }
        
        // Sessions are already in HTML, could be dynamic in real implementation
    };
    
    MissionControlDashboard.prototype.updateModelUsageChart = function() {
        // Create model usage donut chart
        const canvas = document.getElementById('modelUsageChart');
        if (canvas && typeof Chart !== 'undefined') {
            try {
                const ctx = canvas.getContext('2d');
                
                if (this.charts.modelUsage) {
                    this.charts.modelUsage.destroy();
                }
                
                this.charts.modelUsage = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Local Models', 'Claude', 'GPT'],
                        datasets: [{
                            data: [75, 20, 5],
                            backgroundColor: ['#10b981', '#00d2ff', '#f59e0b'],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return context.label + ': ' + context.parsed + '%';
                                    }
                                }
                            }
                        },
                        cutout: '60%'
                    }
                });
            } catch (error) {
                console.warn('Model usage chart setup failed:', error.message);
            }
        }
    };
}