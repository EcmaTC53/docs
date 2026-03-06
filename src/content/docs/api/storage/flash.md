---
title: Flash
description: A module for read, write, and erase operations for the content of flash partitions.
---

The `Flash` module provides low-level access to flash memory partitions.

```js
import flash from "embedded:storage/flash";
```

## Static Methods

### `open(options)`

Instantiates a `Flash Partition` instance from a flash partition path name.

```js
flash.open({ path, mode, format })
```

#### Parameters

`options`

> `path` - A string indicating the name of the flash partition path name to open.
>
> `mode` - A string indicating the mode used to access the partition. Values are `"r"` and `"r+"`. Defaults to `"r+"`.
>
> `format` - A string indicating the data format to use for read and write operations. The only supported value is `"buffer"`.

## Flash Partition Class Pattern

### `status()`

Returns an object with information about the partition.

#### Properties

> `size` - The total number of bytes in the partition.
>
> `blockLength` - The number of bytes in a block (sector).
>
> `blocks` - The number of blocks in the partition.

### `eraseBlock(from[, to])`

Erases one or more blocks in the partition.

### `read(count, offset)`

Reads `count` bytes from the partition starting at `offset`.

### `write(data, offset)`

Writes `data` to the partition starting at `offset`.

### `close()`

Releases all resources associated with the partition instance.

## Examples

```js
import flash from "embedded:storage/flash";

let partition = flash.open({ path: "ota-bootloader" });
let status = partition.status();

partition.eraseBlock(0);
partition.write(new Uint8Array([0x01, 0x02]), 0);

partition.close();
```

## Specifications

[Flash](https://419.ecma-international.org/#-26-persistent-storage-flash)
