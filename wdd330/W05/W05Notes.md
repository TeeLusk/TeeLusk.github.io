# W05

## Ninja Chp 10: Testing and Debugging
* Comp w/[Hoare Logic/Principle](https://www.wikiwand.com/en/Hoare_logic): "There are two ways to write code: write code so simple there are obviously no bugs in it, or write code so complex that there are no obvious bugs in it."

* Bugs are unavoidable in code, and it’s best to find them early rather than later.
* JavaScript can be put into strict mode using the string "use strict". This can be used in a whole file or just a single function.
* Linting tools can be used to ensure your code follows good practice and conventions.
* Feature detection can check whether a method is supported before calling it, helping to avoid an exception being thrown.
* The console and browser’s built-in debugging tool can be used to interactively find and fix bugs in code.
* Exceptions can be thrown using the throw statement.
* An error object is created when an exception occurs.
* Any code placed inside a try block will pass any error objects to a catch block when an exception occurs. Any code inside a finally block will run if an exception does or does not occur.
* Test-driven development is the practice of writing tests that fail, then writing the code that passes the test, then refactoring the code every time a new feature is implemented.
* The [Jest](https://jestjs.io/) framework can be used to test your code.


## Eloquent JavasScript Chp 8 Sanbox: Bugs and Errors
### 8.1 Retry
```javascript
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
```

### 8.2 The locked box
```javascript
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
let locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
```

