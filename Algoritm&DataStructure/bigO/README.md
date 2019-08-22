


![Alt text](./images/bigO1.png?raw=true "Title")


![Alt text](./images/bigO2.png?raw=true "Title")




![Alt text](./images/bigO3.png?raw=true "Title")


![Alt text](./images/bigO4.png?raw=true "Title")

```javascript
    //#5 Space complexity O(1)
    function boooo(n) {
        for (let i = 0; i < n; i++) {
            console.log('booooo');
        }
    }

    // #6 Space complexity O(n)
    function arrayOfHiNTimes(n) {
        var hiArray = [];
        for (let i = 0; i < n; i++) {
            hiArray[i] = 'hi';
        }
        return hiArray;
    }

    arrayOfHiNTimes(6)
```

![Alt text](./images/timeComplexity.png?raw=true "Title")



#Big O Cheat Sheet:
__-Big OsO(1)__ Constant- no loops
__O(log N)__ Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
__O(n)__ Linear- for loops, while loops through n items
__O(n log(n))__ Log Liniear- usually sorting operations
__O(n^2)__ Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
__O(2^n)__ Exponential- recursive algorithms that solves a problem of size N
__O(n!)__ Factorial- you are adding a loop for every element
__Iterating through half a collection is still O(n)__
__Two separate collections: O(a * b)__

__-What can cause time in a function?-__
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())
__-Rule Book__
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms
__-What causes Space complexity?-__
Variables
Data Structures
Function Call
Allocations  


```javascript
    const box = [0,1,2,3,4,5,6]
    function O1(n){
        console.log(box[n])
    }
    O1(4) 
    // => O(1)
```




##execise

```javascript
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;// => O(1)
  let b = 10;// => O(1)
  let c = 50;// => O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1;// => O(n)
    let y = i + 2;// => O(n)
    let z = i + 3;// => O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;// => O(n)
    let q = j * 2;// => O(n)
  }
  let whoAmI = "I don't know";
}
// => O(5n+3) => O(n)
```


```javascript
    function(x1, x2){
        x1.forEach(x => console.log(x))
        x2.forEach(x => console.log(x))
    }
    // => O(x1 + x2)
```


```javascript
    const boxes = ['a', 'b', 'c', 'd', 'e'];
    function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j])
        }
    }
    }

    logAllPairsOfArray(boxes)  // => O(n)
```


```javascript
    function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
        });
    });
    }

    printAllNumbersThenAllPairSums([1,2,3,4,5])
```



bigOcheatsheet

![Alt text](./images/bigOcheatsheet.png?raw=true "Title")



![Alt text](./images/bigOcheatsheet2.png?raw=true "Title")


##space complexity

__-What causes Space complexity?-__
Adding Variables
Adding Data Structures
Function Call
Allocations  


```javascript
    //#5 Space complexity O(1)
    function boooo(n) {
        for (let i = 0; i < n; i++) {
            console.log('booooo');
        }
    }

    // #6 Space complexity O(n)
    // создаем новый массив создаем переменную
    function arrayOfHiNTimes(n) {
        var hiArray = [];
        for (let i = 0; i < n; i++) {
            hiArray[i] = 'hi';
        }
        return hiArray;
    }

    arrayOfHiNTimes(6)
```

```javascript
const arr = ['1', '2', '3']
```