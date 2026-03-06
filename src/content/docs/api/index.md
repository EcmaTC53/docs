---
title: API Overview
description: Overview of the ECMA-419 embedded systems API.
---

The ECMA-419 specification defines a suite of APIs for JavaScript on embedded systems. These APIs are organized into several patterns and classes.

## Patterns

- [**Base Class Pattern**](/api/base-class): The foundation for many other classes.
- [**IO Class Pattern**](/api/io-class): Consistent interface for low-level hardware IO.
- [**IO Provider Class Pattern**](/api/io-provider-class): Manages access to IO resources.
- [**Peripheral Class Pattern**](/api/peripheral-class): Foundation for device drivers.
- [**Sensor Class Pattern**](/api/sensor-class): Common interface for physical sensors.
- [**Display Class Pattern**](/api/display-class): Interface for two-dimensional pixel displays.
- [**Network Interface Class Pattern**](/api/network-interface-class): Interface for network connections.

## Classes

- [**Real-Time Clock**](/api/real-time-clock-class): Time-of-day clock.
- [**NTP Client**](/api/ntp-client-class): Time synchronization.
- [**HTTP Client**](/api/http-client-class): Web requests.
- [**HTTP Server**](/api/http-server-class): Web responses.
- [**WebSocket Client**](/api/websocket-client-class): Real-time web communication.
- [**MQTT Client**](/api/mqtt-client-class): Message queuing telemetry transport.
- [**Persistent Storage**](/api/storage/): Files, key-value pairs, and flash memory.

## Host Provider

- [**Host Provider**](/api/host-provider): Access to the `device` global object.
