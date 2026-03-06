---
title: Files
description: A module providing operations for files, directories, and links.
---

The `Files` module provides operations for files, directories, and links. The module's default export is a `Directory` instance for the file system root.

```js
import files from "embedded:storage/files";
```

## Directory Class Pattern

### `openDirectory(options)`

Returns a `Directory` instance for a directory subpath.

```js
openDirectory({ path })
```

#### Parameters

`options`

> `path` - A string indicating the directory to open.

### `openFile(options)`

Returns a `File` instance for a file subpath.

```js
openFile({ path, mode })
```

#### Parameters

`options`

> `path` - A string indicating the name of the file to open.
>
> `mode` - A string indicating the mode used to access the file. Values are `"r"`, `"r+"`, `"w"`, and `"w+"`. Defaults to `"r"`.

### `delete(path)`

Removes the file or directory specified by the path.

### `move(fromPath, toPath[, directory])`

Moves and/or renames a file or directory.

### `status(path)`

Returns a status object with information about the file or directory at the specified path.

### `createDirectory(path)`

Creates a directory at the specified path.

### `scan([path])`

Returns an iterator that enumerates the contents of a directory.

### `readLink(path)`

Reads the target of a symbolic link.

```js
readLink(path)
```

#### Parameters

`path` - A string indicating the path to the symbolic link.

#### Return Value

A string representing the target of the symbolic link.

### `CheckPath(path)`

Checks if a path is valid and accessible.

```js
CheckPath(path)
```

#### Parameters

`path` - A string indicating the path to check.

### `createLink(path, target)`

Creates a symbolic link at `path` pointing to `target`.

```js
createLink(path, target)
```

#### Parameters

`path` - A string indicating where to create the link.
>
> `target` - A string indicating the target of the link.

### `[Symbol.iterator]()`

Returns an iterator that yields entries in the directory.

```js
[Symbol.iterator]()
```

## Directory Iterator Class

### `constructor(directory[, path])`

Creates a new directory iterator instance.

```js
constructor(directory, path)
```

#### Parameters

`directory` - The parent Directory instance.
>
> `path` (optional) - The starting path for iteration.

### `next()`

Returns the next entry in the directory.

```js
next()
```

#### Return Value

An object with `done` and `value` properties.

### `return()`

Closes the iterator and releases resources.

```js
return()
```

## Home Directory Object

The `Files` module provides access to the home directory, which is the default directory for user files.

```js
import files from "embedded:storage/files";

// Access files in the user's home directory
const config = files.openFile({ path: "config/settings.json" });
```

## File Class Pattern

### `read(count, offset)`

Reads `count` bytes from the file starting at `offset`.

### `write(buffer, offset)`

Writes the content of `buffer` to the file starting at `offset`.

### `status()`

Returns a status object for the file instance.

#### Properties

> `size` - The length of the file in bytes.
>
> `mode` - The file's mode.
>
> `isFile()` - Returns `true` if the path resolves to a file.
>
> `isDirectory()` - Returns `true` if the path resolves to a directory.

### `flush()`

Ensures any data cached in memory for the file instance is persisted to storage.

### `close()`

Releases all resources associated with the file or directory instance.

## Examples

```js
import files from "embedded:storage/files";

const settings = files.openDirectory({ path: "settings" });
const wifi = settings.openFile({ path: "wifi.txt", mode: "r" });

const status = wifi.status();
const data = wifi.read(status.size, 0);

wifi.close();
settings.close();
```

## Specifications

[Files](https://419.ecma-international.org/#-26-persistent-storage-files)
