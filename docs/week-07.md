---
id: studio-7
title: Studio 7
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQnrC7XtroKxTqJEl2bwqoEJcneP9RzLItFUIjIFF9lqmEjlGGEn321nCcmRcZNpplnT3Qyp50vLkR9/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to slides: https://docs.google.com/presentation/d/1CR9I3AkfMwnrmIuQJ9gBJv3nPpOTW76_NEZpkJnVrvU/edit?usp=sharing

## More examples on Recurrence Relations

> These questions are from the Order of Growth self assessment

### `make_up_amount`

```javascript
function make_up_amount(n, xs) {
    if (n === 0) {
        return 1;
    } else if (x < 0 || xs === null) {
        return 0;
    } else {
        return make_up_amount(n - head(xs), tail(xs))
               + make_up_amount(n, tail(xs));
    }
}
```

Note that all the conditional checks, `head` + `tail` calls, `-`  and `+` operations takes constant time, which implies that as a whole, it has a time complexity of $O(1)$.

> These are all the operations that will happen in one single call of the function, excluding recursive calls.

Therefore, the time complexity with respect to the length of the list `xs`, denoted by $n$:

$T(n) = O(1) + T(n-1) + T(n-1)$

$T(n) = O(2^n)$


### `smallest2`

```javascript
function min(a, b) {
    return a < b ? a : b;
}

function smallest2(xs) {
    return length(xs) === 1
            ? head(xs)
            : min(head(xs), smallest2(tail(xs)));
}
```

The `min` function executes in constant time since it is just doing a comparsion. Therefore it has a time complexity of $O(1)$.

**Note that for `smallest2`, everytime it is being called, `length(xs)` will be executed.** `length` requires the traversal of the entire `list`, which implies that it has time complexity of $O(n)$ where $n$ is the length of the `list`.

Therefore, the time complexity with respect to the length of the list `xs`, denoted by $n$, of `smallest2`:

$T(n) = O(n) + O(1) + T(n-1)$

$T(n) = O(n) + T(n-1)$ 

$T(n) = O(n) + O(n-1) + ... + O(1)$ 

$T(n) = O(n^2)$ 
