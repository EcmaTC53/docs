---
title: HTTP Server Class Pattern
description: A class pattern for responding to HTTP/1.1 requests.
---

The `HTTP Server Class Pattern` responds to HTTP/1.1 requests.

```js
import HTTPServer from "embedded:network/http/server";
```

## Constructor

### `HTTPServer(options)`

Creates a new `HTTPServer` object instance.

```js
HTTPServer(options)
```

#### Parameters

`options`

> `io` - An object containing a `TCP Listener` class constructor options object.
>
> `port` - The port number to listen on.
>
> `onConnect(connection)` - A callback function invoked when a new connection is initiated.

## Instance Methods

### `close()`

Closes the server and all active connections.

## Specifications

[HTTP Server Class Pattern](https://419.ecma-international.org/#-21-http-server-class-pattern)
