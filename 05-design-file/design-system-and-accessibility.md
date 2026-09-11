# GreenCommute — Phase 5 · Figma ecosystem, design system & accessibility

Phase 5 window 20:40–21:50 · This record separates historical script measurements, scoped layout checks and proposed implementation requirements. It is not proof of a complete browser replay or accessibility conformance. Figma: https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz/Carnival-8.0-%E2%80%94-UI-UX-Sprint · pages `03 Screens` (original baseline: 15 screens + 2 responsive proofs), `04 Design System` (tokens, styles, components, icons, mark), `06 Prototype` (flow notes).

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

Fill bindings on page 03: 197 frames bound to colour variables, 81 corner radii bound. Literal fills that remain are icon vectors and one-off geometry.

**Language collection:** `GreenCommute language` has English (default) and Bangla modes, independent of the Light colour theme. The latest language follow-up verified 153 copy variables with both translations across the current 26 top-level `S-` screen/proof frames, plus locale-font and selection-state bindings. Brand names, language names and bus/route identifiers intentionally retain their identity; interface wording, including map-attribution wording, follows the selected language. These are a later snapshot than the original Phase 5 counts elsewhere in this document.

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
| **Button** | Kind = Primary · Secondary · Muted · Danger × State = Default · Pressed · Disabled (12) | every CTA |
| **Status block** | State = Coming · Arrived · Full · Delayed | S-01 hero |
| **SOS bar** | State = Idle · Arming | S-01, S-04, S-05 |
| **Key** | State = Default · Pressed | S-02 keypad |
| **Top bar** | Kind = Home · Sub | all screens |
| **Tile** | Kind = Balance · Route | S-01 |
| **Banner** | Kind = Offline · Grace | S-01 Delayed, S-03 grace |
| **Language chip** | single — segmented `EN / বাংলা`, selected segment filled brand green with white label (fills bound to `toggle/en/bg`, `toggle/en/fg`, `toggle/bn/bg` and `toggle/bn/fg` in the language collection, so the mode switch moves the pill) | every top bar |
| **Icons** | 14 Lucide glyphs as components (`icon/arrow-left`, `check`, `bus`, `users`, `clock`, `wifi-off`, `bell`, `wallet`, `route`, `phone`, `camera`, `delete`…) | throughout |
| **Brand mark** | GreenCommute wordmark + bus/leaf tile, drawn in-house (DL-07) | top bars, S-09 |

## 4. Auto layout and responsiveness

Every screen is a vertical auto-layout frame; every container is FILL-width; the bottom zone is pinned by a FILL-height spacer. **Proof on canvas:** `S-01 Home · Coming @ 320 px` and `@ 412 px` are the same frame resized — nothing clips, wraps badly or overlaps (script check: 0 text nodes outside their container across all 17 frames). Desktop and tablet are deliberately out of scope: the user's device is a cheap Android phone (DL-06); the manager dashboard is future scope.

## 5. Prototype — boarding and SOS journeys

- **Flow 1 · Boarding & payment:** S-09 Language → A-01 Sign in → simulated successful check → Home → Arrived → four-digit entry or optional simulated scan → ticket → In transit. Saved-action checks cover all 80 digit/position combinations: `7319` succeeds, incorrect complete codes use the error path, and Backspace deletes to empty. The third invalid attempt opens driver assistance; its retry clears the active input and failure count. Torch toggles a visible bilingual demo state. Confirmed tickets are explicitly mocked; production offline payment remains Pending until server confirmation. No real charge, camera recognition or flashlight access is claimed. Full browser replay and authentication behavior remain separate verification gates.
- **Flow 2 · SOS:** Home, ticket or In transit → five-second demo countdown → Sending → Not sent or Delivered-demo → simulated acknowledgement. One countdown Cancel control returns to the invoking screen; the duplicate with an identical Back action is hidden. Later Cancel/Return actions preserve the recorded journey origin; contact Back and cancellation review preserve the previous delivery/acknowledgement state. Production requires release-to-cancel activation and confirmation before cancelling an active alert; this tap-plus-countdown prototype is not proof of a continuous hold gesture. No real alert is sent and no dispatch is implied.
- **Language selection:** either 320 × 88 option sets the language mode and shows exactly one checkmark plus a selected-language message. বাংলা changes the heading and Continue to Bangla; Continue retains that mode through the journey. Each header chip is a two-segment control with fixed positions `EN | বাংলা`; the selected segment is a filled brand-green pill with white text (7.95:1) and the other segment is plain text on a light track, so the current language is visible without reading. Tapping a segment sets that language directly (`SET_VARIABLE_MODE` per segment); the chip root keeps one conditional toggle as a fallback for taps on the 4 px track padding. Earlier the chip showed current/switch-to labels side by side (`EN / বাংলা` → `বাংলা / EN`), which users could not read as a state. Duplicate per-instance toggle reactions were removed in the follow-up repair.
- **Language source verification:** both picker actions and both header-toggle branches pass. The latest snapshot checks 41 current chip instances, including 21 on the 26 `S-` frames and the remainder on existing QA copies. No untranslated English interface wording, missing Bengali font binding or explicit source-language override was found. Brand/language names and identifiers are deliberate exceptions, not missing translations.
- **Language layout verification:** temporary picker, in-transit and SOS proofs pass ancestor-containment checks at 320 px in English and Bangla; Bangla at 360 px also passes. The SOS countdown heading now wraps at compact widths without losing its locale bindings. All three 320 px Bangla proofs were visually checked and then removed. This scoped follow-up does not claim a fresh full-layout audit of every concurrently added screen.
- **Language browser verification:** the current repair's full browser click-through remains unverified. The existing tab stayed hidden and the fresh tab opened at 0 x 0, preventing reliable input; earlier sessions also encountered a sign-in gate. In a foreground, nonzero-sized prototype, verify Bangla selection, Continue through A-01 and simulated successful sign-in to Home, and both header-toggle directions before submission. Source inspection and native rendering are not a substitute for that replay.
- Transitions: 200 ms dissolve, ease-out — state change only, no decoration.

**Current parent-supplied contract:** countdown `30:511` has `AFTER_TIMEOUT` of five seconds to Sending `138:1024`; Cancel `30:526` uses `BACK`; duplicate `119:1007` is hidden. Primary starts remain `30:642` and `29:646`. A-01 `164:1944`, A-02 help `169:4037`, A-03 demo credentials `169:4041`, A-04 checking `169:4045` and A-01e result `169:4049` exist; their handlers remain under another session's ownership. This documentation pass did not inspect Figma or certify their behavior.

**Authentication owner verification, 11 September 2026 (DL-22):** S-09 Continue now resets only auth demo state and enters A-01. Six A-series screens include sign-out confirmation `204:1681`; Balance exposes sign-out without a new navigation destination. Fifteen saved-action replay cases and five result-branch exclusivity cases passed; no negative result opens Home. Sign-out clears only auth variables, not route/payment/SOS state. New copy uses the existing English/Bangla collection and locale fonts; interaction state is isolated in `GreenCommute auth demo`. The original shared controls and concurrent segmented-language update are retained.

**Authentication accessibility scope:** 320 px visible-text checks passed in both languages for six auth screens plus Balance. English login and Bangla login/help/default error received native visual checks; hidden response variants, keyboard access, native autofill, TalkBack and real-device behavior are not certified. Missing-field feedback precedes inputs; 64 px primary and 56 px secondary actions remain outside the scrolling form. Sample-entry helpers simulate input only. The production contract requires password-manager/autofill/paste support, private password setup and approved recovery. The integrated browser remained hidden and failed to repaint reliably, so full login E2E remains NOT VERIFIED. Authentication screen notes contain node IDs and the complete evidence boundary.

**Fare boundary:** brief §4.3 FARE-1–5 governs the proposed payment contract. The daily 10 Tk fee does not establish rides remaining, return coverage or a service-day cutoff. Show confirmed Tk separately from pending amounts; 80 Tk must not be equated to eight rides. Back, reopening, switching typed/QR entry and retrying must preserve payment identity and must not create a new charge. Those continuity requirements are not established by the 80 digit-entry checks.

## 6. Accessibility — measured

**Contrast (WCAG AA: 4.5:1 body, 3:1 large text and UI; our own floor 7:1 for anything the worker must read at the stop).** Computed from resolved token values:

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
- Touch targets: CTAs 64 px, keys 72 px, shared SOS bar 72 px (ticket instances 56 px), tiles ≥ 84 px, ≥ 12 px between targets (tokens `size/*`, `space/3`). Language-chip master `26:108` and all 32 checked page-03 instances measure 122 × 56 px; none are below the 48 px Android minimum. The earlier 40 px redlines warning has been corrected.
- Original text floor: 15 px secondary body text and two 13 px keypad captions. Refined tickets use 64 px bus headings; S-06 uses 28/18/16 px title/status/disclosure roles rather than oversized display text. These refinements preserve existing text styles and locale-font bindings.
- State never by colour alone: each state = tint + icon + word + fixed position (Status block variants).
- Errors name the problem and the recovery: "Not this bus's code — try again"; third failure offers "Show this screen to the driver".
- Reading order = visual order = auto-layout order (top bar → hero → detail → tiles → CTA → SOS).
- One-handed: all primary actions in the bottom 40 %; nothing critical in the top corners.
- Language: English pre-selected with an equal-size, selectable বাংলা option; existing header chips switch both ways (DL-04). Text translation is functional; audio playback is not implemented in this prototype.
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
