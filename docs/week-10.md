---
id: studio-10
title: Studio 10
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTwK2Wba5hVEPPt8QOoKz0MFWy7RCBwiLlaVOLXG_ViJ5OPxs9Y_b8NVBM-xi0c4zjyKSmpTApRjD_O/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to slides: https://docs.google.com/presentation/d/1PF8jc75KtnhN119_Agjktv98ED9SuYepQMa7zYBM354/edit?usp=sharing

## Studio Worksheets

1. [Studio 10 In-class Worksheet](https://drive.google.com/drive/folders/1e3k3uNEMt8cV09By1WJafUC9jWJYPDgp?usp=sharing)

## Visualizing `mem` 👀

```javascript
// Array -> void
function display_2D_mem(mem) {
  function pad_right(str, char, num) {
    return num === 0 ? str : pad_right(str + char, char, num - 1);
  }

  const num_keys = array_length(mem);
  const num_values = accumulate(
    (idx, max) =>
      is_undefined(mem[idx]) ? max : math_max(array_length(mem[idx]), max),
    -1,
    build_list((x) => x, num_keys)
  );

  const max_key_length = array_length(stringify(num_keys - 1));

  for (let key = 0; key < num_keys; key = key + 1) {
    let val_store = is_undefined(mem[key]) ? [] : mem[key];
    if (array_length(val_store) < num_values) {
      val_store[num_values - 1] = undefined;
    }

    let val_str = "[";
    for (let val_idx = 0; val_idx < num_values; val_idx = val_idx + 1) {
      val_str = val_str + (is_undefined(val_store[val_idx]) ? " " : "X");
      val_str = val_str + (val_idx < num_values - 1 ? " " : "");
    }
    val_str = val_str + "]";

    display(
      val_str,
      pad_right(
        stringify(key) + ":",
        " ",
        max_key_length - array_length(stringify(key))
      )
    );
  }
}

// Sample usage
// display_2d_mem(mem) where mem is your cache for your memoized function
```

> Feel free to try this out for `m_choose` (in Reflection 9) or the coin change problem in the studio worksheet!
