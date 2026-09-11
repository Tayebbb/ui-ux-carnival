# GreenCommute: Design Decisions And Rationale

AUST CSE Carnival 8.0 | UI/UX Design Sprint | 11 September 2026

**Entrant:** Mohammed Tayeb, Department of CSE, AUST

**Product:** GreenCommute, a staff-bus companion proposed for GreenTex Apparel's garment workers in Gazipur.

[Figma design](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz) | [Boarding prototype](https://www.figma.com/proto/aWSZZboavo5bIt92qFQnsz?page-id=5%3A4&node-id=30-642&starting-point-node-id=30%3A642&scaling=scale-down) | [SOS prototype](https://www.figma.com/proto/aWSZZboavo5bIt92qFQnsz?page-id=5%3A4&node-id=29-646&starting-point-node-id=29%3A646&scaling=scale-down)

## 1. The Design Argument

GreenCommute is organised around three worker decisions: **when to leave or keep waiting, how to request the cashless fare without depending on a camera, and how to request help with honest feedback.** It is a staff-bus utility, not an on-demand ride-hailing service.

The client pack asks for an Uber-like map, QR payment, English-first presentation and emergency escalation. The same pack reports limited reading, damaged Android phones, expensive data, rain, crowding and an ineffective proposed police-email channel. We treated these tensions as design problems to resolve explicitly, not as permission to ignore either the sponsor or the worker.

Our direction was a **departure board in the worker's hand**: a prominent time or state, a clear next action, and supporting details in predictable positions. This is a design hypothesis motivated by stakeholder evidence, not a claim that a field study proved the layout superior.

This document consolidates all 22 recorded decisions and the documented refinements. It explains intent and tradeoffs; it does not certify production readiness, current prototype behaviour or successful submission. The original [DECISIONS.md](DECISIONS.md) preserves the decision history. Later qualifications, especially DL-18 through DL-22, supersede conflicting earlier descriptions.

## 2. Evidence And Its Limits

| Reference | Source in the supplied client pack | What it supports |
| --- | --- | --- |
| E-01 | Anisur Rahman's email | Reported waiting and lateness affecting production; approximately 15,000 workers at four Gazipur factories; cheap Android phones, expensive data, limited reading; 10 Tk cashless fare from a balance; English default for buyers; live map and SOS requests; dashboard and groceries explicitly postponed. |
| E-02 | Junior's kick-off notes | Reported 40 buses and eight routes; 6:30 boarding and 8:00 shift; dim/broken screens, scratched cameras, rain and sweat; factory Wi-Fi does not reach stops; sponsor's strong map requirement. |
| E-03 | Monira Khatun's HR voice-note transcript | Reported map-comprehension difficulty; preference for arrival/full-next information; concern about QR in a pushing crowd; four-digit PIN suggestion; factory security gate, with bus number, as the intended SOS recipient instead of police email. |
| E-04 | Follow-up SMS | GreenCommute product name and a question about detecting driver speeding. |

These references correspond to the numbered evidence tags in [01-understand/brief.md](01-understand/brief.md). The original pack, rather than a paraphrase here, is the authority for exact wording. HR testimony is about workers; it is not a worker interview. Source reliability and omissions are recorded in that brief.

**Evidence** means a supplied statement. **Inference** means our interpretation. **Assumption** means an unresolved dependency. **Design decision** means our chosen response. Expected benefits below are hypotheses unless explicitly identified as a recorded technical check.

No worker interviews, measured problem frequencies, comparative usability study or operational delivery test are claimed. Persona names, worker IDs, route assignments, stops, codes, balances and most displayed times are illustrative. The 10 Tk fare, 6:30 boarding and 8:00 shift are supplied facts. Fleet totals do not establish bus capacity, daily ridership, equal route allocation or how frequently buses fill.

### The Five Priorities

The [research synthesis](02-research/research.md) ranks five problems: uncertainty while waiting outside; boarding/payment friction; comprehension barriers; safety escalation risk; and connectivity/data-cost risk. Frequency is unmeasured for all five. Priority reflects the reported consequences and relevance to the core journey, not invented survey scores.

Phase 2 sharpened the worker profile around departure and wait/next-bus decisions, added the gate receiver's information needs, and retained unresolved language, ownership, payment and staffing questions. Its profile-change record describes source support and revised hypotheses, not newly recruited participants.

## 3. Decisions: Information And Navigation

### DL-01. Status First, Route Context One Tap Away

**Problem and evidence:** E-01/E-02 demand a live map, while E-03 reports difficulty understanding maps and specifically requests arrival time or full/next-bus information.

**Decision and reason:** make time, bus state and the next action primary on Home. The initial secondary schematic was later extended, with the user's approval, into optional geographic Map/Stops (DL-23). The schematic remains available as Stops. Workers can use the large status message without interpreting a map, while those who want geographic context can open it through the existing Route / View map entry.

**Alternative and tradeoff:** map-first Home was considered and rejected; removing geographic context entirely was not necessary to preserve a simple Home. The later addition is user-approved, not a new worker-study result or confirmed sponsor acceptance. U-13 remains open. Reduced interpretation burden is an expected benefit, not a measured outcome; no map-performance comparison was conducted.

### DL-23. Optional Geographic Map, With Honest Location Freshness

**Decision and reason:** S-08 Map & route shows a geographic basemap, the selected bus relative to the boarding stop, and the update time. Its Map/Stops switch retains the familiar stop sequence in S-08b. Both views preserve the originating Home context and retain SOS access. Full shows the illustrative next bus; offline shows last-known location without a fresh ETA. English and Bangla use the same navigation and state model.

**Alternative and tradeoff:** a schematic-only substitute left the sponsor's geographic-map request unresolved. An optional map addresses that gap without making Home map-first. The basemap uses [OpenStreetMap data and attribution](https://www.openstreetmap.org/copyright); the route overlay, bus positions and times remain illustrative. Production still needs an approved vehicle-location source, operator-verified route/stop data, freshness rules, a map provider and appropriate caching rights. No live GPS, exact-location guarantee or map SDK is delivered by this Figma prototype.

**Verification boundary:** recorded Figma checks cover Map/Stops navigation, origin-preserving return, offline-aware SOS entry and twelve 320/360/412 px English/Bangla layout proofs. The independent finish reviewer scored the four reported visual fixes resolved. These checks do not establish browser/Android runtime behaviour, worker comprehension, sponsor acceptance or production readiness. See the canonical [DL-23 entry](DECISIONS.md#dl-23--optional-geographic-map-status-first-home) and [screen notes](04-screens/screen-notes.md).

### DL-10. Route And Stop Context, With Conditional Next-Bus Information

**Problem and evidence:** E-01 says assigned bus; E-03 says take the next one when full. The eligibility rules are absent.

**Decision and reason:** propose a route/stop-based display that can show an eligible replacement when service data supplies one. Full is a distinct state because HR names it, not because workforce-to-bus arithmetic proves overcrowding. Do not invent the next vehicle or ETA when unknown.

**Alternative and tradeoff:** a rigid one-bus-only interpretation offers no useful replacement path; unrestricted boarding of any bus invents policy. Assignment and capacity sources remain U-4/U-11. Sample Bus 12/14 and timing values demonstrate the layout, not actual service availability.

### DL-14. Home Hub, Direct Back Paths, No Tab Bar

**Problem and evidence:** the core worker journey has few destinations; E-01/E-03 describe reading and comprehension concerns, and E-02/E-03 describe difficult interaction conditions.

**Decision and reason:** use Home as the hub, with Balance and Route directly accessible, contextual boarding, and direct returns from secondary screens. Reserve the lower action area for the task and SOS rather than a permanent navigation catalogue.

**Alternative and tradeoff:** a Home/Route/Balance tab bar consumes persistent space; a drawer hides choices. Hub-and-spoke navigation is expected to reduce choice, but its superiority and actual reachability require testing. No More destination was added for speculative features.

## 4. Decisions: Boarding And Money

### DL-02. Typed Door Code First, Optional QR Into The Same Request

**Problem and evidence:** E-01 requests QR payment, E-02 reports scratched cameras, and E-03 questions scanning in a dark, pushing crowd and suggests four digits.

**Decision and reason:** interpret the four digits as a proposed bus-door code rather than a personal account PIN. Offer keypad entry first; retain the approved scan option, including a torch control, for a usable camera. Both methods identify the same service and feed one payment path.

**Alternative and tradeoff:** QR-only excludes the non-camera path. Separate QR and keypad payment systems create duplicate logic. The early proposal to remove QR was superseded by retaining optional scanning. Daily code issuance, caching and display duties require approval under U-6. A code or QR can be copied; neither proves account ownership, physical presence, occupancy, attendance or payment.

### DL-15. Submit After The Fourth Digit

**Problem and evidence:** rain, sweat and crowding make extra actions undesirable (E-02/E-03).

**Decision and reason:** target automatic submission on digit four, with backspace and explicit feedback, rather than requiring a further Confirm tap. The aim is fewer controls at the boarding moment.

**Alternative and tradeoff:** an explicit Confirm button offers another review point but adds an action. Auto-submit must still distinguish incomplete entry, invalid/expired code and unavailable validation. Stale cache must not be presented as the worker typing incorrectly. Completion speed, wet-screen accuracy and accessible input remain test targets; a prototype shortcut is not proof of production validation.

### DL-16. Assistance Instead Of A Dead-End Lockout

**Problem and evidence:** damaged devices and camera limitations are reported; repeated code errors and a dead phone are plausible, not measured events. E-01 makes lateness a business concern.

**Decision and reason:** after a proposed three unsuccessful attempts, expose an assistance path instead of an unexplained terminal error. Showing the screen to the driver is an assistance request, not a paid ticket or entitlement to admission.

**Alternative and tradeoff:** indefinite lockout leaves no next action. Automatic admission would invent authority. The driver process, dead-phone alternative and reconciliation require U-6 approval; a screen cannot itself solve a dead phone.

### DL-12. Warn About Low Funds; Do Not Invent Credit Policy

**Problem and evidence:** E-01 specifies a cashless balance payment but supplies no top-up or zero-balance policy. Refusal could worsen lateness, although that effect was not measured.

**Decision and reason:** show low funds early. The earlier rides-remaining display and three-ride warning aimed to make the consequence understandable before arrival at the bus door, but the latest brief qualifies both: the supplied **10 Tk daily boarding fee** does not define what one paid unit covers. Confirmed Tk and pending amounts can be distinguished; converting Tk into rides requires client-approved entitlement rules. The earlier minus-three-ride grace, payroll/HR top-up and manual admission ideas remain proposals only.

**Alternative and tradeoff:** automatic refusal or unrestricted negative balance each silently decides a business policy. We retained the policy question instead. U-5/U-6 must settle funding, authority and admission; Pending does not grant credit or permission to board.

### DL-18. Payment State Must Reflect Server Evidence

**Problem and evidence:** a cached code match cannot establish that a remote debit succeeded. The pack supplies a fare, not a settlement mechanism.

**Decision and reason:** offline requests remain **Pending**; only server confirmation permits **Paid 10 Tk** and settled funds. Keep pending amounts separate from the last-confirmed balance. Persist one transaction ID for a logical request and reuse it across retries and input-method changes; the server must enforce idempotence.

**Alternative and tradeoff:** optimistic Paid feedback looks faster but risks false confirmation or duplicate charges. Daily ticket colour is a recognition cue only, not anti-fraud proof. This contract supersedes earlier offline-success descriptions. It is an implementation requirement, not a payment service delivered by Figma.

**Latest fare qualification [E/I/A/D]:** E-01 supplies a daily amount, not a per-boarding charge, return entitlement or service-day cutoff. Brief section 4.3, FARE-1 through FARE-5, therefore separates payment continuity from entitlement. Back, reopening, switching typed entry to QR and retrying must preserve the same logical payment identity and known state; navigation alone must not submit a draft or create another charge. If identity cannot be recovered, disclose unresolved status and reconcile before resubmission. A genuinely new payment requires explicit intent and a client-approved charging rule. These are proposed acceptance requirements, not approved policy or passed tests.

## 5. Decisions: Safety And Connectivity

### DL-03. SOS To Factory Security, Quiet By Default

**Problem and evidence:** E-01 proposes police email; E-03 rejects that channel and names the security gate with the bus number.

**Decision and reason:** route the proposed incident to factory security. Include bus number, worker reference, timestamp, unique alert ID and available location with age/accuracy. Use a deliberate hold with quiet feedback; avoid automatically informing the driver because the nature of the threat is unknown.

**Alternative and tradeoff:** police email contradicts HR's account; an audible alarm or automatic driver alert may disclose the request. Quiet feedback does not ensure screen privacy, and a hold may be harder on wet screens. The approximately two-second hold is a design target, not a proven accidental-trigger threshold. Staffing, channel and response authority remain U-7/U-9.

### DL-18. Separate Sending, Delivery, Acknowledgement And Response

**Decision and reason:** **Sending** means an attempt is underway; **Not sent** means no successful transmission; **Delivered** requires channel receipt; **Acknowledged** requires a gate response. None means help has arrived. Reuse one alert ID through retries and fallback channels. Request help without waiting for GPS, and disclose unavailable or stale location.

**Alternative and tradeoff:** instant Security notified or a timer-driven success message would overstate what the system knows. A cancellation after delivery is an update to the same incident, not deletion or recall. Confirm active-alert cancellation; cancelling a hold before transmission is a different action. No three-second delivery or help-arrival guarantee is made. Figma simulates these states and sends no real emergency messages.

### DL-05. Dated Cache And Small Updates, With Conditional SMS

**Problem and evidence:** E-01/E-02 describe expensive data and factory Wi-Fi unavailable at stops. They do not establish absent mobile service or reliable SMS.

**Decision and reason:** propose caching the shell, route, authorised identity and available supporting data while connected. Use small updates and visible source times. Do not let stale arrival information masquerade as a live countdown. SMS is a possible fallback only after coverage, cost, permissions and integration are confirmed.

**Alternative and tradeoff:** continuous connectivity should not be required to read cached content; SMS-only would not cover the approved app journey. Offline tolerance is not offline live tracking, payment settlement or guaranteed emergency delivery. Data budgets and stale thresholds are proposed configuration targets, not measured performance.

### DL-09. Security Gate Officer As The Secondary Persona

**Problem and evidence:** both driver and security appear relevant, but E-03 explicitly names the receiver of the graded SOS journey.

**Decision and reason:** choose the gate officer as the secondary persona so the research directly informs the payload and acknowledgement model. Keep the driver tertiary, relevant to boarding operations and the speeding request.

**Alternative and tradeoff:** making the driver secondary would give less attention to the receiving side of SOS. This prioritisation does not establish a staffed dispatcher, a gender, a shift or a receiving device. The persona is illustrative and does not imply that a staff app has been built.

## 6. Decisions: Language, Device And Visual System

### DL-04. English Default With Immediate Bangla Access

**Problem and evidence:** E-01 explicitly requests English for a buyer presentation while reporting reading difficulties; E-03 calls for plain status information.

**Decision and reason:** preserve English pre-selection, expose an immediate Bangla choice, and retain language access on core screens. A selection check and selected-language feedback make the current choice explicit. Use one layout and bind translated copy and script-appropriate fonts to language modes. Assisted setup is optional, not required to switch.

**Alternative and tradeoff:** English-only excludes a needed language option; Bangla-only or a neutral initial choice would override the explicit default. Translation alone does not solve limited reading. Bangla audio remains an intended option, but audio playback is not implemented. Native review, numeral preference, reading and audio comprehension remain untested.

### DL-06. Android Portrait Base, Responsive Targets

**Problem and evidence:** cheap Android phones are explicit in E-01, with damaged/dim screens in E-02. Exact models and OS versions are absent.

**Decision and reason:** use a 360 x 800 design base, Auto Layout and smaller/larger width proofs rather than an iPhone or desktop-first presentation. Target 320-430 px reflow. Keep primary actions generously sized and in a consistent lower area, reflecting the inferred one-handed context.

**Alternative and tradeoff:** a desktop or iPhone-first frame is less aligned to the supplied device class. A base frame is not a device-distribution study; Figma pixels and prototype scaling do not establish Android dp, reachability, keyboard behaviour or runtime accessibility.

### DL-11. One Light, High-Contrast Theme

**Problem and evidence:** E-02 reports darkness, dim displays, damage and wet interaction. No panel technology or measured light-versus-dark preference is supplied.

**Decision and reason:** retain one light theme with near-black text, strong status colours and redundant labels/icons. A single theme keeps the system and QA scope coherent. Green supports the product identity; amber distinguishes Full, and red communicates danger/SOS. Waiting, riding and SOS use distinct treatments without moving essential controls arbitrarily.

**Alternative and tradeoff:** dark-first, glass effects and decorative motion were not prioritised. A second theme would add QA scope without evidence of need. We do not claim light mode was experimentally proven better outdoors or that every colour pair reaches a universal 7:1/12:1 target.

### DL-17. Purposeful Type Hierarchy, Revised As Layouts Evolved

**Decision and reason:** use Archivo for prominent numbers/headings, Inter for supporting English UI and Noto Sans Bengali for Bangla. Hierarchy follows the worker's next decision: status/time first, then bus and action, then supporting detail. Named roles allow consistent changes across screens and locales.

**Revision and tradeoff:** the early uniform 18 px body target was qualified to at least 17 px actionable text, 15 px secondary details and 13 px non-decision captions. Earlier 88-128 px hero guidance is not universal: later ticket refinements use 64 px bus headings to accommodate payment and identity information. These are intentional role-specific sizes, not evidence that the early target held everywhere. Historical measurement rationales were qualified in DL-20; current fit must be judged from the relevant proof, not the original specification.

### DL-07. Original GreenCommute Identity And Explicit Credits

**Problem and evidence:** E-04 supplies the name; the source map records no supplied product-logo asset.

**Decision and reason:** create a GreenCommute wordmark with a bus/leaf mark in-house. Use it consistently on entry and app headers. Credit the original mark, Lucide icons and the three font families instead of borrowing an unexplained logo or confusing Carnival branding with product branding.

**Alternative and tradeoff:** an unrelated downloaded green logo adds provenance risk; the event logo represents the competition, not the product. Whether an original mark satisfies the theme-logo requirement is for the organisers/judges, not something we can certify. Recorded credits: Lucide, ISC; Archivo, Inter and Noto Sans Bengali, SIL Open Font License.

### Recorded Visual And File Refinements

These implementation choices are documented in the [screen notes](04-screens/screen-notes.md), [design-system notes](05-design-file/design-system-and-accessibility.md) and [repair history](HANDOFF.md). They do not add new research evidence.

| Choice or refinement | Why it was made | Qualification |
| --- | --- | --- |
| Named primitive and semantic variables; reusable Button, Status, Key, Banner, SOS, Top bar and Tile components | Keep spacing, colour and state behaviour consistent; make developer mapping and later corrections systematic. | Historical component/style counts are snapshots, not a fresh inventory of the final file. |
| Large contextual actions, keypad targets and persistent SOS on key journey screens | Support the reported damaged/wet-screen context and inferred one-handed operation. | Latest design-system notes record the language-chip master and 32 checked page-03 instances at 122 x 56 px, correcting the earlier 40 px warning. Native targets and assistive-technology order still need runtime verification. |
| Full, Arrived and Delayed variants in the same Home structure | Explain the next action without forcing the worker to learn another layout. | Replacement buses and current estimates require service evidence; illustrative screen values are not operational facts. |
| Stronger Coming and Full foreground colours; SOS ring contrast repair | Address recorded low-contrast combinations while preserving identity. | Contrast tables document selected pairs, not whole-product WCAG certification. |
| Compact tickets: worker name/ID, balance, wrapping payment text, aligned bottom actions | Reduce repeated instructions and avoid clipping while preserving payment meaning. | Later ticket checks recorded zero containment failures at English 360/320 and Bangla 320; not a full device or payment test. |
| Ticket navigation retained while redundant timer explanation was removed | Reduce visual repetition without changing the recorded navigation. | A timer never establishes boarding or payment; automatic progression still needs usability review. |
| Locale-bound copy and fonts, exactly one language-selection indicator | Make the chosen language visible and preserve script rendering through the journey. | Recorded text/layout checks do not equal a full browser replay, native translation review or audio implementation. |
| Redlines rebuilt into readable, auto-height annotation columns | Make spacing, type, tokens and implementation detail inspectable by developers. | Annotated copies are documentation, not additional prototype destinations. |
| SOS text containment and header-alignment repairs | Keep the status, payload and actions readable without weakening safety wording. | Latest screen/design-system notes record 28/18/16 px title/status/disclosure roles, a 12 px detail gap and passing containment checks at English 360/320 and Bangla 320. These scoped records and the 21:28 coordination note supersede historical pending typography notes, not the outstanding interaction replay. |
| Brief state transitions instead of decorative animation | Direct attention to a meaningful change and keep the operational task central. | Low-end runtime performance, reduced motion and hold interaction require testing. |

## 7. Decisions: Scope, Roles And Account Access

### DL-08. Protect The Worker Journey From Future Modules

**Problem and evidence:** E-01 explicitly says dashboard and groceries are not for now. The sprint has a fixed six-hour scope.

**Decision and reason:** prioritise waiting, boarding/payment, in-transit and SOS, with Balance, Route and language supporting them. Do not add a grocery destination or speculative More menu simply to reserve space.

**Alternative and tradeoff:** broader coverage would consume attention and testing time while weakening the main journey. The distinction matters: dashboard/groceries were client-deferred; speeding was not. DL-21 corrects the earlier grouping.

### DL-13. No Worker Speedometer Or Silent Worker-Phone Tracking

**Problem and evidence:** E-04 asks whether driver speeding can be tracked but supplies no telemetry, threshold source, permissions or response process.

**Decision and reason:** defer implementation rather than imply the worker phone can safely or accurately establish a violation. Keep worker SOS independent of fleet monitoring. Vehicle-based sensing and authorised management review are proposals, not delivered features.

**Alternative and tradeoff:** a speedometer adds a worker task without resolving data quality or ownership; silent tracking introduces an unjustified privacy assumption. The speeding request remains unmet in the prototype, explicitly acknowledged rather than described as client-approved deferral.

### DL-21. Document Receiving And Fleet-Safety Responsibilities Without Adding Staff Screens

**Decision and reason:** specify proposed worker, security, transport-manager, driver, HR and administrator boundaries. The receiving workflow separates delivery, human acknowledgement, response actions and cancellation updates. A potential future speeding workflow uses verified vehicle telemetry, quality checks, an approved threshold, deduplicated events and authorised review.

**Alternative and tradeoff:** a new role picker or dashboard would expand the worker interface without making the service operational. Role permissions must be enforced server-side, not by hiding controls. Unknown/stale telemetry means monitoring unavailable, not safe; a threshold exceedance is not automatically a legal violation or grounds for punishment. Ownership, privacy, retention, staffing and thresholds require client approval. No detector or staff service is implemented.

### DL-22. Authenticate Before Personalised Home

**Problem:** the earlier language-to-Home path exposed a sample personalised account without representing account ownership. A worker ID or shared bus code is not sufficient authentication.

**Decision and reason:** the later authorised design adds company-provisioned worker ID and password before personalised Home, with masked entry, Show/Hide, credential-manager/autofill/paste support as implementation requirements, and visible assisted setup/recovery. Session continuity is opt-in for personal devices, not automatic on shared phones. First/new-device sign-in requires connectivity; offline failure does not grant access.

**Alternatives and tradeoffs:** SMS-only depends on phone ownership and delivery that are unknown. Passkeys remain a future supported-device option, not something categorically impossible on inexpensive Android. A shared door code or short remote PIN alone is rejected as an account credential. Passwords add a real recall/typing burden; assisted enrolment and recovery require both security checks and usability testing. No public self-registration or role picker is added.

**Engineering boundary:** use established server authentication, protected credential storage, rate limiting and revocable sessions; do not embed real credentials in the prototype. Recovery must not imply identity has been verified merely by navigating to another screen. Login assistance is not emergency dispatch. An unauthenticated emergency-contact route is a production requirement using client-verified details, not a live service claimed here.

**References recorded for this decision:** [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), [W3C accessible authentication guidance](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html), and [Android Credential Manager](https://developer.android.com/identity/credential-manager). DL-22 records review of these references on 11 September 2026. They are engineering guidance, not GreenTex user research or proof of standards compliance.

## 8. Decisions: Honest Documentation And Handoff

### DL-19. Keep Evidence, Assumptions And Approved Scope Separate

**Decision and reason:** retain five prioritised problems with unmeasured frequency; label illustrative profiles and journey values; preserve approved optional QR, language access, schematic and worker navigation. Keep grace, staffing, assignment and connectivity questions open instead of turning plausible operations into facts.

**Alternative and tradeoff:** stronger-sounding claims would be easier to present but less defensible. Entrant approval selects a design direction; it does not equal client approval of credit, security staffing, telemetry or the map compromise.

### DL-20. Do Not Present Specifications Or References As Completed Tests

**Decision and reason:** distinguish requirement targets, Figma simulations, recorded technical snapshots and deployed behaviour. Earlier Material Design, GOV.UK, Uber Base and BBC references are pattern candidates; the historical record only substantiates fetching their index, not a completed comparative study. Later authentication references have their own separate recorded provenance.

**Alternative and tradeoff:** treating a diagram as a verified flow or a Figma measurement as runtime accessibility would overstate delivery. Preserve the phase history with explicit corrections rather than silently inventing test dates, scores, interviews or outcomes.

## 9. Traceability From Need To Screen

| Need / story | Main decisions | Design surface |
| --- | --- | --- |
| US-1: understand arrival and current bus state | DL-01, DL-04, DL-06, DL-10, DL-11, DL-17 | S-01 Coming, Arrived, Full and Delayed; language access |
| US-2: make departure decisions from fresh information | DL-01, DL-05, DL-10 | S-01; N-01 notification specifications; delivery service unimplemented |
| US-3: request fare without depending on a camera | DL-02, DL-15, DL-16, DL-18 | S-02 keypad, S-02b scan alternative, S-03 pending/paid ticket |
| US-4: request help discreetly with honest progress | DL-03, DL-18 | SOS access; S-05 activation; S-06 status |
| US-5: understand confirmed funds and pending requests | DL-12, DL-18 | Home balance, S-03 ticket, S-07 balance |
| US-6: give the intended gate receiver enough incident context | DL-09, DL-18, DL-21 | Worker-facing SOS status plus proposed receiving contract; no staff UI |
| Sponsor: English presentation and route context | DL-01, DL-04, DL-07 | S-09 language, shared identity, S-08 schematic |
| Account ownership before personal information | DL-22 | Later S-10 sign-in and assistance/recovery design; runtime service absent |
| Requested fleet safety capability | DL-13, DL-21 | Proposed service appendix, not delivered detection |

The [structure document](03-structure/structure.md) contains the sitemap, boarding/SOS flow specifications, screen inventory, wireframe descriptions and rejected map-first Home. Earlier diagrams predate DL-22: the current intended entry sequence is **Language > Sign in > personalised Home**, not direct access after language selection. Their existence does not certify that every later addition has a matching updated wireframe or export.

## 10. What This Submission Does And Does Not Establish

**Design coverage:** the documents describe waiting variants, typed and optional scanned boarding, pending/paid tickets, in-transit, SOS, balance, route and language, with a later authentication addition. The Figma file, exported screens and prototype demonstrate design work; backend operations are not deployed.

**Recorded checks:** prior sessions documented selected contrast measurements, text/style/variable audits, language bindings, responsive containment checks, ticket repairs and redlines. Counts and dimensions refer to their specific snapshots. Concurrent later changes mean they are not a blanket certification of the final file. Whole-flow replay, logged-out access and export freshness need a final independent check.

**Known documentary drift:** some earlier screen and handoff descriptions still contain direct language-to-Home navigation, timed payment/SOS success, universal hero-size claims or older screen counts. Read those as historical descriptions. DL-18 governs payment/SOS truthfulness; DL-22 governs intended authentication; later ticket refinements govern their 64 px headings. Brief section 4.3 qualifies earlier rides-left arithmetic and establishes proposed payment-continuity gates. Phase 4's description of Full as routine and its LCD/light-theme superiority claim are not supported by measured frequency or panel evidence. This rationale does not retroactively claim every screen and exported page was synchronised.

**SOS presentation under reconciliation:** the packaging checkpoint records two Cancel-labelled controls on S-05 whose actions were not inspected, and a Home safety-check action that differs from the redlines' press/hold and two-second description. The [prototype coordination record](review/prototype-repair-coordination.md) assigns cancellation/navigation repairs and preserves a five-second simulated countdown. These records show an evolving interaction and documentation discrepancy, not a final verified failure or completed integration. The deliberate-hold description above preserves the logged decision history; the settled activation contract and final cancellation behaviour require reconciliation and replay. No timer establishes real delivery.

**Real content, not fabricated research:** the screens use task-specific illustrative copy rather than filler text. Illustrative people, money, routes and times are not production records. No measured reduction in waiting, lateness, boarding time, distress or emergency response is claimed.

### Before A Real Pilot

| Open dependency | Why approval or testing is necessary |
| --- | --- |
| U-1/U-2/U-10: ownership, reading, numerals, OS and device capability | Establish viable authentication, language, reach, notifications and shared-device behaviour. |
| U-3/U-4/U-11: walking time, ETA/capacity source and assignment rules | Avoid misleading departure advice, invented full status or ineligible replacement buses. |
| U-5/U-6/U-8: daily fare coverage, top-up, grace, codes and assisted admission | Approve the paid unit, return eligibility, service-day cutoff and new-charge rule before converting Tk to rides; decide financial responsibility and recovery without inventing boarding authority. |
| U-7/U-9: connectivity, verified contacts, security staffing and escalation | Validate delivery, acknowledgement, call/SMS fallback and response ownership separately. |
| U-8: return commute | Determine whether a second journey must be designed. |
| U-12: vehicle telemetry, thresholds, privacy and permissions | Establish whether a reviewable fleet-safety service is feasible and authorised. |
| U-13/U-14: sponsor acceptance of route view and current worker practices | Resolve the map compromise and establish a baseline against which to test improvement. |

Suggested validation is a supervised pilot of departure/status comprehension, keypad/scan recovery, pending-payment reconciliation, SOS delivery versus acknowledgement comprehension, authentication/recovery and shared-device use. Include realistic device, language and connectivity conditions without generating live emergency messages unintentionally. Measure task completion, assistance needed, errors and service evidence; compare waiting/lateness only against an established baseline. These are proposed next steps, not tests completed during the sprint.

## 11. Submission Materials And Attribution

The evidence trail is retained in [01-understand/brief.md](01-understand/brief.md), [02-research/research.md](02-research/research.md), [03-structure/structure.md](03-structure/structure.md), [04-screens/screen-notes.md](04-screens/screen-notes.md), [05-design-file/design-system-and-accessibility.md](05-design-file/design-system-and-accessibility.md), [06-handoff/handoff.md](06-handoff/handoff.md), and [DECISIONS.md](DECISIONS.md). The developer note and redlines carry implementation handoff; this document provides the consolidated rationale.

GreenCommute's mark is original. Icons are credited to Lucide; fonts to Archivo, Inter and Noto Sans Bengali under their recorded licences. GitHub Copilot assisted with drafting, Figma construction and technical auditing. Design judgement and the submitted work remain the entrant's responsibility. AI assistance is not presented as independent user research.

**Closing position:** we prioritised actionable commute information, a non-camera boarding path and honest safety/payment states while preserving the sponsor's English default and secondary route context. Where the pack did not establish a policy, service or user capability, we documented the dependency rather than claiming certainty. That is the rationale for the design, and the boundary of what the sprint demonstrates.
