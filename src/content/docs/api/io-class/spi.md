---
title: SPI
description: An [IO class](/api/io-class/) that implements a [SPI](/glossary/#spi) controller to communicate with a single peripheral.

---

An [IO class](/api/io-class/) that implements a [SPI](/glossary/#spi) controller to communicate with a single peripheral.

## Constructor

### `SPI`

Creates a new `SPI` object instance.

```js
SPI(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `out` - a [pin specifier](/glossary/#pin-speficier) indicating the Serial Data Out (PICO/MOSI) pin. Required to write data.
>
> `in` - a [pin specifier](/glossary/#pin-speficier) indicating the Serial Data In (POCI/MISO) pin. Required to read data.
>
> `clock` - a [pin specifier](/glossary/#pin-speficier) indicating the Serial Clock (SCK/CLK) pin.
>
> `select` (optional) - a [pin specifier](/glossary/#pin-speficier) indicating the Serial Chip Select (CS/SS) pin. May be required to read data.
>
> `active` (optional) - binary value (0 or 1) to write to the `select` pin when the SPI instance is active. Defaults to 0.
>
> `hz` - a number specifying the speed of data over the SPI bus in hertz.
>
> `mode` (optional) - a 2-bit [mask](/glossary/#bitmask) to specify the SPI bus mode with the clock [polarity](/glossary/#polarity) at bit 1 and [phase](/glossary/#phase) at bit 0. Defaults to `0b00`.
>
> `port` (optional) - For devices with more than one SPI bus port, the [port specifier](/glossary/#port-specifier) for the instance.

#### Exceptions

If both `in` and `out` are undefined, a `TypeError` is thrown.

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"buffer"`. The string value set by the constructor options or by the script at any time to change how it reads data.

## Instance Methods

### `read`

Returns data from the IO instance.

```js
read(byteLength)
read(buffer)
```

#### Parameters

`byteLength`

Accepted when the [`format`](#forma) is a `"buffer"`, the number of bytes to read into the returned [Byte Buffer](/glossary/#byte-buffer).

`buffer`

Accepted when the [`format`](#forma) is a `"buffer"`, a pre-allocated [Byte Buffer](/glossary/#byte-buffer) for the instance to fill.

#### Return value

`undefined` if no data is available.

Returns [Byte Buffer](/glossary/#byte-buffer) if `byteLength` is defined, otherwise a number representing the amount of bytes read into the `buffer` argument. 

### `write`

Sends data to the IO instance. Any input data is discarded.

```js
write(buffer)
```

#### Parameters

`buffer`

A [Byte Buffer](/glossary/#byte-buffer) of data to send to the peripheral.

#### Exceptions

If the output buffer cannot accept all the bytes to be written, an exception is thrown.

### `transfer`

Sends data while simultaneously reading from the IO instance.

```js
transfer(buffer)
```

#### Parameters

`buffer`

A [Byte Buffer](/glossary/#byte-buffer) of data to send to the peripheral.

#### Return value

None (`undefined`). The results from reading data are stored in the `buffer` argument.

### `flush`

Flushes any buffers from the SPI controller instance.

```js
flush()
flush(deselect)
```

#### Parameters

`deselect`

Boolean value to indicate if the chip select (CS/SS) pin should be set to inactive after the flush operation completes.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import SPI from "embedded:io/spi";
const SPI = device.io.SPI;
```

### I SPI a touch screen

This example instantiates a SPI controller that samples a [XPT2046 touch screen controller](https://www.buydisplay.com/download/ic/XPT2046.pdf) every 100 milliseconds. A [digital input](/api/io-class/digital) is used to detect when the screen has been touched.
It uses default pins from the [`device` global](/api/host-provider).

```js
const CTRLY = 0b10010011;
const CTRLX = 0b11010011;
const CTRL_RESET = 0b11010100;
const touchInput = new device.io.Digital({
    pin: 16,
    mode: device.io.Digital.Input,
});
const screen = new device.io.SPI({
    ...device.SPI.default,
    select: 0,
    active: 0,
    hz: 1_000_000,
});
const calibration = {
    left: 1941,
    right: 107,
    top: 1980,
    bottom: 186,
    width: 240,
    height: 320,
};
let touched = 0;

// poll for touch input
System.setInterval(() => {
    if (touched !== touchInput.read()) {
        touched = 1 - touched;
    }
}, 33);

// check touch position if active
System.setInterval(() => {
    spi.write(Uint8Array.of(CTRL_RESET));
    spi.flush(true);

    if (touched) return;

    const sample = Uint16Array.of(CTRLX);
    spi.transfer(sample);
    let x = sample[0] >> 4;

    sample[0] = CTRLY;
    spi.transfer(sample);
    let y = sample[0] >> 4;

    spi.write(Uint32Array.of(0));

    spi.write(Uint8Array.of(CTRL_RESET));
    spi.flush(true);

    // calibrate
    x = ((x - calibration.left) * calibration.width / (calibration.right - calibration.left)) | 0;
    y = ((y - calibration.top) * calibration.height / (calibration.bottom - calibration.top)) | 0;

    // clamp
    x = Math.min(Math.max(x, 0), calibration.width - 1)
    y = Math.min(Math.max(y, 0), calibration.height - 1);

    console.log(`x: ${x}, y: ${y}`);
}, 100)
```

## Specifications

[Serial Peripheral Interface](https://419.ecma-international.org/#-10-io-classes-serial-peripheral-interface-spi)
