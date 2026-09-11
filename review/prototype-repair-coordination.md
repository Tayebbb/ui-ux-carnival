# Prototype Repair Coordination

## Browser Repair Continuation: 11 September, 22:38 Dhaka

Session `5a6a3e07-7df6-4dd8-97b6-21e2ed938cab` continued the user's end-to-end repair request. This section supersedes the older browser-blocked and two-flow-start snapshots below, without replacing other sessions' work. Figma file `aWSZZboavo5bIt92qFQnsz`, page `5:4`.

### Repairs Applied And Retested

- Restored Home `27:9` to `AFTER_TIMEOUT: 4`. The earlier conversion to `4000` stalled the journey; the runtime uses seconds. Coming now advances to Arrived.
- Assistance Retry `121:912` and Back `121:914` / `I121:892;26:157` clear the active boarding length `VariableID:121:1074` and digits `121:1075...1078`, alongside the existing failure reset. Old `input/digit-*` resets alone were insufficient.
- Wrong-code keys `29:517`, `29:519`, `29:521`, `29:524`, `29:526`, `29:528`, `29:531`, `29:533`, `29:535`, `29:539` now accept a fresh first digit when all four rejected slots are full, preserve the failure count, and return to `29:342`. Previously every digit was inert in that state.
- Code/error Back `I29:343;26:157`, `I29:446;26:157` and both assistance Back controls now choose Offline Home `27:322` when `network/offline` is true; otherwise Arrived `27:140`. Cached-code Back previously showed a false online/arrived state.
- SOS returns `138:1047`, `138:1073`, `138:1147` now handle Map `30:677`, Stops `143:1702`, and proofs `31:640` / `31:662` in addition to the existing eight origins. Proof SOS entries `31:660` / `31:682` record their origins and online context. All 36 return combinations passed saved-action checks.
- Wrong-code Key 3 `29:415` was permanently set to the Pressed variant. Restored Default while retaining digit 3 and its reaction.
- Password chooser action moved from the 25 px-high text region `169:3366` to its 320 x 64 field `169:3365`. The separate Show/Hide control `169:3369` remains independent. A padding-area tap and Show/Hide both passed in the browser.
- Sign-out Stay `204:1705` and header Back `204:1710` now use `BACK`. Navigating to Balance had created a loop: dismiss sign-out, then Balance Back reopened the confirmation. Both corrected paths now return to Home; confirmed sign-out clears the sample credentials.
- Shared EN segment `211:2181` now has minimum width 48 px instead of 45 px. All 27 live instances passed size and containment checks; the concurrent segmented language design was preserved.
- SOS retry label `VariableID:160:1825` now explicitly says `Online retry · demo`, with its Bangla translation. Its existing action restores simulated connectivity; the label no longer implies an ordinary retry can restore real service.
- Added starts for existing Full Home `27:229` and Offline Home `27:322`. Preserved first launch `30:642` and SOS `29:646`. All four entries were read back and validated.

The other coordinator's fourth-digit failure counting, scanner torch, current safety copy, acknowledgement preservation, auth flow, maps and layout repairs were retained. The latest keypad increments failures on an invalid fourth-digit submission, not an error-screen timer; the older timer description below is historical. A temporary Board dissolve experiment was removed after the stalled rendering was traced to the browser environment.

### Verification Evidence

| Surface | Result | Evidence |
| --- | --- | --- |
| Current structural gate | PASS | 32 S/A screens, 197 interactive nodes, 454 visible text layers, 152 icon/mark candidates. Zero detected unwired candidate controls, invalid destinations, targets below 48 px, empty icons, or current-mode text-containment failures. |
| Keypad logic | PASS | 80 digit-position cases and 10 deletion cases exercised against saved actions. The repaired full-code replacement passed all 10 digits. These are action-model checks, not 100 browser tests. |
| Boarding browser journeys | PASS | Every digit 0-9 clicked; valid 7319 reaches the paid demo ticket and transit. Rejected attempts, Start again, replacement input, deletion/correction, third-failure assistance, assistance Retry and Back exercised. |
| Scanner browser journeys | PASS | Torch On/Off, simulated scan to paid ticket, Type instead and header Back. Online and offline scanner-to-code-to-Home returns preserve their contexts. |
| Offline payment | PASS | Offline Home to cached 7319 to Pending, Check payment status, still-offline state and Return to offline status. Pending remains explicitly not paid and approval-dependent. |
| Balance and route | PASS | Balance Back and Map to Stops to Map to Back from Arrived, Full, Offline, 320 px and 412 px Home states: ten browser checks. |
| SOS cancellation | PASS | Countdown cancellation exercised from all 12 current origins across the browser batches. Map to Sending to Cancel also returned to Map. |
| SOS recovery | PASS | Offline Not sent, explicit simulated online retry to Delivered, simulated signal loss while Sending, Return to Transit, security-contact exits, Delivered versus Acknowledged, Keep active, Confirm cancellation, review of the prior delivery state, and return to the pending-payment origin. |
| Sign-in and sign-out | PASS | Empty and partial input validation, both sample-fill actions, saved and incorrect credentials, Show/Hide, Remember exercised twice, help and chooser exits, Checking cancellation, successful demo sign-in, both sign-out dismissals and confirmed sign-out. No real credentials used. |
| Languages | PASS, bounded | Bangla first launch through sample sign-in, Home, boarding, ticket, transit and SOS cancellation; English restored from its segment. Bangla sign-in canvas visually inspected. Not an all-screen native-language or assistive-technology certification. |
| Local report | PASS | No editor diagnostics in this file. This results section is the only workspace deliverable changed by this continuation. No PDF/PNG build or submission action. |

### Environment And Limits

- Browser tab `35f8118a-1a0a-41a9-b434-b5a8d82860e1` was the QA driver. VS Code can report a focused tab while `document.visibilityState` is hidden. In each affected Playwright batch, a page-scoped CDP session with `Emulation.setFocusEmulationEnabled` restored normal rendering. Do not treat those earlier stalled redraws as remaining navigation bugs.
- After variable updates, Figma's accessibility tree sometimes exposes only changed text while the canvas still shows the complete screen. Cache DOM-derived control positions before typing; assert resulting screens. Screenshots distinguished this from missing components. Later resource/font/WebGL errors were environmental and recovered on the loaded tab.
- Multi-agent work was read-only: the E2E reviewer supplied the journey matrix, the TDD reviewer supplied keypad edge cases, and the graph reviewer identified recovery/history risks. Delegates lacked live browser/Figma tool discovery; the parent performed live inspection, edits and replay. No delegate runtime pass is claimed.
- Snapshot only: other sessions continued changing the file. Full keyboard/screen-reader access, anonymous link access, every control in every locale/device combination, real camera/torch, real authentication, payment settlement/idempotency, calls, SMS, location delivery and native press-and-hold remain outside this verification. Camera, payments, connectivity and safety delivery are disclosed simulations.
- Three browser images were inspected in this continuation. Earlier-session image totals were not reset or reused as new evidence. No exports, submission package, root handoff, external sharing settings or other user tabs were changed.

## Earlier Coordinator Snapshot

Updated: 11 September 2026, after the 21:55 Dhaka integration check. Coordinator session: `0621ed9b-af03-4609-a224-d92bb5a4ed0d`.

User authorization: fix the remaining clickable-prototype issues in parallel with other sessions. This supersedes the earlier read-only audit choice. Preserve concurrent work and re-read the owning nodes immediately before edits.

Figma file: `aWSZZboavo5bIt92qFQnsz`. Prototype page: `5:4`. Original submission start: `30:642`.

## Ownership

| Workstream | Owner | Allowed Changes | Status |
| --- | --- | --- | --- |
| Boarding and scanner | Coordinator; delegate lacked Figma tools | Input/error handlers on `29:342` and `29:445`; scanner `30:771`; existing assistance `121:891`; their narrowly related state variables | Repaired; saved-action tests pass |
| Safety navigation | Coordinator; delegate lacked Figma tools | Countdown `30:511`; cancel/return reactions in the current `138:*` safety states; preserve current delivery distinctions and five-second simulated countdown | Repaired; saved-action tests pass |
| Navigation and reachability | Coordinator | Balance Back, proof Balance tiles, final flow-start entries, stale unreferenced prototype outcomes after delegate completion | Integrated; existing navigation fixes preserved |
| Route/map | Existing route session | Preserve its map assets, tab state, labels, and route-origin variable `VariableID:159:1737`; coordinator will only repair Back/return handlers if still failing | External work active |
| SOS typography | Existing layout session | Header `30:557` and its text/icon alignment; already observed fixed at 21:28 | Preserve |
| Final integration and notes | Coordinator | Combined interaction checks, honest prototype documentation, handoff and submission links | Structural and saved-action gates pass; browser gate incomplete |
| Judge-gap copy pass | Judge-review session `a5064d3d-177e-4ebb-bd6d-af51bde231da` | Home departure and Balance policy copy only; no navigation, route, shared header or payment-state changes | Completed; ownership released |
| Discovery and low-fi reconciliation | Judge-review session and documentation delegate | Phase 1/2 summary and acceptance tables; Phase 3 coverage map; page 02 sign-in low-fi reference only | Completed; ownership released |

The latest user instruction to the judge-review session is to leave handoff work alone and use a user-specified 12/15 handoff allowance in any planning score. That is not verified rubric credit. This session does not own Phase 6, exports, submission builds or another session's interaction repairs.

## Shared Boundaries

- Delegates do not edit this file, the root handoff, shared documentation, global component masters, other pages, or flow-start lists. Return exact changes and verification results to the coordinator.
- No delegate browser automation or screenshots: the shared browser is contested, and the coordinator retains the image budget and runtime validation.
- Keep every prototype destination as a top-level frame. Use the existing local components, styles, language collection and state fields; avoid replacement screen trees or duplicate state collections.
- Read current values before changing them. Do not revert newer work. Immediately validate each substantive edit with a focused behavior check.
- Preserve English as the default and Bangla text/font bindings. Prototype payments, network, camera, calls and SOS delivery are simulations, not live services.

## Verification Gate

Every visible control must have an effective interaction; every advertised scenario must have an entry and recovery route. Check all digit positions, correct and incorrect codes, deletion, three-failure assistance, scanner/torch state, origin-preserving Back/Cancel, bilingual text, valid destinations, layout containment, and the final prototype entry link. Report PASS, FAIL and NOT VERIFIED separately.

## Integration Results

### 11 September 2026 - Parent Session Counter Repair

- Session `16f68e61` repaired all 20 digit handlers across boarding `29:342` and wrong-code `29:445`: invalid fourth-digit submission increments `input/failures` before navigation, with a flat third-failure conditional. The wrong-frame 0.1-second timer was removed, superseding the entry-timer counter repair recorded below.
- **Post-fix browser PASS:** CDP focus emulation and a 1001 x 901 viewport resolved the integrated-browser blocker to a visible, full-size frame. Page `2e86568d-4f96-473d-b24f-9bc86924ab2c` loaded after the atomic fix. Real canvas pointer input sent the first two `0000` failures to wrong-code retry, then the third to help `121:891` ("No fare has been taken"). "Try the code again" returned to `29:342` with four underscores; `738`, Backspace, `19` reached paid `29:551` ("CONFIRMED DEMO", "Paid 10 Tk" mock receipt).
- **Saved-action PASS:** 30,000 cases, zero failures. This remains complementary interpreter evidence, not browser runtime; offline remains saved-action tested only.

This closes the requested-flow browser blocker recorded below. Other workstream statuses and ownership are unchanged; no global readiness or frozen-submission sign-off is implied.

### Verified Repairs

- Both delegated repair sessions stopped without changes because their tool sets lacked Figma discovery. The coordinator implemented the owned repairs directly; separate Route, typography, copy and research changes were preserved.
- Countdown Cancel controls `30:526` and `119:1007` now use `BACK`. All 11 current entry links use `NAVIGATE`, preserving the originating screen in history.
- Sending Cancel `138:1047`, Not-sent Return `138:1073`, and cancellation-result Return `138:1147` now use independent top-level checks for all eight current `safety/origin` values. All 24 origin cases pass. Contact previous-screen action `138:1173` uses `BACK`.
- Cancellation review preserves acknowledgement: `30:589` records delivered, `138:1098` records acknowledged in `safety/review-status` (`VariableID:169:3557`); `138:1148` restores `30:534` or `138:1074` accordingly. Both cases pass.
- Scanner Torch `30:804` toggles existing Boolean `VariableID:122:912` and visible label `VariableID:122:913`. Two taps produce On then Off with bilingual labels. This is a simulated control, not device flashlight access.
- Invalid-code screen `29:445` increments `input/failures` (`VariableID:121:869`) on entry and sends the third failure to existing assistance `121:891`. Ordinary Start again retains the failure count. Fresh Board `27:219` and assistance retry/back `121:912`, `121:914`, `I121:892;26:157` reset the counter and active `boarding/length` plus `boarding/digit-1...4`, not the obsolete `input/digit-*` fields.
- Combined saved-action evaluation: 80/80 digit-position cases passed, both backspace sequences were `4,3,2,1,0,0`, failures one/two stayed on the error path and failure three reached assistance; assistance reset passed.
- Unreferenced outcomes `121:916`, `121:940`, `121:1063` were moved to Archive, not deleted. QA frames were preserved. Removed inherited QA flow starts; only original entries `30:642` and `29:646` remain. The SOS flow is named as a demo countdown, not a verified two-second hold.
- Combined structural snapshot before draft archiving: 114 visible controls, zero dead controls, zero invalid destinations, zero current-mode text containment failures. Full, Delayed, Stops, proofs and assistance were reachable; the only unreachable S-frames were the three subsequently archived drafts.
- Final 21:55 Dhaka graph after archiving: **26 screens, 105 visible controls, zero dead controls, zero invalid destinations, zero unreachable S-frames and zero current-mode text containment failures**. Exactly two original flow starts remain. Scanner and assistance native previews were checked; the assistance header was shortened to Driver help / চালকের সাহায্য to remove its visible truncation.

### Remaining Verification

### Judge-Gap Pass Results

- Preserved recovery/safety low-fi bands D `169:3383` and E `169:3561`; did not duplicate them. Added late-reconciliation sign-in band F `169:3787` on page `5:3`, mapped to live A-01 `164:1944`. Thirteen text nodes and one mapped wireframe passed containment checks; screenshot reviewed. No live auth edits.
- Added a 379-word discovery summary and proposed daily-fare/re-entry conditions in Phase 1; added explicitly unverified comprehension/device/connectivity falsification scenarios in Phase 2. Phase 3 now maps current low-fi coverage and records prototype-countdown precedence without backdating the work.
- Updated bilingual Balance variables `VariableID:100:951`, `VariableID:100:957`, `VariableID:100:960`: daily fare wording, neutral credit-history wording, and no unapproved payroll/grace promise. English values and containment passed; Balance screenshot reviewed.
- Home ETA changed concurrently to 18 minutes. Preserved that change and reconciled `VariableID:100:883` to **Leave now · 12 min walk**, with Bangla counterpart. The earlier temporary insufficient-time warning is not the final value. Guarded comparison and final containment passed; the six-minute illustrative margin is not proof of live ETA computation.
- Language chip was already 56 px; skipped. Back was still 48 px in the inspected snapshot and was not changed because navigation/header work is active elsewhere.
- Bangla values exist, but the isolated Bangla layout attempt was unsupported. Temporary proof `169:3901` was removed and removal verified; original Home/Balance locale overrides remain empty and sizes remain 360 x 800. Native Bangla review and full mode playback are not newly certified.
- Handoff, redlines, exports, PDF builds and other sessions' handlers were not edited. Home/Balance exports and the new low-fi band need inclusion in the eventual frozen build. Historical scores remain unchanged; no final integrated sign-off is implied.

### Coordinator Browser Limits

Judge-gap follow-up: removed the remaining ride-entitlement display after the provisional reassessment. `30:616` now shows `80`; `VariableID:100:950` says Tk confirmed / টাকা নিশ্চিত; `VariableID:100:879` says 80 Tk / 80 টাকা; `VariableID:100:952` says Recent payments / সাম্প্রতিক লেনদেন. Existing payment state/ledger is untouched. FR-5 and US-5 now use confirmed Tk and approval-dependent warning thresholds. Read-back and containment passed for all four affected display nodes. The coordinator's concurrently revised Phase 3 currency/countdown text was preserved rather than overwritten. Refresh the current Home/Balance exports when the final owner freezes the design.

Other sessions are still editing. This is not a frozen submission sign-off. Browser replay was interrupted by another session restarting the shared tab. In the separate tab, four zeros navigated to the wrong-code URL, but rendered content remained on the preceding screen; the replay timed out locating Start again and did not complete the three-failure journey. Anonymous access, real pointer hold timing, and a complete bilingual browser replay are not certified by the saved-action tests. No final PDF or PNG exports were regenerated by this coordinator.

API lessons from this repair: the server rejected nested conditional actions; multi-branch lists did not retain all cases. Independent top-level conditionals with one condition and an empty else passed read-back and semantic evaluation. Always validate the stored actions, not only the write response.
