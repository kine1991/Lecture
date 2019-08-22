#Object and array

object_and_array1


##Object

![Alt text](./images/object_and_array1.png?raw=true "Title")


```javascript
    // Big O of Objects
    // Insertion -   O(1)
    // Removal -   O(1)
    // Searching -   O(N)
    // Access -   O(1)
    // When you don't need any ordering, objects are an excellent choice!
```

```javascript
    // Big O of Object Methods
    Object.keys -   O(N)
    Object.values -   O(N)
    Object.entries -   O(N)
    hasOwnProperty -   O(1)
```

```javascript
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
Object.keys(instructor) // => (3) ["firstName", "isInstructor", "favoriteNumbers"]  => O(n)

Object.entries(instructor) // => O(n)
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["firstName", "Kelly"]
// 1: (2) ["isInstructor", true]
// 2: (2) ["favoriteNumbers", Array(4)]

Object.values(instructor) // => O(n)
// (3) ["Kelly", true, Array(4)]
// 0: "Kelly"
// 1: true
// 2: (4) [1, 2, 3, 4]

instructor.hasOwnProperty("firstName") // true => O(n)
```

## Array
* - Big O of Arrays
* - Insertion -   It depends.... если в конце то - O(1), если в начале то O(n) придеться менять индексы
* - Removal -   It depends....
* - Searching -   O(N)
* - Access -   O(1)


Big O of Array Operations
* push -   O(1)
* pop -   O(1)
* shift -   O(N)
* unshift -   O(N)
* concat -   O(N)
* slice -   O(N)
* splice -   O(N)
* sort -   O(N * log N)
* forEach/map/filter/reduce/etc. -   O(N)