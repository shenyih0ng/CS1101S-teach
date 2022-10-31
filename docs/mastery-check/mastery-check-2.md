---
id: mastery-check-2
title: Mastery Check 2
---

## Topics Tested

1. Environment model
2. Memoization
3. Streams

> Topics from [Mastery Check 1](/mastery-check/mastery-check-1#topics-tested) will definitely be talked about as well!

## What's going to happen?

**You know the [drill](/mastery-check/mastery-check-1#whats-going-to-happen)**

## Environment Model 🌲

```javascript
function hoo(s) {
  return is_null(s) ? 0 : head(s) + hoo(stream_tail(s));
}

function foo(lst) {
  let x = 43;

  function boo(x) {
    x = x + 1;
    return x + x;
  }

  function hoo(y) {
    return x + y;
  }

  return is_null(lst) ? null : pair(boo(hoo(head(lst))), () => foo(tail(lst)));
}

const ray = foo(list(1, 2, 3, 4));
hoo(ray);
```

### Questions

> Exclude the global environment for the questions below

1. How many frames are created in the execution of the program?
2. How many functions objects are created in the execution of the program?
3. How many `pairs` are created in the execution of the program?

## Memoization 🧠

With the knowledge of memoization, it is time we show some love to `tower_of_hanoi` introduced in [Studio 4](/studio-4#tower-of-hanoi-).

### Q1: Can I memoize `tower_of_hanoi`?

Explain why you can/cannot memoize the `tower_of_hanoi` function?

### Q2: Implement `memoized_tower_of_hanoi`

If your answer to Q1 is a _yes_, implement a memoized version of the function `tower_of_hanoi`:

```javascript
// Returns the number of moves needed to move n discs from src -> tar
function memoized_tower_of_hanoi(n, src, tar, aux) {
  // TBI
}

// This should run ⚡️ fast
memoized_tower_of_hanoi(100, 1, 3, 2);
```

## Streams 🌊

The utility of streams is to introduce laziness and deplayed operations. This is particularly helpful for computing long and expensive sequences, since we adhering the principle of _"evaluating it only when I need it"_.

Recall the `permutations` function that was introduced in [Studio 6](/studio-6#permutationslst). No doubt it is a (_very_) long and expensive process, therefore, now equipped with the knowledge of **streams**, we can make a **stream of permutations** and use laziness to our advantage.

### Q1: Implement `stream_permutations`

Implement the function `stream_permutations` that takes in a **finite** stream of elements and returns **a stream of streams**. This means that each possible permutation is represented by a stream, stored in a (outer) stream 😅

> The order of permutations is up to you, as long you have all of them in your stream.

```javascript
// Function Signature (assume elements are int)
// Stream[Int] -> Stream[Stream[Int]]
function stream_permutations(s) {
  // TBI
}

const elements = list(1, 2, 3);
const elements_stream = list_to_stream(elements);
const permutations = stream_permutations(elements_stream);

const first_permutations = eval_stream(head(permutations), 3); // [X, [Y, [Z, null]]]
```

:::info
Useful functions:

1. `list_to_stream` (pre-declared)
2. `stream_remove` (pre-declared)
3. `stream_append_pickle` (Studio 11 In-class)
   :::

### Q2: `eval_stream_of_streams`

Implement the function `eval_stream_of_streams` to evaluate a stream of streams. The behavior should be similar to `eval_stream`, but since we are dealing with stream of streams, our function signature would be a little different:

```javascript
// n: force evaluate the first n elements of ss
// m: force evaluate the first m elements in each of n elements of ss
function eval_stream_of_streams(ss, n, m) {
  // TBI
}

const elements = list(1, 2, 3);
const elements_stream = list_to_stream(elements);
const permutations = stream_permutations(elements_stream);

// Returns you all the permutations of list(1,2,3) in the form of List[List[int]]
// Since we know the number of permutations = 3! = 6
// and each permutations has length = 3
eval_stream_of_streams(permutations, 6, 3);
```
