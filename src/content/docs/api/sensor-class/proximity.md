---
title: Proximity Sensor
description: A sensor class for proximity and range detection.
---

The `Proximity` sensor class provides access to a proximity sensor or range finder.

## Constructor

### `Proximity(options)`

Creates a new `Proximity` object instance.

```js
Proximity(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current proximity data.

```js
sample()
```

#### Return Value

An object with the following properties:

> `near` - A boolean that indicates if a proximate object is detected.
>
> `distance` (optional) - A number that represents the distance to the nearest sensed object in centimeters.
>
> `max` (optional) - A number that represents the maximum sensing range of the sensor in centimeters.

## Examples

```js
const sensor = new device.sensor.Proximity({
  sensor: {
    io: device.io.I2C,
    address: 0x39
  }
});

const sample = sensor.sample();
if (sample.near) {
  console.log(`Object detected at ${sample.distance} cm`);
}
```

## Specifications

[Proximity](https://419.ecma-international.org/#-14-sensor-classes-proximity)
