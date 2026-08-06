/* ==========================================================================
   LOG — study history, unit scores, milestone status.
   This is the ONLY data file that changes. Claude Code writes to it after
   each debrief. Do not edit by hand.
   ========================================================================== */

window.ICBB_LOG = {

  /* Units marked complete in the SSDSI portal. Watched is not the same as
     learned — a unit only counts toward exam readiness once it scores 3. */
  watched: ["MOD-02"],

  /* Unit scores, set by Claude during debrief. Absent = 0. */
  scores: {
    "INTRO":  { s: 3, last: "2026-08-04", seen: ["2026-08-04"] },
    "MOD-00": { s: 3, last: "2026-08-04", seen: ["2026-08-04"] },
    "MOD-01": { s: 3, last: "2026-08-04", seen: ["2026-08-04"] },
    "MOD-03": { s: 2, last: "2026-08-04", seen: ["2026-08-04"] },
    "MOD-04": { s: 2, last: "2026-08-04", seen: ["2026-08-04"] },
    "MOD-05": { s: 2, last: "2026-08-06", seen: ["2026-08-06"] }
  },

  /* Milestone status: "todo" | "active" | "done" */
  milestones: {
    coursework: { status: "active", note: "7 of 33 units touched. MOD-03, MOD-04, MOD-05 all scored 2 — same shape each time: definitions solid, application needs prompting. MOD-05 specifically: TAKT time formula inverted. MOD-02 (Project selection) held back, unscored." },
    exam:       { status: "todo",   note: "Locked until the coursework is done. Two attempts only." },
    project:    { status: "todo",   note: "Locked until the exam is passed. Scope it early anyway." }
  },

  /* What to do in the next one-hour block. */
  plan: {
    nextUp: ["MOD-06", "MOD-07"],
    note: "Process mapping (swim lane — required project deliverable, and includes input map) then Cause & Effect matrix. Build against a real Social Current process. Re-drill TAKT time (available time ÷ demand, not production rate per worker) before it comes up again in MOD-27 Flow & TAKT."
  },

  /* One entry per one-hour block. */
  sessions: [
    {
      n: 1,
      date: "2026-08-04",
      minutes: 20,
      title: "Project Charter (revisit)",
      notes: "Solid on problem/goal statement structure and SMART criteria. Shaky on how charter 'in/out of scope' differs from SIPOC process boundaries — conflated the two twice before correction. Vague on what the business case section is actually for. Didn't connect scope changes to the phase-gate cost (re-approval from Kevin Clay) until prompted.",
      units: [
        { id: "MOD-03", from: 0, to: 2 }
      ]
    },
    {
      n: 2,
      date: "2026-08-04",
      minutes: 0,
      title: "Admin unit cleanup — no quiz",
      notes: "Andreas requested INTRO, MOD-00, MOD-01 marked 3 without a quiz — pure admin/overview content, no application to test. MOD-02 (Project selection) explicitly held back at his request since it's a project-tool unit, not purely informational; revisit later.",
      units: [
        { id: "INTRO",  from: 0, to: 3 },
        { id: "MOD-00", from: 0, to: 3 },
        { id: "MOD-01", from: 0, to: 3 }
      ]
    },
    {
      n: 3,
      date: "2026-08-04",
      minutes: 15,
      title: "SIPOC(R)",
      notes: "Nailed the mechanics — nouns/gerunds rule for outputs, yellow-input escalation logic. Application was shaky: gave the naming rule but skipped the actual output fix until pushed; got the red-input response backwards at first (tried to scope it out rather than address it), then landed on 'parallel team' correctly only after being pointed at the 50%-variation gate risk. Also confirmed a real gap: SIPOC's process boundary is the same physical boundary as the charter's Scope first/last steps — not a separate concept, contra how MOD-03 went.",
      units: [
        { id: "MOD-04", from: 0, to: 2 }
      ]
    },
    {
      n: 4,
      date: "2026-08-06",
      minutes: 15,
      title: "LEAN & Value Stream",
      notes: "Strong recovery on the three-criteria value-add test after an initial vague pass — correctly identified duplicate data entry fails both the customer-wants-it and transforms-information criteria. Correctly reasoned that a low VA% points to waiting/queue time between steps dominating, not universally sloppy work. Weak spot: inverted TAKT time — described it as a per-worker production rate instead of available time ÷ customer demand, and initially misjudged whether the example process was keeping pace with TAKT when the numbers actually showed it matched.",
      units: [
        { id: "MOD-05", from: 0, to: 2 }
      ]
    }
  ]
};
