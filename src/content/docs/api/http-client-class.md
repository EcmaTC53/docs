---
title: HTTP Client Class Pattern
description: A class pattern for making HTTP/1.1 requests.
---

The `HTTP Client Class Pattern` makes one or more HTTP/1.1 requests to a single host.

```js
import HTTPClient from "embedded:network/http/client";
```

## Constructor

### `HTTPClient(options)`

Creates a new `HTTPClient` object instance.

```js
HTTPClient(options)
```

#### Parameters

`options`

> `socket` - An object containing a `TCP` class constructor options object.
>
> `port` (optional) - The remote port number to connect to. Defaults to 80.
>
> `host` - The remote hostname to connect to as a string.
>
> `dns` (optional) - A `Domain Name Resolver` class constructor options object to use to resolve the host.

## Instance Methods

### `request(options)`

Queues an HTTP request described by the required options object.

### `close()`

Cancels all outstanding requests and releases resources.

## Specifications

[HTTP Client Class Pattern](https://419.ecma-international.org/#-20-http-client-class-pattern)
