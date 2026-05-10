# Target Config + Rollout Plan — 2026-05-01

## Objective
Build an OpenClaw setup that maximizes trust, operational reliability, and manageability first; cost efficiency second; local-model speed third.

This design assumes:
- Chris wants a system Shelia can manage with high confidence
- Recent issues showed small local models should not be trusted as broad autonomous fallbacks
- The system should be executable in bounded phases after explicit approval

---

## Design principles

1. **Trust-first model hierarchy**
   - Strong cloud model for primary reasoning
   - Strong cloud model for general fallback
   - Local models only for narrow, low-risk support roles

2. **Hard role separation**
   - General autonomous assistant work != local-model work
   - Verification/classification/support tasks can be local
   - Ambiguous judgment and tool-heavy tasks stay on trusted frontier models

3. **Expand autonomy only after controls**
   - No re-expansion of local autonomy until sandboxing and tool restrictions are in place

4. **Verification before claims**
   - Preserve the behavioral/reliability layer as a first-class operating guardrail

---

## Target operating architecture

### Lane A — Main trusted assistant lane
**Purpose:** direct work with Chris, strategic reasoning, drafting, tool use, execution

- Primary model: `openai-codex/gpt-5.4`
- General fallback: `anthropic/claude-opus-4-6`
- Tools: current coding/full working toolset as needed
- This remains the only lane allowed to handle ambiguous high-judgment work by default

### Lane B — Local verification lane
**Purpose:** cheap evidence checking, completion verification, consistency checks, low-cost internal review

- Local model via Ollama
- No web tools
- No browser
- No outbound messaging tools
- No unsandboxed broad autonomous execution

Examples:
- verify whether a claim has supporting evidence
- classify whether a change actually occurred
- summarize logs / artifacts
- sanity-check structured outputs

### Lane C — Cheap background support lane
**Purpose:** low-risk internal support work only

- Local model only for bounded tasks such as:
  - tagging
  - routing
  - low-stakes summarization
  - local artifact analysis
  - non-external cron/background checks
- Escalate to trusted cloud lane when ambiguity or external impact appears

---

## Target model policy

### Primary / fallback hierarchy
- `agents.defaults.model.primary = openai-codex/gpt-5.4`
- `agents.defaults.model.fallbacks = ["anthropic/claude-opus-4-6"]`

### Local model policy
Local models should **not** sit in the main fallback chain.

Instead, local models should be invoked only in bounded contexts:
- verification scripts
- isolated subagent runs for low-risk internal work
- explicitly restricted provider/model lanes

---

## Target tool policy

### Trusted cloud lane
Keep current working tool access for the main assistant lane, subject to later tightening if needed.

### Local/small-model lane
Deny at minimum:
- `group:web`
- `browser`
- outbound messaging surfaces when possible

Desired principle:
- local models may inspect and classify
- local models may not independently browse the open web or act externally

---

## Target security posture

### Near-term posture
Accept current personal-assistant trust model, but stop using small local models as general fallbacks.

### Medium-term posture
Add sandboxing before expanding local-model autonomy.

Recommended direction:
- enable sandboxing once backend is actually available and tested
- keep local-model tasks in sandboxed or otherwise constrained lanes
- keep broad runtime/fs powers on trusted models only where practical

---

## Concrete target config state

## Phase 1 target config (safe now)
Already aligned or nearly aligned:

```json5
{
  agents: {
    defaults: {
      model: {
        primary: "openai-codex/gpt-5.4",
        fallbacks: ["anthropic/claude-opus-4-6"],
      },
    },
  },
  tools: {
    byProvider: {
      "ollama/llama3.1:8b": {
        deny: ["group:web", "browser"],
      },
    },
  },
}
```

Notes:
- Provider-level deny remains useful defense-in-depth even though it did not satisfy the audit by itself.
- Main security gain comes from removing the small model from general fallbacks.

## Phase 2 target config (after approval, if we decide to operationalize local lanes further)
Introduce stricter policy around local-model execution contexts.

Example target shape:

```json5
{
  tools: {
    byProvider: {
      "ollama/llama3.1:8b": {
        deny: ["group:web", "browser"],
      },
      "ollama/*": {
        deny: ["group:web", "browser"],
      },
    },
  },
}
```

Potential follow-on if supported cleanly by runtime behavior:
- restricted subagent path for local-model runs only
- isolated prompts/tasks explicitly designated as low-risk internal work

## Phase 3 target config (only after sandbox availability is confirmed)
If Docker/OpenShell/SSH sandbox backend is installed and tested:

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "non-main",
        scope: "agent",
        workspaceAccess: "ro",
      },
    },
  },
}
```

Or more aggressively, if stable and desired later:

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "all",
        scope: "agent",
        workspaceAccess: "ro",
      },
    },
  },
}
```

Important: do **not** apply this until backend availability and workflow compatibility are proven.

---

## Proposed rollout plan

### Phase 1 — Lock trusted hierarchy (safe, immediate)
**Goal:** ensure primary/fallback behavior is trust-first

Actions:
1. Keep GPT-5.4 as primary
2. Keep Claude Opus 4.6 as sole general fallback
3. Keep small Ollama models out of the main fallback chain
4. Preserve local-model provider-level web/browser denies as defense-in-depth
5. Verify with:
   - `openclaw config get agents.defaults.model.fallbacks`
   - `openclaw status --deep`
   - `openclaw security audit`

Success criteria:
- fallback chain matches target
- 0 critical audit findings
- runtime healthy after restart if needed

Rollback:
- restore prior fallback array from config backup

### Phase 2 — Formalize local-model support lane
**Goal:** keep local models available, but only in ways that preserve trust

Actions:
1. Standardize local-model usage policy in docs/ops notes
2. Route verification and low-risk support work explicitly to local-model paths
3. Keep web/browser denied for all Ollama provider targets practical to restrict
4. Verify local tasks remain bounded and non-external

Success criteria:
- local models still useful for cheap support tasks
- no broad autonomous fallback behavior restored
- no new critical audit findings

Rollback:
- remove provider-level restrictions only if they break a known internal workflow
- revert any local-lane routing changes

### Phase 3 — Add sandbox foundation
**Goal:** earn the right to expand low-cost local autonomy safely

Actions:
1. Install/confirm sandbox backend availability
2. Test sandbox with a sacrificial low-risk session
3. Enable sandboxing in limited mode first (`non-main`, `ro`)
4. Re-test exec/file workflows and any local-lane jobs
5. Only then consider expanding local-model responsibilities

Success criteria:
- sandbox backend works reliably
- no breakage in core workflows
- audit posture improved

Rollback:
- set sandbox mode back to `off`
- restart gateway

---

## Recommended execution order

### Do now
- Phase 1 fully
- Phase 2 planning/design, but only partial implementation where clearly safe

### Do next after approval
- Formalize local verification/support lane
- Tighten provider-level restrictions for all Ollama models if no workflow breakage

### Do later
- Sandbox rollout
- Any attempt to broaden local-model autonomy

---

## What I recommend we actually build

If the goal is a system Shelia can manage with high confidence, I recommend this exact stance:

1. **Main assistant remains cloud-first**
2. **Only strong cloud model acts as general fallback**
3. **Local models become tools, not substitutes**
4. **Sandboxing is the prerequisite for any serious local autonomy expansion**
5. **Reliability verification stays in the loop as an operating control**

---

## Approval-ready execution packages

### Package A — Trust-first model hierarchy hardening
Execute:
- confirm primary/fallback config
- preserve/remove any unsafe local fallback entries
- validate + restart if needed
- run post-change audit

Risk: low

### Package B — Local-lane restriction pass
Execute:
- apply provider-level denies for Ollama models broadly
- verify no critical workflow breaks
- test local verification path

Risk: low to moderate

### Package C — Sandbox foundation pass
Execute:
- install/verify backend
- enable limited sandbox mode
- test and iterate

Risk: moderate

---

## My recommendation

Approve **Package A** immediately if any drift remains.
Then approve **Package B** as the next bounded hardening step.
Do **Package C** only after we intentionally prepare for it.

That sequence gives the best trust/operability tradeoff with the least risk of breaking your working system.
