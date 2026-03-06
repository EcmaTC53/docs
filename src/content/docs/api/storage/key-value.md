---
title: Key-Value
description: A module for reading, writing, and deleting key-value pairs within domains.
---

The `Key-Value` module provides persistent storage for key-value pairs.

```js
import keyValue from "embedded:storage/key-value";
```

## Static Methods

### `open(options)`

Instantiates a `Key-Value Domain` instance from a key-value domain name.

```js
keyValue.open({ path, mode, format })
```

#### Parameters

`options`

> `path` - A string indicating the name of the key-value domain to open.
>
> `mode` - A string indicating the mode used to access the domain. Values are `"r"`, `"r+"`, and `"w"`. Defaults to `"r+"`.
>
> `format` - A string indicating the initial data format to use for read and write operations. Defaults to `"buffer"`.

## Key-Value Domain Class Pattern

### `read(key[, buffer])`

Returns the value for the specified key.

### `write(key, value)`

Stores the specified value for the key.

### `delete(key)`

Removes the key-value pair for the specified key.

### `close()`

Releases all resources associated with the domain instance.

### `format`

A property to change the data format used by the instance. Supported formats include `"string"`, `"uint8"`, `"int8"`, `"uint16"`, `"int16"`, `"uint32"`, `"int32"`, `"uint64"`, `"int64"`, and `"buffer"`.

## Examples

```js
import keyValue from "embedded:storage/key-value";

let settings = keyValue.open({ path: "settings", format: "string" });
settings.write("ssid", "my-network");
settings.write("password", "secret");

console.log(settings.read("ssid"));

settings.close();
```

## Specifications

[Key-Value](https://419.ecma-international.org/#-26-persistent-storage-key-value)
