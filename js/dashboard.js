class MissionControlDashboard {
    constructor() {
        this.data = {
            generatedAt: '2026-04-24 15:43 CDT',
            sourceSummary: 'Manual snapshot from OpenClaw session/config review on April 24, 2026',
            sessions: [
                {
                    name: 'Main session',
                    model: 'anthropic/claude-sonnet-4-20250514',
                    role: 'Main work',
                    source: 'OpenClaw config / session review',
                    note: 'Primary conversational model after hybrid cleanup.'
                },
                {
                    name: 'Heartbeat / routine checks',
                    model: 'ollama/llama3.2:3b',
                    role: 'Routine checks',
                    source: 'agents.defaults.heartbeat',
                    note: 'Local model reserved for heartbeat and lightweight validation.'
                },
                {
                    name: 'Fallback path',
                    model: 'ollama → claude → gpt-5.4',
                    role: 'Resilience path',
                    source: 'OpenClaw config',
                    note: 'Hybrid strategy: quality-first main work, cost-aware routine tasks.'
                }
            ],
            operatingLoop: [
                {
                    title: 'Heartbeat',
                    status: 'active',
                    detail: 'Quiet by default. Uses ACTIVE_WORK.md as source of truth.'
                },
                {
                    title: 'Daily Operating Review',
                    status: 'active',
                    detail: 'Only remaining recurring cron accountability loop.'
                },
                {
                    title: 'Legacy drift / parking / weekly / email-job scans',
                    status: 'retired',
                    detail: 'Removed from live cron surface during cleanup on April 24.'
                }
            ],
            proofCards: [
                {
                    label: 'Cron jobs still active',
                    value: '1',
                    help: 'Only Daily Operating Review remains in cron after cleanup.'
                },
                {
                    label: 'Primary work model',
                    value: 'Claude',
                    help: 'Main work prioritizes quality over aggressive cost routing.'
                },
                {
                    label: 'Routine check model',
                    value: 'Local',
                    help: 'Heartbeat and lightweight checks stay on Ollama.'
                },
                {
                    label: 'Legacy loops retired',
                    value: '5',
                    help: 'Hourly drift, parking lot, weekly review, email triage, and job-search scan were removed.'
                }
            ],
            timeline: [
                {
                    time: 'Today',
                    title: 'Operating loop simplified',
                    body: 'Reduced the live recurring system to heartbeat plus daily operating review.'
                },
                {
                    time: 'Today',
                    title: 'Hybrid model strategy adopted',
                    body: 'Main work stays on Claude; routine checks stay on local Ollama.'
                },
                {
                    time: 'Today',
                    title: 'Legacy cron and scripts retired',
                    body: 'Old drift-check, parking-lot, weekly review, email/job-search cron paths were removed or archived.'
                }
            ]
        };
    }

    init() {
        this.renderMeta();
        this.renderProofCards();
        this.renderSessions();
        this.renderOperatingLoop();
        this.renderTimeline();
        this.bindRefresh();
    }

    renderMeta() {
        const updated = document.getElementById('generated-at');
        const summary = document.getElementById('source-summary');
        if (updated && !updated.textContent.trim()) updated.textContent = this.data.generatedAt;
        if (summary && !summary.textContent.trim()) summary.textContent = this.data.sourceSummary;
    }

    renderProofCards() {
        const container = document.getElementById('proof-cards');
        if (!container) return;
        container.innerHTML = this.data.proofCards.map(card => `
            <div class="proof-card">
                <div class="proof-value">${card.value}</div>
                <div class="proof-label">${card.label}</div>
                <div class="proof-help">${card.help}</div>
            </div>
        `).join('');
    }

    renderSessions() {
        const container = document.getElementById('session-list');
        if (!container) return;
        container.innerHTML = this.data.sessions.map(item => `
            <div class="info-row">
                <div>
                    <div class="row-title">${item.name}</div>
                    <div class="row-subtitle">${item.role}</div>
                </div>
                <div class="row-right">
                    <div class="row-model">${item.model}</div>
                    <div class="row-source">${item.source}</div>
                </div>
                <div class="row-note">${item.note}</div>
            </div>
        `).join('');
    }

    renderOperatingLoop() {
        const container = document.getElementById('loop-list');
        if (!container) return;
        container.innerHTML = this.data.operatingLoop.map(item => `
            <div class="loop-row status-${item.status}">
                <div class="loop-header">
                    <span class="loop-title">${item.title}</span>
                    <span class="loop-badge">${item.status}</span>
                </div>
                <div class="loop-detail">${item.detail}</div>
            </div>
        `).join('');
    }

    renderTimeline() {
        const container = document.getElementById('timeline-list');
        if (!container) return;
        container.innerHTML = this.data.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-body">${item.body}</div>
                </div>
            </div>
        `).join('');
    }

    bindRefresh() {
        const btn = document.getElementById('refresh-btn');
        if (!btn) return;
        btn.addEventListener('click', () => window.location.reload());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new MissionControlDashboard();
    dashboard.init();
});
