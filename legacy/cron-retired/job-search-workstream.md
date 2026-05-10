# Job Search Workstream

Purpose: bounded standing lane for Chris's fractional and permanent opportunity review.

## Scope

Fractional:
- Catalant
- Business Talent Group

Permanent:
- LinkedIn Revenue
- LinkedIn Operations
- Ladders

Stay locked to these five sources unless Chris explicitly changes scope.

## Durable surfaces

- Google Sheet: `Job Search Opportunity Tracker`
- This file, for lane definition only

## Operational state

Chosen state: explicitly non-triggered fallback lane.

Recurring triggers are not currently live.
Do not pretend they exist.

Reason:
A clean, proven, low-maintenance trigger path for logged-in browser-dependent review is not yet verified well enough to count as trustworthy automation.

## Fallback operating model

This lane runs by explicit activation from Chris or by a deliberate manual execution pass in the main session.

Until a trigger path is proven cleanly, this is the real operating mode:
- no recurring trigger claims
- no fake scheduled coverage
- real review only when actually run

## Intended cadence

These remain cadence targets, not live automation:
- Fractional target: daily at 9:00 AM CT
- Permanent target: every other day at 10:00 AM CT

## Next proof rule

A review cycle counts only if it ends in one of:
- worthwhile finding logged in the Google Sheet
- concise Apply / Review update sent to Slack
- plain blocker surfaced that explains why actual review coverage did not happen

## Capture standard

For each worthwhile item, capture:
- date found
- source
- company/client
- title/project
- direct link if available
- why it fits
- concerns/gaps
- recommended next move
- classification
- status

## Reporting standard

Proactively surface:
- any new Apply
- any new Review

Use:
- main Slack DM for urgent/action-driving findings
- `#pb-job-search` for routine worthwhile findings when appropriate

No low-value dumps.
No fake pass reports.

## Failure rule

If a logged-in source breaks or access fails:
- log the failure plainly
- notify Chris only if real review coverage was affected
- do not fake completion

## Anti-patterns

Do not treat these as success:
- opening sources without logging findings or surfacing a blocker
- describing the lane more clearly
- creating extra tracker/governance machinery
- implying cadence is operational when it is only intended
