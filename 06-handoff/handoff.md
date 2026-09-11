# GreenCommute - Developer Handoff

Mohammed Tayeb | AUST CSE Carnival 8.0 | 11 September 2026

[Design file](https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz) | [Boarding prototype](https://www.figma.com/proto/aWSZZboavo5bIt92qFQnsz?page-id=5%3A4&node-id=30-642&starting-point-node-id=30%3A642&scaling=scale-down) | Redlines: Figma page 07.

## Purpose And Scope

For Gazipur workers: status, daily 10 Tk fare and SOS; low-end Android, rain/dawn, limited reading. English defaults; Bangla remains accessible. Sample identities/positions are illustrative.

## Main Flows

- Four demo starts: Language/boarding `30:642`, Transit/SOS `29:646`, Full `27:229`, Offline `27:322`.
- Auth: S-09 > A-01 > A-04 > Home only on valid sample success; A-01e failure, A-02 help, A-03 fixed chooser. Six A-frames are top-level, not overlays/native auth. A-05 Stay/header use BACK; confirm clears auth only.
- Boarding: code/scan > ticket > explicit Transit CTA; paid has no root timer. No per-boarding login. Invalid fourth-digit submissions count; third failure opens assistance, not admission. Replacement input, deletion and offline Back are retained.
- SOS: five-second countdown, explicit Cancel; Sending 1.5 seconds. Online retry is a network demo; no hold/call/GPS/SMS. Map/Stops and Balance return to their origins.

**Roles:** worker-only UI; security is the proposed receiver. DL-21 proposes permission-scoped transport/vehicle monitoring. Dashboard/groceries are client-deferred; speeding designer-deferred. No staff UI or worker-phone tracking.

## Implementation Contract

**Auth (DL-22):** company-issued ID/password, Show/Hide, paste/autofill/OS-saved credentials; opt-in personal-device sessions. No signup, role picker, shared defaults or bus-code login. Deny first/new-device offline access and empty/invalid/service/throttled attempts; generic wrong/nonexistent/disabled-account errors. Require TLS, salted hashes, server rate limits, protected storage and finite revocable sessions. HR verifies identity; strong short-lived single-use grants permit password-setting only, never ID-only reset; passwords stay private from HR. Logout removes access, discloses pending offline revocation and preserves payment ownership without cross-account submission. Cached access needs approval. Figma implements none of these services.

**Status/payment:** date cached ETA; replacements need dispatch. Code is not presence/payment proof. Verify service/date/fare server-side; typed/QR/Back/reopen/retry preserve one payment identity, no duplicate debits. Offline Pending; Paid requires server confirmation. 80 Tk is not eight rides. Top-up, grace, manual admission and re-entry need approval.

**SOS:** reuse alert ID with worker/bus/time/available location accuracy/age; never wait for GPS or auto-alert drivers. Sending/Not sent/Delivered/Acknowledged require evidence; delivery is not acknowledgement/dispatch. Confirm active cancellation; append a timestamped update, never recall delivery. Contacts/channels/staffing need approval.

## Build And Validate

Reuse `GreenCommute tokens`, Archivo/Inter/Noto Sans Bengali, Lucide and existing variants. Base 360 x 800. [Coordinator snapshot](../review/prototype-repair-coordination.md): bounded browser PASS, not this editor's tests. Remaining: all-device/locale, keyboard/TalkBack, anonymous sharing, real services and final one-page/export checks.

## Dependencies And Credits

U-1/U-2/U-7/U-10/U-15: ownership, comprehension, connectivity/providers, issuance/support/privacy/sessions. Also fare/returns, codes/dead phones, ETA/capacity/assignments and U-12 telemetry/thresholds/permissions/retention. Bangla needs review; audio is unimplemented. Fonts: SIL OFL; Lucide: ISC; original mark; attributed OpenStreetMap, illustrative overlays, provider/caching rights unresolved. GitHub Copilot assisted; entrant owns decisions.
