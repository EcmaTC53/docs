---
title: API Overview
description: Overview of the ECMA-419 embedded systems API.
---

# API Reference

## Overview

The first edition of the ECMA Standard was adopted by the ECMA General Assembly of June 2021. It was built around the IO Class Pattern which provides consistent, efficient, extensible access to the IO capabilities of embedded systems. Driver-style classes for IO extenders, sensors, and displays build on the IO foundation.

The second edition extends IO with asynchronous capabilities used by I²C and the system management bus. It introduces new sensor classes, including many gas sensors; classes to manage and monitor network interfaces; client support for common network protocols including HTTP, MQTT, NTP, DNS, WebSocket, and TLS; server support for the HTTP and WebSocket protocols; and a real-time clock peripheral class.

## Scope

The Standard defines application programming interfaces (APIs) for ECMAScript modules that support programs executing on embedded systems.

The Standard defines APIs for capabilities found in common across embedded systems. Implementations for embedded systems that include additional capabilities are encouraged to provide ECMAScript APIs for those using the many extensibility options provided by the Standard.

The Standard does not make any changes to the ECMAScript language as defined by ECMAScript Language Specification (ECMA-262).

## Class Pattern

A Class Pattern, as used in the Standard, is a combination of requirements and guidelines for a class. For example, the IO Class Pattern defines behaviours for all IO classes.

## Module Specifiers

The Standard defines classes which are accessed through modules. Because many embedded systems lack a file system, using file paths to access modules is impractical. Instead, modules are accessed using bare module specifiers. While such specifiers are currently forbidden in a web browser, they are permitted in other environments.

A namespace prefix is used to minimise the chance of name collisions with other bare module specifiers. This Standard uses the namespace prefix **`embedded:`**.

```
import Digital from "embedded:io/digital";
```

The use of module namespaces in this Standard is intended to be compatible with the [Built In Modules Proposal](https://github.com/tc39/proposal-built-in-modules#namespace).

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
