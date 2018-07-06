### Basic Expectation Matchers

`toBe(x)`:
  : Compares with `x` using `===`.

`toMatch(/hello/)`:
  : Tests against regular expressions or strings.

`toBeDefined()`:
  : Confirms expectation is not `undefined`.

`toBeUndefined()`:
  : Opposite of `toBeDefined()`.

`toBeNull()`:
  : Confirms expectation is `null`.

`toBeTruthy()`:
  : Should be true `true` when cast to a Boolean.

`toBeFalsy()`:
  : Should be `false` when cast to a Boolean.

### Numeric Expectation Matchers

`toBeLessThan(n)`:
  : Should be less than `n`.

`toBeGreaterThan(n)`:
  : Should be greater than `n`.

`toBeCloseTo(e, p)`:
  : Difference within `p` places of precision.


### Smart Expectation Matchers

`toEqual(x)`:
  : Can test object and array equality.

`toContain(x)`:
  : Expect an array to contain `x` as an element.
