# Repro of JSON escaping issue in Astro DB

There seems to be a bug with JSON fields in Astro DB, leading to results being double escaped.

This is a minimal repro showing the behavior of `sql`, `.select()`, and a combination of the two.

The DB setup is in `./db/config.ts` and `./db/seed.ts`, and the repro queries are in `./src/pages/index.astro`. Expected results are listed at the bottom of `./src/pages/index.astro` as well.

Run locally to see the issue.
