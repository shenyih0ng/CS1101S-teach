---
id: mastery-check-1
title: Mastery Check 1
---

## Topics Tested

1. Scope
2. Substitution Model
3. Iterative/Recursive processes
4. Higher-Order Function (HOF)

## Scope

### What happens when the following programs are executed?

1. What is the output of the program?
2. Will there be a error? If so what is the error?

:::caution
Try **not** to run the programs in Source Academy!
:::

#### Program 1

```javascript
function foo(foo) {
  if (false) {
    const foo = 1;
  } else {
    const foo = 2;
  }

  //const foo = 3;
  return foo;
}

foo(2);
```

#### Program 2

```javascript
function boo(boo) {
  if (false) {
    const boo = 1;
  } else {
    const boo = 2;
  }

  const boo = 3;
  return boo;
}

boo(4);
```

## Recursive / Iterative processes

### Do the following programs give rise to a **recursive** or **iterative** process?

#### Program 1

```javascript
function boo(n) {
  return n === 0 ? true : true || boo(n - 1);
}
```

#### Program 2

```javascript
function hoo(n) {
  return n === 0 ? true : true && hoo(n - 1);
}
```

#### Program 3

```javascript
function hu(n) {
  return n === 0 ? true : false && hu(n - 1);
}
```

## Higher Order Functions (HOFs)

### `hof_pair`, `hof_head`, `hof_tail`

**Suppose we define a `hof_pair` as such:**

```javascript
const hof_pair = x => y => f => f(x,y);
```

> In simple terms, we are using HOFs to construct a `pair` data structure

#### Q1: Implement `hof_head` and `hof_tail`

1. `hof_head(hof_p)`
    - Takes in a `hof_pair` and returns the value of the head of the given `hof_pair`

2. `hof_tail(hof_p)`
    - Takes in a `hof_pair` and returns the value of the tail of the given `hof_pair`

Here is a example of how `hof_head` and `hof_tail` should work:

```javascript
const hof_pair = x => y => f => f(x,y);
const hof_pair_1 = hof_pair(1)(2)

hof_head(hof_pair_1) === 1; // true
hof_tail(hof_pair_1) === 2; // true
```

#### Q2: Implement `build_hof_list`

- **`build_hof_list(func, n)`** 
    - Makes a `hof_list` with `n` elements by applying the unary function `func` to the numbers `0` to `n - 1`, assumed to be a nonnegative integer.

:::info
`build_hof_list` aims to the do the same thing as [`build_list` in Source 2](https://docs.sourceacademy.org/source_2/global.html#build_list).
:::

Here is a example of how `build_hof_list` should work:

```javascript
const hof_list_1 = build_hof_list(x => x + 1, 2);

hof_head(hof_list_1) === 1; // true
hof_head(hof_tail(hof_list_1)) === 2; // true
is_null(hof_tail(hof_tail(hof_list_1))) === true; // true
```

#### Q3: Implement `display_hof_list`

It is little hard to see what is inside `hof_list`, let create a way for us to display all the elements in a `hof_list`.

- `display_hof_list(h, t)`
    - Takes in 2 arguments
    - `h`: head of a `hof_pair`
    - `t`: tail of a `hof_pair`


Here is a example of how you can use `display_hof_list`:

```javascript
const hof_list_2 = build_hof_list(x => x + 1, 5);

hof_list_2(display_hof_list);
```

The expected result of the following function call:

```
1
2
3
4
5
"end"
```

> The `"end"` is not necessary

#### Q4: Implement `map_hof_list` (Bonus)

Since we have a `hof_list`, it is only right we have `map` equivalent for it 😃

Consider the following template for `map_hof_list`:

```javascript
function map_hof_list(func){ 
    return (h, t) => {...};
}
```
Here is a example of how you can use `map_hof_list`:

```javascript
const hof_list_3 = build_hof_list(x => x + 1, 5);

hof_list_3(map_hof_list(x => x + 1));

hof_list_3(map_hof_list(x => x + 1))(display_hof_list); // 2 3 4 5 6 "end"
```
