---
title: Wi-Fi
description: A network interface class for Wi-Fi connections.
---

The `WiFi` class provides access to a Wi-Fi network interface. It is a subclass of the [`Network Interface Class Pattern`](/api/network-interface-class).

```js
import WiFi from "embedded:network/interface/wifi";
```

## Constructor

### `WiFi(options)`

Creates a new `WiFi` object instance.

```js
WiFi(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

## Instance Methods

### `scan(options)`

Initiates a scan for Wi-Fi base stations.

```js
scan(options)
```

#### Parameters

`options`

> `onFound(options)` - A callback function invoked with information about an access point discovered by the scan.
>
> `onComplete()` - A callback function invoked when the scan is complete.

## Examples

```js
import WiFi from "embedded:network/interface/wifi";

const network = new WiFi();
network.scan({
  onFound(ap) {
    console.log(`Found SSID: ${ap.SSID}, RSSI: ${ap.RSSI}`);
  },
  onComplete() {
    console.log("Scan complete");
  }
});
```

## Specifications

[Wi-Fi Network Interface](https://419.ecma-international.org/#-17-network-interface-class-pattern-wi-fi-network-interface)
