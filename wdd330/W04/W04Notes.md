# W03

## Reading

### Ninja: Forms, OOP, Modern JS
#### Forms
[(MDN) Events](https://developer.mozilla.org/en-US/docs/Web/Events)

[(MDN) Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

[(MDN) Client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)

**How to use JS to avoid sanitize/filter form input?**

* Forms are the primary method used for entering data into a browser.
* Forms have a variety of controls that are used for entering different types of information.
* HTML5 has a large number of new input types that are beginning to beimplemented in modern browsers.
* document.forms will return an HTML collection of all the forms on a page.
* form.elements will return an HTML collection of all the elements containedwithin a form.
* Forms have focus,blur, andchangeevents that fire as a user interacts withthe form.
* Forms also have a submitevent that can be used to intercept a form before it’s been submitted.
* The information entered into a form can be read or updated using the valueproperty of the form controls.
* The HTML5 form validation API can be used to automatically validate a form,but only at a basic level, so a custom validation script may be required.

[(MDN) Contraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)

#### OOP in JS
* Object-oriented programming (OOP) is a way of programming that uses objectsthat encapsulate their own properties and methods.
* The main concepts of OOP are encapsulation, polymorphism and inheritance.
* Constructor functions can be used to create instances of objects.
* ES6 introduced class declarations that use theclasskeyword. These can beused in place of constructor functions.
* Inside a constructor function or class declaration, the keyword this refers to the object returned by the function.
* All instances of a class or constructor function inherit all the properties and methods of its prototype.
* The prototype is live, so new properties and methods can be added to existing instances.
* The prototype chain is used to find an available method. If an object lacks a method, JavaScript will check whether its prototype has the method. If not, it will check that function’s prototype until it finds the method or reaches the Object constructor function.
* Private properties and methods can be created by defining variables usingconstand defining a function inside a constructor function. These can be made public using getter and setter functions.
* Monkey-patching is the process of adding methods to built-in objects by augmenting their prototypes. This should be done with caution as it can causeunexpected behavior in the way built-in objects work.
* A mixin method can be used to add properties and methods from other objectswithout creating an inheritance chain.
* Methods can be chained together and called in sequence if they return areference tothis.
* Polymorphism allows objects to override shared methods with a more specificimplementation.
* The value of this is not retained inside nested functions, which can cause errors. This can be worked around by using that = this, using the bind(this) method and using arrow functions.
* Methods can be borrowed from other objects.
* Composition over inheritance is a design pattern where objects are composedfrom “building-block” objects, rather than inheriting all their properties andmethods from a parent class

#### Modern JS Dev
* JavaScript libraries provide methods to make common tasks easier to achieve.
* Libraries can make programming much easier, but you should think carefully about whether you require a library, and which one is best for your needs.
* jQuery and Lodash are two popular libraries that provide a large number of useful and well-tested functions.
* npm and Yarn are package managers that can be used to install JavaScript packages, as well as any dependencies that they require.
* A module is a self-contained piece of code that provides functions and methods that can then be used in other files and by other modules.
* ES6 added support for modules, allowing code to be abstracted into their own self-contained files and imported into another file.
* The MVC pattern is used to organize code into distinct sections that are responsible for different elements of an application.
* Template files can be used to separate view code from JavaScript; they also enable dynamic code and programming logic to be used to generate markup.
* React and Vue.js are popular JavaScript view libraries that render components and keep track of their state.
* Minification is the process of removing any redundant characters from the code in order to reduce its file size.
* Files can be compressed on the server using the gzip compression tool.
* Webpack can be used to bundle multiple files into a single bundle, and automate common tasks such as transpiling, minifying code and running tests.
* Before code is deployed, it should be concatenated into a single file, minified and compressed. The script tag should be placed just before the closing body tag to ensure that all elements on the page have loaded before the script runs.