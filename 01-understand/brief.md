# GreenCommute — Phase 1 · Requirements & Discovery

Mohammed Tayeb (solo) · AUST CSE Carnival 8.0 — UI/UX Design Sprint · 11 Sep 2026 · Theme released 17:00 · Phase 1 window 17:00–17:40

Client: GreenTex Apparel [I, from the sender's domain] · Product name: **GreenCommute** [E·04]

**How to read the tags.** `[E·01]` evidence from Item 01 (Anisur's email) · `[E·02]` Item 02 (junior's kick-off notes) · `[E·03]` Item 03 (Monira Khatun's voice note) · `[E·04]` Item 04 (SMS) · `[I]` inference from the pack · `[A]` assumption not supported by the pack · `[D]` design implication. Phase 2 rechecks hypotheses against the pack; this is not worker research and does not validate every `[A]`. Quoted source fragments are recorded excerpts; illustrative UI copy is [D]. Requirements and acceptance criteria below are targets, not delivered or tested claims. Current qualifications are recorded in [DECISIONS.md](../DECISIONS.md), DL-18–23.

**Current baseline, 11 September 2026:** the [22:38 Dhaka coordinator snapshot](../review/prototype-repair-coordination.md) reports bounded browser PASS for specified sample-auth, boarding, scanner, offline, route and SOS journeys. This is supplied prototype evidence, not testing by this documentation pass, field research or approval of real services. Historical hold/ride-count wording does not govern the current demo.

## Discovery summary [D] — requirements at a glance

**Audience and need.** Primary: staff-bus workers at four Gazipur factories, mostly women, with reported reading/device constraints [E·01–03]. They need useful arrival/full-bus information, cashless payment and a way to request help at dawn. Security-gate staff are the intended SOS recipients [E·03]; operations and foreign buyers are stakeholders, not the primary mobile audience.

**Functional requirements [D].** Assigned-service status and freshness; leave-home/delay/full alerts; typed four-digit boarding input plus retained optional QR; one logical payment identity across input changes, navigation and retries; separate Pending/confirmed payment and balance; SOS with evidence-based delivery/acknowledgement; optional geographic Map/Stops with retained schematic (DL-23); English default with immediate Bangla switch and retained Bangla audio. Current user-authorised addition (DL-22): company-provisioned worker ID + password before personalised Home, with sign-in help and sign-out confirmation; not a password check at each boarding. See §4.1 and proposed fare gates in §4.3.

**Non-functional requirements [D, targets].** Dim-screen legibility (primary contrast ≥ 7:1), ≥ 56 px primary targets, wet/one-handed tolerance, low-end Android responsiveness, low data use, dated offline cache, redundant non-colour cues and discreet SOS feedback. Comprehension, performance and field usability remain untested; see §4.2.

| Contradiction | Proposed resolution [D] | Reason / qualification |
|---|---|---|
| Mandatory map [E·02] vs HR's status preference [E·03] | Status first; optional geographic Map plus retained Stops schematic | Later user-approved DL-23 extension uses attributed OpenStreetMap; positions are illustrative, not GPS. Sponsor acceptance remains open (C1). |
| QR payment [E·01] vs damaged cameras/crowding [E·02–03] | Keypad first, optional QR for the same request | Removes required camera use, not fraud or presence risk (C2). |
| Police email [E·01] vs security-gate request [E·03] | Route SOS toward security; distinguish delivery from acknowledgement | Recipient is supported; staffing and response are not (C3). |
| English default vs reading difficulty [E·01] | Keep default; immediate Bangla/audio access | Preserves the explicit default without assuming Bangla/numeral comprehension (C4). |
| Live information vs no stop Wi-Fi [E·01–02] | Dated cache; fresh updates only with a working channel | No Wi-Fi proves neither absent mobile data nor usable SMS (C5). |

**Boundaries.** Worker morning journey is the current design scope [D]; return scope is unconfirmed. Dashboard/groceries were deferred by the client [E·01]; speeding implementation was deferred by us, not approved as unnecessary [D]. No new staff app, guaranteed admission/help, live backend or silent worker tracking is established.

**Unresolved policy [A].** Daily 10 Tk [E·01] establishes neither return-trip entitlement nor service cutoff. Client approval must define fare coverage, renewal and balance units (§4.3). Top-up, grace/manual admission, bus substitution, code distribution, SMS, gate staffing/escalation and location handling also remain open (§10). These are acceptance dependencies, not approved operations.

## 0. Source map — what the client pack actually contains

| Item | From | Reliability | Facts extracted |
|---|---|---|---|
| 01 | Anisur Rahman, `anisur.ops@greentex-apparel.com` — operations, project sponsor [I] | First-hand on business goals; second-hand on workers. Refers to a phone call we do not have. | ~15,000 workers · 4 garment factories · Gazipur · workers stand in rain for hours waiting for staff buses, get late, production stops — "the main thing" · wants an app "exactly like Uber", premium, smooth animations · assigned bus on a live map "so they know exactly when to leave home" · transport heavily subsidised · 10 Tk daily boarding fee · no cash anymore · pay by scanning a "complex QR code pasted on the bus door" from a balance · cheap Android sets · data expensive · load the app on factory Wi-Fi, but the stop is 3 km away — "maybe figure that out" · many cannot read properly, mostly female workers · English default because of a foreign-buyer presentation next month · big red SOS at dawn → automatic email to local police, "you decide the placement" · later: transport-manager dashboard, discounted groceries in-app — "Not now. But design keeping in mind." |
| 02 | Kick-off call notes by a junior | Terse, second-hand. Lines ending in "?" are questions raised, not decisions. Quantities approximate. | 15,000 workers · 40 buses · 8 routes · "Map view is an absolute must" — Anisur · shift 8:00 AM, boarding 6:30 AM in the dark · phones mostly have broken screens, dim brightness · QR payment questioned: half the workers have scratched cameras · rain and sweat make touchscreens hard to use in monsoon · factory Wi-Fi does not reach the stops; "offline mode needed?" |
| 03 | Monira Khatun, HR Supervisor (header calls her "field officer" — pack inconsistency), 3:42 voice note, transcribed | HR testimony *about* workers, not worker interviews. Transcript completeness is not established. | Workers on the floor — in her words, "the girls on the floor do not understand live maps" · they want "a notification or a big text that says 'Bus is 10 minutes away' or 'Bus is full, take the next one'" · QR scanning at 6:30 in a pushing crowd won't work · proposes a 4-digit PIN to confirm boarding · emailing police is useless, never checked · SOS must instantly alert the factory security gate with the specific bus number |
| 04 | SMS, sender unnamed (Anisur [I]) | Afterthought | App name "GreenCommute" · "can it track if the driver is speeding?" |
| — | **Absent from the pack** | | No logo or brand asset — only a name · no evening/return commute · no top-up method for the balance · no home-to-stop distance (3 km is stop-to-factory) · no device specs · no description of how workers learn bus times today · who marks a bus "full" |

**Details hidden in the pack that shape the product**

- Fleet totals: ~15,000 workers, 40 buses and 8 routes [E·01, E·02]. These totals do not establish ridership, seating capacity, trips, equal route allocation or how often buses fill. **Full / next bus** merits a first-class state because Monira explicitly names it [E·03], not because of fleet arithmetic.
- The client already knows two of his own contradictions: he flags Wi-Fi vs the 3 km stop and overrides literacy for a business reason (the buyer demo). The demo is a legitimate stakeholder goal that must be met *without* harming daily use.
- Boarding is at 6:30 AM and the shift starts at 8:00 [E·02]. Other journey times are illustrative [A]; one-handed use is a design inference from rain and crowding [I].
- "Know exactly when to leave home" is the need; the live map is one proposed means of meeting it.
- A precise leave-home cue is a **safety** feature for women travelling at dawn — less time waiting alone in the dark — not only a convenience [I].
- A payment record alone establishes neither physical boarding nor occupancy [I]. The source and freshness of a full-bus signal remain unknown (U-4).
- Staff buses are in the pack [E·01]; authority to distribute codes, driver devices and telemetry availability are unverified (U-6, U-12).

## 1. Problem statement

**Who.** Garment workers — the majority women, many who cannot read well [E·01] — at GreenTex Apparel's four factories in Gazipur, about 15,000 people [E·01].

**What.** They wait at roadside stops for company buses with no information about when their assigned bus will come, or whether it will have room [E·01, E·03]. They wait for hours, arrive late, and production stops [E·01]. A new cash-free 10 Tk fare adds a payment step at the bus door [E·01].

**Context.** Boarding at 6:30 AM in the dark [E·02], in monsoon rain [E·02], in a pushing crowd [E·03], on cheap Android phones [E·01] with cracked, dim screens and scratched cameras [E·02], with expensive data and no factory Wi-Fi at the stop [E·01, E·02]. Monira rejects the proposed police-email escalation [E·03]; existing emergency channels and mobile coverage are not established.

**Why it matters.** For workers: hours lost, exposure to rain and dark, lateness and its consequences. For the company: reported production stoppages, a proposed cashless fare for subsidised transport, and a welfare programme it must present to buyers next month [E·01].

**Outcome to improve.** Minutes waited at the stop per worker per day (↓) · late arrivals attributed to transport (↓) · seconds to board and pay (↓) · share of workers who can use the app without help (↑) · time from SOS press to security alert (↓).

## 2. Target users

| Tier | Who | What the pack says |
|---|---|---|
| **Primary** | The worker who rides the staff bus — mostly women, limited reading, cheap Android, dawn commute | [E·01, E·02, E·03] |
| Secondary | Factory security gate staff — receive the SOS with bus number; persona in Phase 2 | [E·03] |
| Tertiary | Bus driver — boards workers; subject of "bus full" and speeding; may display or validate the boarding code [I]; noted, not personified | [E·03, E·04] |
| Stakeholder | Anisur Rahman (operations) — production continuity, fare collection, buyer presentation | [E·01] |
| Stakeholder | Monira Khatun (HR) — worker adoption; voice of the floor | [E·03] |
| Stakeholder | Transport managers — future dashboard | [E·01] |
| Audience | Foreign buyers — see the English mode once | [E·01] |
| Removed | Local police — explicitly out of the direct loop | [E·03] |

The worker is the only primary user of this mobile prototype. Other roles support transport or SOS operations; they do not each require an app. Proposed permissions and receiving/telemetry workflows are documented in the DL-21 service appendix, not delivered as staff screens.

## 3. Product goal

**Primary outcome.** Every worker knows — without needing to read — when to leave home and whether her bus is coming, so she waits at the stop for minutes, not hours. *Measure:* median minutes at the stop; share of "leave now" alerts that arrive before the bus.

Supporting goals:

- **G2 Board and pay in seconds [D, target].** Submit a 10 Tk request with ≤ 2 taps + a 4-digit code; camera optional, no cash. Offline requests stay Pending until server-confirmed. *Measure:* input steps, completion without help and reconciliation outcomes; not measured here.
- **G3 Deliberate SOS [D, target].** Request help toward factory security with bus number, available location and time. The current demo uses a five-second countdown and explicit Cancel, no hold required. *Measure:* local feedback, delivery and gate acknowledgement separately; no three-second delivery guarantee or actual call/GPS/SMS in the prototype.
- **G4 Works on the real phones [D, target].** Dim, cracked, wet, low-end Android with costly or interrupted data. *Measure:* primary status contrast ≥ 7:1; targets ≥ 56 px; cached content visibly dated. SMS is a candidate fallback [A], not established infrastructure.
- **G5 Presentable to buyers** in English without changing the worker experience. *Measure:* same screens, one language switch.

## 4. Requirements

### 4.1 Functional requirements

| ID | Requirement | Source | Priority |
|---|---|---|---|
| FR-1 | Personalised home: the worker's route and stop, and the next bus coming for her today — nothing to search for (see C9) | [E·01] "their assigned bus"; [E·03] | Must |
| FR-2 | Status as number + words: **minutes to arrival** · **Full — take the next one** (next bus and ETA only when supplied) · **Arrived / boarding now** · **Delayed / no update since hh:mm**; never present a cached ETA as current | [E·03]; [E·01]; [D] freshness handling | Must |
| FR-3 | Alerts: leave-home cue ("Bus 12 · 15 min away"), bus full, delay or cancellation via push; **SMS fallback proposed [A]**, conditional on coverage, cost and service integration (U-7) | [E·03]; [E·01] "know exactly when to leave home"; [E·02] no Wi-Fi at stops; [D] delivery proposal | Must (alerts) · SMS unconfirmed |
| FR-4 | Board and pay: type the proposed daily 4-digit **boarding code** on the door card, or scan it; target **≤ 2 taps + 4 digits**, no required camera. Cache/code distribution is unverified [A]. Create one unique transaction ID per payment request and reuse it on retries [D]. Offline: **Pending**, with pending amount separate from last-confirmed balance. Only server confirmation permits **Paid 10 Tk** and a settled balance. Ticket colour is a recognition cue, not payment or presence proof | [E·01] 10 Tk, no cash; [E·03] PIN suggestion; [E·02] cameras; [D] C2, DL-18 | Must |
| FR-4b | "Scan instead": target camera view with a torch toggle reads the door QR and auto-fills the same four digits; failure returns to the keypad in one tap; same transaction and retry ID as typed entry | [E·01] QR; [D] C2; user-approved optional input | Retain approved QR option |
| FR-5 | Balance: last-confirmed **Tk**, pending amounts separate, proposed low-balance warning and recent payments. Do not derive a promised ride count until the client approves daily-fare entitlement and renewal rules (FARE-1–5). Historical −3-ride grace and manual admission require **client approval**; top-up method remains unknown | [E·01] "from their balance"; [D] C10; [A] U-5 | Must (view) · policy unconfirmed |
| FR-6 | SOS: large one-handed control on waiting and in-transit screens; current demo taps into a five-second countdown with explicit Cancel, not a hold gesture. Production targets discreet feedback and one unique alert ID across retries/channels [D]. **Sending** = attempt underway; **Not sent** = no successful transmission; **Delivered** requires delivery confirmation; **Acknowledged** requires gate response. Payload: bus number, worker identity, time and available location with age. Call/cancel and push/SMS integration need operational confirmation; no delivery or help-arrival guarantee. `Online retry · demo` only simulates connectivity | [E·01] big red SOS; [E·03] security gate + bus number; [D] C3, DL-18; [A] U-7, U-9 | Must |
| FR-7 | Optional-use Map/Stops, one tap from the status-first Home: geographic basemap, selected bus and boarding stop, ETA only when available, and position timestamp; retained stop schematic as the alternative. Offline shows last-known position, not a live marker. Same-state return and SOS remain available. Figma route/positions are illustrative, not live telemetry | [E·02] map demand; [E·03] status preference; [D] later user-approved extension, DL-23 | Must be available; use is optional |
| FR-8 | Language: **English pre-selected**; immediate prominent **বাংলা** and Bangla audio switch on first launch and core screens, as user-approved [D]. HR-assisted set-up is only a proposal [A]. Number + icon + text + colour support comprehension; reading, numeral and audio comprehension need testing | [E·01] explicit English default; [E·01, E·03] literacy; [D] DL-04 | Must |
| FR-9 | In-transit state: current bus, next stop and ETA to the factory, SOS. No speed read-out for workers (C7); "report a problem with this bus" is a Could, not designed this sprint | Rubric Phase 4; [E·04] | Must (state) · Could (report) |
| FR-10 | Bangla audio option retained; spoken alert wording and comprehension are targets, not a verified translation or tested recording | [E·01] literacy; [D] user approval; [A] language validation | Retain approved audio option |
| FR-11 | Proposed HR-assisted enrolment: issue worker ID against approved employment records; assignment, language and initial balance remain operational dependencies. Worker sets the final password privately; HR cannot retrieve it. Identity-verified recovery uses a strong, short-lived, single-use setup/reset grant limited to setting a password, never worker ID alone | [D] DL-22; [A] U-15 staffing, issuance and identity checks | Should, subject to client confirmation |
| FR-12 | Requested speeding detection: proposed vehicle telemetry, validated threshold checks and a transport-manager review channel; role boundaries and acceptance gates in DL-21. No current detection service, speed screen or worker-phone tracking | [E·04] request; [D/A] proposed solution, U-12 | Requested; implementation deferred by us, pending client review |
| FR-13 | Sign-in: S-09 -> A-01 -> A-04 simulated check -> S-01 on valid sample success only. A-02 help, A-03 fixed demo chooser, A-01e result and A-05 sign-out confirmation are top-level frames, not overlays/native auth. Empty/partial input and negative results never grant access; help claims no reset. Coordinator reports bounded sample sign-in/sign-out PASS; service-error branches are seeded-action checks, not visible chooser scenarios. Balance sign-out clears auth demo state only; Stay/header Back use history without a Balance-confirmation loop. No signup, role selector, staff dashboard or verified contact number | [D] user-authorised addition, DL-22; Phase 2 §11 desk research and supplied coordinator evidence, not pack findings | Must for login addition; Figma simulation only |
| OUT | Transport-manager dashboard and in-ride groceries explicitly postponed by the client; no new More destination | [E·01] "not now"; DL-08, DL-21 | Out of current IA and sprint |

### 4.2 Non-functional requirements

| ID | Requirement | Source |
|---|---|---|
| NFR-1 | **Legibility on dim, cracked screens:** primary status ≥ 7:1 contrast, hero digits ≥ 64 px, body ≥ 18 px *(revised in Phase 5 to ≥ 15 px for secondary detail lines and ≥ 17 px for anything she acts on — DL-17)*, no thin weights; critical controls away from corners and edges where cracks and dead zones concentrate | [E·02] |
| NFR-2 | **One-handed, in a crowd:** primary actions in the bottom thumb zone; targets ≥ 56 × 56 px with ≥ 12 px spacing; tap-only — no swipe-only or multi-touch gestures | Rubric Phase 4; [E·02, E·03] |
| NFR-3 | **Wet-screen tolerance [D]:** forgiving taps, clear code-validation feedback and explicit SOS cancellation. Five-second countdown/Cancel is the current demo; native hold/release remains an unverified historical target. Four-digit-only entry applies to boarding, not initial sign-in: worker ID/password adds typing burden requiring validation; authentication must not become required at each boarding | [E·02]; [D] DL-22 |
| NFR-4 | **Connectivity [D]:** cache shell, route and identity when connected; small live payloads; timestamp cached status and mark unavailable updates. First/new-device sign-in needs connectivity; previously authorised cached access requires a bounded, approved policy, not offline password acceptance. SMS for alerts/SOS is conditional [A, U-7]. No factory Wi-Fi does not establish no mobile data | [E·01, E·02]; [D] DL-22 |
| NFR-5 | **Low-end Android, responsive target [D]:** fast cold start; animation only for state change; approved 360 × 800 base with auto-layout reflow targeted at 320–430 px. Resize, device and performance checks belong to parent visual QA; not verified by this brief. Older Android versions unknown [A] | [E·01, E·02] |
| NFR-6 | **Low-literacy comprehension:** ≤ 3 words per state label; numbers and icons carry the meaning; colour never the only cue; identical layout every day; Bangla-capable typeface | [E·01, E·03] |
| NFR-7 | **Safety and trust [D]:** SOS control remains accessible at low balance or offline; transmission still needs a working channel and shows Not sent when unavailable. A cancellation request is not a recalled delivered alert. SOS location permission, freshness and handling need approval; no silent trip/speed tracking | [E·01, E·03]; [A] U-7, U-9, U-12 |
| NFR-8 | **Data cost:** well under 1 MB per day of live use [A target] | [E·01] |
| NFR-9 | **Presentability:** consistent visual system; English mode for the buyer presentation next month | [E·01] |
| NFR-10 | **Scope [D]:** document future dashboard/grocery questions without changing the approved current navigation or adding More | [E·01] future request; DL-08 |
| NFR-11 | **Timeliness:** leave-home lead time configurable per worker or stop — walking time is unknown (U-3) | [E·01] |
| NFR-12 | **Authentication [D, production targets]:** allow paste, autofill and optional OS-managed saved credentials; masked password with Show/Hide; English default with immediate Bangla. Single-factor passwords: minimum 15 characters, permit 64+, spaces/Unicode; block common/breached values, no mixed-character rules or routine expiry. Generic wrong/nonexistent/disabled-account failures and server rate limits prevent enumeration. Keep signed in unchecked, personal phones only; finite/revocable sessions, protected storage and logout. Preserve pending payment ownership across account changes without exposing or submitting another worker's queue. No default shared password, bus PIN login or HR-visible final password; service scope and policy remain U-15. Figma implements no server auth, secure storage or native autofill | [D] DL-22; Phase 2 §11 external sources, not compliance evidence |

### 4.3 Proposed daily-fare decision and acceptance requirements [D]

**Evidence boundary.** The pack specifies a **10 Tk daily boarding fee** [E·01], not whether it covers one boarding, both directions or another entitlement. It supplies neither return-trip coverage nor a service-day cutoff. Neither a daily door code nor a successful payment settles those questions [I].

**Proposed decision, pending client approval [D].** Treat payment continuity separately from entitlement. Preserve one logical payment identity for the same payment intent; Back, reopening, input switching and transport retries are not new purchase intent. The client must approve covered journeys/vehicles, return eligibility, service-day timezone/cutoff, renewal conditions and the unit used for balance conversion before entitlement copy or a new-charge rule can be accepted. No backend or approved fare policy is claimed here.

| ID | Proposed acceptance requirement [D, not tested] |
|---|---|
| FARE-1 | Given only the pack's daily 10 Tk statement, do not display an invented entitlement: no implied return inclusion/exclusion, unlimited travel or expiry time. Existing “rides left” targets and sample balances above/below are conditional: do not derive a ride count from Tk until the client approves what one paid unit covers. Confirmed Tk and payment status do not themselves grant boarding. |
| FARE-2 | After typing a code, using Back or reopening the payment flow must restore the same logical payment identity and known state; neither action alone creates or submits another payment request. An unsubmitted draft remains unsubmitted. |
| FARE-3 | Switching to QR after typing, or back to typing, must reuse that logical identity. Scanning the same code does not create a second request. A conflicting code requires explicit resolution; it must not silently create another charge or overwrite a submitted request. |
| FARE-4 | Following timeout, offline interruption or retry, reuse the existing transaction ID for the same submitted request. Proposed service acceptance must demonstrate at-most-once charging for that identity; uncertainty stays Pending, not a new request or Paid. Reopening a confirmed payment shows its existing result without resubmission. |
| FARE-5 | If the prior identity/result cannot be recovered, disclose unresolved payment status and require reconciliation before another submission; do not silently mint a replacement. A genuinely new payment needs explicit intent and a client-approved charging rule, not navigation, scanning, elapsed time or an assumed daily reset alone. |

**Open client question [A; extends U-8/U-5/U-6].** What exactly does 10 Tk purchase, does it include a return trip, and when and under which service rules may another charge begin? Until answered, retain neutral payment-state wording and flag entitlement as unresolved. Proposed checks must exercise typed → Back → reopen → QR → retry for both Pending and confirmed outcomes and compare identity/request/debit counts; this is a test specification, not evidence of implementation.

## 5. Contradictions — named and resolved

**Root tensions.** Almost every contradiction below comes from three underlying tensions: (1) a buyer-facing showcase vs a worker-facing daily tool; (2) a real-time connected experience vs a low-end, offline, crowded reality; (3) speed vs security vs dignity at the two critical moments — boarding and SOS. The client is describing two products at once. We design the worker's tool first and make it presentable, rather than the reverse.

**Resolution principles.** Worker safety beats presentation · default to the simplest successful action · prefer one robust path over primary-plus-fallback when the fallback fails the same users · future features shape the data model, not today's screens · anything the pack does not answer is flagged as a client decision, not guessed.

| # | The client says | The pack also says | Resolution | Reasoning |
|---|---|---|---|---|
| **C1** | Live map "exactly like Uber"; "map view is an absolute must" [E·01, E·02] | Workers "do not understand live maps"; want big text or a notification [E·03]; cheap phones, dim screens, expensive data, no Wi-Fi at the stop [E·01, E·02] | **Status-first with optional Map/Stops [D].** Large status remains primary; the existing Route entry opens the later user-approved geographic map, with a Stops alternative and explicit position freshness (FR-7, DL-23). | HR's account supports the Home hierarchy, not removal of an optional map. Map-loading failure is unmeasured. User approval permits this prototype extension; sponsor acceptance and live vehicle tracking remain unconfirmed. |
| **C2** | Pay by scanning a complex QR on the bus door [E·01] | Half the cameras scratched [E·02]; 6:30, dark, pushing crowd, rain [E·02, E·03]; HR proposes "a 4-digit PIN to confirm they are on board" [E·03] | **Keypad first; optional QR retained [D].** The bus-door code rather than a personal PIN is our interpretation, not an HR specification. Proposed daily door card and QR encode the same four digits; distribution/cache remain [A, U-6]. Both inputs create the same payment request. Offline **Pending** is distinct from server-confirmed **Paid 10 Tk**; retries reuse one unique transaction ID (DL-18). | Camera damage and crowding justify a non-camera path [I], not a universal QR-failure claim. Neither a shared code nor its QR proves physical presence, identity, occupancy or payment; both can be copied. Daily colour supports recognition only, not fraud prevention. Kerb entry speed and driver readability are test targets. Preserve the user's approved scan option, not a first-cut feature. |
| **C3** | SOS sends an automatic email to the local police [E·01] | Police "never check" email; alert the factory security gate with the bus number [E·03]; the bus may be kilometres from the gate [I] | **SOS → factory security [D].** Proposed dispatcher workflow, no automatic driver alert, discreet local feedback. Distinguish **Sending / Not sent / Delivered / Acknowledged**, reuse one alert ID across retries/channels, and show location age when available (DL-18). Call and cancellation are targets; push/SMS service and gate staffing require confirmation [A]. | Monira identifies the intended recipient, not its staffing, response time or capabilities. A quiet interface may reduce disclosure risk [I] but cannot ensure only the worker sees it. Delivery is not human acknowledgement or help arrival. Escalation policy is the client's, not an assumed response in seconds. |
| **C4** | English as the default language [E·01] | "Many cannot read properly, mostly female workers" [E·01]; workers need plain big text [E·03] | **English remains pre-selected [D]**, with the user-approved immediate বাংলা/audio switch on first launch and core screens. HR-assisted set-up is a proposal [A], not a dependency. | Preserve the explicit default and approved switch. Language-light design is a comprehension hypothesis [I]; Bangla reading, numeral preference, translations and audio require validation, not a claim that either mode works without reading. |
| **C5** | Load the app over factory Wi-Fi [E·01] | The stop is 3 km away, Wi-Fi does not reach it [E·01, E·02]; data is expensive [E·01] | **Offline-tolerant cache [D]; conditional SMS [A].** Timestamp route/status and use small connected updates. Never imply live updates without a working channel; payment and SOS use their explicit pending/delivery states. | Lack of factory Wi-Fi is evidence; lack of all mobile data or working SMS is not. Coverage, cost and integration remain U-7. |
| **C6** | "Exactly like Uber… very premium, smooth animations" [E·01] | Cheap Android, dim broken screens, wet hands, urgent context [E·02, E·03]; fixed routes and a fixed fee — nothing is hailed [E·01, E·02] | **"Premium" redefined** as fast, clear, high-contrast and calm; animation only to mark a state change; no gesture-driven interface. **"Like Uber" is read as live tracking and polish, not on-demand hailing** — there is no request-a-ride anywhere in the IA. | Speed and legibility on low-end devices are what will feel premium to these users — and look credible to buyers. The service is scheduled buses on eight routes; a hailing metaphor would invent features the operation cannot deliver. |
| **C7** | Dashboard and groceries: "Not now. But design keeping in mind" [E·01]; "track if the driver is speeding?" [E·04] | A six-hour sprint; the graded scope is the worker journey. The SMS does not postpone speeding | **Dashboard/groceries deferred by the client [E·01]; speeding implementation deferred by us [D].** DL-21 documents proposed roles, vehicle monitoring and staff review; feasibility, threshold source and permissions/privacy remain U-12. No new staff screen, speed indicator or silent worker-phone tracking | Preserve the worker scope while acknowledging the unmet speeding request. Documenting the service does not fulfil it or authorise collection; an approved staff channel need not require a full dashboard. |
| **C8** (capacity question) | ~15,000 workers and 40 buses [E·01, E·02] | Monira explicitly names a full bus and taking the next one [E·03] | **Full remains first-class [D]**, with next-bus details only when known; otherwise disclose no update. Ridership, capacity, allocation and frequency remain unmeasured (U-4). | Workforce/fleet totals cannot establish routine fullness or trips per bus. The state is justified by HR testimony, not arithmetic. |
| **C9** | Each worker has an "assigned bus" [E·01] | "Bus is full, take the next one" [E·03]; 40 buses, 8 routes [E·02] | **Route/stop-based display remains a design proposal [D].** Show an eligible next bus only when assignment and service data support it. | A route-based model may reconcile these statements [I]; neither equal allocation nor actual reassignment rules are established. U-11 remains open. |
| **C10** | "No cash allowed anymore"; pay from a balance [E·01] | Lateness stops production — "the main thing" [E·01]; no top-up or zero-balance policy in the pack | **Warn before a shortfall [D].** Historical −3-ride grace and manual admission are proposals requiring **client approval**, not permission to board. Payroll/HR top-up are unverified alternatives [A]. | Refusal could worsen lateness [I]; neither its cost nor grace as the only solution is evidenced. Show pending vs confirmed funds and disclose unresolved admission policy (U-5, U-6). |

Minor pack inconsistency noted, not resolved: Monira is titled "field officer" in the header and "HR Supervisor" in the signature.

## 6. Constraints

**Explicit (stated in the pack).** Android phones, cheap, cracked and dim [E·01, E·02] · scratched cameras on about half [E·02] · data expensive; no factory Wi-Fi at stops [E·01, E·02] · 10 Tk daily fee, no cash fare [E·01] · limited reading, majority women [E·01] · boarding 6:30 AM in the dark, shift 8:00 [E·02] · monsoon rain, sweat [E·02] · ~15,000 workers, 4 factories, 8 routes, 40 buses [E·01, E·02] · SOS required [E·01] · name "GreenCommute" [E·04] · English explicitly the default for the buyer presentation next month [E·01] · sponsor requires a map view [E·02] · dashboard and groceries deferred [E·01].

**Unverified assumptions/questions [A].** Phone ownership, numeral recognition, mobile/SMS reception, assignment rules, gate staffing at 6:30 and payroll/HR top-up. The earlier multiple-trip inference is withdrawn; trips and ridership remain unknown (U-4; research A-6). None is an established operating condition.

**Unknowns.** See §10.

## 7. User stories

**US-1 · Glanceable status.** As a sewing-line worker who reads with difficulty, I want to see at a glance whether my bus is coming and in how many minutes, so that I stop waiting for hours in the rain and dark.

- Done when: the home screen shows my bus number and minutes-to-arrival as the single largest element, readable at arm's length on a dim screen (contrast ≥ 7:1, digits ≥ 64 px).
- Done when: *Coming*, *Full — take the next one*, *Arrived* and *Delayed / no update* are distinguishable by colour **and** icon **and** position, not by text alone.

**US-2 · Leave-home alert.** As a worker leaving home before dawn, I want an alert that tells me when to leave, so that I reach the stop just before the bus, not an hour early.

- Done when: a "Bus 12 · 15 min away · leave now" notification is specified with a configurable lead time.
- Target: an equivalent SMS variant is specified only as a candidate fallback [A]; delivery, language encoding and cost require confirmation (U-7).

**US-3 · Board and pay.** As a worker boarding in a pushing crowd with a wet, scratched phone, I want to confirm boarding and pay the 10 Tk fare without using the camera, so that I board in seconds without cash.

- Done when: boarding completes with ≤ 2 taps plus a 4-digit code and no camera.
- Target: offline entry shows **Pending**, not Paid; only server confirmation shows **Paid 10 Tk**, bus, time and settled balance. Retry uses the same unique transaction ID; daily colour is not proof. Typed and optional QR paths share this contract (DL-18).

**US-4 · SOS.** As a woman travelling at dawn who feels unsafe, I want one big SOS control to request help from factory security with my bus number and honest delivery feedback.

- Current demo: SOS is reachable from waiting and in-transit; tap starts a five-second countdown and explicit Cancel returns to the origin. The historical ~2 s hold proposal is superseded for the demo; accidental-trigger prevention and native gestures remain unverified.
- Target: show **Sending**, **Not sent**, **Delivered** or **Acknowledged** according to actual evidence, with one alert ID across retries. No three-second delivery guarantee. A cancellation request must not imply a delivered alert has been recalled (DL-18).

**US-5 · Balance.** As a worker paying the daily 10 Tk fare from a balance, I want confirmed funds, pending amounts and a low-balance warning, so I can seek the approved top-up or admission process before boarding. That process remains unknown.

- Target: Home and Balance show last-confirmed Tk, with pending requests separate; neither promises an approved number of rides or admission entitlement.
- Target: a low-funds warning uses a client-approved threshold and confirmed top-up guidance. The earlier three-rides threshold remains an unapproved proposal (U-5), not active worker-facing policy.

*Secondary-user story candidate [D/A] for Phase 2:* As the intended security-gate receiver, I want bus number, available location with age, worker identity, time and alert ID so I can acknowledge and follow the client's escalation policy. Staffing, receiving channel and dispatch authority are unverified.

**US-7 · Worker sign-in [D, current addition; US-6 remains Phase 2's gate-officer story].** As a worker, I want to open only my assigned account using my worker ID and password, with saved-credential assistance and verified recovery, without repeating login at every boarding.

- Target: language -> A-01 sign-in -> simulated success -> existing Home; missing input, invalid credentials, offline first/new-device sign-in, throttling and service failures expose no personal data.
- Target: Show/Hide, paste/autofill assistance and unchecked personal-phone continuity; A-02 help returns without a pretend reset. HR identity checks and private password-setting require operational approval. Logout must isolate account data while preserving pending request ownership. Bounded sample-auth browser PASS does not verify native autofill, keyboard/TalkBack, actual recovery or server sessions (DL-22).

## 8. Provisional user profiles — HYPOTHESES

These are illustrative role hypotheses, not recruited participants. Phase 2 records source support, changes and remaining assumptions; it is not a user study. Sewing-line/machine-operator specialisation and individual language abilities are inferred or assumed, not client-pack facts.

**Profile W — Sewing-line worker (primary)**

| Field | Hypothesis | Basis |
|---|---|---|
| Role | Illustrative machine operator [I] at one of the four Gazipur factories; staff-bus rider [E·01]; individual daily use unmeasured [A] | [E·01] supports factory workers, not this specialisation |
| Context | Leaves home before 6:30 AM in the dark; roadside stop about 3 km from the factory; monsoon rain; crowd at the stop | [E·01, E·02, E·03] |
| Goal | Reach the factory before 8:00 without waiting outside for hours | [E·01, E·02] |
| Main need | Know when to leave home and whether the bus is coming or full — without reading a paragraph | [E·01, E·03] |
| Likely frustration | Hours in the rain with no information; being late and blamed; a payment step that fails in the crowd | [E·01, E·03]; [I] |
| Relevant behaviour | Limited reading reported [E·01]; Bangla ability, numeral recognition, app habits and reliance on colleagues are unknown [A] | Language/script certainty is not established by the pack |
| Relevant constraint | Cheap Android; cracked, dim screen; scratched camera; expensive data; no factory Wi-Fi at stop; wet hands [E·01, E·02, E·03]; one-handed use [I] | Mobile data/SMS coverage unknown (U-7) |

**Profile S — Factory security gate officer (secondary hypothesis; the bus driver is noted as a tertiary user)**

| Field | Hypothesis | Basis |
|---|---|---|
| Role | Security staff at the factory gate, on duty through the 6:30 boarding window | [E·03]; [A] |
| Context | Gate post; receives alerts on a phone or desk device [A]; several buses en route at once [I] |  |
| Goal | Receive and acknowledge an SOS with the specific bus number [D]; response time unmeasured | [E·03] supports the recipient and bus number |
| Main need | Bus number, location, worker identity, time — in one message; a way to reach the driver [A] |  |
| Likely frustration | Vague alerts; false alarms with no way to acknowledge | [A] |
| Relevant behaviour | Reads Bangla and some English [A]; may escalate under a client-approved policy [D/A] | No language or dispatch behaviour observed |
| Relevant constraint | Not a user of the worker app — needs a receiving channel (SMS, call, desk view); appears in this sprint only as the SOS payload and confirmation | [I] |

## 9. Core journey hypothesis

*Illustrative simulation [A/D], not a field observation or test. Times, bus numbers, balances, shelter, trip duration and outcomes below are synthetic; only 6:30 boarding and the 8:00 shift are sourced. Proposed SMS and HR set-up depend on U-7 and U-9.*

1. **Entry — 06:12, home, dark.** The phone buzzes, or an SMS arrives: "Bus 12 · 15 min away · leave now". (HR set the worker up at the factory over Wi-Fi: identity, assigned route and stop, language, balance — FR-11.)
2. **Discovery — 06:13.** She opens GreenCommute or reads an available SMS. First/new-device app entry requires sign-in before personalised Home; previously authorised cached access needs approved policy. Illustrative Home: *Bus 12 · 15 min · Coming*, confirmed balance *80 Tk*, not an approved ride count. She leaves.
3. **Decision / action — 06:28, stop, rain, crowd.** A fresh update says *Arrived*, or a supplied next-bus ETA accompanies *Full*. She types or optionally scans the code; one 10 Tk request is created. Stale data does not count down as live.
4. **Payment status — 06:31.** Offline: **Pending**, alongside last-confirmed balance. After server confirmation only: *Paid 10 Tk*. Neither code entry nor ticket colour establishes boarding; any offline/manual admission needs client approval. In-transit target retains ETA freshness and SOS.
5. **Desired outcome — 07:15, factory.** Arrival before 8:00 with less waiting is the simulated goal, not a measured result or evidence of unaffected production.

Exception targets [D]: interrupted data → timestamped cache, no invented live ETA, SMS only if supported · SOS → Sending or Not sent, then Delivered/Acknowledged only with corresponding evidence · cancellation → an alternative only if known · low balance → warning and approved-policy guidance, no promised grace.

## 10. Critical unknowns — still require validation

| # | Unknown | Why it matters |
|---|---|---|
| U-1 | Does each worker have her own Android phone, or are phones shared or feature phones? | Notification/app viability; saved-credential privacy, personal-phone session continuity and shared-device logout |
| U-2 | Actual literacy: Bangla reading, numerals, worker-ID/password typing and credential-manager comprehension? | Language/audio and assisted sign-in/recovery need worker testing, not memory-only assumptions |
| U-3 | Home-to-stop walking time and its spread | Lead time of the leave-home alert |
| U-4 | How many workers ride; seating capacity; route allocation; trips per bus; frequency of fullness; who supplies a full-bus status | Full is required by HR's scenario, but frequency and capacity cannot be inferred from totals |
| U-5 | How the balance is topped up (payroll deduction, bKash, HR desk), who manages it, and whether a −3-ride grace is acceptable to the client (C10) | Balance, low-balance and grace screens |
| U-6 | Boarding-code distribution/cache; copied/expired codes; dead phones; authorisation and reconciliation of any manual or offline admission | Code/QR inputs are approved design choices, not presence proof or permission to board |
| U-7 | Connectivity at stops and enrolment: any mobile data? SMS reliable and number controlled by worker? | First/new-device sign-in needs connectivity; SMS cannot be the sole login/recovery dependency; bounded cached access remains separate |
| U-8 | Is the evening return commute in scope? | Journey coverage; dark-mode hours |
| U-9 | Security gate staffing at 6:30 and how they receive alerts | SOS payload and confirmation wording |
| U-10 | Device specs: Android version, screen size, notification permissions, battery habits, credential-provider/password/passkey support? | Layout/performance and native credential compatibility need real-device checks; low-end phones are not assumed to lack passkeys |
| U-11 | Is a worker assigned to a bus or to a route with several buses? | Home screen content; "next bus" logic |
| U-12 | Vehicle GPS or authorised work device; sample quality/freshness; verified speed-limit or approved fleet-threshold source; trip/driver assignment; response owner; notice, permissions/privacy and retention? | Proposed DL-21 monitoring contract depends on these answers; no implemented detection, required driver app or silent worker-phone tracking |
| U-13 | Does the sponsor accept optional Map/Stops beside status-first Home, and which location source, freshness rules and map-provider/caching rights are approved? | User approved the geographic prototype extension (DL-23); sponsor acceptance and live integration remain unconfirmed |
| U-14 | How workers learn bus times today | Baseline for the journey map |
| U-15 | Who approves and operates HR credential issuance, identity-verified recovery, private password-setting, support hours/channels, session lifetime/revocation, cached access, privacy and live authentication service scope? | DL-22 is a design decision, not approved operations or implemented security; no reset by worker ID alone, invented support number or guaranteed emergency dispatch before login |

## 11. Design implications

| Problem (evidence) | Implication [D] |
|---|---|
| No information while waiting; hours in rain and dark [E·01] | Status-first home: bus number + minutes as the hero; four states — Coming / Full / Arrived / Delayed; last-updated time always visible |
| Users do not understand maps; want big text or a notification [E·03] | Status/notifications stay primary; optional attributed OpenStreetMap plus Stops schematic uses illustrative positions, not GPS (DL-23) |
| Low literacy, mostly women [E·01] | Numbers, icons, colour, position; ≤ 3 words per state; English default with an unmissable বাংলা switch (DL-04); optional Bangla audio; same layout every day |
| Cheap Android, dim cracked screens [E·02] | Contrast ≥ 7:1 on primary status; large type; generous spacing; critical taps away from edges and corners; no fine gestures |
| Rain, sweat, crowd [E·02, E·03]; one hand [I] | Bottom thumb zone; large tap targets; no swipe-only actions; current five-second SOS demo with Cancel; explicit payment status |
| No Wi-Fi at stops, data expensive [E·01, E·02] | Timestamped cache and small connected payloads; conditional SMS [A]; never assume absent mobile data or successful delivery |
| QR risk: cameras, dark, crowd [E·02, E·03] | Keypad first; approved optional scan enters the same code. Offline Pending until server confirmation; same transaction ID on retry. Colour is recognition, not proof |
| Monira rejects police email [E·03] | SOS → intended security gate; Sending / Not sent / Delivered / Acknowledged; one alert ID; discreet feedback; staffing, channels and escalation unconfirmed |
| English default vs reported reading difficulty [E·01] | Retain English default and immediate approved বাংলা/audio switch; comprehension in either mode, translation and numeral preference require validation |
| Full / next bus explicitly named by HR [E·03] | First-class Full state; show eligible next bus/ETA only when known; frequency unmeasured |
| Future dashboard and groceries [E·01] | Deferred questions; no More area or change to present navigation |
| Driver speeding question [E·04] | Our implementation deferral, not the client's. Proposed vehicle-to-manager workflow, role permissions and test gates documented in DL-21; U-12 remains open. No current detection or worker speed UI |
| Cashless fare with no top-up method [E·01] | Low-balance warning; grace/manual admission require client approval; no guaranteed boarding or offline payment finality |
| Dark at 6:30, dim cracked screens, rain, then daylight in transit [E·02] | One light, high-contrast theme: ≥ 7:1 wherever text sits, including the status colour on its own tint; saturated status blocks with icons — readable outdoors, through droplets and cracks; dark mode only as a variables mode if time allows |

## 12. Final check

- Problem is specific: named company, count, place, time of day, weather, devices, fare, safety gap.
- Users are specific: one primary (the worker), one secondary (gate officer), one tertiary (driver), stakeholders separated.
- User stories are checkable: every criterion is observable on a screen or in a spec.
- Goals are measurable: minutes waited, taps, seconds to alert, contrast ratio, target size.
- Constraints are explicit and separated from assumptions and unknowns.
- Profiles are marked provisional; every field carries its basis.
- No fabricated evidence: every `[E]` cites an item in the pack; everything else is tagged `[I]` or `[A]`.
- Visual and interaction criteria are targets; delivered prototype behaviour and measured accessibility remain parent QA responsibilities (DL-20).
