# AI Operating System Roadmap

Start date: 2026-03-30
Planning horizon: 8 weeks
Owner: Shelia
Stakeholder: Chris
Status: active

## Objective
Build a reliable Slack-centered operating layer that supports structured orchestration, low-noise execution, specialized workers, and controlled autonomy, with most system-improvement work happening behind the scenes and Chris involved mainly for decisions, approvals, and reviews.

## Principles
- Reliability before autonomy
- Structure before scale
- Slack is the command center
- Default to the narrowest effective tool surface
- Use topic channels to reduce DM noise
- Close loops explicitly: result, blocker, or checkpoint
- Ask for approval on sensitive/external actions

## Phase 1 — Stabilize and Instrument
Window: 2026-03-30 to 2026-04-12
Goal: create structure, visibility, and reliability around the current setup.
Status: in progress — Week 2 incomplete as of 2026-04-12; Milestone M2 missed

### Week 1 — Build the control layer (2026-03-30 to 2026-04-05)
- [x] Create canonical roadmap/checklist
- [x] Create lightweight active-work tracker
- [x] Write operating rules in one place
- [x] Define work status labels
- [x] Define autonomy vs approval boundaries
- [x] Define update/checkpoint standards
- [x] Convert DM vs channel routing into operational rules
- [x] Install hard daily 7:00 AM operating review
- [x] Define daily operating review output format and reconciliation checklist
- [x] Add severity threshold to daily accountability updates
- [x] Add weekly strategic review to prevent tidy-but-stagnant execution

**Goalposts**
- One canonical plan exists
- One place tracks in-flight work
- One operating ruleset exists
- Shelia can improve the system without re-deciding basics every time

### Week 2 — Standardize core workflows (2026-04-06 to 2026-04-12)
- [ ] Formalize job-search triage workflow
- [ ] Formalize research-brief workflow
- [ ] Formalize drafting workflow
- [ ] Formalize ops alert / verification workflow
- [ ] Formalize parking-lot review workflow (`#pb-parking-lot` / `C0APHRE1G8N`)
- [ ] Standardize output formats for each
- [ ] Document routing destination for each
- [ ] Document approval points for each
- [ ] Identify where browser use is necessary vs avoidable

**Goalposts**
- Top recurring workflows are no longer ad hoc
- Outputs are more consistent
- Right things route to right places
- Less depends on improvisation

## Phase 2 — Modularize and Formalize
Window: 2026-04-13 to 2026-04-26
Goal: define worker roles, reusable workflows, and orchestration patterns.
Status: not started

### Week 3 — Define the worker model (2026-04-13 to 2026-04-19)
- [ ] Define Research Worker
- [ ] Define Writing Worker
- [ ] Define Ops Worker
- [ ] Define Browser Worker
- [ ] Write worker specs: purpose, inputs, outputs, boundaries, escalation rules
- [ ] Define when work stays with Shelia vs gets delegated

**Goalposts**
- Clear worker architecture exists
- Recurring tasks map to the right worker type
- Less ambiguity in how work gets done

### Week 4 — Build orchestration patterns (2026-04-20 to 2026-04-26)
- [ ] Define orchestration pattern for role review + recommendation
- [ ] Define orchestration pattern for company research + outreach draft
- [ ] Define orchestration pattern for ops issue detection + summary
- [ ] Define orchestration pattern for background research + executive summary
- [ ] Create reusable templates for role review, company brief, outreach draft, decision memo, incident summary
- [ ] Define simple parallelize-or-not rules

**Goalposts**
- Compound tasks are broken into repeatable flows
- Less serial/manual execution
- Outputs are easier to scan and use

## Phase 3 — Controlled Autonomy
Window: 2026-04-27 to 2026-05-10
Goal: push more work into low-risk background execution with approval gates where needed.
Status: not started

### Week 5 — Turn on controlled background execution (2026-04-27 to 2026-05-03)
- [ ] Pick 1-2 workflows suitable for behind-the-scenes improvement
- [ ] Set up proactive progress against roadmap without waiting for prompts
- [ ] Implement prepare-but-pause-for-approval pattern where appropriate
- [ ] Improve status reporting for background work
- [ ] Add clearer blocker handling
- [ ] Start logging milestone completions in a visible progress file

**Goalposts**
- Shelia makes progress on the plan between prompts
- Chris does not need to micromanage implementation
- Background work produces visible artifacts and status updates

### Week 6 — Add approval tiers and reliability checks (2026-05-04 to 2026-05-10)
- [ ] Formalize approval tiers: auto-do, prepare/draft only, ask before sending/changing, explicit instruction only
- [ ] Create reliability checklist for multi-step work
- [ ] Define what counts as done
- [ ] Improve checkpoint language and close-the-loop behavior
- [ ] Add simple review process for failed or messy runs

**Goalposts**
- The system is more trustworthy
- Less ambiguity
- Lower chance of silent drift or half-completion

## Phase 4 — Optimization and Scaling
Window: 2026-05-11 to 2026-05-24
Goal: improve quality, reduce noise, measure progress, and decide what is worth expanding.
Status: not started

### Week 7 — Measure and refine (2026-05-11 to 2026-05-17)
- [ ] Review what workflows are actually being used
- [ ] Review where noise still exists
- [ ] Review where outputs are weak
- [ ] Review where autonomy helps vs hurts
- [ ] Tighten templates and worker specs based on real usage
- [ ] Identify 1-2 additional workflows worth expanding

**Goalposts**
- The system responds to reality, not just plan docs
- Weak spots are visible
- Next improvements are intentional

### Week 8 — Decide the next level (2026-05-18 to 2026-05-24)
- [ ] Review progress against full roadmap
- [ ] Mark completed / partial / deferred items
- [ ] Identify highest-value next-phase opportunities
- [ ] Decide whether broader autonomy is justified
- [ ] Decide whether deeper computer-control investment is worth it
- [ ] Publish revised roadmap for next 4-8 weeks

**Goalposts**
- Clear before/after exists
- System has matured into a managed operating layer
- Next roadmap is evidence-based

## Milestones
- M1 (2026-04-05): control layer in place
- M2 (2026-04-12): core workflows standardized — missed; workflow-standardization work remains incomplete as of 2026-04-12
- M3 (2026-04-19): worker model defined
- M4 (2026-04-26): orchestration patterns documented
- M5 (2026-05-03): first behind-the-scenes workflow improvements active
- M6 (2026-05-10): approval and reliability framework active
- M7 (2026-05-17): measured refinement pass complete
- M8 (2026-05-24): roadmap review and next-phase plan published

## Progress rubric
- not started
- in progress
- blocked
- waiting on Chris
- done

## Immediate next actions
- Keep `STATUS_BOARD.md` / `dashboard/STATUS_BOARD.json` as the only decision-driving active-work surface
- Keep `PROGRESS_LOG.md` as the motion log and daily memory as audit trail only
- Keep `AUTO_UPDATE_WORKFLOW.md` and `TRUE_ASSISTANT_V1_WORKFLOW.md` as governing durable outputs for update behavior and assistant behavior
- Retire or neutralize dormant control paths that can still imply authority without producing value
- Require explicit destinations for every user-facing Slack cron workflow
- Disable or demote workflows that cannot currently produce trustworthy visible value
- Use the true assistant workflow artifact directly on the live gaming / creator deliverable
- Refine and deliver the existing gaming/creator recommendation package draft as the next visible non-meta artifact before expanding worker/process design further
- Do not advance Phase 2 worker-model documentation unless it directly helps ship a live deliverable or remove a real blocker
- Treat all other workflow/process material as secondary unless it directly improves delivery or blocker clarity
