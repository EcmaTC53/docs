---
title: Glossary
description: A set of common terms and jargon used to define the ECMA-419 APIs
---

## Analog

In an electrical signal, existing in a continuous range, as opposed to the discrete ranges of [digital](#digital).

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

## LED

Light-emitting diode

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

## RX

Receive: the wire in a [UART](/glossary/#uart) interface which receives data from the controlled device.

## Serial

Also known as [UART](/glossary/#uart): a communication protocol that uses receive ([RX](/glossary/#rx)) and transmit ([TX](/glossary/#tx)) lines to interface with hardware.

## TX

Transmit: the wire in a [UART](/glossary/#uart) interface which sends data to the controlled device.

## UART

[Universal asynchronous receiver/transmitter](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter) also known as [serial](/glossary/#serial): a communication protocol that uses receive ([RX](/glossary/#rx)) and transmit ([TX](/glossary/#tx)) lines to interface with hardware.
