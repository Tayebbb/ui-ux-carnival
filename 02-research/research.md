# GreenCommute — Phase 2 · Research & Validation

Phase 2 window 17:40–18:20 · Evidence base: client-pack Items 01–04. This is scenario synthesis, not a real user study. No worker interviews, measured frequencies or test results were collected here. Personas, feelings and journey values are explicitly illustrative; current qualifications are recorded in [DECISIONS.md](../DECISIONS.md), DL-18–23.

**Current prototype evidence, 11 September 2026:** the [22:38 Dhaka coordinator snapshot](../review/prototype-repair-coordination.md) reports bounded browser PASS for the listed sample-auth, boarding, route, offline and SOS journeys. These are coordinator-supplied findings, not field research or tests performed by this documentation pass. Participant comprehension, representative devices, keyboard/TalkBack, anonymous sharing and real services remain separate gates.

**Tags.** `[E·01]` Anisur's email · `[E·02]` junior's kick-off notes · `[E·03]` Monira Khatun, HR Supervisor, voice note · `[E·04]` SMS · `[I]` inference · `[A]` assumption — unverified · `[D]` design implication.

**Evidence weighting [I].** HR's account (E·03) is the most directly worker-focused testimony in the pack; that does not verify daily contact, prevalence or individual behaviour. E·01 is primary for stated business constraints. All testimony is *about* workers, not from them. Source quotations below are recorded excerpts, with ellipses for abbreviated extracts. Feelings are inferred [I]; quoted inner speech is synthetic simulation [A], never interview evidence. Design implications and acceptance criteria are targets [D], not delivered/verified interactions.

## 1. Scenario analysis

| # | Reported fact / source excerpt | Evidence | What it suggests [I/D] | Confidence in source support, not user validation |
|---|---|---|---|---|
| F1 | ~15,000 workers, 4 factories, Gazipur | [E·01] | Workforce scale, not measured daily ridership or 15,000 repeated incidents | High as reported |
| F2 | Workers "stand in the rain for hours waiting… get late, production stops. This is the main thing." | [E·01] | The pain is *uncertainty while exposed*; the business pain is lateness | High that it happens · Medium that information alone fixes it (see F3) |
| F3 | 40 buses, 8 routes | [E·02] | Seating capacity, ridership, trips and route allocation are unknown; no routine-fullness or equal-allocation conclusion | Medium as reported |
| F4 | Shift 8:00; boarding 6:30 "in the dark" | [E·02] | Two timing constraints, not evidence of spare travel time or every interaction occurring before dawn | High as reported |
| F5 | Cheap Android sets; screens mostly broken; dim brightness | [E·01, E·02] | Legibility and target size are design priorities [D]; device performance remains unmeasured | High as reported |
| F6 | Data expensive; factory Wi-Fi; stop is 3 km away and Wi-Fi does not reach it | [E·01, E·02] | Design for interrupted data [D]; mobile/SMS coverage is unknown, not always absent | High on Wi-Fi/cost only |
| F7 | "Many cannot read properly, mostly female workers" | [E·01] | Reduce reading burden [D]; a woman worker is the chosen primary profile [I], not a recruited participant | Reported constraint; degree/script unmeasured |
| F8 | Workers "do not understand live maps… just want a notification or a big text… 'Bus is 10 minutes away' or 'Bus is full, take the next one'" | [E·03] | The mental model is *status*, not *position*; two states already named by HR | High (closest to users) |
| F9 | QR at 6:30 "in a pushing crowd won't work"; "half the workers have scratched phone cameras" | [E·03, E·02] | Non-camera entry is justified [I]; actual QR failure rate is unmeasured, so retain the approved optional scan | High as stakeholder concern |
| F10 | "Rain and sweat makes touchscreens hard to use during monsoon" | [E·02] | Wet input: taps only, big targets, forgiving | High |
| F11 | HR proposes "a 4-digit PIN to confirm they are on board" | [E·03] | Four-digit entry is a plausible proposal [I]; numeral recognition/typing are untested and PIN meaning is ambiguous; not presence proof | Medium on proposal only |
| F12 | SOS by email to police is "useless, they never check it"; must "instantly alert our factory security gate with the specific bus number" | [E·03] | Intended recipient and bus number are explicit; staffing, channel and response time are not established | High on intended recipient |
| F13 | "Since they travel at dawn, if they feel unsafe" → big red SOS | [E·01] | The sponsor acknowledges a safety risk; its nature is unstated | Medium |
| F14 | 10 Tk daily fee, "no cash allowed anymore", pay "from their balance", transport "heavily subsidising" | [E·01] | A wallet exists in the client's mind; top-up and zero-balance are unspecified | High on the fee · Low on mechanics |
| F15 | English default because of a foreign-buyer presentation next month | [E·01] | Stakeholder pressure with a deadline; not a user need | High |
| F16 | "Exactly like Uber… premium, smooth animations"; "map view is an absolute must" | [E·01, E·02] | The sponsor's mental model is a consumer ride app | High as a stakeholder want |
| F17 | Dashboard and groceries "not now… design keeping in mind"; "track if the driver is speeding?" | [E·01, E·04] | Only dashboard/groceries explicitly postponed. Speeding implementation is our deferral [D]; proposed roles and monitoring contract in DL-21, with no detection service or silent worker-phone tracking | High on request only; feasibility unverified |
| F18 | "Assigned bus" vs "take the next one" | [E·01 vs E·03] | Route/stop-based display is a design proposal [D]; actual assignment/substitution policy remains unknown | Unverified model |
| F19 | Absent: return commute, top-up method, how workers learn bus times today, device specs, home-to-stop distance, who marks a bus full | — | Each becomes a stated assumption or an open question | — |

## 2. Stakeholder-derived insights — not a user study

**Goals.** Reach the factory before 8:00 [E·01, E·02] · not stand in rain and dark for hours [E·01] · know whether to wait or leave [I from E·01, E·03] · board without a struggle [E·03] · feel safe at dawn [E·01].

**Motivations [I].** Avoid lateness and its consequences at work; reduce weather/safety exposure; retain access to subsidised transport. These are inferred from E·01, not worker testimony. No comparison of alternative travel costs is supplied.

**Pain points.** Reported hours waiting and lateness [E·01] · need for coming/full information [E·03] · HR's concern about QR in a crowd [E·03] · sponsor's safety concern at dawn and HR's rejection of police email [E·01, E·03] · hard-to-see/use phones [E·02]. Existing emergency contacts and failure rates are unknown.

**Frictions.** QR scanning in a pushing crowd [E·03] · scratched cameras [E·02] · wet, sweaty screens [E·02] · dim, cracked displays [E·02] · no factory Wi-Fi at stops and costly data [E·01, E·02] · reading burden under English default [I from E·01] · map comprehension reported by HR [E·03]. Mobile-data availability is unknown.

**Reported context and desired behaviour.** Waiting outside, sometimes for hours [E·01]; dawn travel [E·01, E·02]; cheap Android phones [E·01]; a pushing crowd [E·03]. HR requests next-bus instructions and notifications/big text [E·03]; this is not observation of successful use. Home/stop checking habits remain unknown [A].

**Constraints.** Low literacy [E·01] · device quality [E·02] · data cost [E·01] · weather [E·02] · darkness [E·02] · one hand free in a crowd [E·02, E·03; I] · a daily fee from a balance with no stated top-up [E·01].

**Contextual factors.** Monsoon [E·02] · dawn [E·02] · roadside stop 3 km from the factory [E·01] · crowd [E·03] · 4 factories, 8 routes, 40 buses [E·01, E·02] · staff buses [E·01]. In-house operation, driver devices and dispatch authority are not established.

**Emotional factors (all inferred).** Anxiety of not knowing [I] · fear when alone or threatened at dawn [I from E·01 "feel unsafe"] · stress of being late [I] · embarrassment or conflict if refused at the door over money [I].

**Decision factors.** When to leave home [E·01] · wait for this bus or the next [E·03] · whether to trigger SOS [E·01] · how to pay when the camera fails [E·02, E·03].

## 3. Main problems — ranked

Severity, opportunity and priority are design judgements [D] from reported risks, not survey scores. Frequency is **unmeasured** for all five problems; the pack does not support daily/constant/rare incident rates.

| Rank | Problem | Severity | Frequency | Core journey | Opportunity | Priority |
|---|---|---|---|---|---|---|
| 1 | **Uncertainty while exposed:** missing arrival/full-next information in rain and dark [E·01, E·03] | High | Unmeasured | Waiting state | High — status, freshness and alerts | P0 |
| 2 | **Boarding/payment friction:** QR risks in crowd, darkness and damaged cameras [E·02, E·03]; refusal could worsen lateness [I] | High | Unmeasured | Core boarding flow | High — code + optional QR, honest payment status; admission policy unresolved | P0 |
| 3 | **Comprehension barrier:** limited reading, English default, maps [E·01, E·03] | High | Unmeasured | Cross-cutting | High — clear status and approved immediate বাংলা/audio switch | P0 |
| 4 | **Safety escalation risk:** police email rejected; gate recipient proposed [E·01, E·03] | Very high | Unmeasured | SOS state | High — discreet request and truthful delivery/acknowledgement; operations unverified | P0 by severity |
| 5 | **Connectivity/cost risk at the moment of need:** no factory Wi-Fi, data expensive [E·01, E·02] | High | Unmeasured | Enabler for 1, 2, 4 | High — dated cache; SMS conditional on validated service | P0 (enabler) |

Capacity remains U-4, not a sixth measured problem: workforce/fleet totals do not establish seating, occupancy, trips, equal route allocation or routine fullness. HR's Full/next-bus example alone justifies that state [E·03].

## 4. Updated user profiles — Phase 1 → Phase 2

The evidence base did not change; the reading of it did. The phase-to-phase record below retains hypotheses and changes. **Confirmed** means supported by stakeholder text, not validated with a worker. Names and role specialisations are illustrative [I/A]; no persona was interviewed or tested.

### Profile W → Persona: **Shahida** — sewing-line worker (primary) · *placeholder name; no individual appears in the pack*

| Field | Phase 1 hypothesis | Scenario evidence | Updated understanding | Status |
|---|---|---|---|---|
| Role | Machine operator [I], assigned staff-bus rider | [E·01] "factory workers… their assigned bus"; [E·03] "take the next one" | Sewing-line role is inferred; route/stop-based display proposed [D]. Vehicle substitution and allocation unknown | **Changed proposal**, not validated (C9) |
| Context | Before-6:30 departure inferred [I]; stop 3 km from factory; monsoon; crowd | [E·01] stop distance; [E·02] "boarding 6:30 in the dark", rain; [E·03] "pushing crowd" | Timing/weather/crowd source-supported; individual departure/shelter habits unverified | **Source-supported / strengthened** |
| Goal | Reach the factory before 8:00 without waiting outside for hours | [E·01] "stand in the rain for hours… get late" | Operative daily decision is narrower: **when to leave home, and wait or take the next bus** | **Sharpened** |
| Main need | Know when to leave and whether the bus is coming/full, without reading a paragraph | [E·03] "big text… 'Bus is 10 minutes away' / 'Bus is full, take the next one'" | Confirmed almost verbatim by HR; the two states are already named | **Confirmed** |
| Likely frustration | Feelings inferred from hours in rain, lateness and QR risk [I] | [E·01]; [E·03] "scanning QR codes at 6:30 in a pushing crowd won't work" | Conditions are reported; frustration and worry about fare refusal are hypotheses, not confirmed feelings | **Source-supported conditions + Added inference** [I] |
| Relevant behaviour | Earlier Bangla-reading attribution unsupported; numerals, app habits and colleagues assumed [A] | [E·01] limited reading; [E·03] PIN suggestion | Four-digit entry is plausible [I], not evidence of reading/typing accuracy; script ability and habits remain unknown | **Corrected attribution**; **Still assumed** |
| Relevant constraint | Cheap/damaged Android, expensive data, wet hands; one-handed use [I] | [E·01, E·02] | Device/cost constraints source-supported; add zero-balance policy as **unknown**, not inability to pay or permission for grace | **Supported + Added unknown** |
| Emotional state | (not in Phase 1) | [E·01] "if they feel unsafe" | Fear at dawn is **acknowledged by the sponsor**; anxiety of not knowing is inferred | **Added** [E·01 + I] |
| Language | No separate Phase 1 profile field | [E·01] literacy; English default demanded | Retain user-approved immediate Bangla/audio switch [D]; preferred script and comprehension remain untested [A] | **Added design target** |

**Persona card — Shahida**

- **Who:** an illustrative woman staff-bus rider; sewing-line specialisation [I], name [A]. Four Gazipur factories and ~15,000 workers are organisational facts [E·01], not facts about an identified Shahida.
- **Morning:** wakes before dawn; walks to a roadside stop (distance unknown [A]); boards around 6:30 in the dark, often in rain, in a crowd [E·02, E·03].
- **Phone:** illustrative cheap Android [E·01] with reported screen/camera constraints [E·02]; data is expensive [E·01], but her actual use and ownership are unknown [A].
- **Reading:** limited [E·01]; can likely handle four digits [I from E·03]; Bangla-speaking [I].
- **Wants:** "Bus is 10 minutes away" or "Bus is full, take the next one" — a notification or big text, not a map [E·03].
- **Fears:** waiting alone in the dark; being late; something going wrong at the door [E·01; I].
- **Pays:** the proposed 10 Tk daily fare is cashless and from a balance [E·01]. Top-up method, including whether top-up can involve cash, is unspecified [A]; the fare instruction does not settle that policy.
- **Recorded source excerpt about workers, not this persona:** "the girls on the floor do not understand live maps. They just want a notification or a big text" — Monira Khatun, HR Supervisor [E·03].
- **Unknown about her [A]:** whether the phone is her own or shared; how far she walks to the stop; whether she reads Bangla numerals or Western digits more easily; how she learns bus times today; whether she also rides an evening bus; how she tops up her balance.

### Profile S → Persona: **Kamal** — factory security gate officer (secondary, DL-09) · *placeholder name; role only implied by the pack*

| Field | Phase 1 hypothesis | Scenario evidence | Updated understanding | Status |
|---|---|---|---|---|
| Role | Security staff at the gate, on duty during boarding | [E·03] "instantly alert our factory security gate" | Confirmed as the intended SOS receiver; staffing at 6:30 still assumed | **Confirmed** [E] · **Still assumed** (staffing) |
| Goal | Earlier in-seconds response hypothesis [A] | [E·03] "with the specific bus number" | Intended gate receiver supported; dispatch authority, response speed and escalation are unverified proposals | **Changed proposal** (C3) |
| Main need | Bus, available location, worker identity, time; driver contact proposed [D] | [E·03] bus number; remaining payload/workflow [D] | Add alert ID and evidence-based acknowledgement target; delivery alone does not show someone is acting | **Source-supported recipient + design additions** |
| Frustration | Vague alerts; false alarms | [A] | Unchanged — no evidence either way | **Still assumed** |
| Constraint | Receiving channel needed [D]; not a worker-app persona | [I] from E·03 | Scope choice: represented by payload and worker-facing status only; no verified gate interface | **Design scope**, not validated |

**Persona card — Kamal**

- **Who:** illustrative gate-officer role inferred from the named security-gate recipient [I from E·03]; name, gender, age and shift pattern unknown [A].
- **Moment of use:** proposed phone/desk alert at dawn [A]; the fleet total does not establish forty buses simultaneously on the road. Bus number is explicit [E·03]; location, identity, time and alert ID are proposed payload details [D].
- **Action:** proposed acknowledgement, call-back and client-defined escalation [D/A]; staffing, receiving tools and authority remain unknown.
- **Why it matters for our screens:** the intended gate recipient informs **Sending / Not sent / Delivered / Acknowledged** status, not a promise of notified security or arriving help (DL-18).

**Tertiary (noted, not personified):** the bus driver, relevant to the boarding context and speeding question [E·03, E·04]. Code display and security contact are proposed operations [D/A], not established duties. No automatic driver alert or silent worker-phone tracking (DL-03, DL-13).

## 5. Journey map — a rainy morning when the bus is delayed

Illustrative simulation [A/D]: Shahida, Route 3, monsoon, first bus 15 minutes late. **All quoted thoughts/feelings are synthetic, not interviews**; emotional interpretation is [I]. Names, stops, bus numbers, balances and journey times are illustrative, except the pack's 6:30 boarding and 8:00 shift. Touchpoints, shelter, dispatch, SMS and admission conditions are unverified; opportunities are target interactions, not a delivered walkthrough.

| Stage | Time | Simulated action [A] | Synthetic thought / feeling [A/I] | Pain | Current touchpoint: unknown unless tagged | Target opportunity [D] | State / screen |
|---|---|---|---|---|---|---|---|
| 0 Evening before | 17:30 at the factory | Proposed factory Wi-Fi sync; Wi-Fi availability is sourced, this use is not | — | — | Unknown | Cache available route/code data; confirmed Tk plus separate pending amounts; warning threshold requires approval, not a ride conversion | Sync target · Balance |
| 1 Wake | 05:20, dark, heavy rain | Gets ready; checks for timing information | "Will it come? Should I go early?" | Uncertainty inferred from reported waiting [I] | Word of mouth [A] | If fresh data supports it: push delay alert; SMS only if service confirmed. Sample: "Route 3 · buses running 15 min late · leave by 06:15" | Alert target |
| 2 Decide to leave | 06:10 | Opens app or supported SMS | "I can wait inside 5 more minutes" | Early departure could increase exposed waiting [I] | Unknown | Sample fresh Home status: **Next bus 12 · 35 min · Delayed**; updated 06:09. Walking time remains unknown | Waiting target (Delayed) |
| 3 At the stop | 06:30, rain, crowd forming | Seeks shelter [A], checks phone; wet screens reported [E·02] | "Is it near?" | Wet/dim screen [E·02]; mobile coverage unknown | Unknown | Timestamped cache; no live countdown from stale data. **Coming · 15 min** only with an appropriate update; SMS conditional | Waiting target (Coming/stale) |
| 4 Bus arrives full | 06:45 (15 min late) | Sees bus stop briefly and leave | "Not again — do I wait or walk?" | Full/next-bus information requested [E·03] | Driver shouting [A] | **Full — take the next one · 12 min** only if next eligible bus/ETA is supplied; otherwise disclose no update | Waiting target (Full) |
| 5 Next bus | 06:57 | Bus 14 arrives; attempts code entry | "Quick, before the crowd" | Pushing crowd and QR risk [E·03] | Unknown | Type four digits or optional scan; create one 10 Tk request with a unique transaction ID; offline **Pending** | Boarding input target |
| 6 Board | 06:58 | Simulated admission, conditional on approved policy | "Done." | Wet screen [E·02]; one-handed use [I] | Unknown | Ticket shows **Pending** offline; **Paid 10 Tk** only after server confirmation. Colour is recognition, not proof. Grace/manual admission require client approval | Payment-status target |
| 7 In transit | 07:00–07:50 | Sits or stands; phone away | "I'll make it by 8" — or, if something feels wrong, fear | Safety concern [E·01], not a measured incident | Emergency contacts unknown | Timestamped ETA; current SOS demo uses five seconds and explicit Cancel, no hold required. Production **Sending / Not sent / Delivered / Acknowledged** require evidence; one alert ID, no delivery-time guarantee | In-transit · SOS targets |
| 8 Arrive | 07:55 | Enters factory; attempts Wi-Fi reconnection | Relief [I] | Lateness remains possible [I] | Gate [A] | Retry pending requests with the same IDs; server confirmation settles payment; connection alone does not | Reconciliation target |

**Simulated emotional curve [I/A]:** uncertainty → informed waiting → anxiety at a full bus → relief on boarding → calm or fear in transit → relief on arrival. This is a design hypothesis, not measured emotion or evidence that the product reduces anxiety.

**Hypothesised friction points [I]:** timing decisions at stages 1, 2 and 4, code/payment at 5–6, and safety delivery at 7. Existing workarounds and actual failure frequencies remain unknown.

## 6. Evidence → Insight → User need → Design implication

| Evidence: recorded excerpts / paraphrases | Insight [I] | Proposed user need [I] | Design implication [D] |
|---|---|---|---|
| "Stand in the rain for hours waiting" [E·01] | Uncertainty is one reported pain; capacity is unknown | Useful arrival information with honest uncertainty | Home number + state + freshness; alerts carry equivalent information |
| "Big text… 'Bus is 10 minutes away'" [E·03] | HR provides example language, not usability-tested copy | Readable status | Large digits and short labels are targets; Coming / Full / Arrived / Delayed |
| "Bus is full, take the next one" [E·03] | Full merits explicit handling; frequency unmeasured | Know the available next action | Show next bus/ETA only if known; route eligibility remains U-11 |
| "Do not understand live maps" [E·03] vs sponsor map demand [E·02] | Worker-focused status and geographic context need not compete | Status primary, optional Map/Stops | Current attributed OpenStreetMap basemap retains the schematic as Stops (DL-23); positions are illustrative, not GPS, new research or confirmed sponsor acceptance |
| "Cannot read properly" [E·01]; English default [E·01] | Reading burden should be reduced, not assumed eliminated | Immediate language/audio access | Retain English default and approved বাংলা/audio switch; translation, numeral and comprehension checks pending |
| Broken, dim screens [E·02] | Contrast and size are survival | See it through cracks and dimness | ≥ 7:1 text, ≥ 12:1 hero; light theme (DL-11); targets away from edges |
| Rain and sweat [E·02]; pushing crowd [E·03] | Input must be forgiving and one-handed | Act with a thumb, once | Bottom thumb zone; large tap targets; current SOS demo is a five-second countdown with explicit Cancel. Native activation remains unverified |
| QR "won't work"; half the cameras scratched [E·02, E·03] | Camera cannot be on the critical path | Board without a camera | Door code typed at the kerb; scan as optional shortcut; ticket screen (DL-02) |
| Wi-Fi does not reach the stop; data expensive [E·01, E·02] | Interruption is a design risk, not a known daily outage | Honest cached status | Timestamp cache; small connected updates; SMS conditional on U-7 (DL-05) |
| "Emailing the police is useless… alert our factory security gate with the specific bus number" [E·03]; "if they feel unsafe" [E·01] | Gate recipient explicit; dispatch staffing/authority unverified | Discreet request with truthful progress | Sending / Not sent / Delivered / Acknowledged; same alert ID on retry; no guaranteed response (DL-18) |
| "No cash allowed anymore"; production stops when late [E·01] | Refusal could worsen lateness; policy remains open | Early warning and a known approved process | Pending offline, Paid only when server-confirmed; unique retry ID; grace/manual admission require client approval (DL-12, DL-18) |
| "Present this to foreign buyers next month" [E·01] | The showcase is real but secondary | (stakeholder) | English pre-selected; same screens; polish through clarity (C4, C6) |

## 7. User story source cross-check — not usability validation

| Story | Verdict | Why | Change |
|---|---|---|---|
| US-1 Glanceable status | **Supported** | Near-verbatim in E·03; the two states HR named are the core | Add "Delayed" as a fourth state — the journey map's trigger |
| US-2 Leave-home alert | **Needs modification** | E·01 "know exactly when to leave home" supports it; the delayed-bus journey shows the alert must also carry *delays*, not only ETA | Rewritten below |
| US-3 Board and pay | **Needs modification** | E·02/E·03 strongly support camera-free boarding; the phrase "without using the camera" now conflicts with the optional scan | Rewritten below |
| US-4 SOS | **Needs modification** | E·03 supports the receiver; quiet feedback is a risk-reduction proposal [D], not guaranteed privacy | Add evidence-based delivery/acknowledgement (DL-18) |
| US-5 Balance | **Fee/balance supported; policy open** | E·01 does not establish offline finality, top-up or grace | Separate Pending from confirmed funds; require client approval for grace/manual admission |
| US-6 (new) Gate officer | **Added** | E·03 names the receiver; the secondary persona is a graded deliverable | New story |

**Rewritten stories**

- **US-2 · Leave-home and delay alert [D].** As a worker leaving before dawn, I want fresh timing/delay information to reduce unnecessary waiting. *Target:* configurable lead time; timestamped status; sample "Route 3 · buses 15 min late · leave by 06:15" only when supported by service data. An equivalent SMS variant is conditional on coverage, cost and integration; no delivery claim.
- **US-3 · Board and pay [D].** As a worker in a crowd, I want typed code entry or optional QR for one cashless payment request. *Target:* ≤ 2 taps + 4 digits; scan fills the same code. Offline **Pending** remains separate from last-confirmed balance; **Paid 10 Tk** requires server confirmation. Persist/reuse one unique transaction ID on retries, with server idempotence. Daily colour is recognition, not presence/payment proof; admission policy remains open.
- **US-4 · SOS [D].** As a worker who feels unsafe, I want a discreet help request toward factory security with my bus number and truthful status. *Current demo:* tap starts a five-second countdown with explicit Cancel; no hold, actual call, GPS or SMS. `Online retry · demo` simulates connectivity. *Production target:* quiet activation and **Sending / Not sent / Delivered / Acknowledged** only on corresponding evidence, one alert ID across retries/channels. No delivery-time guarantee or promise of help; cancellation does not recall a delivered alert. Historical hold timing is not implemented or validated.
- **US-6 · Gate officer (secondary) [D/A].** As the intended gate recipient, I want bus number, available location with age, worker identity, time and alert ID so I can acknowledge and follow the approved escalation policy. *Target:* worker-facing status reflects actual delivery/acknowledgement. Staffing, receiving tools and authority require client confirmation; no gate UI claimed delivered.

## 8. Design priorities

**P0 — core design targets; current prototype evidence is bounded as above**
- Waiting state with four states — Coming / Full (+ next bus) / Arrived / Delayed — and last-updated time
- Leave-home and delay alerts; SMS variant conditional on service confirmation
- Boarding: typed code or approved optional QR → Pending offline / Paid only after server confirmation; one transaction ID on retry
- SOS: five-second cancellable demo; Sending / Not sent / Delivered / Acknowledged; production activation and receiving operations unconfirmed
- Offline cache + honest staleness
- English default with the approved immediate বাংলা/audio switch; comprehension remains untested

**P1 — important**
- Balance as confirmed Tk plus separate pending amounts; warning threshold, top-up, grace and re-entry require client approval. The daily 10 Tk fee does not turn 80 Tk into eight rides
- Retain one-tap Map/Stops: geographic map plus the existing schematic, later approved by the user (DL-23); live integration and sponsor acceptance remain unconfirmed
- Retain user-approved "Scan instead" input; not a first-cut feature
- Retain approved Bangla audio option; alert wording/recording require validation
- HR-assisted set-up remains an operational proposal [A], not a new committed screen

**P2 — nice to have (not to be designed unless Phase 5 has slack)**
- Payment history
- "Report a problem with this bus"
- Dark mode as a variables mode
- First-run tour

**Out of prototype scope:** client-deferred manager dashboard/groceries; designer-deferred speeding implementation. Proposed role permissions, security receiving and vehicle-monitoring workflows are documented in DL-21, not new research or delivered services. No More IA or silent worker-phone tracking. P2 items above are historical possibilities, not authorisation to expand the approved product or change its theme/navigation.

## 9. Assumptions register — stated, not verified

| # | Assumption | Why we hold it | If wrong |
|---|---|---|---|
| A-1 | Each worker carries her own Android phone | [E·01] names cheap Android, not ownership | Check shared-phone/identity constraints before claiming reliable personal alerts |
| A-2 | Workers recognise/type numerals with limited reading | HR's PIN suggestion makes it plausible [I], not tested | Validate digits and approved audio; colour alone cannot replace comprehension |
| A-3 | SMS can serve as a fallback | Proposed [D]; coverage, cost, permissions and gateway unknown | Keep cached status honest; SOS remains Not sent without a working channel; client must approve a fallback |
| A-4 | Route/stop assignment permits a next eligible bus | Proposed reconciliation of E·01/E·03 [I] | Confirm actual assignment rules; do not infer equal buses per route |
| A-5 | Gate staffed at 6:30 with a working receiving channel | E·03 names a recipient, not staffing or tools | Client must confirm operations/escalation; no promise of delivered help |
| A-6 | Earlier multiple-trips/routine-fullness inference withdrawn | Fleet/workforce totals do not establish either | Ridership, seats, allocation, trips and fullness frequency remain unknown (U-4) |
| A-7 | Payroll deduction or HR-desk top-up | Unverified alternatives; cashless fare does not define top-up | Do not present an HR/payroll instruction until client confirms the method |
| A-8 | Historical −3-ride grace or manual admission | Proposal only; client approval required | Show unresolved policy, not automatic credit/admission or invented hard refusal |
| A-9 | Daily door-code/QR distribution is feasible across the fleet | Staff buses are sourced; operating arrangements are unknown | Client must approve logistics and manual fallback; neither input proves presence |
| A-10 | Evening return commute excluded from current targets; client scope unconfirmed | Pack describes mornings only | Obtain scope approval before any return-state expansion |
| A-11 | Feelings in the journey map (anxiety, fear, relief) | Inferred from situation, not reported | Wording of alerts may change |
| A-12 | Earlier LCD/no-battery-benefit inference withdrawn | Panel technology and theme performance unknown | Preserve approved identity; test legibility without prescribing grayscale or a new theme |
| A-13 | Workers currently learn bus timing by word of mouth or not at all | Pack silent | Baseline for the journey map changes |

### 9.1 Scenario-based falsification plan [D] — not study results

Desk checks below are proposed specification/state reviews, not observations of workers. Worker tasks require voluntary recruitment and safe simulation, not testing in a live boarding crowd or triggering real SOS alerts. Record assistance, errors, interpretation and recovery per participant; do not infer prevalence from this plan. **Participant and operational outcomes remain unverified; no worker sessions are claimed completed.** The separate coordinator's bounded prototype replay does not validate these research hypotheses or real-service requirements.

| Uncertainty / scenario | Desk check to perform [D] | Proposed worker / operational test [D] | Falsifier and consequence [D]; outcome [A] |
|---|---|---|---|
| A-2 / U-2: numeral recognition and Bangla literacy are unknown | Compare English default, Bangla switch, numeral forms and retained Bangla audio for equivalent bus/status/code meaning; flag any reading-only dependency. | Ask workers with differing self-reported reading comfort to identify bus vs minutes, enter a supplied code, switch language and explain a Bangla audio alert without coaching. Separately record preferred digits, reading and listening comprehension. | Confused bus/ETA, wrong digits or an unexplained alert challenges independent-use claims; revise cues/input and retest. Retain the audio commitment while testing wording, access and comprehension. **Unverified.** |
| E·02–03 / A-2: dim, damaged display and wet input may defeat large targets | Review keypad errors, correction, duplicate taps and typed → Back → reopen → QR → retry against brief §4.3: one logical payment identity, no navigation-created request. | On representative low-end devices, simulate dim light and safe wet-input conditions without damaging phones; ask workers to read status, enter/correct a code and recover from interruption. Record mis-taps, help and time, not assumed speed. | Unrecoverable errors, accidental submissions or identity changes reject the input/continuity target; revise and repeat. Service-level duplicate-charge behaviour needs separate implementation tests. **Unverified.** |
| U-3/U-4/U-7: stale or unknown ETA / next bus | Review fresh → stale → unknown and Full-without-next-ETA states; check timestamps, absence of live countdown and no unsupported leave-now cue. | Ask workers whether each simulated screen means the bus is coming now, timing is unknown, or a next bus is confirmed, and what they would do. Do not prescribe unsafe departure choices. | Treating stale data as live or an unknown next bus as promised rejects the uncertainty cues; revise copy/audio/hierarchy and retest. Freshness threshold needs service-owner agreement. **Unverified.** |
| A-3/A-5 / U-7/U-9: SMS unavailable, gate unstaffed or no acknowledgement | Review no-channel, missing delivery receipt and delivered-without-acknowledgement cases separately; never infer SMS success, staffing or help from a send attempt. | Ask workers to explain simulated Sending/Not sent/Delivered/Acknowledged states. Separately ask the client/security owner to demonstrate dawn staffing, receiving channel and escalation in a controlled drill with no real emergency dispatch. | A worker expects help without acknowledgement, or no accountable staffed receiver/channel exists: reject readiness claims and require revised cues plus client-approved operations/fallback. Do not invent contacts or response times. **Unverified.** |

**Fare-policy dependency [D/A].** F14 establishes the daily 10 Tk amount, not return-trip entitlement or a service cutoff. Brief §4.3 FARE-1–5 proposes continuity and approval gates: Back/reopen/QR after typing/retry must not alone create another request; reuse the logical payment identity. Until client approval, neither “rides left” nor sample journey payments establish an entitlement. These are proposed acceptance requirements, not an approved policy, backend or test result.

## 10. Research summary — for submission

The client pack describes ~15,000 workers across four factories in Gazipur, 40 buses and eight routes; 6:30 boarding before an 8:00 shift; cheap/damaged Android phones, limited reading, rain/crowding and expensive data with no factory Wi-Fi at stops [E·01, E·02]. It reports waiting and lateness, not measured incident rates or occupancy. Monira Khatun asks for "a notification or a big text that says 'Bus is 10 minutes away' or 'Bus is full, take the next one'" [E·03]. Her QR concern supports camera-free entry alongside the approved optional scan; her police-email objection identifies the security gate with bus number as the intended SOS recipient, not a verified response service.

Five design priorities follow: timing uncertainty, boarding friction, comprehension, safety escalation and connectivity/cost risk. Frequency is unmeasured. Retain status-first Home, English default with immediate Bangla/audio switch, typed code plus optional QR and optional Map/Stops. The later user-approved geographic extension retains the schematic as Stops (DL-23); it adds no worker-study evidence, sponsor approval or live telemetry. Offline payment remains Pending until server-confirmed; SOS distinguishes Sending, Not sent, Delivered and Acknowledged. Retry IDs require idempotent handling. SMS, staffing, top-up and grace/manual admission need client confirmation; there is no silent worker-phone tracking or new More/grocery IA.

Shahida (inferred sewing-line role) and Kamal (inferred gate-officer role) remain illustrative; driver stays tertiary. Phase-to-phase changes are source interpretations, not validated people or interviews. All inner-speech quotes and journey outcomes are simulation. A-1–13 retain unresolved assumptions and explicitly withdrawn inferences; target interactions and visual checks require parent verification (DL-18–20).

## 11. Current authentication desk research — 11 September 2026

**Provenance:** the following external pages were fetched in this session on 11 September 2026. This current user-authorised addition is not part of the historical Phase 2 window, client-pack evidence, worker research or a compliance assessment. No device, usability, backend or Figma QA result follows from these sources.

| External source | Source finding | Local implication [I/D], not a worker finding |
| --- | --- | --- |
| [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html) | Single-factor passwords require at least 15 characters; permit 64+ and spaces/Unicode, screen common/breached passwords, avoid composition rules/routine expiry, support autofill/paste/reveal and rate limiting. Local activation PINs differ from remote passwords; PSTN/SMS is restricted and needs alternatives; sessions are finite/revocable | Use worker ID + password with assistance, never the shared bus code or a short remote PIN. No NIST compliance or assurance-level claim |
| [W3C WCAG 2.2, Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) | Password-manager/autofill and paste assistance can avoid memory/transcription-only barriers | Permit both in production, retain Show/Hide and immediate Bangla; test comprehension and accessible recovery. A simulated chooser is not implemented autofill or WCAG conformance |
| [Android Credential Manager](https://developer.android.com/identity/credential-manager) | Supports saved passwords, passkeys and credential-provider integration | Optional OS-managed saved credentials; assess passkeys later. Actual OS/provider/shared-phone suitability remains U-10, not evidence that older/cheaper phones lack passkeys |
| [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) | Generic authentication failures cover wrong passwords, nonexistent IDs and disabled accounts; response differences can disclose account existence | One generic credential failure; do not enumerate accounts. Distinguish offline, throttling and service outages without granting access or revealing account status |

**Decision [D], DL-22:** company-provisioned worker ID + masked password with Show/Hide; optional OS-saved credentials and unchecked Keep signed in for personal phones. SMS-only and remote short-PIN/bus-code login are rejected; passkeys remain a future assessed option. Sign in before personalised Home, not at each boarding. First/new-device sign-in needs connectivity; bounded previously authorised cache is a separate policy.

**Recovery [D/A]:** HR-assisted identity verification, never reset by worker ID alone. A strong, securely issued, short-lived, single-use setup/reset grant permits only password-setting until completion; the worker's final password stays private from HR. No shared defaults. Finite/revocable sessions and logout must isolate account data while preserving pending payment ownership across accounts.

**Unresolved:** U-1/U-2/U-7/U-10/U-15 cover ownership, typing/comprehension, connectivity, provider support, HR issuance/support, privacy, sessions and live-service approval. Test representative devices and safe worker sign-in/recovery tasks before rollout. The coordinator reports bounded sample sign-in/sign-out replay in English and Bangla across A-01 sign-in, A-02 help, A-03 fixed demo chooser, A-04 checking, A-01e result and A-05 sign-out confirmation. These are top-level helper frames, not overlays, native inputs, server authentication, secure storage or autofill. The [auth repair snapshot](../review/final-auth-repair.md) separately records saved-action checks; offline/service/throttled outcomes require seeded state and lack visible chooser selectors. Help returns to sign-in without a pretend reset; emergency-contact guidance requires client-verified details, not invented numbers.

