# W03


## Reading
### [THIS](https://javascript.info/object-methods)
> The value of this is evaluated during the run-time, depending on the context
**Arrow function shave no "this"**
* Arrow functions do not really have their own scope, bindings, this, super etc
    * If called, it will go to the function/scope higher than the function itself.

### Ninja: Chp 5 Objects
> Everything in JavaScript is either one of the six primitive data types we met in
Chapter 2 (strings, numbers, booleans, symbols, undefined, and null) or an object
> All objects are mutable at any time when a program is running. This means that
its properties and methods can be changed or removed, and new properties and
methods can be added to the object, even if it was declared using const.

```javascript
// Shorthand Object assignment
// Works if property key and variables assigned in same scope are the same
const name = 'Iron Man';
const realName = 'Tony Stark';
// long way
const ironMan = { name: name, realName: realName };
// short ES6 way
const ironMan = { name, realName };
```
TODO Look into shorthand true/false logic handlers
```javascript
// From W03 Team Activity
let oldestYoungest = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
```
TODO Destructuring
TODO Looping through nested objects

**Use named parameters when you want optional parameters**
Ex. 
```javascript
function greet({greeting='Hello',name,age=18}) {
return `${greeting}! My name is ${name} and I am ${age}
➥ years old.`;
}

greet({ name: 'Lisa', age: 8 });
<< 'Hello! My name is Lisa and I am 8 years old.'
```

> The keyword this refers to the object that it is within. It can be used inside
methods to gain access to the object’s properties.

TODO REGEX 

#### Summary
* Objects are a collection of key-value pairs placed inside curly braces {}.
* Objects have properties that can be any JavaScript value. If it’s a function, it’s
known as a method.
* An object’s properties and methods can be accessed using either dot notation or square bracket notation
* Objects are mutable, which means their properties and methods can be
changed or removed.
* Objects can be used as parameters to functions, which allows arguments to be
entered in any order, or omitted.
* Nested objects can be created by placing objects inside objects.
* JSON is a portable data format that uses JavaScript object literals to exchange
information.
* The Math object gives access to a number of mathematical constants.
* The Math object can be used to perform mathematical calculations.
* The Date object can be used to create date objects.
* Once you’ve created a Date object, you can use the getter methods to access
information about that date.
* Once you’ve created a Date object, setter methods can be used to change
information about that date.
* The Regex object can be used to create regular expressions.


### DOM/Events
* The Document Object Model is a way of representing a page of HTML as a tree
of nodes.
* The document.getElementById(), document.getElementsByClassName(),
document.getElementsByTagNames() and document.querySelector() can be
used to access elements on a page.
* The parentNode(), previousSibling(), nextSibling(), childNodes() and
children() methods can be used to navigate around the DOM tree.
* An element’s attributes can be accessed using the getAttribute() method,
and updated using the setAttribute() method.
* The createElement() and createTextNode() methods can be used to create
dynamic markup on the fly.
* Markup can be added to the page using the appendChild() and
insertBefore() methods.
* Elements can be replaced using the replaceChild() method, and removed
using the removeChild() method.
* The innerHTML property can be used to insert raw HTML directly into the
DOM.
* The CSS properties of an element can be changed by accessing the style
property.


* Events occur when a user interacts with a web page.
* An event listener is attached to an element, then invokes a callback function
when the event occurs.
* The event object is passed to the callback function as an argument, and
contains lots of properties and methods relating to the event.
* There are many types of event, including mouse events, keyboard events, and
touch events.
* You can remove an event using the removeEventListener method.
* The default behavior of elements can be prevented using the
preventDefault() function.
* Event propagation is the order the events fire on each element.
* Event delegation is when an event listener is added to a parent element to
capture events that happen to its children elements.



## Team Activity
(See team activity files)

## Portfolio Project Idea
Using [Agro API](https://agromonitoring.com/) to build a dashboard for my farm/rancher in-laws?

Takes advantage of satelite imagery to show:
* [NDVI](https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index#:~:text=The%20normalized%20difference%20vegetation%20index,observed%20contains%20live%20green%20vegetation.)
    * "NDVI (Normalized Difference Vegetation Index), EVI (Enhanced Vegetation Index) are the most common indicators for assessing vegetation progress over time"
* [EVI](https://en.wikipedia.org/wiki/Enhanced_vegetation_index)
* Current Weather
* Forecase
* Accumlated Temp and Precipitation
* Soil Temp and Moisture
* Wind Speed
* Etc.