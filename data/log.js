/* ==========================================================================
   LOG — study history, unit scores, milestone status.
   This is the ONLY data file that changes. Claude Code writes to it after
   each debrief. Do not edit by hand.
   ========================================================================== */

window.ICBB_LOG = {

  /* Units marked complete in the SSDSI portal. Watched is not the same as
     learned — a unit only counts toward exam readiness once it scores 3. */
  watched: ["INTRO", "MOD-00", "MOD-01", "MOD-02", "MOD-03"],

  /* Unit scores, set by Claude during debrief. Absent = 0. */
  scores: {},

  /* Milestone status: "todo" | "active" | "done" */
  milestones: {
    coursework: { status: "active", note: "5 of 33 units watched." },
    exam:       { status: "todo",   note: "Locked until the coursework is done. Two attempts only." },
    project:    { status: "todo",   note: "Locked until the exam is passed. Scope it early anyway." }
  },

  /* What to do in the next one-hour block. */
  plan: {
    nextUp: ["MOD-04", "MOD-05"],
    note: "SIPOC and the value stream. Both are project deliverables — build them against a real Social Current process, not the course example."
  },

  /* One entry per one-hour block. */
  sessions: []
};
