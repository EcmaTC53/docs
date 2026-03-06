---
title: Oxygen Sensor
description: A sensor class for oxygen (O) concentration measurements.
---

The `Oxygen` sensor class provides access to an oxygen sensor.

## Constructor

### `Oxygen(options)`

Creates a new `Oxygen` object instance.

```js
Oxygen(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current oxygen concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `O` - A number that represents the sampled oxygen in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.Oxygen({
  sensor: {
    io: device.io.I2C,
    address: 0x35
  }
});

const sample = sensor.sample();
console.log(`Oxygen Level: ${sample.O} ppm`);
```

## Specifications

[Oxygen](https://419.ecma-international.org/#-14-sensor-classes-oxygen)
