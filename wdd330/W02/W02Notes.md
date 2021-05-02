# W02

## Novice to Ninja Chp 2-4
> Pay special attention to the secions on:
> *  variables
> * scope 
> * converting/parsing
> * template literals
> * array methods
> * concept of callbacks


Best practice to use new lines AND semicolons with each JS statement, even through ASI will automatically interpret and insert semicolons
* Comp w/Linters



## Code Sandbox

## Eloquent JS Chp 2-4
### Chapter 3 Exercises
``` javascript
// Eloquent JS Practices

// 3.1 Minimum
// Your code here.
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// 3.2 Recursion
// Your code here.
function isEven(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-4));
// → ??


// 3.3 Bean Counting
// Your code here.
function countBs (string) {
    upper = string.toUpperCase();
    let count = 0;

    for (let i = 0; i < upper.length; i++) {
        if (upper[i] == 'B') {
            count += 1;
        }   
    }
    return count;
}


function countChar(string, char) {
    let lowerString = string.toLowerCase();
    let lowerChar = char.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerString.length; i++) {
        if (lowerString[i] == lowerChar) {
            count += 1;
        }
    }
    return count;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```

### Chapter 4 Exercises
``` javascript
// 4.1 Sum of a Range
// Your code here.
function range(start, end, step = start < end ? 1 : -1) {
    //Didn't realize you could have logic in the parameter
    // See MDN :"Default Paramters"
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// 4.2 Reversing an Array
// Your code here.
function reverseArray (array) {
    let newArr = [];

    for (i = array.length - 1; i >= 0; i-- ) {
        newArr.push(array[i]);
    }

    return newArr;
}



console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
// Maybe this is personal preference but from what I understand it might be more 
//readable/obvious what's going on to assign the new array value to a new variable, 
//rather than replace the same arrayValue. Less ambiguous 
newArrayValue = reverseArray(arrayValue);
console.log(newArrayValue);
// → [5, 4, 3, 2, 1]
```


## Questions
On exercise 4.2 do you think it would be better to have a method that replaces the existing variable, or to assign the new value to a new variable?