# Bug: Deleting Non-Configurable Property in Strict Mode vs. Non-Strict Mode

This bug demonstrates the difference in behavior when deleting a non-configurable property from an object in strict mode versus non-strict mode in JavaScript.

## Description

In strict mode (`"use strict";`), if you attempt to delete a property that is not configurable, a `TypeError` is thrown.  This aligns with the ECMAScript specification.

However, in non-strict mode, the same operation fails silently. No error is raised, and the property remains unchanged on the object. This can lead to unexpected behavior and debugging challenges.

## Reproduction Steps

1. Run the `bug.js` file. Observe that no error is thrown, and the object remains unchanged despite attempting to delete and modify the 'age' property.
2. Compare this with the `bugSolution.js` file. The solution uses `Reflect.deleteProperty` which always behaves as expected and handles the error accordingly in non-strict mode.

## Expected Behavior

Regardless of strict mode, there should be a clear indication (either an error or a return value) that deleting the non-configurable property failed.

## Solution

The `bugSolution.js` file demonstrates a workaround using `Reflect.deleteProperty` which provides a boolean value indicating if the property was successfully deleted. By using a try/catch and check `Reflect.deleteProperty` return value, the provided solution allows us to handle the error (or lack thereof) consistently in both strict and non-strict modes.