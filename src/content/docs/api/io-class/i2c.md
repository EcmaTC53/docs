---
title: I2C
description: An [IO class](/api/io-class/) to communicate over an [I<sup>2</sup>C](/glossary/#i2c) bus.

---

An [IO class](/api/io-class/) to communicate over an [I<sup>2</sup>C](/glossary/#i2c) bus, can be synchronous or asynchronous.

## Constructor

### `I2C`

Creates a new synchronous `I2C` object instance.

```js
I2C(options)
```

### `I2C.Async`

Creates a new asynchronous `i2C` object instance.

```js
I2C.Async(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `data` - a [pin specifier](/glossary/#pin-speficier) indicating the data (SDA) pin.
>
> `clock` - a [pin specifier](/glossary/#pin-speficier) indicating the clock (SCL) pin.
>
> `hz` - The communication speed of the bus in hertz.
>
> `address` - The 7-bit address of the peripheral to communicate with.
>
> `port` (optional) - For devices with more than one I<sup>2</sup>C bus port, the [port specifier](/glossary/#port-specifier) for the instance.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

If synchronous IO is not supported, the `I2C` constructor will throw.

If asynchronous IO is not supported, the `I2C.Async` constructor will throw.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"buffer"`. The string value set by the constructor options or by the script at any time to change how it reads data.

## Instance Methods

### `read`

Returns [Byte Buffer](/glossary/byte-buffer) data from the IO instance.

```js
read(byteLength)
read(buffer)

read(byteLength, callbackFn)
read(buffer, callbackFn)

read(byteLength, stopBit)
read(buffer, stopBit)

read(byteLength, stopBit, callbackFn)
read(buffer, stopBit, callbackFn)
```

#### Parameters

`byteLength`

The number of bytes to read into the returned [Byte Buffer](/glossary/#byte-buffer).

`buffer`

A pre-allocated [Byte Buffer](/glossary/#byte-buffer) for the instance to fill.

`stopBit`

A boolean value to indicate the end of the I<sup>2</sup>C transaction. Defaults to `true`.

The I<sup>2</sup>C protocol is transaction-based. At the end of each read operation, a stop bit is sent. If the stop bit is `true`, it indicates the end of the transaction; if `false`, it indicates that the transaction has additional operations pending.

`callbackFn`

```js
callbackFn(error, buffer)
callbackFn(error, byteLength)
```

For asynchronous classes, a function that executes when the data has been read. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.
>
> `buffer`
>   The [Byte Buffer](/glossary/#byte-buffer) of data if `byteLength` is passed to `read`
>
> `byteLength`
>   The number of bytes read into the `buffer` passed to `read`

#### Return value

[Byte Buffer](/glossary/#byte-buffer) if `byteLength` is defined, otherwise a number representing the amount of bytes read into the `buffer` argument. 

### `write`

Sends [Byte Buffer](/glossary/#byte-buffer) data to the IO instance.

```js
write(buffer)
write(buffer, callbackFn)
write(buffer, stopBit)
write(buffer, stopBit, callbackFn)
```

#### Parameters

`buffer`

A [Byte Buffer](/glossary/#byte-buffer) of data to send to the peripheral.

`stopBit`

A boolean value to indicate the end of the I<sup>2</sup>C transaction. Defaults to `true`.

The I<sup>2</sup>C protocol is transaction-based. At the end of each write operation, a stop bit is sent. If the stop bit is `true`, it indicates the end of the transaction; if `false`, it indicates that the transaction has additional operations pending.

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the data has been written. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import I2C from "embedded:io/i2c";
const I2C = device.io.I2C;
```

### A touch of magic

This example instantiates an I<sup>2</sup>C bus that reads the number of touch points from an [FT6206 touch sensor](https://www.adafruit.com/product/1947), and then retrieves the X and Y coordinates for the active touch points.

```js
const touch = new device.io.I2C({
	data: 4,
	clock: 5,
	hz: 600000,
	address: 0x38
});

touch.write(Uint8Array.of(2));

let count = touch.read(1);
count = (new Uint8Array(count))[0];
console.log(`Touch points ${count}.\n`);

if (count)
	touch.write(Uint8Array.of(3), false);
	const data = new Uint8Array(touch.read(6 * count));
}
```

## Specifications

[I<sup>2</sup>C - synchronous IO](https://419.ecma-international.org/#-10-io-classes-ic-synchronous-io)

[I<sup>2</sup>C - asynchronous IO](https://419.ecma-international.org/#-10-io-classes-ic-asynchronous-io)
