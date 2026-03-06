---
title: Dust Sensor
description: A sensor class for dust concentration measurements.
---

The `Dust` sensor class provides access to a dust sensor.

## Constructor

### `Dust(options)`

Creates a new `Dust` object instance.

```js
Dust(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current dust concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `dust` - A number that represents the sampled dust levels in micrograms per cubic meter.

## Examples

```js
const sensor = new device.sensor.Dust({
  sensor: {
    io: device.io.Analog,
    pin: 32
  }
});

const sample = sensor.sample();
console.log(`Dust level: ${sample.dust} ug/m3`);
```

## Specifications

[Dust](https://419.ecma-international.org/#-14-sensor-classes-dust)
