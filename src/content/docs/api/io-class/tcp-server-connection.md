---
title: TCP Server Connection
description: A TCP server connection represents an active connection to a TCP server.
---

The `TCP Server Connection` class represents an active connection to a TCP server.

```js
import TCPConnection from "embedded:io/tcp-server-connection";
```

## Constructor

### `TCPConnection(server, from)`

Creates a new TCP server connection instance.

```js
TCPConnection(server, from)
```

#### Parameters

`server` - The parent TCP server instance.

`from` - The client address information.

## Instance Methods

### `close()`

Closes the TCP connection.

```js
close()
```

### `read(count)`

Reads data from the TCP connection.

```js
read(count)
```

#### Parameters

`count` - The number of bytes to read.

#### Return Value

A `Buffer` containing the read data.

### `write(data[, options])`

Writes data to the TCP connection.

```js
write(data, options)
```

#### Parameters

`data` - The data to write.

`options` (optional) - Write options.

### `#tcpError(error)`

A method that is called when an error occurs on the connection.

```js
tcpError(error)
```

#### Parameters

`error` - An `Error` object describing the error.

### `#tcpReadable(count)`

A method that is called when data is available to read.

```js
tcpReadable(count)
```

#### Parameters

`count` - The number of bytes available to read.

### `#tcpWritable(count)`

A method that is called when the connection is ready for writing.

```js
tcpWritable(count)
```

#### Parameters

`count` - The number of bytes that can be written.

## Specifications

[TCP Server Connection Class Pattern](https://419.ecma-international.org/#-tcp-server-connection-class-pattern)
