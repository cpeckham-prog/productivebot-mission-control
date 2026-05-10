# LEGACY CLEANUP AUDIT
**Created:** 2026-04-23 13:05 CDT  
**Context:** Post-enhanced system deployment, recurring heartbeat errors, need comprehensive cleanup

## CRITICAL ISSUES (Causing Active Errors)

### ❌ Ollama Authentication Failures
**Status:** CAUSING HEARTBEAT ERRORS  
**Impact:** Every heartbeat fails Ollama auth → falls back to expensive GPT-5.4
**Error:** `No API key found for provider "ollama"`
**Fix Status:** In progress, gateway restarting to apply fix

### ❌ Version Mismatch
**Issue:** Config written by 2026.4.22, running 2026.4.21
**Impact:** Compatibility issues with new configuration
**Next Action:** Update OpenClaw to latest version

### ❌ Gateway Service Path Mismatch  
**Issue:** Old service entrypoint conflicts with current install
```
/Users/productivebot/.nvm/versions/node/v24.13.1/lib/node_modules/openclaw/dist/index.js
-> /opt/homebrew/lib/node_modules/openclaw/dist/index.js
```
**Impact:** Service management confusion
**Fix:** Update LaunchAgent or remove old service

## OUTDATED DOCUMENTATION & PROCESSES

### 📄 Cost Tracking System - PARTIALLY UPDATED
**File:** `memory/cost-tracking.md`
**Issues:**
- ✅ Updated model hierarchy 
- ❌ Still references old heartbeat cost monitoring patterns
- ❌ Baseline session data is stale (2026-03-17)

### 📄 Heartbeat Process - UPDATED BUT ERRORS REMAIN
**File:** `HEARTBEAT.md`
**Status:** Updated for new system, but implementation errors prevent benefits
**Active Problem:** Ollama auth failures mean $0 cost promise not realized

### 📄 Cron Jobs - OUTDATED MODEL ASSIGNMENTS
**File:** `~/.openclaw/cron/jobs.json`
**All 6 jobs:** Using expensive `openai-codex/gpt-5.4`
**Status:** All DISABLED (good - prevents cost bleeding)
**Opportunity:** $50-150/month additional savings waiting

### 📄 Active Obligations - CLEANUP NEEDED
**File:** `active-asks.md`
**Issue:** Contains old unresolved ask from 2026-04-21
**Impact:** Prevents proper heartbeat operation
**Fix:** Close or explicitly drop old job tracker work

## SESSION STATE ISSUES

### 🗂️ Orphan Transcripts & Missing Sessions
**Doctor Found:**
- 2/5 recent sessions missing transcripts
- 3 orphan transcript files no longer referenced
- 1 active session lock file (age: 19s, not stale)

**Impact:** Session history inconsistencies
**Fix:** Run cleanup commands from doctor output

### 🗂️ Session Management
**Current State:** Multiple background exec sessions possibly abandoned
**Need:** Process audit and cleanup

## AUTH & SECURITY

### 🔐 Gmail OAuth Expired
**Error:** `oauth2: "invalid_grant" "Bad Request"`
**Impact:** Email monitoring down
**Priority:** Medium (email handled via other paths)

### 🔐 Channel Security Warnings
**Status:** None detected (good)
**Note:** Basic security audit passed

## OUTDATED/CONFLICTING SERVICES

### 🔧 Legacy OpenClaw Services
**Found:** 2 old ProductiveBot LaunchAgents still running
- `ai.productivebot.branding-watcher`
- `ai.productivebot.ops-health-notify`

**Action:** Audit and possibly deprecate

### 🔧 Gateway Service Duplication
**Issue:** Multiple gateway-like services detected
**Recommendation:** Single gateway per machine
**Fix:** Remove duplicates, isolate ports if multiple needed

## SKILLS & CAPABILITIES

### 📦 Skills Status
- Eligible: 15
- Missing requirements: 43  
- Blocked by allowlist: 0

**Note:** 43 missing requirements suggests environment/dependency issues

## IMMEDIATE ACTION PLAN

### Phase 1: Fix Active Errors (NOW)
1. ✅ Restart gateway (in progress) to apply Ollama auth fix
2. ⏳ Verify heartbeat errors resolved
3. ⏳ Update OpenClaw to latest version if errors persist

### Phase 2: Clean State & Docs (TODAY)
1. Update stale cost tracking baseline
2. Close/drop old active ask in `active-asks.md`
3. Clean orphan transcript files
4. Audit and optimize cron job model assignments

### Phase 3: Service Consolidation (THIS WEEK)  
1. Remove conflicting LaunchAgents
2. Consolidate gateway services
3. Fix Gmail OAuth if email monitoring needed
4. Address missing skill requirements

### Phase 4: Optimize Costs (ONGOING)
1. Re-enable cron jobs with local models
2. Monitor actual cost savings vs projections
3. Track local vs cloud model usage patterns

## COST IMPACT SUMMARY

**Current State:**
- Heartbeats failing → using expensive fallbacks
- Cron jobs disabled → no costs but no automation
- Projected $65-165/month savings NOT realized due to auth errors

**After Full Cleanup:**
- $15/month heartbeat savings (when auth fixed)
- $50-150/month additional cron optimization potential  
- Improved reliability and performance

## VERIFICATION CHECKPOINTS

- [ ] Zero heartbeat auth errors in logs
- [ ] Local model response times <1 second
- [ ] Cost tracking shows actual $0 heartbeat costs
- [ ] All cron jobs optimized for appropriate models
- [ ] No orphan processes or conflicting services
- [ ] Documentation reflects actual current system state

**This audit reveals that while the enhanced system architecture is sound, implementation gaps and legacy conflicts are preventing us from realizing the promised benefits.**