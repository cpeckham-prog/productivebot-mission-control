# Job Search Tracker Workflow

## Working tracker path

- Google account: `shelia@cpdgrp.com`
- Spreadsheet id: `1vi11L-edyIMD7NVGiauw0OxvEfSgjeFU5AIVYmQpisg`
- Spreadsheet title: `Job Search Opportunity Tracker`
- Tabs:
  - `Fractional`
  - `Permanent`

## Account boundary rule

All structured tracker reads and writes must use `shelia@cpdgrp.com` only.
Do not use `peckham.chris@gmail.com` for this workflow.

## Source routing

- `Catalant` opportunities -> `Fractional`
- `BTG` opportunities -> `Fractional`
- `Business Talent Group` opportunities -> `Fractional`
- `LinkedIn` opportunities -> `Permanent`
- `LinkedIn Revenue` opportunities -> `Permanent`
- `LinkedIn Operations` opportunities -> `Permanent`
- `Ladders` opportunities -> `Permanent`

## Direct-link quality rule

Always store the most specific canonical opportunity URL available.
Do not store board landing pages when a deeper opportunity URL exists.

Source-specific rule:
- `LinkedIn`: prefer `https://www.linkedin.com/jobs/view/<job-id>/`
- `Ladders`: prefer the specific job posting URL
- `BTG` / `Business Talent Group`: prefer the specific `/projects/<id>` project URL; normalize by removing tracking query params when possible
- `Catalant`: prefer the specific opportunity/project URL if available; if only the search/result shell is visible, record that limitation plainly instead of pretending the URL is canonical

If a row only has a landing-page URL and the canonical URL cannot be safely recovered from the current state, do not invent it. Mark the limitation in the workflow/output and improve future ingestions.

## Duplicate normalization

Use these normalized comparison keys before writing a row:
- normalized source
- normalized company/client
- normalized title/project
- normalized direct URL, if available

Normalization rules:
- source aliases:
  - `BTG` == `Business Talent Group`
  - `LinkedIn Revenue` == `LinkedIn`
  - `LinkedIn Operations` == `LinkedIn`
- lowercase all comparison text
- trim outer whitespace
- collapse repeated internal whitespace to a single space
- ignore punctuation differences in company/title comparisons when practical
- normalize URLs by removing query strings and trailing slashes when that does not change identity

Duplicate decision rule:
- treat a row as a likely duplicate if source + company + title all match after normalization
- treat a row as a strong duplicate if normalized direct URL also matches
- if a likely duplicate is found, update/review the existing row instead of blindly appending a new one

## Repeatable intake runbook

### 1. Browser discovery / source access
- Check the OpenClaw browser status first
- Use the `openclaw` browser profile already configured for job-search sites
- If the browser path is unstable or the browser tool fails, state the exact browser/gateway failure plainly
- Do not claim live ingestion from a source you could not actually open

### 2. Select source and route to tab
- identify the source site
- map it to the target tab using the routing table above
- `Catalant` and `BTG` / `Business Talent Group` -> `Fractional`
- `LinkedIn` and `Ladders` -> `Permanent`

### 3. Capture the best direct link
- open the actual opportunity detail page if possible
- capture the canonical posting/project URL
- if only a landing page is available, say so plainly and do not describe the URL as canonical

### 4. Duplicate check procedure
- read the target tab before writing
- compare normalized source, company/client, title/project, and URL
- if source + company + title match, treat it as a likely duplicate
- if normalized URL also matches, treat it as a strong duplicate
- prefer update/review over append when a duplicate is found

### 5. Structured append/update procedure
- use `gog sheets` under `shelia@cpdgrp.com`
- append only after the duplicate check passes
- update an existing row instead of appending when the row is clearly the same opportunity and only the metadata needs improvement

### 6. Readback verification procedure
- after append/update, read back the affected range
- verify the row contents actually match what was intended
- do not claim success without readback evidence

### 7. When canonical URL is unavailable
- record the best available URL
- explicitly say it is not canonical
- avoid overstating link quality
- prioritize fixing that row later if the detail page becomes available

### 8. When browser path is unstable
- report the exact failure point
- do not pretend the workflow step completed
- continue any non-browser artifact/rule work that can still be completed safely
- leave the live-source proof step marked blocked

### 9. When a likely duplicate is found
- do not append a new row immediately
- inspect whether the existing row should be updated instead
- if uncertain, leave the existing row in place and surface the ambiguity plainly

### 10. Structured row fields
Use this field order:
1. Date Found
2. Source
3. Company/Client
4. Title/Project
5. Direct Link
6. Why It Fits
7. Concerns/Gaps
8. Recommended Next Move
9. Classification
10. Status

## Current known limitation

The 2026-04-20 LinkedIn `SHOPLINE` row was ingested successfully, but its direct link is currently a board landing page (`https://www.linkedin.com/jobs/`) rather than a canonical per-job URL. That row should be updated later if the canonical job detail URL can be recovered safely.

## Proof-trial note

Structured read/write access was verified on 2026-04-20 under `shelia@cpdgrp.com`.
One real `Permanent` ingestion was completed.
A later fractional-source proof attempt was blocked by a browser/gateway failure before live source navigation could complete.
