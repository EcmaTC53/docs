---
title: Serial
description: An [IO class](/api/io-class/) implements bi-directional [serial (UART)](/glossary/#serial) communication.

---

An [IO class](/api/io-class/) implements bi-directional [serial (UART)](/glossary/#serial) communication.

## Constructor

### `Serial`

Creates a new `Serial` object instance.

```js
Serial(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `receive` - a [pin specifier](/glossary/#pin-speficier) indicating the receive (RX) pin. May be required to read data.
>
> `transmit` - a [pin specifier](/glossary/#pin-speficier) indicating the transmit (TX) pin. May be required to write data.
>
> `baud` - a number specifying the speed of data over the TX/RX lines in bits-per-second (bps).
>
> `flowControl` (optional) - A string (`"hardware" | "none"`) specifying the kind of [flow control](https://en.wikipedia.org/wiki/Serial_port#Flow_control) used in the connection. Defaults to `"none"`.
>
> `dataTerminalReady` (optional) - a [pin specifier](/glossary/#pin-speficier) indicating the data terminal ready (DTR) pin.
>
> `requestToSend` (optional) - a [pin specifier](/glossary/#pin-speficier) indicating the request to send (RTS) pin.
>
> `clearToSend` (optional) - a [pin specifier](/glossary/#pin-speficier) indicating the clear to send (CTS) pin.
>
> `dataSetReady` (optional) - a [pin specifier](/glossary/#pin-speficier) indicating the data set ready (DSR) pin.
>
> `port` (optional) - For devices with more than one serial bus port, the [port specifier](/glossary/#port-specifier) for the instance.
>
> `format` (optional): a string (`"number" | "buffer"`) that indicates the type of data used by the read and write methods. Defaults to `"buffer"`.
>
> `onReadable(byteLength)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the instance has data available to read, which can be retrieved using the `read` method. The `byteLength` argument indicates the amount of bytes available.
>
> `onWritable(byteLength)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked first when the instance is ready to accept data, then when it can accept more data for output, which can be sent using the `write` method. The `byteLength` argument indicates the amount of bytes that can be written without overflowing the buffer.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

May return `"number"` or `"buffer"`. The string value set by the constructor options or by the script at any time to change how it reads data.

## Instance Methods

### `read`

Returns data from the IO instance.

```js
read()
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

If the [`format`](#format) is `"number"`, returns the next available byte as a number (from 0 to 255).

If the [`format`](#format) is `"buffer"`, returns [Byte Buffer](/glossary/#byte-buffer) if `byteLength` is defined, otherwise a number representing the amount of bytes read into the `buffer` argument. 

### `write`

Sends data to the IO instance.

```js
write(byteValue)
write(buffer)
```

#### Parameters

`byteValue`

Accepted when the [`format`](#forma) is a `"number"`, a byte value to send to the peripheral.

`buffer`

Accepted when the [`format`](#forma) is a `"buffer"`, a [Byte Buffer](/glossary/#byte-buffer) of data to send to the peripheral.

#### Exceptions

If the output buffer cannot accept all the bytes to be written, an exception is thrown.

### `flush`

Flushes the input and/or output queues of the serial instance.

```js
flush()
flush(input, output)
```

#### Parameters

`input`

Boolean value to indicate if the received but unread data should be flushed from the queue. Defaults to true.

`output`

Boolean value to indicate if the written but unsent data should be flushed from the queue. Defaults to true.

#### Exceptions

If only one argument is passed, an exception is thrown.

### `set`

Controls the value of the data terminal ready (DTR) and request to send (RTS) pins of the serial connection together with the break.

```js
set(options)
```

#### Parameters

`options`

An object of properties to configure the serial connection:

> `dataTerminalReady` (optional) - boolean value to set the connection's DTR pin, else clear it. The connection is unchanged if this property is undefined.
>
> `requestToSend` (optional) - boolean value to set the connection's RTS pin, else clear it. The connection is unchanged if this property is undefined.
>
> `break` (optional) - boolean value to set the connection's break signal, else clear it. The connection is unchanged if this property is undefined.


### `get`

Returns the value of the clear to send (CTS) and data set ready (DSR) pins.

```js
get()
get(options)
```

#### Parameters

`options`

An object of properties to store the state of the CTS and DSR pins. Defaults to an empty object if not defined:

> `clearToSend` - boolean value if the state of the CTS pin is set (`true`) or cleared (`false`).
>
> `dataSetReady` - boolean value if the state of the DSR pin is set (`true`) or cleared (`false`).

#### Returns

An object of properties containing the state of the CTS and DSR pins:

> `clearToSend` - boolean value if the state of the CTS pin is set (`true`) or cleared (`false`).
>
> `dataSetReady` - boolean value if the state of the DSR pin is set (`true`) or cleared (`false`).

## Examples

The class can be imported from the `embedded` namespace or found on the [host](/glossary/#host) [`device` global object](/api/host-provider):

```js
import Serial from "embedded:io/serial";
const Serial = device.io.Serial;
```

### Is there an echo?

This example instantiates a Serial connection that writes each byte it reads when the `onReadable` callback is invoked. It uses default [RX](/glossary/#rx)/[TX](/glossary/#tx) pins from the [`device` global](/api/host-provider).
The baud rate is set to a [common speed](https://en.wikipedia.org/wiki/Serial_port#Speed) times the 8 data bits expected to be returned individually by the [`read`](#read) method since the default [`format`](#format) is `"number"`.

```js
const message = "hello world\r\n";

const serial = new device.io.Serial({
    ...device.Serial.default,
    baud: 115_200 * 8,
    onReadable(count) {
        while (count--) {
            this.write(this.read());
        }
    }
});

for (let i = 0; i < message.length; i++) {
    serial.write(message.charCodeAt(i));
}
```

### Continuous write

This example instantiates a Serial connection the continuously writes text to the output. It uses the `onWritable` callback to write data as quickly as possible without overflowing the output queue. The [`format`](#format) is set to `"buffer"` to maximize throughput.

```js
const message = ArrayBuffer.fromString(`
Since publication of the first edition in 1997,
ECMAScript has grown to be one of the world's most widely used general-purpose programming languages.
It is best known as the language embedded in web browsers
but has also been widely adopted for server and embedded applications.\r\n`);

let offset = 0;

const serial = new device.io.Serial({
    ...device.Serial.default,
    baud: 115_200,
    format: "buffer",
    onWritable(count) {
        while (count) {
            const use = Math.min(count, message.byteLength - offset);
            const buffer = message.slice(offset, offset + use) 
            this.write(buffer);

            count -= use;
            offset += use;
            if (offset >= message.byteLength) {
                offset = 0;
            }
        }
    },
});
```

## Specifications

[Serial](https://419.ecma-international.org/#-10-io-classes-serial)
