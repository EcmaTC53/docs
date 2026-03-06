---
title: Update
description: A module for over-the-air firmware updates to flash partitions.
---

The `Update` module provides a way to apply firmware updates to flash memory partitions.

```js
import update from "embedded:update";
```

## Static Methods

### `open(options)`

Instantiates an `Update` instance for a specific flash partition.

```js
update.open({ partition, mode, byteLength })
```

#### Parameters

`options`

> `partition` - A `Flash Partition` instance to be updated.
>
> `mode` - A string indicating the mode. Values are `"a"` (append) and `"w"` (random access). Defaults to `"a"`.
>
> `byteLength` - The total size of the update in bytes.

## Update Instance Class Pattern

### `write(data[, offset])`

Writes update data. If mode is `"a"`, data is appended. If mode is `"w"`, data is written at the specified offset.

### `complete()`

Indicates that the update has been completely applied and should be activated. This typically requires a device restart.

### `close()`

Releases any resources. If `complete()` has not been called, the update is aborted.

## Examples

```js
import update from "embedded:update";
import flash from "embedded:storage/flash";

const partition = flash.open({ path: "ota-partition" });
const updater = update.open({ partition });

updater.write(new Uint8Array([/* update data */]));
updater.complete();

updater.close();
```

## Specifications

[Update](https://419.ecma-international.org/#-26-persistent-storage-update)
