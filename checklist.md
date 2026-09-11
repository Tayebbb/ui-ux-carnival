# Carnival 8.0 UI/UX Sprint - Master Checklist

**Event:** Friday, 11 September 2026 | 5:00 PM-11:00 PM (Dhaka) | Online | 6 hours
**Purpose:** Run this audit after the work is complete, before submitting the final package.
**Source:** The supplied master requirement map. The official rulebook and later organiser announcements take precedence.

Use `- [x]` only after inspecting the actual artifact or testing the interaction/link. Leave missing or unverified items unchecked. For genuinely conditional items, record why they are not applicable; do not waive required deliverables.

**Priority key:** `[M]` Mandatory requirement | `[H]` High-priority quality check or internal operating safeguard | `[O]` Optional tool or method

Audit record:

- Reviewer: Documentation final audit owner; report/source-text reconciliation only, no live inspection.
- Audit date/time (Dhaka): 11 September 2026; final audit requested at 22:35, cutoff 23:00.
- Outstanding items and owners: Parent coordinator: live runtime and reviewer access; package owner: final package freshness; team lead: registration, integrity attestation, upload and receipt.
- Final audit result: **Not ready for unconditional sign-off: runtime/upload/user attestation pending**
- Submission confirmation/time: Pending; no receipt verified by this audit.

Related working files: [SPRINT-OPS.md](SPRINT-OPS.md), [DECISIONS.md](DECISIONS.md), [SUBMISSION.md](SUBMISSION.md).

## Current Final Audit

**Not ready for unconditional sign-off: runtime/upload/user attestation pending**

Documentation-only reconciliation requested at 22:35 Dhaka, 11 September 2026. No Figma, browser, image inspection, source-document edits, export, build or delegation in this audit. Latest reviewed repair evidence includes keypad recovery at 22:33:47. Concurrent changes after each report's snapshot are not certified.

Status: **TEXT VERIFIED** = inspected source content; **RECORDED PASS** = bounded technical evidence from the named owner; **PENDING** = not established; **N/A-S** = obsolete rule superseded by the official rubric, not a waived deliverable. Checked boxes certify only their stated scope, not implementation, user understanding or production conformance. The full item map remains in [review/final-requirements.md](review/final-requirements.md); its older defects are reconciled below, not bulk accepted.

| Area | Current status and evidence |
| --- | --- |
| Requirements/research | TEXT VERIFIED: separated FR/NFR, C1-C10, worker and gate personas, five problems, rainy delayed journey and assumptions in [01-understand/brief.md](01-understand/brief.md) and [02-research/research.md](02-research/research.md). Acceptance targets are not passed tests. |
| Auth | RECORDED PASS: [review/final-auth-repair.md](review/final-auth-repair.md) supersedes historical disconnected ingress, twelve unwired CTAs and five duplicate language handlers in [review/final-live-structure.md](review/final-live-structure.md). Its 67 assertions are symbolic, not browser runs. Latest [04-screens/screen-notes.md](04-screens/screen-notes.md) also records six auth frames, sign-out, 15 logical cases and five exclusive result cases; these overlapping checks are not summed. |
| Key system | RECORDED PASS: the final Authorized Recovery section of [review/final-key-system.md](review/final-key-system.md) supersedes that report's BLOCKED opening: two 56 x 72 masters; all 100 consumers restored to FILL and baseline dimensions. No new rendered/alternate-locale check is implied. |
| Supporting/low-fi | RECORDED PASS: [review/final-supporting-repair.md](review/final-supporting-repair.md) records 24 S-state families and bounded supporting-page checks. [review/final-lowfi-coverage.md](review/final-lowfi-coverage.md) closes the five missing auth sketches: six named auth sources covered, board 211:1815. These are explicitly late reconciliation, not historical Phase 3 delivery; final frozen inventory/export parity remains PENDING. |
| Design/system/handoff | TEXT VERIFIED and scoped records in [05-design-file/design-system-and-accessibility.md](05-design-file/design-system-and-accessibility.md) and [06-handoff/handoff.md](06-handoff/handoff.md): tokens, variants, contrast/alt notes, flows, dependencies, credits; redlines 58:3831 reported current at 1400 x 2704. Final PDF freshness/page count and whole-file quality remain PENDING. |
| Runtime | PENDING: [review/final-worker-journeys.md](review/final-worker-journeys.md) executed no journeys and blocked all nine groups. This establishes an environment limitation, not a product failure or pass. Parent owns live replay; current SOS is tap plus five-second countdown and explicit Cancel, not the report's historical hold test. |
| Rationale | TEXT VERIFIED: [design_decision.md](design_decision.md) contains the corrected DL-01-22 baseline and newer DL-23 map extension. Opening still says 22; exact final count and older S-10/SOS reconciliation prose need parent awareness. The rationale is not proof of runtime or client approval. |
| Release/attestation | PENDING: final package owner verification, reviewer sharing, registration/identity, integrity, upload and receipt. No all-clear or zero-errors claim. |

**N/A distinctions:** old seven-category weights, strict 3-5 total stories, exact 1-2-criteria quota, one-page brief quota, sitemap OR flow and only 3-5 wireframes are superseded. Official Phase 3 requires BOTH diagrams and EVERY committed screen plus a rejected Home alternative. Prototype belongs to Phase 5; Phase 6 still requires redlines AND a one-page developer note. Historical internal phase deadlines cannot be retroactively checked; they are not separate official upload deadlines. Registration exceptions remain applicability-unknown until the entrant confirms them. Audio and speeding are unimplemented commitments, not N/A or client-waived; dashboard/groceries alone are client-deferred. Production accessibility remains unverified, not waived.

Detailed unchecked combined items below remain open when any clause lacks proof. In section J, source-document presence does not prove inclusion in the final PDF being built by another owner. Next actions and residual findings: [review/final-qa-summary.md](review/final-qa-summary.md).

---

## A. Final Readiness Check

Run this short pass first, then use the detailed sections below to investigate gaps. A checked summary box does not replace the detailed evidence.

- [x] [M] Phase 1: Requirements brief separates FR/NFR and resolves named contradictions with reasoning; supporting stories and rough profiles exist. TEXT VERIFIED; official replacement for the old quotas.
- [x] [M] Phase 2: Worker and one secondary persona, visible Phase 1-to-2 comparison, rainy delayed-bus journey, five problems and explicit assumptions exist. TEXT VERIFIED.
- [ ] [M] Phase 3: Sitemap AND boarding/payment flow, wireframes for EVERY final committed screen, rejected Home alternative and final export parity verified. Diagrams and named state-family coverage are recorded; frozen-package parity is pending.
- [ ] [M] Phase 4: Finished, full-colour screens cover the whole main journey, with a story/problem rationale for each screen.
- [ ] [M] Phase 5: The final design file uses Auto Layout, resizes cleanly, and has consistent colours, fonts, components, and real content.
- [ ] [M] Phase 5: Palette, font set, reasons for choices, theme logo, and written accessibility notes are present.
- [ ] [M] Phase 6: The prototype clicks through the main journey end to end from the correct start point.
- [ ] [M] Phase 6: A one-page handoff note covers main flows, open questions, and developer information.
- [ ] [M] The design file has view access enabled and both design-file and prototype links have been tested.
- [ ] [M] Work is original, produced by the registered team within the contest window, with external material credited.
- [ ] [M] One complete package contains all six phases, with the correct team details and no missing attachments.
- [ ] [H] Upload is ready to begin at 10:40 PM, leaving time to resolve submission problems before 11:00 PM.

## B. Event and Team Compliance

### [M] Contest logistics

- [ ] Registration was completed by 7 September 2026.
- [ ] Every participant is a current AUST student.
- [ ] The registered team contains 1-3 members.
- [ ] All team members are registered correctly.
- [ ] If a registration mistake required re-registration, organisers were informed about cancellation before registering again.
- [ ] The team can attend the single continuous online sitting on 11 September 2026, 5:00 PM-11:00 PM.

Reference facts: There is no registration fee. Students from any department may participate, and cross-department teams are allowed.

### [H] Pre-flight and responsibilities

- [ ] Everyone understands the six-hour workflow and phase checkpoints.
- [x] Each remaining final-audit task has a named owner in the audit record above; this is an assignment record, not proof of completion.
- [ ] Tools, Figma access, and the document-export workflow are ready.
- [ ] The official submission mechanism, accepted file types, and size limits are known.
- [ ] A timer and phase alarms are ready, using Dhaka time.
- [ ] Latest organiser announcements have been checked for rule or submission changes.

## C. Six-Hour Timeline

| Phase | Time (Dhaka) | Duration | Core output |
| --- | --- | --- | --- |
| 1. Understand | 5:00 PM-5:40 PM | 40 min | Brief, stories, rough profiles |
| 2. Research | 5:40 PM-6:20 PM | 40 min | Scenario research, updated profile, problems/insights |
| 3. Plan | 6:20 PM-7:10 PM | 50 min | Sitemap or flow, wireframes |
| 4. Design | 7:10 PM-8:40 PM | 90 min | Finished screens for the whole main journey |
| 5. Tidy | 8:40 PM-9:50 PM | 70 min | Clean final design file and documented system/accessibility |
| 6. Handoff | 9:50 PM-10:40 PM | 50 min | Clickable prototype and handoff note |
| Submission buffer | 10:40 PM-11:00 PM | 20 min | Package, upload, confirmation |

The phase boundaries below are internal working checkpoints, not separate upload deadlines unless organisers announce otherwise. Theme release is at 5:00 PM, scenario release is at 5:40 PM, and the final upload cutoff is 11:00 PM.

- [ ] [H] Phase 1 completed by 5:40 PM.
- [ ] [H] Phase 2 completed by 6:20 PM.
- [ ] [H] Phase 3 completed by 7:10 PM.
- [ ] [H] Phase 4 completed by 8:40 PM.
- [ ] [H] Phase 5 completed by 9:50 PM.
- [ ] [H] Phase 6 completed by 10:40 PM.
- [ ] [H] Earlier phases did not consume the protected 90-minute Design block.
- [ ] [H] The final 20 minutes were reserved for packaging and submission, not extra design.
- [ ] [M] Final submission completed before 11:00 PM. Late uploads are not accepted.

## D. Phase 1 - Understand the Problem

**Window:** 5:00 PM-5:40 PM | 40 minutes | Theme only; the scenario has not been released yet.

### [M] One-page brief

- N/A-S: a separately rendered one-page brief is not required by the later requirements rubric; its page count is not certified.
- [x] A concise discovery summary exists, with separated FR/NFR and reasoned contradictions.
- [x] The problem is stated.
- [x] The intended users are identified.
- [x] Product goals are stated.
- [x] Limits and constraints are explicit.

TEXT VERIFIED: [01-understand/brief.md](01-understand/brief.md), discovery summary and sections 1-6. Constraints and acceptance requirements are not delivered capability claims.

### [M] User stories and acceptance criteria

- N/A-S: the old 3-5 total-story quota is superseded. Five primary stories remain, with secondary US-6 and later auth US-7; do not certify a five-story total.
- [ ] Every story follows: "As a [user], I want [goal], so that [benefit]."
- [ ] Every story identifies a clear user, goal, and benefit.
- [x] Story goals and acceptance targets are specific and checkable/testable; no test execution is implied.
- N/A-S: the old exact 1-2-criteria quota is superseded. Two bullets accompany each original primary story; later revisions/extensions are not certified against that quota.
- [x] Criteria specify observable state, input, contrast or service outcomes rather than generic satisfaction.

TEXT VERIFIED: brief section 7 and [02-research/research.md](02-research/research.md), section 7. Literal benefit-clause formatting is not uniform and remains an unchecked editorial safeguard, not a new official count requirement.

### [M] Rough user profiles

- [x] There are two rough user profiles: worker and security-gate officer.
- [x] Profiles explicitly distinguish supplied evidence, inferences and role hypotheses; no worker validation is claimed.
- [x] The original Phase 1 profiles are retained so they can be compared with Phase 2.

### [H] Quality checks

- [x] The problem is precise, and the primary target user is clear.
- [x] Goals connect directly to the problem.
- [x] Stories represent the core journey and map to named screen families in the structure/rationale documents.
- [x] Rough profiles are labelled as hypotheses; assumptions are distinguishable from evidence.
- [x] Questions needing further evidence are retained in the unknowns register, including U-1-U-15.

**[O] Tools:** ChatGPT, Claude, a notebook, or other normal tools. AI is optional.

## E. Phase 2 - Research Your Users

**Window:** 5:40 PM-6:20 PM | 40 minutes
**Critical context:** The scenario is released at the start of Phase 2 and serves as the substitute for real users.

### [M] Scenario research and short write-up

- [ ] The released scenario has been read and analysed by the team.
- [x] Relevant supplied-pack evidence/information is extracted and source-tagged in the research write-up.
- [x] A short research write-up records what was learned.
- [x] The write-up identifies stakeholder synthesis, illustrative personas and unmeasured frequencies; it does not claim interviews or measured outcomes.
- [x] Findings are mapped to later product decisions.

TEXT VERIFIED: [02-research/research.md](02-research/research.md), sections 1-9. Entrant confirmation of the latest released scenario and their own analysis remains separate.

### [M] Updated user profile

- [x] The Phase 1 rough profile is available for comparison.
- [x] The profile is updated using information from the supplied scenario.
- [x] A visible Phase 1-to-Phase 2 comparison explains what changed and why.
- [x] Source-supported changes cite evidence; design additions and remaining assumptions are labelled separately.

### [M] Main problems/insights

- [x] There are five main problems/insights.
- [x] Each problem/insight is specific.
- [x] Each problem/insight cites the scenario; inferred consequences are distinguished.
- [x] Each problem/insight influences a documented design decision or priority.
- [x] The reasoning chain is traceable: Scenario -> Insight -> Problem -> Design decision.

### [H] Evidence and reasoning checks

- [x] Scenario quotations or references make the source of findings easy to inspect.
- [x] The comparison distinguishes confirmed/source-supported, changed, added and still-assumed information, including corrected attributions; no artificial dropped persona is required.
- [x] Confirmed means supported by stakeholder text, not worker-validated; unresolved assumptions remain explicit.
- [x] Evidence, inference, assumption, and design implication are distinguished in the synthesis.
- [x] User stories contradicted by the scenario have been revised, with the revision recorded.
- [ ] If AI was used, the team's evaluation and edits are visible and explainable.

**Judging focus:** Judges explicitly check the Phase 1-to-Phase 2 profile/problem-list evolution and whether later decisions derive from research.

**[O] Tools:** AI may assist research analysis, but its use is optional and does not replace the team's own thinking.

## F. Phase 3 - Plan the Structure

**Window:** 6:20 PM-7:10 PM | 50 minutes

### [M] Sitemap AND Core Flow

- N/A-S: sitemap OR flow is superseded; both are mandatory under the later rubric.
- [x] Sitemap and boarding/payment flow are recorded in the structure source and supporting-page report; latest auth flow 231:1772 is recorded in screen notes.
- [x] Main sections of the app are represented in the textual IA.
- [x] Relationships between sections are explained in the textual IA.
- [x] The main user journey is represented, including current Language -> A-01 -> Home entry.
- [ ] Navigation is logical.
- [x] The structure connects to the user stories through its traceability table.

TEXT VERIFIED / RECORDED PASS: [03-structure/structure.md](03-structure/structure.md), sections 1-5 and 9; [review/final-supporting-repair.md](review/final-supporting-repair.md); [04-screens/screen-notes.md](04-screens/screen-notes.md). Navigation usability/runtime remains pending.

### [M] Rough wireframes

- N/A-S: 3-5 wireframes is superseded by EVERY committed screen, not a reduced coverage target.
- [x] Rejected map-first Home alternative R-01 and its rationale are recorded; supporting report identifies it in board 14:2.
- [x] Recorded low-fi coverage includes 24 S-state families and six named auth references; auth additions are honestly labelled late reconciliation.
- [ ] Every frozen committed screen and required state has a matching readable low-fi artifact in the final package.
- [ ] Each wireframe corresponds to a main user story.
- [ ] Together, the wireframes support the intended journey.
- [ ] Layout and structure are understandable.
- [x] Wireframe-to-story mapping is recorded in structure section 5; new auth groups explicitly display US-7 / Authentication / DL-22.

### [H] Planning quality

- [x] The documented mapping runs User story -> Wireframe, with late auth additions identified separately.
- [ ] Screen IDs or names remain consistent across the flow, wireframes, final screens, and prototype.
- [x] The specified main journey has a named start, progression and completion point; actual completion remains a runtime gate.
- [ ] Low-fidelity planning has not consumed the Design block with unnecessary visual polish.

**[O] Accepted methods:** Hand sketches, photos of sketches, PDF, Figma low-fi, Relume, Google Stitch, or other design tools. Rough/low-fidelity is acceptable; wireframes do not need to be beautiful.

## G. Phase 4 - Design the Screens

**Window:** 7:10 PM-8:40 PM | 90 minutes | **Screen Design: 25% of the total score**

### [M] Finished screens and journey coverage

- [x] Full-colour waiting, in-transit and SOS screens exist in the recorded design inventory; visual approval is not rerun by this text audit.
- [ ] Screens cover the whole main journey established in Phases 1-3.
- [x] The design inventory extends beyond Home to boarding, tickets, transit, safety, route/balance, language and authentication.
- [ ] No critical main-journey screen is missing.
- [ ] Every screen supports a user story OR addresses a Phase 2 problem/insight.

### [M] Design rationale note

- [x] A screen-rationale note exists in [04-screens/screen-notes.md](04-screens/screen-notes.md), with the judge-facing argument in [design_decision.md](design_decision.md).
- [ ] Every relevant screen is mapped to the user story it serves OR the Phase 2 problem it solves.
- [x] The rationale explains evidence, needs, alternatives and tradeoffs, not just appearance.

### [H] Design quality

- [ ] Visual language is consistent across the journey.
- [ ] Information hierarchy is clear.
- [ ] Important tasks and actions are easy to understand.
- [x] Documented screen decisions address the identified problems; effectiveness remains untested with workers.
- [ ] Coverage and usability are complete, not sacrificed for one polished screen.
- [ ] Unnecessary screens and features have not consumed the protected 90 minutes.

**[O] Tools:** Figma, Adobe XD, Flowstep AI, or other design tools.

## H. Phase 5 - Build a Clean Design File

**Window:** 8:40 PM-9:50 PM | 70 minutes
**Purpose:** Make existing screens consistent and developer-friendly. Do not expand the product during cleanup.

### [M] Auto Layout and resizing

- [x] Auto Layout use is recorded in the original-screen and recovered-key inspections; this is structural evidence, not all-width conformance.
- [ ] Screens resize cleanly when checked.
- [ ] Components and layouts behave sensibly during resizing.
- [ ] No obvious clipping, overlap, or broken resizing remains.

### [M] Colour system

- [x] The colour palette is written down.
- [x] Main colours are identified.
- [x] Supporting colours are identified where applicable.
- [x] Reasons for the colour choices are documented.

### [M] Typography system

- [x] The font set is written down.
- [x] Fonts used in the design are identified: Archivo, Inter and Noto Sans Bengali; the live-structure report confirms these families.
- [x] Reasons for the font choices are documented.

TEXT VERIFIED: [05-design-file/design-system-and-accessibility.md](05-design-file/design-system-and-accessibility.md), sections 1-3. Named variables and seven unique variant sets are also recorded in [review/final-live-structure.md](review/final-live-structure.md); its missing text-style/literal-stroke findings are not presumed fixed.

### [M] Real content and theme logo

- [ ] Every screen contains real, meaningful product text.
- [ ] No lorem ipsum remains.
- [ ] No placeholder copy or meaningless filler remains.
- [ ] The theme's logo is used appropriately in the design.

### [M] Written accessibility notes

- [x] Colour contrast considerations are explicitly documented.
- [x] Alt text considerations are explicitly documented, including geographic Map/Stops.
- [x] Other accessibility choices are explicitly documented, including targets, order, labels, errors and authentication requirements.
- [ ] Notes describe actual design choices, not unsupported claims that the design is accessible.

### [H] Accessibility verification

- [x] Selected text/background contrast pairs have recorded measurements, ratios and results; this audit did not recompute them.
- [x] The recorded contrast table states WCAG AA thresholds of 4.5:1 for normal text and 3:1 for qualifying large text; this is not a whole-app pass.
- [ ] Essential UI boundaries and graphical information are checked against the applicable 3:1 non-text contrast requirement.
- [x] Proposed alt text and decorative classifications are documented for the listed assets; native announcements remain untested.
- [x] Scoped target/spacing checks are recorded, including all 100 recovered keys. Figma pixels do not certify native Android dp or one-handed reach.
- [x] Focus/reading order, labels and error recovery are considered and documented; keyboard/TalkBack execution remains pending.
- [x] The documented status system combines words, icons, position and colour; comprehension is not a tested outcome.
- [x] Scenario-specific accessibility proposals cite reading/device/rain/crowding evidence and identify inferred one-handed use.

Evidence: design-system section 6; [review/final-key-system.md](review/final-key-system.md), final recovery; auth scope in [04-screens/screen-notes.md](04-screens/screen-notes.md). Broad production accessibility and all-frame layout boxes remain unchecked. Historical absolute type/contrast claims are not adopted as current conformance evidence.

### [M] File cleanliness and consistency

- [ ] Colours are consistent.
- [ ] Fonts are consistent.
- [ ] Spacing is consistent.
- [ ] Components are consistent.
- [x] Recorded pages separate source screens, system, supporting boards and archive; current auth/low-fi IDs are explicitly named.
- [x] Source and low-fi screen names/IDs are recorded clearly enough for targeted inspection; cross-document legacy-name drift is separately pending.
- [ ] Unnecessary junk, abandoned screens, and confusing duplicates are removed from the final presentation.
- [ ] The file is understandable for developer handoff.

### [H] Scope discipline

- [ ] Existing screens have been polished rather than expanding the product with unnecessary new screens.
- [ ] Main-journey omissions, if any, have been resolved before optional polish.

## I. Phase 6 - Prototype and Handoff

**Window:** 9:50 PM-10:40 PM | 50 minutes

Official grading correction: the prototype checks below belong to Phase 5; Phase 6 requires Home redlines and a one-page developer note. Historical section placement is retained for audit traceability.

### [M] Clickable prototype

- [x] Boarding and independent SOS prototype links exist in [SUBMISSION.md](SUBMISSION.md) and [design_decision.md](design_decision.md).
- [ ] The link works for the intended reviewer.
- [ ] The correct screens are connected.
- [ ] The main journey is clickable.
- [ ] Interactions make sense.
- [ ] The start point is correct.
- [x] Recorded primary start IDs are Language 30:642 and In transit 29:646; repaired Continue 30:674 enters auth 164:1944. This is source evidence only.
- [ ] The complete journey has been tested end to end.
- [ ] There are no dead ends preventing completion of the main flow.

**Critical:** A prototype that does not click through end to end counts as incomplete, even if the screens are beautiful and the file is clean.

**[O] Accepted options:** Figma Prototype, Claude Artifacts, or a similar clickable prototype.

### [M] One-page handoff note

- [ ] A one-page handoff note exists.
- [x] Developer note source exists; its final rebuilt one-page layout is still pending package verification.
- [x] Home redlines are recorded at board 58:3831, with current Home-copy text match and 1400 x 2704 dimensions; export freshness remains pending.
- [x] The main user flow is documented.
- [x] Important paths are explained, including authentication, boarding, SOS and sign-out.
- [x] Remaining uncertainties are listed as open questions.
- [x] Outstanding product/business decisions are identified.
- [x] Important implementation information is provided.
- [x] Interaction behaviour is described, distinguishing demo countdown from unimplemented hold/release.
- [x] Relevant design details and implementation dependencies are included.

TEXT VERIFIED: [06-handoff/handoff.md](06-handoff/handoff.md). Redline evidence: [review/final-supporting-repair.md](review/final-supporting-repair.md). Open fare/security/session/service policies prevent unconditional production-build readiness.

### [H] Handoff usability

- [x] Named flows have source-screen references in the handoff, screen notes and structure appendix; runtime reachability remains separate.
- [x] Covered demo states, unimplemented commitments and client-deferred modules are distinguished.
- [x] Credits and AI-assistance disclosure are present in the handoff/design-system/rationale sources; final PDF retention remains pending.
- [ ] Someone other than the designer can understand the handoff without verbal explanation.

## J. Submission Buffer and Package

**Window:** 10:40 PM-11:00 PM | 20 minutes
**Rule:** One package containing all six phases. Do not use this buffer as extra design time.

### [M] Phase 1 attachments

- [ ] Brief document included.
- [ ] User stories and their acceptance criteria included.
- [ ] Rough user profiles included.

### [M] Phase 2 attachments

- [ ] Scenario research notes included.
- [ ] Updated user profile and Phase 1-to-2 comparison included.
- [ ] The 3-5 problems/insights included.

### [M] Phase 3 attachments

- [ ] Sitemap OR flow diagram included.
- [ ] Rough wireframes for 3-5 main screens included; images or PDF are acceptable.

### [M] Phase 4 attachments

- [ ] Finished screens covering the whole main journey included.
- [ ] Screen-to-user-story/problem rationale note included.

### [M] Phase 5 file and documentation

- [ ] Final Figma OR Adobe XD file link included.
- [ ] View access enabled.
- [ ] Auto Layout and resizing checks completed.
- [ ] Colour palette and font set documented, with reasons for choices.
- [ ] Real text and the theme logo present.
- [ ] Written accessibility notes included.

### [M] Phase 6 attachments

- [ ] Clickable prototype link included.
- [ ] One-page handoff note included.

### [M] Before clicking Submit

- [ ] Every required artifact exists and is included in the package.
- [ ] Every submitted URL opens the intended artifact.
- [ ] Design-file view access works for reviewers, not only the owner's account.
- [ ] Prototype access works for reviewers.
- [ ] No missing attachments, broken URLs, or stale links remain.
- [ ] Package and form identify the correct registered team.
- [ ] The submission form is complete.
- [ ] Files comply with the official submission mechanism and any announced format/size requirements.

### [H] Final operational checks

- [ ] Links have been tested while signed out or in a private/incognito window.
- [x] Submission form, design and both prototype links, plus build/output references, are recorded in [SUBMISSION.md](SUBMISSION.md); link availability is not certified here.
- [ ] Upload began at 10:40 PM, leaving recovery time.
- [ ] Submission success/receipt was confirmed and a confirmation screenshot retained.
- [ ] Local copies of the submitted package and links are retained.

### [M] Absolute cutoff

- [ ] Everything was submitted before 11:00 PM on 11 September 2026 (Dhaka).

**Late uploads are not accepted. Starting an upload before the cutoff is not the same as completing submission.**

## K. Judging Rubric - 100%

Use this scoring pass after the detailed deliverable checks. These are judging categories, not guaranteed scores.

| Category | Weight | What to verify |
| --- | --- | --- |
| Phase 1: Requirements and discovery | 15% | Separated FR/NFR; named contradictions resolved with reasoning |
| Phase 2: Research and validation | 15% | Worker plus one secondary persona; rainy delayed-bus journey; explicit assumptions |
| Phase 3: IA and low-fi | 15% | Sitemap AND boarding/payment core flow; EVERY committed screen; one rejected Home alternative |
| Phase 4: High-fidelity UI | 25% | Waiting, active in-transit and SOS; high contrast and one-handed use |
| Phase 5: Figma ecosystem | 15% | Named variables, variants, Auto Layout; boarding/payment AND SOS prototypes |
| Phase 6: Handoff | 15% | Home redlines AND one-page developer note |
| Total | 100% | Six official categories; not an awarded or predicted score |

Authority: [SPRINT-OPS.md](SPRINT-OPS.md), section 0. N/A-S: old 10/15/15/25/15/10/10 allocation, separate accessibility 10%, prototype-in-Phase-6 placement and interchangeable XD-only ecosystem. Accessibility is retained within Phase 4 and the detailed safeguards above.

- [x] Requirements/discovery source evidence reviewed against official Phase 1.
- [x] Research/persona/journey source evidence reviewed, including the Phase 1-to-2 delta.
- [x] Structure/wireframe mappings and latest auth coverage reports reviewed; final frozen artifact parity is not certified.
- [ ] Screen Design reviewed for whole-journey coverage as well as visual quality.
- [ ] Design File Quality checked in the actual editable file.
- [ ] Prototype and Handoff tested/read, not merely confirmed to exist.
- [ ] Accessibility and Usability checked against written notes and the actual screens.

**Strategy:** Screen Design is the largest single category at 25%. The remaining categories total 75%, so process, evidence, file quality, handoff, and accessibility must not be neglected.

## L. General Rules and Disqualification Risks

### [M] Theme and organiser guidance

- [ ] The theme/brief released at contest start is followed.
- [ ] The design complies with organiser guidelines and any announced updates.

### [M] Originality and contest window

- [ ] Work is original.
- [ ] Work is produced by the registered team.
- [ ] Contest work is produced within the contest window.
- [ ] No pre-made templates from before the event are used.

### [M] AI and explainability

- [ ] The team's own thinking remains evident.
- [ ] Team members can explain any design decision if a judge asks.
- [ ] Where AI was used, its suggestions were evaluated and edited rather than blindly accepted.

AI is allowed at every phase and is optional. These checks do not require AI use.

### [M] Plagiarism and attribution

- [ ] No plagiarism or copying of someone else's work is present.
- [ ] No uncredited work from others is present.
- [ ] External material is appropriately credited wherever applicable.

### [H] Attribution verification

- [ ] Each external font, icon set, image, illustration, or other asset has an identifiable source and applicable licence/permission recorded.
- [ ] Credits are included in the package or clearly linked from the handoff.
- [ ] Required source credits have not been lost during export or packaging.

**Disqualification risk:** Plagiarism or uncredited work can disqualify the submission.

## M. Traceability Check

The evidence chain should make "Why did you design it this way?" easy to answer:

Phase 1 user story -> Phase 2 scenario evidence -> Problem/insight -> Phase 3 wireframe -> Phase 4 final screen -> Phase 6 prototype flow

For each major design decision, also check:

Problem -> Evidence -> Insight -> User need -> Design decision -> Expected benefit

- [x] Main user stories map to the relevant research problems/insights in the research and structure tables; later auth is tagged as a design addition.
- [x] Research problems/insights point to scenario evidence.
- [x] Wireframe/story mappings are recorded, including US-7 on all five new auth groups and the preserved A-01 reference.
- [ ] Final screens map to wireframes and to a user story OR research problem.
- [ ] Prototype paths connect the final screens into the intended main journey.
- [x] Major design decisions have written evidence, rationale, alternatives and limitations in [design_decision.md](design_decision.md); entrant explainability remains a personal attestation.
- [ ] Traceability is visible in submitted artifacts, not only remembered by the team.

## N. The Ten Things Not to Miss

This is the final rapid pass immediately before upload.

- [x] Phase 2 visibly updates the Phase 1 profile using scenario evidence, with source support, changes and assumptions distinguished.
- N/A-S: old story/criteria quotas; use official requirements evidence and the qualified story checks in section D.
- [x] There are five source-tagged scenario-derived problems/insights.
- [ ] BOTH diagrams and low-fi for EVERY frozen committed screen plus rejected Home are included in the final package; old OR/3-5 wording is superseded.
- [ ] Finished screens cover the whole main journey, not one attractive screen.
- [ ] Every relevant screen has a user-story/problem rationale.
- [ ] Auto Layout, real text, palette, fonts, reasons for choices, theme logo, and written accessibility notes are present.
- [ ] The prototype works end to end.
- [ ] The final design file has view access enabled, and both design-file and prototype links work for reviewers.
- [ ] The complete six-phase package has been submitted before 11:00 PM, with submission confirmed.

**Working principle:** Understand -> Evidence -> Structure -> Design -> Polish -> Prove and hand off.
