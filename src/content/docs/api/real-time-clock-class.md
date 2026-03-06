---
title: Real-Time Clock Class Pattern
description: A class pattern for real-time clock (RTC) devices.
---

The `Real-Time Clock Class Pattern` provides a time-of-day clock.

## Instance Properties

### `time`

A property to get or set the current time of the RTC. The value is an ECMAScript time value.

## Instance Methods

### `configure(options)`

Updates the RTC configuration.

#### Parameters

`options`

> `alarm` - The time in milliseconds to set the RTC's alarm.

## Callbacks

### `onAlarm()`

A function invoked when an alarm is triggered by the RTC.

## Specifications

[Real-Time Clock Class Pattern](https://419.ecma-international.org/#-16-real-time-clock-class-pattern)
