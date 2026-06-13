##  Exercise 1: Variables and Data Types
This exercise demonstrates how to declare, initialize, and log the 7 primary data types in JavaScript using `typeof`.

### Concepts Covered
* Primitive types: String, Number, Boolean, Undefined, Null.
* Structural types: Object, Array.
* JavaScript quirks (e.g., why `typeof null` outputs `"object"`).


##  Exercise 2: Age and Birth Year Calculator
This program prompts the user for their name and age, dynamically retrieves the current calendar year, and calculates their approximate year of birth.

###  Important Environment Note
JavaScript runs in two primary environments, each with different capabilities:
1. **Web Browsers (Frontend):** Supports visual window objects like `prompt()` and `alert()`.
2. **Node.js (Backend/Terminal):** Does not support window objects. Running browser-native code here throws a `ReferenceError: prompt is not defined`.

To accommodate both, this exercise is split into two versions:

### Option A: Web Browser Version (`exercise2.js`)
Uses interactive popup dialogs.
* **How to Run:** 
  1. Open the `index.html` file in any modern web browser (or use VS Code Live Server).
  2. Follow the on-screen pop-up prompt windows.


##  Exercise 3: Conditional Logic (Number Sign Checker)
This exercise demonstrates control flow using `if`, `else if`, and `else` statements. The script evaluates a variable `number` and logs whether it is positive, negative, or zero.

### Concepts Covered
* Conditional branching logic.
* Comparison operators (`>`, `<`).

