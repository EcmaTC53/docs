---
title: Display Class Pattern
description: The Display Class Pattern builds on the Peripheral Class Pattern to provide a foundation for implementing access to displays represented by a two-dimensional array of pixels.
---

The Display Class Pattern builds on the [Peripheral Class Pattern](/api/peripheral-class) to provide a foundation for implementing access to displays represented by a two-dimensional array of pixels.

## Constructor

### `Display()`

Creates a new `Display` object instance.

```js
Display(options)
```

#### Parameters

`options`

An object of properties used to construct the class. It may define the hardware connections of the display. The following are defined by this abstract class:

> `display`: object of properties to construct the [peripheral](/api/peripheral-class) used to communicate with the hardware

Additional top-level properties and callbacks may be included if required by the display for hardware communication, such as interrupts or resets. 

The [Host Provider](/api/host-provider) may provide a preconfigured instance for the builtin hardware.

## Instance Properties

### `width`

A read-only property providing the width of the display in number of pixels. This value may change based on the configuration, for example, when changing the rotation causes the orientation to change from portrait to landscape.

### `height`

A read-only property providing the height of the display in number of pixels. This value may change based on the configuration, for example, when changing the rotation causes the orientation to change from portrait to landscape.

## Instance Methods

### `configure`

Modifies how the display operates.

```js
configure(options)
```

#### Parameters

`options`

An object of properties to update the display.

> `format` (optional): A number indicating the format of pixel data passed to the instance (for example, via the `send` method), see the table of available values below.
>
> `rotation` (optional): A number indicating the clockwise rotation of the display in degrees. May accept 0, 90, 180, 270.
>
> `brightness` (optional): A float indicating the relative brightness of the display from 0.0 (off) to 1.0 (full).
>
> `flip` (optional): A string indicating how the pixels should be flipped. May accept `""` (no flip), `"v"` (vertical flip), `"h"` (horizontal flip), `"hv"` (horizontal & vertical flip)

**Pixel format value**

| Value | Description                          |
|-------|--------------------------------------|
| 3     | 1-bit monochrome                     |
| 4     | 4-bit grayscale (0 black, 15 white)  |
| 5     | 8-bit grayscale (0 black, 255 white) |
| 6     | 8-bit RGB (3:3:2)                    |
| 7     | 16-bit RGB (5:6:5 [little-endian](/glossary#little-endian)) |
| 8     | 16-bit RGB (5:6:5 [big-endian](/glossary#big-endian)) |
| 9     | 24-bit RGB (8:8:8)                   |
| 10    | 32-bit RGBA (8:8:8:8)                |
| 12    | 12-bit xRGB (4:4:4:4 [x is unused])  |

### `begin`

Starts the process of updating the display's pixels. If no argument is passed, the entire display will be updated.

```js
begin()
begin(options)
```

#### Parameters

`options`

An object of properties to define the rectangular area of coordinates within the bounds of the display.

> `x`: A number indicating the horizontal starting point of the area to update. Must be between 0 and the width of the display.
>
> `y`: A number indicating the vertical starting point of the area to update. Must be between 0 and the height of the display.
>
> `width`: A number indicating the amount of pixels wide from the starting point to update. Must not exceed the width of the display.
>
> `height`: A number indicating the amount of pixels tall from the starting point to update. Must not exceed the height of the display.
>
> `continue` (optional): A boolean indicating a successive update to the same frame. Must be set to `true` when calling this method multiple times without an intervening call to the [`end` method](#end).

#### Exceptions

An `Error` will be thrown if this method if called more than once without an intervening call to [`end`](#end), the `continue` option is set to `true`.

### `send`

Delivers one or more horizontal scan lines to update the bounding box of pixels as defined in the preceding call to [`begin`](#begin).

```js
send(pixels)
```

#### Parameters

`pixels`

A [Byte Buffer](/glossary#byte-buffer) in a format of pixels matching the configured `format` property of the display. 

### `end`

Finish the process of updating the display's pixels by making them all visible after preceding calls to [`begin`](#begin) and [`send`](#send).

```js
end()
```

### `adaptInvalid`

For displays that limit update area to specific pixels, such as even ones horizontally, adjusts the area properties to be valid.

```js
adaptInvalid(area)
```

#### Parameters

`area`

An object of properties to define the rectangular area of coordinates within the bounds of the display.

> `x`: A number indicating the horizontal starting point of the area to update. Must be between 0 and the width of the display.
>
> `y`: A number indicating the vertical starting point of the area to update. Must be between 0 and the height of the display.
>
> `width`: A number indicating the amount of pixels wide from the starting point to update. Must not exceed the width of the display.
>
> `height`: A number indicating the amount of pixels tall from the starting point to update. Must not exceed the height of the display.

This object will be mutated in order to be valid when passed to [`begin`](#begin).

## Examples

This is an abstract class that is not instantiated directly. The examples that follow are demonstrations of potential implementations.

The following code is an example of instantiating [an LCD display powered by the ILI9341 controller](https://www.adafruit.com/product/2478) implementation of the Sensor Class Pattern that has a control line on a [`Digital`](/api/io-class/digital) pin:

```js
import Display from "embedded:display/LCD/ILI9341"

const screen = new Display({
    display: {
        ...device.SPI.default,
        select: device.pin.displaySelect,
        active: 0,
    },
    dc: {
        io: device.io.Digital,
        pin: device.pin.displayDC,
    },
});

screen.configure({ format: 7 });

// fill the screen with white
screen.begin({
    x: 0,
    y: 0,
    width: screen.width,
    height: screen.height,
});
const lines = 4; // update 4 scan lines at a time
const pixels = new Uint16Array(screen.width * lines);
pixels.fill(0xFFFF);

let updateHeight = screen.height;
while (updateHeight > 0) {
    screen.send(pixels.buffer);
    updateHeight -= lines;
}
screen.end();
```

## Specifications

[Display Class Pattern](https://419.ecma-international.org/#-15-display-class-pattern)
