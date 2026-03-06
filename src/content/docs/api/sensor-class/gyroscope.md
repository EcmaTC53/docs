---
title: Gyroscope Sensor
description: A sensor class for three-dimensional angular velocity.
---

The `Gyroscope` sensor class provides access to a three-dimensional gyroscope.

## Constructor

### `Gyroscope(options)`

Creates a new `Gyroscope` object instance.

```js
Gyroscope(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current angular velocity data.

```js
sample()
```

#### Return Value

An object with the following properties:

> `x` - A number that represents the sampled angular velocity around the x axis in radians per second.
>
> `y` - A number that represents the sampled angular velocity around the y axis in radians per second.
>
> `z` - A number that represents the sampled angular velocity around the z axis in radians per second.

## Examples

```js
const sensor = new device.sensor.Gyroscope({
  sensor: {
    io: device.io.I2C,
    address: 0x68
  }
});

const sample = sensor.sample();
console.log(`X: ${sample.x}, Y: ${sample.y}, Z: ${sample.z}`);
```

## Specifications

[Gyroscope](https://419.ecma-international.org/#-14-sensor-classes-gyroscope)
