# Fast Track

Study tracker for the SSDSI Lean Six Sigma Black Belt Fast Track.

## The loop

1. **Before a block** — open Claude Code in this folder, say `brief me`.
2. **Study for an hour.**
3. **After the block** — say `debrief me`. Claude quizzes you, scores each unit,
   writes the session to `data/log.js`, sets up the next block, and pushes.
4. **Open the dashboard** any time to see where you stand.

You never edit anything by hand.

## Three gates, in order

1. **Coursework** — 33 units, about 10 hours of video.
2. **SSDSI exam** — 50 questions, 80% to pass, two attempts only.
3. **Black Belt project** — roughly 40 hours, solo, cannot start until the exam is passed.

All three inside a 180-day window. **When that window starts is unresolved** —
SSDSI's product page implies it runs from the project, their milestone text implies
enrolment. The dashboard shows both until they confirm. Once they do, set
`deadline.mode` and `confirmed` in `data/curriculum.js`.

## Scores

Claude assigns these from the debrief. Not self-reported.

| | |
|---|---|
| 0 | Untouched |
| 1 | Watched it, cannot explain it unaided |
| 2 | Can explain it, shaky on when to apply it |
| 3 | Can explain it and choose it correctly in a scenario |

Only a 3 counts.

## The chart

Session history plots as an **I-chart** — the individuals control chart from
Module 15. Centre line is your average; dashed limits are the mean plus or minus
2.66 times the average moving range. A point outside them means something unusual
happened in that block.

## Viewing it

Open `index.html` in a browser. No server needed. Also works on GitHub Pages.
