---
title: Soil Moisture Sensor
description: A sensor class for soil moisture measurements.
---

The `SoilMoisture` sensor class provides access to a soil moisture sensor.

## Constructor

### `SoilMoisture(options)`

Creates a new `SoilMoisture` object instance.

```js
SoilMoisture(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current soil moisture data.

```js
sample()
```

#### Return Value

An object with the following property:

> `moisture` - A number between 0 and 1 (inclusive) that represents the sampled relative soil moisture level, with 0 being the most dry and 1 the most wet.

## Examples

```js
const sensor = new device.sensor.SoilMoisture({
  sensor: {
    io: device.io.Analog,
    pin: 33
  }
});

const sample = sensor.sample();
console.log(`Soil moisture: ${sample.moisture * 100}%`);
```

## Specifications

[Soil Moisture](https://419.ecma-international.org/#-14-sensor-classes-soil-moisture)
