# Final Requirements QA

11 September 2026 | Dhaka | Documentation-only review requested at 21:51; cutoff 23:00.

**Verdict: BLOCKED for final submission sign-off, not for lack of design rationale.** All six phase source documents exist. Mandatory image categories exist. Final editable-file coverage, prototype replay, export freshness, registered identity and successful upload remain unverified. No Figma/browser access, image inspection, delegation or build was performed in this review. No checklist boxes were changed. Only this report and the existing rationale were edited.

## Authority And Evidence

The later official problem-statement rubric recorded in [SPRINT-OPS.md](../SPRINT-OPS.md), section 0, takes precedence over [checklist.md](../checklist.md) and older operational bullets within SPRINT-OPS itself. Official delivery: **one PDF containing all phases plus design/prototype links**, uploaded through the [official submission form](https://forms.gle/XYuDchjGrAy3BNnN9) before 23:00. Upload receipt, form size limits and latest announcements still need the entrant's confirmation. Internal phase times are not separate submission deadlines.

Status key: **E** = evidence exists in inspected local source, not a live pass; **R** = scoped check recorded by another session, not rerun here; **V** = final artifact/interaction verification required; **M** = missing or contradictory documentary/package evidence; **U** = user attestation or external confirmation required; **S** = superseded by later official requirement; **O** = optional, no mandatory gap. Mixed statuses deliberately preserve the distinction between a specification and proof.

| Key | Inspected source and evidence |
| --- | --- |
| B | [01-understand/brief.md](../01-understand/brief.md): discovery summary, FR/NFR, C1-C10, five primary stories, two provisional profiles, U-1-U-14; section 4.3 FARE-1-5. |
| R | [02-research/research.md](../02-research/research.md): source analysis, five ranked problems, worker/gate personas, visible profile evolution, rainy delayed journey, assumptions, proposed falsification plan. |
| T | [03-structure/structure.md](../03-structure/structure.md): sitemap/flows, inventory, wireframe specifications, R-01 rejected Home, story mapping. Predates S-10 entry. |
| UI | [04-screens/screen-notes.md](../04-screens/screen-notes.md): screen-to-story/problem rationale, historical baseline, later ticket and SOS layout records. |
| DS | [05-design-file/design-system-and-accessibility.md](../05-design-file/design-system-and-accessibility.md): variables, fonts, variants, scoped resize/contrast/locale checks, alt text and credits. |
| H | [06-handoff/handoff.md](../06-handoff/handoff.md): developer note, flow/contracts, open policy questions and credits. |
| D | [DECISIONS.md](../DECISIONS.md): DL-01-22, service/role appendix and authentication contract. [design_decision.md](../design_decision.md): consolidated judge-facing rationale and qualifications. |
| Q | [review/prototype-repair-coordination.md](prototype-repair-coordination.md): saved-action repairs/checks, five-second demo countdown, incomplete final browser replay. |
| P | [HANDOFF.md](../HANDOFF.md): historical and latest scoped repair/build records; newest resume records nine sources, 13 exports and a 124-page build, not submission sign-off. |
| PK | [submission/00-cover.md](../submission/00-cover.md), [submission/GreenCommute-Submission.md](../submission/GreenCommute-Submission.md), [SUBMISSION.md](../SUBMISSION.md), [tools/render-submission.cjs](../tools/render-submission.cjs), [tools/build-submission.ps1](../tools/build-submission.ps1): actual inclusion/configuration and current metadata gaps. |

## Official Rubric

| Phase / marks | Concrete evidence | Remaining requirement |
| --- | --- | --- |
| 1 / 15 | B separates functional/non-functional requirements and explains contradictions; concise discovery summary exists. | V: rendered summary readability. M: later authentication, fare and visual specifications still conflict with earlier prose. |
| 2 / 15 | R contains worker + security-gate personas, rainy delayed-bus journey and explicit assumptions. | E: no invented interviews or measured outcomes needed. U: entrant confirms final source/scenario and can explain synthesis. |
| 3 / 15 | T plus sitemap, boarding-flow and three wireframe-strip PNGs exist; rejected map-first Home documented. | V/M: **every committed screen**, including S-10 and current added states, must have matching low-fi evidence; current exports do not establish this. Both sitemap AND core boarding/payment flow required. |
| 4 / 25 | Waiting, active in-transit and SOS PNGs exist; UI provides rationale; DS records selected contrast/target checks. | V/M: full journey exports and final dim-screen/one-handed checks, including changed keypad, language, authentication and safety states. |
| 5 / 15 | DS records named variables, components with variants and Auto Layout; Q records saved-action checks for both prototype journeys. | V: current editable file, boarding/payment and SOS end-to-end replay, current language/reflow and reviewer access. A countdown is not a verified hold. |
| 6 / 15 | Home redlines PNG, H and one-page handoff PDF exist; P records one-page A4/11 pt verification. | V/M: synchronize redlines and H with settled Home/SOS/auth/fare contracts; rebuild/recheck the note after edits. Open service policies mean production is not build-ready without client answers. |

## Entire Checklist Map

Item numbers below are **1-based checkbox ordinals within the named subsection**, or within the whole section where it has no checkbox subsections. Each range covers every item in that range. This maps all checkbox items, optional-method notes and the old rubric without changing their completion state.

### A. Final Readiness

| Items | Status | Evidence / unresolved check |
| --- | --- | --- |
| 1 Phase 1 | E/V | B contains summary, five primary stories and two hypotheses; exact story syntax/count of criteria and one-page rendering qualified under D below. |
| 2 Phase 2 | E | R synthesis, profile comparison and five problems. |
| 3 Phase 3 | E/S/V | T + five planning PNGs; official requires both diagrams and every committed screen, not only 3-5. |
| 4 Phase 4 | E/V/M | UI rationale + seven hi-fi PNGs; whole current journey export coverage incomplete. |
| 5 Clean design file | R/V | DS historical variable/layout checks; current file not inspected. |
| 6 System/logo/a11y | E/R/U | DS palette/fonts/reasons/alt notes; original mark declared, organiser acceptance unconfirmed. |
| 7 End-to-end prototype | R/V | Q saved-action evaluation; final replay and start unverified. |
| 8 Handoff | E/R/V | H and recorded one-page PDF; current contract/redline synchronization pending. |
| 9 View access/links | R/V | Earlier access checks do not establish final reviewer access. |
| 10 Originality/window/credits | E/U | D and DS attribution/provenance; registered entrant and window require attestation. |
| 11 Complete/team package | E/M/U/V | PK includes nine sources/13 exports; team metadata and coverage gaps below. |
| 12 Upload ready 22:40 | U/V | Internal target, not evidence of readiness or upload. |

### B. Event And Team Compliance

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Contest logistics 1-4: registration deadline, AUST status, 1-3 members, correct registration | U | Cover identifies Mohammed Tayeb/CSE/AUST; registration and current student status not verified. AI assistant is not a registered teammate. |
| Contest logistics 5: re-registration cancellation | U | Confirm applicability; no evidence of a registration mistake. |
| Contest logistics 6: continuous sitting attendance | U | SPRINT-OPS specifies the sitting; attendance cannot be inferred from documents. |
| Pre-flight 1-2: workflow understood, owners | E/U | SPRINT-OPS schedules responsibilities; Q records ownership. Entrant understanding/actual assignments require confirmation. |
| Pre-flight 3: tools/access/export | R/V | P records successful build; final Figma access still pending. |
| Pre-flight 4: submission mechanism/types/limits | E/M/U | Official PDF/form known in SPRINT-OPS; PK form field stale; file-size limit unconfirmed. |
| Pre-flight 5-6: alarms/Dhaka clock/latest announcements | U | Planned alarms are not proof they ran; confirm latest organiser notice. |

Reference facts (no fee, cross-department eligibility) are recorded in SPRINT-OPS, not independently reverified.

### C. Six-Hour Timeline

| Items | Status | Evidence / unresolved check |
| --- | --- | --- |
| 1-6: each phase completed at its checkpoint | U/S | Internal safeguards only; official single upload supersedes any implied per-phase submission deadline. Phase labels are not timestamp proof. |
| 7-8: protected Design block and final buffer | U | Actual time use requires entrant/version-history evidence. |
| 9: final submission before 23:00 | U/V | No receipt inspected. Starting upload is not completion. |

### D. Phase 1

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| One-page brief 1 | E/V/S | B has a concise discovery summary plus extended evidence. No separately verified one-page brief; later rubric asks requirements, not a page limit. |
| One-page brief 2-5: problem/users/goals/constraints | E | B sections 1-6 and discovery summary. |
| Stories 1: 3-5 total | E/M | Five primary US-1-5 in B; R adds secondary US-6. Distinguish five core stories from secondary extension; strict overall 3-5 total not met. Official rubric has no stated count. |
| Stories 2: exact As/I want/so that format | M | US-4 and several R rewrites omit the literal benefit clause; meaning is often present but strict format is not satisfied. |
| Stories 3-4: clear user/goal/benefit; testable | E/V | B/R specify roles, goals and target outcomes; comprehension/speed remain proposed checks, not passes. |
| Stories 5: 1-2 criteria per story | E/M | B has two bullets per primary story; some are conditional targets, and later rewrites combine multiple conditions. Do not certify exact normalized count for all six. |
| Stories 6: observable criteria | E | Contrast, state, input and delivery criteria are concrete targets; service dependencies explicitly open. |
| Profiles 1-3: count, initial hypotheses, retained original | E | B contains W/S provisional profiles; R preserves visible comparison. |
| Quality 1-4: precision, goals, journey stories, hypothesis labels | E | B source map/problem/requirements/stories/profiles, with R/D qualifications. |
| Quality 5: Phase 2 questions | E | B U-1-14 retained. |
| Optional tools note | O/E | AI usage disclosed in D/H/cover; optional method, not a deliverable gate. |

### E. Phase 2

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Scenario 1: team read released scenario | E/U | B/R analyse supplied pack; entrant must confirm no later scenario superseded it. |
| Scenario 2-5: extraction/write-up/authentic source/downstream effect | E | R F1-F19, synthesis, five problems and decision mappings; no claimed interviews or measured frequencies. |
| Updated profile 1-4: original/update/comparison/evidence | E | B profiles + R section 4 change tables for worker and gate receiver. |
| Insights 1-5: 3-5/specific/source-backed/influential/traceable | E | R section 3 has five ranked problems; sections 6-8 link evidence, stories and design. |
| Evidence checks 1-4: references/change labels/honesty/E-I-A-D | E | R source excerpts, supported/changed/added/still-assumed fields; withdrawn inferences explicit. No artificial dropped persona required. |
| Evidence checks 5: revise contradicted stories | E | R section 7 records source cross-check and rewritten US-2/3/4 plus US-6. |
| Evidence checks 6: visible AI evaluation | E/U | D revision history and rejected alternatives; entrant must explain own evaluation. |
| Optional AI note / judging evolution emphasis | O/E | AI optional; profile evolution is visibly documented, not invented participant validation. |

### F. Phase 3

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Sitemap/flow 1 | E/S | T plus both diagram PNGs; official requires both, not OR. |
| Sitemap/flow 2-6: sections/relationships/journey/navigation/stories | E/V/M | T maps original journey; live navigation unverified and S-10 missing from current textual IA. |
| Wireframes 1: 3-5 screens | E/S/V | Three strip files exist, not three individual screens; official requires every committed screen. Current added-state coverage not established. |
| Wireframes 2-5: story correspondence/journey/layout/visible mapping | E/V | T specifies each original screen and mapping; strip readability and updated mapping need parent inspection. |
| Quality 1: story-to-wireframe direction | E | T sections 3-5. |
| Quality 2: consistent IDs | E/M/V | Original S-IDs retained; S-10 and later safety/route states need inventory/export reconciliation. |
| Quality 3: clear start/progression/completion | E/M/V | T specifies flow; D changes entry to Language > Sign in > Home; replay pending. |
| Quality 4: time discipline | U | No timestamp audit. |
| Optional methods note | O/E | Figma low-fi and PNG exports recorded; method choice itself is not a gap. |

### G. Phase 4

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Screens 1: finished full-colour | E/R/V | Seven hi-fi PNGs exist and P records prior visual work; no images inspected here. |
| Screens 2-4: complete journey/not homepage-only/no critical omissions | E/M/V | Waiting/ticket/transit/SOS evidence exists; keypad, scan, language/auth and secondary-state exports are missing from submission export folder. |
| Screens 5: every screen justified | E/M | UI/T map baseline screens; S-10 rationale in D, but expanded inventory not fully synchronized. |
| Rationale 1-3: note/mapping/why | E | UI and consolidated D explain need, evidence and tradeoffs; no unnecessary rewrite. |
| Quality 1-5: consistency/hierarchy/actions/problem fit/coverage | R/V | DS/P scoped records only; final whole journey and changed states need inspection. |
| Quality 6: no unnecessary time-consuming features | U | Scope rationale exists in D; actual time use not verified. |
| Optional tools note | O/E | Figma used; no tool choice requirement waived. |

### H. Phase 5

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Auto Layout 1-4: use/resize/behaviour/no clipping | R/V | DS baseline and P keypad/ticket/SOS scoped checks; current expanded file requires verification. |
| Colour 1-4: palette/main/support/reasons | E | DS primitive/semantic tables; D qualifies unsupported light-theme superiority. |
| Typography 1-3: set/used fonts/reasons | E/R | DS Archivo, Inter, Noto Sans Bengali; D distinguishes 64 px ticket headings from historic hero floors. |
| Content/logo 1-3: meaningful text/no lorem/no filler | E/R/V | B/T illustrative content plan, DS historical zero-placeholder audit; final screens not rescanned. Persona placeholder names are openly illustrative, not proof of UI filler. |
| Content/logo 4: theme logo | E/U/V | Original wordmark declared; no supplied logo recorded. Organiser acceptance and actual current placement unverified. |
| Written a11y 1-3: contrast/alt/other choices | E | DS section 6 records ratios, labels, targets, order, errors and non-colour cues. |
| Written a11y 4: actual choices, not blanket claims | E/M | D/DS distinguish scoped checks from conformance; old absolute legibility/device assertions remain elsewhere. |
| A11y verification 1-2: measured ratios/AA thresholds | R/V | DS table records selected pairs and criteria; not recomputed or applied to every final screen here. |
| A11y verification 3: essential UI 3:1 | E/R/V | DS classifies border as decorative and records icon/ring checks; current essential boundaries need visual review. |
| A11y verification 4: alt/decorative classification | E/V | DS alt table exists; new route/auth assets may need additions. |
| A11y verification 5: target size/spacing | R/V | DS latest chip master + 32 instances at 122 x 56; P keypad and ticket checks scoped, not native-device proof. |
| A11y verification 6-8: order/labels/errors, non-colour meaning, source grounding | E/V | DS and B/R evidence; runtime focus/TalkBack and comprehension not tested. |
| Cleanliness 1-6: colours/fonts/spacing/components/layers/names | R/V | DS baseline hygiene and reuse; final editable inventory not inspected. |
| Cleanliness 7: junk/abandoned/duplicates removed from presentation | R/V | P/Q record archiving drafts and removal of inherited flow starts; final presentation unverified. |
| Cleanliness 8: developer-understandable | E/M/V | DS/H/D support handoff; current auth/fare/SOS contradictions still impede a single implementation contract. |
| Scope 1-2: polish existing/resolve omissions first | E/U/V | D documents scope; later authorised auth must now be included consistently, not silently waived. |

### I. Phase 6

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Prototype 1: link exists | E | Cover/H/D contain design and boarding links; D also includes independent SOS link. |
| Prototype 2: reviewer access | V | Final signed-out access not verified. |
| Prototype 3-6: connections/clickability/sensible interactions/start | R/V | Q saved-action checks and two original starts; later auth changes need replay. |
| Prototype 7-8: tested end-to-end/no blocking dead ends | R/V | Q structural snapshot had zero dead controls/invalid destinations; complete browser replay explicitly pending. |
| Prototype phase placement / optional tools | S/O | Official grades boarding AND SOS prototype in Phase 5; Figma is the chosen method. |
| Handoff 1: one-page note | E/R/V | H and PDF exist; P records exactly one A4 page, 18 blocks; rebuild after updates. |
| Handoff 2-3: main/important paths | E/M | H lists original paths, omits S-10 entry. |
| Handoff 4-5: open questions/business decisions | E | H/D/B list top-up, assignment, security and telemetry dependencies; add latest fare coverage/cutoff qualification to settled handoff. |
| Handoff 6-8: implementation/interaction/design detail | E/M/V | H/DS/D/redlines cover contracts and tokens; countdown/hold/auth/fare consistency still unresolved. |
| Usability 1: match flow to screens | E/M/V | Existing S-IDs traceable; expanded-state mapping/current starts pending. |
| Usability 2: covered vs excluded | E | H/D distinguish worker prototype, service contracts, client deferrals and entrant-deferred FR-12. |
| Usability 3: credits/AI easy to find | E/M | H/DS/cover/D contain credits; asset-specific sources and new map provenance need reconciliation. |
| Usability 4: independent understanding | E/V | Written material exists; no new independent handoff comprehension test performed. |

### J. Submission Buffer And Package

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Phase 1 attachments 1-3 | E/V | B included in Appendix A: brief, stories/criteria and rough profiles; final rebuilt PDF must retain latest source. |
| Phase 2 attachments 1-3 | E/V | R included in Appendix B: research, delta/personas, five problems. |
| Phase 3 attachments 1-2 | E/S/V/M | T Appendix C plus five planning PNGs; official both diagrams/every committed screen rule applies. Missing current-state low-fi coverage unresolved. |
| Phase 4 attachments 1 | E/M/V | Seven hi-fi exports included, not the whole current committed journey. |
| Phase 4 attachments 2 | E/V | UI Appendix D + rationale Appendix I; later state mapping needs reconciliation. |
| Phase 5 file/docs 1 | E/S | Figma link included; official specifically requires Figma ecosystem, not an interchangeable XD-only file. |
| Phase 5 file/docs 2-3 | R/V | View access and current Auto Layout/resizing require final checks. |
| Phase 5 file/docs 4-6 | E/R/U/V | DS Appendix E has palette/fonts/reasons/a11y; real text/logo final check and logo acceptance pending. |
| Phase 6 attachments 1-2 | E/R/V | Prototype link and H Appendix F included; one-page PDF record exists. Official additionally requires Home redlines, present but freshness unresolved. |
| Before Submit 1 | M/V | Every required artifact not yet proven present/current; export and low-fi gaps below. |
| Before Submit 2-5: URLs/design access/prototype access/no stale links | V/M | Links exist, not tested; relative source links in generated package require resolution audit. |
| Before Submit 6-7: team/form | M/U | Cover entrant only; SUBMISSION team/member/form fields blank/stale. Match actual registration and complete form. |
| Before Submit 8: mechanism/format/size | E/U/V | PDF/form requirement known; final size acceptance and actual upload not verified. |
| Operations 1: signed-out tests | V | Earlier empty-file access test is insufficient. |
| Operations 2: submission links/locations recorded | M | SUBMISSION records a design link and folders but no current prototype URL or form URL. |
| Operations 3-4: upload 22:40/receipt screenshot | U/V | No upload or confirmation evidence inspected. |
| Operations 5: local copies | E/V | Local MD/HTML/PDF and exports exist; retaining the exact uploaded copy still requires final confirmation. |
| Absolute cutoff 1 | U/V | Must complete before 23:00; no receipt attested. |

### K. Judging Rubric

**All seven old weights and the separate 10% accessibility category are S.** Use official 15/15/15/25/15/15 = 100; accessibility is embedded in Phase 4, prototype in Phase 5, redlines in Phase 6. Screen Design remains 25%, other phases 75%. No score is guaranteed by this report.

| Items | Status | Evidence / unresolved check |
| --- | --- | --- |
| 1-3: discovery/research/structure reviewed | E/S/V | B/R/T text reviewed against later rubric; actual complete low-fi remains V. |
| 4: screen coverage/quality reviewed | E/R/V | UI and export inventory reviewed, not live screens/images. |
| 5: actual editable file checked | V | Not permitted in this review. |
| 6: prototype tested and handoff read | E/R/V/S | H read; Q saved-action results only. Prototype belongs to official Phase 5. |
| 7: a11y notes and actual screens | E/R/V/S | DS read; actual final UI not inspected. No standalone 10% allocation. |

### L. Rules And Disqualification

| Subsection / items | Status | Evidence / unresolved check |
| --- | --- | --- |
| Theme/guidance 1-2 | E/U/M | B/D address pack and rubric; map compromise U-13, logo acceptance and FR-12 gap explicit. Latest announcements require user confirmation. |
| Originality/window 1-4 | E/U | D/P provenance and original-mark declarations are not independent originality, registration, timestamps or no-template proof. Entrant/version history must attest. |
| AI/explainability 1-3 | E/U | D offers decisions, alternatives and corrections; user must explain/review them. AI permitted, not a registered participant. |
| Plagiarism/attribution 1-3 | E/U/V | DS/H declare credits; no visual plagiarism or whole-file provenance inspection performed. |
| Attribution verification 1 | E/M/V | Fonts named + SIL OFL, Lucide + ISC, original mark; no per-asset source URLs recorded in credit sections. Active map assets not covered by older schematic/no-stock description. |
| Attribution verification 2-3 | E/V | Credits embedded through full DS/H/D; final rendered readability and source-link/asset-credit retention still require check. |

### M. Traceability

| Items | Status | Evidence / unresolved check |
| --- | --- | --- |
| 1-2: stories/problems/source evidence | E | R sections 6-7, T section 5 and D rationale. |
| 3: wireframes/story mapping | E/V | T gives mapping; actual expanded low-fi coverage unverified. |
| 4: final screens/wireframes/story or problem | E/M/V | UI baseline mapping; later S-10 and added-state low-fi/export alignment missing evidence. |
| 5: prototype connects journey | R/V | Q tests original interactions; final integrated replay missing. |
| 6: consequential decisions explained | E | D rationale covers DL-01-22, evidence/inference/assumptions/tradeoffs and proposed benefits. |
| 7: visible in submitted artifacts | E/V | Builder preserves phase sources and D; rebuild required to include this rationale revision. |

### N. Ten Things Not To Miss

| Items | Status | Evidence / unresolved check |
| --- | --- | --- |
| 1: profile evolution | E | R section 4. |
| 2: 3-5 stories/1-2 criteria | E/M | Five primary plus secondary US-6; strict format/count qualifications under D. Not an extra official count requirement. |
| 3: 3-5 problems | E | R five ranked problems. |
| 4: sitemap OR flow/3-5 wireframes | S/E/V/M | Official both diagrams/every committed screen; existing strip coverage must be reconciled. |
| 5-6: whole journey/screens justified | E/M/V | UI/D rationale exists; complete current screen exports/mapping unproven. |
| 7: clean system/content/logo/a11y | E/R/U/V | DS and scoped records; final file/mark acceptance unverified. |
| 8-9: end-to-end prototype/reviewer access | R/V | Saved actions are not final replay or signed-out access. |
| 10: complete timely confirmed submission | U/V | No receipt; entrant must upload and confirm before 23:00. |

## Package Inclusion And Gaps

Inspected renderer manifest includes **nine text sources**: cover, six phases, full decision log and rationale. It asserts source-text inclusion, places phases in Appendices A-F, decisions/service/auth contracts in G, all selected-folder PNGs in H and rationale in I. Core excerpts do not replace these full appendices. Current generated Markdown includes the new FARE-1-5 table, research falsification plan and DL-22, but contains the older rationale wording: **rebuild after reconciliation**. The generated timestamp read was 2026-09-11T15:55:14.341Z (21:55 Dhaka); this is a build timestamp, not upload confirmation or the audit's completion time.

| Export category | Existing evidence | Missing / not established |
| --- | --- | --- |
| Planning | [sitemap](../03-structure/sitemap.png), [boarding/payment flow](../03-structure/flow-boarding-payment.png), [wireframes A](../03-structure/wireframes-A-home-states-rejected.png), [B](../03-structure/wireframes-B-boarding-transit.png), [C](../03-structure/wireframes-C-sos-balance-route-language-alerts.png). | Images not inspected. Current S-10, safety/contact/cancellation, route Map/Stops and other committed additions need low-fi comparison. Three sheets are not proof of every screen. |
| Hi-fi | [Coming](../04-screens/S-01-home-coming.png), [Arrived](../04-screens/S-01-home-arrived.png), [Pending](../04-screens/S-03-ticket-pending.png), [Paid](../04-screens/S-03-ticket-paid.png), [In transit](../04-screens/S-04-in-transit.png), [SOS countdown](../04-screens/S-05-sos-countdown.png), [SOS delivered](../04-screens/S-06-sos-delivered.png). | No individual submission-folder exports for Full, Delayed, keypad/error, scan, Balance, Route, language, S-10/recovery or later SOS states. Final whole-journey coverage and freshness not proven by these seven PNGs. |
| System | DS full text in Appendix E. | No PNG in the design-system export folder found; not automatically mandatory, but editable variables/variants proof requires Figma inspection. |
| Handoff | [Home redlines](../06-handoff/redlines-home.png), [one-page PDF](../06-handoff/handoff.pdf), H source. | Redlines lag current Home/language/SOS; final auth/fare flow absent in H. Page count must be rechecked after reconciliation. |
| Other assets | Four route Map/Stops review PNGs exist under .impeccable/review. | Renderer scans only the four phase export folders, so these review PNGs are **not included**. They do not prove a final map export or attribution. |

The four required build categories (Waiting, In transit, SOS, redlines) are present by filename. Passing those checks does **not** verify all screens, low-fi parity, readability, access or interaction. Latest P reports 124 pages: length is a judging/readability risk, not a known official page-limit violation. No new build/PDF inspection was performed here. The report itself is internal QA and is not in the renderer manifest; it need not be added to the official package unless requested.

## Required Fixes And Owners

| Priority / owner | Exact unresolved requirement and next action |
| --- | --- |
| P0 Parent / live QA | Replay original boarding start 30:642 with English/Bangla, S-10 entry, arbitrary digits, delete/error/third-failure assistance, scanner/torch, Pending/confirmed demo, Back/reopen/input-switch/retry continuity, and completion to transit. Q input checks do not prove FARE-1-5 continuity or real charges. |
| P0 Parent / live QA | Replay SOS start 29:646 and all current origins; reconcile five-second demo countdown versus intended two-second hold. Verify both Cancel controls, acknowledged-state preservation, cancellation confirmation exits and recovery. Q records passing saved actions; do not repeat the stale claim that Cancel actions were never inspected. |
| P0 Parent / publication | Reconcile current committed inventory with every low-fi screen and whole-journey hi-fi exports; refresh changed keypad/tickets/SOS/language/route/auth and redlines. Mandatory-category presence alone is insufficient. |
| P0 Parent / docs owner | Align T, UI, DS and H on S-10 entry, actual demo activation, current keypad dimensions, 64 px ticket type, language targets and daily fare gates. P records keypad slots now 56 px and responsive keys minimum 56 px, contradicting UI's universal 72 px slots/keys. Preserve original histories with explicit current qualifications. |
| P0 Entrant / metadata | Match registered name/team exactly. Cover says Mohammed Tayeb; operational account names include Md. Tayeb Ibne Sayed. This is a verification need, not proof of wrong identity. Fill blank team/member/form metadata in SUBMISSION; confirm whether a team name is required. |
| P0 Parent / cover owner | Cover still lists only DL-01-17, omits [D] from tag legend, asserts every claim is tagged and says the pack supplies no clock times although 6:30/8:00 are sourced. Correct to full DL-01-22 and distinguish illustrative values from supplied facts. Model-specific AI label is not independently verified here; use accurate assistance attribution. |
| P0 Parent / attribution | Confirm every current external asset, especially concurrent route map imagery, its source and licence/permission. DS font/icon names/licences exist but source links and map provenance are not documented there. Do not claim no third-party imagery solely from the older no-stock statement. |
| P0 Parent / build | After reconciliation rebuild with the existing builder, verify source inclusion/snapshot freshness, image coverage, one-page handoff, readable Bangla/text, links and current final PDF. Source-relative links copied into the submission resolve from a different directory unless rewritten; inspect PDF links rather than assuming they work. No build edits authorized here. |
| P0 Entrant / submission | Test design and both prototype starts as intended reviewer, including signed-out access; confirm form limits/latest announcements; upload the one PDF, record receipt/time and retain confirmation before 23:00. Target 22:40 start, not deadline completion by assumption. |
| P1 Parent / source truth | Qualify UI's routine-Full frequency, LCD/light-theme certainty and Balance rides/grace claims; R/DS older universal contrast/type claims conflict with scoped evidence. D now flags these; a rationale caveat does not synchronize the underlying sources or frames. |
| Client / pre-pilot | FR-12 speeding remains **requested and unimplemented**, entrant-deferred under DL-21, not client-waived. Dashboard/groceries alone were client-deferred. Map acceptance U-13, fare entitlement/return/cutoff, staffing, telemetry, identity/recovery, SMS, privacy and top-up/grace remain unapproved dependencies. Do not invent services or approval to close a checkbox. |
| Parent / retained commitment | Bangla audio is retained in FR-8/FR-10 but explicitly unimplemented in UI/DS/H. Disclose as not delivered; do not relabel it as client-deferred or silently delete the commitment. Native translation, comprehension and runtime accessibility remain untested. |

## Integrity And Boundaries

Rationale changes preserve its existing 11-section structure and all DL-01-22 explanations, including the separate DL-18 payment/SOS treatments. Updates are limited to latest fare continuity/entitlement, scoped chip/SOS repair records and explicit remaining drift. Existing source links in the rationale resolve to inspected local files; external links were not opened. Report evidence links point to files found by reads/listing/search. No claims of worker testing, approved financial/security policies, backend delivery, production conformance or successful upload were added.

No age-based deletion recommendation: inspected working records concern 10-11 September 2026, not documents over 90 days old. Older checkpoints remain historical evidence; their obsolete instructions must not override the newest rubric or scoped repair records. Focused editor diagnostics are the available document check; executable Markdown/link/PDF validation and final live checks remain for the parent.
