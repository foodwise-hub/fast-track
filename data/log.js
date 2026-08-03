/* ==========================================================================
   LOG — study history and topic scores.
   This is the ONLY data file that changes. Claude Code writes to it after
   each debrief. Do not edit by hand unless you know what you're doing.

   scores:   topic id -> { s: 0-3, seen: ["2026-08-04"], last: "2026-08-04" }
   sessions: newest last.
   ========================================================================== */

window.ICBB_LOG = {
  /* Where you are right now. Claude Code updates this at the end of a debrief. */
  plan: {
    nextUp: ["D-01", "D-02", "D-03", "D-04", "D-05"],
    focusPhase: "D",
    note: "First block. Start with the Define basics — they are the vocabulary everything else uses."
  },

  /* Topic scores. Absent = never touched = 0. */
  scores: {},

  /* One entry per one-hour block. */
  sessions: []
};
