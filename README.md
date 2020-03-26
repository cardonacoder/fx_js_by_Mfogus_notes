# [Functional JavaScript: Introducing Functional Programming with Underscore.js][fxJS] // Notes by cardonacoder

:link: [github repo of the book][gitBook] :link:

[Underscore JS][UnderscoreJS] ► Is a JS lib :book: supporting **Fx** programming. :computer:

## Some Fx :straight_ruler: rules

- Avoid :-1: assigning variables more than once
- No :no_entry_sign: use ```eval```
- Don't mod core obj like ```Array``` & ```Function```
- Favor :+1: **Fx** over methods

## D case 4 JS - Page 2 :notebook: Notes

- JS is built on a solid foundation of language primitives
- JS **Fx** have an ```apply``` method that allows U 2 call :phone: D **Fx** with an array as if the array elements where D arguments 2 D **Fx** itself
- Any **Fx** may be :phone called with any :hash: of arguments of any type, at any time :clock10:
- Every JS **Fx** can access a local value named ```arguments``` that is an array-like structure holding the values that the **Fx** was called with.

## Getting Started with :computer: FP

**FP** is D use of **Fx** that transform values into units of abstraction, subsequently used 2 build software systems.

```JavaScript
Value -> FP -> Abstraction unit
```

## Why FP Matters

- A strict **FB** approach to solving problems also breaks a problem into parts (called **Fx**).

- Larger **Fx** R formed by “gluing” or “composing” other **Fx** together 2 build :house: high-level behaviors.

- Funtional parts R formed into a system by taking and gradually transforming if. ( Via a _primitive_ or a composed Fx )

- A **Fx** system strives 2 minimize observable state modification.
- Adding new features 2 a system built using functional principles is a
matter of understanding how new **Fx** can operate within D context of localized, nondestructive (i.e., original data is never changed) data transformations.

- **FP** is about reducing D occurrences of mutation 2 D smallest area possible 4 any given system

---

_A nice image of a system built along functional principles is an
assembly-line device that takes raw materials in one end, and gradually builds a product that comes out the other end_

---

## Functions as Units of Abstraction p.8

A better approach 2 “abstract” the notion of errors:

```JavaScript

function fail(thing) {
    throw new Error(thing);
}

function warn(thing) {
    console.log(["WARNING:", thing].join(' '));
}

function note(thing) {
    console.log(["NOTE:", thing].join(' '));
}

```

[index.js][indexjs-anchor]

[fxJS]: https://www.amazon.com/Functional-JavaScript-Introducing-Programming-Underscore-js-ebook/dp/B00D624AQO
[gitBook]: https://github.com/funjs/book-source
[UnderscoreJS]: https://underscorejs.org/
[indexjs-anchor]: ./index.js
