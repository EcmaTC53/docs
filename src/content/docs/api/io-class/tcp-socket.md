---
title: TCP Socket
description:  An [IO class](/api/io-class/) that implements a general-purpose, bi-directional [TCP](/glossary/#tcp) connection.

---

An [IO class](/api/io-class/) that implements a general-purpose, bi-directional [TCP](/glossary/#tcp) connection.

This is not a TCP listener, see the [`Listener` IO class](/api/io-class/tcp-listener).

## Constructor

### `TCP`

Creates a new `TCP` socket object instance.

```js
TCP(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `port` - a number specifying the remote port to connect to. Optional if the `from` property is set.
>
> `address` - A string with the [IP address](/glossary/#ip) of the remote endpoint to connect to. Optional if the `from` property is set.
>
> `noDelay` (optional) - A boolean indicating whether to disable [Nagle's algorithm]() on the socket. This is equivalent to the [`TCP_NODELAY` option in BSD sockets](). Defaults to false.
>
> `keepAlive` (optional) - A number of milliseconds specifying the [keep-alive interval]() of the socket. Defaults to disabling the keep-alive capability.
>
> `from` (optional) - An existing `TCP` socket instance from which the native socket instance is taken to use with the newly created socket instance. Intended to be used with a TCP [`Listener`](/api/io-class/tcp-listener). The original instance is closed as ownership of the native socket is tranferred to the new instance.
>
> `format` (optional) - a string that indicates the type of data used by the read method. Accepts `"number"` or `"buffer"`. Defaults to `"buffer"`.
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
import TCP from "embedded:io/socket/tcp";
```

### GET it yet?

The example instantiates a `TCP` socket to connect to an HTTP server, send a GET request, and logs the response.

```js
import TCP from "embedded:io/socket/tcp";

new TCP({
    address: "93.184.216.34", // resolved IP address of www.example.com
    port: 80,
    onWriteable() {
        if (this.requested) return;

        this.write(ArrayBuffer.from("GET / HTTP/1.1\r\n"));
        this.write(ArrayBuffer.from("Host: www.example.com\r\n"));
        this.write(ArrayBuffer.from("Connection: close\r\n"));
        this.write(ArrayBuffer.from("\r\n"));
        this.requested = true;
    }
    onReadable(bytes) {
        console.log(`Number of bytes: ${bytes}`);
        console.log(String.fromArrayBuffer(this.read()));
    }
    onError() {
        console.log("** Disconnected **");
    }
});
```

### Simple TCP Server

This example implements a simple HTTP echo server. It accepts incoming requests using a [TCP `Listener`](/api/io-class/tcp-listener) instance and sends back the complete request (including the request headers) as the response body. The `Echo` class reads the request and generates the response based on the [`TCP` Socket class](/api/io-class/tcp-socket).

```js
import Listener from "embedded:io/socket/listener";
import TCP from "embedded:io/socket/tcp";

class Echo extends TCP {
    constructor(options) {
        super({
            ...options,
            onReadable: this.onReadable,
        });
    }
    onReadable() {
        const response = this.read();

        this.write(ArrayBuffer.fromString("HTTP/1.1 200 OK\r\n"));
        this.write(ArrayBuffer.fromString("connection: close\r\n"));
        this.write(ArrayBuffer.fromString("content-type: text/plain\r\n"));
        this.write(ArrayBuffer.fromString(`content-length: ${response.byteLength}\r\n`));
        this.write(ArrayBuffer.fromString("\r\n"));
        this.write(response);

        this.close();
    }
}

new Listener({
    port: 80,
    onReadable(requests) {
        while (requests--) {
            new Echo({ from: this.read() });
        }
    }
});
```

## Specifications

[TCP socket](https://419.ecma-international.org/#-10-io-classes-tcp-socket)
