---
title: Hydrogen Sulfide Sensor
description: A sensor class for hydrogen sulfide (H2S) concentration measurements.
---

The `HydrogenSulfide` sensor class provides access to a hydrogen sulfide sensor.

## Constructor

### `HydrogenSulfide(options)`

Creates a new `HydrogenSulfide` object instance.

```js
HydrogenSulfide(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current H2S concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `H2S` - A number that represents the sampled hydrogen sulfide in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.HydrogenSulfide({
  sensor: {
    io: device.io.I2C,
    address: 0x37
  }
});

const sample = sensor.sample();
console.log(`H2S Level: ${sample.H2S} ppm`);
```

## Specifications

[Hydrogen Sulfide](https://419.ecma-international.org/#-14-sensor-classes-hydrogen-sulfide)
