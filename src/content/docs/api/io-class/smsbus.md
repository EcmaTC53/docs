---
title: SMBus
description: An [IO class](/api/io-class/) extends the [`I2C` class](/api/io-class/i2c) with additional methods to communicate with devices that implement the [SMBus protocol](/glossary/#smbus).

---
An [IO class](/api/io-class/) extends the [`I2C` class](/api/io-class/i2c) with additional methods to communicate with devices that implement the [SMBus protocol](/glossary/#smbus), can be synchronous or asynchronous.

## Constructor

### `SMBus`

Creates a new synchronous `SMBus` object instance.

```js
SMBus(options)
```

### `SMBus.Async`

Creates a new asynchronous `SMBus` object instance.

```js
SMBus.Async(options)
```

#### Parameters

`options`

An object of properties used to construct the class. The same as the [`I2C` constructor options](/api/i2c/#constructor) plus `stop`.

> `data` - a [pin specifier](/glossary/#pin-speficier) indicating the data (SDA) pin.
>
> `clock` - a [pin specifier](/glossary/#pin-speficier) indicating the clock (SCL) pin.
>
> `hz` - The communication speed of the bus in hertz.
>
> `address` - The 7-bit address of the peripheral to communicate with.
>
> `port` (optional) - For devices with more than one SMBus port, the [port specifier](/glossary/#port-specifier) for the instance.
>
> `stop` (optional) - A boolean value indicating whether to set the stop bit when writing the SMBus register number. Defaults to `false`.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

If synchronous IO is not supported, the `SMBus` constructor will throw.

If asynchronous IO is not supported, the `SMBus.Async` constructor will throw.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"buffer"`. The string value set by the constructor options or by the script at any time to change how it reads data.

## Instance Methods

### `read`

Inherited from the underlying [`I2C` class](/api/io-class/i2c), returns [Byte Buffer](/glossary/byte-buffer) data from the IO instance.

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

### `readUint8`

Returns unsigned 8-bit integer value from the IO instance.

```js
readUint8(register)
readUint8(register, callbackFn)
```

#### Parameters

`register`

The number identifying the register to read from.

`callbackFn`

```js
callbackFn(error, value)
callbackFn(error, byteLength)
```

For asynchronous classes, a function that executes when the data has been read. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.
>
> `value`
>   A positive number with a max value of 255.

#### Return value

A positive number with a max value of 255.

### `readUint16`

Returns unsigned 16-bit integer value from the IO instance.

```js
readUint16(register)

readUint16(register, callbackFn)

readUint16(register, bigEndian)

readUint16(byteLength, bigEndian, callbackFn)
```

#### Parameters

`register`

The number identifying the register to read from.

`bigEndian`

A boolean value to indicate if the value is read in [big-endian (BE)](/glossary/#big-endian) byte order (`true`) or [little-endian (LE)](/glossary/#little-endian) byte order (`false`). Defaults to false.

`callbackFn`

```js
callbackFn(error, value)
```

For asynchronous classes, a function that executes when the data has been read. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.
>
> `value`
>   A positive number with a max value of 65535.

#### Return value

A positive number with a max value of 65535.

### `readBuffer`

Returns a stream of bytes starting at the specified `register`.

```js
readBuffer(register, byteLength)
readBuffer(register, buffer)

readBuffer(register, byteLength, callbackFn)
readBuffer(register, buffer, callbackFn)
```

#### Parameters

`register`

The number identifying the register to read from.

`byteLength`

The number of bytes to read into the returned [Byte Buffer](/glossary/#byte-buffer).

`buffer`

A pre-allocated [Byte Buffer](/glossary/#byte-buffer) for the instance to fill.

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
>   The [Byte Buffer](/glossary/#byte-buffer) of data if `byteLength` is passed to `readBuffer`
>
> `byteLength`
>   The number of bytes read into the `buffer` passed to `readBuffer`

#### Return value

[Byte Buffer](/glossary/#byte-buffer) if `byteLength` is defined, otherwise a number representing the amount of bytes read into the `buffer` argument. 

### `readQuick`

Send an [SMBus Quick command](https://www.kernel.org/doc/html/latest/i2c/smbus-protocol.html#smbus-quick-command) with the Read/Write bit set to 1.

```js
readQuick()
readQuick(callbackFn)
```

#### Parameters

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the command has been sent. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

#### Return value

None (`undefined`)

### `receiveByte`

Returns an 8-bit value from the IO instance.

```js
receiveByte()
receiveByte(callbackFn)
```

#### Parameters

`callbackFn`

```js
callbackFn(error, value)
```

For asynchronous classes, a function that executes when the data has been read. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.
>
> `value`
>   A positive number with max value of 255.

#### Return value

A positive number with max value of 255.

### `write`

Inherited from the underlying [`I2C` class](/api/io-class/i2c), sends [Byte Buffer](/glossary/#byte-buffer) data to the IO instance.

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

### `writeUint8`

Writes a positive 8-bit value to the IO instance.

```js
writeUint8(register, value)
writeUint8(register, value, callbackFn)
```

#### Parameters

`register`

The number identifying the register to read from.

`value`

A positive number with a max value of 255.

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the data has been written. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

### `writeUint16`

Writes a positive 16-bit value to the IO instance.

```js
writeUintl16(register, value)
writeUintl16(register, value, bigEndian)
writeUintl16(register, value, callbackFn)
writeUintl16(register, value, bigEndian, callbackFn)
```

#### Parameters

`register`

The number identifying the register to read from.

`value`

A positive number with a max value of 65535.

`bigEndian`

A boolean value to indicate if the value is written in [big-endian (BE)](/glossary/#big-endian) byte order (`true`) or [little-endian (LE)](/glossary/#little-endian) byte order (`false`). Defaults to false.

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the data has been written. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

### `writeBuffer`

Write a stream of bytes starting at the specified `register`.

```js
write(register, buffer)
write(register, buffer, callbackFn)
```

#### Parameters

`register`

The number identifying the register to read from.

`buffer`

A [Byte Buffer](/glossary/#byte-buffer) of data to send to the peripheral.

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the data has been written. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

### `writeQuick`

Send an [SMBus Quick command](https://www.kernel.org/doc/html/latest/i2c/smbus-protocol.html#smbus-quick-command) with the Read/Write bit set to 0.

```js
writeQuick()
writeQuick(callbackFn)
```

#### Parameters

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the command has been sent. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

### `sendByte`

Sends a `command` as an 8-bit number to the IO instance.

```js
sendByte(command)
sendByte(command, callbackFn)
```

#### Parameters

`command`

A positive number with a max value of 255.

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the `command` has been sent. It will always be last.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import SMBus from "embedded:io/smbus";
const SMBus = device.io.SMBus;
```

### Seeing infrared

This example instantiates a SMBus that interacts with an [AMG88](https://cdn.sparkfun.com/assets/4/1/c/0/1/Grid-EYE_Datasheet.pdf) infrared array sensor for high precision temperature detection across an area and thermal imaging.

```js
/**
* Referencing register mapping here: https://github.com/sparkfun/SparkFun_GridEYE_Arduino_Library/blob/master/src/SparkFun_GridEYE_Arduino_Library.h#L72-L89
**/

const REGISTERS = {
	POWER_CONTROL: 0x00,
	RESET: 0x01,
	FRAMERATE: 0x02,
	INT_CONTROL: 0x03,
	STATUS: 0x04,
	STATUS_CLEAR: 0x05,
	AVERAGE: 0x07,
	INT_LEVEL_UPPER: 0x08,
	INT_LEVEL_LOWER: 0x0A,
	INT_LEVEL_HYST: 0x0C,
	THERMISTOR: 0x0E,
	INT_TABLE_INT0: 0x10,
	RESERVED_AVERAGE: 0x1F,
	TEMPERATURE_START: 0x80
};
const values = new Uint16Array(16);
const sensor = new device.io.SMBus({
	data: 4,
	clock: 5,
	hz: 400_000,
	address: 0x69
});

// wake
sensor.writeUint8(REGISTERS.POWER_CONTROL, 0);

// sample temperature
const temperature = convert(sensor.readUint16(REGISTERS.THERMISTOR)) * 0.0625;
const pixels = new Float32Array(64);

for (let i = 0; i < pixels.length; i += 16) {
    sensor.readBuffer(REGISTERS.TEMPERATURE_START + (i << 1), values.buffer);
    for (let j = 0; j < 16; j++) {
        pixels[i + j] = convert(values[j]) + 0.25;
    }
}

console.log(`Temperature: ${temperature}; Pixels: ${pixels}`);

// power off
sensor.writeUint8(REGISTERS.POWER_CONTROL, 1 << 4);

// convert to negative if needed
function convert(value) {
    if (value & (1 << 11)) {
        return -(value & ~(1 << 11));
    }
    return value;
}
```

## Specifications

[System management bus - synchronous IO](https://419.ecma-international.org/#-10-io-classes-system-management-bus-smbus-synchronous-io)

[System management bus - asynchronous IO](https://419.ecma-international.org/#-10-io-classes-system-management-bus-smbus-asynchronous-io)
