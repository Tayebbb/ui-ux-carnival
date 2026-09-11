# Decision log — AUST CSE Carnival 8.0 · UI/UX Design Sprint

Filled live from 17:00 on 11 Sep 2026. Empty before the theme drop (rule 02).
Tags: `[E]` evidence (theme/scenario text) · `[I]` inference · `[A]` assumption · `[D]` design implication.

**Documentary revision (untimed; DL-18–20).** Existing DL-01–17 IDs, phase labels and meaningful alternatives are retained as provenance. Their active wording is qualified below; the new entries explicitly supersede unsupported certainty, not the approved identity or navigation. This correction is not backdated and records no new interviews, scores, tests, Figma changes or exports. Source quotations are retained as recorded excerpts; ellipses mark abbreviated extracts, not a newly verified verbatim transcript.

Entry format:

```
DL-nn · title · phase · clock
PROBLEM →
EVIDENCE → (cite scenario/theme; tag E/I/A)
INSIGHT →
USER NEED →
DECISION →
EXPECTED BENEFIT →
Rejected alternatives →
```

## Entries

**DL-01 · Status-first home; map demoted · Phase 1**
PROBLEM → Sponsor demands a live map; HR reports difficulty understanding maps. Map-loading performance and mobile coverage are unmeasured.
EVIDENCE → [E·01] "assigned bus moving on a live map"; [E·02] "map view is an absolute must"; [E·03] "do not understand live maps… big text 'Bus is 10 minutes away'"; [E·01, E·02] cheap Android, expensive data, no Wi-Fi at stops.
INSIGHT → [I] Status and alerts address the leave-home need described by HR; comparative superiority has not been tested.
USER NEED → Glanceable bus status with honest freshness and uncertainty.
DECISION → [D] Retain status-first Home. The initial one-tap cached schematic compromise is superseded by the user's optional geographic Map/Stops addition in DL-23; the schematic remains the Stops alternative. This later approval does not retrospectively establish sponsor acceptance or a live tracking service.
EXPECTED BENEFIT → [I] Reduced interpretation/data burden. Sponsor acceptance and rubric compliance with the absolute map requirement remain **unconfirmed** (U-13); user approval is not sponsor approval.
Rejected → Map-first Home (puts a reported comprehension difficulty on the critical path [I]) · removing the map entirely (ignores the sponsor request and user's approved compromise).

**DL-02 · Boarding = the bus's daily code, entered at the kerb · Phase 1 · refined after review**
PROBLEM → QR payment at the bus door carries camera/crowding risks. Monira's "4-digit PIN" is ambiguous — whose PIN?
EVIDENCE → [E·02] half the cameras scratched; [E·02, E·03] 6:30 dark, pushing crowd, rain; [E·03] "can they just use a 4-digit PIN?"; [E·01] pay from a balance, no cash.
INSIGHT → [I] Camera damage and crowding justify typed entry alongside scanning. A shared door code, QR or personal PIN alone is not proof of physical presence, identity, attendance or occupancy. Daily rotation/colour does not prevent copied-code or screenshot misuse.
USER NEED → Request boarding/payment quickly without cash or a required camera, with honest pending/confirmed status.
DECISION → [D] Proposed daily door card carries four digits and a QR of the same code; distribution/cache logistics remain [A, U-6]. Typed entry and user-approved optional "Scan instead" (camera + torch) share one payment path. Offline **Pending** becomes **Paid 10 Tk** only after server confirmation; retries reuse one transaction ID (DL-18). Colour is a recognition cue. Retain QR; the historical first-cut suggestion is superseded by user approval.
EXPECTED BENEFIT → [I] Fewer camera-dependent steps; ≤ 2 taps + 4 digits is an untested interaction target, not a universal device/speed claim. No automatic full-bus or fraud-detection claim follows from a payment record.
Rejected → QR-only entry (excludes a non-camera fallback) · a separate QR payment flow (unnecessary duplication) · removing QR (earlier draft, superseded by user approval) · treating a personal PIN or shared code as presence proof · NFC/beacons (hardware unknown).

**DL-03 · SOS routes to factory security as dispatcher; discreet by default · Phase 1 · refined after review**
PROBLEM → Client wants SOS to email the local police. The gate is kilometres from a moving bus — who actually responds?
EVIDENCE → [E·03] "emailing the police is useless, they never check it… alert our factory security gate with the specific bus number"; [E·01] "if they feel unsafe", dawn travel, mostly women.
INSIGHT → [I] HR identifies the security gate as the intended recipient, not a verified staffed dispatcher or response time. The threat may be on the bus, so automatic driver alerts could create risk.
USER NEED → Request help discreetly and distinguish transmission, delivery and human acknowledgement.
DECISION → [D] Target factory security, not police email; hold-to-trigger with quiet local feedback. Payload = bus number, available location with age, worker identity, time and unique alert ID. **Sending / Not sent / Delivered / Acknowledged** follow evidence (DL-18). Push/SMS, call-back, staffing and escalation policy remain [A, U-7, U-9]. No automatic driver alert; cancellation is a request, not proof a delivered alert was recalled.
EXPECTED BENEFIT → [I] Clearer routing and fewer misleading reassurances. Quiet feedback does not ensure screen privacy; no guaranteed delivery in three seconds, acknowledgement time or help arrival.
Rejected → Police email (unread) · auto-alert to the driver (may be the threat) · audible alarm (announces the alert) · inventing a "route supervisor" role (no such role in the pack).

**DL-04 · English default + unmissable বাংলা switch · Phase 1 · revised by Tayeb after review**
PROBLEM → English default demanded for a buyer demo; users often cannot read.
EVIDENCE → [E·01] "many cannot read properly… keep English as the default… present this to foreign buyers"; [E·03] big plain text.
INSIGHT → [I] Preserve the explicit English default while reducing language barriers; icons/numerals alone are not proven sufficient.
USER NEED → Reach the preferred language and audio option immediately; understand the current state.
DECISION → [D] English pre-selected; retain the user-approved immediate বাংলা/audio switch on first launch and core screens. HR-assisted set-up remains a proposal [A], not a condition for switching. Numbers, icons, text and colour support comprehension; translations, numeral preference and audio need validation.
EXPECTED BENEFIT → [I] One layout can support the buyer presentation and worker use. Bangla reading, typing, audio comprehension and one-tap prototype behaviour are not verified here.
Risk accepted → English appears first; the prominent switch is the approved mitigation, not evidence that every worker will understand it.
Rejected → Neutral first-launch language choice (first draft — contradicts an explicit client instruction without necessity) · English-only (fails users) · Bangla-only (fails the stated business need).

**DL-05 · Offline-first with SMS fallback · Phase 1**
PROBLEM → App is meant to load on factory Wi-Fi that does not reach the stops; data is expensive.
EVIDENCE → [E·01] "3 km away, so maybe figure that out"; [E·02] "Wi-Fi doesn't reach the bus stops. offline mode needed?"
INSIGHT → [I] No factory Wi-Fi and expensive data justify interruption handling; they do not establish absent mobile data or reliable SMS.
USER NEED → Usable cached information with explicit freshness; no false promise of live updates or sent SOS.
DECISION → [D] Cache shell, route, identity and proposed code data when connected; small live payloads; timestamp status. SMS is a candidate fallback [A] subject to coverage, cost, permissions and service integration. Offline payment/SOS use DL-18 states, not implied success.
EXPECTED BENEFIT → [I] Useful cached content under interruption; live status, payment finality and alert delivery still depend on validated services.
Rejected → Requiring continuous data for cached content · SMS-only product (would not cover the approved app flow).

**DL-06 · Platform and frame: Android phone, 360 × 800 · Phase 1**
PROBLEM → Platform must be fixed before structure.
EVIDENCE → [E·01] "cheap Android sets"; [E·02] broken screens, dim brightness.
INSIGHT → The audience's device is a low-end Android; an iPhone frame would misrepresent every size decision.
DECISION → [D] Retain user-approved 360 × 800 portrait base; target auto-layout reflow at 320–430 px. This is a responsive design target, not a measured distribution of workers' devices or a completed resize test.
EXPECTED BENEFIT → [I] Consistent device-class constraints. Parent visual QA must check reflow, clipping, targets and contrast; no pass by construction (DL-20).
Rejected → 390 × 844 iPhone frame · web/desktop (no evidence of desktop use by workers).

**DL-07 · GreenCommute wordmark created in-house · Phase 1**
PROBLEM → The rubric expects the theme's logo; the pack supplies only a name.
EVIDENCE → [E·04] "app should be called 'GreenCommute'"; client GreenTex Apparel [I from domain]. No asset in the pack.
DECISION → Draw a simple GreenCommute wordmark + bus/leaf mark in Figma; treat it as the theme logo; credit as original.
EXPECTED BENEFIT → [I] Original identity avoids uncredited borrowed assets. Approved identity is preserved; acceptance as the theme logo and rubric compliance are not established by this entry.
Rejected → Using the Carnival logo as the product logo (wrong brand) · downloading a green logo (uncredited work).

**DL-08 · Scope: dashboard, groceries, speeding parked · Phase 1**
PROBLEM → Client asks to keep future features "in mind"; a six-hour sprint grades the worker journey.
EVIDENCE → [E·01] "Not now. But design keeping in mind."; [E·04] speeding.
DECISION → [D] Keep all three as deferred questions, outside current IA. The historical More reservation and speed-indicator suggestion are superseded: no new destination, grocery module or tracking permission follows from a future request (DL-19).
EXPECTED BENEFIT → [I] Protect attention for waiting, boarding, in-transit and SOS. Coverage is a target for parent QA, not a result asserted here.

**DL-09 · Secondary persona = factory security gate officer; driver tertiary · Phase 1 → 2 · locked by Tayeb**
PROBLEM → Phase 2 requires one secondary persona; the pack offers two candidates.
EVIDENCE → [E·03] SOS must alert the factory security gate with the bus number; rubric Phase 4/5 grade the SOS state and the SOS prototype flow. Driver appears only via "bus full" and speeding [E·03, E·04].
INSIGHT → The gate officer is the receiver in a graded flow; what he needs defines the SOS payload and confirmation. The driver's needs shape future manager/telemetry work, not this sprint's screens.
DECISION → Secondary persona = security gate officer. Driver = tertiary, noted in Phase 2 without a full persona.
EXPECTED BENEFIT → Persona work feeds directly into the SOS screen and prototype.

**DL-10 · Route/stop assignment model proposed · Phase 1 (contradiction C9)**
PROBLEM → The relationship between an assigned bus and permission to take the next one is unspecified.
EVIDENCE → [E·01] "their assigned bus"; [E·03] "Bus is full, take the next one"; [E·02] 40 buses, 8 routes.
INSIGHT → [I] A route-based display may reconcile these statements; fleet totals imply neither equal allocation nor reassignment rules or routine fullness.
DECISION → [D] Retain the route/stop display and next-bus path. Show an eligible bus/ETA only when provided; otherwise disclose unavailable information. U-4 and U-11 remain open, not validated by Phase 2.
EXPECTED BENEFIT → [I] A useful response to the HR-described Full state without manufacturing availability or a schedule.

**DL-11 · One light, high-contrast theme; dark mode only as a variables mode if time allows · Phase 1**
PROBLEM → Dim, cracked, rain-wet screens used from pre-dawn darkness through daylight; a theme must be fixed before Phase 4.
EVIDENCE → [E·02] boarding 6:30 "in the dark", "dim brightness", broken screens, rain. Actual panel technology, trip duration and theme performance are unknown [A].
INSIGHT → [I] Contrast, type size and redundant status cues merit testing under the reported conditions; no measured superiority of a theme is claimed.
DECISION → One light theme: near-black text on white, ≥ 7:1 wherever text sits, ≥ 12:1 on the hero status, large saturated status blocks (green / amber / red) with icons. Dark mode is not designed unless Phase 5 has slack — then as a Figma variables mode (token swap), which also demonstrates "named variables".
EXPECTED BENEFIT → [I] One coherent theme limits build/QA scope. Legibility and ratios are verification targets; preserve the approved identity, with no mandatory grayscale or theme redesign.
Rejected → Changing the default theme without evidence · two full themes in Phase 4 (extra build/QA scope).

**DL-12 · Grace rides proposed to avoid refusal · Phase 1 (contradiction C10; policy unapproved)**
PROBLEM → Cashless fare from a balance; nothing in the pack says what happens at zero.
EVIDENCE → [E·01] "no cash allowed anymore… pay from their balance"; [E·01] lateness stops production — "the main thing"; top-up method absent.
INSIGHT → [I] A shortfall could worsen lateness; its cost and the correct admission policy are not established.
DECISION → [D/A] Retain low-balance warning as a target. Historical −3-ride grace, payroll/HR top-up and manual admission are proposals requiring **client approval** (U-5, U-6). Pending payment is not credit, permission to board or a settled debit (DL-18).
EXPECTED BENEFIT → [I] Earlier visibility of a shortfall; no promise that every worker will be admitted or that grace is the only viable policy.
Rejected → Silently applying unapproved grace or unlimited negative balance; automatic refusal was a design concern, not a settled policy choice.

**DL-13 · Speeding is manager-side; no speed UI for workers · Phase 1**
PROBLEM → Client asks whether the app can track driver speeding.
EVIDENCE → [E·04] "can it track if the driver is speeding?"; vehicle telemetry, permissions and collection policy are absent.
INSIGHT → [I] The question needs feasibility and privacy decisions; effects on worker/driver trust are hypotheses, not observed behaviour.
DECISION → [D] Defer speeding entirely. No silent worker-phone GPS/speed collection and no new worker speed/report UI. A future vehicle-telemetry proposal needs verified data, consent/permissions and retention policy (U-12).
EXPECTED BENEFIT → [I] Preserve the current worker scope without treating a question as authorisation to monitor people.
Rejected → Silent worker-phone tracking; an unvalidated worker-facing speed feature.

Current qualification (DL-21): deferring speeding was our scope decision, not an explicit client instruction. Its proposed service and role contracts are now documented in the appendix below; detection and staff screens remain outside the delivered prototype.

**DL-14 · Hub-and-spoke navigation, no tab bar · Phase 3**
PROBLEM → How the worker moves between the few screens she needs.
EVIDENCE → [E·01] limited reading; [E·02] wet, dim; [I] one-handed use; [E·03] "they just want a notification or a big text".
INSIGHT → [I] A Home hub preserves space for contextual actions and SOS. Screen-use frequencies and comparative navigation performance are unmeasured.
DECISION → [D] Preserve approved hub-and-spoke navigation, no tab bar: Balance and Route from Home, direct Back on secondary views, persistent SOS on Home/In transit. These are interaction targets, not a claim all prototype links were verified.
EXPECTED BENEFIT → [I] Fewer navigation choices; parent QA verifies actual reachability without a new More destination.
Rejected → Bottom tab bar (Home / Route / Balance) · drawer menu (hidden, needs reading).

**DL-15 · Keypad auto-submits on the fourth digit · Phase 3**
PROBLEM → Every extra tap at the kerb costs seconds in a crowd with wet hands.
EVIDENCE → [E·02, E·03] rain, sweat, pushing crowd. A cached daily-code list is a design assumption [A], not source evidence.
DECISION → [D] Target auto-submit on the fourth digit with backspace and explicit invalid/expired-code feedback. Cache validation, when available, cannot confirm presence or final payment. Missing/stale validation data must not be labelled a wrong user entry; retain Pending until server confirmation (DL-18).
EXPECTED BENEFIT → [I] Target Board + 4 digit taps, without an extra Confirm button. Actual keypad, QR fill, errors and retry behaviour require parent prototype QA.
Rejected → Explicit Confirm button (one more target on a wet screen).

**DL-16 · "Show this screen to the driver" fallback · Phase 3**
PROBLEM → Three wrong codes, a dead camera and a dead phone are all plausible at 6:30; the flow must never dead-end at the door.
EVIDENCE → [E·02] broken phones, scratched cameras; [E·01] lateness is the cost the client fears most.
DECISION → [D] After three failed codes, target a visible assistance path. "Show this screen to the driver" is proposed copy, not guaranteed admission; driver authority, HR reconciliation and dead-phone handling require **client approval** (U-6). No successful payment or boarding claim follows from this screen.
EXPECTED BENEFIT → [I] A visible next action instead of a hidden setting; admission is not guaranteed by the prototype.
Rejected → Locking the worker out after failed attempts.

**DL-17 · Type floors: 15 px secondary, 17 px+ primary, 88 px+ hero · Phase 5 (revises NFR-1's 18 px body)**
PROBLEM → The earlier Phase 5 entry attributed revised type floors to 320 px reflow/script measurements. Those test results are not evidenced in this documentary correction; do not treat the recorded rationale as a fresh verification.
EVIDENCE → [E·02] cheap Android, dim screens; [D] NFR-5 reflow target. Historical size revision retained: proposed ticket hero 96 → 88 px; measurement evidence remains for parent QA.
DECISION → [D] Retain approved type-floor targets: hero 88–128 px; state words/CTAs ≥ 17 px; details/labels ≥ 15 px; non-decision captions ≥ 13 px. No new visual or theme change is authorised by this entry.
EXPECTED BENEFIT → [I] Large actionable text with less wrapping. Actual 320–430 px fit, contrast and clipping require parent evidence, not a pass claimed here.
Rejected → A uniform 18 px floor was the historical alternative; its alleged clipping impact is unverified here (DL-20).

## Current documentary corrections

**DL-18 · Payment and SOS truthfulness · current untimed revision**
PROBLEM → Earlier requirements conflated cached code entry with payment/presence, and local SOS feedback with delivered help.
EVIDENCE → [E·01] cashless 10 Tk fare from a balance; [E·03] PIN suggestion and security gate with bus number. Neither establishes payment finality, proof of presence, a delivery channel or response SLA. [D] Current user-supplied parent contract requires the distinctions below.
INSIGHT → [I] A truthful local state can be useful without claiming a remote action succeeded.
DECISION → [D] Offline payments remain **Pending** until server confirmation; only then display **Paid** and settled funds. Separate pending amounts from the last-confirmed balance. One unique transaction ID per logical request is persisted/reused across typed/QR input and retries; server-side idempotence must prevent duplicate debits. Code, QR, daily colour and payment record are not physical-presence, attendance, occupancy or anti-fraud proof. Grace/manual admission need client approval.
DECISION → [D] SOS **Sending** means an attempt, **Not sent** means transmission failed/unavailable, **Delivered** requires receipt from the configured delivery channel, and **Acknowledged** requires a gate response. One unique alert ID is reused across channel fallback/retries for idempotent handling. Delivery is not human acknowledgement or help arrival; no three-second guarantee. Cancellation must not claim to recall an already delivered alert.
EXPECTED BENEFIT → [I] Avoid false assurance and duplicate requests. These are target contracts, not tested service capabilities.
Supersedes → Success/proof assertions in DL-02, DL-03, DL-05, DL-12, DL-15, DL-16 and the corresponding Phase 1–3 requirements/flows. Source evidence and input/navigation choices remain.

**DL-19 · Evidence limits and approved scope · current untimed revision**
EVIDENCE → [E·01, E·02] ~15,000 workers, four Gazipur factories, 40 buses, eight routes, 6:30 boarding, 8:00 shift; cheap/damaged phones, rain/crowd, expensive data, no factory Wi-Fi at stops. [E·03] status/full-next preference, PIN suggestion and security gate recipient. No measured problem frequency, capacity, equal route allocation, staffing or mobile/SMS service is supplied.
DECISION → [D] Keep five prioritised problems with **unmeasured** frequency; severity/priority are design judgements. Preserve illustrative primary worker and secondary gate-officer personas, with driver tertiary; role specialisations and feelings are [I/A], synthetic quotes explicitly simulation, not interviews. U-1–14 and applicable Phase 2 assumptions remain open.
DECISION → [D] Preserve English default and user-approved immediate Bangla/audio switch, optional QR beside code, 360 × 800 responsive target, approved identity and hub-and-spoke navigation. The one-tap cached schematic is a user-approved sponsor compromise; sponsor/rubric compliance is unconfirmed. No new More/grocery IA, mandatory grayscale/theme redesign or silent worker-phone tracking.
Supersedes → Unsupported capacity/comprehension certainty in DL-01, DL-02, DL-04, DL-10, DL-11; future-IA/tracking expansion in DL-08 and DL-13. Grace and staffing remain proposals, not operational facts.

**DL-20 · Research and verification provenance · current untimed revision**
EVIDENCE → Historical design-reference activity established only that the Design Systems Index was fetched. No evidence here establishes actual M3, GOV.UK, Uber Base or BBC documentation review, worker interviews, a real user study, delivery testing or a fresh prototype/resize test.
DECISION → [D] Phase 3 lists those systems as pattern references/proposals, not completed comparative research. Phase 1–3 criteria, states, diagrams and screen specs describe **target interactions**. Delivered/verified prototype links, translations/audio, responsive dimensions, contrasts and exports need parent QA evidence; none is inferred from this edit. Recorded source excerpts are kept, not silently rewritten into new quotations.
EXPECTED BENEFIT → [I] A traceable evidence-to-decision chain without fabricated provenance or scores; meaningful phase history retained with explicit current qualifications.
Supersedes → Completed-study and test-pass wording in Phase 3, plus unsupported by-construction/measurement certainty in DL-06 and DL-17. No original phase clock or verified result is invented.

**DL-21 · Roles and speeding: document the service, preserve the worker prototype · current untimed revision**
PROBLEM → Grouping speeding with the future dashboard hides the difference between a client deferral and our own scope decision. The worker SOS flow also needs an explicit receiving responsibility, even without a staff-facing screen.
EVIDENCE → [E·01] explicitly postpones the transport-manager dashboard and groceries. [E·04] asks about speeding without postponing it. [E·03] names factory security as the SOS recipient. The user authorised the recommended follow-up documentation; this is not client approval of operational policies.
INSIGHT → [I] A role does not require a separate app. A vehicle-monitoring service could notify an approved staff channel without adding a worker speedometer or a complete admin dashboard.
USER NEED → [I] Workers need dependable emergency feedback; authorised staff need enough context and responsibility to act without unrestricted access to worker data.
DECISION → [D] Retain the worker-only prototype. Document the security receiving workflow, least-privilege role boundaries and a proposed vehicle-based speeding workflow below. No new screen, role picker, tracking permission or live service is introduced. Manager-side speeding ownership is a proposal requiring client confirmation, not a fact from the pack.
EXPECTED BENEFIT → [I] Make the unanswered request actionable and the scope gap visible without implying that detection or emergency services are implemented.
Supersedes → Only the documentation treatment of speeding in DL-08/DL-13 and C7. Dashboard/groceries remain explicitly deferred by the client; speeding implementation remains deferred by us, subject to client review. DL-18 payment/SOS truthfulness and DL-19 worker navigation are unchanged.

## Roles And Fleet Safety Appendix

**Status: proposed service contracts [D/A], not implemented or runtime-tested.** The existing Figma worker prototype simulates states. It does not collect vehicle speed, detect violations, notify staff or enforce permissions. No staff portal, driver app or admin screen is added by this appendix. U-7, U-9 and U-12 remain open.

### Role And Permission Boundaries

All boundaries below are proposals requiring client approval. Authenticate staff and enforce assigned factory/fleet access server-side; hiding controls is not authorisation. A future shared staff portal may serve multiple roles without exposing those choices in the worker app.

| Role | Proposed responsibility and minimum access | Boundary / delivery status |
| --- | --- | --- |
| Worker | Own assigned service, balance/payment requests and own SOS status | Existing worker prototype only; no fleet telemetry or other workers' records |
| Factory security gate officer | Receive assigned-factory SOS alerts; see the relevant bus, worker reference, time and available location/age; acknowledge and record response actions | Receiving contract only, no staff screen; no routine balance access or automatic driver notification |
| Transport manager | Review assigned-fleet service and potential speeding events; record investigation and resolution | Future service/portal proposal; no unrestricted worker financial records or private SOS content |
| Driver | Own assigned-trip information; code/status duties only if approved under U-6 | No separate app assumed. Vehicle hardware or an authorised work device may supply telemetry; no required on-screen interaction while driving |
| HR support | Approved enrolment, language/assignment corrections and balance assistance | Optional operational role, not a new app; no implied authority to grant credit, deduct payroll or browse SOS/telemetry |
| System administrator | Manage accounts, role assignments and approved configuration; audit access changes | Future supporting role, not blanket access to sensitive records. Privileged access must be separately authorised and logged |

### Security Receiving Workflow

1. Route the worker's unique alert ID to the configured, staffed factory-security channel. Include the selected bus, worker reference, timestamp and available location with accuracy/age; missing GPS must not block an alert.
2. Delivery confirmation updates **Delivered** only. A gate officer must explicitly acknowledge; persist the officer reference and acknowledgement time before returning **Acknowledged** to the worker.
3. Record contact, dispatch or escalation separately. Acknowledgement is not dispatch or help arrival. Recipient, staffing, fallback contact and escalation authority require approval; do not auto-notify the driver or email police.
4. Reuse the alert ID across retries/channels to avoid duplicate incidents. A cancellation request appends a timestamped update to that incident; it neither deletes history nor recalls a delivered message. Do not promise the response has stopped without confirmation.

### Proposed Speeding Workflow

**Vehicle telemetry -> quality and threshold checks -> potential event -> transport-manager review -> recorded outcome.** This is a proposed operational capability, not an additional worker screen or an automatic SOS trigger.

1. **Establish the source [A, U-12].** Confirm a vehicle GPS unit or authorised work device, vehicle/trip association, timestamped speed, units and quality indicators. Do not silently collect workers' phone locations. An existing map marker alone does not establish usable speed telemetry or driver identity.
2. **Establish the rule [A].** Obtain the applicable road/vehicle speed limit from a verified source, or a separately approved fleet safety threshold. Label a fleet-threshold exceedance as such; it is not proof of a legal speeding offence. Threshold source, sampling, minimum quality, sustained-exceedance duration, freshness and event-clear rules need approval; no numerical policy is invented here.
3. **Qualify the evidence [D].** Require sufficient fresh, valid samples over the approved duration. Reject implausible jumps and do not bridge missing/stale samples into an apparently continuous event. Missing telemetry or an unknown threshold means **Monitoring unavailable**, not **Safe** or **No speeding**.
4. **Create one reviewable event [D].** Use a unique event ID for a continuous qualifying episode; deduplicate updates. Retain only approved evidence: vehicle/trip reference, event period, observed speed, threshold and its source, relevant location/age and quality. Attribute a driver only after verifying the trip assignment.
5. **Notify and review [D/A].** Deliver to the authorised transport-management channel. Keep this separate from worker SOS. Proposed states: **New -> Acknowledged -> Under review -> Resolved / Dismissed**, with actor, time and reason recorded. An alert is a potential event, not a disciplinary finding; no automatic penalty or driver interaction while moving.
6. **Handle outages and privacy [D/A].** Show monitoring availability independently of open events. Historical samples received after reconnection must stay labelled historical, not live warnings. Worker/driver notice, applicable consent or lawful authority, permissions, retention/deletion, access auditing, connectivity costs and response ownership all require agreement before a pilot.

### Acceptance Gates Before Implementation

These are proposed checks, not tests run against a working service:

| Case | Required outcome |
| --- | --- |
| Missing/stale speed, unknown threshold or unreliable sample | Monitoring unavailable; no fabricated safe state or violation |
| Isolated spike versus sustained valid exceedance | Reject the spike; create an event only under the approved sustained rule |
| Repeated samples, notification retries or reconnect upload | One event per episode; no duplicate incidents; historical evidence labelled |
| Unverified driver assignment or unauthorised staff access | No driver attribution; deny access outside the approved factory/fleet scope |
| SOS delivered without a human acknowledgement | Worker stays at Delivered; no claim of acknowledgement, dispatch or arrival |
| Human acknowledgement, response action or cancellation update | Preserve the incident ID and audit history; communicate only confirmed state changes |

**Release boundary:** close U-7/U-9/U-12 with the client, validate telemetry and alert handling, approve permissions/privacy and response policy, then prototype and test the staff workflow. This appendix addresses feasibility and ownership only; it does not mark the speeding request as fulfilled.

## DL-22 · Worker sign-in before personalised Home

**Status: user-authorised design addition, 11 September 2026.** Authentication screens and interactions are targets for a Figma simulation, pending parent verification; no server authentication, secure storage or native autofill is implemented. This decision does not add staff dashboards or change boarding/payment and SOS policies.

PROBLEM → The language screen currently leads directly to a sample worker's personalised Home. A worker ID and the shared bus-door code are identifiers, not proof that someone owns that account.
EVIDENCE → [E·01–03] describe limited reading, low-end/damaged Android phones, expensive data and crowded boarding. U-1, U-2, U-7, U-10 and U-15 leave phone ownership, typing ability, connectivity, device capabilities and credential/support/privacy/session approval unresolved. The external references below were fetched in this session on 11 September 2026; they are desk research, not studies of GreenTex workers.
INSIGHT → [I] Authentication belongs before the commute, with an assisted setup and recovery path. Requiring SMS or a modern device authenticator exclusively would introduce unverified dependencies. Password entry also creates a real accessibility burden; autofill and paste must be supported, not treated as decoration.
USER NEED → [I] Open only my assigned account without entering a password at every boarding, and recover access without having to receive an SMS or answer memory-based security questions.
DECISION → [D] Use company-provisioned worker ID + password, masked initially with Show/Hide. Target optional OS-managed saved credentials, autofill and paste. Keep signed in starts unchecked and is for personal phones only; shared devices must not silently retain an account. First/new-device sign-in requires connectivity. Wrong passwords, nonexistent IDs and disabled accounts share one generic failure; offline, throttled and service failures are distinct and never grant access. Provide visible HR-assisted setup/recovery, subject to client-approved identity checks and staffing. In production, successful authentication obtains identity, factory, assignment and permissions from the server; live service scope remains unresolved. No role picker or public self-registration.
EXPECTED BENEFIT → [I] Account ownership becomes explicit while keeping daily boarding limited to its existing door-code step. Convenience, comprehension and recovery success remain test targets, not measured outcomes.

### Authentication Options And Sources

| Option | Evidence and tradeoff | Decision [D] |
| --- | --- | --- |
| Worker ID + password with saved credentials | Broad input support; recall and typing burden remain. NIST permits password managers and recommends paste and reveal; W3C identifies autofill/paste as assistance for accessible authentication. | Baseline, with assisted enrolment/recovery and usability testing before rollout. |
| SMS-only one-time code | Requires control of a registered number and successful delivery, neither established here. NIST identifies PSTN authentication as restricted and requires alternatives in its scope. | Not the only sign-in or recovery method. No SMS service is claimed. |
| Passkey / device unlock | Android Credential Manager supports passkeys and passwords; passkeys can reduce recall and phishing risk. Supported devices, credential providers and shared-device practices are not established. | Future supported-device option after a device and recovery assessment, not categorically unavailable on low-end phones. |
| Short personal PIN alone or the bus-door code | NIST distinguishes a locally used activation secret from a remotely verified password. The door code is shared and identifies a boarding service. | Reject as the sole remote account credential. |

- **AUTH-R1:** [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), sections 3.1.1, 3.1.3.3, 3.2.10, 4.2 and 5: password rules, SMS limitations, local activation secrets, recovery and session boundaries. Used as an engineering reference, not a claim of NIST compliance or a legally mandated assurance level for this product.
- **AUTH-R2:** [W3C, Understanding WCAG 2.2 SC 3.3.8](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html): permit password-manager completion and paste; avoid recall/transcription-only authentication and inaccessible recovery. Figma cannot establish runtime WCAG compliance.
- **AUTH-R3:** [Android Developers, Credential Manager](https://developer.android.com/identity/credential-manager): platform support for passwords, passkeys and credential providers. Actual OS/provider compatibility remains U-10.
- **AUTH-R4:** [OWASP, Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html): generic failures for wrong credentials, nonexistent and disabled accounts; avoid account enumeration through response content or behaviour.

### Implementation And Recovery Contract

- At enrolment/reset, target at least 15 characters for a single-factor password and allow at least 64, spaces and Unicode. Do not impose mixed-character puzzles or routine password expiry. Reject common/compromised passwords, permit generated/saved credentials, and never use worker ID, birth date or the bus code as a default password.
- Authorised HR establishes the account against approved employment records. A worker chooses or generates the final secret privately. For remote completion, a strong, securely issued, short-lived, single-use activation/reset grant permits only password-setting until completed. HR must not retain or retrieve the final password. No default shared credentials. Staff identity checks, issuance, expiry and notification channels require operational approval; no self-attested worker ID resets an account.
- Verify through TLS on the server using a suitable salted password hash and an established identity implementation. Rate-limit failed attempts without disclosing whether an ID exists. Display a server-provided retry time when throttled; Back, reinstall and resend must not reset server limits. Do not embed real credentials in Figma or application source.
- Preserve worker ID when correcting an error; clear the password after a failed attempt or leaving sign-in. No premature validation while typing. Saved-password suggestions must use the platform credential provider, not an app-owned plaintext list.
- Session continuity is opt-in on a personal device, with finite server-enforced lifetime, revocable/rotated credentials and protected platform storage. Do not store passwords or bearer tokens in browser localStorage. Logout clears local account data and ends the server session; offline logout must immediately remove local access and disclose any pending remote revocation. Shared-device and lost-phone recovery need pilot checks.
- Offline first/new-device sign-in stays signed out. Previously authorised cached access is a separate, bounded policy, never a locally accepted password or proof of a current server session. Cached data stays dated; payment remains Pending until acknowledged. Preserve pending request ownership across account changes and never submit another worker's queue under the new account.
- Login assistance is not emergency dispatch. Target unauthenticated emergency-contact guidance without exposing worker/account information; use only client-verified contact details, currently unknown. A logout action on existing S-07 Balance is also a target pending parent verification, not a new destination. The existing authenticated SOS flow and its delivery states remain unchanged.

### Focused Acceptance Checks

1. S-09 preserves English default and immediate Bangla selection and routes to **A-01 Sign in**, not directly to personal data. Only a successful simulated check reaches existing S-01; empty, rejected, offline, throttled and service-error states do not. A-02 Sign-in help returns to A-01. A-03 Demo credential chooser and A-04 Checking are prototype-only overlays, not worker services; existing S-10/S-11/S-12 IDs are not reassigned.
2. Worker ID, password, Show/Hide, personal-device choice and recovery are reachable; password visibility does not change its value. No real credentials are requested or stored by the prototype.
3. Recovery returns to sign-in without pretending that an account was verified or reset. Only a verified, unexpired, single-use setup/reset grant may set a password in the production contract.
4. New copy uses the existing English/Bangla collection and fonts. Check at 360 and 320 px for text containment, 56 px targets, keyboard/scroll access and no overlap.
5. Sign-in does not modify existing route, boarding/payment, SOS variables or the independent SOS demonstration start. A Figma transition is not server authentication, authorisation, session storage or native autofill.

## DL-23 · Optional Geographic Map, Status-first Home

**Status: user-authorised extension, current untimed revision.** This records the later request to implement an optional geographic map, not new worker research or sponsor approval. DL-01's Home hierarchy remains; its schematic-only compromise is superseded.

PROBLEM → Keeping Home simple does not require excluding geographic context, and a stop diagram alone does not establish satisfaction of the sponsor's map demand.
EVIDENCE → [E·01, E·02] request a live map; [E·03] reports a preference for clear bus status. [D] The user subsequently approved a one-tap map alongside the status-first Home. Map performance and worker comprehension remain unmeasured.
INSIGHT → [I] Optional geographic context can serve workers who want it without making everyone interpret a map before deciding what to do.
USER NEED → See the selected bus relative to the boarding stop, know when its position was updated, and return without losing the current journey state.
DECISION → [D] Existing Route / View map entries open S-08 Map & route (`30:677`). Map/Stops switches to the retained schematic in S-08b (`143:1702`). Both show the same bus context and preserve the originating Coming, Arrived, Full or Offline Home state. SOS remains reachable and retains offline status. English/Bangla display headings use the compact "My route" / "আমার রুট" labels. The geographic basemap is OpenStreetMap; the route overlay, bus positions and displayed times are illustrative. Offline shows last-known position and update time, with no fresh ETA or moving marker.
EXPECTED BENEFIT → [I] More useful geographic context without adding work to the primary status task. Sponsor acceptance, actual vehicle telemetry, freshness thresholds, routing accuracy and provider/offline rights remain open; no exact-location, delivery, accessibility-compliance or usability-success claim follows from this prototype.

Verification [D]: persisted Map/Stops, origin-return and offline-aware SOS actions were checked; twelve Map/Stops × 320/360/412 px × English/Bangla offline-wording proofs passed 192 visible-text containment checks. Selected-tab contrast measured 7.95:1. An independent finish-review verdict scored all four listed visual fixes resolved. These are scoped Figma checks, not worker tests or browser/Android runtime validation. Live click-through remains with the prototype coordinator.

Assets: © OpenStreetMap contributors, [ODbL and attribution](https://www.openstreetmap.org/copyright). The four displayed zoom-15 tiles cover Board Bazar; the overlay is an illustrative design, not an operator-verified route. Production must use an approved map provider and caching policy; this demo does not establish offline tile-download rights or a live GPS service.
