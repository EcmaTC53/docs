---
title: Nitric Oxide Sensor
description: A sensor class for nitric oxide (NO) concentration measurements.
---

The `NitricOxide` sensor class provides access to a nitric oxide sensor.

## Constructor

### `NitricOxide(options)`

Creates a new `NitricOxide` object instance.

```js
NitricOxide(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current NO concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `NO` - A number that represents the sampled nitric oxide in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.NitricOxide({
  sensor: {
    io: device.io.I2C,
    address: 0x33
  }
});

const sample = sensor.sample();
console.log(`NO Level: ${sample.NO} ppm`);
```

## Specifications

[Nitric Oxide](https://419.ecma-international.org/#-14-sensor-classes-nitric-oxide)
