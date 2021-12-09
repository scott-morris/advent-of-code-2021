# Advent of Code 2021 - Day 7

## Part 1

After the memory issues from yesterday, I started thinking optimization at the outset. I didn't want to even try to brute force this one, but I also realized that I probably couldn't zero in on the exact value, so let's think about distribution.

I figured I could figure out where to look, then do a search of +/- a single standard deviation. I don't need to know what the index is or anything, just what the value is, so I can just take the minimum of those results.

## Part 2

Ok, so now it's not just optimizing for moving the fewest items, but we really need to think about how much they have to move. For every extra spot, it gets so much more expensive. We used the `mode` for part 1 so that the fewest would need to move, but let's look at the `median` to keep it cheap, but still doing the standard deviation variance.
