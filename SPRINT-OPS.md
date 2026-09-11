# AUST CSE Carnival 8.0 — UI/UX Design Sprint · Run of Show

**Event:** Fri 11 Sep 2026 · 17:00–23:00 (Dhaka) · online · single 6-hour round · team of 1–3
**Submission (official, 11 Sep):** ONE PDF containing all phase contents AND the links (Figma file + prototype) → Google Form https://forms.gle/XYuDchjGrAy3BNnN9 before 23:00. Late uploads are not accepted. Phase 6 assembles `GreenCommute-Submission.md` (phase docs concatenated + embedded PNGs) → one PDF.
**External gates (only three):** 17:00 theme drop · 17:40 scenario drop · 23:00 upload closes. Every other boundary is self-enforced. **Confirmed by organisers 11 Sep: one single upload of all files at the deadline, no per-phase timing.** Consequences: (1) phase gates are ours to hold — the only thing stopping Phase 1–3 from eating Phase 4 is the alarm; (2) an unfinished earlier deliverable can be finished later without penalty, so at any gate move on and come back only if time is left after 21:50; (3) Figma named versions are the only timestamped process evidence a judge can see — keep taking them.
**Compliance:** This file is process only. Nothing is created in Figma before 17:00 (rule 02: no pre-made templates). The Q.01 practice file and its components are off-limits.

---

## 0. Rubric economics

| Phase | Block | Marks (official) | pts/min | Official deliverable (problem statement p.3 — supersedes the rulebook rubric) |
|---|---|---|---|---|
| 1 Requirements & discovery | 40 | 15 | 0.38 | Brief rewritten as requirements — functional and non-functional, separated. Contradictions named and resolved, with reasoning. |
| 2 Research & validation | 40 | 15 | 0.38 | Personas for the worker AND one secondary user (driver or security guard). Journey map: rainy morning commute, bus delayed. Unverified assumptions stated as assumptions. |
| 3 IA & low-fi | 50 | 15 | 0.30 | Sitemap · ONE core flow (boarding and payment) · wireframes for EVERY committed screen · ONE rejected home-screen alternative. |
| 4 High-fidelity UI | 90 | 25 | 0.28 | Finished screens incl. WAITING state, active IN-TRANSIT state, panic/SOS state. High contrast for dim screens; one-handed use in crowds. |
| 5 Figma ecosystem | 70 | 15 | 0.21 | Named VARIABLES, components with variants, auto layout, clickable prototype of the primary boarding flow AND triggering the SOS. |
| 6 Handoff | 50 | 15 | 0.30 | REDLINES for the home screen + one-page note a developer could build from without asking a question. |

- Old rulebook rubric (10/15/15/25/15/10/10 with a separate a11y line) is void. A11y is now inside Phase 4's wording ("high contrast", "one-handed") — still measure and write it down; it is the proof.
- Prototype is graded in Phase 5, not 6 → wire both flows (boarding+payment, SOS) inside Phase 5. Phase 6 = redlines + dev note + PDF assembly.
- Phase 3 now needs wireframes for EVERY screen we commit to → commit to few screens (6–8). Plus one rejected home alternative with the reason.
- Screen Design still coverage-first: three named states are mandatory. Coverage gate at 20:40.

---

## 1. Clock (17:00 start)

| Clock | Phase | Deliverables due | Gate |
|---|---|---|---|
| 17:00–17:40 | 1 Requirements | `01-understand/brief.md`: source map · problem · users · goals · FR/NFR · contradictions resolved · constraints · US-1..5 · provisional profiles · journey hypothesis · unknowns · implications | 17:35 soft stop |
| 17:40–18:20 | 2 Research | `02-research/research.md`: worker persona + ONE secondary persona (guard or driver) · journey map (rainy morning, bus delayed) · assumptions register (validated / still assumed) · profile change log | 18:20 hard |
| 18:20–19:10 | 3 IA & low-fi | Figma `01 Flow & Sitemap` + `02 Wireframes`: sitemap · boarding+payment flow with S-ids · wireframe for EVERY committed screen · rejected home alternative + reason · `structure.md` inventory | **19:10 HARD — Phase 4 starts regardless** |
| 19:10–20:40 | 4 Hi-fi | variables + components first (10 min) · every S-id screen at 360×800 incl. WAITING / IN-TRANSIT / SOS · real text · one-line note per screen | 20:40 coverage gate |
| 20:40–21:50 | 5 Figma ecosystem | named variables audit · variants · auto-layout resize test · **prototype: boarding flow + SOS trigger wired and clicked through** · contrast table · palette/type rationale · view link tested | 21:50 = minimum viable package |
| 21:50–22:40 | 6 Handoff | home-screen redlines (Figma page `07 Redlines & Handoff`) · one-page dev note · PNG exports · **single PDF assembled** · form pre-filled | **22:30 edits freeze** |
| 22:40–23:00 | Submit | upload the PDF at 22:40, confirm receipt, screenshot, keep copies | 23:00 |

Phone alarms: 17:35 · 18:15 · 19:05 · 20:35 · 21:45 · 22:30 · 22:40.

---

## 2. Phase protocols and Definition of Done

### Phase 1 — Understand (17:00–17:40) · theme only, no scenario yet
Read the theme twice. Identify: what is being asked, for whom, on what platform (if stated), what the logo/brand implies.

- [ ] **Brief (≤ 1 page):** Problem (1–2 sentences: who, what, why now) · Users (primary, secondary) · Goals (max 3, checkable) · Limits (platform, context, tech, scope OUT).
- [ ] **User stories US-1..US-5:** "As a [user], I want [goal], so that [benefit]" + 1–2 acceptance criteria each ("Done when…"). Every criterion must be observable on a screen.
- [ ] **1–2 user profiles, explicitly labelled HYPOTHESIS.** Fields: context · goals · frustrations · tech comfort · constraints. Tag every field [A] assumption or [I] inferred-from-theme. This sets up the scored Phase 1→2 delta.
- [ ] **Unknowns list:** what the scenario must answer. Becomes Phase 2 reading questions, later handoff "open questions".
- [ ] Start `DECISIONS.md` (see §3).

### Phase 2 — Research (17:40–18:20) · scenario is the ONLY user evidence
**Official deliverable:** persona for the worker + ONE secondary persona = **security gate officer (locked, DL-09; driver tertiary)** · journey map of a rainy morning commute when the bus is delayed · unverified assumptions stated as assumptions.
**Note (11 Sep):** the client pack already contains the user evidence (Monira's voice note, junior's notes). If a separate scenario drops at 17:40, it is primary; if not, Phase 2 = personas + journey map built from the pack, with U-1..U-14 from Phase 1 carried as an explicit assumptions register. Show the Phase 1 → 2 change log either way.
Pass 1: read straight through, highlight facts. Pass 2: extract actors, goals, pain points, context, constraints, exact phrases.

- [ ] **Write-up "What we learned":** each learning cites the scenario (quote or line ref) and is tagged [E]. Inference tagged [I]. Nothing invented.
- [ ] **Updated profile with CHANGE LOG:** per field → Confirmed / Changed / Dropped / Added, each with its scenario evidence. If a Phase 1 guess was right, say so and cite why — the judge is scoring visible change.
- [ ] **P-1..P-5 problems/insights:** Evidence → Insight → Design implication. Prioritise P0/P1. Map each to a user story. Revise stories the scenario contradicts and record the revision.
- [ ] Update unknowns list (answered / still open).

### Phase 3 — Structure (18:20–19:10) · before any visual design
**Official deliverable:** sitemap · ONE core flow = boarding and payment · wireframes for EVERY screen we commit to · ONE rejected home-screen alternative with the reason. Platform fixed by DL-06: Android 360×800.
- [ ] **Sitemap** of main sections (Figma page or FigJam; export PNG).
- [ ] **Main-journey flow:** screens as nodes with IDs S-01…; arrows = the prototype links we will wire in Phase 6. This flow IS the prototype spine.
- [ ] **Wireframes for 3–5 main screens:** greyscale low-fi, no colour, no type styling. Each frame labelled `S-xx · US-x · P-y`.
- [ ] **Screen inventory table:** S-id · name · US · P · must-have content · states (empty/error/success) · in main journey? (Y/N). Decide which states are part of the journey; everything else is out of scope and written as such.
- [ ] **Platform decision** from scenario evidence (mobile 390×844 vs web 1440). Record in DECISIONS.md.
- [ ] **Content plan:** names, places, prices (BDT), dates consistent with the scenario — so Phase 4 has no lorem moments.
- [ ] Trace matrix US → P → S (a small table; reused in handoff).

### Phase 4 — Screens (19:10–20:40) · PROTECTED · build clean from the first frame
**Official deliverable:** finished screens including the WAITING state, the active IN-TRANSIT state and the panic/SOS state; high contrast for dim screens; designed for one-handed use in crowds. Use Figma VARIABLES (colour, spacing, radius) bound to styles — Phase 5 grades "named variables". Theme: ONE light high-contrast theme (DL-11); dark mode only as a variables mode if Phase 5 has slack. Boarding = bus door code typed at the kerb; optional "Scan instead" screen (Should — first cut if short); confirmation screen = daily-colour ticket (DL-02). SOS discreet, hold-to-trigger, security as dispatcher (DL-03).
First 10 minutes, nothing else:
- [ ] Colour styles/variables: brand (derived from the supplied logo) · neutrals · semantic (success/warn/error) · surface/text pairs pre-checked for contrast.
- [ ] Type styles: 1–2 families (Google Fonts; Bangla-capable if evidence says so), 6–7 role-named styles.
- [ ] Spacing 4/8 grid, radius tokens, layout grid on the device frame.
- [ ] Components only the inventory needs: Button (primary/secondary/tertiary + states) · Input (default/focus/error) · Top bar · Bottom nav/tab bar · Card · List row · Toast/dialog.

Then screens, in journey order:
- [ ] Every S-id screen exists as a top-level frame named `S-xx Name`, auto-layout, containers FILL-width, fixed device size.
- [ ] Real text everywhere. Real imagery only from licence-clean sources (see §3). Theme logo placed where a brand would place it.
- [ ] One-line note per screen: "Serves US-x / fixes P-y because …" (collected into the Phase 4 note).
- [ ] **20:40 coverage gate:** any main-journey screen missing → Phase 5 flex time goes to coverage, not polish.

### Phase 5 — Clean file (20:40–21:50) · make it portfolio-grade, add nothing new
**Official deliverable:** named variables · components with variants · auto layout · clickable prototype of the primary boarding flow AND triggering the SOS (two flow starting points, both clicked through end to end). Prototype wiring happens HERE, not in Phase 6.
- [ ] Consistency pass: no detached colours/fonts, auto-layout on every container, layers named, duplicate components merged, resize test (change frame width — nothing breaks).
- [ ] Palette + font set written down with a one-line reason each (Figma frame + doc).
- [ ] **Accessibility notes (measured, not claimed):**
  - Contrast table: element · fg · bg · ratio · pass (AA: 4.5:1 body, 3:1 large text and UI).
  - Alt text table: screen · image/icon · alt text (or "decorative").
  - Touch targets ≥ 44×44, ≥ 8 between targets. Body ≥ 16 on mobile.
  - Focus/reading order · errors use icon + text + colour, never colour alone · plain-language microcopy · language choice · motion non-essential.
  - Any scenario-driven choice (low literacy, low bandwidth, shared device…) only if evidenced.
- [ ] Logo present and used correctly. Search file text for "lorem" / "ipsum" / "placeholder" → zero hits. No grey image boxes.
- [ ] Figma pages: `Cover · 01 Flow & Sitemap · 02 Wireframes · 03 Screens · 04 Design System · 05 Accessibility · 06 Prototype`.
- [ ] Share link: **Anyone with the link → can view.** Tested in an incognito window.
- [ ] **21:50 checkpoint:** every rubric line has a submittable artefact, even if rough.

### Phase 6 — Prototype & handoff (21:50–22:40)
**Official deliverable:** REDLINES for the home screen (spacing, sizes, type styles, colour variables annotated on a copy of the home frame, page `07 Redlines & Handoff`) + a one-page note a developer could build from without asking a question. Then assemble the SINGLE PDF: cover → Phase 1 → 6 docs, embedded PNGs (sitemap, flow, wireframes, screens, redlines), Figma + prototype links, decision log, asset credits.
- [ ] Flow starting point on the first screen. Every main-journey screen has a forward link and a back link. Overlays/scroll where the journey needs them.
- [ ] Run it end to end in presentation mode. Zero dead ends. Re-test the prototype share link in incognito.
- [ ] **Handoff note (1 page):** product one-liner · primary user · main flows as S-id sequences per US · component + token summary · states covered / explicitly not covered · open questions (from unknowns) · dev notes (data, validation, empty/error handling) · assets & licences · AI-usage statement + pointer to DECISIONS.md.
- [ ] Export PDFs (brief, research, sitemap/wireframes, Phase 4 note, handoff). Paste all links into `SUBMISSION.md` (pre-filled form text).
- [ ] **22:30 freeze.** No more edits to the Figma file after this.

### Submit (22:40–23:00)
- [ ] Upload at 22:40. Confirm receipt. Screenshot the confirmation. Keep local copies of every file and link.

---

## 3. Standing rules (all phases)

**Evidence tagging** in every document: `[E]` evidence (theme/scenario text) · `[I]` inference · `[A]` assumption · `[D]` design implication. Judges are told to check that later decisions come from the scenario.

**Version checkpoints** (Education plan = unlimited history): at every gate press `Ctrl+Alt+S` and name the version — `P1 brief done 17:40` · `P2 research 18:20` · `P3 wireframes 19:10` · `P4 all screens 20:40` · `P5 clean 21:50` · `Freeze 22:30`. Timestamps prove rule 02 and show the six-phase process to a judge who opens history.

**Never use First Draft / Figma Make / AI generation on the canvas.** They assemble from Figma's design kits (rule 02 template) and produce raw AI output the tools policy says is not judged. Canvas content comes from the MCP or by hand, traceable to `DECISIONS.md`.

**Decision log** (`DECISIONS.md`, live from 17:00) — every major decision as:
`DL-nn · PROBLEM → EVIDENCE → INSIGHT → USER NEED → DECISION → EXPECTED BENEFIT`
Rule 03 says we must be able to explain any decision; the tools policy says prompts, edits and decisions are what get judged. The log is the answer to both, attached to the handoff.

**Assets & licences** (rule 04: uncredited work = disqualification; rubric: "no placeholders"):
- Fonts: Google Fonts only. Icons: one set, permissive licence (Material Symbols / Lucide / Phosphor). Photos: Unsplash plugin only, record photographer + URL, or none. Illustrations: drawn in Figma. Logo: as supplied by organisers.
- Never: screenshots of other apps, Dribbble/Behance copies, stock without licence, unlabelled AI images.
- Credit list goes in the handoff note.

**Real text**: every string is plausible product copy consistent with the scenario (names, BDT prices, dates, locations). No lorem, no "Title here", no "Lorem" avatars.

**Figma build discipline** (learned in the Q.01 dry run, Figma MCP):
- One top-level frame per `use_figma` call; batch everything for that screen in one call.
- Unknown props fail the whole call (`alignItems`, `verticalPadding`, `padding: 0`, strokes on ellipse, empty-string text, `strokes: undefined`). Use `primaryAxisAlignItems` / `counterAxisAlignItems`.
- Text wrapping: `layoutSizingHorizontal: 'FILL'` + `textAutoResize: 'HEIGHT'`.
- Variant text via `setProperties`. Prototype links via `node.setReactionsAsync` + `page.flowStartingPoints`.
- Budget: **200 MCP calls/day, 10 reads/min.** Plan ≈ wireframes 6 · system 3 · screens 12 · fixes 20 · a11y/reads 15 · prototype 4 ≈ 60. Failed calls still count — no speculative props.

**Time discipline**: required deliverable > core journey > major UX problems > hierarchy > visual quality > system consistency > edge cases > decoration. Nothing from Phases 1–3 may run into 19:10.

**Solo operating model** (team = Tayeb + Copilot; decided 2026-09-10):
- Tayeb owns every decision and can explain each one (rule 03). Copilot drafts, challenges, builds, audits — never decides alone.
- Phases 1–3: Copilot drafts documents from Tayeb's answers and the scenario; Tayeb edits and approves. Wireframes = Figma low-fi frames via MCP (greyscale, labelled), so they become Phase 4 skeletons.
- Phase 4: Copilot builds styles/components then one screen per `use_figma` call while Tayeb does visual QA and manual fixes in Figma in parallel. Docs are paused; only the one-line screen notes are captured.
- Phase 5: Copilot runs the consistency/a11y audit (reads) and writes the palette/type/a11y docs; Tayeb fixes in Figma.
- Phase 6: Copilot wires reactions via MCP; Tayeb clicks through end to end and reports dead ends; Copilot drafts the handoff; Tayeb finalises and uploads.
- Docs pipeline: Markdown in this workspace → **Markdown PDF (yzane) rendering with local Edge** (configured in `.vscode/settings.json`; no Chromium download). Export lands next to the source file, so write `01-understand/brief.md` and the PDF appears in the right folder. Sitemap on a Figma page → PNG export.
  - PDF formatting rules (from the 2026-09-10 test render): single line breaks collapse into one paragraph — put a blank line between every paragraph and label; use `<br>` for a forced break. Tables, `- [ ]` checkboxes and inline code render well. **One A4 page ≈ 450–550 words** at this size: the brief (Phase 1) and the handoff note (Phase 6) are word-budgeted to that.
- MCP budget is the production engine: keep ≥ 40 calls in reserve at 21:50.

---

## 4. Submission package (what the form must receive)

| Section of the single PDF | Content | Source files |
|---|---|---|
| Cover | GreenCommute · team · Figma link · prototype link | — |
| Phase 1 | Requirements & discovery (FR/NFR, contradictions, stories, profiles, unknowns) | `01-understand/brief.md` |
| Phase 2 | Personas · journey map · assumptions register · change log | `02-research/research.md` |
| Phase 3 | Sitemap PNG · boarding+payment flow PNG · wireframe PNGs (every screen) · rejected home alternative + reason · inventory | `03-structure/` |
| Phase 4 | Screen PNGs (waiting, in-transit, SOS, boarding…) · per-screen rationale | `04-screens/` |
| Phase 5 | Variables + components summary · contrast table · palette/type rationale · prototype flows described + link | `05-design-file/` |
| Phase 6 | Home-screen redlines PNG · one-page dev note · asset credits · AI-usage statement · decision log | `06-handoff/`, `DECISIONS.md` |

---

## 5. Pre-flight (tonight / before 16:30 tomorrow) — tools and process only

- [ ] Registration confirmed (deadline was 7 Sep). Team roster final. Everyone has read the rulebook.
- [~] Submission: **single upload of all files at the deadline, no per-phase timing (organisers, 11 Sep).** Still unknown: form link, accepted file types, size limits, whether a Drive folder link is accepted — get these at 17:00 from the release announcement or ask; pack PDFs + PNGs into one ZIP as the safe default.
- [x] **Competition Figma file** (created empty by Tayeb 2026-09-10 evening, before the window — acceptable because it holds nothing; version history will show creation + zero edits until 17:00 on 11 Sep):
  - URL: https://www.figma.com/design/aWSZZboavo5bIt92qFQnsz/Carnival-8.0-%E2%80%94-UI-UX-Sprint · **fileKey `aWSZZboavo5bIt92qFQnsz`** · one page `0:1 Page 1`, empty (MCP read verified 2026-09-10).
  - Share link verified 2026-09-10 from a logged-out browser: file title loads in view mode with the "Sign up to comment, edit, inspect" banner — no sign-in wall, no request-access screen. Re-test at 22:30 once content exists; also test the prototype link then.
  - **Rule: nothing goes into this file until 17:00.** No test frames, no Bangla test, no styles. All tests below happen in a separate throwaway file.
  - [ ] Confirm the breadcrumb reads `Md. Tayeb Ibne Sayed's team / …` not `Drafts`; if Drafts, drag the file into the team project (Education plan features and history retention follow location; moving changes no content).
- [x] **Figma pre-flight done 2026-09-10 (Tayeb, manual):**
  1. Desktop app logged in as `tayeb.cse.20230104027@aust.edu` (the account the MCP is authorised on). Browser tab as fallback.
  2. Plugins run once each via `Ctrl+K` → **Plugins & widgets** (they now appear under Recents; same search finds them again): **Contrast** by WillowTree, 524k users (ratio + AA/AAA on a selected layer; "Scan page" gives a whole-page text-contrast report) · **Iconify** by Vjacheslav Trushkin (one icon set during the sprint: Lucide ISC / Material Symbols Apache-2.0 / Phosphor MIT — licence shown per set; filter "no attribution required") · **Autoflow** by David Zhao & Yitong Zhang (free up to 50 flows/file; recent reviews report lag — fallback = line tool with arrow end-cap) · **Unsplash** official (only if the scenario calls for photos; note the photographer). Nothing else.
     **Never enable a library / UI kit** (Assets → Manage libraries: iOS, Material 3, Simple Design System…): rule 02 "pre-made templates", rule 04 uncredited work, and library instances expose the kit's name in the layers panel. "No libraries here — yet" is the required state.
  3. Fonts: Google Fonts are built into Figma — no install. Do not use locally installed fonts.
  4. Do NOT: create styles, variables, components, colours, frames or a "starter" file; duplicate any community UI kit or template; open or copy from the Q.01 file.
- [ ] **Scratch-file tests (Tayeb, ≈ 10 min, in a throwaway Drafts file — NOT the competition file; trash it afterwards):** add one frame → Present → Share prototype → link opens in an incognito window; Export panel → PNG 2x works; type `ক্ষুদ্র ব্যবসা` in **Noto Sans Bengali** and check the conjuncts (ক্ষ, ব্য) shape as single glyphs, not broken pieces — decides Bangla vs English UI fallback tomorrow. Optional ten-minute muscle-memory pass if rusty: Shift+A auto layout, FILL/HUG, local styles panel, pages, prototype connections + flow starting point.
- [ ] **17:00 kickoff in Figma (Copilot, 1 MCP call):** rename `Page 1` → `Cover`, add pages `01 Flow & Sitemap · 02 Wireframes · 03 Screens · 04 Design System · 05 Accessibility · 06 Prototype`. Tayeb keeps the file open in the desktop app all evening to watch MCP edits land and fix by hand.
- [x] Figma MCP: `whoami` OK on 2026-09-10 — Mohammed Tayeb, student tier, Full seat, 200 calls/day, 10/min.
- [x] Docs pipeline tested 2026-09-10: `SPRINT-OPS.md` → Ctrl+Shift+P → **Markdown PDF: Export (pdf)** → `SPRINT-OPS.pdf` rendered correctly via local Edge (extension `yzane.markdown-pdf`, settings in `.vscode/settings.json`). Fallback if it ever fails: Markdown Preview Enhanced → Chrome (Puppeteer) → PDF, or browser print-to-PDF.
- [x] Workspace settings override user settings that map `*.md` → `bat` with format-on-save (found 2026-09-10; that combination hides Markdown commands and has corrupted files before).
- [x] Wireframe method: Figma low-fi frames via MCP (decided 2026-09-10).
- [x] Workspace scaffold: `01-understand … 06-handoff`, `DECISIONS.md`, `SUBMISSION.md` (process files only, no design content).
- [ ] Alarms set (see §1). Shared clock synced.
- [ ] Backup internet (mobile hotspot), charger, water/food, quiet room, second monitor if available.
- [ ] Fresh workspace: this folder only. Do not open `e:\carnival-uiux` or the Q.01 Figma file during the sprint.

---

## 6. Open questions for organisers (Rubayet 01620929190 · Ma-Huan 01533514667)

1. ~~Is it a single package upload at the end, or are there per-phase check-ins / timestamps?~~ **Answered 11 Sep: single upload at the deadline, no per-phase timing.**
2. Accepted file types and size limits on the form? Is a Drive folder link acceptable?
3. Will a brand name and logo be supplied with the theme ("the theme's logo used" in Phase 5)? Or does this mean the Carnival logo?
4. Any platform constraint (mobile / web / either)?
5. Is Figma version history reviewed for rule 02 (work within the window)?
6. Prototype link: Figma prototype URL acceptable, or must it be the file link with a flow?

---

## 7. Rulebook facts (reference)

- Six phases, one continuous sitting, 17:00–23:00 online. Theme released at 00:00; scenario released at start of Phase 2 (00:40).
- Team 1–3, current AUST students, any department. No fee.
- Rules: 01 follow the released theme · 02 all work original and produced within the window, no pre-made templates · 03 AI allowed, must explain any decision · 04 plagiarism / uncredited work = disqualification · 05 comply with theme and guidelines.
- Tools suggested, never required. Figma or Adobe XD file link, view access enabled.
- Prizes: 2,500 / 1,500 / 1,000 BDT.
- Organisers may alter rules during the event — re-read any announcement at 17:00 and 17:40.
