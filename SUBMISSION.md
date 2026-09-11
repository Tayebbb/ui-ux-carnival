# GreenCommute: Final Submission Check

11 September 2026. Source-document QA checkpoint while other sessions are still editing, not final sign-off. Prior checklist/browser/build observations below are historical unless explicitly updated; this pass used local documents and parent-supplied source evidence, with no Figma or browser access.

**Form:** [Official submission form](https://forms.gle/XYuDchjGrAy3BNnN9)

**Entrant confirmation required:** confirm the registered team name, registration ID, member/leader details, email and contact number against the registration receipt and form. Earlier reported form entries are not verified registration evidence and are not repeated as authoritative values. This documentation pass did not open the form, inspect contact fields or change them.

**Deadline:** 23:00 Dhaka, 11 September 2026. Internal upload target: 22:40. The form requires one PDF, maximum 100 MB.

## Packaging Checkpoint And Current Gate

[design_decision.md](design_decision.md) is complete and validated for all 22 decision IDs, local references and Markdown diagnostics. [tools/render-submission.cjs](tools/render-submission.cjs) now includes it as the ninth source in Appendix I, retaining Appendices A-H.

Historical packaging checkpoint: the first new build stopped because the brief changed during rendering; its source-snapshot safeguard preserved the previous outputs. This does not establish the status of a later concurrent build. **This documentation pass did not build or inspect generated outputs.** The packaging owner must produce and verify a stable rebuild after these source edits, including Appendix I and the latest exports.

The user confirmed other sessions are still finishing and chose to confirm the integrity statement manually. Do not submit, tick the integrity declaration or declare the file frozen on the user's behalf.

## Checklist Evidence

Present = source document or export inspected. Recorded = earlier technical evidence, not a new audit. Unverified = not established in this check. Pending = action still required.

| Phase | Requested checks | Result and evidence |
| --- | --- | --- |
| 1 | Brief, problem statement, user stories, acceptance criteria, rough profiles | Present in [01-understand/brief.md](01-understand/brief.md). Criteria are targets, profiles are hypotheses. |
| 2 | Scenario notes, updated profile, 3-5 problems/insights, traceable evidence | Present in [02-research/research.md](02-research/research.md): five prioritised problems, profile change record and client-pack source tags. Not worker interviews. |
| 3 | Sitemap, main flow, rough wireframes, story correspondence | Present in [03-structure/structure.md](03-structure/structure.md) and six flow/sitemap/wireframe PNG exports. Later screen additions and current interaction parity need the active integration session's check. |
| 4 | Complete journey beyond Home, real content, major states, decisions | Screen inventory, waiting/in-transit/SOS exports and rationale present. Task-specific sample content is disclosed as illustrative. Complete current journey/state coverage remains unverified. |
| 5 | Figma accessible; view permissions | Design link opens in the signed-in browser. Logged-out view access unverified; a pending view-access request was visible, not proof of the sharing configuration. |
| 5 | Auto Layout, organised components, consistent type, palette and font documentation | Recorded audits and specifications in [05-design-file/design-system-and-accessibility.md](05-design-file/design-system-and-accessibility.md). Current all-frame consistency not re-audited during concurrent edits. |
| 5 | Real text everywhere; no lorem ipsum | Task-specific copy present. Earlier Figma placeholder scan recorded clean; current whole-file scan unverified. Deliberate words such as placeholder in research provenance are not filler UI. |
| 5 | Accessibility notes; theme logo | Notes and selected-pair contrast table present. Original GreenCommute mark and credits documented; organiser acceptance as the theme logo is not certified. |
| 6 | Prototype link opens; correct start | Boarding link renders S-09 Language in the signed-in browser. Continue interaction could not be reliably activated by browser automation. Full flow not passed. |
| 6 | Main journey end-to-end; no dead ends | Unverified while interaction repairs continue. Do not infer this from a screen inventory or old reaction counts. |
| 6 | Handoff, main flows, open questions, developer notes | Present in [06-handoff/handoff.md](06-handoff/handoff.md), with redlines export and one-page PDF recorded. Some flow/redline wording predates later repairs. |
| Technical | Correct file; all required documents; clear names | Existing named PDF contains the prior package. Builder supports all six phases, full decision log, complete available PNG gallery and new rationale. Final stable rebuild required. |
| Technical | Correct team/member information | Cover names Mohammed Tayeb, CSE, AUST. Registered team/member, registration and contact details require entrant confirmation; no fresh form inspection in this pass. |
| Technical | No accidental draft/duplicate upload | No PDF attached at form inspection. Select only the successful rebuilt submission PDF, not the separate handoff PDF, HTML, Markdown, source rulebook or a temporary draft. |
| Technical | Form completed; actually submitted | Not complete: upload absent at inspection, integrity confirmation left to entrant, no submission receipt observed. |

## Links

- [Figma design](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz)
- [Boarding start](https://www.figma.com/proto/aWSZZboavo5bIt92qFQnsz?page-id=5%3A4&node-id=30-642&starting-point-node-id=30%3A642&scaling=scale-down)
- [SOS start](https://www.figma.com/proto/aWSZZboavo5bIt92qFQnsz?page-id=5%3A4&node-id=29-646&starting-point-node-id=29%3A646&scaling=scale-down)

## Current Documentation Contract

Parent-supplied live evidence: SOS `30:511` waits five seconds (`AFTER_TIMEOUT`) then opens Sending `138:1024`; Cancel `30:526` uses `BACK`, duplicate `119:1007` is hidden. Delivered-demo `30:534` uses left-aligned 28/18/16 px title/status/disclosure. Starts remain `30:642` and `29:646`. Authentication screens exist at `164:1944`, `169:4037`, `169:4041`, `169:4045` and `169:4049`; behavior verification remains with the authentication owner. These are reported source checks, not this editor's browser replay.

Daily fare policy remains open: do not equate 80 Tk to eight rides. Confirm the paid unit, return coverage, service-day cutoff and new-charge rule with the client; payment continuity must meet brief §4.3 FARE-1–5. Credits now include the recorded OpenStreetMap contributor attribution, but exact raster/tile-provider provenance and any additional original-icon authorship need the asset owner's confirmation. Entrant identity/contact confirmation, integrity declaration and submission receipt remain the entrant's responsibility.

## Final Actions After Other Sessions Stop

1. Settle the active prototype integration and refresh affected exports. No discretionary redesign. Verify entry, boarding/payment, SOS activation/cancel/return, and secondary Back paths in the settled file.
2. Open both Figma and prototype links without a signed-in account. Confirm anyone-with-link view access. An editor-session success is not a public-access test.
3. Run `& '.\tools\build-submission.ps1' -PrintProof` once inputs are stable. Require successful source-snapshot and PDF checks, nine preserved source documents and no missing mandatory export categories. Do not bypass the safeguard with draft mode.
4. Open the rebuilt PDF and confirm Appendix I contains the complete rationale. Check the cover, links, images, Bengali rendering, one-page developer note and latest flow wording. The new rationale has intentional historical qualifications, not permission to leave submission-breaking contradictions unresolved.
5. Confirm team/member/contact details, attach the single rebuilt PDF, make the integrity declaration personally and submit before 23:00. Retain the receipt/confirmation screenshot. Uploading a file alone is not submission.

## Session Boundaries

Historical sections above retain prior review observations; they are not fresh form, browser or output checks. This QA pass edited only the six authorised source documents. No Figma/browser access, build, generated-output edit, sharing change, form edit, integrity declaration or submission action occurred. Zero images were analysed. No final sign-off is given.

