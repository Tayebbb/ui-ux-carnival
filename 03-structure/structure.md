# GreenCommute — Phase 3 · Information Architecture & Low-fi

Phase 3 window 18:20–19:10 · Structure derived from Phase 1 requirements/C1–C10 and Phase 2 scenario synthesis. Existing screen IDs and phase context are retained; current qualifications are in DECISIONS DL-18–20. All flows, screen specifications and interaction criteria below are **targets [D]**, not claims of delivered/verified prototypes. Historical Figma destinations: `01 Flow & Sitemap` and `02 Wireframes`; their current contents, links and exports require parent QA. This document verifies none of them and prescribes no identity/theme redesign.

## 0. Pattern references and proposals — index only

Product interpretation [I]: **operational utility for a time-critical commute** on **low-end Android**, with limited reading [E·01], damaged/wet screens [E·02] and crowding [E·03]; one-handed use is inferred. Proposed patterns [D]: glanceable status, numeric entry with optional QR, explicit pending/confirmed payment, quiet SOS delivery states, and dated cache.

**Provenance:** only the Design Systems Index was fetched historically. No evidence establishes that linked Material Design 3, GOV.UK, Uber Base or BBC documentation was actually reviewed. The rows below are candidate references and local proposals, **not completed comparative research or proven findings**. Tags: [E] client-pack evidence; [I] inference; [A] unverified assumption; [D] design implication/target. Source quotations remain recorded excerpts; sample UI copy is illustrative [A/D].

| Candidate reference | Pattern to investigate, not studied evidence | Local proposal [D], not attributed as a verified source rule | Exclusions [D] |
|---|---|---|---|
| **Material Design 3** | Android navigation, input targets, error feedback and reflow | Direct Back, bottom contextual actions, 56–64 design-pixel targets; native scaling and actual reach need verification | Replacing the approved identity or adding a tab bar |
| **GOV.UK Design System** | Plain language, focused decisions and error recovery | Short actionable errors; one primary decision; status never by colour alone | Importing its visual identity or a document-style UI |
| **Uber Base** (Uber named by sponsor [E·01], specific library not specified) | Trip-status hierarchy and ETA presentation | Status → time → next action, motivated by HR's account; sponsor recognition is untested | Map-first Home, ride-hailing features or dense controls |
| **BBC GEL** | Readable hierarchy, labelled icons and accessibility | Large actionable text and icon + label pairing as targets | Editorial/media layouts |

Principle carried into Phase 4 [D]: **preserve GreenCommute's approved identity and validate reach, comprehension and error recovery locally**. The departure-board metaphor is a design direction, not evidence of usability or external-system compliance (DL-20).

## 1. Information architecture

Approved hub-and-spoke structure retained [D]: **Home is the app**, with direct Balance/Route access and Back; no tab bar (DL-14). Reduced navigation choice and reserved SOS space are rationale [I], not a tested comparison. The diagram specifies target reachability, not verified links.

```
GreenCommute (worker app)
│
├── First launch  ·  S-09 Language (English pre-selected · immediate বাংলা/audio switch)  →  A-01 Sign in
│     ├── Worker ID + password → successful simulated check → S-01
│     └── A-02 Sign-in help → A-01; no pretend reset
│
├── S-01 HOME · My bus — the WAITING state
│     states: Coming (ETA)  ·  Full → next bus  ·  Arrived / boarding now  ·  Delayed  ·  banner: Updated hh:mm (offline / stale)
│     ├── S-02 Board — enter the door code (keypad)        ── [S-02b Scan instead]
│     │      └── S-03 Ticket — Pending offline / Paid only after server confirmation
│     │             └── S-04 In transit — ETA to factory · SOS
│     ├── S-07 Balance & rides — confirmed funds · pending amounts · top-up policy unknown
│     └── S-08 Map & route — optional geographic map; timestamped position
│           └── S-08b Stops — retained schematic; same context and Home return
│
├── SOS (persistent bottom zone on S-01 and S-04)
│     S-05 Demo countdown (5 s; tap Cancel to return)  →  S-06 Sending / Not sent / Delivered / Acknowledged demos
│
└── System surfaces (not screens): N-01 push targets; SMS variant conditional on service — leave now · delayed · full · arrived
```

Worker remains primary, gate officer secondary and driver tertiary (DL-09). Code display/full-status operations are unverified [A]. Dashboard/groceries remain client-deferred; speeding implementation remains designer-deferred. DL-21 documents proposed staff permissions and security/vehicle-monitoring workflows, not additional screens. No More destination, role selector or silent worker-phone tracking is added (DL-08, DL-13, DL-19, DL-21).

## 2. Core user flow — boarding and payment

Target flow [D], with illustrative times/bus numbers [A]. Payment and admission are separate: offline/manual admission requires client approval; a code, QR or colour is not proof of presence, occupancy, attendance or payment. One unique transaction ID per logical request is reused across typed/QR input and retries, with server idempotence (DL-18).

**Current entry addition [D, DL-22; not historical Phase 3 delivery]:** S-09 language -> A-01 Sign in -> A-04 simulated check -> existing S-01 only on success. A-02 Sign-in help returns to A-01 without a reset claim. A-03 Demo credential chooser and A-04 Checking are top-level prototype helper screens, not native input or worker services. Empty input remains on A-01; generic invalid, offline first/new-device, throttled and service-error results use A-01e without account access. Preserve English default and immediate Bangla. Existing S-10/S-11/S-12 IDs are occupied and must not be reassigned to authentication.

N-01 entry below assumes an authorised worker; otherwise route through A-01 before personal data. Authentication is not required at each boarding. Offline first/new-device login is denied; bounded previously authorised cached access requires approved policy. Logout on existing S-07 and unauthenticated emergency-contact guidance are targets pending parent verification; contacts are unknown. Remove local account access while preserving pending request ownership, never exposing/submitting another worker's queue. Live session enforcement is not implemented by Figma.

```
N-01 Alert (push; SMS conditional)  "Route 3 · Bus 12 · 15 min · leave now" [fresh data required]
  → S-01 Home · Coming              hero: 15 · bus 12 · stop · Updated 06:12 [no stale live countdown]
      ├─ [Delayed]                   "Buses 15 min late" · new leave time · same layout
      ├─ [Offline / stale]           banner "Updated 06:20" · no live update; SMS only if service works
      ├─ [Full]                      "Bus 12 full — take the next one" · next bus/ETA only if known
      └─ [Arrived]                   "Bus 12 is here" · primary CTA: BOARD
  → S-02 Board · keypad             door code · 3-column, 4-row keypad target · auto-submit 4th digit (DL-15)
      ├─ [Scan instead]  S-02b       camera + torch · reads the door QR · fills the 4 digits · back to S-02
        ├─ [Invalid / expired code]    explicit error · after 3: assistance target, not guaranteed admission
        ├─ [No current code data]      validation unavailable; do not blame the user's digits
        ├─ [Low balance]               warning; grace/manual admission require client approval (DL-12)
        └─ [Back]                      before request: none submitted; afterwards: request persists, not cancelled
      → S-03 Ticket                      offline Pending · bus/time/request ID · last-confirmed funds separate
        └─ [Server confirms]           Paid 10 Tk · settled funds · same ID on retry; colour is recognition only
      → S-04 In transit                  target CTA · timestamped ETA to Unit 2 · next stop · SOS zone
      → arrival                          connected retry with same ID; only server confirmation settles payment
```

Deliberately not modelled: no-bus-today empty state (P2), return commute (A-10), HR set-up (Should, not committed), payment history (P2).

**SOS flow target (second prototype flow; delivered behaviour requires parent QA)**

```
S-01 or S-04  →  tap SOS → S-05 five-second demo countdown (explicit Cancel returns; no real alert)
        →  S-06 Sending: transmission attempt, one alert ID; bus/time/available location with age
          ├─ Not sent: failed/unavailable channel; retry uses same alert ID
          ├─ Delivered: configured channel confirms delivery, not human response
          └─ Acknowledged: gate responds, not a promise of help arrival
        →  call/I'm safe now/Back targets; cancellation is a request, not recall of a delivered alert
```

Current demo evidence supplied by the parent: `30:511` has a five-second `AFTER_TIMEOUT` to Sending `138:1024`; Cancel `30:526` uses `BACK`; duplicate `119:1007` is hidden. Starts remain Language `30:642` and In transit `29:646`. The historical two-second hold with early-release cancellation remains a proposed production gesture, not implemented pointer behavior. No three-second delivery guarantee. Staffing, push/SMS/call integration and escalation policy remain unconfirmed [A-3, A-5]. Reuse the same unique alert ID across channel fallback/retries for idempotent handling. Local feedback is not proof of remote delivery (DL-18).

## 3. Screen inventory

Committed = intended coverage in this specification, **not evidence that a frame was built, linked or tested**. Existing IDs are retained for parent reconciliation. Must/Should labels are historical priorities; user-approved QR, schematic and Bangla/audio choices are retained, not first-cut features.

### Late Interaction Reconciliation

11 September 2026, after the original low-fi phase. These are current structural references, not backdated evidence of an earlier design process. A live read found boarding-recovery band D (`169:3383`) and safety-state band E (`169:3561`) already added by another session; they were preserved. Band F (`169:3787`) adds the newly introduced worker sign-in reference. Temporary QA/reflow copies are not committed product screens.

| Current screen/state | Live frame | Low-fi reference on page 02 | Entry and recovery contract [D] |
| --- | --- | --- | --- |
| Arrived / wrong code | `27:140` / `29:445` | Band D: named Arrived / wrong-code wireframes | Board; correct input or request assistance; no charge from invalid input. |
| Pending / still offline | `29:588` / `138:1174` | Band D: payment pending / still offline | Same logical payment request on retry; Pending does not become Paid through navigation. |
| Driver assistance | `121:891` | Band D: S-10 Driver assistance | Reach from failed/unavailable validation; retry clears the active input state; assistance does not grant admission. |
| Stops | `143:1702` | Band D: S-08b Stops | From the route surface; return preserves the originating Home state. |
| Sending / not sent | `138:1024` / `138:1049` | Band E: S-06a / S-06b | Deliberate safety activation; no channel produces Not sent; retry preserves alert identity. |
| Acknowledged | `138:1074` | Band E: S-06c | Explicit simulated gate acknowledgement, not a help-arrival promise. |
| Confirm cancellation / update logged | `138:1099` / `138:1124` | Band E: S-06d / S-06e | Confirm the update; preserve the log and origin; do not imply the delivered alert was recalled. |
| No verified contact | `138:1149` | Band E: S-06f | Recovery when no configured contact exists; no real call or invented security number. |
| Worker sign in | `164:1944` | Band F: A-01 Worker sign in, source `164:1944` | Worker ID, masked password, personal-phone session choice, saved sign-in and help. Preserve requested task and locale; no false success offline. Authentication handlers remain under active implementation. |

Parent-reported additions: A-02 help `169:4037`, A-03 demo credentials `169:4041`, A-04 checking `169:4045`, and A-01e result `169:4049`. Their existence does not certify authentication behavior or matching low-fi/export coverage; that work remains with the authentication owner.

The current S-05 frame (`30:511`) is named **demo countdown**. The active safety workstream specifies a five-second simulated countdown with cancellation; this supersedes the historical two-second hold/overlay descriptions below **for the prototype demonstration only**. Native activation behavior remains a target requiring validation. Existence of the above frames is verified by inventory; their end-to-end reachability, translations and event semantics are not certified by this table.

The original inventory below remains the base-screen rationale. Resolve any disagreement in the active prototype notes before submission; do not count obsolete `121:*` call/confirmation drafts or temporary proofs as required product coverage unless a current flow still reaches them.

| ID | Screen | Purpose | Story · Problem | User need | Primary action | Secondary actions | Required information | Important states | Exit → |
|---|---|---|---|---|---|---|---|---|---|
| **S-09** | Language · first launch | Immediate language/audio access | US-1, US-7 · P-3 (C4) | Choose without mandatory HR set-up | বাংলা/audio switch or Continue in English | — | English pre-selected; Bangla/audio option | Default · Bangla/audio chosen | → A-01 |
| **A-01** | Sign in | Gate personalised Home | US-7 · DL-22 | Access only my account | Sign in | Show/Hide · optional saved credentials · help · language | Worker ID · password · unchecked Keep signed in, personal phones only | Empty · generic invalid · offline · throttled · service error; success simulated | → S-01 only on success · A-02; A-03/A-04 helper screens |
| **A-02** | Sign-in help | Explain approved setup/recovery dependency | US-7 · U-15 | Recover access without an ID-only reset | Back to sign in | Language; emergency-contact guidance target, details unknown | HR-assisted identity verification; final password private | Guidance only; no verified identity/reset claim | → A-01 |
| **A-03** | Demo credential chooser | Simulate optional OS credential assistance | US-7 · U-10 | Explore saved-credential path | Choose illustrative account | Cancel | Demo-only sample ID GT2-04711; no actual credentials | Prototype-only helper screen; no native autofill/storage | → A-01 |
| **A-04** | Checking | Simulate a submitted sign-in check | US-7 · DL-22 | See an attempt, not premature access | Wait for simulated result | Return on failure | No worker data before success | Prototype-only helper screen; no server authentication | → S-01 on simulated success; otherwise A-01e |
| **A-01e** | Sign-in result | Explain denied or unavailable sign-in | US-7 · DL-22 | Recover without false account access | Back to sign in | Help · language | One generic-invalid, offline, service-unavailable or throttled result | Password cleared; ID retained; no account access | → A-01 · A-02 |
| **A-05** | Confirm sign out | Avoid accidental loss of session | US-7 · DL-22 | Know internet is needed to sign in again | Stay signed in | Sign out · language | Pending payments remain bound to their worker account | Cancel preserves session; confirm clears auth demo state only | → S-07 on cancel · A-01 on confirm |
| **S-01** | Home · My bus (waiting) | Tell her, at arm's length, when the bus comes and what to do | US-1, US-2 · P-1, P-3, P-5 (C1, C8, C9) | Certainty about when; what to do if full | Board (when Arrived) | Balance · Route · SOS demo · language | Route + stop · next bus number · minutes · state word · updated time · confirmed Tk | Coming · Full → next · Arrived · Delayed · stale/offline banner | → S-02 · S-07 · S-08 · S-05 |
| **S-02** | Board · door code | Request payment without a required camera | US-3 · P-2 (C2) | Low-effort entry; speed untested | Type 4 digits (auto-submit target) | Scan instead · Back | Expected bus · 4 slots · keypad | Empty · partial · invalid/expired · unavailable validation · 3 failures → assistance | → S-03 · S-02b · S-01 |
| **S-02b** | Scan instead (approved optional input) | Alternative for a usable camera | US-3 · P-2 (C2) | Choose input method | Point at door QR | Torch · Type instead | Viewfinder · target instruction | Scanning · found → same digits/request · failure → keypad | → S-02 |
| **S-03** | Ticket / payment status | Distinguish pending request from confirmed payment | US-3, US-5 · P-2 (C2, C10) | Know payment state, not implied admission | I'm on the bus (target; not admission authority) | View balance | Bus · time · transaction ID · pending vs confirmed funds; colour not proof | Pending offline · Paid only when server-confirmed; policy unapproved | → S-04 |
| **S-04** | In transit | Reassure; keep SOS one thumb away | US-4 · P-4 | Know arrival; reach help | (none — passive) | SOS demo · Back to Home | Bus · next stop · ETA to factory · updated time | Moving · stale · arriving | → S-05 · S-01 |
| **S-05** | SOS · demo countdown | Expose an explicit cancellation opportunity; effectiveness untested | US-4 · P-4 (C3) | Deliberate request | Five-second simulated countdown | Tap Cancel to return | Progress · no real call, SMS or location sent | Countdown · cancelled locally · Sending demo | → S-06 |
| **S-06** | SOS · delivery status | Honest quiet feedback, not guaranteed help | US-4, US-6 · P-4 (C3) | Distinguish attempt, delivery, acknowledgement | Call security (service unconfirmed) | I'm safe now (request) · Back | Alert ID · bus · time · available location/age · delivery evidence | Sending · Not sent · Delivered · Acknowledged; cancellation request separate | → back |
| **S-07** | Balance | Show funds and shortfall early | US-5 · P-2 (C10) | Confirmed Tk, pending requests, policy guidance | View · How to top up (policy unknown) | Back | Confirmed Tk · pending amounts · recent requests/payments | Low-funds threshold and entitlement unresolved; no automatic grace | → S-01 |
| **S-08** | Map & route (optional use) | Later user-approved geographic context, DL-23 | US-1 · C1 | Locate the selected bus relative to the boarding stop | Map / Stops | Back to the originating Home · SOS | Geographic basemap · bus and stop markers · ETA when supplied · timestamp · attribution · illustrative-data disclosure | Coming · Arrived · Full / next bus · Offline / last known | → S-08b · originating S-01 · S-05 |
| **S-08b** | Stops | Retain the familiar schematic beside the map | US-1 · C1 | Read the stop sequence | Stops / Map | Back to the originating Home · SOS | Same status/freshness as Map · named stops · highlighted boarding stop · illustrative-data disclosure | Same entry context as S-08; no fixed stop times presented as current | → S-08 · originating S-01 · S-05 |
| **N-01** | Alert (push; SMS conditional) — not a screen | Support departure decisions | US-2 · P-1, P-5 | Useful current information | Open app | — | Route · bus · available ETA · freshness · status; equivalent SMS proposal | Leave now · Delayed · Full · Cancelled · Arrived | → S-01 if authorised; otherwise A-01 |
| **R-01** | Rejected home: map-first | Historical alternative considered; not a tested comparison | — | — | — | — | — | — | — |

**Not committed:** HR set-up, full payment history, reporting, no-bus-today and alternate-theme work are historical possibilities, not newly authorised screens. More/groceries do not enter the current IA. **Cancellation target:** use the existing alert/Home layout with a next eligible bus/ETA only if known; otherwise disclose unavailable information. Preserve approved navigation and identity; parent verifies actual state coverage.

## 4. Wireframe specifications — structural targets

Target base 360 × 800 with auto-layout reflow at 320–430 px: **top bar**, **content**, **bottom action zone** with SOS on S-01/S-04. Dimensions, thumb reach and text fit are unverified here. Historical low-fi work does not require a grayscale change to the approved theme. Top-bar language/audio access remains; parent QA checks its reachability.

**S-01 Home · My bus (waiting)** — the departure board in her hand
- Top bar: approved GreenCommute mark and immediate language/audio access; placement/interaction to be verified, not redesigned here.
- Block 1, dominant (≈ 45 % of height): **minutes** as the largest element on the screen (hero digits), beneath it the state word (Coming / Full / Arrived / Delayed) with its icon; state also carried by the block's tint and by position.
- Block 2: bus number + route + stop name; "Updated 06:12" with a signal icon; when stale, this line becomes a full-width banner.
- Block 3: two large tiles — Balance in Tk (→ S-07) · Route (→ S-08); no ride conversion before fare-policy approval.
- Bottom zone: contextual CTA (Board — only when Arrived; otherwise muted "Waiting for bus 12") above the **SOS bar** (full width; tap starts the demo countdown).
- Full state target: show **next eligible bus and ETA only when supplied**; otherwise disclose no current update. Frequency of this state is unmeasured.
- Information priority: minutes → state → bus number → what to do → everything else.

**S-02 Board · door code**
- Top bar: back · "Bus 12 · enter the door code".
- Content: illustration slot showing where the code is (door card, without printing the real digits); four large digit slots; keypad 3 × 4 — digits 1–9, an empty cell, 0, backspace — with keys ≥ 72 px tall; auto-submits on the fourth digit.
- Bottom zone: retain approved optional "Scan instead"; existing Back target returns to S-01. Screen duration and SOS reachability are parent QA checks, not a seconds-long-use assumption.
- Error target: distinguish invalid/expired code from unavailable validation; third failure offers assistance. "Show this screen to the driver" does not authorise manual admission (DL-16).

**S-03 Ticket**
- Preserve approved ticket treatment; bus/time and explicit payment status are targets. Daily colour is recognition only; driver readability is untested. A success mark must not represent an offline request as paid.
- Offline **Pending** and pending amount stay separate from last-confirmed Tk. Production **Paid 10 Tk** and settled balance require server confirmation; the prototype uses a mock receipt, not a real debit. One transaction ID across retries. Grace/manual admission require client approval.
- Existing "I'm on the bus" target remains toward S-04, not proof of admission. Historical 20 s auto-advance proposal is unverified and must not hide Pending or imply successful boarding/payment; parent owns prototype reconciliation.

**S-04 In transit**
- Top: bus number + "to GreenTex Unit 2".
- Hero: ETA minutes to the factory; next stop under it; updated time.
- Bottom zone: **SOS bar** (persistent) · small "Home" link.

**S-05 / S-06 SOS**
- Historical Phase 3 target: an overlay with a two-second hold and early-release cancellation. Current S-05 is a top-level demo-countdown screen with a five-second timeout and explicit Cancel; it does not implement that hold/release gesture.
- S-06 target: quiet **Sending / Not sent / Delivered / Acknowledged** with bus, time, alert ID and available location/age. Delivery/location-sharing claims require corresponding evidence; no help-arrival promise. Retain Call/I'm safe now/Back targets subject to approved receiving/cancellation policy.

**S-02b Scan instead (approved optional input)** — target "Scan the door code" viewfinder; "Point at the QR beside the 4-digit code"; Torch and Type instead. One-tap keypad recovery and same-code fill are targets, not tested behaviour. Both input methods use one payment request and retry ID (C2, DL-18).

**N-01 Alert copy proposals [A/D]** — Leave now: "GreenCommute · Route 3 · Bus 12 · 15 min · leave now" · Delayed: "GreenCommute · Route 3 buses ~15 min late · leave by 06:15" · Full: "GreenCommute · Bus 12 full · next bus 14 in 12 min" · Cancelled: "GreenCommute · Bus 12 cancelled · take bus 14 · 12 min" · Arrived: "GreenCommute · Bus 12 is at Board Bazar · board now". Use these values only with fresh supporting data. Low-balance guidance must not name an unapproved top-up method. SOS wording follows actual delivery state (DL-18). Equivalent SMS is conditional; encoding, translated length, segment count, cost and service integration are **unverified**, not a guaranteed single segment.

**S-07 Balance** — confirmed Tk plus distinct pending amounts and recent request/payment rows; proposed low-funds warning. The daily 10 Tk fee does not establish a ride entitlement. Top-up method [A-7], warning threshold and historical grace [A-8] remain client decisions, not available credit or guaranteed admission.

**S-08 Map & route / S-08b Stops** — later user-approved extension (DL-23), keeping status-first Home. Existing Route / View map entries open a geographic map with selected bus, boarding stop and freshness; Map/Stops preserves context, and Back/Home returns to the originating Home state. SOS remains available. The stop schematic is retained as S-08b. Basemap attribution and illustrative route/position disclosure are visible; live GPS integration and sponsor acceptance remain unconfirmed.

**S-09 Language** — preserve approved mark and English pre-selection; বাংলা/audio switch acts immediately, without mandatory HR set-up. Continue targets A-01 before personalised Home. Choice/Continue behaviour and translated/audio coverage are parent verification targets, not claims of working localisation.

**A-01 Sign in [D, current DL-22 wireframe target]**
- Preserve existing identity, fonts and language access; labelled Worker ID and masked Password fields, Show/Hide, primary Sign in, optional OS-saved credentials and unchecked Keep signed in for personal phones. Sample GT2-04711 is illustrative, not a real credential; no actual password belongs in the prototype.
- Reserve error space and keyboard-aware scrolling at 360/320 px; targets ≥ 56 px, no overlap. Missing fields get local feedback on submit, not premature typing errors. Wrong password, nonexistent or disabled account share one generic failure; offline, server-provided retry time and service-unavailable states are distinct and cannot open Home.
- Preserve ID for correction; clear password after failure or leaving sign-in. Production must allow paste/autofill; A-03 merely simulates a chooser, A-04 merely simulates checking. No role picker, public signup or dashboard.

**A-02 Sign-in help [D, current target]** — direct Back to A-01, immediate language access and concise HR-assisted setup/recovery guidance. Identity checks and support channels remain U-15. Only a strong, short-lived, single-use setup/reset grant may permit password-setting; HR never sees the final password. Do not simulate a completed reset, invent a number or equate login help with emergency dispatch. Unauthenticated emergency-contact guidance and S-07 logout require parent verification.

**R-01 Rejected concept: map-first Home** — historical full-screen-map alternative. Rationale [I]: HR reports map-comprehension difficulty [E·03], while device/data constraints [E·01, E·02] favour testing a lighter status-first approach. No measured map-loading failure, pin-visibility comparison or Full-state frequency is available. Rejecting map-first Home does not reject the optional geographic S-08 addition; DL-23 retains the schematic as S-08b Stops.

## 5. Traceability

| User story | Problem (Phase 2) | Insight | Screens |
|---|---|---|---|
| US-1 Glanceable status | P-1 Uncertainty while exposed · P-3 Comprehension | HR names arrival/full-next examples; frequency unmeasured | S-01 target states · N-01 |
| US-2 Leave-home & delay alert | P-1 · P-5 Connectivity | Timing/freshness matter; SMS viability unconfirmed | N-01 · S-01 Delayed |
| US-3 Board & pay | P-2 Boarding friction | Code + approved optional QR; Pending until server-confirmed, same retry ID | S-02 · S-02b · S-03 |
| US-4 SOS | P-4 Safety at dawn | Gate is intended recipient; honest delivery states and quiet feedback | S-05 · S-06 · SOS on S-01/S-04 |
| US-5 Balance | P-2 (C10) | Confirmed funds vs pending; grace/manual policy unapproved | S-07 · S-03 |
| US-6 Gate officer | P-4 | Bus · available location/age · identity · time · alert ID; acknowledgement evidence | S-06 target status |
| US-7 Worker sign-in (current addition) | Account access/typing risks [I], not a measured Phase 2 problem | DL-22 and current external desk research; issuance, device support and sessions unresolved | S-09 -> A-01 -> S-01; A-02 help; A-03/A-04 prototype helpers; A-01e result; S-07 -> A-05 sign-out confirmation |
| Stakeholder (map, English) | C1 · C4 | Optional geographic Map/Stops; English default and immediate Bangla/audio | S-08 · S-08b · S-09 · language/audio access |

Each specified screen has a rationale above, not delivery evidence. DL-23 and Phase 4 notes record the scoped Map/Stops implementation checks. Sponsor acceptance, real telemetry and browser/Android runtime validation are separate and remain unconfirmed here.

## 6. Content plan — illustrative copy for Phase 4

*Names, IDs, localities used as stops, bus assignments, codes, balances and journey times are illustrative [A], not client service data. Exceptions are the sourced daily 10 Tk fare, 6:30 boarding and 8:00 shift. Sample locality/route relationships are unverified. This normal-morning simulation differs from Phase 2's delayed simulation; neither is observation. Bangla text is proposed copy [D], not verified translation or language-comprehension evidence.*

| Item | Value |
|---|---|
| Worker | Shahida Begum · ID GT2-04711 · GreenTex Unit 2, Konabari |
| Route / stop | Route 3 · Board Bazar → Konabari · her stop: Board Bazar |
| Bus examples used by the flow | 12 and 14 are illustrative alternatives, not an asserted route allocation |
| Timeline | alert 06:12 · arrived 06:30 · ticket 06:31 · ETA factory 07:15 · shift 08:00 |
| Fare / balance | Supplied daily fee: 10 Tk. Illustrative balances: 90 Tk or 80 Tk; 10 Tk pending is separate. No conversion to rides, approved return entitlement, service-day cutoff or grace policy. See brief §4.3 FARE-1–5. |
| Door code (sample) | 7 3 1 9 · illustrative colour cue, not date, payment or presence proof |
| Security | GreenTex Unit 2 gate · SOS 06:47 |
| Copy — states | Coming · Full — take the next one · Bus 12 is here · Delayed · Updated 06:20; Pending / Paid; Sending / Not sent / Delivered / Acknowledged, each conditional on evidence |
| Copy — Bangla | বাস আসছে · ভরা — পরেরটা নিন · বাস এসেছে · দেরি হচ্ছে; historical hold instruction is not current demo copy. Current SOS wording must describe the countdown and explicit Cancel. |

## 7. Phase 4 handoff brief — for the hi-fi designer

**Product.** GreenCommute, GreenTex Apparel's staff-bus app for ~15,000 garment workers in Gazipur. One job: tell a worker when her bus comes and what to do, let her board and pay in seconds, and give her a discreet line to help.

**Users.** Primary: illustrative Shahida, inferred sewing-line role; population-level device/literacy constraints from the pack, individual abilities unverified. Secondary: illustrative Kamal, inferred gate officer; receiving/dispatch operations unconfirmed. Driver remains tertiary. See Phase 2 personas; no interviews implied.

**Stories.** US-1 status/freshness · US-2 departure/delay information · US-3 code + optional QR, Pending until server-confirmed · US-4 discreet SOS with delivery states · US-5 confirmed balance/pending amounts and policy unknowns · US-6 gate payload/acknowledgement target.

**Source-derived design targets [D], not study findings.** Status-first responds to HR's examples, "Bus is 10 minutes away" and "Bus is full, take the next one". Full-state frequency and next-bus availability are unknown. Keep code plus optional QR; ticket colour is not proof; payment/SOS follow DL-18. Gate operations and SMS are unconfirmed. Show cache age; preserve English default, immediate Bangla/audio and optional Map/Stops (later user approval, DL-23).

**Flow, sitemap, inventory.** Sections 1–3 are targets; historical Figma page references are not verified current contents.

**Content.** Section 6 supplies concrete illustrative values, not real worker/service data. Bangla strings and audio need language review and parent coverage checks.

**Interaction targets and history.** No swipe-only gestures; historical targets ≥ 56 px, keypad keys ≥ 72 px tall, ≥ 12 px apart. The original SOS hold of about two seconds with early-release cancellation is a production target only; the demo uses five seconds and explicit Cancel. Four-digit auto-submit and QR fill must share a request ID; Back/reopen must not submit a draft or create another charge (brief §4.3 FARE-1–5). Pending must stay distinguishable from Paid. Historical ticket timing must not conceal payment state. Timestamp updates and use actionable errors. Parent owns actual prototype/reachability testing.

**Accessibility requirements.** Text ≥ 7:1 against its background; higher on the hero where the tint allows; state never by colour alone (icon + word + position + tint); body ≥ 15 px, hero digits ≥ 88 px (DL-17); Bangla-capable typeface with heavy weights; reading order top-down matches visual order; language switch on every core screen; alt text for every icon and the mark (to be listed in Phase 5).

**Constraints/targets.** Retain approved 360 × 800 responsive base and identity; 320–430 px reflow, contrast, variables, styles, component variants and asset attribution require parent evidence. Historical light-theme direction (DL-11), original-wordmark direction (DL-07) and existing navigation are preserved, not redesigned. Never rely on red/green alone. Waiting, In-transit and SOS remain required coverage, not claimed delivery.

**Creative direction (point of view, not evidence).** *A bus-stop departure board in her hand.* Use the metaphor for status/time hierarchy, not a claim that everyone reads it in any light without instruction. Preserve the approved identity; test text, icon, colour and audio comprehension instead of assuming them.

## 8. Final check

- Core and SOS flows are specified as targets; delivery, offline reconciliation and operational readiness are not verified by this document.
- Each specified screen traces to a story/problem; S-08 is the approved sponsor compromise with compliance unconfirmed.
- Map-first Home is recorded as a considered/rejected concept, not a tested alternative or verified Figma artifact.
- No visual styling decided beyond the constraints already logged (theme, platform, contrast floors).
- Phase 4 receives content, interaction and accessibility requirements, and a point of view — not a colour palette.

## 9. Appendix: Late QA reconciliation · 11 Sep 2026

**Added after implementation, not historical Phase 3 work.** This additive record closes the five auth-wireframe gaps identified by the final supporting-page review; earlier process history above is retained. Live source content was read at 22:23 Dhaka and low-fi geometry verified at 22:26. These observations concern static structural coverage, not successful authentication or prototype replay.

New grouped auth board **`211:1815`** on Wireframes page **`5:3`**, adjacent to band F: **1160 x 1199**, x840/y5059. [Open the reconciliation board](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz?node-id=211-1815). Every new sketch identifies its source and **US-7 / Authentication / DL-22**. White outlines, gray action blocks and auto-layout follow existing local low-fi conventions; no hi-fi frames were cloned and no source screens or shared masters were changed.

| Auth state | Source frame | Low-fi reference | Content/control coverage |
| --- | --- | --- | --- |
| A-01 Worker sign in | `164:1944` | Preserved `169:3790`, band F | Existing sign-in sketch. |
| A-02 Sign-in help | `169:4037` | `211:1940` | HR identity verification, urgent-help limitation, no-reset disclosure; Back to sign in. |
| A-03 Demo credential chooser | `169:4041` | `211:1952` | Sample ID/disclosure and all five observed chooser actions. |
| A-04 Checking sign-in | `169:4045` | `211:1968` | Checking/progress, simulated-only disclosure and Back to sign in. |
| A-01e Sign-in result | `169:4049` | `211:2374` | Invalid, offline, service-error and throttled alternatives; Back to sign in / Get help signing in. |
| A-05 Confirm sign out | `204:1681` | `211:2399` | Internet-required/pending-payment ownership warning; Stay signed in / Sign out. |

The result family is a labelled comparison of four alternatives with shared recovery controls, not simultaneous errors on one phone screen. Five new groups plus the preserved A-01 provide **six of six named auth source-frame references**. Other product-screen coverage is not re-audited by this appendix. English content and an EN / Bangla control reference do not constitute verified translation or runtime language behavior.

**Verification:** 248 ancestor-containment checks on the new board and 38 on the edited F band, **286 total with zero failures** at 1px tolerance. No neighboring-board overlap, non-gray paints, non-auto-layout new frames or accidental reactions. One PNG inspected; no observed clipping. The PNG signature, final chunk and exact dimensions passed. No package build or browser replay was performed.

[Late QA auth wireframes, added after implementation on 11 September 2026](wireframes-auth-states.png)

Export: [wireframes-auth-states.png](wireframes-auth-states.png), 1160 x 1199, 123,719 bytes. Exact node/control inventory and snapshot boundaries: [final-lowfi-coverage.md](../review/final-lowfi-coverage.md).
