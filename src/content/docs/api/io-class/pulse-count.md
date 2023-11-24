---
title: Pulse Count
description: The [IO class](/api/io-class/) implements a bi-directional counter typically used with a [rotary encoder](https://en.wikipedia.org/wiki/Rotary_encoder).

---

The [IO class](/api/io-class/) implements a bi-directional counter typically used with a [rotary encoder](https://en.wikipedia.org/wiki/Rotary_encoder).

## Constructor

### `PulseCount`

Creates a new `PulseCount` object instance.

```js
PulseCount(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `signal` - a [pin specifier](/glossary/#pin-speficier) indicating the signal input pin.
>
> `control` - a [pin specifier](/glossary/#pin-speficier) indicating the control input pin.
>
> `onReadable()` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the input value changes, which can be retrieved using the `read` method. Multiple changes to the counter may be combined into a single callback.
>
> `onError` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when a non-recoverable error occurs, such as underflow or overflow of the counter.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"number"`. The string value set by the constructor options or by the script at any time to change how it reads data.

## Instance Methods

### `read`

Returns the current count from the IO instance.

```js
read()
```

#### Return value

A number describing the current count.

### `write`

Sets the current count on the IO instance.

```js
write(count)
```

#### Parameters

`count`

A number describing the current count.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import PulseCount from "embedded:io/pulsecount";
const PulseCount = device.io.PulseCount;
```

### Rotary encoder

This example instantiates a pulse counter to monitor a rotary encorder and log the current count when it changes.

```js
new device.io.PulseCount({
   signal: 6,
   control: 8,
   onReadable() {
      const count = this.read();
      console.log(`count: ${count}`);
   }
});
```

## Specifications

[Pulse count](https://419.ecma-international.org/#-10-io-classes-pulse-count)


