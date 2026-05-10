# HEARTBEAT.md

Purpose: use heartbeat to create real forward motion, not routine monitoring theater.

## What heartbeat is for now

1. **Persist session context to durable memory** (mandatory, every heartbeat — see below)
2. Advance the current active project if one clearly exists
3. Surface a real blocker or decision if work cannot move forward
4. Stay quiet when there is nothing genuinely worth interrupting for

## Session memory persistence (MANDATORY — runs every heartbeat)

Session resets destroy all in-context knowledge. The ONLY defense is durable files.

**Every heartbeat**, before any other work:
1. Check if `memory/YYYY-MM-DD.md` (today) exists
2. If it doesn't exist, create it with a summary of the current session's key context
3. If it does exist, check whether significant new context has accumulated since last write — if so, append/update it

**What must be captured:**
- Active work lane, correct master files, and current iteration state
- Key decisions made by Chris in this session
- Corrected briefs or changed understanding
- **Any new user direction, redesign pivot, or brief change — even if awaiting a response**
- **Unanswered questions posed to Chris (so the next session knows what's pending)**
- File paths that matter
- Anything that would be catastrophic to forget on session reset

**"Memory is current" is NEVER true if a new user message changed the direction, brief, or scope since the last write.** Do not judge currency by recency of write — judge it by whether every significant user message since the last write has been captured.

**This is not optional.** A heartbeat that does real work but doesn't persist context is a failed heartbeat.
**This is not a daily task.** It runs every heartbeat cycle to minimize context loss window.

Failure mode this prevents: session resets causing total amnesia, leading to re-planning already-completed work, contradicting Chris, or losing hours of established context.

## Current workstream priority

If there is an active project or promised next step, heartbeat should treat that as the default work.

Current default priority:
- none by default unless ACTIVE_WORK.md shows a real active lane with a current next proof

Source of truth:
- ACTIVE_WORK.md is the live lane snapshot
- if ACTIVE_WORK.md says lanes are blocked/non-active, heartbeat should not revive old worklane assumptions on its own

## Working-hours rule

During work hours, if there is a live project with a clear next step:
- do the next meaningful chunk of work
- or send Chris a concise blocker / decision update if truly blocked

Do not treat checking as progress.
Do not end a work-hours heartbeat with only passive review unless a real blocker stopped movement.

## Advanced Behavioral Reliability System

**CRITICAL:** Before any heartbeat quiet reply, run comprehensive behavioral assessment:
```
python3 /Users/productivebot/.openclaw/workspace/scripts/behavioral-enforcement.py quick
```

The behavioral assessment automatically:
- ✅ Checks active asks/open loops for unresolved obligations
- ✅ Analyzes promise lifecycle and aging commitments  
- ✅ Validates cross-session consistency
- ✅ Calculates behavioral reliability score (0.0-1.0)
- ✅ Determines dynamic enforcement level

**Enforcement Exit Codes:**
- **Exit code 0 (Normal)**: Standard operations, behavioral score ≥0.85
- **Exit code 1 (Watchful)**: Enhanced monitoring, score 0.7-0.84
- **Exit code 2 (Elevated)**: Increased scrutiny, score 0.5-0.69
- **Exit code 3 (Strict)**: BLOCK HEARTBEAT_OK, score <0.5

**Dynamic Enforcement Levels:**
- **Normal**: Basic reliability practices sufficient
- **Watchful**: Enhanced verification and promise tracking active
- **Elevated**: Daily assessments required, stronger evidence standards
- **Strict**: Complete blocking until commitments explicitly resolved

**For completion claims:** Integrated dual-model + promise verification
```
# Verify completion claims with evidence
python3 /Users/productivebot/.openclaw/workspace/scripts/verify-claim.py "<completion claim>"

# Update promise tracking for completed commitments  
python3 /Users/productivebot/.openclaw/workspace/scripts/promise-tracker.py
```

**Advanced Evidence Requirements:**
- File modifications with recent timestamps (dual-model verification)
- Promise lifecycle progression tracking (aging alert compliance)
- Cross-session consistency validation (no conflicting commitments)
- Behavioral reliability score maintenance (≥0.85 for normal operations)

**Comprehensive Anti-Patterns Prevented:**
- "Completion theater" without evidence (dual-model verification)
- Promise drift across sessions (cross-session tracking)
- Aging commitment neglect (automatic escalation system)
- Behavioral reliability degradation (dynamic enforcement levels)
- False work status claims (evidence + promise context required)

## Background checks kept alive

Keep only these lightweight checks:

### API cost / model usage
- Check only if unusually high cloud API usage is suspected
- Heartbeat runs on the local model; focus on tracking unexpected Claude/GPT cost spikes
- Log notable model-routing anomalies or cost spikes in memory/YYYY-MM-DD.md

### Lane sanity
- Use ACTIVE_WORK.md as the source of truth for whether any lane is actually active
- Do not recreate old board/drift-check behavior inside heartbeat
- If no lane has a current next proof, heartbeat should usually stay quiet

### Note on email/calendar
- Email and calendar checks are not part of heartbeat
- Disabled/stale legacy jobs should stay disabled unless intentionally reintroduced

## Quiet rules
- Quiet hours: 12am-7am CT unless something is truly urgent
- If nothing changed and there is no meaningful work or alert, reply `HEARTBEAT_OK`
- Do not manufacture updates
- Do not repeat stale status

## Explicit anti-patterns
- no generic refocus language without action
- no routine "check/check/check" loops as a substitute for progress
- no duplicate inbox monitoring, since email is handled elsewhere
- no fake accountability theater

## Logging
- Log notable findings in `memory/YYYY-MM-DD.md`
- Use `memory/heartbeat-state.json` only if needed for lightweight dedupe of calendar or cost checks
