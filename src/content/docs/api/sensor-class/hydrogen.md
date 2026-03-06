---
title: Hydrogen Sensor
description: A sensor class for hydrogen (H) concentration measurements.
---

The `Hydrogen` sensor class provides access to a hydrogen sensor.

## Constructor

### `Hydrogen(options)`

Creates a new `Hydrogen` object instance.

```js
Hydrogen(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current hydrogen concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `H` - A number that represents the sampled hydrogen in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.Hydrogen({
  sensor: {
    io: device.io.I2C,
    address: 0x22
  }
});

const sample = sensor.sample();
console.log(`Hydrogen level: ${sample.H} ppm`);
```

## Specifications

[Hydrogen](https://419.ecma-international.org/#-14-sensor-classes-hydrogen)
