---
title: Digital
description:  An [IO class](/api/io-class) that represents an digital input and/or output

---

An [IO class](/api/io-class) that represents a [digital](/glossary/#digital) input or output

## Constructor

### `Digital`

Creates a new `Digital` object instance.

```js
Digital(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `pin` - a [pin specifier](/glossary/#pin-speficier) indicating the [GPIO](/glossary/#gpio) pin.
>
> `mode` - A value indicating the mode of the IO. This value may be one of the [static properties](#static-properties) on the class: `Digital.Input`, `Digital.InputPullUp`, `Digital.InputPullDown`, `Digital.InputPullUpDown`, `Digital.Output`, `Digital.OutputDrain`
>
> `edge` - A value indicating the conditions for invoking the `onReadable` callback. This value may be one of the [static properties](#static-properties) on the class: `Digital.Rising`, `Digital.Falling`, `Digital.Rising + Digital.Falling`
>
> `onReadable` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the input value changes depending on the `edge` property, which can be retrieved using the `read` method.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Static Properties

### `Input`

### `InputPullUp`

### `InputPullDown`

### `InputPullUpDown`

### 'Output'

### `OutputDrain`

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"number"`. The string value set by the constructor options or by the script at any time to change how it reads data.

## Instance Methods

### `read`

Returns digital data from the IO instance.

```js
read()
```

#### Return value

`0` or `1`.

### `write`

Sends digital data to the IO instance.

```js
write(value)
```

#### Parameters

`value`

`0` or `1`.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import Digital from "embedded:io/digital";
const Digital = device.io.Digital;
```

## Specifications

[Digital](https://419.ecma-international.org/#-10-io-classes-digital)


