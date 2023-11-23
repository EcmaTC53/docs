---
title: Analog Input
description:  An [IO class](/api/io-class) that represents an analog input source

---

An [IO class](/api/io-class) that represents an [analog](/glossary/#analog) input source

## Constructor

### `Analog`

Creates a new `Analog` object instance.

```js
Analog(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `pin` - a [pin specifier](/glossary/#pin-speficier) indicating the analog input pin.
>
> `resolution` (optional) - The requested number of bits of resolution of the input. Default resolution is [host](/glossary/#host)-dependent.
>
> `format` (optional) - a string that indicates the type of data used by the read method. Defaults to, and only accepts, `"number"`

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"number"`. The string value set by the constructor options or by the script at any time to change how it reads data.

### `resolution`

Indicates the number of bits of resolution provided in values returned by the instance, e.g 10. 

## Instance Methods

### `read`

Returns analog data from the IO instance. 

```js
read()
```

#### Return value

An integer from 0 to a maximum value based on the [`resolution`](#resolution) of the analog input.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import Analog from "embedded:io/analog";
const Analog = device.io.Analog;
```

### Continually poll data from input

This example instantiates an analog input and read from it every 100 milliseconds using `System.setInterval`. It logs out the precise value based on the [`resolution`](#resolution).

```js
const analogInput = new device.io.Analog({
    pin: 0 // change the pin number for your development board
})

System.setInterval(() => {
    const rawValue = analogInput.read();
    const value = rawValue / ((1 << analogInput.resolution) - 1);
    console.log(`read: ${value.toPrecision(4)}`)
}, 100)
```

## Specifications

[Analog input](https://419.ecma-international.org/#-10-io-classes-analog-input)
