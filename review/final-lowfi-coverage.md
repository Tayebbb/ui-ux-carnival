# Final Auth Low-fi Coverage

11 September 2026. Scope: Figma file `aWSZZboavo5bIt92qFQnsz`, page `5:3`, existing band F `169:3787` and one adjacent new auth board. No delegation, browser, build, source-screen, root, shared-master, variable or prototype-reaction edits.

## Outcome

**Five missing auth sketches added; six of six named auth source frames now have a dedicated low-fi reference, including the preserved A-01.** This closes the specific auth coverage gap reported in [final-supporting-repair.md](final-supporting-repair.md), not a fresh audit of every product screen or a prototype sign-off.

New export board: **`211:1815`**, page `5:3`, x840/y5059, **1160 x 1199**. [Open the auth wireframe board](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz?node-id=211-1815).

Exact visible label: **Late QA reconciliation · 11 Sep 2026**. The board explicitly says it was added after implementation, not historical Phase 3 work. Every new sketch displays its source ID and **US-7 / Authentication / DL-22**.

## Source Coverage

Live source content read once at `2026-09-11T16:23:11.123Z` (22:23 Dhaka). No external session had already added these five dedicated sketches: their only low-fi-page ID mentions were in F's inventory note. Result alternative text came from existing auth-copy variables at 22:24; source frames were not re-read or modified.

| State | Source | Low-fi | Actual content and controls |
| --- | --- | --- | --- |
| A-01 Worker sign in | `164:1944` | Existing `169:3790`, band F | Preserved existing 360 x 528 sign-in sketch; inspected its local conventions. |
| A-02 Help | `169:4037` | `211:1940` | HR identity-check guidance, urgent-help/contact limitation, no-reset disclosure; Back to sign in. |
| A-03 Demo chooser | `169:4041` | `211:1952` | Sample-only disclosure and GT2-04711; Fill worker ID, Fill sample password, Use saved demo account, Use incorrect password, Back to sign in. |
| A-04 Checking | `169:4045` | `211:1968` | Signing in, checking feedback, progress block, Nothing is sent disclosure; Back to sign in. |
| A-01e Result | `169:4049` | `211:2374` | Invalid, offline, service-error and throttled alternatives; no-account-access disclosure; shared Back to sign in and Get help signing in controls. |
| A-05 Sign out | `204:1681` | `211:2399` | Internet-needed and pending-payments ownership warning; Stay signed in and Sign out. |

Result alternative groups: Invalid `211:2380`, Offline `211:2383`, Service error `211:2387`, Throttled `211:2390`. The wider 736px result group is an explicitly labelled comparison of alternatives, not a claim that four errors appear simultaneously on a phone. Other new sketches are 360px wide. Each group includes the source language-control reference EN / Bangla; this is not a translated-wireframe implementation.

## Pattern And Scope

Reused the local F-band primitive pattern: white outlined frames, 0.92-gray control blocks, 0.12-gray text, Inter Regular, 16px body, 24px titles, 20px sketch insets and vertical auto-layout. Source content was reconstructed into rough groups, never cloned from hi-fi. No image assets, external components or new masters were introduced. Published low-fi button search returned no match; existing local primitives had no variable/style bindings.

Only existing F text `169:3805` changed, conditionally replacing its stale five-missing-sketch statement with the new board reference. Existing A-01 and other F notes were preserved. New board row roots: `211:1939` and `211:2373`.

## Verification

- First board-shell check: zero child escapes and zero neighboring overlaps.
- Immediately after first row: 120 ancestor-containment checks, zero failures.
- Final live check at `2026-09-11T16:26:20.061Z` (22:26 Dhaka): new board 77 nodes / 50 texts / 248 ancestor-containment checks, zero failures; edited F band 20 nodes / 13 texts / 38 checks, zero failures. Total final checks: **286, zero failures**, at 1px tolerance.
- Zero new-board intersections with neighboring top-level objects; zero non-gray paints; zero non-auto-layout frames; zero accidental reactions.
- All five source/story labels and all 11 action blocks verified. Four result alternatives verified as explicit content groups with shared recovery controls.
- One exported image inspected: all five groups readable, no observed clipping or incoherent overlap. **Images analysed: 1 of maximum 2.**

## Export

[wireframes-auth-states.png](../03-structure/wireframes-auth-states.png): PNG, **1160 x 1199**, **123,719 bytes**. Signature, dimensions and IEND verified after download. SHA-256: `2CF9C4FB9B2640D30BDBF7F8877D3FBAEE253F533096FCFE2BA4AB84C872C47D`.

Only this report and an additive appendix in [structure.md](../03-structure/structure.md) were written. No other documents, submission outputs or existing F-band exports were rebuilt. Static coverage does not certify authentication behavior, locale switching, reachability, native accessibility, production security or sponsor acceptance. Source content may change after the recorded concurrent-work snapshot.