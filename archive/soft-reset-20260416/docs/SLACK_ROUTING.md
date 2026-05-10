# Slack Routing & Channel Policy

Last updated: 2026-03-20
Owner: Chris + Shelia

## Purpose

Keep the main Slack DM focused on active work while routing updates, alerts, and topic-specific activity into dedicated Slack channels.

## Primary Operating Model

### Main DM (Chris <-> Shelia)
Use this for:
- active back-and-forth work
- drafting and editing
- strategic discussion
- decisions and approvals
- ad hoc troubleshooting requests
- escalation of urgent issues from other channels

Do **not** use this DM for routine alert noise, inbox clutter, or repetitive status pings unless the item is urgent or needs a decision.

## Dedicated Channels

### #pb-job-search
Use for:
- Ladders updates
- LinkedIn job search updates
- recruiter activity
- application progress
- job leads
- networking targets
- role-match summaries

Post here when:
- new good-fit roles are found
- an application is submitted
- a recruiter reaches out about a role
- there is a meaningful update in job-search workflow

### #pb-important-email
Use for:
- recruiter replies
- interview requests
- urgent inbox items
- high-value actionable emails
- time-sensitive external communications

Escalate to main DM if:
- a response is needed soon
- the item affects scheduling or priorities
- Chris must make a decision

### #pb-email-low-priority
Use for:
- newsletters
- marketing emails
- vendor/promotional emails
- low-priority inbox triage
- grouped summaries of junk/low-value email

Guideline:
- prefer batched summaries over one-message-per-email

### #pb-timberland-band
Use for:
- Timberland High School band work
- craft fair site/project work
- tasks, drafts, links, and updates related to band projects

### #pb-daily-brief
Use for:
- morning or daily summaries
- weather
- calendar heads-up
- notable updates across channels/systems
- concise digest-style reporting

Guideline:
- one clean digest is better than scattered micro-updates

### #pb-ops-status
Use for:
- OpenClaw/ProductiveBot system health
- gateway issues
- break/fix updates
- configuration changes
- restart/repair checkpoints
- verification results
- incident timelines

Required behavior for Shelia:
- acknowledge longer-running work quickly
- post before making meaningful system changes
- post result after each major step
- include next step or rollback state
- do not go silent during active troubleshooting

Suggested update format:
1. What I’m changing
2. Why
3. Result
4. Next step

### #pb-reading-queue
Use for:
- links to read later
- articles
- company pages
- references
- materials worth saving without interrupting work

## Escalation Rules

Surface an item into the main DM when:
- it is urgent
- it needs approval
- it changes priorities
- it is blocked on Chris
- there is a risk of service disruption
- there is ambiguity requiring a decision

Otherwise, prefer the topic channel.

## Messaging Style Rules

- Fewer, better updates
- Batch low-priority items when possible
- Use channels for categorization, not spam
- Keep the main DM high-signal
- For Slack specifically: if work may take more than a moment, send a quick acknowledgment first, then follow up with checkpoints

## Safe Break/Fix Workflow

For production-ish troubleshooting on Chris’s systems:

1. State the plan first
2. Make one reversible change at a time
3. Verify after each step
4. Post results in #pb-ops-status
5. Escalate to main DM before risky changes
6. Avoid changing gateway exposure/bind/service plumbing without a rollback path
7. Prefer loopback + safe proxy/tunnel patterns over direct remote exposure
8. If repair becomes messy or uncertain, stop and ask

## Pending Channel Creation

Planned channels:
- #pb-job-search
- #pb-important-email
- #pb-email-low-priority
- #pb-timberland-band
- #pb-daily-brief
- #pb-ops-status
- #pb-reading-queue

## Future Extensions

Possible future channels if volume warrants:
- #pb-finance-admin
- #pb-household
- #pb-ai-lab
- #pb-follow-ups
