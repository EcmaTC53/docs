---
title: Carbon Dioxide Sensor
description: A sensor class for carbon dioxide (CO2) concentration measurements.
---

The `CarbonDioxide` sensor class provides access to a carbon dioxide sensor.

## Constructor

### `CarbonDioxide(options)`

Creates a new `CarbonDioxide` object instance.

```js
CarbonDioxide(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current CO2 concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `CO2` - A number that represents the sampled carbon dioxide in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.CarbonDioxide({
  sensor: {
    io: device.io.I2C,
    address: 0x58
  }
});

const sample = sensor.sample();
console.log(`CO2 Level: ${sample.CO2} ppm`);
```

## Specifications

[Carbon Dioxide](https://419.ecma-international.org/#-14-sensor-classes-carbon-dioxide)
