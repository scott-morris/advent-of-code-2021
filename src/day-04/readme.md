# Advent of Code 2021 - Day 4
*(from Day 8 perspective)*

## Part 1

This is the first challenge that has more complicated input than just arrays. Let's extend the template to include a separate section to ensure that I'm consuming the data correctly. It's also the first time it's been helpful to create a `common.js` to handle the standard stuff.

## Part 2

This one got me stuck a bit. I'm always glad for the examples because I didn't quite understand what number they were looking for. I thought they wanted to know when the next-to-last card would win, leaving one as the loser -- but they wanted to know when that last card would finally win.

Speaking of which, I'm doing all of this as loose TDD. I want to make sure that all of my unit tests pass before even trying to submit an answer, especially for days like this.
