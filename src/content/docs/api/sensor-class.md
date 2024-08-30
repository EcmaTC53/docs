---
title: Sensor Class Pattern
description:  The Sensor Class Pattern builds on the Peripheral Class Pattern to provide a foundation for implementing access to a variety of sensors.

---

The Sensor Class Pattern builds on the [Peripheral Class Pattern](/api/peripheral-class) to provide a foundation for implementing access to a variety of sensors.

## Constructor

### `Sensor()`

Creates a new `Sensor` object instance.

```js
Sensor(options)
```

#### Parameters

`options`

An object of properties used to construct the class. The options object defines the hardware connections of the sensor. These use the same properties as the IO types corresponding to the sensor. The following are defined by this abstract class: 

> `sensor`: object of properties to construct the [peripheral](/api/peripheral-class) used to communicate with the hardware
>
> `onError` (optional): A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that is invoked when a non-recoverable error occurs. The function may be passed an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) depending on the sensor type.

Additional top-level properties and callbacks may be included if required by the sensor for hardware communication, such as interrupts or resets. 

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

Modifies how the sensor operates.

```js
configure(options)
```

#### Parameters

`options`

Object of properties to update the sensor. This may include the hardware's sampling interval, what data is sampled, and the range of data sampled.

### `sample`

Get the readings from the sensor. Implementations of this class pattern may define parameters for this method.

```js
sample()
```

#### Return value

An object containing one or more properties describing the values read by the sensor. See the individual implementation documentation for more details.

If the sample data includes timestamps, they must conform to the `time` or `ticks` properties of the "Sample Objet" specified by the [Provenance Sensor Class Pattern](/api/provenance-sensor-class).

## Examples

This is an abstract class that is not instantiated directly. The examples that follow are demonstrations of potential implementations.

The following code is an example of instantiating a temperature sensor implementation of the Sensor Class Pattern that has an interrupt on a [`Digital`](/api/io-class/digital) pin:

```js
import I2C from "embedded:io/i2c";
import Digital from "embedded:io/digital";
import Temperature from "embedded:sensor/Temperature/LM75";

const temp = new Temperature({
    sensor: {
        io: I2C,
        data: 4,
        clock: 5,
        address: 0x30,
    },
    alert: {
        io: Digital,
        pin: 6,
    },
});

temp.configure({
    highTemperature: 33,
    lowTemperature: 29,
    polarity: 0,
    shutdownMode: true,
    thermostatMode: "interrupt",
    faultQueue: 2,
});

System.setInterval(() => {
    const sample = temp.sample();
    console.log(`Temperature: ${sample.temperature.toFixed(2)} C, alert: ${sample.alert}`)
}, 2000);
```

## Specifications

[Sensor Class Pattern](https://419.ecma-international.org/#-13-sensor-class-pattern)

