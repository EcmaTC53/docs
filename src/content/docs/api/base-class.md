---
title: Base Class Pattern
description: The Base Class Pattern defines common behaviors used by other class patterns. The Base Class Pattern is purely abstract and cannot be instantiated directly.
---

The Base Class Pattern defines common behaviors used by other class patterns. The Base Class Pattern is purely abstract and cannot be instantiated directly.

_Classes conforming to the Base Class Pattern may be subclassed._

## Constructor

### `Base()`
Creates a new `Base` object instance.

```js
Base(options)
```

#### Parameters

`options`

An object of properties used to construct the class. Any unrecognized properties will be ignored. Typically there are no other arguments as additional configuration options can and should be added to the options object. However, additional arguments are not prohibited.

## Instance Properties

### `target`

The target property is opaque to the object’s implementation. It may be initialized by the constructor using the target property in the options object.

## Instance Methods

### `close`

Releases all resources associated with the instance before completing. It may be called more than once without erroring. Once this method has been called, calling other methods on the instance throws an exception.

If an instance provides any asynchronous methods, it should provide an asynchronous close method via the callback function.

```js
close()
close(callbackFn)
```

#### Parameters

`callbackFn`

A function that executes when the close process has completed.

> `result`
>   The first argument to the completion callback is always a result code. A value of null indicates success; an Error object indicates failure.

## Examples

No examples since this class is purely abstract and cannot be instantiated directly.

## Specification

[Base Class Patterns](https://419.ecma-international.org/#-8-base-class-pattern)
