---
title: Provenance Sensor Class Pattern
description: A class pattern that builds on the Sensor Class Pattern to provide metadata about sensor samples.
---

The `Provenance Sensor Class Pattern` builds on the [`Sensor Class Pattern`](/api/sensor-class) to provide metadata about sensor samples, such as when they were captured and information about the sensor's configuration and identity.

## Constructor

The constructor follows the [`Sensor Class Pattern`](/api/sensor-class/#constructor), but adds an optional property to the options object.

> `onConfiguration` (optional) - A callback function invoked when a new sensor configuration has been applied.

## Instance Properties

Includes properties of the [`Sensor Class Pattern`](/api/sensor-class). Specific to this pattern:

### `configuration`

A read-only object containing the current configuration of the sensor.

#### Properties

> `calibration` - Parameters that impact samples presented as raw.
>
> `mode` - The sampling operating mode.
>
> `scaling` - Scaling factors that impact samples presented as raw.
>
> `units` - The configured sample unit.

### `identification`

A read-only object providing static identification information about the sensor.

#### Properties

> `model` - The manufacturer and part number of the sensor.
>
> `classification` - The sensor classification.
>
> `uniqueID` - A unique identifier associated with the sensor part.

## Sample Object Extensions

The `sample()` method returns a `Sample Object` that includes the properties defined by the sensor class, plus the following optional provenance properties:

### `time`

A number originating from an absolute clock describing the instant the sample was captured.

### `ticks`

A number originating from a non-absolute clock describing the instant the sample was captured.

### `faults`

An object representing a record of any sensor-level faults that occurred during the sample capture.

## Examples

```js
const sensor = new device.sensor.Temperature();
const sample = sensor.sample();

if (sample.time !== undefined) {
  console.log(`Captured at: ${new Date(sample.time)}`);
}

console.log(`Sensor Model: ${sensor.identification.model}`);
```

## Specifications

[Provenance Sensor Class Pattern](https://419.ecma-international.org/#-27-provenance-sensor-class-pattern)
