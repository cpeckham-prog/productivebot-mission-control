# Slack Operating Model — Recommended Rebuild (2026-05-01)

## 1) Recommended final channel architecture

### Core surfaces

#### Main Slack DM with Chris
Use only for:
- active collaboration
- approvals
- decisions
- blockers
- urgent escalations
- short high-signal back-and-forth

Do not use for:
- routine summaries
- passive monitoring
- system success noise
- inbox mirroring
- backlog capture

#### #pb-parking-lot
Purpose:
- backlog, ideas, reminders, half-formed thoughts, loose ends, "come back to this later"

Behavior:
- capture by default
- not an interrupt unless Chris explicitly marks it urgent
- review periodically and pull forward what deserves action

#### #pb-ops-status
Purpose:
- system changes, config work, fixes, restarts, verifications, outages, notable failures

Behavior:
- only meaningful operational change or status
- no routine green-check spam
- use for work-in-progress checkpoints on technical/ops tasks

#### #pb-daily-brief
Purpose:
- digest-style summaries and non-urgent synthesized updates

Examples:
- daily/weekly prep
- curated low-priority email summary
- "here's what matters today/tomorrow"
- non-urgent grouped updates across systems

Behavior:
- summary-heavy, not event-heavy
- default destination for non-urgent useful information that does not need DM attention

### Active-work channels (only when a lane is genuinely active)
Keep these available, but do not treat them as always-on default routing destinations:
- #pb-job-search
- #pb-gaming-channel
- #pb-lucid-lease
- #pb-revenue-project
- #pb-timberland-band-app

Rule:
- a channel is active when the underlying workstream is active
- if the lane is dormant, the channel should be quiet

### Channels to remove from default routing
These may remain in Slack, but should not be part of the standard operating model unless reactivated for a specific reason:
- #pb-important-email
- #pb-email-low-priority
- #pb-reading-queue
- #pb-stock-market
- #pb-granola-app

## 2) Migration plan from current channels

### Phase 1 — Adopt the lean operating model immediately
Keep as core:
- main DM
- #pb-parking-lot
- #pb-ops-status
- #pb-daily-brief

Keep as conditional active-work channels:
- #pb-job-search
- #pb-gaming-channel
- #pb-lucid-lease
- #pb-revenue-project
- #pb-timberland-band-app

Stop default routing to:
- #pb-important-email
- #pb-email-low-priority
- #pb-reading-queue

### Live config provisions to make Shelia operationally effective
- Allowlist only the core + active-work channels that Shelia is expected to manage directly.
- Set `requireMention: false` on those managed Slack channels so Chris can speak naturally in them without needing to mention Shelia every time.
- Keep `allowBots: false` on managed channels to reduce bot chatter/noise.
- Keep `groupPolicy: "allowlist"` so Shelia stays bounded to the intended operating surfaces.
- Do not use inactive/legacy channels as default routing destinations even if they remain in Slack for history.

### Phase 2 — Re-map category behavior
- Important/actionable email:
  - if urgent -> main DM
  - if tied to active lane -> that active-work channel
  - otherwise -> #pb-daily-brief
- Low-priority/general email:
  - route only as digest -> #pb-daily-brief
- Tech/config/status work:
  - route -> #pb-ops-status
- Loose ideas / future stuff:
  - route -> #pb-parking-lot
- Project-specific work:
  - route -> matching active-work channel only when lane is active

### Phase 3 — Quiet/archive by behavior, not deletion first
For channels not in the default model:
- stop routing traffic there
- leave them available for history/reference
- if they stay unused, archive later by deliberate choice

### Phase 4 — Re-evaluate after 2 weeks of live use
Ask:
- Did the main DM get cleaner?
- Did #pb-daily-brief become the right summary surface?
- Did project channels only activate when truly useful?
- Are any extra channels proving necessary enough to promote back into the model?

## 3) Exact routing rules for Shelia

### Rule 1 — Main DM is sacred
Send to main DM only if one of these is true:
- Chris asked there directly and the reply belongs there
- a decision is needed
- an approval is needed
- a blocker is preventing progress
- the update is urgent/time-sensitive
- the interaction is active collaboration rather than background reporting

Otherwise, do not use the main DM.

### Rule 2 — Parking lot is default capture
Send to #pb-parking-lot when:
- it is an idea, reminder, question, possible future task, or loose thread
- it should be saved without interrupting Chris
- it does not need immediate action

Do not treat parking-lot items as urgent unless Chris explicitly says so.

### Rule 3 — Ops work goes to #pb-ops-status
Send to #pb-ops-status when:
- doing config work
- diagnosing a system issue
- applying a fix
- verifying a restart/change
- reporting a real technical failure or meaningful status change

Do not send routine success noise there unless it closes a meaningful loop.

### Rule 4 — Non-urgent summaries go to #pb-daily-brief
Send to #pb-daily-brief when:
- summarizing lower-priority email/news/admin items
- giving a synthesized daily or weekly prep view
- sharing useful but non-urgent multi-item updates
- grouping items that would otherwise create spam across channels

Use digest format, not one-post-per-event.

### Rule 5 — Active project channels only for active lanes
Send to a project channel only when:
- the workstream is genuinely active
- the message materially belongs to that lane
- using the channel improves continuity and focus

Current candidate project channels:
- #pb-job-search
- #pb-gaming-channel
- #pb-lucid-lease
- #pb-revenue-project
- #pb-timberland-band-app

### Rule 6 — Email routing logic
For email-derived updates:
- urgent + actionable + needs Chris now -> main DM
- clearly tied to active project lane -> that project channel
- useful but non-urgent -> #pb-daily-brief
- low-value/noise -> do not post

Never mirror the inbox mechanically.

### Rule 7 — Fewer posts, better posts
Every Slack message should answer at least one of:
- Why does this matter?
- What should Chris do?
- What changed?
- What decision is needed?

If a message answers none of those, it probably should not be sent.

### Rule 8 — Do not half-migrate
Once a routing rule exists for a category:
- use it consistently
- do not leak the same category back into the main DM out of habit

### Rule 9 — Extra channels are opt-in, not default
These may exist, but are not default routing destinations unless explicitly activated:
- #pb-granola-app
- #pb-stock-market
- #pb-important-email
- #pb-email-low-priority
- #pb-reading-queue

### Rule 10 — If unsure, prefer this order
When choosing a destination:
1. urgent/decision/blocker -> main DM
2. tech/config/fix -> #pb-ops-status
3. active project work -> matching project channel
4. non-urgent useful summary -> #pb-daily-brief
5. loose future thought -> #pb-parking-lot
6. otherwise -> do not send
