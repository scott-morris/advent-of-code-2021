# Advent of Code 2021 - Day 6
*(from Day 8 perspective)*

## Part 1

This is a fun little simulation to run. We just need to have the current status and a way to simulate one day.

## Part 2

Ok, here's where it starts to get hard. My original algorithm doesn't scale up to 256. It starts throwing memory errors.

It took a while to rethink how to do this. I remember thinking about chunking these up and processing them, but then thinking that there should be a mathmatical model for that. I did some reading on exponential mathmatical formulas and how to figure out the curve based on population growth of the first 80 days and then extrapolating it out to 256 days.

I couldn't quite wrap my brain around that math, and then inspiration struck. We don't need to know the order of the fish; we just need to know the total number of fish - so I can maintain an Array(9) that has the total number of fish with timers between `0 - 8`.

Once I realized I could manage it that way, it was pretty straightforward; I can even just shift the value off the front and not need to manually countdown the values.
