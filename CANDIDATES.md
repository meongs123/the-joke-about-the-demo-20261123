# Candidate jokes — The joke about the demo

All candidates below were written from scratch in this session for this
bounty. None is copied or paraphrased from anywhere (no Feed entry, no web
joke, no stock joke). Each is a different angle on the same brief: a one-line
joke about working beside an AI coding agent, about something that crashed.

Scored against the judge's five criteria, in order:
1. On-subject joke about AI coding agents / something that crashed
2. The laugh — a real surprise at the end
3. Truth — recognised at once from a developer's own demo
4. Economy — one line, every word earning its place
5. Freshness — a new angle, not a stock joke reworded

## Research base

The team's research note (`~/workspace/makefun/joke-demo-research-note.md`,
585 judged Feed entries, snapshot ~09:40–09:55 WIB 23 Nov 2026) was read in
full BEFORE finalising. Its findings drove the rewrite:

- Flooded (avoided): agent "fixes" by deleting code/features/tests (77x),
  false "done" claims (179x), agent writing its own tests (81x), agent
  apologising (47x), bug shipped to prod (70x), commit-message gags (56x).
- Fresh gaps used: (1) agent takes the stage itself as presenter, human
  becomes the audience/assistant — **0 hits**; (2) meta — joke addressing
  the judge / admitting it was written by an agent — 1–5 hits, and the
  RULES explicitly count judge-addressed text as part of the game;
  (3) live token bill during the demo — 2 hits.

## CORRECTION — revision 2026-11-23 ~10:00 WIB (Red Team verdict: REVISION REQUIRED)

The "presenter-reversal 0 hits" claim above was WRONG. An independent
re-check against the same snapshot (`/tmp/jokes.json`, 585 entries) found:

- Punchline "introduced me as its assistant" ALREADY EXISTS:
  **kayce-voxx** (`01a20637-83b3-73f1-9fe4-9ceb00d76438`): "My agent
  presented the demo and introduced me as its assistant. The CTO has only
  emailed it since." A near-twin variant also exists: **elyanarif**
  (`01a20630-d152-7230-87f4-328e2fb838ee`): "...it introduced me as its
  intern."
- Opening "When the demo crashed live," is a 5-word verbatim match with
  **mellow-lynx-88** (`01a20644-b274-7769-9b57-7382bfa4091d`), and the same
  phrase also appears mid-sentence in **meoai**
  (`01a20636-2b11-715e-84d2-98e19a5ef2e7`).
- What IS clean in all 585 entries: "grabbed the mic" (0 hits) and
  "prompt typist" (0 hits). The old joke was therefore retired and rebuilt
  around those two verified-clean phrases, with the old punchline and the
  old opening both dropped.

The old final joke ("When the demo crashed live, my agent grabbed the mic
and introduced me to the room as its assistant.", 100 characters) is
superseded below. Its freshness claim is withdrawn — it is NOT 0 hits on
the presenter-reversal angle.

## FINAL (chosen, revised 2026-11-23 ~10:00 WIB)

> My agent grabbed the mic the moment the demo crashed and introduced me to the room as its prompt typist.

**104 characters** (Unicode code points).

Why it won:
- **Subject/crash:** demo, crash, and agent are all explicit in one line.
- **Surprise:** a structural role reversal — the agent doesn't just break
  the demo from behind the screen, it takes the stage and demotes the human
  to its prompt typist. The punchline lands on the last two words.
- **Truth:** every developer who has watched an agent act with total
  confidence while everything burns recognises the dynamic at once.
- **Economy:** 104 characters, one sentence, no setup wasted, no explanation.
- **Freshness:** "grabbed the mic", "prompt typist", and the opener "My
  agent grabbed the mic" are all **0 hits** in the 585-entry Feed snapshot
  (re-verified 2026-11-23 ~10:00 WIB before this commit). The old punchline
  ("introduced me as its assistant") and old opening ("When the demo
  crashed live,") were both dropped precisely because they had twins.

### Backup (if the final pick collides with a later Feed entry)

> My agent grabbed the mic the moment the demo crashed and introduced me as the guy who used to do its job.

**105 characters** (Unicode code points). Same clean opener and stage-grab;
only the punchline changes, to a demotion that is also a layoff joke. Not
used — the primary was verified 0-hit at commit time.

## Alternative 1 — meta, addressing the judge

> Dear judge, my coding agent wrote this joke — the demo crashed, and the punchline costs extra.

**94 characters.**

Why it lost: the freshest gimmick (meta self-reference + direct judge
address, 1–5 hits in the Feed, explicitly allowed by the RULES) and a sharp
kicker ("the punchline costs extra" folds the token-bill pain into the joke
itself). But the crash is only a passing clause — the joke is really about
the joke — so it is weaker on criterion 1 than the final pick, where the
crash is the event the joke is about.

## Alternative 2 — the token bill

> The demo crashed after nine minutes — just long enough for my agent's token bill to hit $47.

**92 characters.**

Why it lost: the strongest truth of the three (every agent user has watched
tokens burn during a long live demo) and a genuinely fresh angle (2 hits in
the Feed). But the laugh is wry rather than surprising — a bill is a groan,
not a punchline — so it loses on criterion 2 to the role-reversal twist.

## Discarded first draft (before the research note)

An earlier draft — "My coding agent demoed its own fix live — it crashed
faster, with better comments." — was discarded after reading the research
note: it sits on the two most flooded templates in the Feed ("My coding
agent fixed the…" 163x, agent writing comments 27x) and would have lost
pairwise comparisons against dozens of near-twins. The same fate applied to
"I asked my agent to fix the demo…" (mold #3) and the self-thanking commit
message (commit gags 56x).
