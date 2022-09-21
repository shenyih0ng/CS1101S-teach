---
id: mastery-check-1
title: Mastery Check 1
---

## Topics Tested

1. Scope
2. Substitution Model
3. Iterative/Recursive processes
4. Higher-Order Function (HOF)

## What's going to happen?

1. Come prepared with questions that you guys as a pair will explain to me

   - Try to ensure that the questions cover the topics that are listed above
   - Questions can be from missions/quests/your own

2. The goal is to **convince** me that you understand the topics/concepts

3. If you have time do look at the questions below and try to work them out

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

  return foo;
}

foo(2);
```

<details><summary><b>Answers</b></summary>

**Output: 2**

However note that the `foo` in `return foo;` is binded to the `foo` in the function argument instead of the `foo` in the `else` block. This is because declarations in a conditional statement (`if-else` blocks) is not in the same scope as the `return` statement.

</details>

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

<details><summary><b>Answers</b></summary>

**A error will be thrown!**

This is because there is a redeclaration of `boo` in the function in Line 8.

</details>

## Recursive / Iterative processes

### Do the following programs give rise to a **recursive** or **iterative** process?

#### Program 1

```javascript
function boo(n) {
  return n === 0 ? true : true || boo(n - 1);
}
```

<details><summary><b>Answers</b></summary>

**Iterative Process**

Note that the `||` can be converted into a conditional expression as such:

```javascript
function or(a, b) {
  return a ? true : b;
}
```

Therefore, when translated into the form of a conditional expression, we see that `boo(n)` will always just return a `true`.

> This is also called a short circuit evaluation

</details>

#### Program 2a

```javascript
function hoo(n) {
  return n === 0 ? true : true && hoo(n - 1);
}
```

<details><summary><b>Answers</b></summary>

**Iterative Process**

Similar to the `||` operator, the `&&` operator can also be converted into a conditional expression as such:

```javascript
function and(a, b) {
  return a ? b : false;
}
```

Following the evaluation of the conditional expression, we see that

`true && hoo(n-1);` -> `true ? hoo(n-1) : false;` -> `hoo(n-1);`

Since it evaluates to just `hoo(n-1);` in the end, we observe that there will be no deferred operations. Therefore it is a iterative process.

</details>

#### Program 2b

> This is an extra question that I have asked some groups

```javascript
function hoo(n) {
  return n === 0 ? true : hoo(n - 1) && true;
}
```

<details><summary><b>Answers</b></summary>

**Recursive Process**

:::tip
Refer to the implementation of `&&` in the answer for Q2a
:::

Note that in this case, since `hoo(n-1)` is the first operand, it will be translated to a conditional expression like such:

`hoo(n-1) && true` -> `hoo(n-1) ? true : false`

In this case, we will not be able to get the benefits of a short circuit evaluation, since the evaluation depends on return value of `hoo(n-1)`. Therefore there will be a deferred operations, that grows proportionally to `n`, implying that this is a recursive process.

</details>

#### Program 3

```javascript
function hu(n) {
  return n === 0 ? true : false && hu(n - 1);
}
```

<details><summary><b>Answers</b></summary>

**Iterative Process**

:::tip
Refer to the implementation of `&&` in the answer for Q2a
:::

This should be pretty trivial by now. There will be short circuit evaluation because of `false` being the first operand.

`false ? hu(n-1) : false` -> `false`

No deferred operations. In fact there will be no recursive calls at all, therefore it is iterative process.

</details>

## Higher Order Functions (HOFs)

### `hof_pair`, `hof_head`, `hof_tail`

**Suppose we define a `hof_pair` as such:**

```javascript
const hof_pair = (x) => (y) => (f) => f(x, y);
```

> In simple terms, we are using HOFs to construct a `pair` data structure

#### Q1: Implement `hof_head` and `hof_tail`

1. `hof_head(hof_p)`

   - Takes in a `hof_pair` and returns the value of the head of the given `hof_pair`

2. `hof_tail(hof_p)`
   - Takes in a `hof_pair` and returns the value of the tail of the given `hof_pair`

Here is a example of how `hof_head` and `hof_tail` should work:

```javascript
const hof_pair = (x) => (y) => (f) => f(x, y);
const hof_pair_1 = hof_pair(1)(2);

hof_head(hof_pair_1) === 1; // true
hof_tail(hof_pair_1) === 2; // true
```

<details><summary><b>Answers</b></summary>

```javascript
const hof_head = (p) => p((x, y) => x);
const hof_tail = (p) => p((x, y) => y);
```

> This appeared in the quest Functional Expressionism 🎉

</details>

#### Q2: Implement `build_hof_list`

- **`build_hof_list(func, n)`**
  - Makes a `hof_list` with `n` elements by applying the unary function `func` to the numbers `0` to `n - 1`, assumed to be a nonnegative integer.

:::info
`build_hof_list` aims to the do the same thing as [`build_list` in Source 2](https://docs.sourceacademy.org/source_2/global.html#build_list).
:::

Here is a example of how `build_hof_list` should work:

```javascript
const hof_list_1 = build_hof_list((x) => x + 1, 2);

hof_head(hof_list_1) === 1; // true
hof_head(hof_tail(hof_list_1)) === 2; // true
is_null(hof_tail(hof_tail(hof_list_1))); // true
is_null(hof_tail(hof_tail(hof_list_1))) === true; // will this produce a error 🤔? why/why not?
```

<details><summary><b>Answers</b></summary>

```javascript
function build_hof_list(func, n) {
  function build_list_helper(m) {
    return m >= n ? null : hof_pair(func(m))(build_list_helper(m + 1));
  }

  return build_list_helper(0);
}
```

</details>

#### Q3: Implement `display_hof_list`

It is little hard to see what is inside `hof_list`, let create a way for us to display all the elements in a `hof_list`.

- `display_hof_list(h, t)`
  - Takes in 2 arguments
  - `h`: head of a `hof_pair`
  - `t`: tail of a `hof_pair`

Here is a example of how you can use `display_hof_list`:

```javascript
const hof_list_2 = build_hof_list((x) => x + 1, 5);

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

<details><summary><b>Answers</b></summary>

```javascript
function display_hof_list(h, t) {
  display(h);
  if (!is_null(t)) {
    t(display_hof_list);
  } else {
    display("end");
  }
}
```

</details>

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
const hof_list_3 = build_hof_list((x) => x + 1, 5);

hof_list_3(map_hof_list((x) => x + 1));

hof_list_3(map_hof_list((x) => x + 1))(display_hof_list); // 2 3 4 5 6 "end"
```

<details><summary><b>Answers</b></summary>

```javascript
function map_hof_list(func) {
  function map_hof_helper(h, t) {
    return is_null(t) ? null : hof_pair(func(h))(t(map_hof_helper));
  }

  return map_hof_helper;
}
```

</details>

:::info
You are more than welcome to implement `filter_hof_list`, `accumulate_hof_list` and `hof_list_ref` 🔥

These functions should be the `filter`, `accumulate` and `list_ref` equivalent!
:::
