---
id: studio-3
title: Studio 3
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSmFjIYOgTunIaE2_3lEJcjU6iboF4sQIsDBwBJkRo82iTALEYHe7uCScBjX_EyA-VlpbbGxsgyqaAT/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to slides: https://docs.google.com/presentation/d/1ZqOtMH0jjICoDKpQhR1rGQnohbDXmPl6q5LRByRSQAM/edit?usp=sharing

## Studio Worksheets

1. [Studio 3 In-class Worksheet](https://drive.google.com/file/d/1OcBZBwV9KbzxxktCbIVCNGhLGVviNhyq/view?usp=sharing)
2. [Studio 3 Extra Worksheet](https://drive.google.com/file/d/1u0u3I70s_2cxImnPBdaTcS5RMKRZyIGV/view?usp=sharing)

## Pre-Studio Extra Questions

### [`vert_fractal`](https://share.sourceacademy.nus.edu.sg/y3nws)

_Refer to **Slide 16**_

```javascript
function vert_fractal(rune, n) {
  return n === 1 ? rune : stack(vert_fractal(beside(rune, rune), n - 1), rune);
}
```

### [`corner_fractal`](https://share.sourceacademy.nus.edu.sg/y3nws)

_Refer to **Slide 17**_

```javascript
function fractal(rune, n) {
  return n === 1 ? rune : beside(rune, fractal(stack(rune, rune), n - 1));
}

function corner_fractal(rune, n) {
  return n === 1
    ? rune
    : beside(
        vert_fractal(rune, n),
        stack(corner_fractal(rune, n - 1), fractal(stack(rune, rune), n - 1))
      );
}
```

## Recursion and Wishful Thinking

These are some good resources to look at if you want a better understanding:

1. [**Wishful programming**](https://blog.thesoftwarecraft.com/2013/11/wishful-programming.html)
2. **5 simple Steps for solving any Recursion**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ngCos392W4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::tip
You can refer to an example of how to express a recursive function using Higher Order Functions here ([Recursion with HOFs](extras/recursion-with-hof))
:::
