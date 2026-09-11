# Route Map Extension

Target: Figma aWSZZboavo5bIt92qFQnsz, page 5:4, permanent Map S-08 30:677 and Stops S-08b 143:1702; related source: 04-screens/screen-notes.md.
Mode: Operate. Scope approved by the user's "implement it" following the Map/Stops recommendation.

## Direction contract

THESIS: Optional geographic context without putting map interpretation on the primary commute path. Home remains status-first; its existing Route entry opens My route / আমার রুট with Map/Stops modes.

OWN-WORLD: Inherit GreenCommute's white surfaces, dark green actions, Archivo/Inter hierarchy, Noto Sans Bengali locale bindings, Lucide icons and named spacing/color tokens. No new visual identity.

STORY: The worker sees the assigned bus relative to the boarding stop, reads the timestamp, switches to the familiar stop sequence, and returns to the same journey state. Offline positions are last-known, never described as exact or live.

FIRST VIEWPORT: Existing top bar; compact bus/arrival and freshness summary; a 48 px Map/Stops segmented control; a readable geographic map with distinct bus and boarding-stop markers; bottom return and SOS actions. Map and stop content fit 360x800 and reflow at 320/412 px in both locales.

FORM: Local extension of S-08, not a new visual-world selection. No concept seed applies. Preserve original screen IDs and unrelated prototype logic. Geographic base data must be attributed; bus positions, ETA and operator routing remain illustrative.

FINISH: Record the completed local implementation, independent four-fix verdict and raster provenance against the incumbent system. This ordinary extension does not require or authorize creating or changing PRODUCT.md, DESIGN.md or .impeccable/design.json. This pass writes only this brief, the S-08/S-08b screen notes and related accessibility/credit notes; all other records and Figma remain with their owners.

## Verification criteria

- Existing Route entries reach the map; Map/Stops works in both directions without resetting origin state.
- Fresh and offline/last-known presentations do not contradict the originating Home state.
- Original Back behavior and language bindings remain intact; SOS stays reachable.
- No text clipping at 320, 360 or 412 px in English/Bangla; meaningful touch targets are at least 48 px.
- The map is geographic, includes attribution when third-party data is used, and does not claim real telemetry.
- Preserve the incumbent design-system documentation and historical counts; update only the three authorized records. DL-23 and canonical brief/research/IA updates were completed by the coordinating session; decision, handoff and submission changes remain outside this pass.

## Completed implementation and incumbent comparison

Evidence: coordinating-session source/action checks and the official Figma exports below, not a new live Figma audit by this documentation pass.

- The existing header and status-first Home hierarchy are preserved. Route tile subtitles now read **View map** at `27:113`, `27:210`, `27:299`, `27:408`, `31:655` and `31:677`. Both route modes display **My route / আমার রুট**. Original screen IDs, variable defaults and English/Bangla collection `86:889` are preserved.
- Map viewport `147:1737` fills the screen width: 360 x 320 px on the 360 x 800 px source screen, retaining its 320 px height at 320/412 px widths. This is local route geometry, not a new application breakpoint system.
- Existing native Figma components, Lucide icons, named spacing/color tokens and Archivo/Inter/Noto Sans Bengali roles are reused. White `text/on-color` (`#FFFFFF`) on green `brand/primary` (`#0B5D3B`) retains the incumbent measured **7.95:1** contrast. The selected-label black literal fallback was repaired with resolved token RGB plus its alias; the incorrect fallback is not a new token. Base `fontName` may read Inter while the Bangla binding resolves Noto Sans Bengali; base metadata alone is not evidence of a font failure.
- Mode tabs and Back have 48 px targets; Home and persistent SOS have 56 px targets with a 12 px gap. These are scoped instance measurements, not changes to the recorded shared size tokens. Stops preserves **five named stops**, hiding stale static row times and the extra moving-bus row. The old count of six included that bus row; it was not a sixth stop. The contradictory static 8 min value is no longer shown against the Coming Home's 18 min.
- Both modes visibly disclose **Illustrative route & bus positions / রুট ও বাসের অবস্থান উদাহরণ**. All state text and overlay positions are illustrative; real geographic base data does not establish real vehicle telemetry.

## State and navigation snapshot

Origin variable `159:1737` and booleans `159:1738` through `159:1743` retain the originating context across both modes:

| Originating Home | Route summary | Freshness specimen |
|---|---|---|
| Coming | Bus 12, 18 min | Updated 06:12 |
| Arrived | Bus 12 is here | Updated 06:30 |
| Full / next bus | Bus 14, 12 min | Updated 06:30 |
| Offline | Last-known position, no fresh ETA | Last known 06:20 |

- Map-to-Stops `159:1783` and Stops-to-Map `164:2021` retain context; selected tabs `159:1781` and `164:2023` intentionally do nothing.
- Back/Home controls `159:1849`, `30:768`, `164:2034` and `143:1751` preserve the four originating Homes and the two existing Home width proofs. Each uses six independent single-branch conditionals. Multi-branch normalization retained only two branches, and nested conditionals were rejected; do not replace the confirmed saved-action structure with either form.
- SOS entries `159:1850` and `164:2027` go to existing countdown `30:511`, setting `safety/origin` (`122:911`) and `sos/origin` (`121:870`) to their respective route frame. `network/offline` (`121:1079`) aliases `map/context/offline` (`159:1741`). Existing Cancel uses `BACK`; shared SOS policies are unchanged. Saved actions were confirmed by the coordinator, not replayed in a browser by this pass.

## Provenance and production boundary

- Basemap: four OpenStreetMap raster tiles, zoom 15, x `24610`/`24611` and y `14137`/`14138`, around Board Bazar. The geographic data is real; route, stop assignment, bus overlays, times and state values are illustrative.
- Mandatory credit: **© OpenStreetMap contributors**, localized in Bangla, with https://www.openstreetmap.org/copyright. OpenStreetMap data attribution is under ODbL; it does not establish tile-service permission or offline caching rights. Production still requires an approved provider, location source, freshness contract and offline caching rights.
- No live GPS, Maps SDK, dynamic pan/zoom, native OS integration or offline prefetch implementation is delivered. The offline view is a last-known specimen, not proof of a functioning cache.
- Final visual authority: `.impeccable/review/route-map-en-360.png`, `.impeccable/review/route-stops-en-360.png`, `.impeccable/review/route-map-bn-320-offline.png` and `.impeccable/review/route-stops-bn-320-offline.png`. These are official Figma exports, **not native Android runtime captures**. This pass sampled the English Map and Bangla 320 px offline Stops exports (2 images); the parent checked all four.

## Scoped verification and verdict

- Parent-reported layout proof: 12 temporary Map/Stops x 320/360/412 px x English/Bangla offline-wording proofs passed **192 visible TEXT containment checks**. This does not certify every state, text measurement or frame in the whole file. The coordinator will remove those 12 temporary proofs after documentation; removal is not claimed here.
- Independent finish reviewer: **SHIP, four-fix scope only**. Complete bus marker, selected-label contrast, untruncated Bangla title and inclusive illustrative-route disclosure are resolved. This is not whole-app approval, a new design-system decision or a user-outcome study.
- Browser delegate lacked browser tools: **no runtime pass**. The coordinating session owns the shared browser. Figma rendering and source checks do not verify native Android behavior, platform guidance or accessibility semantics. No submission PNG/PDF build was performed; review exports are not a refreshed submission package.
- Not canonized or repaired: historical counts and pre-existing broad whole-file layout/accessibility claims outside the affected notes remain untouched because there is no fresh whole-app audit or authority to repair those records. No new system rules are inferred from local defects, illustrative content or the map's dimensions.
