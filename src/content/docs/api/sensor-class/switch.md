---
title: Switch Sensor
description: A sensor class for switch state detection.
---

The `Switch` sensor class provides access to a switch sensor.

## Constructor

### `Switch(options)`

Creates a new `Switch` object instance.

```js
Switch(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns a sample object containing the current switch state.

```js
sample()
```

#### Return Value

An object with the following property:

> `position` - A number that represents the current state of the switch.

## Examples

```js
const sensor = new device.sensor.Switch({
  sensor: {
    io: device.io.Digital,
    pin: 0
  }
});

const sample = sensor.sample();
console.log(`Switch position: ${sample.position}`);
```

## Specifications

[Switch](https://419.ecma-international.org/#-14-sensor-classes-switch)
