---
id: studio-13
title: Studio 13 (The Final Studio)
---

## Extra Questions

### Q1: `n_bonacci(n)`

> Adapted from my tutor back in AY21/22, Zhi Hao :)

We've mentioned the `fib` function countless times throughout these 12 weeks. Be it recursive or iterative, you guys can implement it. Therefore, let's take it up a notch!

**Implement the `n_bonacci(n)` function such that `n_bonacci(2)` returns the fibonacci stream and `n_bonacci(3)` returns a tribonacci stream and so on. You can assume that all inputs will be `>=2`.**

:::info
**Fibonacci Sequence:** `n = 2`

**`0 1 1 2 3 5 8 13`**

**Tribonacci Sequence:** `n = 3`

**`0 1 1 2 4 7 13 24`**

**Fourbonacci Sequence:** `n = 4`

**`0 1 1 2 4 8 15 29`**
:::

```javascript
/**
 * You can also consider implementing a `n_bonacci(n, k)` first to get a feel of how it works!
 * `n_bonacci(n, k)` gives you the kth element of a n_bonacci sequence
 **/
function n_bonacci(n) {
  // TBI
}

eval_stream(n_bonacci(2), 5); // first 5 terms of the fibonacci series
eval_stream(n_bonacci(3), 10); // first 10 terms of the tribonacci series
```

:::tip
Are you able to make use of `n_bonacci(n-1)`?
:::

<details><summary><b>Answers</b></summary></details>

### Q2: `find_num_paths(checkpoints)`

Every point on a grid has a `X-Y` coordinate, which we will represent as a `pair`. Being a CS student, you will like to know how many possible paths there are from a chosen point to another. However, equipped with the knowledge in CS1101S, you think that is too simple of a problem, therefore you will also like to find out how many possible paths there are to get from one point to another, while clearing a **set of checkpoints** in between.

#### Part 1

**Implement the `find_num_paths(checkpoints)` functions such that it returns the total number of possible ways to get from the first to the last checkpoint while also visiting the checkpoints in between. To make things simpler, you will assume that the only valid moves are ➡️ (East) and ⬆️ (North).**

```javascript
function find_num_paths(checkpoints) {
  // TBI
}

const checkpoints_1 = list(pair(0, 0), pair(4, 6));
find_num_paths(checkpoints_1); // 210

const checkpoints_2 = list(pair(0, 0), pair(2, 3), pair(4, 6));
find_num_paths(checkpoints_2); // 100
```

<details><summary><b>Answers</b></summary></details>

#### Part 2

**Can we memoize `find_num_paths`? If no, why? If yes, why?**

<details><summary><b>Answers</b></summary></details>
