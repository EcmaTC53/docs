---
title: Glossary
description: A set of common terms and jargon used to define the ECMA-419 APIs
---

## Analog

In an electrical signal, existing in a continuous range, as opposed to the discrete ranges of [digital](#digital).

## Big-endian

[Endianness](https://en.wikipedia.org/wiki/Endianness) system that stores the [most significant byte](https://en.wikipedia.org/wiki/Most_significant_byte) of a [word](https://en.wikipedia.org/wiki/Word_(data_type)) at the smallest memory address and the [least significant byte](https://en.wikipedia.org/wiki/Least_significant_byte) at the largest memory address.

## Bitmask

Data used in [bitwise operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators) made up of a series of 0s and 1s (a.k.a bit field), often used in configuration to indicate setting various options on or off.

## Byte Buffer

An instance of the following JavaScript types:

- [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (resizable or not)
- [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) (growable or not)
- [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
- [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

## Digital

In an electrical signal, existing at binary values: on or off, zero or one. This can be used simply, e.g. on/off states of a switch or light, or digital signals can be toggled very quickly to encode complex messaging with communication protocols.

## GPIO

General purpose input and output: electrical [pins](/glossary/#pins) which can be configured for various purposes.

## Host

Provides the runtime environment for the execution of scripts, as defined by the [ECMAScript language specification](https://262.ecma-international.org/#sec-hosts-and-implementations).

## I<sup>2</sup>C

[Inter-Integrated Circuit](http://en.wikipedia.org/wiki/I%C2%B2C): a [controller/peripheral](https://learn.sparkfun.com/tutorials/i2c#controller-peripheral) communication protocol that allows one device to control one or more connected devices through two wires, a clock signal (SCL) to keep the components in sync and a data line (SDA).

## IP

[Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol): the network layer communications protocol for sending data across networks to establish the Internet.

## LED

Light-emitting diode

## Little-endian

[Endianness](https://en.wikipedia.org/wiki/Endianness) system that stores the [most significant byte](https://en.wikipedia.org/wiki/Most_significant_byte) of a [word](https://en.wikipedia.org/wiki/Word_(data_type)) at the largest memory address and the [least significant byte](https://en.wikipedia.org/wiki/Least_significant_byte) at the smallest memory address.

## Open drain

An output pin is a digital signal that is connected to the ground. Low signals stay connected to ground. High signals will short the pin to the power source and leave it floating.

## Pins

Points of electrical connection with an integrated circuit (IC).

## Pin specifier

A pin specifier is a JavaScript value used by [IO classes](/api/io-class/) to refer to hardware connections represented by [pins](/glossary/#pins). Typically these pins correspond to a particular connection point on the hardware package, although this is not required.

The value of a pin specifier is [host](/glossary/#host)-dependent. It is often a number corresponding to the logical GPIO pin number as per the hardware data sheet (e.g. GPIO 5), but it may be a string ("D1") or even an object including a [port specifier](/glossary/#port-specifier) and pin number (`{port: 1, pin: 5}`).

## Port specifier

A port specifier is a JavaScript value used by [IO classes](/api/io-class/) to refer to a hardware interface. Port specifier values are defined by the [host](/glossary/#host); usually either a number or string.

For example, consider a microcontroller may support two [serial](/glossary/#serial) connections, each with different capabilities that may be configured to be available on a set of [pins](/glossary/#pins); the port specifier indicates which serial connection to use.

## Pull-up

Ensures that given no input, the circuit assumes a default value, which is pulled high.

## Pull-down

Ensures that given no input, the circuit assumes a default value, which is pulled low.

## PWM

Pulse-width modulation: a hardware communication protocol where there is a [digital](#digital) signal fluctuating between values at a set period, and the message is encoded by changing the percentage of that period in which the signal stays at one of the values. This can be used to approximate an [analog](#analog) signal on a pin which only supports digital signaling.
A common application is in motor controllers, mapping a servo motor position to the percentage of the time a signal is held high.

## RX

Receive: the wire in a [UART](/glossary/#uart) interface which receives data from the controlled device.

## Serial

Also known as [UART](/glossary/#uart): a communication protocol that uses receive ([RX](/glossary/#rx)) and transmit ([TX](/glossary/#tx)) lines to interface with hardware.

## SMBus

System management bus: an extension of the [I<sup>2</sup>C protocol](#i2c) defined to communicate with low-bandwidth devices with stricter requirements in clock frequency range (10kHz to 100 kHz), voltage, and timing.

## SPI

Serial Peripheral Interface; a [controller/peripheral](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi#receiving-data) communication protocol that provides synchronous [serial](#serial) data transfer. Requires a minimum of 3 lines in addition to the power connections.

## TCP

Transmission Control Protocol: a network protocol that allows two hosts to connect and exchange data with guaranteed ordering upon delivery.

## TX

Transmit: the wire in a [UART](/glossary/#uart) interface which sends data to the controlled device.

## UART

[Universal asynchronous receiver/transmitter](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter) also known as [serial](/glossary/#serial): a communication protocol that uses receive ([RX](/glossary/#rx)) and transmit ([TX](/glossary/#tx)) lines to interface with hardware.
