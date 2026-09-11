# GreenCommute - Developer Handoff

Mohammed Tayeb | AUST CSE Carnival 8.0 | 11 September 2026

[Design file](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz) | [Boarding prototype](https://www.figma.com/proto/aWSZZboavo5bIt92qFQnsz?page-id=5%3A4&node-id=30-642&starting-point-node-id=30%3A642&scaling=scale-down) | Redlines: Figma page 07.

## Purpose And Scope

For Gazipur workers: bus arrival, camera-free 10 Tk boarding and security contact. Constraints: low-end Android, dawn/rain and limited reading. Sample identities/times are illustrative; English defaults, Bangla remains reachable.

## Main Flows

- Entry: S-09 > A-01 sign-in > A-04 simulated check > S-01 on success; A-01e handles failure. A-02 help does not reset; A-03 is sample entry. S-07 > A-05 confirms sign-out.
- Board: S-01 > S-02 code/S-02b scan > S-03 > S-04. No per-boarding login. Wrong codes offer retry/assistance, not admission.
- SOS: Home/ticket/transit > S-05 five-second countdown > S-06. Cancel returns before sending; active cancellation requires confirmation and a timestamped update, not deletion. Hold/release is unimplemented.
- Other: Home > S-07 balance/S-08 route > return. Balance logout and unauthenticated emergency-contact guidance remain unverified; numbers unknown.

**Roles:** worker-only prototype; security is the proposed responder. DL-21 covers permission-scoped security/transport services and vehicle monitoring. Speeding deferral is ours; dashboard/groceries deferral is the client's. No staff UI or worker-phone tracking.

## Implementation Contract

**Authentication targets (DL-22):** company-issued ID/password; no signup, role picker, shared defaults or bus PIN login. Mask with Show/Hide; allow paste/autofill and optional OS-saved credentials. Keep signed in defaults off, personal phones only. Deny first/new-device offline login; bounded authorised cache needs approval. Empty/invalid/throttled/service failures deny access; wrong/nonexistent/disabled accounts share generic errors. Require server rate limits, TLS, salted hashes, protected storage and finite revocable sessions. HR verifies identity; strong short-lived, single-use setup/reset grants allow only password-setting, never reset by ID alone; passwords stay private from HR. Logout removes local access, discloses pending offline revocation, preserves payment ownership and blocks cross-account submission. Server auth, secure storage and native autofill are not implemented in Figma.

**Status:** show bus/stop/ETA/source time. Cache is dated, not live; replacements require dispatch. SMS needs cellular service. The three-minute stale threshold is proposed.

**Payment:** code identifies service, not presence, identity or payment. Authenticate; verify service/date/fare server-side. Typed/QR/retries share one transaction ID; no duplicate debits. Offline **Pending**; **Paid** only after server confirmation. Grace/payroll/manual admission need approval.

**SOS:** reuse alert ID with worker/bus/time/available location accuracy/age. **Sending / Not sent / Delivered / Acknowledged** need evidence; delivery is not acknowledgement/dispatch. Never wait for GPS or auto-alert drivers. Call/SMS need verified numbers/network. Figma sends nothing.

## Build And Validate

Reuse `GreenCommute tokens`, Archivo/Inter/Noto Sans Bengali and Button/Key/Status/Banner/SOS variants. Base 360 x 800; test 320/412/430 reflow, content, Back, keyboard, targets and focus. Redlines, accessibility evidence and exports supplement this note.

## Dependencies And Credits

Open U-1/U-2/U-7/U-10/U-15: ownership, typing, connectivity/providers, HR issuance/support/privacy/session/service approvals; top-up/grace; codes/dead phones; security staffing; ETA/capacity; assignments/returns. U-12: telemetry/thresholds/permissions/retention. Bangla needs review; audio is unimplemented. Fonts: SIL OFL; Lucide: ISC; original mark. GitHub Copilot assisted; entrant owns decisions. Full technical/localization notes remain in appendices.
