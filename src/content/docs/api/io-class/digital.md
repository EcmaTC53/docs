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
> `edge` - A value indicating the conditions for invoking the `onReadable` callback. This value may be one of the [static properties](#static-properties) on the class: `Digital.Rising`, `Digital.Falling`, `Digital.Rising | Digital.Falling`
>
> `onReadable()` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the input value changes depending on the `edge` property, which can be retrieved using the `read` method.

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

The IO class accepts the [`write` method](#write) to set the configured pin in push-pull mode: low (0) or high (1).

### `OutputDrain`

The IO class accepts the [`write` method](#write) to set the configured pin in [open drain](/glossary/#open-drain) mode: low (0) or floating disconnected (1).

### `Rising`

The digital signal is transitioning from 0 to 1.

### `Falling`

The digital signal is transitioning from 1 to 0.

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

### Hello Blinky

This example instantiates a digital output to control an [LED](/glossary/#led) based on the [global `device` pin names](/api/host-provider) and toggle it on/off every 200 milliseconds using `System.setInterval`.

```js
const led = new device.io.Digital({
   pin: device.pin.led,
   mode: Digital.Output,
});
led.write(1);

let state = 0;
System.setInterval(() => {
	led.write(state);
	state = state == 0 ? 1 : 0;
}, 200);
```

### Button-controlled LED

This example instantiates a digital input to read a push button to toggle a digital output [LED](/glossary/#led) based on the [global `device` pin names](/api/host-provider). The button is configured to trigger the `onReadable` callback when has been pushed (falling) and released (rising).

```js
const led = new device.io.Digital({
   pin: device.pin.led,
   mode: Digital.Output,
});

// button
new device.io.Digital({
    pin: device.pin.button,
    mode: Digital.InputPullUp,
    edge: Digital.Rising | Digital.Falling,
    onReadable() {
        led.write(this.read());
    }
});
```

## Specifications

[Digital](https://419.ecma-international.org/#-10-io-classes-digital)


