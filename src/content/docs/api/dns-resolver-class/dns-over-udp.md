---
title: DNS over UDP
description: DNS over UDP provides DNS resolution using the traditional DNS protocol over UDP.
---

DNS over UDP uses the traditional DNS protocol over UDP for hostname resolution.

```js
import DNSServer from "embedded:network/dns-over-udp";
```

## Constructor

### `DNSServer(options)`

Creates a new DNS over UDP server object instance.

```js
DNSServer(options)
```

#### Parameters

`options`

> `address` - A string representing the DNS server IP address.
>
> `port` - The DNS server port number.

## Instance Methods

### `close()`

Closes the DNS server.

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

[DNS over UDP](https://419.ecma-international.org/#-18-domain-name-resolver-class-pattern-dns-over-udp)
