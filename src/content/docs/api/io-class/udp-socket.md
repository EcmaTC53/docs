---
title: UDP Socket
description:  An [IO class](/api/io-class/) that implements the sending and receiving of [UDP](/glossary/#udp) packets.
---

An [IO class](/api/io-class/) that implements the sending and receiving of [UDP](/glossary/#udp) packets.

## Constructor

### `UDP`

Creates a new `UDP` socket object instance.

```js
UDP(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `port` (optional) - a number specifying the local port to bind to.
>
> `address` (optional) - A string with the [IP address](/glossary/#ip) of the network interface to bind to.
>
> `multicast` (optional) - A string with the [IP address](/glossary/#ip) of the [multicast](/glossary/#multicast) address to bind to.
>
> `timeToLive` (optional) - A number from 1 to 255 indicating the [multicast](/glossary/#multicast) [time-to-live]() value. Required if the `multicast` property is set.
>
> `onReadable(bytes)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when new data is available, which can be retrieved using the `read` method. The `bytes` argument indicates the number of available bytes to be read.
>
> `onWriteable(bytes)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when space has been made available to output additional data via the `write` method. The `bytes` argument indicates the number of bytes that may be written without overflowing the output buffers.
>
> `onError()` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when an error occurs or the TCP socket disconnects. Once this callback is invoked, the connection is no longer usable.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Returns the value set by the `format` property of the options object in the constructor, either `"number"` or `"buffer"`. Defaults to `"buffer"`.

### `remoteAddress`

A read-only property providing the [IP address](/glossary/#ip) of the remote endpoint as a string. If the remote address is not available, returns `undefined`.

### `remotePort`

A read-only property providing the port number of the remote endpoint as a number. If the remote port is not available, returns `undefined`.

## Instance Methods

### `read`

Returns data from the remote endpoint.

```js
read()
read(byteLength)
read(buffer)
```

#### Parameters

`byteLength`

Accepted when the [`format`](#format) is a `"buffer"`, the number of bytes to read into the returned [Byte Buffer](/glossary/#byte-buffer).

`buffer`

Accepted when the [`format`](#format) is a `"buffer"`, a pre-allocated [Byte Buffer](/glossary/#byte-buffer) for the instance to fill.

#### Return value

`undefined` if no data is available.

If the [`format`](#format) is `"number"`, returns the next available byte as a number (from 0 to 255).

If the [`format`](#format) is `"buffer"`, returns [Byte Buffer](/glossary/#byte-buffer) if `byteLength` is defined, otherwise a number representing the amount of bytes read into the `buffer` argument. 

### `write`

Transmits data to the remote endpoint.

```js
write(byteValue)
write(buffer)
```

#### Parameters

`byteValue`

Accepted when the [`format`](#format) is a `"number"`, a byte value to send to the remote endpoint.

`buffer`

Accepted when the [`format`](#format) is a `"buffer"`, a [Byte Buffer](/glossary/#byte-buffer) of data to send to the remote endpoint.

#### Exceptions

If the output buffer cannot accept all the bytes to be written, an exception is thrown.

## Examples

The class can be imported from the `embedded` namespace:

```js
import UDP from "embedded:io/socket/udp";
```

## Specifications

[UDP socket](https://419.ecma-international.org/#-10-io-classes-UDP-socket)




