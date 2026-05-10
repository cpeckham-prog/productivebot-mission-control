# Started Work

Source of truth for accepted or started work that is not yet closed.

## Rules
- This file is a derived human-readable view from `obligations.json` during migration.
- Allowed terminal states: answered, closed_with_evidence, blocked, deferred, declined, dropped.

## Entries

- id: sw-2026-05-05-logo-svg-rebuild
  created: 2026-05-05 06:42 CDT
  source_message_or_context: Chris approved the path `approved PNG master → manual SVG rebuild → surgical vector fix → raster exports` and asked to proceed.
  task_summary: Rebuild the approved family-mark PNG master into a controllable SVG, then apply surgical vector cleanup and export raster review assets.
  status: blocked
  next_concrete_action: Wait for Chris to confirm or correct /Users/productivebot/.openclaw/workspace/family-premium-emblem-full-interpretation-brief-2026-05-05.md before any new integrated visual pass.
  required_closure: Chris receives the rebuilt SVG plus cleaned raster exports from the correct approved family-mark master without drift.
  evidence: /Users/productivebot/.openclaw/workspace/family-premium-emblem-relock-brief-2026-05-05.md; /Users/productivebot/.openclaw/workspace/family-premium-emblem-capability-check-2026-05-05.md; /Users/productivebot/.openclaw/workspace/family-premium-emblem-problem-area-brief-2026-05-05.md; /Users/productivebot/.openclaw/workspace/family-premium-vector-editor-setup-plan-2026-05-05.md; Chris explicit relock statement on 2026-05-05; memory/2026-05-04.md#L15-L17; mission-control-dashboard commits 9990342, 12ca102, 47c8b91 showing the premium family-mark branch sequence. Delivery-path note: jsDelivr served the review HTML as text/plain, so that path failed last-mile verification and is rejected for this workstream.


- id: sw-2026-05-04-shelia-identity-delivery-fix
  created: 2026-05-04 10:36 CDT
  source_message_or_context: Chris approved continuing the Shelia identity work but explicitly required fixing the repeated backsliding on broken image delivery paths.
  task_summary: Preserve the current Shelia personality/avatar direction, install an anti-backslide operating rule, and move avatar variant delivery to a reliable owned surface.
  status: closed_with_evidence
  next_concrete_action: none
  required_closure: Chris receives the Shelia variants via a materially different owned-surface path plus a concrete explanation of the backsliding fix.
  evidence: AGENTS.md delivery-path rule update; mission-control-dashboard repo inspection and staged Shelia identity files; GitHub push commits 788dad2, 22e6c90, a5e937b; selected direction = Balanced Master v3; live UI/avatar moved to the locked asset and work transitioned into logo/company iterations.

- id: sw-2026-05-03-live-email-pilot
  created: 2026-05-03 10:03 CDT
  source_message_or_context: Chris approved proceeding with the recommendations and asked to turn the lean email spec into a live pilot.
  task_summary: Implement the smallest useful live email pilot from the approved v1 spec.
  status: closed_with_evidence
  next_concrete_action: Observe pilot signal quality for a week and tighten cadence/routing only if it feels noisy or duplicative.
  required_closure: Pilot is live with clear cadence and minimal-noise behavior.
  evidence: /Users/productivebot/.openclaw/workspace/lean-email-operating-model-v1-2026-05-03.md; cron jobs 267be2e6-e1b8-4a5b-b996-48ad2869d274 and 2e32558e-9bb1-4535-887d-36105edc3bdc; successful in-session manual cron execution at 2026-05-03 11:25 CDT

- id: sw-2026-05-03-lean-email-operating-model
  created: 2026-05-03 07:24 CDT
  source_message_or_context: Chris approved the lean phased direction for Superhuman and asked to move into proposing the very lean email operating model.
  task_summary: Design the minimum-viable email operating model that adds useful assistant behavior without introducing unnecessary layers or complexity.
  status: closed_with_evidence
  next_concrete_action: If Chris approves, convert the v1 spec into an actual pilot cadence and delivery behavior.
  required_closure: Chris gets a concise recommended operating model he can react to or approve.
  evidence: /Users/productivebot/.openclaw/workspace/lean-email-operating-model-v1-2026-05-03.md

- id: sw-2026-05-02-slack-fresh-app-reenable
  created: 2026-05-02 00:02 CDT
  source_message_or_context: Chris approved the clean Slack integration rebuild and Slack has been disabled cleanly pending fresh app credentials.
  task_summary: Re-enable Slack from a fresh app baseline in DM-only mode once Chris provides the new Bot Token and App Token.
  status: closed_with_evidence
  next_concrete_action: none
  required_closure: Fresh Slack app wired into OpenClaw, DM-only proof passes with acceptable latency, and one-channel proof can begin.
  evidence: /Users/productivebot/.openclaw/workspace/slack-fresh-app-manifest-2026-05-02.json, /Users/productivebot/.openclaw/workspace/slack-fresh-app-checklist-2026-05-02.md, /Users/productivebot/.openclaw/workspace/slack-fresh-app-secretref-patch-2026-05-02.json5, /Users/productivebot/.openclaw/workspace/slack-dm-only-enable-plan-2026-05-02.md, /Users/productivebot/.openclaw/openclaw.json, `openclaw status --deep` showing `agent:slack-fast:slack:channel:C0AMS2UHSJG`, `openclaw channels status --probe`, and Slack log line `slack channels resolved: #all-prodbot→all-prodbot (id:C0AMS2UHSJG)`

- id: sw-2026-05-01-slack-gateway-dup-process
  created: 2026-05-01 22:50 CDT
  source_message_or_context: Chris ran ProductiveBot doctor before the planned Slack clean rebuild and got a critical error saying multiple gateway processes are running.
  task_summary: Diagnose whether the reported duplicate gateway processes are real, stale, or expected restart residue, and determine the safest cleanup path.
  status: closed_with_evidence
  next_concrete_action: none
  required_closure: Explain what the second process is, whether it is harmful, and the cleanest fix before Slack rebuild work continues.
  evidence: `openclaw doctor` rerun no longer reproduced the failure; `lsof -nP -iTCP:18789 -sTCP:LISTEN` showed one real gateway listener; `ps` showed the extra matched process was `openclaw-logs`, not a second live gateway

- id: sw-2026-05-01-slack-channel-no-response
  created: 2026-05-01 22:36 CDT
  source_message_or_context: Chris reported that a "new test" message sent in the managed Slack DM plus #pb-parking-lot, #pb-ops-status, and #pb-daily-brief got no response.
  task_summary: Diagnose why the post-recovery Slack test still failed across the core managed surfaces.
  status: closed_with_evidence
  next_concrete_action: none
  required_closure: Identify the current failure point or blocker with evidence and report it to Chris.
  evidence: Slack DM test ingested and replied late; matching managed-channel session traces were absent; archive notes at `/Users/productivebot/.openclaw/workspace/archive/slack-reset-2026-05-01/diagnosis-notes.md` conclude the remaining issue is at the Slack app/install/event-delivery boundary

- id: sw-2026-05-01-slack-runtime-reload-fix
  created: 2026-05-01 21:32 CDT
  source_message_or_context: Chris reported slow Slack DM responses and no replies in the three core channels after the new Slack operating model was installed, then approved a gateway restart with "do it".
  task_summary: Diagnose why Slack channel behavior did not reflect the new operating model and apply the runtime reload fix.
  status: closed_with_evidence
  next_concrete_action: none
  required_closure: Show whether the restart applied the pending Slack channel reload and whether the core channels now work.
  evidence: staged plugin runtime-deps cache repaired against the active NVM root; Slack plugin startup failure from missing `../dist/babel.cjs` stopped reproducing; remaining channel failure was narrowed beyond plugin startup and led to the clean rebuild decision

- id: sw-2026-05-01-slack-operating-model-activation
  created: 2026-05-01 21:16 CDT
  source_message_or_context: Chris asked to continue from the Slack operating-model recommendation into the live operational step and ensure Shelia has the provisions/access/routing needed to manage the environment.
  task_summary: Activate the lean Slack operating model in live config and long-term memory so Shelia can manage the environment directly.
  status: closed_with_evidence
  next_concrete_action: Observe real usage and adjust active-work channel set if a lane activates or becomes unnecessary.
  required_closure: Apply the core+active channel allowlist, enable no-mention handling on managed channels, and update durable guidance.
  evidence: /Users/productivebot/.openclaw/openclaw.json, /Users/productivebot/.openclaw/workspace/MEMORY.md, /Users/productivebot/.openclaw/workspace/slack-operating-model-2026-05-01.md

- id: sw-2026-05-01-slack-operating-model-redesign
  created: 2026-05-01 21:11 CDT
  source_message_or_context: Chris asked for a rebuilt-from-scratch Slack operating model including final architecture, migration plan, and exact routing rules.
  task_summary: Redesign the Slack operating model around a lean core structure and explicit routing rules based on current needs, history, and future goals.
  status: closed_with_evidence
  next_concrete_action: If Chris approves, convert this recommendation into actual routing/default config changes and retire unused channels from default use.
  required_closure: Deliver a recommended architecture, migration plan, and explicit rules that Shelia can follow.
  evidence: /Users/productivebot/.openclaw/workspace/slack-operating-model-2026-05-01.md

- id: sw-2026-05-01-slack-fix-pass
  created: 2026-05-01 20:43 CDT
  source_message_or_context: Chris asked to run the Slack fix through GPT-1.
  task_summary: Diagnose and repair the Slack routing/allowlist configuration with GPT-5.5 support, keeping the fix minimal and safe.
  status: closed_with_evidence
  next_concrete_action: If Slack routing still behaves oddly, inspect whether `pb-timberland-band` was never created/was renamed and whether any channels need `requireMention` relaxed for inbound handling.
  required_closure: Identify the root cause, patch the allowlist for known topic channels, and report remaining unresolved channel gaps.
  evidence: /Users/productivebot/.openclaw/openclaw.json, GPT-1 diagnosis confirming allowlist root cause, resolved Slack channel IDs for parking-lot/important-email/email-low-priority/job-search/daily-brief/ops-status/reading-queue/gaming-channel

- id: sw-2026-05-01-gpt1-pilot-setup
  created: 2026-05-01 18:54 CDT
  source_message_or_context: Chris asked to skip further Google cleanup for now and start GPT-1.
  task_summary: Start the GPT-5.5 controlled pilot without changing the main session default model.
  status: closed_with_evidence
  next_concrete_action: Route selected high-judgment tasks through one-shot GPT-5.5 pilot runs and compare against GPT-5.4 when useful.
  required_closure: Verify GPT-5.5 is actually available, add it to the model catalog, and establish a least-disruptive pilot pattern.
  evidence: /Users/productivebot/.openclaw/openclaw.json, `openclaw models list`, isolated probe confirmed `openai-codex/gpt-5.5`, main session remains on `openai-codex/gpt-5.4`

- id: sw-2026-05-01-sh1-superhuman-pilot
  created: 2026-05-01 17:35 CDT
  source_message_or_context: Chris approved SH-1 and then asked to run the SH-1 pilot checklist.
  task_summary: Configure Superhuman MCP in OpenClaw, complete OAuth handoff, and run a safe pilot checklist limited to read-oriented workflows plus a draft-only test.
  status: closed_with_evidence
  next_concrete_action: If Chris wants, expand to a longer pilot period or move on to GPT-1.
  required_closure: Confirm MCP connectivity, demonstrate safe inbox/thread/calendar workflows, and avoid sending or mailbox mutations.
  evidence: /Users/productivebot/.openclaw/openclaw.json, Superhuman MCP OAuth completion, successful MCP proxy connection to https://mcp.mail.superhuman.com/mcp, Superhuman inbox/calendar query results, thread retrieval for `19ac24acf0816942`, draft `draft004fe861c07a3640`

- id: sw-2026-04-30-system-stabilization
  created: 2026-04-30 19:43 CDT
  source_message_or_context: Chris asked for a full stabilization pass after several days of intermittent availability and specifically called out rebuilding behavioral-enforcement.py as critical.
  task_summary: Stabilize the OpenClaw system, repair missing reliability enforcement scripts, and verify overall health.
  status: closed_with_evidence
  next_concrete_action: none
  required_closure: Clear report of fixes made, verification evidence, and any remaining blockers.
  evidence: /Users/productivebot/.openclaw/workspace/scripts/behavioral-enforcement.py, /Users/productivebot/.openclaw/workspace/scripts/validate-suite.sh, /Users/productivebot/.openclaw/openclaw.json, `openclaw status --deep`, `openclaw security audit`

- id: sw-2026-04-26-final-bounded-pass
  created: 2026-04-26 14:39 CDT
  source_message_or_context: Chris requested the explicit final bounded tightening pass.
  task_summary: Make one final bounded reliability pass on acceptance matching, continuity detection, evidence linkage, and canonical obligation writes.
  status: closed_with_evidence
  next_concrete_action: Implement one last small hardening set, identify accepted residual limitations, and explain why further bounded passes are not worth it.
  required_closure: Structured final report with accepted residual limitations and rationale for stopping.
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json, /Users/productivebot/.openclaw/workspace/scripts/outbound-obligation-gate.py, /Users/productivebot/.openclaw/workspace/scripts/status-evidence-gate.py, /Users/productivebot/.openclaw/workspace/scripts/obligation-write.py

- id: sw-2026-04-26-bounded-tightening-pass
  created: 2026-04-26 13:53 CDT
  source_message_or_context: Chris requested a bounded next tightening pass for the obligation-enforcement layer.
  task_summary: Improve acceptance matching, continuity detection, evidence linkage, and canonical obligation writes without overcomplicating the system.
  status: closed_with_evidence
  next_concrete_action: Implement bounded improvements to matching, evidence linkage, and canonical-write flow, then verify behavior and report results.
  required_closure: Structured report with executive summary, remaining gaps targeted, files changed, new enforcement behavior, complexity tradeoffs, and risks.
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json, /Users/productivebot/.openclaw/workspace/scripts/obligation-write.py, /Users/productivebot/.openclaw/workspace/scripts/outbound-obligation-gate.py, /Users/productivebot/.openclaw/workspace/scripts/status-evidence-gate.py

- id: sw-2026-04-26-tightening-pass
  created: 2026-04-26 13:20 CDT
  source_message_or_context: Chris requested the next tightening pass for remaining obligation-enforcement gaps.
  task_summary: Strengthen acceptance matching, broaden continuity detection, tie evidence to task-specific records, and harden canonical-store migration.
  status: closed_with_evidence
  next_concrete_action: Update outbound and status gates for semantic matching and task-specific evidence, then harden derived-view sync behavior.
  required_closure: Structured report with executive summary, remaining gaps addressed, files changed, new enforcement behavior, migration status, and risks.
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json, /Users/productivebot/.openclaw/workspace/scripts/outbound-obligation-gate.py, /Users/productivebot/.openclaw/workspace/scripts/status-evidence-gate.py, /Users/productivebot/.openclaw/workspace/scripts/obligation-sync.py

- id: sw-2026-04-26-obligation-hardening
  created: 2026-04-26 13:09 CDT
  source_message_or_context: Chris requested staged hardening of the obligation-enforcement layer.
  task_summary: Implement acceptance-language enforcement, continuity-to-evidence mapping, and a canonical obligation store transition path.
  status: closed_with_evidence
  next_concrete_action: Update outbound enforcement gates and migrate obligation reads to a canonical store with derived markdown views.
  required_closure: Structured implementation plan with concrete files changed, rollout strategy, risks, and success criteria.
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json, /Users/productivebot/.openclaw/workspace/scripts/reliability-checkpoint.py, /Users/productivebot/.openclaw/workspace/scripts/outbound-obligation-gate.py, /Users/productivebot/.openclaw/workspace/scripts/status-evidence-gate.py, /Users/productivebot/.openclaw/workspace/scripts/mandatory-check.py, /Users/productivebot/.openclaw/workspace/scripts/obligation-sync.py

- id: sw-2026-04-26-useful-tool-plan
  created: 2026-04-26 19:23 CDT
  source_message_or_context: Chris requested plan for making system useful for everyday life now that reliability/trust foundation is stronger
  task_summary: Create plan for evolving into useful everyday tool
  status: closed_with_evidence
  next_concrete_action: Design practical roadmap from current hardened state to daily utility
  required_closure: Structured implementation plan with concrete next steps and success metrics
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json

- id: sw-2026-04-26-week1-kickoff-prompts
  created: 2026-04-26 20:01 CDT
  source_message_or_context: Chris approved the plan and requested prompts to kick off Week 1 tomorrow
  task_summary: Create prompts for Week 1 kickoff of useful tool plan
  status: closed_with_evidence
  next_concrete_action: Write specific prompts for lane reactivation, proactive patterns, and communication improvements
  required_closure: Concrete prompts ready for tomorrow's execution
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json

- id: sw-2026-04-27-retrieve-week1-prompts
  created: 2026-04-27 09:02 CDT
  source_message_or_context: Chris can't find the Week 1 kickoff prompts I created yesterday and needs them now to start the work
  task_summary: Retrieve Week 1 kickoff prompts from yesterday
  status: closed_with_evidence
  next_concrete_action: Find and provide the prompts I created yesterday for starting Week 1 of the useful tool transition
  required_closure: Concrete prompts ready for Chris to use today
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json

- id: sw-2026-04-27-retrieve-full-plan
  created: 2026-04-27 09:12 CDT
  source_message_or_context: Chris requested the full plan from yesterday for his records
  task_summary: Retrieve full useful tool transition plan from yesterday
  status: closed_with_evidence
  next_concrete_action: Find and provide the complete plan document I created yesterday for evolving into a useful everyday tool
  required_closure: Complete plan document with all phases, metrics, and implementation steps
  evidence: /Users/productivebot/.openclaw/workspace/obligations.json
