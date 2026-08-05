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
    "MOD-03": { s: 2, last: "2026-08-04", seen: ["2026-08-04"] }
  },

  /* Milestone status: "todo" | "active" | "done" */
  milestones: {
    coursework: { status: "active", note: "5 of 33 units touched. MOD-03 scored 2 — shaky on scope vs. SIPOC boundaries and business case. MOD-02 (Project selection) held back, unscored — it's a project-tool unit, not pure admin." },
    exam:       { status: "todo",   note: "Locked until the coursework is done. Two attempts only." },
    project:    { status: "todo",   note: "Locked until the exam is passed. Scope it early anyway." }
  },

  /* What to do in the next one-hour block. */
  plan: {
    nextUp: ["MOD-04", "MOD-05"],
    note: "SIPOC and the value stream. Both are project deliverables — build them against a real Social Current process, not the course's PBJ Inc. example. Revisit MOD-03 scope-vs-SIPOC distinction once SIPOC is fresh in mind."
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
    }
  ]
};
