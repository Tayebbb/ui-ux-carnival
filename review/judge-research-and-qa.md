# Judge Research and QA Calibration

Research date: 11 September 2026. Internal preparation only; not part of the competition submission.

## Prototype Repair Follow-up - 11 September 2026

The original report and score below remain a historical snapshot, not a rescored assessment. This follow-up records evidence supplied from the parent session for Figma file `aWSZZboavo5bIt92qFQnsz`, page `5:4`; it does not imply a new inspection, change other sessions' ownership, or revise the root handoff.

### Saved SOS State and Routes

- Current SOS `30:511` visibly says "SOS demo countdown", "Mock alert in 5 seconds. Tap Cancel to stop.", and "Simulation only. No call, SMS or location is sent." Its saved `AFTER_TIMEOUT` of 5 seconds routes to sending mock `138:1024`. This intentionally aligns copy with click/countdown behavior; it does **not** verify sustained hold.
- Current delivered state `30:534` says "No response yet. Help is not confirmed." It has no unsupported under-one-minute promise.
- "I'm safe now" `30:589` routes to confirmation `138:1099`; "Confirm cancellation" `138:1122` routes to logged update `138:1124`. The confirmation says a timestamped update is added and the alert stays. There is no automatic immediate close. Legacy confirmation `121:1063` still exists but is not the current route.

### Saved Keypad Action Simulation

**Prior 10,000-code test, excluding attempt counting:** read-only interpretation of the original saved actions found no early submit; `7319` routed to paid `29:551`, and every other code routed to wrong-code `29:445`. Correction `738`, Backspace, `19` routed to paid; deletion removed one position (`count3` to `count2`, showing placeholder `_`); offline `7319` routed to pending `29:588`. This did not validate repeated-invalid-attempt escalation.

Live replay subsequently found that the third invalid attempt still offered retry: the original digit handlers lacked failure counting. Another session concurrently installed a 0.1-second wrong-screen entry timer to increment the counter, but fresh replay still failed third-attempt escalation; the timed counter was unreliable. The parent session then fixed all 20 digit handlers across boarding `29:342` and wrong-code `29:445`: a flat conditional checks the third-failure branch before the ordinary invalid-fourth-digit branch, increments `input/failures` (variable ID `121:869`) at invalid fourth-digit submission before navigation, and routes the third failure to driver help `121:891`. The wrong-frame entry timer was removed. Valid-code and partial-input branches were unchanged in the saved actions; the focused post-fix browser replay below separately verifies escalation, help retry and corrected-code payment.

**Latest post-edit saved-action interpreter validation: 30,000 cases, zero failed cases.** All 10,000 codes were evaluated for each prior failure count of 0, 1, and 2. The first two invalid submissions routed to wrong-code `29:445`; the third routed to driver help `121:891`; valid `7319` routed to paid. Companion saved-action checks confirmed that help retry resets failures and input count to 0, `738`, Backspace, `19` routes to paid, and offline `7319` routes to pending `29:588`. This is **complementary saved-action interpreter evidence, not browser runtime or real payment verification**.

### Language and Geometry Audit

- Across 29 top-level `S-` frames, the audit counted 418 visible text nodes in English and 417 in Bangla, with no immediate-parent text containment overflow in either mode and no missing mode values.
- No unbound English UI was found except the brand, the self-named English selector, and OpenStreetMap attribution. Remaining Latin substrings in Bangla were the proper name GreenTex and worker ID `GT2-04711`, not missing translations.
- All 23 actual-screen language chips were at least 56 px in both width and height (observed 122 x 56 px) and had reactions.
- The mode audit temporarily set each frame through collection `86:889`, using English `86:2` and Bangla `86:3`, then restored the original explicit modes. Geometric checks do not establish font correctness, native-speaker linguistic approval, or user usability sign-off.

### Browser Replay and Pending Acceptance

**Pre-fix live browser passes:** the current-session visible, sized integrated tab `d42c4caa-a9b6-48cd-ad48-fbdc418a81b0` accepted trusted canvas pointer input. The following journeys passed **before the final keypad escalation edit**; none is claimed as a post-fix rerun, including flows whose saved branches were unchanged.

- Selecting Bangla worked; Continue reached Bengali Home `27:9`. The four-second automatic demo transition reached Arrived `27:140`, followed by Bengali boarding `29:342`.
- Entering only `9` stayed on the input screen; the screenshot showed `9` in the first slot and `_` in the other slots. Backspace, then `738`, Backspace, `19` reached paid `29:551`; "I'm on board" reached trip `29:646`. Bengali persisted through ticket, trip, and SOS. A separate in-place boarding language-chip check switched back to English successfully.
- Wrong `0000` reached wrong-code `29:445`, showing "No charge" and "Start again"; retry worked. This single-retry pass did not establish third-failure escalation, which failed as recorded above.
- SOS entry reached the five-second simulated countdown `30:511`, then sending `138:1024`, then delivered `30:534`, which said help was not confirmed.
- "I'm safe now" opened confirmation `138:1099`; "Keep active" returned to delivered. Confirming reached logged update `138:1124`, retaining the original alert. Back returned to trip; entering SOS again and immediately choosing Cancel returned to trip. The rendered trip remained stable beyond six seconds, with no unexpected timer navigation.

**Final post-fix browser regression PASS:** the parent session resolved the earlier integrated-browser blocker using `const session = await page.context().newCDPSession(page); await session.send('Emulation.setFocusEmulationEnabled', { enabled: true }); await page.setViewportSize({ width: 1001, height: 901 });`. Visibility became `visible` with a full-size frame. Browser page `2e86568d-4f96-473d-b24f-9bc86924ab2c` loaded **after the atomic counter fix** and accepted real canvas pointer input:

- The first `0000` submission reached wrong-code retry `29:445`; the second also reached wrong-code retry. The third reached S-10 Driver assistance `121:891`, showing "No fare has been taken".
- Clicking "Try the code again" returned to boarding `29:342` with four underscores (`_ _ _ _`).
- Entering `738`, Backspace, `19` reached paid `29:551`, showing "CONFIRMED DEMO" and a "Paid 10 Tk" mock receipt.

The earlier Bengali journey, single-`9`, in-place language toggle, and SOS cancellation/confirmation passes remain pre-fix evidence; those untouched flows were not rerun for this focused post-fix check. Offline `7319` remains saved-action tested only, not browser-runtime verified.

**Accessibility and evidence limits:** Figma's accessibility tree dropped unchanged controls after mode or digit updates while screenshots retained them on the canvas. Tests used file geometry mapped to frame bounds and awaited the destination frame; they do not establish screen-reader support. The separate 29-screen/23-chip source geometry audit above remains source evidence, not browser accessibility or linguistic approval. No sustained hold, real phone call, SMS, location transmission, real SOS network delivery, or real payment is claimed.

No requested-flow browser acceptance check remains blocked: post-fix third-failure escalation, assistance retry and corrected-code payment passed. Pending acceptance is limited to:

- Linguistic/native-speaker review of Bangla and user usability sign-off; neither has been obtained.

## Decision Summary

Use this research to sharpen review questions, not to imitate either judge or forecast their marks. The strongest evidence concerns Salman's own writing about usability, discoverability, Bengali access, low-friction flows and wireframing. Hassan's verified public evidence establishes software-engineering and team-project context; it does not establish a personal UI style or scoring policy.

**GreenCommute audit snapshot: 77.5/100 demonstrated internal QA points, 17.5 points of known deductions, and 5 points unresolved.** The resulting 77.5-82.5 evidence bound is not a prediction of the competition result. It uses the explicit internal checkpoints below, not unpublished judge preferences. Backend implementation is not required to earn these design-competition points.

The most urgent submission issue is missing in-transit and SOS exports in the generated package. The most important prototype issues are simulated keypad input, SOS hold/release and cancellation mismatches, and misleading operational copy. The current developer handoff has already improved its payment and emergency contracts; do not report those older contract defects as still unfixed.

The workspace and Figma file changed during this research. Findings describe the inspected snapshot, not an immutable final version. Re-run the named failing checks on a frozen submission before reusing this score. No competition screens, source deliverables, or submission files were edited by this research pass.

## Scope and Reliability

This research concerns the public professional work of Sabbir Ahmed Salman and Md. Sabbir Hassan, using the LinkedIn identities supplied by the participant. It does not infer personality, beliefs, or preferences from appearance, clothing, names, or photographs. The supplied judge posters establish the announced roles, not the judges' authorship of the poster designs.

Evidence labels:

- [E] Directly inspected public source or supplied competition material.
- [S] Search-result snippet; incomplete and potentially stale.
- [I] Inference from relevant professional evidence, not a known judging preference.
- [A] Unverified assumption or unknown.
- [D] Recommended test or design implication; not a quotation from a judge.

Authored work is stronger evidence than a repost. A project demonstrates experience in a problem space, not a universal aesthetic preference. No past score sheets or independently validated model of these judges' scoring have been obtained. This report cannot honestly predict their exact marks.

## Verified Professional Profiles

### Sabbir Ahmed Salman

- [E] The supplied event poster announces him as Associate Software Engineer at Speedway Solutions Ltd. A search-indexed LinkedIn headline says Junior Software Engineer, Frontend Developer, and UI/UX Designer. Treat the job-title difference as a source/date discrepancy, not a reason to discount either role.
- [E] His supplied LinkedIn identity is cross-linked to Behance: his authored metro-app post [SAL-10] links through `https://lnkd.in/gq_4EW9U` to project `209370625`; that project's owner links to `salman000` [SAL-11]. This is stronger identity evidence than matching names or photographs.
- [E] That Behance profile lists the DMTCL NFC ticketing case study, Digital MCQ Bot, AUST Buddy, a business news website, and other interface projects [SAL-01]. The metro case study is dated 3 October 2024 [SAL-11]. Publication establishes portfolio work, not a production deployment or independently verified research outcome.
- [E] Behance dates the Digital MCQ Bot case study to 6 July 2024 and AUST Buddy to 11 May 2023, with Figma listed as a tool [SAL-03, SAL-04]. These establish published design work, not independently verified research methods, production adoption, or current preferences.
- [E] The Behance information page links to Dribbble account `sallu123` [SAL-05]. Its student/beginner description is undated and must not override the event's announced professional role.
- [E] His LinkedIn account reposted Colton Schweitzer's UX career advice [SAL-02]. The original author discusses layout fundamentals, Figma Auto Layout, platform guidelines, real user/business problems, handoff, and case-study storytelling. These are Colton's words, not Salman's own declared judging criteria.
- [E] In his own recipe-app post, Salman says he focused on core functions and removed unnecessary login/sign-up. He explicitly explains that making the app entirely Bengali broadens access [SAL-06]. This is strong evidence for those choices in that project, not opposition to authentication where identity or payment requires it.
- [E] In an authored UX post, he argues that difficult navigation cannot be compensated for by visual delight; he values both ease and delight. He explicitly credits AI with helping explain the book concept through an analogy [SAL-07]. This is not evidence that he rejects visual craft or accepts unexplained AI-generated work.
- [E] His bilingual post on invitations, signifiers and affordances discusses making possible actions discoverable through visible, audible or tangible cues [SAL-08]. Treat it as his public explanation of established design concepts, not a claim that he originated those concepts.
- [E] His wireframing post describes rough sketches as a way to map ideas, test concepts and iterate before fine visual detail [SAL-09]. A linked Bengali Medium article, published 6 September 2024, explains shared understanding, early problem discovery and communicating with clients [SAL-12, SAL-13]. The article and post reinforce one theme; they are not two independent user studies.
- [E] His own metro-project announcement explicitly names NFC scanning, quick recharges, easier metro travel and Google's Material Design System [SAL-10]. This makes transit/payment comprehension a relevant review area; it does not establish a preference for NFC in GreenCommute.
- [E] His earlier design-psychology post discusses reading Susan Weinschenk's *100 Things Every Designer Needs to Know About People*, specifically visual perception [SAL-14]. This supports an interest in human factors, not a preference for optical-illusion styling.
- [D] For GreenCommute, test whether a worker can select Bangla and complete the core journey without English-only steps or unnecessary account friction. Keep the client's English pre-selection; prove the alternative actually works rather than changing the default to please a judge.
- [I] The transit-ticketing project is a promising basis for domain-specific QA of GreenCommute's boarding/payment flow. It does not justify copying his screens or assuming he will prefer NFC in this different scenario.

### Md. Sabbir Hassan

- [E] The supplied event poster announces him as Senior Software Engineer at Speedway Solution Ltd.
- [S] The exact supplied LinkedIn profile appears in search with a SaaS/e-commerce/startup positioning statement and a Node.js, React, Vue, Next.js, Nest.js, MongoDB, and MySQL stack [HAS-01]. The profile itself did not expose readable content to the fetch tool.
- [E] His exact LinkedIn account shares a GenXSolutions announcement with the caption "One of our current projects!" [HAS-02]. The announcement describes a custom CRM for BanglaBriz, intended to improve internal operations and client management. The participation claim is Hassan's; the detailed benefits are the company's marketing claims, not independently measured results.
- [A] His particular role on the CRM, relationship to GenXSolutions, and personally authored UI/UX preferences are not established by that post. Similar-name search results must not be combined with this profile without a cross-link or other professional identity evidence.
- [I] An implementation-oriented review is reasonable as a supplementary stress test. Calling it Hassan's actual scoring policy would be unsupported.
- [D] Check operational ownership, failure states, data freshness, and a buildable handoff. Do not assume he prefers a specific frontend framework, visual style, or database in this design competition.

### Confidence And Unknowns

| Question | Salman | Hassan |
| --- | --- | --- |
| Is the identity tied to the supplied LinkedIn account? | High: inspected authored-post actor links, plus Behance and Medium cross-links. | High for the CRM post: exact actor link matches the supplied account. Other same-name accounts excluded. |
| Are design principles directly stated? | High for the specific published statements above; their transfer to this competition is an inference. | Not established from the inspected material. |
| Is the professional context relevant? | Transit/payment design plus frontend/UI work. Portfolio work is not proof of shipped engineering. | Announced senior engineering role plus a team CRM project. His exact CRM responsibilities remain unknown. |
| Can we predict personal judging weights or exact scores? | No. | No. |
| Favourite colours, fonts, dark/light mode, animation style? | Unknown. One Material-based project is not a universal taste declaration. | Unknown. No reliable personal aesthetic source obtained. |
| Dislikes? | He explicitly argues against sacrificing usability for delight and unnecessary friction in the recipe project. Other proposed objections below are inferred. | No directly documented personal UI dislikes obtained. |

Do not use seniority, appearance, clothing, employer, engagement counts or technology keywords as personality proxies. The evidence is asymmetric; the resulting confidence must be asymmetric too. A weakly evidenced Hassan lens must not outweigh the actual worker scenario or rubric.

## Preference-To-Test Matrix

All proposed questions are our questions, not quotations or impersonations of either judge. "Likely concern" means an evidence-informed hypothesis, not a known dislike.

| Public signal | Likely concern [I] | GreenCommute test [D] | What not to infer |
| --- | --- | --- | --- |
| Salman: ease and delight must work together [SAL-07] | Attractive screens whose task flow needs narration. | Give a first-time reviewer only the goal: find the bus, board, and request help. Record wrong turns and assistance; do not coach the hidden prototype shortcuts. | A preference for plain, unpolished or animation-free interfaces. |
| Salman: Bengali recipe app for wider access [SAL-06] | A language switch that changes only its own label. | Select Bangla and inspect Home, input instructions, errors, ticket, balance, SOS and return paths. Check persistence, numerals and text fit with a native reviewer. | Permission to override the client's English pre-selection. |
| Salman: removed unnecessary recipe-app sign-up [SAL-06] | Unnecessary steps before the core task. | Count actions from an already provisioned worker account to boarding. Justify authentication for identity/payment, but avoid repeating it at the bus door without a real need. | Removing authentication from a payment system. |
| Salman: discoverability and signifiers [SAL-08] | Hidden gestures, misleading button labels and unclear recovery. | Ask what Board, Backspace, language, SOS and cancellation will do before activating them; then verify behaviour matches the prediction. | Icon-only interfaces automatically work for low-reading users. |
| Salman: rough wireframes and early problem discovery [SAL-09, SAL-13] | A polished outcome without a defensible decision trail. | Show the rejected map-first Home beside the chosen Home, the scenario evidence and the resulting flow. Explain what changed, without inventing user testing. | Private rough sketches should replace readable judge-facing deliverables. |
| Salman: metro NFC/recharge case study [SAL-10, SAL-11] | Ambiguous fare state, balance or boarding confirmation. | Test wrong service/code, retry, pending versus paid, insufficient funds, and driver-readable confirmation. Use the same payment contract for typed and scanned input. | Copying his screens, adding NFC to cheap phones, or importing a forbidden pre-made Material kit. |
| Salman: visual-perception interest [SAL-14] | Meaning that depends only on colour or an ambiguous cue. | Check state recognition with words/icons and inspect actual contrast pairs at useful phone size. Real dim/wet-phone use remains a field test. | An unsupported claim that he prefers a particular palette. |
| Salman: reposted layout/handoff advice [SAL-02] | Possibly notices consistency and file organisation. | Audit variables, component variants, spacing, Auto Layout, readable case-study sequence and handoff agreement. | Colton Schweitzer's advice is Salman's published judging rubric. This is a weak supplementary signal. |
| Hassan: team CRM project [HAS-02] and announced engineering role | Possibly scrutinises ownership, complete workflows and implementability. | Trace who publishes ETA/fullness, validates payment, receives/acknowledges SOS and handles exceptions. Specify state transitions, retry IDs and unresolved client dependencies. | He authored all CRM features or prefers a specific framework, database or aesthetic. |

### Judge-Informed Review Questions

**Salman-informed, moderate confidence of relevance:** Can a worker act without an explanation? Why was map-first rejected? Does Bangla work beyond the first screen? Does each cue predict the actual interaction? What does a failed boarding attempt let her do next? Which decision came from scenario evidence rather than visual preference?

**Hassan-informed, lower confidence of personal relevance:** What produces each status? When is money actually confirmed? How is retry distinguished from a second charge? Who acknowledges an alert? What happens when both data and cellular service fail? Which requirements are demonstrated, simulated or awaiting client approval?

Neither set should be presented to the judges as a statement about their personalities. Present the product reasoning, not evidence that their social profiles were studied.

## Scoring Guardrails

Use the current rubric recorded in [SPRINT-OPS.md](../SPRINT-OPS.md), which explicitly supersedes the earlier checklist/rulebook weighting:

| Phase | Criterion | Maximum |
| --- | --- | ---: |
| 1 | Requirements, FR/NFR separation, contradiction resolution | 15 |
| 2 | Worker and secondary personas, rainy delayed-bus journey, assumptions | 15 |
| 3 | Sitemap, boarding/payment flow, all committed wireframes, rejected home alternative | 15 |
| 4 | High-fidelity waiting, in-transit, SOS; contrast and one-handed use | 25 |
| 5 | Named variables, variants, Auto Layout, boarding and SOS prototypes | 15 |
| 6 | Home redlines and one-page developer handoff | 15 |
| Total | Official phase maxima as recorded in the workspace | 100 |

- [D] Judge-informed lenses change which questions receive extra scrutiny, not the official phase weights.
- [D] Keep PASS, FAIL, and NOT VERIFIED separate. A handoff claim is not proof of a working prototype.
- [D] Do not award personality-match points, aesthetic imitation points, or assumed bonuses for technology choices.
- [D] The snapshot below includes an artifact-level audit with explicit gaps. Its exact arithmetic does not make it an exact forecast of official marks.
- [D] Earlier simulated judge scores in the workspace are not observed scores from either named judge and are excluded from calibration. Research can improve test relevance; prediction accuracy requires actual independent judging outcomes.

## Internal QA Scoring Contract

This is a preparation method, not a scoring system published or endorsed by either judge.

- Keep the six official phase maxima at 15, 15, 15, 25, 15, and 15. Use 20 internal checkpoints worth 5 points each: 3, 3, 3, 5, 3, and 3 checkpoints per phase respectively.
- Each checkpoint has explicit acceptance conditions and an artifact reference. PASS earns 5, PARTIAL earns 2.5 only when the named partial conditions are met, and FAIL earns 0. NOT VERIFIED earns no demonstrated points but remains unresolved, not a proven failure.
- For a PARTIAL result, label the missing half **K** when an observed defect prevents the full condition, or **U** when it has not been verified. Thus PASS = D5/K0/U0; PARTIAL-K = D2.5/K2.5/U0; PARTIAL-U = D2.5/K0/U2.5; FAIL = D0/K5/U0; NOT VERIFIED = D0/K0/U5.
- Report demonstrated points, known deductions, and unresolved points separately. A lower-to-upper evidence interval is a bookkeeping bound, not a confidence interval or a prediction of either judge's score.
- A source document can prove that a requirement or implementation contract was written. It cannot prove that a Figma interaction, Bengali layout, offline transaction, or emergency delivery actually works.
- Review the same artifacts three ways: official-rubric compliance, Salman-informed usability questions, and Hassan-informed implementation questions. Record findings against the existing checkpoints; never add or average three different scores.
- Use one root-cause finding across related observations. Deduct from multiple checkpoints only when distinct acceptance conditions fail, and explain each deduction.
- Re-run a failed check after its fix. Do not raise the score because a fix was proposed, a source was added, or a polished screen was exported.
- Figma may simulate network, payment, camera and emergency events. Full competition credit does not require a backend: it requires the designed flow, appropriate states, a coherent interaction demonstration and honest simulation disclosure. Production tests below are future acceptance requirements, not extra sprint deliverables.

## Priority Discriminating Checks

The local anchor is [the developer handoff](../06-handoff/handoff.md). An earlier version promised offline deductions and connectivity-independent SOS. The current version correctly says Pending until payment acknowledgement, distinguishes SOS delivery states, and states that the prototype sends no real emergency messages. Preserve those improvements. Test the remaining design and prototype against the current contract.

| ID | Test | Acceptance condition | Inspected status |
| --- | --- | --- | --- |
| RISK-01 | Walk through simulated data loss, then loss of both data and cellular service. | Show distinct sending, failure, delivery and acknowledgement states. A timer may illustrate a labelled scenario, but is not delivery evidence. SMS is an alternative transport, not a guarantee. | Current handoff corrects the contract. S-06 still predicts driver contact/help, usually within a minute, without evidence. Actual delivery NOT VERIFIED and out of scope for a Figma-only sprint. |
| RISK-02 | Press SOS briefly, hold for two seconds, release early, then cancel an active alert. | Short press or early release sends nothing; completed hold sends once; cancellation requires confirmation. Any substituted prototype gesture is disclosed. | Static wiring FAILS the intended gesture: Home/transit use ON_CLICK; S-05 uses AFTER_TIMEOUT=2 and ON_CLICK cancellation; "I'm safe now" navigates immediately. No native hold/release test completed. |
| RISK-03 | Select Bangla, continue through boarding and SOS, then return Home. | Actual interface text changes and persists; errors and recovery are translated, not only the language chip. Keep English pre-selected. | Selection and conditional mode-switch reactions are now present, with text bindings on all six sampled frames. Full translation coverage, mode inheritance in presentation, audio and native-language quality remain NOT VERIFIED. Do not call the switch unwired. |
| RISK-04 | Demonstrate input, retry and pending payment; specify future offline replay/reconciliation tests. | Empty-to-four-digit input supports correction and wrong-code recovery. One request ID prevents duplicate charges; pending and confirmed amounts are distinct; client approves grace/admission policy. | Current handoff adds unique IDs, Pending and approval dependencies. Key 9 still jumps directly to Ticket; Key 1 jumps to the wrong-code frame. Real offline transaction/reconciliation behaviour is NOT VERIFIED, not a backend requirement for this contest. |

These checks affect the existing rubric checkpoints only. They are not additional marks, production certification, or permission to expand the competition scope into a backend build.

## Audit Findings

Method: two independent read-only assessments, A for worker-facing design and B for structural/prototype evidence, followed by a compact parent inspection of exact interaction properties. A did not see B's findings or this research report. B's incomplete selector results were excluded. The parent read six named frames to resolve the interaction questions. No markup detector or overlay was injected into Figma: its player/editor DOM is not GreenCommute's native UI.

### F-01 / Submission Blocker / Missing Mandatory Exports

The generated [submission draft](../submission/GreenCommute-Submission.md#L27) explicitly flags missing **In transit (S-04)** and **SOS (S-05 or S-06)** exports. The export inventory and local files agree: waiting screens, wireframes, flow, sitemap and redlines exist, but those two mandatory hi-fi state exports were absent at the inspected build. The current draft must not be treated as submission-ready just because a PDF exists.

**Fix and acceptance:** export the required states from the final Figma version, rebuild, ensure the package check passes, inspect the actual PDF at readable size, and verify view/prototype links as a guest. Do not count Figma screen existence as proof of PDF inclusion. Deduction: QA-20 only, not QA-10, because the screens themselves exist.

### F-02 / High / SOS Gestures Do Not Match Their Labels

Direct reaction evidence:

| Host | Actual trigger | Actual action |
| --- | --- | --- |
| Home SOS `27:128` | ON_CLICK | Navigate to `30:511`. |
| In-transit SOS `29:732` | ON_CLICK | Navigate to `30:511`. |
| S-05 frame `30:511` | AFTER_TIMEOUT, 2 seconds | Navigate to S-06 `30:534`. |
| S-05 frame `30:511` | ON_CLICK | Navigate to In transit `29:646`, regardless of Home entry. |
| S-06 "I'm safe now" `30:589` | ON_CLICK | Navigate directly to In transit `29:646`. |

This is a click/timer demonstration, not proof that maintaining pressure is required or releasing cancels. The cancellation label includes a hold-to-confirm instruction, but its action is immediate navigation. The call CTA `30:587` had no direct reaction in the detailed read; inherited call behaviour was not established, so it is an unverified recovery action rather than a proven runtime failure.

**Fix and acceptance:** demonstrate short press, sustained activation, early release and confirmed cancellation. Restore the originating screen when activation is cancelled. If a Figma limitation requires a substitute gesture, make the limitation explicit in presentation notes and describe the intended native behaviour accurately. Do not claim that a timer tests emergency delivery. Deduction: QA-17.

### F-03 / High / Keypad Demonstrates A Shortcut, Not General Input

On [S-02 `29:342`](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz?node-id=29-342), Key 1 `29:411` navigates straight to wrong-code `29:445`, and Key 9 `29:429` navigates straight to Ticket `29:551`. The sampled frame already contains preset digits. This supports a scripted example, not the claimed empty/partial/fourth-digit entry and correction behaviour. The [Phase 5 description](../05-design-file/design-system-and-accessibility.md#L55) itself describes key 9 completing `7319`.

**Fix and acceptance:** start empty; enter a valid code; remove/re-enter a digit; submit an invalid code; retry or request assistance without paying twice. A camera simulation is acceptable if its output reaches the same validation path. Do not narrate a secret key to conceal nonfunctional input. Deduction shares QA-17 with F-02, not a second invented deduction.

### F-04 / High / Status Copy Can Produce The Wrong Action

- [Home `27:9`](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz?node-id=27-9) displays **9 min away** while instructing **Leave home now, 12 min walk**. At those displayed estimates, the walk exceeds the arrival estimate by three minutes, even before a buffer. Treat this as an internal sample inconsistency, not evidence about real bus timing.
- [SOS sent `30:534`](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz?node-id=30-534) says it is waiting for the gate to answer while promising driver contact or someone being sent, usually within a minute. That service commitment is not evidenced and conflicts with the current [handoff contract](../06-handoff/handoff.md#L23).
- Assessment A could not find a current bus number on [In transit `29:646`](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz?node-id=29-646). Carrying the actual boarded vehicle from ticket to transit to SOS would reduce recall and ambiguity, especially after changing from a full bus.

**Fix and acceptance:** test ETA shorter than, equal to, and longer than walking time plus the chosen buffer. Do not invent a replacement departure. Keep the current bus visible and consistent. Separate delivered, acknowledged and dispatched states; do not imply help is on its way or attach response-time promises without an operational commitment. Deduction: QA-12, once for this checkpoint.

### F-05 / Medium / Language Work Improved, Target Size Still Conflicts

S-09 English `30:660` selects mode `86:2`; Bangla `30:665` selects `86:3`; Continue `30:674` navigates Home. Sampled language chips conditionally switch modes. Bound text counts were S-09 2/8, S-05 5/6, S-06 14/19, S-02 5/19, Home 11/16 and In transit 11/18. These are **not translation-completion percentages**: numerals, names and symbols may legitimately remain unbound, and bindings alone do not prove correct translated values or rendered layouts.

The actual language-chip instances sampled on Home, S-02, S-06 and In transit measure **122 x 40**. That is below the project's stated 56-high target, independent of the existence of a `size/target=56` token. No enlarged invisible hit area was established. The button's position near the top also needs an actual one-handed check.

**Fix and acceptance:** meet the declared hit-area requirement, test English-to-Bangla-to-English through the entire journey, inspect long errors and SOS copy at narrow width, and have a native reviewer check meaning and shaping. Verify audio only if it is still claimed as delivered. Target-size deduction: QA-13. Unverified translation/audio does not receive an additional speculative deduction.

### F-06 / Medium / Exported Redlines Are Stale

The inspected [redline export](../06-handoff/redlines-home.png) specifies a 239-high status block and 321-high content area, while the live Home read measured 242 and 318 respectively. The export also retains a 171 x 100 mark annotation and an older route subtitle. It is a real annotated deliverable, but not a reliable specification of the inspected current Home. The exported board is 1400 x 1702; the live redline root was reported as 1400 x 2040, so freshness should not be assumed from a matching filename.

**Fix and acceptance:** regenerate annotations from the frozen Home, verify the mark, top bar, chip, hero, content and bottom zone dimensions against their nodes, and export that same revision. Deduction: QA-18. Do not spend the remaining time adding decorative design-system pages.

### Strengths Worth Preserving

- The chosen Home is grounded in the worker's decision, not a generic ride-hailing metaphor. The rejected map-first alternative is visible and explained in [wireframes A](../03-structure/wireframes-A-home-states-rejected.png).
- Camera-free keypad, driver-readable ticket, secondary route view and persistent safety access form a coherent task structure. [Wireframes B](../03-structure/wireframes-B-boarding-transit.png) and [wireframes C](../03-structure/wireframes-C-sos-balance-route-language-alerts.png) cover the remaining committed base screens.
- The structural read found 17 top-level Auto Layout screens, including 320 and 412 width proofs; 40 named text styles; named colour and dimension variables; and two flow starts. The compact read verified seven component sets with 26 variants: Button 12, Key 2, SOS 2, Status 4, Tile 2, Banner 2, Top bar 2.
- Selected token contrast pairs are strong: primary/page 17.824:1, Coming 10.864:1, Full 8.158:1, Delayed 7.384:1, white/brand 7.945:1. These are computed token-pair results, not a screen-wide accessibility certification.
- Current requirements, research qualifications and handoff explicitly distinguish scenario synthesis from user research, assumptions from policy, and simulated interactions from production behaviour. Keep that candour in the presentation.

## Twenty-Checkpoint Scorecard

The following equal subdivisions are **our internal QA method**, not official subcriteria. Full credit tests only the named condition. Partial credit requires the specified partial condition; otherwise use FAIL for demonstrated failure or NOT VERIFIED for absent inspection. Criterion maxima remain the official six phase totals.

| ID | Phase | Full condition, 5 points | Partial condition, 2.5 points | Snapshot result |
| --- | ---: | --- | --- | --- |
| QA-01 | 1 | Functional and non-functional requirements separated, with source identifiers. | Separation exists but source mapping is materially incomplete. | PASS |
| QA-02 | 1 | Major map, camera, language and SOS contradictions have explicit resolutions and reasoning; uncertain policy is labelled. | Contradictions are listed but a resolution or rationale is incomplete. | PASS |
| QA-03 | 1 | Scope, checkable target outcomes, user stories and client unknowns are stated without claiming delivery. | Scope exists but targets or dependencies are materially ambiguous. | PASS |
| QA-04 | 2 | Worker and one secondary persona connect context, goals and constraints to the scenario; invented identities are disclosed. | Both roles exist but one lacks a traceable basis. | PASS |
| QA-05 | 2 | Rainy, delayed-bus journey shows actions, pain, opportunities and the boarding outcome, with synthetic details labelled. | Journey exists but omits a required context or stage. | PASS |
| QA-06 | 2 | Assumptions and interpretation changes are explicit; no invented interviews, measured frequencies or outcomes. | Assumptions are listed but a material claim lacks qualification. | PASS |
| QA-07 | 3 | Sitemap and boarding/payment flow are present with numbered screens and exception branches. | Only the happy path is sufficiently specified. | PASS |
| QA-08 | 3 | Every committed base screen has a visible wireframe, with meaningful state variations annotated. | Core wireframes exist but coverage is incomplete. | PASS |
| QA-09 | 3 | A distinct rejected Home alternative is shown with scenario-based reasons for rejection. | Alternative is shown but the rejection is unexplained. | PASS |
| QA-10 | 4 | Waiting, in-transit and SOS hi-fi states exist with a coherent readable hierarchy. | Required states exist but one is visibly unfinished. | PASS |
| QA-11 | 4 | Essential text/icon contrast is checked on actual applied screen pairs, against the declared thresholds. | Relevant token pairs and visible samples are checked, but applied-pair coverage is incomplete. | PARTIAL-U |
| QA-12 | 4 | Status, timing and next-action copy are internally consistent and do not promise unsupported outcomes. | Primary instructions are coherent, but secondary copy has a material inconsistency. | FAIL |
| QA-13 | 4 | Critical controls meet the declared target size and primary-action reach strategy; language access is apparent. | Main controls satisfy the strategy but an important control misses a declared requirement. | PARTIAL-K |
| QA-14 | 4 | Content reflow is checked at 320, 360, 412 and 430, including errors and translated text where claimed. | Auto Layout and narrow/wide proof frames exist, but full reflow verification is incomplete. | PARTIAL-U |
| QA-15 | 5 | Named variables and text styles exist and are used in the sampled implementation. | Named definitions exist but representative use is not established. | PASS |
| QA-16 | 5 | Reused component sets have meaningful variants; the screen containers use Auto Layout. | Components exist but variants or layout structure are incomplete. | PASS |
| QA-17 | 5 | Both prototype flows demonstrate their intended input, recovery and SOS activation/cancellation, with simulation limits disclosed. | Both starts and a scripted route exist, but material behaviour is shortcut or mismatched. | PARTIAL-K |
| QA-18 | 6 | Home redlines give readable sizes, spacing, type and token references that match the current Home. | Annotated redlines exist but observed values or export revision are stale. | PARTIAL-K |
| QA-19 | 6 | A concise developer note defines scope, flows, current state contracts, client dependencies, reuse and credits. | A note exists but omits a material build contract or simulation limitation. | PASS |
| QA-20 | 6 | The package includes mandatory state exports, redlines and links; final PDF readability and guest access are checked. | Mandatory artifacts are included, but final PDF/guest checks remain incomplete. | FAIL |

### Score Ledger

| Phase | Maximum | Demonstrated | Known deductions | Unresolved |
| --- | ---: | ---: | ---: | ---: |
| 1 Requirements | 15 | 15 | 0 | 0 |
| 2 Research | 15 | 15 | 0 | 0 |
| 3 Structure | 15 | 15 | 0 | 0 |
| 4 Screens | 25 | 12.5 | 7.5 | 5 |
| 5 Figma | 15 | 12.5 | 2.5 | 0 |
| 6 Handoff/package | 15 | 7.5 | 7.5 | 0 |
| Total | 100 | 77.5 | 17.5 | 5 |

This is 13 PASS, three PARTIAL-K, two PARTIAL-U and two FAIL checkpoints. The score describes the acceptance tests above, not the sophistication of every design decision. Passing a documentation checkpoint proves the specified content is present; it does not prove the source testimony, user outcomes or runtime system are correct.

Known deficits cannot become demonstrated points merely by resolving uncertainty. Without fixing known defects, the internal evidence bound is 77.5-82.5. It is not a statistical confidence interval, competition-score interval, or guarantee of ranking. The official judges may interpret quality and subdivide marks differently.

## Reusable QA Run

1. Freeze one artifact revision. Record the Figma version, source/PDF build and test date. Do not mix screenshots from one revision with handoff claims from another.
2. Run a rubric-only review before showing the reviewer these professional profiles. This reduces confirmation bias and keeps the worker/client problem primary.
3. Run the Salman-informed questions, then the lower-confidence Hassan-informed implementation questions. Attach each finding to one of QA-01 through QA-20; do not create profile-match bonuses or two artificial judge scores.
4. For each test, record goal, starting frame, exact actions, expected result, observed result, artifact/node reference, evidence layer and assistance required. Use PASS, PARTIAL, FAIL or NOT VERIFIED. A static reaction read is not a presentation-mode run; an expert walkthrough is not a worker study.
5. Demonstrate: delayed/full/arrived choices; valid and invalid code entry; delete/retry/assistance; pending and paid states; short SOS press, sustained activation, early release and confirmed cancellation; Bangla round trip; narrow-width errors. Use mock delivery and payment states with an explicit simulation label in the demonstration notes.
6. Validate with representative workers and a native-language reviewer when available. Record task completion, wrong actions and prompts actually observed. Do not estimate a population success rate from an expert's confidence or a tiny convenience sample.
7. Re-run only affected checkpoints after a fix, then inspect the rebuilt package. Keep demonstrated, known and unresolved points separate. Historical simulated scores of 84/85/87 are not calibration data for either named judge.

**Suggested review instruction:** "Review this frozen GreenCommute artifact using QA-01 through QA-20 and the official 15/15/15/25/15/15 maxima. Assess the worker task first. Use the cited judge evidence only to choose additional questions. Do not impersonate judges, invent preferences or outcomes, penalise the absence of a production backend, or count a written intention as tested behaviour. Return findings with exact evidence, checkpoint, status, D/K/U points and retest steps."

### Fix Order And Presentation

1. Close the package blocker: S-04 plus S-05/S-06 exports, rebuilt PDF and readable mandatory-state pages.
2. Resolve the two core prototype demonstrations: real or honestly disclosed SOS activation/cancellation and code-entry/correction behaviour.
3. Fix the misleading ETA/walk instruction, unverified help-response claim and missing in-transit bus identity.
4. Align language hit areas, verify both languages through the flow, then test the narrow/error layouts and applied contrast pairs.
5. Regenerate redlines from the frozen Home. Clearly distinguish current contracts from earlier process artifacts in the final package.

In the presentation, show the scenario-to-decision chain, the rejected Home, one successful boarding, one recoverable failure and the safety flow. State what is simulated and what needs client approval. Salman's writing makes that process-and-usability explanation especially relevant; Hassan's professional context makes the implementation contract a sensible additional stress test. Neither is a reason to flatter a judge, copy a portfolio, redesign the established visual identity, or add out-of-scope features.

## Verification Limits

- Eight authored Salman text sources were directly inspected across LinkedIn and Medium, alongside the metro project metadata, portfolio information and the earlier repost. Public-post actor links were checked against the supplied identity. Their claims are not independently validated outcomes.
- Hassan's exact public CRM post was directly read. Additional exact-name/handle searches yielded unrelated or unhelpful results; they did not justify adding other people's portfolios. Lack of accessible material is not evidence of a lack of expertise or preferences.
- Assessment A inspected four live frames: Home, keypad, In transit and SOS sent. The parent inspected three exported wireframe sheets and the redline export. No full visual sweep of all hi-fi states was performed.
- The parent compact read verified reactions, text-binding presence and language-chip sizes on six frames, plus seven component sets. An earlier oversized response and B's empty descendant query were not used as proof of missing interactions. No source data was changed to perform the audit.
- Guest prototype access was attempted. The accessible snapshot exposed the Figma player shell but not enough GreenCommute content to confirm successful viewing or a mandatory login. Guest access and real click-through remain NOT VERIFIED.
- No HTML/CSS detector was applied to the Figma canvas; no user-visible overlay, live server, real payment, emergency message, field test or screen-reader audit was run. Contrast figures are token-pair calculations. Full PDF pagination/readability and a one-page rendered handoff were not independently verified here.
- Full requirement/interaction fixes are not claimed. This pass updates only this research/QA note. Questions skipped: the research and audit scope is clear; implementation decisions remain with the entrant.

## Source Register

All sources below were accessed or attempted on 11 September 2026. Search excerpts are not equivalent to reading the original page.

| ID | Source | Access and use |
| --- | --- | --- |
| SAL-01 | [Behance profile](https://www.behance.net/salman000) | Profile/project list read; identity chain confirmed through SAL-10 to SAL-11 to this owner. |
| SAL-02 | [LinkedIn repost of Colton Schweitzer](https://www.linkedin.com/posts/sabbir-ahmed-salman_ux-productdesign-userexperience-activity-7107366724156461057-l6Ku) | Original guest page read; explicit repost attribution verified. |
| SAL-03 | [Digital MCQ Bot case study](https://www.behance.net/gallery/202595601/Digital-MCQ-Bot-Case-Study) | Owner, Figma tool label, and 6 July 2024 publication date read directly; image-only design rationale not yet inspected. |
| SAL-04 | [AUST Buddy case study](https://www.behance.net/gallery/170334575/UI-Case-Study-AUST-Buddy) | Owner, Figma tool label, and 11 May 2023 publication date read directly; image-only design rationale not yet inspected. |
| SAL-05 | [Behance information page](https://www.behance.net/salman000/info) | Dribbble cross-link read directly; biography is undated. |
| SAL-06 | [Recipe app: Bengali access and reduced sign-up friction](https://www.linkedin.com/posts/sabbir-ahmed-salman_recipe-food-app-activity-7236853116720070656-Jpg4) | Authored caption and actor link to the supplied LinkedIn identity read directly in the public browser page; text fetch exposed only a sign-in prompt. |
| SAL-07 | [Ease of use and visual delight](https://www.linkedin.com/posts/sabbir-ahmed-salman_uxdesign-userexperience-designthinking-activity-7217077829073555456-__ER) | Authored public caption and exact actor link read. Page labels it edited and about two years old; no exact publication date asserted from a relative timestamp. |
| SAL-08 | [Invitations, signifiers, affordances and discoverability](https://www.linkedin.com/posts/sabbir-ahmed-salman_uiuxdesign-userexperience-interfacedesign-activity-7244004997015764992-qjhy) | Authored Bengali/English explanation read directly in the public article. No claim that the established concepts are original to the author. |
| SAL-09 | [Rough wireframes and design process](https://www.linkedin.com/posts/sabbir-ahmed-salman_ui-ux-uidesign-activity-7237177413086892033-bm6F) | Authored public caption read; describes his own rough-sketch workflow. |
| SAL-10 | [DMTCL metro-app announcement](https://www.linkedin.com/posts/sabbir-ahmed-salman_uidesign-uxdesign-materialdesign-activity-7247541992946106371-CWK0) | Authored caption explicitly names NFC, recharge and Material Design. Its short link's normal external-link page identifies Behance project 209370625. |
| SAL-11 | [DMTCL NFC System App case study](https://www.behance.net/gallery/209370625/DMTCL-NFC-System-Apps-UIUX-Case-Study) | Project title, owner salman000, Figma tag and 3 October 2024 date read in browser. Image-only research/method/outcome claims are not relied upon. |
| SAL-12 | [Medium-writing announcement](https://www.linkedin.com/posts/sabbir-ahmed-salman_ui-ux-medium-activity-7237679717925928961-WTkU) | Public authored caption and `https://lnkd.in/g7CGnV2g` destination verify the Medium account/article cross-link. |
| SAL-13 | [Bengali article: design starts with wireframes](https://medium.com/@sabbirahmedsalman24/b68ef3bbec26) | Full public article, byline and 6 September 2024 date read. Summary here is paraphrased; its illustration is not reproduced. |
| SAL-14 | [Design psychology and visual perception](https://www.linkedin.com/posts/sabbir-ahmed-salman_the-psychology-of-design-activity-7111974030194216960-eLQc) | Authored public caption read; names Susan Weinschenk's book and the "How People See" chapter. |
| HAS-01 | [Supplied LinkedIn identity](https://www.linkedin.com/in/md-sabbir-hassan/) | Direct profile inaccessible; headline/stack seen in exact-profile search result. |
| HAS-02 | [Custom CRM team-project post](https://www.linkedin.com/posts/md-sabbir-hassan_one-of-our-current-projects-activity-7339201968692690944-Fb9x) | Public browser page read directly; Hassan's caption, GenXSolutions announcement, client name, and exact actor identity distinguished. |
| REF-01 | [Salman LinkedIn identity](https://www.linkedin.com/in/sabbir-ahmed-salman/) | Supplied by participant; direct profile inaccessible. |
| REF-02 | User-supplied judge announcement posters | Announced names, roles, and employer only. |
| REF-03 | [Current competition operations and rubric](../SPRINT-OPS.md) | Read locally; use current rubric table rather than obsolete later checklist wording. |

## Access Limits and Exclusions

- Both main LinkedIn profiles failed text extraction. Several post fetches returned sign-in prompts, while their public browser article captions were available. No login bypass or private-profile access was attempted.
- Google search returned a JavaScript challenge. Bing was useful for some earlier discovery but later exact-handle queries produced unrelated results; those results and generated summaries were excluded.
- Same-name GitHub, Facebook, and civil-service profiles are unverified matches and excluded from conclusions.
- No contact details, private information, or sensitive personal characteristics are needed for this task.
- Image budget recorded for this research: 2 supplied announcement posters, 4 live frame screenshots in Assessment A, and 4 local export images in the parent pass, totalling 10 / 20. Metadata and text reads are not images; no judge-portfolio images were copied into the submission.
