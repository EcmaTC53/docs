---
title: Audio Output
description: An [IO class](/api/io-class/) for audio output devices.
---

An [IO class](/api/io-class/) for audio output devices, can be synchronous or asynchronous.

## Constructor

### `AudioOut`

Creates a new synchronous `AudioOut` object instance.

```js
AudioOut(options)
```

### `AudioOut.Async`

Creates a new asynchronous `AudioOut` object instance.

```js
AudioOut.Async(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `bitsPerSample` - A number indicating the number of bits per audio sample when outputting uncompressed audio. Allowed values are `8` and `16`. This property is optional and defaults to a host defined value.
>
> `channels` - A number indicating the number of audio channels provided. Allowed values are `1` and `2`. This property is optional and defaults to a host defined value.
>
> `sampleRate` - A number indicating the sample rate of the audio. This property is optional and defaults to a host defined value.
>
> `audioType` - A string indicating the encoding of the audio. The allowed value is `"LPCM"`. This property is optional and defaults to a host defined value.
>
> `onWritable` (optional) - A callback function invoked when there is space available to write more audio samples.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `bitsPerSample`

A number indicating the number of bits per sample. This property is read-only.

### `channels`

A number indicating the number of channels. This property is read-only.

### `sampleRate`

A number indicating the sample rate. This property is read-only.

### `audioType`

A string indicating the audio encoding. This property is read-only.

### `volume`

A number indicating the volume level to be applied to the audio output. Full volume is `1.0` and fully muted is `0.0`.

### `format`

Always returns `"buffer"`.

## Instance Methods

### `write`

Sends [Byte Buffer](/glossary/#byte-buffer) data to the IO instance.

```js
write(buffer)
write(buffer, callbackFn)
```

#### Parameters

`buffer`

A [Byte Buffer](/glossary/#byte-buffer) of audio data to output.

`callbackFn`

```js
callbackFn(error)
```

For asynchronous classes, a function that executes when the data has been written.

### `start`

Begins outputting audio.

```js
start()
```

### `stop`

Suspends audio output.

```js
stop(options)
```

#### Parameters

`options`

An optional object with a single defined property:

> `flush` - A boolean value. If `true`, any unplayed audio should be flushed immediately. If `false`, the unplayed audio will be output before stopping.

## Callbacks

### `onWritable`

Invoked when space has been made available to write audio samples.

```js
onWritable(byteLength, sampleCount)
```

#### Parameters

`byteLength`

The maximum number of bytes that may be written.

`sampleCount`

The maximum number of samples that may be written.

## Examples

```js
import AudioOut from "embedded:io/audio/out";

const output = new AudioOut({
  sampleRate: 44100,
  channels: 2,
  bitsPerSample: 16
});

output.volume = 0.5;
output.start();

const buffer = new Uint8Array(1024); // fill with audio data
output.write(buffer);
```

## Specifications

[Audio Output - synchronous IO](https://419.ecma-international.org/#-10-io-classes-audio-output-synchronous-io)

[Audio Output - asynchronous IO](https://419.ecma-international.org/#-10-io-classes-audio-output-asynchronous-io)
