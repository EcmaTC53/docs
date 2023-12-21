---
title: TCP Listener Socket
description: An [IO class](/api/io-class/) that listens for and accepts incoming [TCP](/glossary/#tcp) connection requests.

---

An [IO class](/api/io-class/) that listens for and accepts incoming [TCP](/glossary/#tcp) connection requests.

## Constructor

### `Listener`

Creates a new TCP `Listener` object instance.

```js
Listener(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `port` (optional) - a number specifying the port to listen on, defaults to `0` which will select an arbitrary available port on the system.
>
> `address` (optional) - A string with the [IP address](/glossary/#ip) of the network interface to bind to, defaults to "::" for IPv6 or "0.0.0.0" for IPv4.
>
> `onReadable` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when one or more new connection requests are received by the socket, which can be retrieved using the `read` method. The `requests` argument indicates the total number of pending connection requests.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Always returns `"socket/tcp"`.

## Instance Methods

### `read`

Returns a [`TCP` Socket](/api/io-class/tcp-socket) instance. The instance is already connected to the remote endpoint without any callbacks.

```js
read()
```

#### Return value

An instance of [`TCP` Socket](/api/io-class/tcp-socket) if available.

## Examples

The class can be imported from the `embedded` namespace:

```js
import Listener from "embedded:io/socket/listener";
```

### Simple TCP Server

This example implements a simple HTTP echo server. It accepts incoming requests and sends back the complete request (including the request headers) as the response body. The `Echo` class reads the request and generates the response based on the [`TCP` Socket class](/api/io-class/tcp-socket).

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

[TCP listener socket](https://419.ecma-international.org/#-10-io-classes-tcp-listener-socket)
