---
title: Persistent Storage
description: Overview of persistent storage modules for files, flash memory, and key-value pairs.
---

The Persistent Storage APIs provide mechanisms for reliable data storage on embedded systems. ECMA-419 defines four complementary storage modules, each optimized for different use cases and access patterns.

## Storage Types

### Files
The **Files** module provides a hierarchical file system interface for storing, organizing, and retrieving data in a directory structure. It supports:
- Creating and navigating directories
- Reading and writing files with various access modes
- Moving, copying, and deleting files and directories
- Symbolic links for file system abstraction
- Synchronous or asynchronous operations

Use the Files module when you need a traditional file system interface with structured organization, similar to operating system file systems.

**Module**: `embedded:storage/files`  
**Documentation**: [Files](/api/storage/files)

### Flash
The **Flash** module provides low-level access to flash memory partitions for advanced use cases requiring direct hardware control. It supports:
- Opening flash partitions by name
- Reading and writing raw data at byte offsets
- Erasing memory blocks (sectors)
- Querying partition size and block information
- Multiple data format support

Use the Flash module when you need direct control over flash memory partitions, such as for boot loaders, raw data storage, or performance-critical applications.

**Module**: `embedded:storage/flash`  
**Documentation**: [Flash](/api/storage/flash)

### Key-Value
The **Key-Value** module provides simple key-value pair storage organized within named domains. It supports:
- Reading and writing values by key
- Deleting key-value pairs
- Domain organization for logical separation
- Multiple data format support
- Transactional operations

Use the Key-Value module when you need simple, fast access to configuration data, application settings, or small cached values without file system overhead.

**Module**: `embedded:storage/key-value`  
**Documentation**: [Key-Value](/api/storage/key-value)

### Update
The **Update** module provides firmware update functionality, enabling in-place firmware upgrades for flash partitions. It supports:
- Writing update data in append or random-access modes
- Progress tracking and cancellation
- Atomic activation of updates
- Automatic rollback on failure

Use the Update module to implement over-the-air (OTA) firmware updates, allowing devices to update themselves without external tools.

**Module**: `embedded:update`  
**Documentation**: [Update](/api/storage/update)

## Choosing a Storage Type

| Use Case | Recommended Module | Reason |
|----------|-------------------|--------|
| Application files, documents | **Files** | Natural hierarchical organization |
| Configuration settings | **Key-Value** | Fast, simple access to small data |
| Raw data, boot code | **Flash** | Direct hardware control |
| Firmware updates | **Update** | Safe, atomic firmware replacement |
| Multi-file projects | **Files** | Directory structure and navigation |
| Cached values | **Key-Value** | Low overhead, quick lookup |
| Legacy binary formats | **Flash** | Arbitrary byte-level access |

## Getting Started

Each storage module is accessed through the `device.storage` global object:

```js
import files from "embedded:storage/files";
import flash from "embedded:storage/flash";
import keyValue from "embedded:storage/key-value";
import update from "embedded:update";

// Access persistent storage modules
const rootDir = files;
const partition = await flash.open({ path: "app" });
const config = await keyValue.open({ path: "settings" });
```

Refer to each module's documentation page for detailed API reference, parameters, and code examples.

## Specifications

[Persistent Storage (Section 26)](https://419.ecma-international.org/#-26-persistent-storage)
