# Repro of JSON escaping issue in Astro DB

There seems to be a bug with JSON fields in Astro DB, leading to results being double escaped.

This is a minimal repro showing the behavior of `sql`, `.select()`, and a combination of the two.
