---
title: Peripheral Class Pattern
description:  The Peripheral Class Pattern builds on the Base Class Pattern to provide a foundation for implementing access to different kinds of peripheral devices.

---

The Peripheral Class Pattern builds on the [Base Class Pattern](/api/base-class) to provide a foundation for implementing access to different kinds of peripheral devices.

## Constructor

### `Peripheral()`

Creates a new `Peripheral` object instance.

```js
Peripheral(options)
```

#### Parameters

`options`

An object of properties used to construct the class. The options object defines the hardware connections of the peripheral. These use the same properties as the IO types corresponding to the peripheral. The following are defined by this abstract class: 

> `io`: the constructor for the [IO Class](/api/io-class/) used to communicate with the peripheral

The rest of the options should include the properties accepted by the `io` constructor. See the [example](#examples) for more details.

If the peripheral has multiple hardware connections, the options object will accept seperate top-level properties to nest the options for each `io` type, see [examples](#examples) for more detauls.

## Instance Properties

Classes that conform to this class pattern may choose to provide accessors, e.g. setters and getters, for configuration properties.

A setter should behave in the same way as the [`configure`](#configure) method invoked with a single property.

## Instance Methods

### `close`

Releases all resources associated with the instance before completing. It may be called more than once without erroring. Once this method has been called, calling other methods on the instance throws an exception.

```js
close()
```

### `configure`

Modifies how the peripheral operates. A given call to this method should only modify the features specified in the options object. It may be called more than once.

```js
configure(options)
```

#### Parameters

`options`

Follows the same rules as the `options` used in the [constructor](#constructor).

## Examples

The following code is an example of using an I<sup>2</sup>C peripheral:

```js
import I2CPeripherial from "embedded:example/i2cperipherial";
import I2C from "embedded:io/i2c";

const periph = new I2CPeripherial({
    io: I2C,
    data: 4,
    clock: 5,
    address: 0x30,
});
```

The following code is an example of a peripheral that has multiple hardware connections:

```js
import I2CPeripheralWithInterrupt from "embedded:example/i2cperipheralwithinterrupt";
import I2C from "embedded:io/i2c";
import Digital from "embedded:io/digital";

const periph = new I2CPeripheralWithInterrupt({
    communication: {
        io: I2C,
        data: 4,
        clock: 5,
        address: 0x30
    },
    interrupt: {
        io: Digital,
        pin: 5
    }
});
```

## Specifications

[Peripheral Class Pattern](https://419.ecma-international.org/#-12-peripheral-class-pattern)
