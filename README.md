# ICBB Track

Study tracker for the IASSC Certified Lean Six Sigma Black Belt exam.

## How it works

1. **Before a block** — open Claude Code in this folder, say `brief me`.
2. **Study for an hour.**
3. **After the block** — say `debrief me`. Claude quizzes you, scores each topic,
   writes the session to `data/log.js`, sets up the next block, and pushes.
4. **Look at the dashboard** any time to see where you stand.

You never edit anything by hand. Claude Code does the writing.

## Scores

Claude assigns these from the debrief. They are not self-reported.

| | |
|---|---|
| 0 | Untouched |
| 1 | Read it, cannot explain it unaided |
| 2 | Can explain it, shaky on when to apply it |
| 3 | Can explain it and choose it correctly in a scenario |

Only a 3 counts toward exam coverage.

## The chart

Session history is plotted as an **I-chart** — the individuals control chart from
the Control phase of the exam. Centre line is your average; the dashed limits are
the mean plus or minus 2.66 times the average moving range. A point outside them
means something unusual happened in that block, good or bad.

## Viewing it

Live at GitHub Pages once enabled. Locally, just open `index.html` in a browser —
no server needed.
