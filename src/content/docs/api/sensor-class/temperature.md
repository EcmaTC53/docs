---
title: Temperature Sensor
description: A sensor class for temperature measurements.
---

The `Temperature` sensor class provides access to a temperature sensor (thermometer).

## Constructor

### `Temperature(options)`

Creates a new `Temperature` object instance.

```js
Temperature(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current temperature data.

```js
sample()
```

#### Return Value

An object with the following property:

> `temperature` - A number that represents the sampled temperature in degrees Celsius.

## Examples

```js
const temp = new device.sensor.Temperature({
  sensor: {
    io: device.io.I2C,
    address: 0x48
  }
});

const sample = temp.sample();
console.log(`Current temperature: ${sample.temperature} °C`);
```

## Specifications

[Temperature](https://419.ecma-international.org/#-14-sensor-classes-temperature)
