# Auto-Update Workflow

Status: approved / shipped
Source of truth: approved Slack DM text from Chris + Shelia in the main DM thread on 2026-04-11
Owner: Shelia
Effective for: next auto-update cycle unless superseded

## Objective
Keep OpenClaw and closely related operating components current with low noise, low risk, and explicit escalation when an update is meaningful enough that Chris should decide.

## Scope
This workflow applies to:
- OpenClaw application/runtime updates
- directly related control-layer/workspace updates that are low-risk and internal
- routine maintenance checks tied to reliability of the current operating system

It does not automatically apply to:
- credential/auth changes
- Slack/Google account reauth
- destructive cleanup
- broad config rewrites
- anything externally consequential
- anything that changes routing, permissions, approvals, or security posture in a meaningful way without review

## Operating policy

### 1. Check cadence
- Check for relevant updates on a routine cadence.
- Prefer lightweight checks over noisy repeated full upgrade attempts.
- Batch status into normal operating review/checkpoint flows unless something is urgent or materially useful.

### 2. Classify every update before acting
Every discovered update must be classified into one of three buckets:

#### Bucket A — Safe routine update
Low-risk, internal, reversible/recoverable, and unlikely to change behavior in a meaningful way.

#### Bucket B — Review-before-apply update
Could materially affect behavior, workflows, approvals, reliability, integrations, or expected outputs.

#### Bucket C — Blocked / unsafe-to-auto-apply
Cannot be applied safely without credentials, environment validation, compatibility confirmation, backup/rollback confidence, or explicit Chris approval.

### 3. Auto-apply rule
Auto-apply only if all of the following are true:
- low-risk
- internal
- reversible or recoverable
- no expected change to external behavior/policy
- no approval/security/routing impact
- no credential/auth dependency
- no known active incident suggesting the update path itself is unstable

If all are true:
- apply the update
- run a focused verification
- log the result
- report only if the result is meaningful

### 4. Mandatory escalation rule
Do not auto-apply if any of the following are true:
- the change affects approvals, auth, routing, cron behavior, Slack delivery, Gmail integration, browser automation, or safety boundaries
- the update requires migration, re-login, reauth, or manual environment repair
- the update could break an active deliverable or blocker-clearing path
- the impact is unclear from available evidence
- rollback confidence is weak
- the update touches multiple coupled components at once

In those cases:
- summarize the update
- state why it is not low-risk
- give a recommendation
- ask Chris only for the smallest real decision needed

### 5. Verification standard after any applied update
After any update, verify at the narrowest level that proves the system still works.

Verification should include only the components actually affected, for example:
- app/version check
- command/path sanity check
- one targeted cron/control-loop check
- one targeted messaging/reporting check if messaging behavior was in scope
- one targeted workflow check if the updated component touches that workflow

Do not declare success based only on install completion.

### 6. Reporting standard
Use three reporting levels:

#### No report
For routine safe checks where nothing changed.

#### Brief report
For low-risk update successfully applied and verified.
Format:
- what changed
- verification run
- whether anything needs watching

#### Decision report
For meaningful or unsafe updates.
Format:
- update available
- why it is meaningful/risky
- recommended action
- smallest decision needed from Chris

### 7. Failure handling
If an update attempt fails:
- do not keep retrying blindly
- capture exact failure point
- revert or stabilize if needed
- classify the result honestly:
  - resolved
  - blocked
  - decision needed
- if the failure affects active workflows, surface that immediately

### 8. Rollback / containment rule
If behavior degrades after an update:
- stop further update actions
- revert if safe and available
- otherwise contain impact
- mark the issue explicitly as blocked
- report the exact affected workflow, exact symptom, and exact smallest next step

### 9. Relationship to active work
Update work is subordinate to active deliverables unless:
- the update directly improves reliability of the active lane, or
- the update itself is the active lane by explicit prioritization

So:
- do not let update work sprawl into a meta-project
- do not let maintenance displace deliverables that can actually ship
- do use low-risk updates opportunistically when they are genuinely routine

### 10. Special exclusions
These always require explicit review before action:
- OAuth/client credential changes
- Slack auth/routing/policy changes
- Google auth/watcher/triage auth changes
- cron job behavior rewrites
- anything that changes who gets messaged, what gets auto-sent, or what gets auto-approved
- anything destructive

## Default decision rule
- Auto-do: low-risk internal routine update with focused verification
- Ask Chris: meaningful, ambiguous, risky, externally consequential, auth-related, or policy-affecting update
- Block: anything that cannot be safely validated or recovered from with current access

## Practical implementation standard
When an update is found, the next action should always collapse to one of these:
- apply + verify
- recommend + ask
- block + explain

Not:
- vague monitoring
- vague looking into it
- repeated status chatter without a decision or action
