---
title: WebSocket Client Class Pattern
description: A class pattern for WebSocket client connections.
---

The `WebSocket Client Class Pattern` establishes a connection to an endpoint hosting a WebSocket server.

```js
import WebSocketClient from "embedded:network/ws/client";
```

## Constructor

### `WebSocketClient(options)`

Creates a new `WebSocketClient` object instance.

```js
WebSocketClient(options)
```

#### Parameters

`options`

> `socket` - A `TCP` class constructor options object.
>
> `host` - The remote hostname to connect to.
>
> `port` (optional) - The remote port number to connect to.
>
> `protocol` (optional) - The WebSocket sub-protocol as a string.

## Instance Methods

### `read()`

Returns the current message.

### `write(data, options)`

Sends a message.

### `close()`

Initiates a clean close of the WebSocket connection.

## Specifications

[WebSocket Client Class Pattern](https://419.ecma-international.org/#-23-websocket-client-class-pattern)
