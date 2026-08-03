/* ==========================================================================
   CURRICULUM — the IASSC Certified Lean Six Sigma Black Belt body of knowledge.
   This file is STATIC. Do not edit it during study sessions.
   Every topic here maps to one line item in the official ICBB BOK.
   ========================================================================== */

window.ICBB_CURRICULUM = {
  exam: {
    name: "IASSC Certified Lean Six Sigma Black Belt (ICBB)",
    questions: 150,
    minutes: 240,
    closedBook: true
  },

  phases: [
    {
      id: "D",
      name: "Define",
      weight: 15,
      groups: [
        {
          name: "The Basics of Six Sigma",
          topics: [
            { id: "D-01", name: "Meanings of Six Sigma" },
            { id: "D-02", name: "History of Six Sigma & continuous improvement" },
            { id: "D-03", name: "Deliverables of a Lean Six Sigma project" },
            { id: "D-04", name: "Problem-solving strategy Y = f(x)" },
            { id: "D-05", name: "Voice of the customer, business & employee" }
          ]
        },
        {
          name: "The Fundamentals of Six Sigma",
          topics: [
            { id: "D-06", name: "Defining a process" },
            { id: "D-07", name: "Critical to Quality characteristics (CTQ)" },
            { id: "D-08", name: "Cost of Poor Quality (COPQ)" },
            { id: "D-09", name: "Pareto analysis (80:20 rule)" },
            { id: "D-10", name: "Basic Six Sigma metrics — DPU, DPMO, RTY, sigma level" }
          ]
        },
        {
          name: "Selecting Lean Six Sigma Projects",
          topics: [
            { id: "D-11", name: "Business case & project charter" },
            { id: "D-12", name: "Developing project metrics" },
            { id: "D-13", name: "Financial evaluation & benefits capture" }
          ]
        },
        {
          name: "The Lean Enterprise",
          topics: [
            { id: "D-14", name: "Understanding Lean & its history" },
            { id: "D-15", name: "Lean and Six Sigma together" },
            { id: "D-16", name: "The seven elements of waste" },
            { id: "D-17", name: "5S" }
          ]
        }
      ]
    },

    {
      id: "M",
      name: "Measure",
      weight: 20,
      groups: [
        {
          name: "Process Definition",
          topics: [
            { id: "M-01", name: "Cause & effect / fishbone diagrams" },
            { id: "M-02", name: "Process mapping & SIPOC" },
            { id: "M-03", name: "X-Y diagram (cause & effect matrix)" },
            { id: "M-04", name: "Failure Modes & Effects Analysis (FMEA)" }
          ]
        },
        {
          name: "Six Sigma Statistics",
          topics: [
            { id: "M-05", name: "Basic statistics" },
            { id: "M-06", name: "Descriptive statistics" },
            { id: "M-07", name: "Normal distribution & normality testing" },
            { id: "M-08", name: "Graphical analysis" }
          ]
        },
        {
          name: "Measurement System Analysis",
          topics: [
            { id: "M-09", name: "Precision & accuracy" },
            { id: "M-10", name: "Bias, linearity & stability" },
            { id: "M-11", name: "Gage repeatability & reproducibility" },
            { id: "M-12", name: "Variable & attribute MSA" }
          ]
        },
        {
          name: "Process Capability",
          topics: [
            { id: "M-13", name: "Capability analysis — Cp, Cpk, Pp, Ppk" },
            { id: "M-14", name: "The concept of stability" },
            { id: "M-15", name: "Attribute & discrete capability" },
            { id: "M-16", name: "Monitoring techniques" }
          ]
        }
      ]
    },

    {
      id: "A",
      name: "Analyze",
      weight: 20,
      groups: [
        {
          name: "Patterns of Variation",
          topics: [
            { id: "A-01", name: "Multi-vari analysis" },
            { id: "A-02", name: "Classes of distributions" }
          ]
        },
        {
          name: "Inferential Statistics",
          topics: [
            { id: "A-03", name: "Understanding inference" },
            { id: "A-04", name: "Sampling techniques & uses" },
            { id: "A-05", name: "Central limit theorem" }
          ]
        },
        {
          name: "Hypothesis Testing",
          topics: [
            { id: "A-06", name: "Goals of hypothesis testing" },
            { id: "A-07", name: "Statistical vs. practical significance" },
            { id: "A-08", name: "Risk — alpha & beta" },
            { id: "A-09", name: "Choosing the right hypothesis test" }
          ]
        },
        {
          name: "Hypothesis Testing — Normal Data",
          topics: [
            { id: "A-10", name: "1 & 2 sample t-tests" },
            { id: "A-11", name: "1 sample variance" },
            { id: "A-12", name: "One-way ANOVA" }
          ]
        },
        {
          name: "Hypothesis Testing — Non-Normal Data",
          topics: [
            { id: "A-13", name: "Mann-Whitney & Kruskal-Wallis" },
            { id: "A-14", name: "Mood's median & Friedman" },
            { id: "A-15", name: "1 sample sign & 1 sample Wilcoxon" },
            { id: "A-16", name: "One & two sample proportion" },
            { id: "A-17", name: "Chi-squared & contingency tables" },
            { id: "A-18", name: "Test of equal variances" }
          ]
        }
      ]
    },

    {
      id: "I",
      name: "Improve",
      weight: 25,
      groups: [
        {
          name: "Simple Linear Regression",
          topics: [
            { id: "I-01", name: "Correlation" },
            { id: "I-02", name: "Regression equations" },
            { id: "I-03", name: "Residuals analysis — simple" }
          ]
        },
        {
          name: "Multiple Regression Analysis",
          topics: [
            { id: "I-04", name: "Non-linear regression" },
            { id: "I-05", name: "Multiple linear regression" },
            { id: "I-06", name: "Confidence & prediction intervals" },
            { id: "I-07", name: "Residuals analysis — multiple" },
            { id: "I-08", name: "Data transformation & Box-Cox" },
            { id: "I-09", name: "Stepwise regression" },
            { id: "I-10", name: "Logistic regression" }
          ]
        },
        {
          name: "Designed Experiments",
          topics: [
            { id: "I-11", name: "Experiment objectives" },
            { id: "I-12", name: "Experimental methods" },
            { id: "I-13", name: "DOE design considerations" }
          ]
        },
        {
          name: "Full Factorial Experiments",
          topics: [
            { id: "I-14", name: "2^k full factorial designs" },
            { id: "I-15", name: "Linear & quadratic mathematical models" },
            { id: "I-16", name: "Balanced & orthogonal designs" },
            { id: "I-17", name: "Fit, diagnostics & centre points" }
          ]
        },
        {
          name: "Fractional Factorial Experiments",
          topics: [
            { id: "I-18", name: "Fractional factorial designs" },
            { id: "I-19", name: "Confounding effects" },
            { id: "I-20", name: "Experimental resolution" }
          ]
        }
      ]
    },

    {
      id: "C",
      name: "Control",
      weight: 20,
      groups: [
        {
          name: "Lean Controls",
          topics: [
            { id: "C-01", name: "Control methods for 5S" },
            { id: "C-02", name: "Kanban" },
            { id: "C-03", name: "Poka-yoke" }
          ]
        },
        {
          name: "Statistical Process Control",
          topics: [
            { id: "C-04", name: "Data collection for SPC" },
            { id: "C-05", name: "I-MR chart" },
            { id: "C-06", name: "Xbar-R chart" },
            { id: "C-07", name: "X-S chart" },
            { id: "C-08", name: "U chart" },
            { id: "C-09", name: "P chart" },
            { id: "C-10", name: "NP chart" },
            { id: "C-11", name: "CuSum chart" },
            { id: "C-12", name: "EWMA chart" },
            { id: "C-13", name: "Control chart anatomy" },
            { id: "C-14", name: "Subgroups, variation & sampling" },
            { id: "C-15", name: "Centre line & control limit calculations" },
            { id: "C-16", name: "Selecting the right control chart" }
          ]
        },
        {
          name: "Six Sigma Control Plans",
          topics: [
            { id: "C-17", name: "Cost benefit analysis" },
            { id: "C-18", name: "Elements of the control plan" },
            { id: "C-19", name: "Elements of the response plan" }
          ]
        }
      ]
    }
  ],

  /* Score meanings. Claude assigns these during debrief — never self-reported. */
  scale: [
    { score: 0, label: "Untouched", note: "Not studied yet." },
    { score: 1, label: "Read", note: "Seen it, cannot explain it unaided." },
    { score: 2, label: "Explained", note: "Can explain it, shaky on when to apply it." },
    { score: 3, label: "Applied", note: "Can explain it and choose it correctly in a scenario." }
  ]
};
