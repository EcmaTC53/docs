---
title: Humidity Sensor
description: A sensor class for relative humidity measurements.
---

The `Humidity` sensor class provides access to a humidity sensor (hygrometer).

## Constructor

### `Humidity(options)`

Creates a new `Humidity` object instance.

```js
Humidity(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current humidity data.

```js
sample()
```

#### Return Value

An object with the following property:

> `humidity` - A number that represents the sampled relative humidity as a percentage.

## Examples

```js
const sensor = new device.sensor.Humidity({
  sensor: {
    io: device.io.I2C,
    address: 0x40
  }
});

const sample = sensor.sample();
console.log(`Humidity: ${sample.humidity}%`);
```

## Specifications

[Humidity](https://419.ecma-international.org/#-14-sensor-classes-humidity)
