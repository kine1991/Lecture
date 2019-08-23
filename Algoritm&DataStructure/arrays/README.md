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


```javascript

```