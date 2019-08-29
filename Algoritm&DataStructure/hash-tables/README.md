# Hash Tables - в js это object

![Alt text](./images/hash-tables1.png?raw=true "Title")


md5 Hash Generator // hello => 5d41402abc4b2a76b9719d911017c592



![Alt text](./images/hash-tables2.png?raw=true "Title")

```javascript
let user = {
    name: "llll",
    age: 25,
    run(){
        console.log('12345')
    }
}
user.age // 25 => O(1)
user.name = 'yyy' //  => O(1)
user.run() // '12345' => O(1)

const a  = Map() 
const b  = Sets() // еще 2 типа hashtable в js
``` 


## collision

![Alt text](./images/hash-tables3.png?raw=true "Title")

![Alt text](./images/hash-tables4.png?raw=true "Title")

когда мы имеем колизию то теоретически time complexity O(n/k)

```javascript

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    let address = this._hash(key)
    if (!this.data[address]) {
    this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key){
      let address = this._hash(key)
      const currentBucket = this.data[address]
      if(currentBucket.length){
          for(let i = 0; i < currentBucket.length; i++){
              if(currentBucket[i][0] === key){
                  return currentBucket[i][1]
              }
          }
      }
      return undefined
  } // if no colision O(1), bad example O(n)

   key(){
      let keysArr = [];
      for(let i = 0; i < this.data.length; i++){
          if(this.data[i]){
             for(let j = 0; j < this.data[i].length; j++){
                 keysArr.push(this.data[i][j][0])
             }
          }
      }
      return keysArr;
    } // O(n^2)

//   keys(){
//     const keysArray = [];
//     console.log(this.data.length);
//     for (let i = 0; i < this.data.length; i++){
//       if(this.data[i]){
//         keysArray.push(this.data[i][0][0])
//       }
//     }
//     return keysArray;
//   }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes2', 10000)
myHashTable.set('www', 10000)
myHashTable.get('grapes')
myHashTable.keys()
// myHashTable.set('apples', 9)
// myHashTable.get('apples')

```


![Alt text](./images/hash-tables5.png?raw=true "Title")


у hashtables нету сортировки

## exicises

```javascript
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  for(let i=0; i< input.length; i++){
    console.log('* - '+input[i])
    for(let j=i+1; j< input.length; j++){
      if(input[i] === input[j]){
        return input[i]
      }
    }
  }
    return undefined
} //O(n^2) -space complexity
// O(1) -space complexity

firstRecurringCharacter([2,5,1,9,3,5,1,2,4])



function firstRecurringCharacter2(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]] !== undefined) {
      return input[i]
    } else {
      obj[input[i]] = i;
    }
  }
  return undefined
}//O(n) -space complexity
// O(n) -space complexity

firstRecurringCharacter2([1,2,3,3,5,6,6]) 
//{ 1: 0 } => { 1: 0, 2: 1 } => { 1: 0, 2: 1, 3: 2 }
```

## exicises

```javascript
function containsCommonItem(arr1, arr2){
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j< arr2.length; j++){
            if(arr1[i] === arr[j]){
                return true;
            }
        }
    }
    return false
}
containsCommonItem([1,2,3,4], [6, 7, 2]) // => true


function containsCommonItem2(arr1, arr2){
    for(let i=0; i< arr1.length; i++){
        if(!map[array1[i]]){

        }
    }
}
containsCommonItem2([1,2,3,4], [6, 7, 2])
```