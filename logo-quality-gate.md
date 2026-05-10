# Logo / identity quality gate

Use this before presenting any logo, monogram, family-mark, or identity revision.

## Hard stop rule
Do not present, publish, or describe an iteration as a meaningful pass unless all checks below are explicitly true.

## Required checks
1. **Master check**
   - Confirm the active lane and active master file are the same ones the user selected.
   - Record three facts before continuing: active lane, exact approved master filename, and verification source (user statement, screenshot, board, or memory/file citation).
   - If there is any uncertainty about the lane or master, stop and recover it first.

2. **Brief check**
   - State the exact requested change in one sentence.
   - State what must remain invariant.

3. **Capability check**
   - Ask: can the current tool path do this faithfully?
   - If likely outcome is drift, no-op, or uncontrolled restyling, stop and change tactics before generating.

4. **Artifact check**
   - Inspect the produced image against the brief and against the locked master/reference side by side.
   - Reject internally if it is a no-op, backslide, drift, wrong-color/fidelity, wrong lane, or fixes the wrong thing.

5. **Delivery check**
   - Only publish if the artifact passed inspection.
   - Verify the review URL before presenting it.

## Explicit reject conditions
Reject and do not present if any of the following are true:
- wrong lane
- wrong master
- silent lane switch
- silent master switch
- broad restyle when the ask was surgical
- color/fidelity degradation when preservation was required
- no-op disguised as refinement
- candidate was not compared back to the locked master in the same turn
- user already identified this path as unreliable for the requested edit class

## Logo-specific operating rule
For precise logo surgery, written rules are not enough by themselves. Treat this file as a blocking pre-delivery gate, not advice.

## Hosting/review rule
Do not host, publish, push for review, or ask for feedback on a logo/family-mark artifact until the lane/master check and side-by-side master comparison have both passed in the same turn.
