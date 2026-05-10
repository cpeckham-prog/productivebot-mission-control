# Full Rebuild Audit — 2026-04-25

## Scope
Comprehensive first-pass audit of the current workspace-operating layer, enforcement stack, recurring loops, dashboard pipeline, and supporting scripts after explicit authorization to perform a destructive rebuild.

## Read-only / protected constraints
Do not overwrite/edit bootstrap/reference files during rebuild memory flushes:
- `MEMORY.md`
- `AGENTS.md`
- `SOUL.md`
- `TOOLS.md`
- `DREAMS.md` (if present)

## Core findings

### 1) The current system is overloaded with meta-enforcement but under-enforced on actual failure modes
The current stack contains many overlapping reliability/enforcement scripts:
- `mandatory-check.py`
- `universal-enforcement.py`
- `behavioral-enforcement.py`
- `reliability-checkpoint.py`
- `verify-claim.py`
- `verify-completion.py`
- `promise-tracker.py`
- `cross-session-tracker.py`
- multiple trend/checkpoint/logging scripts

Problem:
- too many layers are advisory, heuristic, or theater-heavy
- they catch some fake-data and completion-language cases
- they do **not** reliably block status inflation, momentum inflation, or inspection/planning being framed as implementation
- they produce logs/scores/grades but not robust output gating on the user’s actual failure mode

### 2) Heartbeat/operating docs are simpler than before, but still sit on top of noisy legacy machinery
Current operating docs (`ACTIVE_WORK.md`, `OPERATING_LOOP.md`, `HEARTBEAT.md`) push toward quieter behavior and fewer loops.

But the script surface still contains a large amount of older enforcement/trend/analytics machinery that can reintroduce noise and complexity:
- `usage-analytics.py`
- `cost-validation.py`
- `reliability-trends.py`
- `system-monitor.py`
- `system-optimization.py`
- others

Problem:
- documentation says “fewer loops, clearer truth”
- implementation surface still reflects a sprawling instrumentation-heavy system

### 3) Verification scripts are brittle, partial, and in places misleading
Examples:
- `verify-completion.py` uses a fixed test claim rather than validating the current real claim in context
- `universal-enforcement.py` relies heavily on regex patterns and can both miss subtle inflation and generate false positives
- `reliability-checkpoint.py` only weakly scores evidence and defaults to neutral when no files are named
- `behavioral-enforcement.py` aggregates outputs from other brittle scripts and turns them into grades/scores that may look stronger than the underlying signal

Problem:
- current verification gives a sense of rigor without enough guarantee
- too much of it is pattern-based rather than evidence-bound to the actual live task/output

### 4) Dashboard pipeline is not trustworthy by default
`export-dashboard-data.py` contains hardcoded defaults and fallback numbers such as expected savings, health grades, response times, uptime, local model usage, and status fields.

Problem:
- even when later overridden by real files, the default shape is seeded with values that can become misleading
- this conflicts directly with the user’s hard no-fake-data requirement

### 5) Deployment/site monitoring exists, but that success masked the real product failure
There is a site monitor state file and a monitor script checking:
- custom-domain redirect
- GitHub Pages content
- expected content
- repo remote reachability

Problem:
- this is real and useful
- but it became a side-success while the primary dashboard/product request remained undelivered
- the system did not force prioritization of the user-visible requested deliverable

### 6) Workspace contains a mix of current operating files, legacy system docs, and unrelated personal/project artifacts
The workspace has:
- current operating/reliability docs
- legacy/experimental system docs
- dashboard repo
- chat export dump
- resumes, PDFs, spreadsheets, unrelated documents

Problem:
- rebuild work must avoid destructive changes to unrelated user data
- “wipe everything” cannot safely mean indiscriminate deletion of the whole workspace
- the rebuild target should be the bot operating layer, scripts, dashboard repo, cron/job logic, and related bot artifacts — not arbitrary personal files

## Root-cause summary
1. Too many meta-systems
2. Too little hard gating on the real failure mode
3. Weak separation between:
   - real work execution
   - monitoring
   - reporting
   - marketing/status language
4. Dashboard/data pipeline allowed fabricated defaults
5. System did not force completion of the user’s primary requested deliverable before expanding into adjacent process work

## Rebuild direction

### Replace with a smaller core
Target replacement core:
- one strict response gate
- one obligation tracker
- one task-state / active-work source of truth
- one deploy/site monitor
- one dashboard snapshot exporter with **no invented defaults**
- one deploy script

### Eliminate or retire candidates
Strong candidates for deletion/retirement/replacement:
- `verify-completion.py`
- `reliability-trends.py`
- `usage-analytics.py`
- `system-optimization.py`
- `cost-validation.py`
- `dual-model-verifier.py`
- `auto-integration-wrapper.js`
- `response-validator.js`
- other score/trend/grade oriented scripts that create theater instead of hard enforcement

### Rebuild principles
- no fake data, ever
- no status claims beyond evidence
- no “done” language without artifact verification
- no default metrics in dashboard export
- unavailable data must render as unavailable/degraded
- fewer files, fewer loops, fewer abstractions
- task completion outranks monitoring

## Immediate next implementation work
1. Build a replacement strict response gate that blocks status inflation better than regex-only completion checks.
2. Replace dashboard export with source-only snapshot generation.
3. Simplify or rewrite operating docs around one source of truth.
4. Retire nonessential legacy enforcement/analytics scripts.
5. Rebuild the dashboard from sourced snapshot JSON only.
