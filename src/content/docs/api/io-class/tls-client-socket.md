---
title: TLS Client Socket
description:  An [IO class](/api/io-class/) that implements a logical subclass of the [`TCP` IO class](/api/io-class/tcp-socket) that secures the connection using [TLS](/glossary/#tls).
---

An [IO class](/api/io-class/) that implements a logical subclass of the [`TCP` IO class](/api/io-class/tcp-socket) that secures the connection using [TLS](/glossary/#tls).

Implementations may use certificates from a certificate store, which is unspecified by ECMA-419. All certificate and key data uses [DER binary format](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/#ftoc-heading-9) instead of [PEM Base64 endcoded text](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/#ftoc-heading-1).

## Constructor

### `TLS`

Creates a new `TLS` client socket object instance.

```js
TLS(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `port` - a number specifying the remote port to connect to. Optional if the `from` property is set.
>
> `address` - A string with the [IP address](/glossary/#ip) of the remote endpoint to connect to. Optional if the `from` property is set.
>
> `tls` - An object to configure the Transport Layer Security of the socket.
>> `host` - A string with the host name of the remote endpoint, supporting [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
>>
>> `minimumVersion` (optional) - A TLS version string* indicating the minimum acceptable TLS version for the connection. The default is implementation dependent.
>>
>> `maximumVersion` (optional) - A TLS version string* indicating the maximum acceptable TLS version for the connection. The default is implementation dependent.
>>
>> `applicationLayerProtocol` (optional) - A string or [Byte Buffer](/glossary/#byte-buffer) to indicate support for a single application layer protocol, or an Array of one or more string or [Byte Buffer](/glossary/#byte-buffer) to indicate support for multiple application layer protocols. Supporting [Application-Layer Protocol Negotiation Extension (ALPN)](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation)
>>
>> `maximumFragmentLength` (optional) - A number indicating the maximum fragment size in bytes, supporting [Maximum Fragment Length](https://www.rfc-editor.org/rfc/rfc6066#section-4)
>>
>> `ca` (optional) - A [Byte Buffer](/glossary/#byte-buffer) or an Array of [Byte Buffers](/glossary/#byte-buffer) containing certificate chains for the connection.
>>
>> `clientKey` (optional) - A [Byte Buffer](/glossary/#byte-buffer) or an Array of [Byte Buffers](/glossary/#byte-buffer) containing client keys for the connection. 
>>
>> `clientCertificate` (optional) - A [Byte Buffer](/glossary/#byte-buffer) or an Array of [Byte Buffers](/glossary/#byte-buffer) containing client certificate chains for the connection.
>>
>
> `noDelay` (optional) - A boolean indicating whether to disable [Nagle's algorithm]() on the socket. This is equivalent to the [`TCP_NODELAY` option in BSD sockets](). Defaults to false.
>
> `keepAlive` (optional) - A number of milliseconds specifying the [keep-alive interval]() of the socket. Defaults to disabling the keep-alive capability.
>
> `from` (optional) - An existing `TCP` socket instance from which the native socket instance is taken to use with the newly created socket instance. Intended to be used with a TCP [`Listener`](/api/io-class/tcp-listener). The original instance is closed as ownership of the native socket is tranferred to the new instance.
>
> `format` (optional) - a string that indicates the type of data used by the read method. Accepts `"number"` or `"buffer"`. Defaults to `"buffer"`.
>
> `onReadable(bytes)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when new data is available, which can be retrieved using the `read` method. The `bytes` argument indicates the number of available bytes to be read.
>
> `onWriteable(bytes)` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when space has been made available to output additional data via the `write` method. The `bytes` argument indicates the number of bytes that may be written without overflowing the output buffers.
>
> `onError()` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when an error occurs or the TCP socket disconnects. Once this callback is invoked, the connection is no longer usable.

#### Exceptions

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `format`

Returns the value set by the `format` property of the options object in the constructor, either `"number"` or `"buffer"`. Defaults to `"buffer"`.

### `remoteAddress`

A read-only property providing the [IP address](/glossary/#ip) of the remote endpoint as a string. If the remote address is not available, returns `undefined`.

### `remotePort`

A read-only property providing the port number of the remote endpoint as a number. If the remote port is not available, returns `undefined`.

## Instance Methods

### `read`

Returns data from the remote endpoint.

```js
read()
read(byteLength)
read(buffer)
```

#### Parameters

`byteLength`

Accepted when the [`format`](#format) is a `"buffer"`, the number of bytes to read into the returned [Byte Buffer](/glossary/#byte-buffer).

`buffer`

Accepted when the [`format`](#format) is a `"buffer"`, a pre-allocated [Byte Buffer](/glossary/#byte-buffer) for the instance to fill.

#### Return value

`undefined` if no data is available.

If the [`format`](#format) is `"number"`, returns the next available byte as a number (from 0 to 255).

If the [`format`](#format) is `"buffer"`, returns [Byte Buffer](/glossary/#byte-buffer) if `byteLength` is defined, otherwise a number representing the amount of bytes read into the `buffer` argument. 

### `write`

Transmits data to the remote endpoint.

```js
write(buffer)
```

#### Parameters

`buffer`

Accepted when the [`format`](#format) is a `"buffer"`, a [Byte Buffer](/glossary/#byte-buffer) of data to send to the remote endpoint.

#### Return value

Number indicating the updated writable count.

#### Exceptions

If the output buffer cannot accept all the bytes to be written, an exception is thrown.

## Examples

The class can be imported from the `embedded` namespace:

```js
import TLS from "embedded:io/socket/tcp/tls";
```

## Specifications

[TLS client socket](https://419.ecma-international.org/#-10-io-classes-tls-client-socket)


