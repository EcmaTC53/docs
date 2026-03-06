---
title: Magnetometer Sensor
description: A sensor class for three-dimensional magnetic field strength.
---

The `Magnetometer` sensor class provides access to a three-dimensional magnetometer.

## Constructor

### `Magnetometer(options)`

Creates a new `Magnetometer` object instance.

```js
Magnetometer(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current magnetic field data.

```js
sample()
```

#### Return Value

An object with the following properties:

> `x` - A number that represents the sampled magnetic field around the x axis in microtesla.
>
> `y` - A number that represents the sampled magnetic field around the y axis in microtesla.
>
> `z` - A number that represents the sampled magnetic field around the z axis in microtesla.

## Examples

```js
const sensor = new device.sensor.Magnetometer({
  sensor: {
    io: device.io.I2C,
    address: 0x1E
  }
});

const sample = sensor.sample();
console.log(`X: ${sample.x} uT, Y: ${sample.y} uT, Z: ${sample.z} uT`);
```

## Specifications

[Magnetometer](https://419.ecma-international.org/#-14-sensor-classes-magnetometer)
