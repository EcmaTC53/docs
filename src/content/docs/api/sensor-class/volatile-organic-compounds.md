---
title: Volatile Organic Compounds Sensor
description: A sensor class for volatile organic compounds (VOC) concentration measurements.
---

The `VolatileOrganicCompounds` sensor class provides access to a sensor that detects the amount of volatile organic compounds suspended in air.

## Constructor

### `VolatileOrganicCompounds(options)`

Creates a new `VolatileOrganicCompounds` object instance.

```js
VolatileOrganicCompounds(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current VOC concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `tvoc` - A number that represents the sampled total volatile organic compounds in parts per billion (ppb).

## Examples

```js
const sensor = new device.sensor.VolatileOrganicCompounds({
  sensor: {
    io: device.io.I2C,
    address: 0x58
  }
});

const sample = sensor.sample();
console.log(`VOC Level: ${sample.tvoc} ppb`);
```

## Specifications

[Volatile Organic Compounds](https://419.ecma-international.org/#-14-sensor-classes-volatile-organic-compounds)
