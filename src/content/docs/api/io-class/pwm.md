---
title: PWM
description: An [IO class](/api/io-class/) that provides access to the pulse-width modulation capability of pins.

---

An [IO class](/api/io-class/) that provides access to the [pulse-width modulation](/glossary/#pwm) capability of pins.

## Constructor

### `PWM`

Creates a new `PWM` object instance.

```js
PWM(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `pin` - a [pin specifier](/glossary/#pin-speficier) indicating the [GPIO](/glossary/#gpio) pin to operate as PWM output.
>
> `hz` (optional) - a number specifying the requested frequency of the PWM output in hertz. The default is device dependent.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"number"`. The string value set by the constructor options or by the script at any time to change how it reads data.

### `resolution`

Read-only property indicates the number of bits of resolution in values passed to the [`write`](#write) method, e.g 10.

### `hz`

Read-only property indicates the frequency of the PWM.

## Instance Methods

### `write`

Sets the current count on the IO instance.

```js
write(value)
```

#### Parameters

`value`

A number 0 and a maximum value based on the [`resolution`](#resolution) of the PWM output.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import PWM from "embedded:io/pwm";
const PWM = device.io.PWM;
```

### Hello Dimming Blinky

This example instantiates a PWM output to control an [LED](/glossary/#led) based on the [global `device` pin names](/api/host-provider) and fade it on or off using `System.setInterval`.

```js
const led = new device.io.PWM({
   pin: device.io.led,
});

const range = (2 ** led.resolution) - 1;
let step = 5;
let value = 0;

System.setInterval(() => {
    value += step;

    if (value < 0 || value > range) {
        step *= -1;
        value += step;
    }

    led.write(value)
}, 5)
```

## Specifications

[Pulse-width modulation](https://419.ecma-international.org/#-10-io-classes-pulse-width-modulation)





