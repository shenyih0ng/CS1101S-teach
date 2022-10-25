---
id: studio-11
title: Studio 11
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSmiwmlCLT7hXKJqTlumxlprjUYHwClj5X3qFcC_-Pg55uT5-YwKhISaBXL1ELNjT9TVufc8qbD2kf2/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

> Link to slides: https://docs.google.com/presentation/d/13hISojDHe83MF51phnodxHjmo0JIgwBQ1hhyqGCz8GQ/edit?usp=sharing

## Studio Worksheets

1. [Studio 11 In-class Worksheet](https://drive.google.com/file/d/1GKVQ-atOEg4PNSR835IpXoWIh_ul1EJE/view?usp=sharing)
2. [Studio 11 Extra Worksheet](https://drive.google.com/file/d/1OEe6MlZNyvQSvgUrMhh2LkD6uQrVsdUm/view?usp=sharing)

## Stream Formulation 🌊

### `inverse_stream`

```javascript
function inverse_stream(s) {
  // Alternatives:
  // stream_map(x => 1 / x, s);
  return is_null(s)
    ? null
    : pair(1 / head(s), () => inverse_stream(stream_tail(s)));
}
```

### `zip_stream`

```javascript
function zip_streams(s1, s2) {
  return is_null(s1)
    ? s2
    : is_null(s2)
    ? s1
    : pair(head(s1), () => zip_streams(s2, stream_tail(s1)));
}
```

### `factorial_stream`

```javascript
const factorial_stream = pair(1, () =>
  mul_streams(factorial_stream, integers_from(1))
);
```

### `sum_stream`

```javascript
function sum_stream(s) {
  const result_stream = pair(head(s), () =>
    add_streams(result_stream, stream_tail(s))
  );
  return result_stream;
}
```

> Returns a stream where it represents the cumulative sum of the original stream

### `create_power_series`

```javascript
function create_power_series(x, series) {
  return mul_streams(series, pow_stream(x, integers_from(0)));
}

// 1 + 2(2)+ 2(2^2) + 2(2^3) + ...
create_power_series(2, integers_from(1));
```

### `e^x`

```javascript
const ex_coeff_stream = inverse_stream(factorial_stream);
const ex_approx_stream = (x) => create_power_series(x, ex_coeff_stream);

// Returns a stream of the approx value of e^2
// e^2 = 7.38905609893
// sum_stream: list(1, 3, 5, 6.333333333333333, 7, 7.266666666666667, 7.355555555555555 ...
sum_stream(ex_approx_stream(2));
```

### `cos(x)`

```javascript
const cos_coeff_stream = mul_streams(
  inverse_stream(factorial_stream),
  zip_streams(alt_ones, zeros)
);
const cos_approx_stream = (x) => create_power_series(x, cos_coeff_stream);

// Returns a stream of the approx value of cos(pi/6)
// cos(pi/6) = 3^0.5 / 2
// sum_stream: list(1, 1, 0.8629221610959812, 0.8629221610959812, 0.8660538834157472 ...
sum_stream(cos_approx_stream(math_PI / 6));
```

### `sin(x)`

```javascript
const sin_coeff_stream = mul_streams(
  inverse_stream(factorial_stream),
  zip_streams(zeros, alt_ones)
);
const sin_approx_stream = (x) => create_power_series(x, sin_coeff_stream);

// Returns a stream of the approx value of sin(pi/6)
// sin(pi/6) = 1/2
// sum_stream: list(0, 0.5235987755982988, 0.5235987755982988, 0.49967417939436376, 0.49967417939436376 ...
sum_stream(sin_approx_stream(math_PI / 6));
```

:::info
Note how similar `sin_coeff_stream` and `cos_coeff_stream` is!
:::
