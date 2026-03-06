---
title: Compound Sensor
description: A sensor class for devices that provide more than one kind of sensor reading.
---

A single physical sensor may provide more than one kind of sensor reading. For example, a single sensor package may include both a temperature sensor and a humidity sensor. The `Compound` sensor class provides access to such devices.

## Constructor

### `Compound(options)`

Creates a new `Compound` object instance.

```js
Compound(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing sub-objects for each kind of sensor reading.

```js
sample()
```

#### Return Value

An object containing one or more sub-objects, each named after the corresponding sensor class (e.g., `thermometer`, `hygrometer`).

## Examples

```js
const sensor = new device.sensor.Compound({
  sensor: {
    io: device.io.I2C,
    address: 0x44
  }
});

const sample = sensor.sample();
if (sample.thermometer) {
  console.log(`Temperature: ${sample.thermometer.temperature} °C`);
}
if (sample.hygrometer) {
  console.log(`Humidity: ${sample.hygrometer.humidity}%`);
}
```

## Specifications

[Compound sensors](https://419.ecma-international.org/#-14-sensor-classes-compound-sensors)
