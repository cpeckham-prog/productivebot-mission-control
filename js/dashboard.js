class MissionControlDashboard {
    constructor() {
        this.snapshot = null;
    }

    async init() {
        this.bindRefresh();
        await this.loadSnapshot();
        this.render();
    }

    async loadSnapshot() {
        try {
            const response = await fetch('data/snapshot.json', { cache: 'no-store' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            this.snapshot = await response.json();
        } catch (error) {
            this.snapshot = {
                generatedAt: null,
                policy: { notes: 'Snapshot unavailable.' },
                error: String(error)
            };
        }
    }

    statusText(field) {
        if (!field) return 'unavailable';
        if (field.status && field.status !== 'ok') return field.status;
        if (field.value === null || field.value === undefined || field.value === '') return 'unavailable';
        return 'ok';
    }

    displayValue(field) {
        if (!field) return 'unavailable';
        if (field.value === null || field.value === undefined || field.value === '') return 'unavailable';
        if (Array.isArray(field.value)) return field.value.join(', ');
        if (typeof field.value === 'object') return JSON.stringify(field.value);
        return String(field.value);
    }

    render() {
        this.renderMeta();
        this.renderHero();
        this.renderProofCards();
        this.renderModels();
        this.renderOperatingLoop();
        this.renderSiteMonitor();
    }

    renderMeta() {
        const updated = document.getElementById('generated-at');
        const summary = document.getElementById('source-summary');
        if (updated) updated.textContent = this.snapshot.generatedAt || 'unavailable';
        if (summary) summary.textContent = this.snapshot.policy?.notes || 'Source-only snapshot.';
    }

    renderHero() {
        const title = document.getElementById('hero-title');
        const body = document.getElementById('hero-body');
        const activeWork = this.snapshot.operatingLoop?.activeWorkState;
        const site = this.snapshot.siteMonitor;
        if (title) title.textContent = `Lane state: ${this.displayValue(activeWork)}`;
        if (body) body.textContent = `Site monitor status: ${this.statusText(site)}. Heartbeat schedule: ${this.displayValue(this.snapshot.heartbeat?.schedule)}. Cron data remains ${this.snapshot.cron?.status || 'unavailable'}.`;
    }

    renderProofCards() {
        const container = document.getElementById('proof-cards');
        if (!container) return;
        const cards = [
            {
                label: 'Primary model',
                value: this.displayValue(this.snapshot.models?.primary),
                help: this.snapshot.models?.primary?.source || 'unavailable'
            },
            {
                label: 'Heartbeat model',
                value: this.displayValue(this.snapshot.models?.heartbeatModel),
                help: this.snapshot.models?.heartbeatModel?.source || 'unavailable'
            },
            {
                label: 'Lane state',
                value: this.displayValue(this.snapshot.operatingLoop?.activeWorkState),
                help: this.snapshot.operatingLoop?.activeWorkState?.source || 'unavailable'
            },
            {
                label: 'Site monitor',
                value: this.statusText(this.snapshot.siteMonitor),
                help: this.snapshot.siteMonitor?.freshness || 'unavailable'
            }
        ];
        container.innerHTML = cards.map(card => `
            <div class="proof-card">
                <div class="proof-value">${card.value}</div>
                <div class="proof-label">${card.label}</div>
                <div class="proof-help">${card.help}</div>
            </div>
        `).join('');
    }

    renderModels() {
        const container = document.getElementById('session-list');
        if (!container) return;
        const rows = [
            {
                name: 'Primary model',
                role: 'Main configured work model',
                model: this.displayValue(this.snapshot.models?.primary),
                source: this.snapshot.models?.primary?.source || 'unavailable',
                note: `Status: ${this.statusText(this.snapshot.models?.primary)}`
            },
            {
                name: 'Fallback models',
                role: 'Configured fallback path',
                model: this.displayValue(this.snapshot.models?.fallbacks),
                source: this.snapshot.models?.fallbacks?.source || 'unavailable',
                note: `Status: ${this.statusText(this.snapshot.models?.fallbacks)}`
            },
            {
                name: 'Heartbeat model',
                role: 'Scheduled routine-check model',
                model: this.displayValue(this.snapshot.models?.heartbeatModel),
                source: this.snapshot.models?.heartbeatModel?.source || 'unavailable',
                note: `Schedule: ${this.displayValue(this.snapshot.heartbeat?.schedule)}`
            }
        ];
        container.innerHTML = rows.map(item => `
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
        const items = [
            {
                title: 'ACTIVE_WORK state',
                status: this.statusText(this.snapshot.operatingLoop?.activeWorkState),
                detail: `Value: ${this.displayValue(this.snapshot.operatingLoop?.activeWorkState)}`
            },
            {
                title: 'HEARTBEAT document',
                status: this.statusText(this.snapshot.heartbeat?.docReadStatus),
                detail: `Path: ${this.displayValue(this.snapshot.heartbeat?.docPath)}`
            },
            {
                title: 'Cron snapshot',
                status: this.snapshot.cron?.status || 'unavailable',
                detail: 'Scheduler-backed cron export is not implemented in snapshot.json yet.'
            }
        ];
        container.innerHTML = items.map(item => `
            <div class="loop-row status-${item.status}">
                <div class="loop-header">
                    <span class="loop-title">${item.title}</span>
                    <span class="loop-badge">${item.status}</span>
                </div>
                <div class="loop-detail">${item.detail}</div>
            </div>
        `).join('');
    }

    renderSiteMonitor() {
        const container = document.getElementById('timeline-list');
        if (!container) return;
        const site = this.snapshot.siteMonitor;
        const value = site?.value || {};
        const items = [
            { time: site?.freshness || 'unavailable', title: 'Overall check', body: `overall_ok: ${String(value.overall_ok ?? 'unavailable')}` },
            { time: site?.freshness || 'unavailable', title: 'Redirect', body: `redirect_ok: ${String(value.redirect_ok ?? 'unavailable')}` },
            { time: site?.freshness || 'unavailable', title: 'Pages content', body: `pages_ok: ${String(value.pages_ok ?? 'unavailable')}` },
            { time: site?.freshness || 'unavailable', title: 'Repo reachability', body: `repo_ok: ${String(value.repo_ok ?? 'unavailable')}` }
        ];
        container.innerHTML = items.map(item => `
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
