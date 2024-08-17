---
title: IO Provider Class Pattern
description:  The IO Provider Class Pattern builds on the Base Class Pattern to provide a foundation to access a collection of IO Classes.

---

The IO Provider Class Pattern builds on the [Base Class Pattern](/api/base-class) to provide a foundation to access a collection of [IO Classes](/api/io-class).

## Constructor

### `IOProvider()`

Creates a new `IOProvider` object instance.

```js
IOProvider(options)
```

#### Parameters

`options`

An object of properties used to construct the class. The options object defines the hardware connections of the provider. These use the same properties as the IO types corresponding to the hardware connection. The following are defined by this abstract class: 


> `onReady` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when the instance is ready for use.
>
> `onError` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when a non-recoverable error occurs. The function may be passed an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) depending on the IO type.

## Instance Properties

This class inherits all instance properties from the [Base Class Pattern](/api/base-class).

## Instance Methods

### `close`

Releases all resources associated with the instance before completing. It may be called more than once without erroring. Once this method has been called, calling other methods on the instance throws an exception.

If an instance provides any asynchronous methods, it should provide an asynchronous close method via the callback function.

```js
close()
close(callbackFn)
```

#### Parameters

`callbackFn`

For asynchronous classes, a function that executes when the close process has completed.

> `result`
>   The first argument to the completion callback is always a result code. A value of 0 indicates success; an Error object indicates failure.

## Examples

The following code is an example of using an IO Provider to access a [Digital pin](/api/io-class/digital) on a GPIO expander connected via [I²C](/api/io-class/i2c), such as [MCP23017](https://www.adafruit.com/product/5346):

```js
import Expander from "embedded:io/provider/expander";

const expander = new Expander({
    io: device.io.I2C,
    data: 5,
    clock: 4,
    hz: 1_000_000,
    address: 0x20,
});

const led = new expander.Digital({
    pin: 13,
    mode: expander.Digital.Output,
});
led.write(1);

```

## Specifications

[IO Provider Class Pattern](https://419.ecma-international.org/#-11-io-provider-class-pattern)
