---
title: MQTT Client Class Pattern
description: A class pattern for MQTT client connections.
---

The `MQTT Client Class Pattern` establishes a connection to a remote endpoint hosting an MQTT server (broker).

```js
import MQTTClient from "embedded:network/mqtt/client";
```

## Constructor

### `MQTTClient(options)`

Creates a new `MQTTClient` object instance.

```js
MQTTClient(options)
```

#### Parameters

`options`

> `socket` - A `TCP` class constructor options object.
>
> `host` - The remote hostname to connect to.
>
> `port` (optional) - The remote port number to connect to.

## Instance Methods

### `read()`

Returns bytes from the current message.

### `write(data, options)`

Sends message data.

### `close()`

Initiates a disconnect from the MQTT broker.

## Specifications

[MQTT Client Class Pattern](https://419.ecma-international.org/#-24-mqtt-client-class-pattern)
