# Lean Email Operating Model v1

Date: 2026-05-03
Status: proposed v1

## Goal
Use the Superhuman integration to make Shelia meaningfully assistant-like around email without creating a second inbox, extra workflow overhead, or noisy interruptions.

## Core principle
Email stays in Superhuman.
Shelia does not become a parallel inbox UI.
Shelia adds value through lightweight review, drafting help, and selective escalation.

## v1 scope

### 1) Scheduled inbox review
- Frequency: 2 times per weekday
- Suggested times: 10:30 AM CT and 3:30 PM CT
- Weekend: off by default
- Review target: Important / inbox-level triage only, not every split unless later expanded

### 2) Output format
Each review produces only one of these outcomes:
- **No message** if nothing is worth surfacing
- **Short digest** with 1-5 items that actually matter
- **Action prompt** when a reply/draft/decision is needed

### 3) What gets surfaced
Only emails that match one or more of these:
- likely needs Chris reply
- time-sensitive
- from a high-value person (recruiter, exec, key work contact, personal priority)
- operationally important
- ambiguous enough that draft help would save time

### 4) What does not get surfaced
- newsletters
- low-signal FYIs
- routine marketing mail
- threads with no likely action
- things already handled

### 5) Default actions Shelia can take without asking
Read-only by default:
- check threads
- summarize important emails
- identify likely replies needed
- draft reply suggestions
- group similar items into one digest

### 6) Actions that still require Chris
- sending email
- archiving/mutating mailbox state as a default workflow
- unsubscribing/blocking/trashing in bulk
- any aggressive auto-triage behavior

## Delivery model

### Default surface
- non-urgent: concise summary in the appropriate update surface
- urgent / decision / reply-needed-now: direct message to Chris

For now, keep this as a manual assistant loop first, not a high-frequency automation.

## Digest template

Subject line equivalent: **Email check: X items worth attention**

Per item:
- who it’s from
- why it matters
- what I recommend
- optional drafted reply offer

Example format:
- **Jaime Nunelee** — recruiter follow-up, likely worth replying today
  - Why it matters: active search contact and timing-sensitive
  - Recommendation: send short positive reply today
  - I can draft: yes

## Operating rules
- Prefer silence over noise
- Batch, don’t drip
- Only escalate when there is a clear reason
- Draft before send
- Keep the human in Superhuman, not in a second system

## Explicit non-goals for v1
- no always-on inbox watcher
- no per-email notifications
- no full autonomous triage system
- no extra labels/folders/process layers unless they prove necessary later
- no requirement for Chris to manage a new dashboard

## Success criteria
v1 is working if:
- Chris gets fewer interruptions than expected
- surfaced emails are usually worth seeing
- reply drafting saves time
- no feeling of “now I have two inboxes”

## Recommended next step
Run this as a lightweight pilot for 1 week with:
- 2 weekday checks
- manual summaries only
- draft-on-request or draft-when-obvious

Then review:
- Was it useful?
- Was it too noisy?
- Did anything feel duplicative?
- Should cadence be once daily, twice daily, or event-triggered only?
