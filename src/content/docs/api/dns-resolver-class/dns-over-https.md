---
title: DNS over HTTPS
description: DNS over HTTPS (DoH) provides DNS resolution using the HTTPS protocol for enhanced security and privacy.
---

DNS over HTTPS (DoH) uses the HTTPS protocol for DNS resolution, providing improved security and privacy.

```js
import DNS from "embedded:network/dns-over-https";
```

## Constructor

### `DNS(options)`

Creates a new DNS over HTTPS object instance.

```js
DNS(options)
```

#### Parameters

`options`

> `url` - A string containing the DoH server URL.
>
> `headers` (optional) - An object of additional HTTP headers to include in requests.

## Instance Methods

### `close()`

Closes the DNS client.

```js
close()
```

### `resolve(options[, callback])`

Resolves a hostname to an IP address.

```js
resolve(options, callback)
```

#### Parameters

`options`

> `host` - A string containing the hostname to resolve.

`callback`

```js
callback(error, name, address)
```

> `error` - An `Error` object if the operation failed, or `null` if successful.
>
> `name` - The hostname that was resolved.
>
> `address` - The resolved IP address as a string.

## Specifications

[DNS over HTTPS (DoH)](https://419.ecma-international.org/#-18-domain-name-resolver-class-pattern-dns-over-https-doh)
