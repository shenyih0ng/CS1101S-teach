---
id: recursion-with-hof
title: Recursion using Higher-Order Functions
---

This is a question from the AY1718 midterm where observe how we can express a recursive function with higher order functions instead, without the use of a explicit recursive call to the function.

```javascript
(f => f(f))(
    make_factorial => 
        n => n === 0 
                ? 1 
                : n * (make_factorial(make_factorial))(n-1)
)(5);
```

`(f => f(f))` is also called the [U-Combinator](https://www.tfeb.org/fragments/2020/03/09/the-u-combinator/), which means we can also write the above program as such:

```javascript
const U = f => f(f);

U(make_factorial => 
    n => n === 0 
            ? 1 
            : n * U(make_factorial)(n-1)
)(5);
```

Note that unlike the conventional `fact` function that we used to writing, which takes only a single argument `n`, our function here takes in 2 arguments (`make_factorial`, `n`). Why do we need this extra `make_factorial`?

Intuitively, when we want to express a recursive function, we will need to have **a reference to the function** so that we can make a recursive call. Therefore, with the U-Combinator implementation, we will need to somehow achieve that same effect.

When we apply the U-Combinator with our function `make_factorial => n => {...}`, we can get the following form:

```javascript
(make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))
    (make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))(5);
```

From this application, you can see that argument `make_factorial` in the first lambda expression will be a **reference (almost like a self-reference) to the function that is exactly the same as itself**. Hopefully at this point, you can see how this will slowly build towards a recursive function.

Another round of application,

```javascript
(5 === 0) ? 1 : 5 * U(make_factorial)(4);
```

Note that `make_factorial` refers to

```javascript
(make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))
```

which makes `U(make_factorial)(4)`

```javascript
(make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))
    (make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))(4)
```

> Note that we originally started off with `U(make_factorial)(5)` and now we have `U(make_factorial)(4)`. Magic 🪄

Looks familiar 🤔? 

**Observe that `U(make_factorial)(4)` now becomes a evaluation for the factorial of 4, hence `5 * U(make_factorial)(4)` expresses the same intend as the conventional `5 * fact(4)`!** This process will continue until we reached the base case.

And thats how we do recursion without recursive calls but with our favorite HOFs 🥳