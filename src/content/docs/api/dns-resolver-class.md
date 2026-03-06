---
title: Domain Name Resolver Class Pattern
description: A class pattern for resolving DNS names to IP addresses.
---

The `Domain Name Resolver Class Pattern` defines an interface for resolving hostnames to IP addresses.

## Instance Methods

### `resolve(options[, callback])`

Resolves a hostname to an IP address.

```js
resolve({ host }, callback)
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

[Domain Name Resolver Class Pattern](https://419.ecma-international.org/#-18-domain-name-resolver-class-pattern)
