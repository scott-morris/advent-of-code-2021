# Advent of Code 2021 - Day 9

## Part 1

Another 2-dimensional array / matrix problem. I'm beginning to feel like I should start writing some matrix helper functions like I did with `src/helpers/math.js`. It would be helpful because I keep making the stupid mistakes of transposing my logic (thinking in `x,y` when a 2 dimensional array is referenced as `[y][x]`).

Through a couple rounds of stepping through the code with breakpoints, I got it. 

## Part 2

This part is a little trickier. I think I can reuse some of the logic from part 1, but with modifications. I can identify the basins starting from the low points. Instead of needing to know the value of the low point, I need to know the `x,y` coordinates so I can start branching out from there.

And in this part, the values of the coordinates don't matter -- just the number of coords that make up the basin, so I don't need to track the values, just the coords. I think I'll modify the `getLowPoints()` function in `part1.js` to return both the value and the coordinates and just call it for both parts.

I got something that works on the test data, but just hangs on the real input data. I guess my recursive search is still too loosely optimized. ---

Ok, I put the recursive function inside a closure where I could keep a shared "seen" Set. After a little tweaking based on what I didn't know about the JS `Set()` implementation, got it working.

## Other Thoughts

I really want to add some documentation that describes the code itself, maybe with some sort of walkthrough. Ideally, I'd like to try out a tool like [CodeHike](https://github.com/code-hike/codehike#how-to-set-up-code-hike) to see how it works and what kinds of cool things I could do with it.