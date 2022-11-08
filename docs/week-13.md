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

<details><summary><b>Answers</b></summary>

We can actually make use of **stream formulation** to create a `n_bonacci` stream. The intuition lies in how we can make use of a `n_bonacci(n-1)` stream to form a `n_bonacci(n)` stream.

**The first `n` number of a `n_bonacci(n)` stream can always be found in the `n_bonacci(n-1)` stream.**

```javascript
function add_streams(s1, s2) {
  return is_null(s1)
    ? s2
    : is_null(s2)
    ? s1
    : pair(head(s1) + head(s2), () =>
        add_streams(stream_tail(s1), stream_tail(s2))
      );
}

function add_n_streams(streams) {
  return accumulate((curr, acc) => add_streams(acc, curr), null, streams);
}

function take_n_and_replace(stream, n, replace_stream) {
  return n <= 1
    ? pair(head(stream), replace_stream)
    : pair(head(stream), () =>
        take_n_and_replace(stream_tail(stream), n - 1, replace_stream)
      );
}

const fibonacci_stream = pair(0, () =>
  pair(1, () => add_streams(fibonacci_stream, stream_tail(fibonacci_stream)))
);

function n_bonacci(n) {
  function helper(stream, count) {
    return count <= 1
      ? pair(stream, null)
      : pair(stream, helper(stream_tail(stream), count - 1));
  }

  if (n === 2) {
    return fibonacci_stream;
  } else {
    const n_minus_one_bonacci = n_bonacci(n - 1);
    const start = take_n_and_replace(n_minus_one_bonacci, n, () =>
      add_n_streams(helper(start, n))
    );
    return start;
  }
}
```

</details>

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

<details><summary><b>Answers</b></summary>

```javascript
function find_num_paths_helper(x, y) {
  if (x === 0 || y === 0) {
    return 1;
  } else {
    return find_num_paths_helper(x - 1, y) + find_num_paths_helper(x, y - 1);
  }
}

function find_num_paths(checkpoints) {
  if (is_null(tail(checkpoints))) {
    return 1;
  } else {
    const point_A = head(checkpoints);
    const point_B = head(tail(checkpoints));
    const normalized = pair(
      head(point_B) - head(point_A),
      tail(point_B) - tail(point_A)
    );

    return (
      find_num_paths_helper(head(normalized), tail(normalized)) *
      find_num_paths(tail(checkpoints))
    );
  }
}
```

</details>

#### Part 2

**Can we memoize `find_num_paths`? If no, why? If yes, why?**

<details><summary><b>Answers</b></summary>

```javascript
const mem = [];

function read(n, k) {
  return mem[n] === undefined ? undefined : mem[n][k];
}

function write(n, k, value) {
  if (mem[n] === undefined) {
    mem[n] = [];
  }
  mem[n][k] = value;
}

function find_num_paths_helper(x, y) {
  if (x === 0 || y === 0) {
    return 1;
  } else if (!is_undefined(read(x, y))) {
    return read(x, y);
  } else {
    const result =
      find_num_paths_helper(x - 1, y) + find_num_paths_helper(x, y - 1);
    write(x, y, result);

    return result;
  }
}

function find_num_paths(checkpoints) {
  if (is_null(tail(checkpoints))) {
    return 1;
  } else {
    const point_A = head(checkpoints);
    const point_B = head(tail(checkpoints));
    const normalized = pair(
      head(point_B) - head(point_A),
      tail(point_B) - tail(point_A)
    );

    return (
      find_num_paths_helper(head(normalized), tail(normalized)) *
      find_num_paths(tail(checkpoints))
    );
  }
}
```

</details>
