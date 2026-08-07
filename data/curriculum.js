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
    note: "Solo \u2014 candidates cannot work as a group and only one is certified per project. Around 40 hours of work.",
    submission: "Phase-gated. Complete each DMAIC Tollgate file plus that phase's deliverables, email to Kevin Clay at SSDSI, wait for approval, then proceed. Five review cycles you do not control. Then a PowerPoint from the required template, and possibly a live virtual presentation.",
    hardRequirements: [
      "Analyze: identify at least one statistically significant input affecting Y",
      "Analyze: inputs must explain at least 50% of the variation in Y",
      "Improve: solutions must derive from the statistics, not from the FMEA alone",
      "Improve: must prove a statistically significant change in Y",
      "A Swim Lane process map is a required deliverable",
      "Demonstrated competency in Design of Experiments (the mentor will help if the project does not suit DoE)",
      "A Project Proposal worksheet must be submitted to Kevin Clay before the project starts"
    ]
  },

  /* Software. Do not start the trial until Module #10. */
  software: {
    name: "Minitab",
    trialDays: 14,
    windowsOnly: true,
    note: "Windows only \u2014 the Mac and web versions do not support Minitab's Assistant, which nearly every exercise uses. The trial is 14 days, so start it when you reach Module #10, not before. SSDSI endorses Excel's free Data Analysis Tools add-in as the alternative.",
    firstNeeded: "MOD-10"
  },

  /* The course runs one fictional case study throughout. */
  caseStudy: "PBJ Inc. \u2014 reducing the cost of making peanut butter and jelly sandwiches.",

  /* ------------------------------------------------------------------------
     DEADLINE — still unresolved, and SSDSI's own materials now give THREE
     different answers:

       Green Belt Module #0    "180 calendar days from the day that you
                                purchased your course"
       Black Belt Module #1    "180 days from the end of the course"
       SSDSI product page      "180 days of project mentorship"

     Two of the three point at the project phase rather than at purchase,
     which is the better reading for Andreas. But he is enrolled in the Fast
     Track, not either standalone course, so none of these is authoritative.

       mode "enrolment" — pessimistic, clock runs from purchase
       mode "project"   — optimistic, clock starts at end of coursework
       mode "unknown"   — show both, assert neither   <-- current

     Once SSDSI answers, set mode, fill in the real start date, set
     confirmed:true, and the dashboard stops hedging.
     ---------------------------------------------------------------------- */
  deadline: {
    mode: "unknown",
    days: 180,
    confirmed: false,
    enrolmentStart: "2026-04-22",
    enrolmentStartIsGuess: true,
    projectStart: null,
    extensions: {
      available: 2,
      daysEach: 90,
      note: "Two 90-day extensions are available for a per-student fee \u2014 confirmed in both the Green Belt and Black Belt course materials. Up to 180 extra days."
    },
    caveat: "SSDSI's materials give three different answers for when the 180 days start."
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
        { id: "MOD-06", n: 8,  name: "Process mapping \u2014 input map & swim lane", kind: "core", phase: "Measure", project: true, flag: "Swim lane map is a required project deliverable" },
        { id: "MOD-07", n: 9,  name: "Cause & effect matrix", kind: "core", phase: "Measure", project: true },
        { id: "MOD-08", n: 10, name: "Failure mode and effects analysis", kind: "core", phase: "Measure", project: true },
        { id: "MOD-09", n: 11, name: "Basic statistics", kind: "core", phase: "Measure" },
        { id: "MOD-10", n: 12, name: "Basic quality tools", kind: "core", phase: "Measure", flag: "First module that needs Minitab \u2014 start the 14-day trial here" },
        { id: "MOD-11", n: 13, name: "Measurement system analysis", kind: "core", phase: "Measure" },
        { id: "MOD-12", n: 14, name: "Capability analysis", kind: "core", phase: "Measure", project: true },
        { id: "MOD-13", n: 15, name: "t-tests, ANOVA and chi-squared", kind: "core", phase: "Analyze", project: true, flag: "Portal mislabels this as z-test. Also covers power & sample size, which overlaps MOD-17" },
        { id: "MOD-14", n: 16, name: "Correlation & regression analysis", kind: "core", phase: "Analyze", project: true },
        { id: "MOD-15", n: 17, name: "Controlling the process", kind: "core", phase: "Control", project: true }
      ]
    },
    {
      id: "BB",
      name: "Black Belt",
      subtitle: "Module 2 \u00b7 16 units",
      units: [
        { id: "MOD-16", n: 1,  name: "Green Belt review", kind: "review", alt: "Standalone BB Module #1" },
        { id: "MOD-17", n: 2,  name: "Power & sample size", kind: "core", phase: "Analyze", flag: "Largely covered already in MOD-13 \u2014 likely a fast one", alt: "Standalone BB Module #2" },
        { id: "MOD-18", n: 3,  name: "Introduction to DOE", kind: "core", phase: "Improve", alt: "Standalone BB Module #3" },
        { id: "MOD-19", n: 4,  name: "DOE statistics and concepts", kind: "core", phase: "Improve", alt: "Standalone BB Module #4" },
        { id: "MOD-20", n: 5,  name: "Full factorial DOE", kind: "core", phase: "Improve", alt: "Standalone BB Module #5" },
        { id: "MOD-21", n: 6,  name: "Full factorial DOE exercise", kind: "exercise", phase: "Improve", alt: "Standalone BB Module #6" },
        { id: "MOD-22", n: 7,  name: "Fractional factorial DOE", kind: "core", phase: "Improve", alt: "Standalone BB Module #7" },
        { id: "MOD-23", n: 8,  name: "Non-parametric data", kind: "core", phase: "Analyze", alt: "Standalone BB Module #8" },
        { id: "MOD-24", n: 9,  name: "Advanced regression", kind: "core", phase: "Improve", alt: "Standalone BB Module #9" },
        { id: "MOD-25", n: 10, name: "Waste (muda) elimination", kind: "core", phase: "Improve", alt: "Standalone BB Module #10" },
        { id: "MOD-26", n: 11, name: "Value stream mapping", kind: "core", phase: "Improve", project: true, alt: "Standalone BB Module #11" },
        { id: "MOD-27", n: 12, name: "Flow and TAKT time", kind: "core", phase: "Improve", alt: "Standalone BB Module #12" },
        { id: "MOD-28", n: 13, name: "Pull and Kanban", kind: "core", phase: "Control", alt: "Standalone BB Module #13" },
        { id: "MOD-29", n: 14, name: "5S (visual management)", kind: "core", phase: "Control", alt: "Standalone BB Module #14" },
        { id: "MOD-30", n: 15, name: "Implementation & control plan", kind: "core", phase: "Control", project: true, alt: "Standalone BB Module #15" },
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
