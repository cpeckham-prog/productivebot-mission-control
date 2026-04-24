// Chart Fix - Ensure charts render after Chart.js loads
function initializeChartsWhenReady() {
    // Wait for Chart.js to load
    if (typeof Chart === 'undefined') {
        console.log('⏳ Waiting for Chart.js to load...');
        setTimeout(initializeChartsWhenReady, 100);
        return;
    }
    
    console.log('✅ Chart.js loaded, initializing charts...');
    
    // Cost Analysis Chart
    const costCtx = document.getElementById('cost-chart');
    if (costCtx) {
        try {
            new Chart(costCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Claude Sonnet 4', 'GPT-5.4'],
                    datasets: [{
                        data: [0.300881, 0.559591], // Real costs from sessions_list
                        backgroundColor: ['#00d4ff', '#8b5cf6'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { color: '#b3b3b3', font: { size: 11 } }
                        }
                    },
                    cutout: '60%'
                }
            });
            console.log('✅ Cost chart initialized');
        } catch (error) {
            console.error('❌ Cost chart failed:', error);
        }
    }
    
    // Model Usage Chart
    const modelsCtx = document.getElementById('models-chart');
    if (modelsCtx) {
        try {
            // Real token percentages: 108939 Claude, 55269 GPT = 164208 total
            const claudePercentage = (108939 / 164208) * 100; // ~66.3%
            const gptPercentage = (55269 / 164208) * 100;     // ~33.7%
            
            new Chart(modelsCtx, {
                type: 'bar',
                data: {
                    labels: ['Claude Sonnet 4', 'GPT-5.4', 'Local (Offline)'],
                    datasets: [{
                        data: [claudePercentage, gptPercentage, 0],
                        backgroundColor: ['#00d4ff', '#8b5cf6', '#00ff88'],
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { color: '#666666' },
                            grid: { color: '#333333' }
                        },
                        x: {
                            ticks: { color: '#b3b3b3' },
                            grid: { display: false }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
            console.log('✅ Models chart initialized');
        } catch (error) {
            console.error('❌ Models chart failed:', error);
        }
    }
    
    // Cache Performance Chart
    const cacheCtx = document.getElementById('cache-chart');
    if (cacheCtx) {
        try {
            new Chart(cacheCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Cache Hits', 'Cache Misses'],
                    datasets: [{
                        data: [98, 2], // From session_status: 98% hit rate
                        backgroundColor: ['#00ff88', '#ff4757'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { color: '#b3b3b3', font: { size: 11 } }
                        }
                    },
                    cutout: '70%'
                }
            });
            console.log('✅ Cache chart initialized');
        } catch (error) {
            console.error('❌ Cache chart failed:', error);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeChartsWhenReady);

// Fallback initialization after window load
window.addEventListener('load', () => {
    setTimeout(initializeChartsWhenReady, 500);
});