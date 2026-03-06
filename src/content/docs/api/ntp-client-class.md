---
title: NTP Client Class
description: A class for retrieving the current time from a network time source.
---

The `NTP` client retrieves the current time from a network time source using the Network Time Protocol (NTP).

```js
import NTP from "embedded:network/ntp/client";
```

## Constructor

### `NTP(options)`

Creates a new `NTP` client object instance.

```js
NTP(options)
```

#### Parameters

`options`

> `socket` - A `UDP` class constructor options object.
>
> `servers` - An array of one or more strings indicating the NTP hosts to use.

## Instance Methods

### `close()`

Closes the NTP client and releases any resources.

```js
close()
```

### `getTime(callback)`

Initiates a time synchronization operation.

```js
getTime(callback)
```

#### Parameters

`callback`

```js
callback(error, time)
```

> `error` - An `Error` object if the operation failed, or `null` if successful.
>
> `time` - The synchronized time as an ECMAScript number value.

## Examples

```js
import NTP from "embedded:network/ntp/client";

const ntp = new NTP({
  servers: ["pool.ntp.org"]
});

ntp.getTime((error, time) => {
  if (error) return console.error("NTP failed");
  console.log(`Current time: ${new Date(time)}`);
});
```

## Specifications

[NTP Client](https://419.ecma-international.org/#-19-ntp-client)
