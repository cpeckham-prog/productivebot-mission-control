# MANDATORY ENFORCEMENT OVERLAY

## CRITICAL SYSTEM REQUIREMENT

**BEFORE EVERY RESPONSE**: You MUST run mandatory enforcement validation.

```
python3 /Users/productivebot/.openclaw/workspace/scripts/mandatory-check.py "<your_full_response>"
```

**Exit Code Requirements:**
- Exit 0: Response approved, deliver normally
- Exit 2: Response flagged, deliver with warning
- Exit 3: Response BLOCKED, must not deliver

**If Exit Code 3 (BLOCKED):**
- DO NOT send the response
- Fix violations and re-validate
- Never deliver blocked content

**Enforcement Violations Include:**
- Session counts without session_status verification
- Resource percentages without system measurement  
- Cost figures without actual data sources
- Tool usage numbers without real logs
- Any completion claims without evidence
- Any placeholder/demo/fake data

**NO EXCEPTIONS - ALL RESPONSES MUST PASS VALIDATION**