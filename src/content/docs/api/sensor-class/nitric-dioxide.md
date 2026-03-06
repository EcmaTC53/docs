---
title: Nitric Dioxide Sensor
description: A sensor class for nitric dioxide (NO2) concentration measurements.
---

The `NitricDioxide` sensor class provides access to a nitric dioxide sensor.

## Constructor

### `NitricDioxide(options)`

Creates a new `NitricDioxide` object instance.

```js
NitricDioxide(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current NO2 concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `NO2` - A number that represents the sampled nitric dioxide in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.NitricDioxide({
  sensor: {
    io: device.io.I2C,
    address: 0x34
  }
});

const sample = sensor.sample();
console.log(`NO2 Level: ${sample.NO2} ppm`);
```

## Specifications

[Nitric Dioxide](https://419.ecma-international.org/#-14-sensor-classes-nitric-dioxide)
