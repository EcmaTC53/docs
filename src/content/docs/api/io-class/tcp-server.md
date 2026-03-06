---
title: TCP Server
description: A TCP server listens for incoming TCP connections.
---

The `TCP Server` class provides the ability to accept incoming TCP connections.

```js
import TCPServer from "embedded:io/tcp-server";
```

## Constructor

### `TCPServer(options)`

Creates a new TCP server object instance.

```js
TCPServer(options)
```

#### Parameters

`options`

> `io` - An `IO` constructor options object for the underlying TCP listener socket.
>
> `port` - The port number to listen on.

## Instance Properties

### `port`

The port the server is listening on.

```js
server.port
```

## Instance Methods

### `close()`

Closes the TCP server and all active connections.

```js
close()
```

### `#tcpReadable(count)`

A method that is called when a new client connection is available.

```js
tcpReadable(count)
```

#### Parameters

`count` - The number of available connections.

#### Return Value

A `TCP Server Connection` instance.

## Specifications

[TCP Server Class Pattern](https://419.ecma-international.org/#-tcp-server-class-pattern)
