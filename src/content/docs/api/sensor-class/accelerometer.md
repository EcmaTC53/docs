---
title: Accelerometer Sensor
description: A sensor class for three-dimensional acceleration.
---

The `Accelerometer` sensor class provides access to a three-dimensional accelerometer.

## Constructor

### `Accelerometer(options)`

Creates a new `Accelerometer` object instance.

```js
Accelerometer(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current acceleration data.

```js
sample()
```

#### Return Value

An object with the following properties:

> `x` - A number that represents the sampled acceleration along the x axis in meters per second squared.
>
> `y` - A number that represents the sampled acceleration along the y axis in meters per second squared.
>
> `z` - A number that represents the sampled acceleration along the z axis in meters per second squared.

## Examples

```js
const accel = new device.sensor.Accelerometer({
  sensor: {
    io: device.io.I2C,
    address: 0x19
  }
});

const sample = accel.sample();
console.log(`X: ${sample.x}, Y: ${sample.y}, Z: ${sample.z}`);
```

## Specifications

[Accelerometer](https://419.ecma-international.org/#-14-sensor-classes-accelerometer)
