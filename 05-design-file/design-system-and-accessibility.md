# GreenCommute — Phase 5 · Figma ecosystem, design system & accessibility

Phase 5 window 20:40–21:50 · This record separates historical script measurements, scoped layout checks and proposed implementation requirements. It is not proof of a complete browser replay or accessibility conformance. Figma: https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz/Carnival-8.0-%E2%80%94-UI-UX-Sprint · pages `03 Screens` (original baseline: 15 screens + 2 responsive proofs), `04 Design System` (tokens, styles, components, icons, mark), `06 Prototype` (flow notes).

**Current baseline, 11 September 2026:** the [22:38 Dhaka coordinator snapshot](../review/prototype-repair-coordination.md) supplies bounded browser PASS and a structural snapshot of 32 S/A frames including permanent width proofs, 197 interactive nodes, 454 visible texts and 152 icon/mark candidates, with zero detected structural/current-mode failures. These are not tests performed by this documentation pass, worker research, all-device/locale coverage or accessibility certification. Earlier counts below remain scoped history.

## 1. Named variables — collection `GreenCommute tokens` (1 mode: Light)

**Primitives** (not exposed in pickers): green 100 `#DDF3E7` · 500 `#14805A` · 700 `#0B5D3B` · 900 `#063B26` · ink 900 `#0F1A14` · 700 `#3A4A40` · 400 `#8A968F` · 200 `#D5DDD8` · 100 `#F3F6F4` · white · amber 100 `#FFE8B8` · amber 700 `#5E3D00` · slate 100 `#E3E9F2` · slate 700 `#2B4A73` · red 100 `#FBE3E1` · red 700 `#9E1B14` · indigo 700 `#2E3A87`.

**Semantic tokens** (aliases to primitives, scoped to the property they paint):

| Group | Token | Value | Why |
|---|---|---|---|
| Surface | `surface/page` · `surface/alt` · `surface/border` | `#FFFFFF` · `#F3F6F4` · `#D5DDD8` | One light theme (DL-11): readable outdoors, through droplets and cracks |
| Text | `text/primary` · `text/secondary` · `text/on-color` · `text/brand` | `#0F1A14` · `#3A4A40` · `#FFFFFF` · `#0B5D3B` | Near-black, never grey, on dim LCDs |
| Brand | `brand/primary` · `brand/tint` · `brand/deep` | `#0B5D3B` · `#DDF3E7` · `#063B26` | Green from the name "GreenCommute" / GreenTex; deep enough to carry white text |
| Status | `status/coming` · `status/arrived` · `status/full` · `status/delayed` (bg + fg each) | green tint/green · green/white · amber tint/dark amber · slate tint/slate | Four states, four hues **plus** icon, word and position — colour is never the only cue |
| Danger | `danger/bg` · `danger/tint` · `danger/fg` · `danger/text` | `#9E1B14` · `#FBE3E1` · `#FFFFFF` · `#9E1B14` | SOS only; red is reserved for it so it stays meaningful |
| Action | `action/primary` · `action/muted` (bg + fg) | green/white · alt/secondary | Primary CTA vs the passive "Waiting…" bar |
| Ticket | `ticket/thursday` | `#2E3A87` | Day-colour of the boarding ticket (rotates daily, DL-02) |
| Space | `space/1…10` | 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 | 4-pt grid |
| Radius | `radius/sm` · `md` · `lg` · `xl` | 8 · 12 · 16 · 24 | Cards 12–16, screens 24, pills only on chips |
| Size | `size/target` · `size/cta` · `size/key` · `size/sos` | 56 · 64 · 72 · 72 | Wet-thumb targets: above the 48 dp platform minimum |

Original Phase 5 fill-binding snapshot: 197 frames bound to colour variables, 81 corner radii bound. Literal fills included icon vectors and one-off geometry. These counts are unrelated to the later 197 interactive nodes and are not a current binding audit.

**Language collection:** `GreenCommute language` has English (default) and Bangla modes, independent of the Light colour theme. An earlier language follow-up recorded 153 bilingual copy variables across 26 top-level `S-` screen/proof frames, plus locale-font/selection bindings. That is not the current expanded auth inventory. Preserve native Bangla and intentional brand/language names and identifiers; the coordinator's later replay is bounded, not a full translation audit.

## 2. Type set — original snapshot: 40 text styles, all inspected text styled

| Family | Role | Why |
|---|---|---|
| **Archivo Black / SemiBold / Bold** | `display/*` (36–128 px) for the hero minutes, bus numbers, balance; `heading/*` (17–30 px) | A wide, heavy grotesk reads like a departure board at arm's length; tabular-feeling digits; Google Fonts (OFL) |
| **Inter Regular / Medium / Semi Bold / Bold** | `body/*` (15–18 px), `label/*` (13–18 px), `caption` (15 px) | Screen-tuned UI text with a tall x-height for small dim displays; Google Fonts (OFL) |
| **Noto Sans Bengali Regular / Medium / SemiBold / Bold / Black** | `bangla/*` plus locale-bound font overrides matching the existing text roles | Correct conjunct shaping; preserves the English role's size and weight when switching language; Google Fonts (OFL) |

Original snapshot: smallest text was 13 px on two keypad captions; secondary text used at least 15 px and primary status/CTAs at least 17 px. The 88–128 px hero range was not universal: later tickets use 64 px bus headings and S-06 uses left-aligned 28/18/16 px title/status/disclosure. These role-specific refinements supersede a uniform hero/body floor; they are not a new whole-file measurement. Recorded line-height targets: 100 % display, 120 % headings, 140 % body.

## 3. Components with variants — page `04 Design System`

| Component set | Variants | Used on |
|---|---|---|
| **Button** | Current parent-supplied set: Primary · Secondary · Muted · Danger × Default · Pressed · Disabled · Focus (16) | shared CTA family; Focus is a design state, not keyboard testing |
| **Status block** | State = Coming · Arrived · Full · Delayed | S-01 hero |
| **SOS bar** | State = Idle · Arming | S-01, S-04, S-05 |
| **Key** | Default · Pressed; parent reports 72 x 72 px masters, minimum 48 px; saved-report discrepancy below | S-02 keypad and existing width/height proofs |
| **Top bar** | Kind = Home · Sub | all screens |
| **Tile** | Kind = Balance · Route | S-01 |
| **Banner** | Kind = Offline · Grace (historical name, not approved credit) | offline/pending surfaces; no grace entitlement |
| **Language chip** | 116 x 56 px; two fixed EN / বাংলা segments, EN minimum 48 px; selected fill/text use `toggle/en/bg`, `toggle/en/fg`, `toggle/bn/bg`, `toggle/bn/fg` | shared headers; native Bangla preserved |
| **Icons** | 14 Lucide glyphs as components (`icon/arrow-left`, `check`, `bus`, `users`, `clock`, `wifi-off`, `bell`, `wallet`, `route`, `phone`, `camera`, `delete`…) | throughout |
| **Brand mark** | GreenCommute wordmark + bus/leaf tile, drawn in-house (DL-07) | top bars, S-09 |

## 4. Auto layout and responsiveness

The original 17-frame checkpoint recorded vertical auto-layout screens, FILL containers/spacers and zero text escapes, including Home at 320/412 px. The current coordinator's 32-frame structural result includes those permanent width proofs, not all devices, heights or languages. Desktop/tablet and the future manager dashboard remain outside the worker-mobile scope (DL-06).

**Key source discrepancy:** the parent's current handoff reports both masters at 72 x 72 px with a 48 px minimum. The [final-key-system recovery](../review/final-key-system.md), last recorded at 22:33:47 Dhaka, instead ends at 56 x 72 px, HUG/minWidth 56 bound to `size/target`, no width binding. Its earlier BLOCKED/FIXED regression is explicitly SUPERSEDED by recovery: all 100 consumers restored to horizontal FILL and baseline dimensions, ten roots preserved, zero measured containment failures. Do not attribute the later 72/48 dimensions to that report; the parent must confirm the settled master values. Neither snapshot is native-device or alternate-locale rendering evidence.

## 5. Prototype — boarding and SOS journeys

- **Flow 1 · Boarding & payment:** Language → A-01 → valid sample check → Home → Arrived → four digits or simulated scan → ticket → explicit CTA to Transit. Invalid fourth-digit submission increments failures; the third opens assistance. Full rejected input accepts a fresh first digit while retaining failures; assistance Retry/Back clears active slots, length and count. Code/error/assistance Back preserves offline context. Coordinator supplies 80 digit-position and ten deletion action-model checks, separately from browser clicks on all digits 0–9, correction/failure/assistance, scanner/torch and offline Pending recovery. Paid is a mock receipt, not a real debit; no paid-ticket root timer. Backend payment identity/settlement and camera/torch access remain unimplemented.
- **Flow 2 · SOS:** Home, ticket, Transit, Map, Stops or proofs → five-second countdown with explicit Cancel → Sending → Not sent/Delivered demo → simulated acknowledgement. No hold required. Coordinator reports countdown Cancel from all twelve current origins, Sending Cancel from Map, offline recovery, delivery versus acknowledgement, Keep active, cancellation confirmation/review and return to pending origin. `Online retry · demo` simulates connectivity. No actual call, GPS, SMS or dispatch; native hold/release and receiving operations remain unverified.
- **Language selection:** either 320 × 88 first-launch option sets the mode and shows one checkmark/selection message. বাংলা changes heading/Continue and persists into the sample journey. Shared chip is 116 x 56 px with fixed EN / বাংলা positions, EN minimum 48 px, selected brand-green fill/white text (recorded 7.95:1). Each segment sets its language directly; the recorded root fallback toggles on track padding. Earlier changing-order labels are SUPERSEDED. Selection is visually indicated, not proof of comprehension; native Bangla and existing font bindings are retained.
- **Language source verification:** an earlier owner snapshot checked 41 chip instances, including 21 on 26 `S-` frames and existing QA copies, for handlers/copy/font bindings. The 22:38 coordinator separately reports all 27 live instances passed size/containment after EN minimum changed from 45 to 48 px. Neither count certifies all locales or later additions.
- **Language layout verification:** temporary picker, in-transit and SOS proofs pass ancestor-containment checks at 320 px in English and Bangla; Bangla at 360 px also passes. The SOS countdown heading now wraps at compact widths without losing its locale bindings. All three 320 px Bangla proofs were visually checked and then removed. This scoped follow-up does not claim a fresh full-layout audit of every concurrently added screen.
- **Language browser verification:** bounded coordinator PASS covers Bangla first launch, sample sign-in, Home, boarding, ticket, Transit and SOS cancellation, then English restoration from its segment; the Bangla sign-in canvas was inspected. Earlier hidden/0 x 0 browser blockage is SUPERSEDED for that replay. All-screen native-language review, audio, keyboard/TalkBack and every device/locale combination remain open.
- Transitions: 200 ms dissolve, ease-out — state change only, no decoration.

**Current parent-supplied contract:** four starts: Language/boarding `30:642`, Transit/SOS `29:646`, Full `27:229`, Offline `27:322`. API timeout values are seconds: Home `27:9` = 4; Checking `169:4045` = 0.9; result `169:4049` = 60 (throttle release only); countdown `30:511` = 5; Sending `138:1024` = 1.5. Paid `29:551` has no root auto-timer. Countdown Cancel `30:526` uses `BACK`; duplicate `119:1007` is hidden. Auth timers are persisted in the [auth repair report](../review/final-auth-repair.md); this documentation pass did not inspect live Figma or measure elapsed timing.

**Authentication evidence, 11 September 2026 (DL-22):** six top-level frames, not overlays/native auth: A-01 `164:1944`, A-02 help `169:4037`, A-03 fixed sample chooser `169:4041`, A-04 checking `169:4045`, A-01e result `169:4049`, A-05 sign-out `204:1681`. Continue resets auth state and preserves locale. The auth owner supplies 67 saved-action assertions, not 67 browser journeys; service outcomes require seeded state, not visible chooser selectors. Coordinator later reports bounded sample-auth/sign-out browser PASS. Password click now covers full 320 x 64 field `169:3365`, not text `169:3366`; Show/Hide stays separate. Stay `204:1705` and header `204:1710` use `BACK`, avoiding the Balance-confirmation loop; confirm clears auth only, preserving route/payment/SOS state. Six low-fi sources map to bands `169:3787` / `211:1815` in [../03-structure/structure.md](../03-structure/structure.md).

**Authentication accessibility scope:** the auth owner recorded 320 px visible-text checks in both languages for six auth screens plus Balance, and English login/Bangla login/help/default-error visual checks. Hidden response variants, keyboard, native autofill, TalkBack and real devices remain uncertified. Missing-field feedback precedes inputs; 64 px primary and 56 px secondary actions sit outside the scrolling form. Fixed sample helpers are not input fields or credential storage. Production requires autofill/paste, private password setup and approved recovery. Historical login E2E blockage is SUPERSEDED by bounded coordinator replay, not by an all-control/all-locale certification.

**Fare boundary:** brief §4.3 FARE-1–5 governs the proposed payment contract. The daily 10 Tk fee does not establish rides remaining, return coverage or a service-day cutoff. Show confirmed Tk separately from pending amounts; 80 Tk must not be equated to eight rides. Back, reopening, switching typed/QR entry and retrying must preserve payment identity and must not create a new charge. Those continuity requirements are not established by the 80 digit-entry checks.

## 6. Accessibility — measured

**Recorded contrast (WCAG AA: 4.5:1 body, 3:1 large text and UI; design floor 7:1 for text at the stop).** Earlier measurements from resolved token values; unchanged here, not recalculated or a whole-file accessibility certification:

| Foreground | Background | Ratio | Result |
|---|---|---|---|
| text/primary `#0F1A14` | surface/page `#FFFFFF` | **17.8 : 1** | AAA |
| text/secondary `#3A4A40` | surface/page | **9.4 : 1** | AAA |
| text/brand `#0B5D3B` | surface/page | **7.95 : 1** | AAA |
| text/primary | surface/alt `#F3F6F4` | **16.4 : 1** | AAA |
| text/on-color `#FFFFFF` | brand/primary `#0B5D3B` (primary buttons, Arrived) | **7.95 : 1** | AAA |
| text/on-color | brand/deep `#063B26` | **12.6 : 1** | AAA |
| status/coming/fg `#063B26` | status/coming/bg `#DDF3E7` (hero 128 px) | **10.9 : 1** | AAA — *text token re-aliased to green/900 during the final audit (was 6.8:1)* |
| status/full/fg `#5E3D00` | status/full/bg `#FFE8B8` | **≈ 8.1 : 1** | AAA — *deepened from `#8A5A00` (4.9:1) during this audit* |
| status/delayed/fg `#2B4A73` | status/delayed/bg `#E3E9F2` | **7.4 : 1** | AAA |
| danger/fg `#FFFFFF` | danger/bg `#9E1B14` (SOS bar) | **8.0 : 1** | AAA |
| danger/text `#9E1B14` | surface/page | **8.0 : 1** | AAA |
| text/on-color | ticket/thursday `#2E3A87` | **10.1 : 1** | AAA |
| action/muted/fg `#3A4A40` | action/muted/bg `#F3F6F4` | **8.6 : 1** | AAA |
| icon/muted `#8A968F` | surface/page | **3.1 : 1** | AA non-text — used only for decorative separators and disabled glyphs |
| surface/border `#D5DDD8` | surface/page | 1.4 : 1 | decorative hairline; never carries meaning |

Defect found and fixed by the audit: S-05 arming ring was white on white (1:1); the ring now takes the screen's dark surface (white text ≥ 12:1).

**Alt text (for the handoff and the eventual build)**

| Screen | Element | Alt text |
|---|---|---|
| all | GreenCommute mark | "GreenCommute" |
| all | Language chip | Segmented control, role radiogroup: "Language"; segments "English, selected" / "Bangla" (or the inverse in Bangla) |
| S-01 | Status block icon | "Bus coming" / "Bus is here" / "Bus full" / "Bus delayed" (matches the state word) |
| S-01 | wifi-off icon (banner) | "No signal — showing last update" |
| S-01 | wallet / route tile icons | decorative (label text carries meaning) |
| S-02 | door-card illustration | "Where to find the 4-digit code on the bus door" |
| S-02 | backspace key | "Delete last digit" |
| S-03 | check icon | Announce the adjacent state: "Confirmed, demo" or "Pending"; do not imply a real payment from the icon alone |
| S-04 | route line | "Route progress: 3 of 6 stops passed" |
| S-05/06 | SOS ring / check | Follow the adjacent prototype state; on S-06, "Delivered, demo. Awaiting acknowledgement." Delivery is not acknowledgement or confirmed help |
| S-08 | geographic map, bus and boarding-stop markers | "Illustrative route and bus positions; Board Bazar boarding stop." Announce the displayed bus identity and context's update time; offline, announce "Last-known position, 06:20" with no fresh ETA. Do not describe the specimen as a live or exact vehicle location. |
| S-08b | stop sequence | "Illustrative route with five named stops; Board Bazar is the boarding stop." The old sixth item was an extra bus row, now hidden along with stale static row times; it was not a sixth stop. |
| S-08/S-08b | Map/Stops mode controls | Announce Map or Stops as selected and the other as the available mode, using the active language. Selected tabs are intentionally no-op controls; do not announce a trip reset or change of origin. |
| S-09 | selected-language check | "English selected" / "বাংলা বেছে নেওয়া হয়েছে"; the unselected option has no check |

Route descriptions above are proposed implementation semantics, not verified screen-reader output. Both modes visibly disclose **Illustrative route & bus positions / রুট ও বাসের অবস্থান উদাহরণ**. The official Figma exports and parent-reported containment checks support visual layout only, not native Android runtime or platform-guidance conformance. English/Bangla bindings are retained; a base `fontName` reading Inter does not establish a failure when the Bangla binding resolves Noto Sans Bengali.

**Other choices**
- Touch targets: original tokens specify CTA 64 px, key/SOS 72 px; ticket SOS instances use 56 px. Responsive keys are not uniformly 72 px; §4 separates saved consumer recovery from the parent's later master-size report. Current language chip is 116 x 56 px with EN minimum 48 px, superseding the 122 x 56 and 40 px snapshots. Coordinator found no interactive targets below 48 design px in the current structural scope; native dp/physical-device equivalence is not established.
- Original text floor: 15 px secondary body text and two 13 px keypad captions. Refined tickets use 64 px bus headings; S-06 uses 28/18/16 px title/status/disclosure roles rather than oversized display text. These refinements preserve existing text styles and locale-font bindings.
- State never by colour alone: each state = tint + icon + word + fixed position (Status block variants).
- Errors expose recovery: an invalid fourth-digit submission increments failures, third failure opens assistance, a full rejected code accepts replacement input, and assistance Retry/Back resets active digits/count. No driver admission permission follows.
- Reading order = visual order = auto-layout order (top bar → hero → detail → tiles → CTA → SOS).
- One-handed layout is a design target; Back and language remain header controls. Thumb reach, cracked-screen access and field usability are not verified by size/containment checks.
- Language: English pre-selected with selectable বাংলা; fixed header segments set either language (DL-04). Bounded runtime switching is reported above, not complete translation/comprehension certification. Audio playback is not implemented.
- Motion: dissolve 200 ms on state change only; SOS arming ring is the single authored moment; no sound on SOS by design (discreet).
- Scenario-driven proposal [D]: show source timestamps and clearly stale information because factory Wi-Fi does not reach the stops (E·01, E·02). SMS wording is a proposed fallback, not an evidenced existing service; it requires a configured gateway and cellular coverage. No fresh ETA or successful delivery is guaranteed offline.

## 7. File hygiene — original Phase 5 snapshot

The counts below describe the original checkpoint, not the expanded current prototype. The latest scoped S-06 check passed visible-layer containment in English at 360/320 px and Bangla at 320 px, including a 12 px label/value gap and all three actions. Temporary checks were removed. This is not a new whole-file, focus-navigation or browser-interaction audit.

- 17 top-level frames on `03 Screens`, all 360 (or 320/412 proof) × 800, all auto-layout.
- Text overflow: **0**. Text with "lorem / ipsum / placeholder / TODO": **0**. Unstyled text nodes: **0** after this pass (273 nodes styled).
- Foreign or duplicate frames: moved to `zz Archive · other drafts` (not deleted).
- Share link: anyone-with-link viewing was checked earlier. A fresh signed-out check of the final design and prototype remains required; do not treat a proposed check as completed.

## 8. Asset credits

| Asset | Recorded attribution and source | Evidence boundary |
| --- | --- | --- |
| Fonts | [Archivo](https://fonts.google.com/specimen/Archivo), [Inter](https://fonts.google.com/specimen/Inter), [Noto Sans Bengali](https://fonts.google.com/noto/specimen/Noto+Sans+Bengali); SIL Open Font License | Recorded font families, not a fresh font-file licence audit. |
| Imported icon components | [Lucide](https://lucide.dev/), [ISC licence](https://lucide.dev/license) | Existing inventory records 14 Lucide glyph components. Original/custom icons, if added later, require their creator/source recorded separately; this pass does not invent an icon author. |
| Original identity | GreenCommute wordmark and bus/leaf mark, drawn in-house (DL-07) | Original artwork, not a supplied client logo or a claim of organiser acceptance. |
| Geographic map | © OpenStreetMap contributors; [copyright and attribution](https://www.openstreetmap.org/copyright); OpenStreetMap data under ODbL | Coordinator-supplied provenance: four OpenStreetMap raster tiles around Board Bazar, zoom 15, x `24610`/`24611`, y `14137`/`14138`. Existing visible credit `159:1786` remains locale-bound to `VariableID:169:3324`; parent `159:1785` carries the copyright link. Real geographic data does not make the illustrative route or vehicle overlays real telemetry. Attribution does not establish an approved production tile provider or offline caching rights. |

The earlier schematic-only/no-third-party-imagery claim is superseded by the geographic route extension. Route overlays, bus positions, assignments, times and state text are illustrative, not OpenStreetMap telemetry. Production requires an approved provider, location source, freshness contract and offline caching rights; no live GPS, Maps SDK, dynamic pan/zoom, native OS or offline prefetch implementation is claimed. The four final route review PNGs listed in [../.impeccable/route-map.md](../.impeccable/route-map.md) are official Figma exports, not native Android captures or a refreshed submission package. No submission PNG/PDF build was performed in this pass. Additional original-icon credits and attribution retention in final submission exports remain with their owners.
