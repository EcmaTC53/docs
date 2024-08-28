---
title: Host Provider
description:  The Host Provider instance aggregates data and code available to scripts from the host.

---

The Host Provider instance aggregates data and code available to scripts from the host.

## Access

The Host Provider instance is a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) object that is created before hosted scripts are executed.

It may be imported:

```js
import device from "embedded:provider/builtin"
```

Or be made available as a [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) named `device`, if the host chooses to do so.

## Instance Properties

### `pin`

An object that maps pin names to [pin specifiers](/glossary/#pin-speficier). More than one pin name may map to the same [pin specifier](/glossary/#pin-speficier).

```js
console.log(device.pin.led); // logs the value for the on-board LED pin
console.log(device.pin.button); // logs the value for the on-board button pin
```

### `i2c`

[IO Bus type](/glossay/#io-bus) for [I<sup>2</sup>C](/api/io-class/i2c) communication

### `serial`

[IO Bus type](/glossay/#io-bus) for [Serial](/api/io-class/serial) communication

### `spi`

[IO Bus type](/glossay/#io-bus) for [SPI](/api/io-class/spi) communication

### `io`

Object of [IO constructors](/api/io-class/) available to the host environment, such as [`Digital`](/api/io-class/digital), [`I2C`](/api/io-class/i2c), and [`SPI`](/api/io-class/spi).

```js
console.log(device.io.Digital);
console.log(device.io.I2C);
console.log(device.io.SPI);
```

### `provider`

Object of [IO Provider constructors](/api/io-provider-class/) available to the host environment.

### `sensors`

Object of [Sensor constructors](/api/sensor-class/) available to the host environment.

### `displays`

Object of [Display constructors](/api/display-class/) available to the host environment.

### `rtc`

Object of default [Real-time clock constructor options](/api/real-time-clock-class) available to the host environment.

### `network`

Object of networking-related constructor options.

#### `dns.resolver`

Object of default [Domain Name Resolver constructor options](/api/dns-resolver-class).

#### `interface`

Object of default [Network Interface constructor options](/api/network-interface-class).

```js
console.log(device.network.interface.Ethernet0);
```

#### `ntp.client`

Object of default [NTP Client constructor options](/api/io-class/ntp-client-class).

#### `http.client`

Object of default [HTTP Client constructor options](/api/io-class/http-client-class).

#### `http.server`

Object of default [HTTP Server constructor options](/api/io-class/http-server-class).

#### `mqtt.client`

Object of default [MQTT Client constructor options](/api/io-class/mqtt-client-class).

#### `mqtts.client`

Object of default secure [MQTT Client constructor options](/api/io-class/mqtt-client-class).

#### `tls.client`

Object of default [TLS Client constructor options](/api/io-class/tls-client-socket).

#### `ws.client`

Object of default [WebSocket Client constructor options](/api/io-class/websocket-client-class).

#### `wss.client`

Object of default secure [WebSocket Client constructor options](/api/io-class/websocket-client-class).

## Examples

The following code is an example of establishing a [SPI](/api/io-class/spi) instance using the properties off the `device` Host Provider:

```js
let spi = new device.io.SPI(device.spi.default);
```

## Specifications

[Host Provider instance](https://419.ecma-international.org/#-26-host-provider-instance)
