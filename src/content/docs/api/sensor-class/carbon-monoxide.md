---
title: Carbon Monoxide Sensor
description: A sensor class for carbon monoxide (CO) concentration measurements.
---

The `CarbonMonoxide` sensor class provides access to a carbon monoxide sensor.

## Constructor

### `CarbonMonoxide(options)`

Creates a new `CarbonMonoxide` object instance.

```js
CarbonMonoxide(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current CO concentration data.

```js
sample()
```

#### Return Value

An object with the following property:

> `CO` - A number that represents the sampled carbon monoxide in parts per million (ppm).

## Examples

```js
const sensor = new device.sensor.CarbonMonoxide({
  sensor: {
    io: device.io.I2C,
    address: 0x31
  }
});

const sample = sensor.sample();
console.log(`CO Level: ${sample.CO} ppm`);
```

## Specifications

[Carbon Monoxide](https://419.ecma-international.org/#-14-sensor-classes-carbon-monoxide)
