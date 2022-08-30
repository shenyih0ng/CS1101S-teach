---
id: studio-4
title: Studio 4
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS5BcaMg17Fmw8ZA2SDXocaw_g5fgXY0r3WHW6DKlJBZMmAnJEYmvXoSMqDC3GoH_2lOkzq_YRHGQq7/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

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

## Some cool things you can do with HOFs

- **Recursion without recursion (Y-Combinator)**
    - https://richardlupton.com/notebooks/y-combinator/
    - https://www.youtube.com/watch?v=QuXJ3kXUCiU
        > A great explanation of how the `Y` combinator works
    - https://en.wikipedia.org/wiki/Fixed-point_combinator

