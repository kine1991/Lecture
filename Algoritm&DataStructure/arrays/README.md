#Arrays


![Alt text](./images/arrays1.png?raw=true "Title")

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


```javascript
    const strings= ['a', 'b', 'c', 'd']; // => 4*4 = 16byte of storage
    const numbers = [1,2,3,4,5];
    strings.push('e');  //[ 'a', 'b', 'c', 'd', 'e' ] => O(1) 
    strings.pop(); // [ 'a', 'b', 'c', 'd' ] => O(1)
    strings.pop(); // [ 'a', 'b', 'c'] => O(1)
    strings.unshift('x') // [ 'x', 'a', 'b', 'c' ] => O(n)
    strings.splice(2, 0, 'alien'); // [ 'x', 'a', 'alien', 'b', 'c' ] => O(n)
```

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++; 
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);
```

## reverse string

```javascript
    function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
    }

    function reverse2(str){
    //check for valid input
    console.log(str.split('').reverse().join())
    return str.split('').reverse().join('');
    }

    const reverse3 = str => [...str].reverse().join('');
    // const reverse3 = str => {
    // console.log([...str]) // [ 'T', 'i', 'm', 'b', 'i', 't', 's', ' ', 'H', 'i' ]
    // return [...str].reverse().join('');
    // }

    reverse('Tim')
    reverse2('Timbits Hi')
    reverse3('Timbits Hi')
```


```javascript
// [0,3,4,31], [3,4,6,30] => [ 0, 3, 3, 4, 4, 6, 30, 31 ]
function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1 
  let j = 1

  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item {
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   } else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}


mergeSortedArrays([0,3,4,31], [3,4,6,30]);
```

##execises
```javascript
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    let i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            const _null = nums.splice(i, 1)
            nums.push(..._null)
        }
    }
    return nums
};

moveZeroes([0,1,0,3,12])
```

##execises
```javascript
// написать ф-ию которая принимает стороку возвращает число кажддого символа
function countChar(str){
  const result = {}
  for(let i=0; i < str.length; i++){
    const char = str[i]
    if(result[char]){
      result[char] = result[char] + 1
    } else {
      result[char] = 1
    }

  }
  return result
}

// countChar('aaa') // => {aaa: 4}
countChar('Hello hi') // => {H: 1, e: 1, l: 2, o: 1, h: 1, i: 1}


```



##execises
```javascript
// функция которыя возвращает true если [A-Z a-z 0-9]
function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};
```

##execises
```javascript
// функция которыя возвращает true если [A-Z a-z 0-9]
function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};
```

##execises
```javascript
// содержит ли массив одинаковые числа
// Contains Duplicate Input: [1,2,3,1] Output: true Example 2: Input: [1,2,3,4] Output: false Example 3: Input: [1,1,1,3,3,4,3,2,4,2] Output: true

// #2
function containsDuplicate(nums) {
  const obj = {}
  for(let i=0; i<nums.length; i++){
    let value = nums[i]
    if(obj[value]){
      return true
    }
    obj[value] = 'something'
    console.log(value)

  }
  return false
};

containsDuplicate([1,2,3,3])

// #2
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[j] == nums[i]) return true;  
        }
    }
    return false;
}

containsDuplicate([1,2,3,3])
```


##execises
```javascript
// same([1,2,3,2], [9,1,4,4]) => true содержит ли массив такойже в квадрате
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
//  ** возвести в степень
    for(let i = 0; i < arr1.length; i++){
      console.log(arr1[i]**2);
        let correctIndex = arr2.indexOf(arr1[i] ** 2) 
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4]) // O(n^2)

```



##execises
```javascript
// Refactor
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1      
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
            console.log(key)

        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [1, 4, 9, 4, 254])
```


##execises
```javascript
// 'anagrams', 'nagaramm' => true одинаковое количество каждого из символов
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
```


##execises
```javascript
// [-4,-3,-2,-1,0,1,2,5] возвращает два числа массива если их сумма = 0, иначе undefined
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])
```

##execises
<!-- Refactories -->
```javascript
// [-4,-3,-2,-1,0,1,2,5] возвращает два числа массива если их сумма = 0, иначе undefined
function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if(sum > 0){
      right--
    } else {
      left--
    }
  }
}


sumZero([-4,-3,-2,-1,0,1,2,5]) //O(n)
```



##execises
```javascript
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])

```