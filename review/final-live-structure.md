# Final Live Structure QA

## Verdict

**NOT a complete prototype sign-off.** The current live auth journey is disconnected and its primary controls are unwired. Original commuter/SOS screens passed the scoped current-mode containment and active-target checks. No Figma edits, mode changes, screenshots, images, browser operations, or delegation were performed. Images analysed: **0**.

File: `aWSZZboavo5bIt92qFQnsz`. Pages: `5:4` (03 Screens), `5:5` (04 Design System). Live reads: **11 Sep 2026, 22:02:40 to 22:08:58 Dhaka** (16:02:40 to 16:08:58 UTC). Other sessions are active; these are snapshot findings, not claims about later repairs. The supplied auth-wiring baseline was contradicted by live readback, including the last read at 22:08:58.

## Confirmed Findings

### P1: Auth is unreachable and its primary controls have no reactions

- Language Continue `30:674`, under start `30:642`, has ON_CLICK -> NAVIGATE `27:9` (Home), **not** auth `164:1944`. Confirmed twice, most recently 22:08:58.
- All five auth originals are unreachable from the two current starts: `164:1944` (A-01), `169:4037` (A-02 help), `169:4041` (A-03 credential chooser), `169:4045` (A-04 checking), `169:4049` (A-01e result).
- Twelve visible CTA instances have **zero stored reactions**: `169:3779` Sign in; `169:3781` Get help; `169:3379` Saved sign-in; `191:2126` Back to sign in; `191:2136` Fill ID; `191:2138` Fill password; `191:2140` Use saved; `191:2142` Use incorrect; `191:2144` Demo Cancel; `191:2154` Checking Cancel; `191:2175` Failure Retry; `191:2177` Failure Help. Their dimensions are 320/328 by 56/64px, so sizing is not the blocker.
- All descendants were inspected, not only root instances. Auth roots have no reactions; the only auth controls with reactions in the complete traversal are header Back and Language. There is no enclosing CTA reaction to supply the missing behavior.
- Each auth header Back instead navigates to Arrived Home `27:140`: `164:1953`, `191:2115`, `191:2129`, `191:2147`, `191:2157`. This also conflicts with labels such as returning to sign-in and chooser cancellation.
- Impact: judges cannot enter the claimed authentication flow from first launch, or complete its stated actions even if they open an auth frame directly.
- Required owner action: finish auth wiring and first-launch routing, then read back stored actions and replay the flow. Do not certify the supplied baseline without this check.

### P2: Five Auth Language controls contain duplicate identical click reactions

Affected nodes: `164:1956`, `191:2118`, `191:2132`, `191:2150`, `191:2160`. Each has two identical ON_CLICK conditional locale toggles. This is duplication of reaction entries, **not** double-counting the legacy `action` and modern `actions` representations. The duplicate entries were compared as complete serialized reactions.

Impact: redundant competing toggle handlers can undermine reliable language switching. Actual double-toggle behavior was not browser-tested. Keep one canonical conditional reaction per control and verify body-copy switching.

### P2: Key masters violate the requested 44px minimum width

System set `26:31`: default `26:27` and pressed `26:29` both measure **18 x 72px**. The key master is too narrow for direct reuse. Current original-screen interactive targets pass the 44px check, so this is a **system-master reuse defect**, not evidence that the current boarding keypad has 18px touch targets. Set a reusable minimum width while retaining screen fill sizing.

### P3: Typography and stroke-token coverage is incomplete

- Of 416 effectively visible original-screen text nodes, 23 lack a text style; 16 also have no fontFamily/fontStyle/fontSize variable binding. Of 54 system text nodes, 45 lack both a text style and those font bindings. Examples: auth labels `I169:3779;26:3`, `I169:3781;26:9`, `I169:3379;26:9`. Intentional underscore indicators `122:914` and `122:915` are counted but are not claimed as user-facing copy defects.
- The only sub-14px visible screen text found is two 13px labels: `29:368` and `29:471`, both "ON THE BUS DOOR". They are a small-text observation, not an automatic WCAG failure. All observed sizes otherwise occur in the file's text-style size inventory.
- 1,765 visible solid fill/stroke paints checked across originals and system: 1,218 bound paints, 547 literal strokes, **zero literal fills and zero missing bound-variable IDs**. Literal stroke examples are nested Lucide Glyph vectors, e.g. `I27:10;26:135;25:109` and `I27:10;26:148;26:109;25:82`. Do not treat these glyphs as separate buttons or assert their colors fail contrast. Tokenize at the icon master if time permits.
- Fonts seen: Archivo, Inter, Noto Sans Bengali on screens; Archivo and Inter in system. No unexpected family was found. Missing text styles are a maintenance issue, not proof of incorrect visual typography.

## Coverage And Counts

| Scope | Live result |
|---|---|
| Original journey frames | 29: 24 S- originals plus 5 A- originals |
| QA/responsive frames excluded from journey roots | 30: 16 reflow, 12 route proofs, 2 S-prefixed width proofs |
| Entire screen-page traversal | 4,537 descendants, including captions and proofs |
| Original-screen traversal | 1,779 nodes; 1,651 effectively visible; 416 visible texts |
| Active original-screen click/press/drag targets | 115; zero uncovered targets below 44 x 44px |
| Original stored reactions | 124, including hidden nodes |
| Generic nested action traversal | 1,203 action objects: 217 NODE, 251 CONDITIONAL, 668 SET_VARIABLE, 60 SET_VARIABLE_MODE, 6 BACK, 1 URL |
| Invalid visible journey destinations | 0 missing or non-top-level destinations |
| Unreachable originals | 5 auth frames listed above |
| Coincident sibling active controls | 0; five duplicate reaction entries separately reported |
| Current-mode text containment | 0 failures, checking immediate parent through root, 1px tolerance |
| System traversal | 314 nodes, 53 components, 7 component sets, 19 instances, 54 text nodes |
| System variant uniqueness | All seven sets have unique variant-property combinations |
| Local design inventory | 40 text styles; 377 variables; 17 literal color-token values |

Variant counts: Button `26:26` = 16; Key `26:31` = 2; SOS bar `26:46` = 2; Status block `26:89` = 4; Tile `26:107` = 2; Banner `26:133` = 2; Top bar `26:171` = 2. All 16 Button masters are 328 x 64px. Both SOS masters are 328 x 72px. Language master `26:108` is 122 x 56px. The 53 component total includes icon/brand and other standalone masters, not 53 interaction variants.

Original S-frame inventory: `27:9`, `27:140`, `27:229`, `27:322`, `29:342`, `29:445`, `29:551`, `29:588`, `29:646`, `30:511`, `30:534`, `30:592`, `30:642`, `30:677`, `30:771`, `121:891`, `138:1024`, `138:1049`, `138:1074`, `138:1099`, `138:1124`, `138:1149`, `138:1174`, `143:1702`.

## Confirmed Passes And Exclusions

- Exactly two starts: `30:642` and `29:646`; no QA starts.
- SOS root `30:511`: AFTER_TIMEOUT 5 -> NAVIGATE `138:1024`; Cancel `30:526`: BACK. Duplicate Cancel `119:1007` is hidden and was excluded from active-control and text-layout findings.
- Confirmation title `30:558` is 28px LEFT; acknowledgement `30:563` is 18px LEFT; disclosure `30:564` is 16px LEFT. No historical oversized/centered-header defect is repeated here.
- Four visible IMAGE paints exist in original screens. Raster map/image geometry was not treated as text or as a button. No images were downloaded or viewed.
- Map attribution URL on `159:1785` is `https://www.openstreetmap.org/copyright`. Destination exists syntactically; external network response was not checked.
- Raw black paint candidates on map text are **not color defects**: e.g. `159:1788` and `159:1765` bind `text/primary`, whose consumer resolution is the correct dark-green token value. Raw paint RGB alone is not reliable for bound colors.
- QA width proofs `31:640` and `31:662` appear in conditional return-action destinations. They exist top-level. This is not reported as a broken destination or an unreachable original; determining whether a proof-origin branch is feasible from a normal start requires stateful evaluation.
- Nested labels and icons are not independent touch-target failures when their visible interactive ancestor supplies the target. The noninteractive auth wordmark is not included in the twelve dead CTAs.

## Method And Limitations

Raw read-only breadth-first iteration of each page's children and all descendants; no selection or current-page writes. Effective visibility checks every ancestor's visible flag and zero opacity. Text bounding boxes were compared against every ancestor through their containing root; no map/image geometry or inter-frame presentation layout was scored as text overflow. This does not prove rendered glyph ink, text truncation, occlusion, or all locales fit.

Actions were traversed through generic nested arrays/objects, including all conditional branches, using `actions` or legacy `action` fallback, never both. This corrected the first pass's undercount (1,133 -> 1,203). Reachability is a conservative union of possible branch destinations, not symbolic execution: it can overstate feasible commuter paths. BACK history and variable-driven branch feasibility were not simulated. Missing auth ingress remains a genuine finding even under this generous graph.

No browser/runtime, anonymous sharing, font rasterization, contrast over raster assets, alternate-mode reflow, or export/PDF freshness certification. No broad Android compliance score is assigned to a Figma-only structural audit. The minimum target check used the user's explicit 44px threshold, not a claim of Android 48dp compliance. Duplicate-control detection covers duplicate reactions and coincident sibling active targets, not every possible semantically redundant noncoincident control.

Tool discovery limitation: `tool_search` was not exposed in this session, so it could not be called. Directly invoking the listed Figma guidance and use_figma tools succeeded. Required figma-use guidance was loaded before live use; prior agents' tool failures were not assumed to apply.

## Tool Evidence For Parent

Complete inventory JSON (valid, 17KB pretty-printed; larger than requested 15KB target):

`C:\Users\moham\AppData\Roaming\Code\User\workspaceStorage\5139837c80e780e1e507d98b2c75050d\GitHub.copilot-chat\chat-session-resources\dcfe08c9-e799-4586-84fd-8f8d6566bca3\call_hjyvrRyxeFhtBG1mZmRcy87y__vscode-1789141003317\content.json`

Complete compact evidence is also in this session's tool transcript: use_figma responses timestamped `2026-09-11T16:04:24.329Z` (geometry/system), `2026-09-11T16:05:28.002Z` (corrected action graph, raw auth duplicate, SOS/token readback), and `2026-09-11T16:08:58.678Z` (12 auth CTA counts, paint/typography summary, final Continue destination). These inline responses were not returned with separate resource-file paths. Session log location supplied by the host:

`C:\Users\moham\AppData\Roaming\Code\User\workspaceStorage\5139837c80e780e1e507d98b2c75050d\GitHub.copilot-chat\debug-logs\dcfe08c9-e799-4586-84fd-8f8d6566bca3`

**Do not use as complete JSON:** intermediate oversized detailed audit `call_qX9nZYvr8RXKRIfcqtncooJr__vscode-1789141003397\content.txt` in the same session-resource directory was truncated near 20KB; ConvertFrom-Json failed. Its detailed findings were not accepted on that basis. The final bounded read re-collected the necessary summary and exact CTA evidence successfully.

Parent next action: prioritize auth wiring/duplicate repair, verify current source again because other sessions are active, then run the parent-owned runtime and packaging gates. This reviewer changed only this report.