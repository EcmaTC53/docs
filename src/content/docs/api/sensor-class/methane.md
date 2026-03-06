---
title: Methane Sensor
description: A sensor class for methane (CH4) concentration measurements.
---

The `Methane` sensor class provides access to a methane sensor.

## Constructor

### `Methane(options)`

Creates a new `Methane` object instance.

```js
Methane(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current methane concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `CH4` - A number that represents the sampled methane in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.Methane({
  sensor: {
    io: device.io.I2C,
    address: 0x25
  }
});

const sample = sensor.sample();
console.log(`Methane level: ${sample.CH4} ppm`);
```

## Specifications

[Methane](https://419.ecma-international.org/#-14-sensor-classes-methane)
