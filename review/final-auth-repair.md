# Final Auth Repair

## Verdict And Scope

**Core auth routes pass saved-action symbolic verification. Browser/runtime and visual sign-off remain with the parent. Service-error branches are structurally present and pass seeded-state checks, but do not have visible selectors in the existing credential chooser.**

- File: `aWSZZboavo5bIt92qFQnsz`; page: `5:4`.
- Live inspection and repair: 11 September 2026, approximately 22:12:58-22:18:10 Dhaka. Final saved-action snapshot: `2026-09-11T16:18:10.112Z`.
- Owned roots: `164:1944` A-01 Worker sign in; `169:4037` A-02 Sign-in help; `169:4041` A-03 Demo credential chooser; `169:4045` A-04 Checking sign-in; `169:4049` A-01e Sign-in result.
- Ingress ownership only: `30:674` CTA / Continue, beneath language screen `30:642`.
- Read the exact defects in `review/final-live-structure.md` and the DL-22 contract in `DECISIONS.md` before changes.
- **Images analysed: 0. Browser tabs used: 0. Delegation: none.** No exports, other documentation, other-page edits, master edits, layout changes, font changes or copy changes.

## Actual Changes

Another session had wired the formerly disconnected controls during inspection. Those actions and existing variables were preserved, not rebuilt or overwritten.

| Node | Name | This agent's edit | Final saved readback |
| --- | --- | --- | --- |
| `169:4045` | A-04 Checking sign-in | AFTER_TIMEOUT `900` -> `0.9` seconds; existing actions preserved | `0.8999999761581421` seconds, ordinary float serialization |
| `169:4049` | A-01e Sign-in result | AFTER_TIMEOUT `60000` -> `60` seconds; existing conditional throttle-release actions preserved | `60` seconds |

The seconds interpretation follows the coordinator's previously runtime-verified Figma timeout convention. This agent verified persistence, not elapsed wall-clock behavior. The result timer only releases the existing simulated throttled outcome back to sign-in; it does not grant access.

Five formerly duplicated language controls already had one handler each: `164:1956`, `191:2118`, `191:2132`, `191:2150`, `191:2160`, all named Auth Language. Exact-duplicate removal was conditional and made no changes because none remained.

## Final Routes And Controls

| IDs and exact names | Saved behavior / evidence |
| --- | --- |
| `30:674` CTA / Continue | Clears auth input/session flags and enters `164:1944`, not Home. Existing `state/locale` is preserved. English and Bangla successful demo paths both passed. |
| `169:3359` Worker ID input; `169:3366` Password text; `169:3379` Auth Saved sign-in | Existing clickable field/saved-entry affordances open the credential chooser `169:4041`; all have one saved click handler. These are dummy-value controls, not editable native credential inputs. |
| `191:2136` Demo Fill ID | Fills sample `GT2-04711`, sets has-ID, leaves password absent, returns `164:1944`. No access with this field alone. |
| `191:2138` Demo Fill password | Fills the existing dummy password state, sets has-password and credential-valid, returns `164:1944`. No access without ID. |
| `191:2140` Demo Use saved | Fills both sample fields and sets credential-valid true; returns `164:1944`, not Home. |
| `191:2142` Demo Use incorrect | Fills both sample fields but sets credential-valid false; returns `164:1944`. Checking produces the shared invalid-result state. |
| `169:3779` Auth Sign in | Empty/partial input remains signed out with the existing empty error. Both fields proceed to `169:4045`. |
| `169:4045` A-04 Checking sign-in | Only outcome `success` AND has-ID AND has-password AND credential-valid reaches `27:9` and sets signed-in true. All tested nonvalid combinations fail to reach Home. Password state is cleared on successful and failed checking. |
| `169:4049` A-01e Sign-in result | Existing result-invalid/offline/service/throttle flags select failure content; seeded service failures never grant access. |
| `191:2175` Failure Retry | Returns to `164:1944`; clears password, retains worker ID, remains signed out for invalid/offline/service/throttled scenarios. |
| `169:3781` Auth Get help; `191:2177` Failure Help | Existing help path targets `169:4037`; failure help clears password, preserves ID and remains signed out. |
| `191:2126` Help Back to sign in | Returns `164:1944`, without simulated account reset or authentication. |
| `164:1953` Auth Back | Returns to language `30:642`; no Home bypass. |
| `191:2115`, `191:2129`, `191:2147`, `191:2157` Auth Back | Return to `164:1944`; none target `27:9` or Arrived Home `27:140`. |
| `191:2144` Demo Cancel; `191:2154` Checking Cancel | Return to `164:1944`, remaining signed out. |
| `169:3369` Auth Show password | Two toggles reveal then remask; existing dummy password value is unchanged. |
| `169:3371` Auth Remember | Starts false; first toggle true, second false. This is only a simulated personal-device preference, not persistence. |

All twelve CTAs called unwired in the earlier report now have one saved ON_CLICK handler: `169:3779`, `169:3781`, `169:3379`, `191:2126`, `191:2136`, `191:2138`, `191:2140`, `191:2142`, `191:2144`, `191:2154`, `191:2175`, `191:2177`.

Canonical language action readback from `164:1956`: ON_CLICK -> if `VariableID:86:890` equals `en`, SET_VARIABLE_MODE on `VariableCollectionId:86:889` to `86:3`; otherwise to `86:2`. The native action field is `variableModeId`, not `modeId`. Five single-handler counts were verified; full runtime body-copy switching was not replayed here.

## Existing State Reused

No variables or bindings were created or changed by this agent. Existing auth state collection is `VariableCollectionId:169:3340`, mode `169:0`.

| Exact variable ID | Name | Default |
| --- | --- | --- |
| `VariableID:169:3341` | `auth/worker-id` | empty string |
| `VariableID:169:3342` | `auth/password-display` | empty string |
| `VariableID:169:3343` | `auth/has-id` | false |
| `VariableID:169:3344` | `auth/has-password` | false |
| `VariableID:169:3345` | `auth/id-empty` | true |
| `VariableID:169:3346` | `auth/password-empty` | true |
| `VariableID:169:3347` | `auth/revealed` | false |
| `VariableID:169:3348` | `auth/remember` | false |
| `VariableID:169:3349` | `auth/signed-in` | false |
| `VariableID:169:3350` | `auth/outcome` | `success` |
| `VariableID:169:3351` | `auth/empty-error` | false |
| `VariableID:191:2108` | `auth/credential-valid` | false |
| `VariableID:191:2109` | `auth/sample-plaintext` | `rainy morning demo`, deliberately public dummy text |
| `VariableID:191:2110` | `auth/result-invalid` | true |
| `VariableID:191:2111` | `auth/result-offline` | false |
| `VariableID:191:2112` | `auth/result-service` | false |
| `VariableID:191:2113` | `auth/result-throttle` | false |
| `VariableID:195:2604` | `auth/masked` | true |

Locale remains in `VariableCollectionId:86:889`: `VariableID:86:890` / `state/locale`; English `86:2`, Bangla `86:3`. Auth body-copy variables and locale/font bindings were preserved.

## Test Evidence

**67 assertions passed across three bounded saved-action evaluations. These are symbolic checks, not 67 browser journeys or usability tests.**

1. Immediately after the first edit, the next tool action read back saved timers and evaluated **19/19** checks at `16:15:41.116Z`: empty submission; valid saved demo in English and Bangla; incorrect demo; ID-only and password-only submission; seeded offline/service/throttled failure; eight Back/cancel controls; Show/Hide round trip; Remember round trip.
2. Final live **40/40** guard matrix at `16:18:10.112Z`: five outcomes (`success`, `invalid`, `offline`, `service`, `throttled`) x has-ID true/false x has-password true/false x credential-valid true/false. Only the complete valid-success combination reaches `27:9`. Every case begins signed out. Inconsistent or tampered prototype state outside these inputs is not a production security guarantee.
3. Final live **8/8** recovery checks: invalid/offline/service/throttled x Retry/Help. Retry reaches `164:1944`, Help reaches `169:4037`; worker ID retained, password cleared, signed-in remains false.

Successful saved demo path: `30:674` -> `164:1944` -> `169:3379` -> `169:4041` -> `191:2140` -> `164:1944` -> `169:3779` -> `169:4045` -> `27:9`.

Incorrect saved demo path: the same sequence using `191:2142` instead of `191:2140` -> checking -> `169:4049`; result-invalid true, signed-in false, password absent. Retry then returns to sign-in, not Home.

The initial oversized snapshot was hard-truncated and was excluded from test evidence. A subsequent complete compact snapshot was parseable. An expanded evaluator attempt failed on locale-mode serialization; a local retry was interrupted. Neither was counted as a pass. The final bounded live auth-only evaluation succeeded independently. `tool_search` was unavailable; the user-authorized exposed Figma tools worked, and figma-use guidance was loaded before live use.

## Remaining Gates

- **Visible service-scenario entry remains absent.** Current chooser has only Fill ID, Fill password, Use saved and Use incorrect. All four retain `auth/outcome=success` from a fresh default. Offline/service/throttled checks explicitly seed the existing `auth/outcome` variable; they do not prove a click-accessible service selector. No new selector/copy/layout was added over concurrently completed work. Do not claim complete interactive service-demo coverage.
- Parent must perform runtime replay in its own tabs, including checking delay, throttle release, cancellation while checking, language/body-copy switching, password masking, focus and mobile layout. No shared browser tabs were accessed.
- Generic invalid-state branching was verified; no real credential lookup, account-enumeration testing, identity verification, login service, native autofill, session persistence, secure storage, HR reset or operational emergency contact exists here. The supplied sample values are not credentials.
- This is a snapshot while other sessions are active. No whole-prototype, export, anonymous-sharing, Android accessibility or submission sign-off is implied. The independent SOS start and all other pages/masters were outside this agent's edits.