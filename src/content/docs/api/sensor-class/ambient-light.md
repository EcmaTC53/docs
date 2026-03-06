---
title: Ambient Light Sensor
description: A sensor class for ambient light measurements.
---

The `AmbientLight` sensor class provides access to an ambient light sensor (lightmeter).

## Constructor

### `AmbientLight(options)`

Creates a new `AmbientLight` object instance.

```js
AmbientLight(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current light intensity data.

```js
sample()
```

#### Return Value

An object with the following property:

> `illuminance` - A number that represents the sampled ambient light level in Lux.

## Examples

```js
const sensor = new device.sensor.AmbientLight({
  sensor: {
    io: device.io.I2C,
    address: 0x23
  }
});

const sample = sensor.sample();
console.log(`Illuminance: ${sample.illuminance} lux`);
```

## Specifications

[Ambient Light](https://419.ecma-international.org/#-14-sensor-classes-ambient-light)
