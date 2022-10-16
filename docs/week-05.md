---
id: studio-5
title: Studio 5
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ0rKiDxtz4ljTgrlnCO72UBoXZy52EZO-lHvgG4tsEt9GSp47PB7i0d7rnAeqS6hJsFw5_zaCe5T_1/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to the slides: https://docs.google.com/presentation/d/1-cbtrJNUJ6lfYigeqHXT3hbKlcDZhiM1T3d8dhxGqcI/edit?usp=sharing

## Studio Worksheets

1. [Studio 5 In-class Worksheet](https://drive.google.com/drive/folders/17nZEa4Wyxxo0L31B-bjvQPUoOvhlDLqE?usp=sharing)

## Implementing our own X

### Our own `list`

> `my_list` is not entirely the same as `list()`. It creates a list of length `len` with increasing values from starting from `start`

```javascript
function my_list (len, start) {
    return len === 0 
            ? null : 
            pair(value, my_list(len - 1, start + 1));
}
```

### Our own `reverse`

> Found in SICP JS: https://sourceacademy.org/sicpjs/2.2.1#ex-2.18

```javascript
function my_reverse(lst) {
    function helper(lst, acc) {
        return is_null(lst)
                ? acc
                : helper(tail(lst), pair(head(lst), acc));
    }
    
    return helper(lst, null);
}
```

_It is also good practise to implement your own `list_ref` and subsequently `append` when it is introduced in lecture_
