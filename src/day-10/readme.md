# Advent of Code 2021 - Day 10

## Part 1


## Part 2


## Other Thoughts

I want to start documenting some of my takeaways / lessons learned as I go.

## Takeaways:

* Make sure you read and re-read the instructions. For part 1, I was removing the corrupted lines when it was asking me to evaluate ONLY the corrupted lines.
* When closing the brackets, I forgot to `.reverse()` the array first. Whoops. I guess that's why they made the calculation not work both ways.
* Weird errors usually mean trouble. When getting the stack overflow error, I pulled out the timer function instead of finding out why it was overflowing, and that's when I got the wrong answer.
* Challenge assumptions. My original answer was wrong because I didn't account that one of my strings may not actually be incomplete, so it was messing with my median calculation.