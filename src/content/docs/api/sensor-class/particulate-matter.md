---
title: Particulate Matter Sensor
description: A sensor class for particulate matter concentration measurements.
---

The `ParticulateMatter` sensor class provides access to a particulate matter sensor.

## Constructor

### `ParticulateMatter(options)`

Creates a new `ParticulateMatter` object instance.

```js
ParticulateMatter(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current particulate matter concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `particulateMatter` - A number that represents the sampled particulate matter levels in micrograms per cubic meter.

## Examples

```js
const sensor = new device.sensor.ParticulateMatter({
  sensor: {
    io: device.io.I2C,
    address: 0x36
  }
});

const sample = sensor.sample();
console.log(`PM level: ${sample.particulateMatter} ug/m3`);
```

## Specifications

[Particulate Matter](https://419.ecma-international.org/#-14-sensor-classes-particulate-matter)
