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
    "MOD-05": { s: 2, last: "2026-08-06", seen: ["2026-08-06"] },
    "MOD-06": { s: 2, last: "2026-08-06", seen: ["2026-08-06"] },
    "MOD-07": { s: 3, last: "2026-08-07", seen: ["2026-08-07"] },
    "MOD-08": { s: 3, last: "2026-08-10", seen: ["2026-08-10"] },
    "MOD-09": { s: 2, last: "2026-08-11", seen: ["2026-08-11"] },
    "MOD-10": { s: 3, last: "2026-08-11", seen: ["2026-08-11"] },
    "MOD-11": { s: 3, last: "2026-08-15", seen: ["2026-08-15"] },
    "MOD-12": { s: 3, last: "2026-08-16", seen: ["2026-08-16"] },
    "MOD-13": { s: 3, last: "2026-08-18", seen: ["2026-08-18"] },
    "MOD-14": { s: 2, last: "2026-08-18", seen: ["2026-08-18"] }
  },

  /* Milestone status: "todo" | "active" | "done" */
  milestones: {
    coursework: { status: "active", note: "16 of 33 units touched. MOD-14 scored 2 — R-squared interpretation took three full rounds to land (kept substituting 'individual data points' for 'dataset variation'), same shape as MOD-09's mean+3SD struggle. R² is load-bearing for DoE modules ahead. Fourth block in a row where new material was taken over the stalled backlog: MOD-03/MOD-04 now 14 days stalled, MOD-05/MOD-06 12 days, MOD-09 7 days." },
    exam:       { status: "todo",   note: "Locked until the coursework is done. Two attempts only." },
    project:    { status: "todo",   note: "Locked until the exam is passed. Scope it early anyway." }
  },

  /* What to do in the next one-hour block. */
  plan: {
    nextUp: ["MOD-03", "MOD-04"],
    note: "STALLED 14+ DAYS, fourth block this has been flagged and deferred. Green Belt content finishes at MOD-15 — after that, this backlog either gets cleared or it rides all the way into Black Belt material and the exam. MOD-03/MOD-04 (charter scope-vs-SIPOC, red-input strategy), MOD-05/MOD-06 (TAKT time, Gemba risk), and MOD-09 (mean/median, mean+3SD) are all still open."
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
    },
    {
      n: 5,
      date: "2026-08-06",
      minutes: 15,
      title: "Process Mapping — Input Map & Swim Lane",
      notes: "Uneven. Correctly explained why an operator/reviewer can never be marked 'Controlled' (control the process, not the person) after one prompt. Real gap on the Gemba question: circled the same point three times without ever naming the actual risk of skipping it (documented process vs. actual process — mapping from SOPs alone risks missing real, undocumented inputs); had to be told the answer outright. Recovered cleanly on SIPOC-vs-swim-lane distinction, first try, no correction needed.",
      units: [
        { id: "MOD-06", from: 0, to: 2 }
      ]
    },
    {
      n: 6,
      date: "2026-08-07",
      minutes: 15,
      title: "Cause & Effect Matrix",
      notes: "First block to break the streak. One prompt needed to get the full answer on what C&E adds beyond the Input Map (priority ranking + correlation scoring + weighted-total math), but from there it was clean: correctly computed a real weighted-total sum (9×1 + 7×9 + 4×3 = 84) without hesitation, correctly interpreted what the number means, and reasoned soundly through an unstated extension question (why not build the FMEA around every input) while honestly flagging it wasn't explicitly covered rather than bluffing.",
      units: [
        { id: "MOD-07", from: 0, to: 3 }
      ]
    },
    {
      n: 7,
      date: "2026-08-10",
      minutes: 15,
      title: "FMEA",
      notes: "Clean block, both application questions landed without correction. Correctly explained why a Detection score of 2 is good news, not bad (teammate had the scale backwards). Correctly reasoned RPN over raw Severity for prioritization, with real justification (a rarely-occurring, easily-caught high-severity failure can rank below a frequent, harder-to-catch low-severity one). On the FMEA-as-living-document question, honestly flagged uncertainty about whether it was covered, then reasoned to essentially the right answer (re-score after actions implemented to confirm RPN actually dropped) before being shown it was covered on Slide #3. Also started drafting the FMEA worksheet in chat against the real Social Current accreditation review process, building on the C&E Matrix's top weighted-total inputs (Submission completeness, Contact record, Submitted application) — qualitative content (failure modes/effects/causes) drafted, SEV/OCC/DET scores and current-controls detail still need his input before it's usable.",
      units: [
        { id: "MOD-08", from: 0, to: 3 }
      ]
    },
    {
      n: 8,
      date: "2026-08-11",
      minutes: 15,
      title: "Basic Statistics",
      notes: "Mixed. Q2 (mean vs. median for outlier robustness) landed cleanly with correct reasoning, no correction needed. Q1 had a real conceptual mix-up — substituted 'median' for 'sample mean' when the actual distinction being tested was population vs. sample, not mean vs. median. Q3 needed real scaffolding: named the right tool (3 standard deviations) but couldn't complete the mean+3SD calculation independently or state the conclusion until it was worked through for him (14.2 + 3×3.5 = 24.7, exceeding the 20-day target despite no individual case in the sample doing so) — the same 'small sample looks clean, statistics say otherwise' logic from the ABC Manufacturing example.",
      units: [
        { id: "MOD-09", from: 0, to: 2 }
      ]
    },
    {
      n: 9,
      date: "2026-08-11",
      minutes: 15,
      title: "Basic Quality Tools",
      notes: "Clean recovery. Q1 landed immediately with a sharp application — chaining Pareto (find the dominant cause) into a time series plot (prove the fix worked), plus correctly reasoned that a flat 10-reasons-at-10% distribution means no single easy target. Q2 needed one precision correction: had the direction right (low p-value on normality test is bad news) but the explanation was vague ('something is seriously wrong') until pushed to state the actual claim — data doesn't fit a normal distribution. Q3 clean: correctly chose box plot over time series plot for comparing turnaround across caseworkers, with correct reasoning about using the Diagnostic Report to confirm real vs. apparent differences.",
      units: [
        { id: "MOD-10", from: 0, to: 3 }
      ]
    },
    {
      n: 10,
      date: "2026-08-15",
      minutes: 15,
      title: "Measurement System Analysis",
      notes: "Solid, the stats fundamentals held up here despite MOD-09's earlier shakiness. Q1 clean and complete on the first pass — correctly distinguished precision (repeatability, same appraiser) from accuracy, and named the fix (compare against a known standard). Q2 correct on reproducibility vs. repeatability and good instinct to run a formal study to isolate caseworker-vs-process, but needed one precision correction: named generic 'Gage R&R' when the categorical compliant/non-compliant data actually calls for Attribute Agreement Analysis specifically. Q3 immediate and correct — recalled the 70-95% acceptable accuracy band without hesitation.",
      units: [
        { id: "MOD-11", from: 0, to: 3 }
      ]
    },
    {
      n: 11,
      date: "2026-08-16",
      minutes: 15,
      title: "Capability Analysis",
      notes: "Q1 clean and correct — normality check as prerequisite before Pp/Ppk formulas apply. Q2 initially rough — reached for spread/'clustering' language rather than centering to explain the Pp-vs-Ppk gap, needed two corrections on the terminology. But post-debrief he pushed back on the example itself: correctly reasoned that with mean=15.3 barely off a 15 target and constant spread, Pp and Ppk shouldn't diverge nearly as much as the quiz's invented numbers (0.87 vs 0.52) suggested. Recomputed: actual Ppk=0.75, Pp=0.79 for those inputs — nearly identical, confirming his instinct. The quiz scenario was numerically inconsistent, not his understanding. Catching that using correct centering-vs-spread reasoning is stronger evidence of mastery than a clean first-pass answer would have been. Corrected example for reference: mean=17.5 (same σ=2.1, USL=20, LSL=10) gives Pp=0.79, Ppk=0.40 — a real gap driven purely by centering.",
      units: [
        { id: "MOD-12", from: 0, to: 3 }
      ]
    },
    {
      n: 12,
      date: "2026-08-18",
      minutes: 20,
      title: "t-Tests, ANOVA, Chi-Squared",
      notes: "Correct tool selection on all three questions — 2-sample t-test, ANOVA over pairwise t-tests, Chi-Squared for two categorical variables — no hesitation on any of the three. Two wording-level corrections needed: Q1 embedded the practical significance threshold (1 day) into H0/Ha instead of using the standard equal-vs-not-equal framing; corrected cleanly on request. Q4's initial reasoning for why a t-test doesn't work was 'number of offices' rather than 'data type of the outcome variable' — corrected, then asked for the mechanism in detail and engaged with a full worked Chi-Squared example (observed vs. expected counts, χ²≈20.0, df=4, p<0.001) rather than just accepting the answer.",
      units: [
        { id: "MOD-13", from: 0, to: 3 }
      ]
    },
    {
      n: 13,
      date: "2026-08-18",
      minutes: 20,
      title: "Correlation & Regression",
      notes: "Q1 clean — correlation-not-causation landed immediately. Q3 correct on tool choice (multiple regression for two predictors, one continuous + one categorical) and asked for the mechanism rather than just accepting the answer; also missed that a separate tool (Response Optimizer) is needed on top of the regression to actually find the error-minimizing humidity level. Q2 was the real struggle: R-squared interpretation took three full rounds — kept restating it as '% of individual data points/errors' sharing a relationship with X, rather than '% of the dataset's total variation' explained by the model. Landed only after a concrete framing (scatter around the mean); then correctly extended the concept unprompted to reason that outliers would disproportionately skew R² via the squared-deviation math. Same shape as MOD-09's mean+3SD gap — a genuinely hard stats concept not sticking on first or second pass.",
      units: [
        { id: "MOD-14", from: 0, to: 2 }
      ]
    }
  ]
};
