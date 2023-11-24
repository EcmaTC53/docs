---
title: Digital Bank
description:  An [IO class](/api/io-class/) that provides simultaneous access to a group of digital inputs or outputs.

---

An [IO class](/api/io-class/) that provides simultaneous access to a group of [digital](/glossary/#digital) inputs or outputs.


## Constructor

### `DigitalBank`

Creates a new `DigitalBank` object instance.

```js
DigitalBank(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `pins` - a [bitmask](/glossary/#bitmask) with [pins](/glossary/#pins) to include in the configured `bank` set to 1, e.g. `0b1100` or `(1 << 3) | (1 << 2)` will select pin 3 and 2.
>
> `mode` - A value indicating the mode of the IO, all pins use the same mode. This value may be one of the [static properties](#static-properties) on the class: `DigitalBank.Input`, `DigitalBank.InputPullUp`, `DigitalBank.InputPullDown`, `DigitalBank.InputPullUpDown`, `DigitalBank.Output`, `DigitalBank.OutputDrain`
>
> `bank` (optional) - For devices with more than 1 digital bank of pins, a number or string value specifying the bank. Defaults to 0.
>
> `rises` - A [bitmask](/glossary/#bitmask) indicating the pins which invoke the `onReadable` callback when the digital signal is rising, or transitioning from 0 to 1. Must be configured if the `falls` property is not set.
>
> `falls` - A [bitmask](/glossary/#bitmask) indicating the pins which invoke the `onReadable` callback when the digital signal is falling, or transitioning from 1 to 0. Must be configured if the `rises` property is not set.
>
> `onReadable(triggered)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the input signals change depending on the `rises` or `falls` properties with the `triggered` argument as a bitmask of the pins invoking the callback.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Static Properties

### `Input`

The IO class will invoke the `onReadable` callback based on the `edge` value and accepts the [`read` method](#read). It will read whatever logic level is connected to it and ‘float’ to random high or low values if nothing is connected

### `InputPullUp`

An input peripheral with the default value as "pulled high", or 1, when nothing else is connected.

### `InputPullDown`

An input peripheral with the default value as "pulled low", or 0, when nothing else is connected.

### `InputPullUpDown`

### 'Output'

The IO class accepts the [`write` method](#write) to set the configured pins in push-pull mode: low (0) or high (1).

### `OutputDrain`

The IO class accepts the [`write` method](#write) to set the configured pins in [open drain](/glossary/#open-drain) mode: low (0) or floating disconnected (1).

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

A bitmask of the configured pins' current value as 0 (low) or 1 (high) set in the respective bit field.

### `write`

Sends digital data to the IO instance.

```js
write(bitmask)
```

#### Parameters

`bitmask`

A bitmask of the configured pins' current value with 0 (low) or 1 (high) set in the respective bit field.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import DigitalBank from "embedded:io/digitalbank";
const DigitalBank = device.io.DigitalBank;
```

### Hello Blinky(s)

This example instantiates a bank of digital outputs to control a series of [LEDs](/glossary/#led) on pins 12 through 15 and toggle it on/off every 200 milliseconds using `System.setInterval`.

```js
// could also be 0xF000 or 0b1111000000000000 or 61440
const mask = (1 << 12) | (1 << 13) | (1 << 14) | (1 << 15);
const leds = new device.io.Digital({
   pins: mask,
   mode: DigitalBank.Output,
});
led.write(mask);

let state = 0;
System.setInterval(() => {
	led.write(state);
	state = state == 0 ? mask : 0;
}, 200);
```

### Button-controlled LED

This example instantiates a bank of a single digital input to read a push button to toggle a digital output [LED](/glossary/#led). The button is configured to trigger the `onReadable` callback when has been pushed (falling) and released (rising) due to the [`InputPullUp`](#inputpullup) mode.

```js
const led = new device.io.Digital({
   pin: device.pin.led,
   mode: Digital.Output,
});

// button
new device.io.DigitalBank({
    pins: device.pin.button,
    mode: Digital.InputPullUp,
    rises: device.pin.button,
    falls: device.pin.button,
    onReadable() {
        led.write(this.read() ? 1 : 0);
    }
});
```

### Rise or fall

This example instantiates a bank of digital inputs to monitor two buttons on pins 1 and 15, triggering when 1 rises or 15 falls.

```js
const pin1 = 1 << 1;
const pin15 = 1 << 15;
new device.io.DigitalBank({
    pins: pin1 | pin15,
    mode: Digital.Input,
    rises: pin1,
    falls: pin15,
    onReadable(triggered) {
        if (triggered == pin1) {
            console.log("Pin 1 has risen!");
        }
        if (triggered == pin15) {
            console.log("Pin 15 has fallen!");
        }
    }
});
```

## Specifications

[Digital bank](https://419.ecma-international.org/#-10-io-classes-digital-bank)


