---
title: HTTP Server Connection
description: An HTTP server connection instance represents an active HTTP request/response session.
---

The `HTTP Server Connection` instance represents an active connection to an HTTP server.

## Instance Properties

### `route`

The route object for this connection.

```js
route
```

## Instance Methods

### `accept(options)`

Accepts a new stream and returns a connection instance.

```js
accept(options)
```

#### Parameters

`options`

> `socket` - A `TCP Server Connection` instance.
>
> `TLSSocket` (optional) - A TLS socket instance for HTTPS connections.

### `close()`

Closes the connection.

```js
close()
```

### `detach()`

Detaches the underlying TCP socket from the HTTP connection, returning control of the socket to the caller.

```js
detach()
```

#### Return Value

A `TCP Server Connection` instance.

### `get route()`

Gets the route configuration for this connection.

```js
route
```

#### Return Value

A route object.

### `set route(options)`

Sets the route configuration for this connection.

```js
route = options
```

#### Parameters

`options`

> `path` (optional) - A string representing the URL path.
>
> `method` (optional) - A string representing the HTTP method.
>
> `handler` (optional) - A callback function to handle the route.

### `respond(options)`

Sends an HTTP response.

```js
respond(options)
```

#### Parameters

`options`

> `status` - The HTTP status code as a number.
>
> `headers` (optional) - An object containing response headers.
>
> `body` (optional) - The response body.

## Specifications

[HTTP Server Connection instance](https://419.ecma-international.org/#-21-http-server-class-pattern-http-server-connection-instance)
