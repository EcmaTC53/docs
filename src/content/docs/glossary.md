---
title: Glossary
description: A set of common terms and jargon used to define the ECMA-419 APIs
---

## GPIO

General purpose input and output: electrical [pins](/glossary/#pins) which can be configured for various purposes.

## Host

Provides the runtime environment for the execution of scripts, as defined by the [ECMAScript language specification](https://262.ecma-international.org/#sec-hosts-and-implementations).

## Pins

Points of electrical connection with an integrated circuit (IC).

## Pin specifier

A pin specifier is a JavaScript value used by [IO classes](/api/io-class/) to refer to hardware connections represented by [pins](/glossary/#pins). Typically these pins correspond to a particular connection point on the hardware package, although this is not required.

The value of a pin specifier is [host](/glossary/#host)-dependent. It is often a number corresponding to the logical GPIO pin number as per the hardware data sheet (e.g. GPIO 5), but it may be a string ("D1") or even an object including a [port specifier](/glossary/#port-specifier) and pin number (`{port: 1, pin: 5}`).

## Port specifier

A port specifier is a JavaScript value used by [IO classes](/api/io-class/) to refer to a hardware interface. Port specifier values are defined by the [host](/glossary/#host); usually either a number or string.

For example, consider a microcontroller may support two [serial](/glossary/#serial) connections, each with different capabilities that may be configured to be available on a set of [pins](/glossary/#pins); the port specifier indicates which serial connection to use.

## RX

Receive: the wire in a [UART](/glossary/#uart) interface which receives data from the controlled device.

## Serial

Also known as [UART](/glossary/#uart): a communication protocol that uses receive ([RX](/glossary/#rx)) and transmit ([TX](/glossary/#tx)) lines to interface with hardware.

## TX

Transmit: the wire in a [UART](/glossary/#uart) interface which sends data to the controlled device.

## UART

[Universal asynchronous receiver/transmitter](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter) also known as [serial](/glossary/#serial): a communication protocol that uses receive ([RX](/glossary/#rx)) and transmit ([TX](/glossary/#tx)) lines to interface with hardware.
