---
title: Audio Input
description: An [IO class](/api/io-class/) for audio input sources.
---

An [IO class](/api/io-class/) for audio input sources, can be synchronous or asynchronous.

## Constructor

### `AudioIn`

Creates a new synchronous `AudioIn` object instance.

```js
AudioIn(options)
```

### `AudioIn.Async`

Creates a new asynchronous `AudioIn` object instance.

```js
AudioIn.Async(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `bitsPerSample` - A number indicating the number of bits per audio sample when using uncompressed audio. Allowed values are `8` and `16`. This property is optional and defaults to a host defined value.
>
> `channels` - A number indicating the number of audio channels returned. Allowed values are `1` and `2`. This property is optional and defaults to a host defined value.
>
> `sampleRate` - A number indicating the sample rate of the audio. This property is optional and defaults to a host defined value.
>
> `audioType` - A string indicating the encoding of the captured audio. The allowed value is `"LPCM"`. This property is optional and defaults to a host defined value.
>
> `onReadable` (optional) - A callback function invoked when audio samples are available to be read.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `bitsPerSample`

A number indicating the number of bits per sample when using an uncompressed `audioType`. This property is read-only.

### `channels`

A number indicating the number of channels. This property is read-only.

### `sampleRate`

A number indicating the sample rate of the audio. This property is read-only.

### `audioType`

A string indicating the audio encoding. This property is read-only.

### `format`

Always returns `"buffer"`.

## Instance Methods

### `read`

Returns [Byte Buffer](/glossary/#byte-buffer) data from the IO instance.

```js
read(byteLength)
read(buffer)

read(byteLength, callbackFn)
read(buffer, callbackFn)
```

#### Parameters

`byteLength`

The number of bytes to read into the returned [Byte Buffer](/glossary/#byte-buffer).

`buffer`

A pre-allocated [Byte Buffer](/glossary/#byte-buffer) for the instance to fill.

`callbackFn`

```js
callbackFn(error, buffer)
callbackFn(error, byteLength)
```

For asynchronous classes, a function that executes when the data has been read.

### `start`

Begins capturing audio.

```js
start()
```

### `stop`

Suspends audio capture.

```js
stop(options)
```

#### Parameters

`options`

An optional object with a single defined property:

> `flush` - A boolean value. If `true`, any unread audio should be flushed immediately. If `false`, the unread audio may still be read after calling `stop`.

## Callbacks

### `onReadable`

Invoked when audio samples are available to be read.

```js
onReadable(byteLength, sampleCount)
```

#### Parameters

`byteLength`

The number of bytes available to read.

`sampleCount`

The maximum number of samples that may be read.

## Examples

```js
import AudioIn from "embedded:io/audio/in";

const input = new AudioIn({
  sampleRate: 16000,
  channels: 1,
  bitsPerSample: 16,
  onReadable(byteLength) {
    const data = this.read(byteLength);
    // process audio data
  }
});

input.start();
```

## Specifications

[Audio Input - synchronous IO](https://419.ecma-international.org/#-10-io-classes-audio-input-synchronous-io)

[Audio Input - asynchronous IO](https://419.ecma-international.org/#-10-io-classes-audio-input-asynchronous-io)
