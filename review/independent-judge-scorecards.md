# Independent Judge Scorecards

11 September 2026. Internal competition preparation, not part of the submission.

## Verdict

Two independent persona-informed subagent reviews returned **77.5/100 (Salman-informed)** and **76/100 (Hassan-informed)**. Both judged the frozen upload candidate **not submission-ready**. These are subjective mock-review scores, not statements by either named judge, predictions of their marks, or proof of ranking.

### Subsequent Authorized Fix Pass

The user subsequently requested fixes alongside other sessions, excluding handoff and allowing a fixed **12/15 handoff planning allowance**. This is a user-specified assumption, not rejudged credit. The historical tables below remain unchanged. With that allowance, reaching 90 requires **78/85 across Phases 1-5**. No final integrated assessment has established that result.

Two subsequent independent **document/reported-evidence-only** reassessments each returned a provisional **86/100 including the assumed 12 handoff points**. They did not run new browser, visual or native-device tests. Their remaining concerns were integrated replay, new Bangla rendering/non-reading access, the still-48px Back target, and active fare/countdown contradictions. These are not final scores, and no numerical uplift is claimed from a proposed or untested fix. The last fare cleanup below occurred after those reassessments; the coordinator independently corrected the repeated countdown descriptions.

This session completed a concise discovery summary, explicit proposed daily-fare/re-entry conditions, scenario falsification tests, corrected bilingual Balance policy copy, and current low-fi mapping. Recovery bands D/E and the 56-pixel language chip were already repaired and skipped. One missing A-01 sign-in low-fi reference was added as dated late reconciliation (`169:3787`), without touching live authentication. Home's concurrently changed 18-minute ETA was preserved and its final action reads **Leave now · 12 min walk**.

Focused checks passed for changed English copy/containment, both language values, low-fi mapping and absence of temporary proofs. The changed English screens and new low-fi band were visually reviewed; the final departure phrase also passed text/containment read-back after the concurrent ETA repair. New Bangla rendered-layout testing was blocked by an unsupported tool operation. Native comprehension and integrated replay remain unverified. Existing Phase 3 Markdown formatting warnings outside the new section remain. Handoff and submission artifacts were not modified. See [repair coordination](prototype-repair-coordination.md) for current ownership and subsequent coordinator results.

**Final fare cleanup:** Home's balance tile now shows **80 Tk**, not eight implied rides. Balance shows **80 / Tk confirmed** and **Recent payments**, using the same illustrative confirmed currency amount; no payment state or ledger was changed. English and Bangla values were updated via existing copy variables. FR-5 and US-5 now specify confirmed Tk and an approval-dependent low-funds threshold rather than active ride entitlement. Focused read-back and containment passed for the numeric amount, unit, section heading and Home tile; all five FARE acceptance conditions and concurrent low-fi mappings remain present. New Bangla rendered verification is still outstanding.

The design's main weakness is no longer its visual identity. It is consistency between the proposed service, interaction states, documentation and exported submission. Preserve the departure-board hierarchy, accessible contrast, reusable components and explicit evidence/assumption distinctions. Do not spend remaining time replacing the visual style.

## Independence And Evidence

- Each subagent received its own persona brief, the same frozen documents, official PDF extracts, inventory and five permitted screen captures: waiting, keypad, ticket, in-transit and SOS. They did not receive the other's findings or the previous audit score.
- The Salman lens comes from authored material on usability, discoverability, Bengali access, low friction and wireframing. The Hassan lens is lower-confidence: an announced senior engineering role and exact-account CRM project participation, not a documented personal aesthetic preference. See the [professional evidence register](judge-research-and-qa.md).
- Official sources: [rulebook](../UI-UX_%20Carnival%208.0%20%282%29.pdf) and [problem statement](../CARNIVAL%208.0%20%C2%B7%20UIUX%20MAIN%20CONTEST%20QUESTION.pdf). The problem statement confirms handoff is **15**, not the truncated `1` in the request. Official maxima are 15/15/15/25/15/15.
- Document snapshot: 14:53:41 UTC (20:53:41 Dhaka). Figma inventory/screens: approximately 14:55-14:56 UTC. Independent live checks span approximately 15:03-15:14 UTC. A parent clarification read was captured at 15:33:18 UTC (21:33:18 Dhaka).
- The Figma file continued changing. Thus the document sample was frozen, but the total review was **not atomic**. Scores are not certifications of the later repaired state. The original scores are retained rather than silently increased after reported fixes.
- The recovered Salman output contains an earlier 80.5-point draft followed by its final 77.5-point report. This record uses the final scorecard only. Hassan's final report is 76.
- Both reviewers were read-only. No additional judge agents were needed on continuation; the completed outputs were recovered. No design, prototype, source deliverable or submission was edited by this review continuation.

## Official Scorecards

| Phase | Maximum | Salman-Informed | Hassan-Informed |
| --- | ---: | ---: | ---: |
| Requirements and discovery | 15 | 14 | 14 |
| Research and validation | 15 | 14.5 | 15 |
| Information architecture and low-fi | 15 | 12.5 | 12 |
| High-fidelity UI | 25 | 18 | 17 |
| Figma ecosystem | 15 | 10.5 | 9 |
| Handoff | 15 | 8 | 9 |
| Total | 100 | 77.5 | 76 |

Do not combine these with the earlier 20-checkpoint internal score. The coincidentally identical 77.5 total uses a different method and allocation. An average of the two scores would obscure their disagreements rather than improve prediction accuracy.

## Judge S: Salman-Informed

### Salman Phase Reasoning

| Phase | Deduction | Reasoning | Confidence |
| --- | ---: | --- | --- |
| Requirements | 1 | Substantive FR/NFR separation and contradictions, but the concise core makes those required essentials harder to find. | High for document organization; penalty is subjective. |
| Research | 0.5 | Good personas, rainy delayed journey and labelled assumptions; limited adversarial exercise of the uncertain literacy assumptions. | High on content; extra validation expectation is discretionary. |
| IA/low-fi | 2.5 | New assistance, call and safety-confirmation screens are not reconciled with the low-fi inventory and original safety flow. | Medium-high. |
| Hi-fi | 7 | Departure/unknown-ETA semantics 3; unsupported credit policy 2; misleading safety privacy wording 0.5; language target/non-reading mitigation 1.5. | High for sampled visible copy; unknown-ETA visibility needs retest. |
| Figma | 4.5 | SOS origin return 1.5; failure/retry demonstration 1.5; repeated-code assistance 1.5. Existing variables, components and newer digit/backspace wiring receive credit. | Medium, because the live file was changing. |
| Handoff | 7 | Stale exported redlines 3; conflicting active instructions 3; missing decision table for important failure states 1. | Medium-high. |

### Salman Findings

1. **S-01 / Submission blocker:** the frozen [submission core](../submission/GreenCommute-Submission.md) explicitly warns that In transit and SOS exports are missing. Judge-only images do not satisfy the single-PDF requirement. No extra design deduction was applied for this gate in Judge S's score.
2. **S-02 / High:** Home `27:9` says nine minutes away and a twelve-minute walk while instructing the worker to leave now. Delayed `27:322` metadata also retained `25` with an unknown-ETA qualifier; actual dominance/visibility of that numeral was not freshly established. Test these separately rather than treating the second as proven by text presence alone.
3. **S-03 / High:** the inspected safety confirmation `121:1068` returns directly to In transit `29:646`, even after entry from waiting. Preserve origin and trip/payment state through the safety journey.
4. **S-04 / High:** the inspected SOS route lacked a reachable failure/retry demonstration, although later delivery copy correctly said demo and distinguished acknowledgement. The phrase "Only you can see this" overstates privacy; silence does not hide a visible screen from bystanders.
5. **S-05 / High:** the newer keypad has digit and backspace handlers, superseding the old single-key-shortcut criticism. However, a separately existing assistance screen was not demonstrated as reachable after repeated code failure.
6. **S-06 / High:** Balance `30:592` promised three rides below zero and HR/payroll top-up while the accepted requirements and handoff left those policies unapproved.
7. **S-07 / Medium:** translation bindings are real, but the sampled language interaction is 122 x 40 versus the declared 56-pixel floor. Translation alone does not resolve uncertainty about the ability to read either language. Do not add automatic speech to discreet SOS.
8. **S-08 / High:** the exported redline image was 1400 x 1702 while the accepted board was 1400 x 2408. The issue is a stale reference, not evidence that the repaired live board still has old geometry.
9. **S-09 / High:** active core instructions still described offline Paid, automatic grace and continually updating SMS, conflicting with the newer Pending/approval-dependent contract. Clearly historical appendices were not penalized merely for retaining earlier thinking.
10. **S-10 / Medium:** newly committed assistance, call, closed-alert and confirmation screens lacked mapped low-fi counterparts. Add rough structural coverage and entry/exit rationale, not polished retrospective illustrations.
11. **S-11 / Medium:** the one-page note identifies dependencies but leaves the displayed result for authentication failure, unavailable validation and unresolved admission unclear. Add a linked state/event/output table while keeping the note concise.
12. **S-12 / Medium:** a 93-page package buries essentials. Page count is not an official violation, but the core should expose FR/NFR and decisive contradictions without forcing the judge into a large appendix.

### Salman Strengths

The worker-specific departure-board hierarchy, restrained visual craft, genuine token/component structure, explicit uncertainty and repaired bilingual/input foundations are valuable. The critique does not justify a redesign or copying the judge's metro portfolio.

## Judge H: Hassan-Informed

### Hassan Phase Reasoning

| Phase | Deduction | Reasoning | Confidence |
| --- | ---: | --- | --- |
| Requirements | 1 | Daily-fare entitlement and repeat requests are not distinguished clearly enough; unique retry IDs alone do not settle the policy. | High on contractual ambiguity. |
| Research | 0 | Worker/security personas, delayed rainy journey, assumptions and source criticism meet the task. Interviews were not required. | High. |
| IA/low-fi | 3 | Replacement-bus continuity, recovery-state closure and the active submitted core are incompletely reconciled. | Medium. |
| Hi-fi | 8 | Departure advice, vehicle ambiguity, frozen ticket claims, low-literacy mitigation, recovery targets and missing PDF state visuals weaken delivery. | High for pictured states; exact per-finding subdivision was not supplied. |
| Figma | 6 | Frozen interaction fidelity, safety recovery and competing input-state ownership remain concerns despite real variables/variants/Auto Layout and newer repairs. | Medium. |
| Handoff | 6 | Active contradictions, stale packaging, unresolved fare boundary and the integrated two-page note prevent a single authoritative build reference. | High on frozen package. |

Judge H did not assign a numeric amount to each individual finding within every phase. Do not invent that precision from the phase totals.

### Hassan Findings

1. **H-01 / Submission blocker:** the actual upload candidate, not just the local design, is incomplete. Its first-page warning and export manifest omit required In transit and SOS visuals. Judge H included this in delivered hi-fi coverage.
2. **H-02 / High:** the nine-minute bus versus twelve-minute walk instruction undermines the central task. The displayed clock is ambiguous; it was not treated as evidence of a specific data age.
3. **H-03 / High:** safety cancellation can return a waiting worker to In transit. Newer mock call/delivery labels improved the design, but reachable failure, retry and acknowledgement needed proof at the inspected revision.
4. **H-04 / High:** Full recommends Bus 14 while code/ticket/SOS examples refer to Bus 12, and In transit lacks a visible current vehicle identity. A broken replacement journey is an inference until that route is played. Test selected-service state through every step.
5. **H-05 / High:** the frozen ticket declared boarded before the worker confirmed boarding and implied an approved top-up route. Newer live copy had already changed to confirmed-demo and Pending/not-a-ticket. Preserve those repairs and refresh exports; do not apply the old-copy finding as a new live defect.
6. **H-06 / High:** retry idempotency does not define a daily fare entitlement. A new transaction ID can still represent an unintended duplicate payment. Specify the client-approved fare/service boundary and the already-paid result; no real double charge was observed.
7. **H-07 / High:** assistance retry/back reset `input/*`, while newer keypad handlers read `boarding/*`. This is concrete state-ownership inconsistency, with stale recovery a testable risk rather than an observed runtime charge or failure.
8. **H-08 / Medium:** audio remains a commitment in some documents but was not implemented. Either demonstrate the agreed non-reading route with honest mock disclosure or explicitly resolve the commitment. Worker interviews and production audio infrastructure are not required just to satisfy this design sprint.
9. **H-09 / Medium:** language measures 122 x 40 and the inspected Back host 48 x 48, below the project's 56 x 56 claim. Measure actual interaction areas and non-overlap; an icon's size is not its hit area.
10. **H-10 / High:** active core, redlines and handoff supply conflicting behavior. Geometry can match while prose is stale. The standalone developer note was one page, but its integrated copy occupied PDF pages 9-10. The one-page artifact must be preserved in the final package too.

### Hassan Strengths

The source/assumption discipline, clear status hierarchy and reusable construction are strengths. Hassan's inferred engineering lens does not justify demands for a particular framework, live backend, added management UI or unrequested features.

## Parent Clarifications

These clarifications preserve each judge's independent opinion while distinguishing stronger evidence from unresolved or superseded observations.

| Topic | Evidence / status | Consequence |
| --- | --- | --- |
| Final scores | Final Salman table sums to 77.5; Hassan table sums to 76. | Discard the earlier Salman 80.5 draft; do not average with the previous research score. |
| Safety origin | Parent read at 15:33:18 UTC still recorded `121:1068` ON_CLICK directly to `29:646`. | Confirmed for that node/time. Whether an obsolete node is reachable in the newest flow remains a separate question; do not repair a dead historical node just to clear a finding. |
| Input reset ownership | Parent read recorded `121:912` and `121:914` clearing `VariableID:121:864` through `121:869`; Key 1 conditions referenced `VariableID:121:1074` and `121:1075`. | Supports the competing-state finding. Confirm current reachability and the owning variable names, then reset the active state. Playback was not established. |
| New safety states | Subsequent repair coordination assigns current `138:*` states and a five-second simulated countdown to another session. | Earlier claims of no failure/acknowledgement states or a universal two-second flow are not reliable descriptions of the latest file. Test reachability and semantics of current states instead. |
| Keypad | Both judges observed newer full digit/backspace wiring. | The previous "key 9 alone is the input model" finding is superseded. Remaining work concerns reset, validation and assisted recovery. |
| Language | Current handoff records 103 bilingual copy variables, 172 bound layers and measured checks in both languages. | Do not call translation absent or the switch unwired. Native comprehension and full playback remain separate checks; reported repair checks are not an independent rescore. |
| Redlines | Current handoff records a repaired live board and matching Home regions; export had not been refreshed. | Request a fresh export and consistency check, not a repeat rebuild of the already repaired board. |
| Ticket/SOS typography | Current handoff and coordination record later layout/copy work. | Frozen screenshots do not establish those defects are still live. Preserve current repairs and update exports. |
| Research deduction | S subtracts 0.5 for not exercising a literacy assumption; H awards 15. | Discretionary strictness, not an official requirement for interviews or field testing. Keep the disagreement visible. |
| Long document | S penalizes discovery findability; H does not apply that same deduction. | Ninety-three pages is not disqualification or a stated page limit. The defensible risk is required evidence being difficult to find. |
| Missing PDF visuals | S treats them as an unscored readiness gate; H deducts within delivered P4. | Different interpretations of judging the design versus the actual upload. Both agree the package must be fixed. Do not add a second parent penalty. |
| Final note pagination | Standalone one-page note and frozen two-page integrated note are different artifacts. Newer handoff records a temporary 99-page review build, not a refreshed final package. | Do not confuse a successful temporary rendering with the submitted PDF being current. |

## Prioritized Fix And Retest List

Coordinate with [the active repair owners](prototype-repair-coordination.md) before any Figma edit. Integration is marked pending in that note; another review should not overwrite their state variables or handlers.

| Priority | Work | Acceptance check | Rubric exposure |
| --- | --- | --- | --- |
| 1 | Freeze the accepted design and rebuild the package. | Current waiting, In transit, SOS and relevant boarding states are readable in the PDF; current redlines are embedded; all six phases and links are present; no draft/missing-export warning; integrated handoff remains one page. | P4/P6 and submission gate. |
| 2 | Reconcile operational truth in current copy and source. | Nine-minute ETA/twelve-minute walk does not imply catching that bus; unknown ETA is not a stale countdown; Balance/Pending grant no unapproved credit/admission; payment, boarding and delivery are distinct. | P1/P3/P4/P6, only for distinct failures. |
| 3 | Finish input recovery and daily-payment semantics. | Partial input, deletion, invalid entry, third failure, assistance, retry and scan share one authoritative state. Back/retry clear that state. Re-entry shows existing Pending/Paid entitlement rather than inventing a second debit. | P1/P5/P6. |
| 4 | Verify current SOS lifecycle and return origin. | From Home, Pending ticket and transit: early release/cancel, failed delivery, retry, delivered, acknowledged and cancellation-status paths preserve the correct origin and trip state. Only mocks run; no real call or alert is sent. | P3/P4/P5. |
| 5 | Verify replacement-bus continuity. | When dispatch supplies Bus 14, code context, payment, ticket, transit and mock SOS refer to that actual selected service; not a mixture of Bus 12 and 14. | P3/P4/P6. |
| 6 | Close language and touch-target claims. | Non-overlapping actual language/Back hit areas meet the declared standard or a clearly justified revised one. Both languages work through errors and recovery. The non-reading route is demonstrated or the unmet commitment is honestly resolved. | P2/P4/P5. |
| 7 | Update the record of committed screens and authoritative instructions. | Each newly navigable screen has a rough wireframe/reference and entry/exit rationale. Core, screen notes, redlines and handoff agree; historical alternatives are clearly historical. | P3/P6. |

Any point-recovery estimate from a judge is hypothetical and overlapping. Do not award points until the affected phase is retested. The most useful next deliverable is an integrated final pass, not additional speculative judge profiling.

## Adversarial Test Script

For each case, record artifact revision, start frame, action sequence, expected/observed result, evidence, assistance required, and PASS/FAIL/NOT VERIFIED. Use mocked service responses only.

1. **First use:** start in English, select Bangla, board, open SOS, return, switch back. No language reset, lost journey or clipped critical copy.
2. **Impossible departure:** ETA nine minutes, walking time twelve. Then test equal, longer, stale and unknown ETA. No misleading reassurance, invented replacement or live-looking stale countdown.
3. **Input recovery:** enter a partial code, delete, correct, enter three invalid attempts, request assistance and retry. No premature success, trapped retry loop or uncleared active state.
4. **Pending payment:** simulate offline, return Home, reopen payment, scan after typing, retry after timeout, then confirm. No duplicate logical payment or Pending-to-Paid change caused solely by navigation.
5. **Replacement bus:** choose a supplied Bus-14 replacement. Confirm consistent identity in boarding, ticket, transit and safety context.
6. **Safety from waiting:** start, release/cancel early, activate fully, simulate no channel, retry, deliver, acknowledge, request cancellation, back out of confirmation once, then confirm. Return to waiting, not an invented in-transit state.
7. **Safety from ticket/transit:** repeat while retaining the correct payment and trip state. A cancellation request does not erase a delivered alert or imply a responder has acknowledged closure.
8. **Final package:** open the rebuilt PDF and both flow links in a fresh guest context. Inspect required screens and the actual one-page handoff; do not infer these from source filenames or successful PDF generation alone.

## Limits And Final Judgment

Guest entry to the language screen was verified by both judges, superseding the earlier inconclusive guest-access check. Complete guest playback was not verified. No actual payment, emergency delivery, staff response, native-device usability or screen-reader behavior was tested. No originality, within-window-production or late-submission violation was established.

**Strict conclusion:** the reviewed design is credible but not yet consistently demonstrated or packaged. Both judges found fixable workflow and contract problems, not a need for more decorative polish. The snapshot is not ready to upload. Later repairs require an integrated retest and fresh exports before that verdict or either score can change.
