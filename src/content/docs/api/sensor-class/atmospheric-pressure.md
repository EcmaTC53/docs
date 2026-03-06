---
title: Atmospheric Pressure Sensor
description: A sensor class for atmospheric pressure measurements.
---

The `AtmosphericPressure` sensor class provides access to an atmospheric pressure sensor or barometer.

## Constructor

### `AtmosphericPressure(options)`

Creates a new `AtmosphericPressure` object instance.

```js
AtmosphericPressure(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current pressure data.

```js
sample()
```

#### Return Value

An object with the following property:

> `pressure` - A number that represents the sampled atmospheric pressure in Pascals.

## Examples

```js
const sensor = new device.sensor.AtmosphericPressure({
  sensor: {
    io: device.io.I2C,
    address: 0x76
  }
});

const sample = sensor.sample();
console.log(`Pressure: ${sample.pressure} Pa`);
```

## Specifications

[Atmospheric Pressure](https://419.ecma-international.org/#-14-sensor-classes-atmospheric-pressure)
