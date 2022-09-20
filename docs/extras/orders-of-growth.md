---
id: orders-of-growth
title: Orders of Growth
---

:::caution
We will only be focusing on **run time** complexity below
:::

## What exactly is Big O/Ω/Θ 🤔

When we talk about orders of growth, we are usually dealing with a set of specific **asymptotic** notations. Because it is asymptotic, we are not interested in the precise calculation of how fast/efficient is a particular algorithm/function. Instead we are more interested in general behaviour of algorithms when its **arguments grows towards a specific value or infinity**.

Let's take the function `foo(x)` as a example. When analyzing the order of growth of `foo`, we are essentially asking ourselves:

**_How will the run time of `foo(x)` be affected with respect to `x` when `x` changes (e.g increase in size/length, increase in magntitude)?_**

To be more rigorous, the above question can then be split into 3 more specific questions:

_What is a runtime with respect to `x` that..._
1. `foo(x)` cannot never exceed?
2. `foo(x)` will never be able to beat (faster than)?
3. `foo(x)` is tightly bounded by?

These 3 questions in turn actually forms the general intuition behind the notations of Big O, Ω and Θ respectively.

:::tip
The following sections will not go through the precise mathematical definition of the various asymptotic notations. Instead it focus on building the intuition on what it means. Please refer back to the lecture notes for all the math.

The wiki page https://en.wikipedia.org/wiki/Big_O_notation is good too!
:::

### Big O

> What is the runtime with respect to `x` that `foo(x)` cannot never exceed?

To put it simply, Big O represents a upper bound of the order of growth/time complexity of a function.

**Suppose $f(x)$ represents the function/algorithm, then when we say that $f(x)$ has a Big O of $x^2$, it can be represented as $f(x) = O(x^2)$.** Further translating this into english, it would mean that the growth of the run time of $f(x)$ is proportional to _something_ (can't find a good word) much slower growing than $x^2$.

> The (incomplete) math equivalent: $f(x) < k(x^2)$ where $k$ is a constant

Note that we can also let $g(x) = x^2$, and have more general problem statement: **Find a $g(x)$ such that $f(x) = O(g(x))$**

> $g(x)$ is also sometimes called the comparsion function

**In fact there can be multiple valid comparsion functions that can be the Big O for a specific algorithm. Taking the example above, all functions that are Big O of $x^2$ is also the Big O of $f(x)$.**

For example, $x^2 = O(x^3)$, therefore $f(x) = O(x^3)$ is also accurate

Additionally, do note that $x^2 = O(x^2)$ is accurate as well! (this is related to the precise mathematical definition of Big O)

### Big Ω

> What is the runtime with respect to `x` that `foo(x)` will never be able to beat (faster than)?

Big Ω in many ways is just the inverse of Big O, where we are looking at the lower bound of the order of growth/time complexity of a function.

Similarly, there can be multiple valid comparsion functions that can be the Big Ω for a specific algorithm.

For example, if **$f(x) = Ω(x)$, then $f(x) = Ω(log(x))$**

Same as above, $x = Ω(x)$ is valid! (refer to the precise mathematical definition of Big Ω)

### Big Θ

> What is the runtime with respect to `x` that `foo(x)` is tightly bounded by?

After looking at the upper and lower bound, Big Θ focuses on the "tight" bound. To understand Big Θ, we need to focus closely on the relationship between comparsion functions and the actual function that represents the algorithm.

**Suppose we still have $f(x)$ represent our function/algorithm, then finding the Big Θ is the same as finding what is a $g(x)$ (a comparsion function) such that $k_1(g(x)) \leq f(x) \leq k_2(g(x))$ where $k_1$ and $k_2$ are constants.**

> Note that the $g(x)$ on both sides represents the same comparison function

**Therefore, if $f(x) \leq k_2(x^2)$ and $k_1(x) \leq f(x)$, then it is unclear as to what the Big Θ of $f(x)$ really is*!** On the other hand, if we have $f(x) \leq k_2(x)$ and $k_1(x) \leq f(x)$, then we can say that $f(x) = Θ(x)$.

## Recurrence Relations

After talking about what these notations mean, what good is there if we do not have a way to calculate it?

> Note that in the context of CS1101S, we are interested in the Big Θ / tight bound of a function. This is so that you can't say the time complexity of a binary search = $O(n!)$ and expect it to be accepted. Nothing is wrong with that equality but it misses the point.

A good way to calculate the order of growth / time complexity is using the idea of recurrence relations. To put it in simple terms, it is the calculation of **Total work done** where **Total work done = Work done now + Work done later**. 

**Work done now** often means what is amount of work, or more specifically how many operations will be executed in the current call of the function. **Work done later** is usually used to represent the number of operations for your recursive calls. 

> When we talk about the number of operations we are still measuring it with respect to the arguments of the function.

### Examples

#### Length of a `list`

```javascript
function length(lst) {
    return is_null(lst)
            ? 0
            : 1 + tail(lst);
}
```

Representing it in recurrence relation,

$T(n) = 1 + T(n-1)$ where $n$ is the length of the given list

Expanding it,

$$
T(n) = 1 + T(n-1)\\
T(n) = 1 + 1 + T(n-2)\\
\vdots\\
T(n) = 1 * n = n
$$

Therefore, we can conclude that time complexity of `length` is $Θ(n)$.

#### Tower of Hanoi 🗼

```javascript
function tower_of_hanoi (n, src, tar, aux) {
    return n === 0
            ? 0
            : n === 1
            ? 1
            : tower_of_hanoi(n-1, src, aux, tar) + 
              1 + 
              tower_of_hanoi(n-1, aux, tar, src);
}
```

> More details [here](/studio-4#tower-of-hanoi-)

Representing it in recurrence relation,

$T(n) = 1 + T(n-1) + T(n-1)$ where $n$ is the number of the rods

Expanding it,

$$
T(n) = 1 + T(n-1) + T(n-1)\\
T(n) = 1 + (1 + T(n-2) + T(n-2)) + (1 + T(n-2) + T(n-2))\\
\vdots\\
T(n) = 2^n
$$

Therefore, we can conclude that time complexity of `tower_of_hanoi` is $Θ(2^n)$.

:::info
These are very trivial and well defined functions, it is merely used as simple examples. Do practice using recurrence relations when solving PYP papers, there are better questions in there!
:::
