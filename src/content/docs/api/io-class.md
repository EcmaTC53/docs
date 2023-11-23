---
title: IO Class Pattern
description:  The IO Class Pattern builds on the Base Class Pattern to provide a foundation for implementing access to a variety of hardware inputs and outputs.

---

The IO Class Pattern builds on the [Base Class Pattern](/api/base-class) to provide a foundation for implementing access to a variety of hardware inputs and outputs.

## Constructor

### `IO()`
Creates a new `IO` object instance.

```js
IO(options)
```

If the constructor requires a resource that is already in use — whether by a script or the native [host](/glossary/#host) — an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception is thrown.

#### Parameters

`options`

An object of properties used to construct the class. The `options` object contains the specification of the hardware resources to be used by the instance. The following are defined by this abstract class: 

> `format`: a string that indicates the type of data used by the read and write methods. IO types may choose to support one or more of the following and may define others.
>
> - `number` - an ECMAScript number value, typically used for bytes
> - `buffer` - a Byte Buffer. For buffer types with defined `byteOffset` and `byteLength` properties, these restrict the bytes accessed in views. Implementations always allocate [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) instances for return values.
> - `object` - an ECMAScript object, for data representing a data structure (e.g. JSON)
> - `string;ascii` - an ECMAScript string, for reading from and writing to IO using 7-bit ASCII data
> - `string;utf8` - an ECMAScript string, for reading from and writing to IO using UTF-8 formatted data
> 
> `onReadable`: A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the instance has data available to read, which can be retrieved using the `read` method.
>
> `onWritable`: A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the instance can accept more data for output, which can be sent using the `write` method.
>
> `onError`: A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when a non-recoverable error occurs. The function may be passed an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) depending on the IO type.

## Instance Properties

This class inherits all instance properties from the [Base Class Pattern](/api/base-class), along with the following:

### `format`

The string value set by the constructor options or by the script at any time to change how it reads and writes data.

The property is implemented as a getter and setter. Attempting to set the property to an unsupported value does not change the value and instead throws an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception.

## Instance Methods

This class inherits all instance methods from the [Base Class Pattern](/api/base-class), along with the following:

### `read`

Returns data from the IO instance. 

```js
read()
read(callbackFn)
read(sizeOrBuffer)
read(sizeOrBuffer, callbackFn)
```

#### Parameters

`callbackFn`

```js
callbackFn(error, data)
```

A function that executes when the data has been read. It will always be last for asynchronous implementations that accept additional arguments.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.
>
> `data`
>   The same expectations of the return value for synchronous reads.

`sizeOrBuffer`

When the [`format`](#format) property is `"buffer"`, the method accepts this argument that is a `Number` or `Byte Buffer`.
When it is a `Number`, `read` allocates the result as an ArrayBuffer with up to as many bytes as the Number argument.
When it is a `Byte Buffer`, `read` fills in as many bytes as possible and the result is the number of bytes read as a `Number`.

#### Return value

For asynchronous reads or if no data is available, it returns `undefined`.

Otherwise for synchronous reads, the return type depends on the [`format`](#format) value set on the instance.
For asynchronous reads, the result is passed to the `callbackFn` argument when invoked.

#### Exceptions

If the instance does not support reading (because the IO type is inherently unreadable or because it is configured for write-only) an exception is thrown.

### `write`

Sends data to the IO instance.

```js
write(data)
write(data, callbackFn)
```

#### Parameters

`data`

The type of `data` accepted by this method depends on the value of the [`format`](#format) property.
When the [`format`](#format) property is `"buffer"`, the method accepts a `Byte Buffer`.

`callbackFn`

```js
callbackFn(error, data)
```

A function that executes when the data has been written. It will always be last for asynchronous implementations that accept additional arguments.

> `error`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object indicates failure.
>
> `data`
>   The same expectations of the return value for synchronous reads.

#### Return value

For asynchronous reads or if no data is available, it returns `undefined`.

Otherwise for synchronous reads, the return type depends on the [`format`](#format) value set on the instance.
For asynchronous reads, the result is passed to the `callbackFn` argument when invoked.

#### Exceptions

The following conditions cause an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) exception to be thrown:

- the device cannot accept the data because its buffers are full
- the data is incompatible
- hardware error.

## Examples

No examples since this class is purely abstract and cannot be instantiated directly.

## Specifications

[IO Class Pattern](https://419.ecma-international.org/#-9-io-class-pattern)
