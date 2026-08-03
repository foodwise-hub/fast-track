/* ==========================================================================
   CURRICULUM — the SSDSI Lean Six Sigma Black Belt FAST TRACK.
   33 units. IDs match how the course names them, so "Module 12" is MOD-12.
   This file is STATIC. Do not edit it during study sessions.
   ========================================================================== */

window.ICBB_CURRICULUM = {

  course: {
    name: "Lean Six Sigma Black Belt FAST TRACK",
    provider: "SSDSI",
    totalUnits: 33
  },

  /* Course size, from the SSDSI product page. */
  effort: {
    videoMinutes: 610,
    projectHours: 40
  },

  /* Gate 2 — the SSDSI internal exam. Not the IASSC exam. */
  exam: {
    name: "SSDSI Black Belt Examination",
    questions: 50,
    pool: 100,
    minutes: 60,
    minutesDisputed: 100,
    passMark: 80,
    attempts: 2,
    proctored: false,
    note: "Two attempts only \u2014 failing twice fails the course and forfeits the project. Course portal says 60 minutes, SSDSI product page says 100. Confirm which."
  },

  /* Gate 3. Cannot begin until the exam is passed. */
  project: {
    name: "SSDSI Black Belt Project",
    workbook: "DMAIC Phase Deliverables (MS Excel)",
    estimatedHours: 40,
    solo: true,
    note: "Solo \u2014 candidates cannot work as a group and only one is certified per project. Around 40 hours of work."
  },

  /* ------------------------------------------------------------------------
     DEADLINE — genuinely unresolved. SSDSI's own materials contradict each
     other. The product page sells "180 days of project mentorship", which
     implies the clock starts at the project. The milestone text only says the
     project must finish "within 180-day certification deadline", naming no
     start point.

       mode "enrolment" — pessimistic, clock already running
       mode "project"   — optimistic, clock starts when the exam is passed
       mode "unknown"   — show both, assert neither   <-- current

     Once SSDSI answers, set mode and confirmed:true and the dashboard stops
     hedging.
     ---------------------------------------------------------------------- */
  deadline: {
    mode: "unknown",
    days: 180,
    confirmed: false,
    enrolmentStart: "2026-04-22",
    enrolmentStartIsGuess: true,
    projectStart: null,
    caveat: "SSDSI's materials contradict each other on when the 180 days begin."
  },

  modules: [
    {
      id: "GB",
      name: "Green Belt",
      subtitle: "Module 1 \u00b7 17 units",
      units: [
        { id: "INTRO",  n: 1,  name: "Black Belt FAST-TRACK introduction", kind: "admin" },
        { id: "MOD-00", n: 2,  name: "Welcome to the course", kind: "admin" },
        { id: "MOD-01", n: 3,  name: "Lean Six Sigma overview", kind: "core", phase: "Define" },
        { id: "MOD-02", n: 4,  name: "Project selection", kind: "core", phase: "Define", project: true },
        { id: "MOD-03", n: 5,  name: "Project charter", kind: "core", phase: "Define", project: true },
        { id: "MOD-04", n: 6,  name: "SIPOC(R)", kind: "core", phase: "Define", project: true },
        { id: "MOD-05", n: 7,  name: "LEAN & value stream", kind: "core", phase: "Define" },
        { id: "MOD-06", n: 8,  name: "Process mapping", kind: "core", phase: "Measure", project: true },
        { id: "MOD-07", n: 9,  name: "Cause & effect matrix", kind: "core", phase: "Measure", project: true },
        { id: "MOD-08", n: 10, name: "Failure mode and effects analysis", kind: "core", phase: "Measure", project: true },
        { id: "MOD-09", n: 11, name: "Basic statistics", kind: "core", phase: "Measure" },
        { id: "MOD-10", n: 12, name: "Basic quality tools", kind: "core", phase: "Measure" },
        { id: "MOD-11", n: 13, name: "Measurement system analysis", kind: "core", phase: "Measure" },
        { id: "MOD-12", n: 14, name: "Capability analysis", kind: "core", phase: "Measure", project: true },
        { id: "MOD-13", n: 15, name: "z-Test, ANOVA and chi-squared", kind: "core", phase: "Analyze", project: true },
        { id: "MOD-14", n: 16, name: "Correlation & regression analysis", kind: "core", phase: "Analyze", project: true },
        { id: "MOD-15", n: 17, name: "Controlling the process", kind: "core", phase: "Control", project: true }
      ]
    },
    {
      id: "BB",
      name: "Black Belt",
      subtitle: "Module 2 \u00b7 16 units",
      units: [
        { id: "MOD-16", n: 1,  name: "Green Belt review", kind: "review" },
        { id: "MOD-17", n: 2,  name: "Power & sample size", kind: "core", phase: "Analyze" },
        { id: "MOD-18", n: 3,  name: "Introduction to DOE", kind: "core", phase: "Improve" },
        { id: "MOD-19", n: 4,  name: "DOE statistics and concepts", kind: "core", phase: "Improve" },
        { id: "MOD-20", n: 5,  name: "Full factorial DOE", kind: "core", phase: "Improve" },
        { id: "MOD-21", n: 6,  name: "Full factorial DOE exercise", kind: "exercise", phase: "Improve" },
        { id: "MOD-22", n: 7,  name: "Fractional factorial DOE", kind: "core", phase: "Improve" },
        { id: "MOD-23", n: 8,  name: "Non-parametric data", kind: "core", phase: "Analyze" },
        { id: "MOD-24", n: 9,  name: "Advanced regression", kind: "core", phase: "Improve" },
        { id: "MOD-25", n: 10, name: "Waste (muda) elimination", kind: "core", phase: "Improve" },
        { id: "MOD-26", n: 11, name: "Value stream mapping", kind: "core", phase: "Improve", project: true },
        { id: "MOD-27", n: 12, name: "Flow and TAKT time", kind: "core", phase: "Improve" },
        { id: "MOD-28", n: 13, name: "Pull and Kanban", kind: "core", phase: "Control" },
        { id: "MOD-29", n: 14, name: "5S (visual management)", kind: "core", phase: "Control" },
        { id: "MOD-30", n: 15, name: "Implementation & control plan", kind: "core", phase: "Control", project: true },
        { id: "EXAM-PREP", n: 16, name: "Fast-Track to Black Belt examination", kind: "exam" }
      ]
    }
  ],

  /* Score meanings. Claude assigns these during debrief — never self-reported. */
  scale: [
    { score: 0, label: "Untouched", note: "Not studied yet." },
    { score: 1, label: "Watched", note: "Went through it, cannot explain it unaided." },
    { score: 2, label: "Explained", note: "Can explain it, shaky on when to apply it." },
    { score: 3, label: "Applied", note: "Can explain it and choose it correctly in a scenario." }
  ],

  /* ------------------------------------------------------------------------
     IASSC GAP — the course covers roughly 40% of the IASSC ICBB exam.
     This is material SSDSI does not teach. Only relevant if he later decides
     to sit the IASSC exam as a second, separate goal.
     ---------------------------------------------------------------------- */
  iasscGap: [
    "Multi-vari analysis and classes of distributions",
    "The hypothesis testing framework \u2014 alpha & beta risk, test selection logic",
    "1 & 2 sample t-tests and 1 sample variance (the course teaches z-test instead)",
    "Named non-parametric tests \u2014 Mann-Whitney, Kruskal-Wallis, Mood's median, Friedman, sign, Wilcoxon",
    "Test of equal variances",
    "Logistic regression, Box-Cox transformation, stepwise regression",
    "Individual control chart types \u2014 I-MR, Xbar-R, X-S, U, P, NP, CuSum, EWMA",
    "Six Sigma metrics in depth \u2014 DPU, DPMO, RTY, COPQ"
  ]
};
