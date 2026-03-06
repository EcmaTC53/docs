---
title: Network Interface Class Pattern
description: A class pattern for network interface objects.
---

The `Network Interface Class Pattern` defines a common interface for objects that provide access to network interfaces, such as Ethernet and Wi-Fi.

## Instance Properties

### `connection`

A read-only property indicating the current connection state of the network interface.

### `MAC`

A read-only string representing the MAC address assigned to the network interface.

### `address`

A read-only string representing the IP address assigned to the network interface.

## Instance Methods

### `connect(options)`

Initiates the process of connecting to a network.

### `disconnect()`

Disconnects the network interface from the network.

## Callbacks

### `onChanged(name)`

A callback function invoked when the state of the network interface changes.

## Specifications

[Network Interface Class Pattern](https://419.ecma-international.org/#-17-network-interface-class-pattern)
