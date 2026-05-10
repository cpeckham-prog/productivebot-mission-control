# ENFORCEMENT.md - Mandatory Checks for ALL Outputs

## CRITICAL REQUIREMENT

**BEFORE ANY RESPONSE**: Run mandatory enforcement check on all content.

```bash
python3 /Users/productivebot/.openclaw/workspace/scripts/mandatory-check.py "<full_response_content>"
```

## What Gets Checked

### Universal Content Enforcement
- **Fake data patterns**: Session counts, resource percentages, costs without sources
- **Completion claims**: Any claims of success/completion require evidence verification  
- **Misleading metrics**: Percentages, grades, scores without clear data sources
- **Placeholder data**: Any example/demo/fake data markers

### Behavioral Assessment
- Promise lifecycle tracking
- Cross-session consistency validation  
- Behavioral reliability score maintenance
- Open loop and commitment tracking
- Started-work tracking via `/Users/productivebot/.openclaw/workspace/started-work.md`
- Quiet-output blocking when started work is still live

## Enforcement Levels

### Exit Code 3 (CRITICAL - BLOCK)
- Content contains fake data
- Misleading metrics without sources
- Placeholder data presented as real
- **Response MUST NOT be delivered**

### Exit Code 2 (WARNING - REVIEW)  
- Completion claims without evidence
- Unsourced metrics (allowed but flagged)
- High-risk patterns detected

### Exit Code 0 (APPROVED)
- All checks passed
- Content verified as accurate
- Response cleared for delivery

## Integration Points

This enforcement system MUST be called:
- Before any assistant response delivery
- Before any dashboard data presentation  
- Before any completion claims
- Before any metric reporting
- Before any status updates
- Before any `HEARTBEAT_OK`, `NO_REPLY`, or similar quiet output

## Violation Examples

**BLOCKED (Exit 3):**
- "3 sessions running" (without session_status verification)
- "Memory usage 68%" (without system data source)
- "Tool usage: exec(147)" (without actual tool logs)

**FLAGGED (Exit 2):**  
- "Dashboard completed" (requires evidence verification)
- "Fixed the issue" (requires proof of fix)

**APPROVED (Exit 0):**
- "session_status shows 2 active sessions" (with tool output)  
- "System uptime: 11 days" (from uptime command)

## Purpose

Prevents ALL forms of:
- Data fabrication
- Completion theater  
- Misleading presentations
- Unsourced claims

**NO EXCEPTIONS - ALL CONTENT MUST PASS ENFORCEMENT BEFORE DELIVERY**