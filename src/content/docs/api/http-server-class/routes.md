---
title: HTTP Server Connection Routes
description: Routes define how the HTTP server responds to incoming requests based on URL path and method.
---

Routes define how the HTTP server responds to incoming requests.

## Route Object

A route object defines how the HTTP server handles requests matching certain criteria.

```js
{
  path: "/api/data",
  method: "GET",
  handler: (request, response) => {
    response.send({ status: "ok" });
  }
}
```

## Static Data Route

A static data route serves fixed response data without invoking a handler.

```js
{
  path: "/health",
  method: "GET",
  status: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ status: "healthy" })
}
```

### Properties

> `path` - The URL path to match.
>
> `method` - The HTTP method to match (GET, POST, PUT, DELETE, etc.).
>
> `handler` (optional) - A callback function invoked when the route matches. If not provided, static data is returned.
>
> `status` (optional) - The HTTP status code for static responses.
>
> `headers` (optional) - An object of response headers.
>
> `body` (optional) - The static response body.

## WebSocket Handshake Route

A WebSocket handshake route upgrades an HTTP connection to a WebSocket connection.

```js
{
  path: "/ws",
  method: "GET",
  handler: (request, response) => {
    // Upgrade to WebSocket
    const ws = request.accept();
    ws.onmessage = (event) => {
      console.log(event.data);
    };
  }
}
```

### Properties

> `path` - The URL path for WebSocket connections.
>
> `method` - Must be "GET" for WebSocket upgrades.
>
> `handler` - A callback that receives the request and can call `request.accept()` to upgrade to WebSocket.

## Specifications

[HTTP Server Connection routes](https://419.ecma-international.org/#-22-http-server-connection-routes)
