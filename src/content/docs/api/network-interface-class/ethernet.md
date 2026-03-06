---
title: Ethernet
description: A network interface class for Ethernet connections.
---

The `Ethernet` class provides access to an Ethernet network interface. It is a subclass of the [`Network Interface Class Pattern`](/api/network-interface-class).

```js
import Ethernet from "embedded:network/interface/ethernet";
```

## Constructor

### `Ethernet(options)`

Creates a new `Ethernet` object instance.

```js
Ethernet(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `port` (optional) - A port specifier that indicates the logical network interface to bind to.

## Specifications

[Ethernet Network Interface](https://419.ecma-international.org/#-17-network-interface-class-pattern-ethernet-network-interface)
