---
id: studio-4
title: Studio 4
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS5BcaMg17Fmw8ZA2SDXocaw_g5fgXY0r3WHW6DKlJBZMmAnJEYmvXoSMqDC3GoH_2lOkzq_YRHGQq7/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to slides: https://docs.google.com/presentation/d/1Xy8MQYcVe44UzIhtdxYeIR2tCS2Rf1OlGIyNacTNw2c/edit?usp=sharing

## Studio Worksheets

1. [Studio 4 In-class Worksheet](https://drive.google.com/drive/folders/1AfCUYZ4qfngSubyRnA06Qybgj78IpxVW?usp=sharing)

## Tower of Hanoi 🗼

> Not really about Higher Order Functions but related to `pascal` in the studio worksheet

:::info
**How it works:**
1. Only one disk may be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No disk may be placed on top of a disk that is smaller than it.

https://en.wikipedia.org/wiki/Tower_of_Hanoi
:::

```javascript
/**
 * Calculates the number of steps need to move a stack of `n` discs from
 * the `source` rod to the `target` rod
 * 
 * We represent the rods with numbers
 * For example:
 *  - Source rod (src) is denoted as 0
 *  - Target rod (tar) is denoted as 2
 *  - Auxillary rod (aux) is denoted as 1
 *  - The corresponding function will be `tower_of_hanoi(n, 0, 2, 1);`
 */
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

### Explanation

- `tower_of_hanoi(n-1, src, aux, tar)`
    - Shift every disc except the largest at the bottom to the auxillary rod
- `+1`
    - Shift the larget disc to the target rod
- `tower_of_hanoi(n-1, aux, tar, src)`
    - Shift the rest of the tower that is previously in the auxillary rod to the target

> It will be helpful to see how this logic can extend up to `n` disc by looking at the simple case of 2/3 discs.

:::info
Explanation for the time complexity of the `tower_of_hanoi` can be found [here](/extras/orders-of-growth#tower-of-hanoi-)
:::

## `thrice(thrice(thrice))`

Let's first start with `thrice(thrice)` from the studio sheet and recall whats the intuition behind it.

### Interpreting `thrice(thrice)`

**The important thing to note here is that when we are dealing with HOFs, we passing around computational sequences instead of "data"/primitive values that we were so used to doing in the first few weeks.**

We know that when you call `thrice(f)(x)` where `f` is a function, we are composing a function that has a form of `f(f(f(x)))`. In simple terms, we applying the function successively for total of **three** times.

Extrapolating that, when we do a `thrice(thrice)`, we are composing a function of form `thrice(thrice(thrice...`. A additional point to note here is the function signature of `thrice(thrice)`

```javascript
// *We will assume that all inputs are Numbers

// (Number -> Number) -> Number -> Number
// |        f       |   | input | | result |
function thrice(f) {
    return compose(compose(f, f), f);
}

// ( (Number -> Number) -> Number -> Number ) -> (Number -> Number) -> Number -> Number
// |            signature of `thrice`         |  |       f        |   | input | | output |
thrice(thrice)
```
:::info
Note how `thrice` "returns" the signature of the function that is given to it. When a function of `Number -> Number` signature is passed to `thrice`, the function signature of `thrice(f)` becomes `(Number -> Number) -> Number -> Number` where `Number -> Number` (after the second `->`) is the same as the initial function signature of the function passed to `thrice`

Therefore, intuitively speaking, when we call `thrice(thrice)` we will expect the same effect, thus resulting in a signature of:
`( (Number -> Number) -> Number -> Number ) -> (Number -> Number) -> Number -> Number` where `(Number -> Number) -> Number -> Number` (after the 4th `->`) is the exact signature of `thrice`

**That is why we will need to pass `thrice(thrice)` a function followed by a "value", for example `thrice(thrice)(x => x + 1)(0)`**
:::

### Why 27 and not 9?

This is with respect to one of the studio questions when we call `thrice(thrice)(x => x + 1)(0)`. Many (including me) would think that the result will be 9, but 🤯 when they realize it is supposed to be 27. Now, why is that so?

When we call `thrice(thrice)(f)`, we note that it will be composed into a function of form `thrice(thrice(thrice(f)))` (recall the effects of `thrice(f)(x)` mentioned above).

1. **Then the important thing to note here is that the most inner `thrice(f)` will be composed into the form of `f(f(f` and subsequently**
2. **this `f(f(f` becomes the new computational sequence that is passed to the "middle" `thrice`.**
3. **And just like how `thrice(f)` works, the "middle" `thrice` will take `f(f(f` as the function to compose three times, resulting in `fff (fff (fff`**
4. **Repeat the process and we will get `fff fff fff (fff fff fff (fff fff fff `**

Now pluck in the original `(x => x + 1)` to `thrice(thrice)` and we will see that there are `3 * 3 * 3 = 27` successive applications of `f`. Therefore, `thrice(thrice)(x => x + 1)(0) === 27`.

### One more `thrice`

Now it is time to answer the question of `thrice(thrice(thrice))`. With all that intuition we have built from `thrice(thrice)`, let's see what happens when we call `thrice(thrice(thrice))(x => x + 1)(0)`.

1. **We know that `thrice(thrice)` results in a `3 * 3 * 3 = 27` applications**
2. **Using the same logic from above, `thrice(thrice(thrice))` then results in something like `thrice(f{27})`**
    - `f{27}` means 27 successive applications of `f`
3. **Which means `thrice(thrice(thrice))` -> `thrice(f{27})` -> `f{27}(f{27}(f{27}`**
4. **That is equals to `27 * 27 * 27 = 19683` successively applications**

:::info
Therefore, 

`thrice(thrice(thrice))(x => x + 1)(0) === 19683` 

and for the those that are curious,

`thrice(thrice(thrice))(square)(2) === 2^(2^19683)`
:::


## Some cool things you can do with HOFs

- **Recursion without recursion (Y-Combinator)**
    - https://richardlupton.com/notebooks/y-combinator/
    - https://www.youtube.com/watch?v=QuXJ3kXUCiU
        > A great explanation of how the `Y` combinator works
    - https://en.wikipedia.org/wiki/Fixed-point_combinator

