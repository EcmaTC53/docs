---
title: Image Input
description: An [IO class](/api/io-class/) for image input sources, such as cameras.
---

An [IO class](/api/io-class/) for image input sources, can be synchronous or asynchronous.

## Constructor

### `ImageIn`

Creates a new synchronous `ImageIn` object instance.

```js
ImageIn(options)
```

### `ImageIn.Async`

Creates a new asynchronous `ImageIn` object instance.

```js
ImageIn.Async(options)
```

#### Parameters

`options`

An object of properties used to construct the class.

> `imageType` - A value indicating the encoding of the image. If the value is a number, the image is uncompressed in a [pixel format](/api/display-class/#pixel-format-values) defined by the `Display Class Pattern`. If the value is a string, the allowed value is `"jpeg"`. This property is optional and defaults to a host defined value.
>
> `width` - A number indicating the requested pixel width of the captured image. This property is optional and defaults to a host defined value.
>
> `height` - A number indicating the requested pixel height of the captured image. This property is optional and defaults to a host defined value.
>
> `onReadable` (optional) - A callback function invoked when a new frame is available to be read.

## Instance Properties

Includes properties of the [`IO Class Pattern`](/api/io-class). Specific to this class:

### `imageType`

A number or string indicating the image encoding. This property is read-only.

### `width`

A number indicating the image's pixel width. This property is read-only.

### `height`

A number indicating the image's pixel height. This property is read-only.

### `format`

Either `"buffer/disposable"` or `"buffer"`.

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

#### Return value

When the data format is `"buffer/disposable"`, the `read` method returns one frame in a [Disposable Buffer](/glossary/#disposable-buffer).

### `start`

Begins capturing images.

```js
start()
```

### `stop`

Suspends image capture.

```js
stop(options)
```

#### Parameters

`options`

An optional object with a single defined property:

> `flush` - A boolean value. If `true`, any unread frames should be flushed immediately. If `false`, the unread frames may still be read after calling `stop`.

## Callbacks

### `onReadable`

Invoked when a new frame is available to be read.

```js
onReadable(byteLength)
```

#### Parameters

`byteLength`

The size of the frame in bytes.

## Examples

```js
import ImageIn from "embedded:io/image/in";

const camera = new ImageIn({
  width: 640,
  height: 480,
  imageType: "jpeg",
  onReadable(byteLength) {
    const frame = this.read(byteLength);
    // process image frame
  }
});

camera.start();
```

## Specifications

[Image Input - synchronous IO](https://419.ecma-international.org/#-10-io-classes-image-input-synchronous-io)

[Image Input - asynchronous IO](https://419.ecma-international.org/#-10-io-classes-image-input-asynchronous-io)
