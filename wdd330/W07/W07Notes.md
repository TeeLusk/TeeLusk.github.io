# W07

## Team Activity
- [ ] MVC For Hiking app
* Need to better understand OOP in JS

## Readings

### Ninja Chp11: Further Functions
* Functions have built-in properties such as length, but can have custom
properties added.
* All functions have call() and apply() methods that can invoke a function with the value of this bound to an object that is provided as an argument.
* Immediately Invoked Function Expressions or IIFEs are functions that are enclosed in parentheses and followed by double parentheses so they’re invoked. They are useful for namespacing variables and setting default values.
* Functions are able to dynamically redefine themselves in the body of the
function, depending on certain conditions.
* A recursive function will keep invoking itself until a certain condition is met.
* A callback is a function that’s provided as an argument to another function.
* Callbacks are frequently used in asynchronous programming as part of the event loop. This means that a program can continue to run in a single thread while waiting for another task to be completed.
* Promises can be used instead of callbacks to deal with multiple asynchronous actions in sequence. They also provide a nicer mechanism for handling errors.
* Functions that return other functions are known as higher-order functions.
* A closure is the process of keeping a reference to a variable available outsidethe scope of the function it was originally defined in.
* A generator is created by placing an asterisk (*) after the function keyword.
* A generator function will return an iterator object that provides a next() method, which returns the next value in a sequence that is defined in the generator function.
* Functional programming involves breaking processes down into steps that can be applied as a series of functions.
* Pure functions are functions that don’t rely on the state of the code they are called from, have no side-effects, and always give the same result when given the same arguments (referential transparency).
* Currying or partial application is the process of applying one argument at a time to a function. A new function is returned until all the arguments have been used.

**Need to study Promises& Async/Await**

### Ninja Chp 13: AJAX
* Ajax is a technique for sending and receiving data asynchronously in the background.
* The data can be sent in many forms, but it is usually in JSON.
* Ajax can be used for making partial page updates without having to do a full page reload.
* Ajax can be used for communicating with external APIs.
* Ajax requests can be made using the Fetch API.
* The Response interface allows you to control the response received from a request or to create your own response objects.
* The Request interface allows you to create a request object that contains information about the request being made, such as the URL and headers.
* The Headers interface allows you to create HTTP headers that can be added to a request or response object.
* Requests can retrieve data using a GET request, or send data using a POST request.
* The FormData interface makes it easier to send data from forms

## AgroAPI
Not much progress this week. Biggest things to figure out are:
1. How to optimize requests for imgs/details so I'm not sending too many request, esp geting outside of rate limit
2. How to make it more interactive, with #1 in mind