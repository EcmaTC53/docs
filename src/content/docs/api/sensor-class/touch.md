---
title: Touch Sensor
description: A sensor class for touch panel controller data.
---

The `Touch` sensor class provides access to a touch panel controller.

## Constructor

### `Touch(options)`

Creates a new `Touch` object instance.

```js
Touch(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `sensor` - The hardware connection definition.
>
> `interval` (optional) - The sampling interval in milliseconds.

## Instance Methods

### `sample()`

Returns an array of touch objects or `undefined` if no touch is in progress.

```js
sample()
```

#### Return Value

An array of objects, each containing:

> `x` - A number indicating the X coordinate of the touch point.
>
> `y` - A number indicating the Y coordinate of the touch point.
>
> `id` - A number indicating which touch point this entry corresponds to.

## Examples

```js
const sensor = new device.sensor.Touch({
  sensor: {
    io: device.io.I2C,
    address: 0x38
  }
});

const sample = sensor.sample();
if (sample) {
  sample.forEach(touch => {
    console.log(`Touch ${touch.id} at (${touch.x}, ${touch.y})`);
  });
}
```

## Specifications

[Touch](https://419.ecma-international.org/#-14-sensor-classes-touch)
