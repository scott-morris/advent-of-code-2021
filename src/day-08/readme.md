# Advent of Code 2021 - Day 8
*(from Day 8 perspective)*

## Part 1

This wasn't so bad - it's a simple count of the number of strings of certain lengths. I like the premise, though.

## Part 2

This one... this one took a while. It took a good bit of thought to be able to translate the segments to variables, then variables to the potential for segments and then using those values to translate to an LCD and then a digit again.

It reminded me of working with a 7-segment LCD in college with NAND gates - and not only do we need to turn on/off multiple segments to translate to a digit, but also need to deal with possibilities.. so I get to pull out some esoteric bitwise JavaScript functionality.

I was hoping that the data they were giving would make the logic puzzle straightforward, but there was a bit of trial-and-error that needed to go into it. It was a beast to figure out and needed a bunch of unit tests and stepping through the code to figure out what was going on, but finally got it working.

I could probably clean this up a bit like I have done for most of these after the fact, but I'm done looking at this one for a while.
