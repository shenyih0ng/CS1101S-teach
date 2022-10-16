---
id: studio-6
title: Studio 6
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRTGTcc5i0Gc-tqyGkrtMPQBBNE1_ODSJ0qzn0CejXNq0di18Pv_3cTol2QmaRNQj6dZmxd71COZiDv/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to the slides: https://docs.google.com/presentation/d/1oob7MJssTDE_PzuxgaDp31CBEf3E7fP437JvNhm31fQ/edit?usp=sharing

## Studio Worksheets

1. [Studio 6 In-class Worksheet](https://drive.google.com/drive/folders/1Jv_5qs9Ivb_pDDoUSg73dvR_NsNxwNIC?usp=sharing)

## Subsets and Permutations

These are some of the harder functions/questions that you will come across in CS1101S. Take some time to understand the intuition behind the solutions and hopefully after that you will be able to better appreciate the magic and power of recursion 😄

:::caution
**The full solution can be found [here](https://drive.google.com/file/d/1ZwWCSfYu1fV9QdagkTO9rzf1oLFulV90/view?usp=sharing).**

> The solutions are only accesible by those in my studio, this is so that solutions will not be leaked to future batches

The explanations below are purely the intuitions behind solving these questions, not answers. 
:::

### `subsets(lst)`

> The logic and intuition behind `subsets` is entirely the same as the `makeup_amount` function that you have seen in your studio worksheet.

#### Function Signature

Before we go into the implementation of the function, it is important we understand what should be the function/type signature of the `subsets` function. **If the goal is to get all possible subsets of a given list of values**, then it is only natural that the function returns a **collection of subsets**.

_What better way to store a **collection** of values than a `list`!_

But what should we use to store each individual subset? A subset is a collection of values too, just that the values contained in it are the elements in the given list of values. Then naturally, a `list` would be chosen again to store/represent a single subset.

Piecing all that together, we would expect the function/type signature of `subsets` to be:

**`List<Number> -> List<List<Number>>`**

> Let's assume all items are of `Number` type

The function signature, althought trivial to some, is a important because it helps us acertain what we will be getting from a recursive call to the `subsets` in our implementation. This also then gives us a hint as to how we can work with the return result of a recursive call and subsequently build on top of it to get our desired result!

#### Implementation

After figuring out the function signature, we will need to understand what is exactly a subset? 

To put it simply, it is just a smaller (not strictly though) collection/set of values that are picked from original/initial collection of values. **Thus, to get all possible subsets is then a process of generating all possible collection/set of values that can be picked from the original/initial collection of values.**

Think about how you would manually write out all the subsets of a set of values. First you would probably write out the entire collection (since it is still a subset), **then you will slowly take a item out**. Then with some patience and hardwork, you eventually get all the subsets.

Translating that to a computational process, we are essentially making a choice for each item in the list:

1. Put this item in the current subset
2. **Do not** put this item in the current subset
    - _This sort of represents the action where you slowly take a item out of a larger subset_

And that's it 🎉 This is the entire intuition behind the function `subset`.

But one last thing to note, what are the possible subsets of a empty set/collection? **`null` of course!** This also makes `null` a valid subset for all collection of values.

> This is the base case you will need to handle!

```javascript
// List<Number> -> List<List<Number>>
function subsets(lst) {
    if (<base-case>) {
        // note that your return type should be of type List<List<Number>>
        return ...
    } else {
        // how can i make use of wishful thinking here?
        const all_possible_subsets_without_current_item_of_lst = ...;
        // can i make use of ^
        const all_possible_subsets_with_current_item_of_lst = ...;

        return <all-possible-subsets-for-lst>;
    }
}
```

### `permutations(lst)`

The intuition and logic behind `permutations` is sadly not exactly the same as `subsets` or `makeup_amount`. This is because it no longer involves making the choice of taking or not taking a element in a given list of values.

#### Function Signature

Similar to `subsets`, what we wish to get from the function `permutations` is a collection of all permutations of a given list of values. For the same reasons as above, when we want a collection of anything, a `list` is a good choice!

But what can we use to store a permutation? A permutation is a still a collection of a values, so naturally we will once again choose a `list` to represent it!

Therefore, piecing it together, we would expect the function signature to be:

**`List<Number> -> List<List<Number>>`**

> Once again, we are assuming all inputs to be of `Number` type

#### Implementation

Personally, I think the most important intuition behind the `permutations` function is the fact that you are now dealing with the **positions** in list instead of the elements in it (as we have seen in `subsets`).

This is somewhat to similar to how we calculate the number of permutations of a given list of values. The way we do it usually begins by ascertaining that the first position of the list could have `n` possible values (where `n` is the number of items in the list), then the next position could have `n-1` possible values (because we have already used one item for the first position). We continue the process and eventually we get a formula of `n * (n-1) * (n-2) * ... * 1 = n!`.

Using that as inspiration, when we are trying to build a collection of all possible permutations, we will try to follow a similar process.

As we are traversing through the list, we are also traversing through all the **positions** of a list, from index `0` all the way to index `n-1`. Similar to how we calculate the number of permutations, at each position that we traverse through, we need to ask ourselves how many elements and most importantly **what are the specific elements that can fill this position**. 

_At this point, I hope you will realise that we will need do some sort of removing/filtering of the original list of values to find out what specific elements can fill a particular position (think about why is it `n-1` at the second step of the calculation mentioned above)._

If we were to draw parallels to `subsets`, instead of making just 2 choices at every position, we are essentially making `n` choices where `n` is the length of the list (at the current "step").

```javascript
function permutations (lst) {
    if (<base-case>) {
        // think back to the `subsets`
        return ...
    } else {
        // every element of lst can fill the current position that we at right now
        // consider how that links up to how we can get all possible permutations for rest of the lst
        // hint: you should use `remove`/`filter` here
        const all_permutations_of_length_n_minus_one = ...
        // how can we make use of ^
        const all_permutations_of_length_n = ...

        return <all-possible-permutations>;
    }
}
```
