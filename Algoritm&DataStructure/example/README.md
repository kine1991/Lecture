# Example

## reverse string

### solution 1
```javascript
function reverse(str) {
  return str.split('').reverse().join('');
}
reverse('abc')
```

### solution 2
```javascript
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}
reverse('abc')
```

### solution 3
```javascript
function reverse(str) {
  return str.split('').reduce((acc, cur) => {
    return cur + acc
  }, '')
}
reverse('abc')
```

## palindrome (abba => true), asse => false

### solution 1
```javascript
function palindrome(str) {
  let reverced = str.split('').reverse().join('');
  return str === reverced;
}

palindrome('abccba')
```

### solution 2
```javascript
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

palindrome('abccba')
```

## Reverse Int

### solution 1
```javascript
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}
reverseInt(560) //560 => 65
```

## Max Char

### solution 1
```javascript
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (char of str) {
    if(charMap[char]){
      charMap[char]++
    } else {
      charMap[char] = 1;
    }
  }

  for (char in charMap) {
      console.log(char);
      if (charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
      }
  }
  
  return maxChar;
}
maxChar('babccccccddddddd'); // => d
```

## fizzbuzz

### solution 1
```javascript
// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15)
```


## chunk

### solution 1
```javascript
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1]; // if exist --> [Array(n)], if do not exist --> undefined

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

return chunked;
}
chunk([1, 2, 3, 4, 5], 2) // --> [[ 1, 2], [3, 4], [5]]
```

### solution 2
```javascript
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length){
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  

  return chunked;
}
chunk([1, 2, 3, 4, 5], 2)
```

## Anagrams

### solution 1
```javascript
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB); // 'rail safety' === 'rail safety'
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}


anagrams('rail safety!@@@ ^', 'fairy tales')
```

### solution 2
```javascript
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  if(Object.keys(aCharMap).length !== Object.keys(aCharMap).length){
    return false;
  } // Object.keys(aCharMap) -> ["r", "a", "i", "l", "s", "f", "e", "t", "y"]

  for (let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap; // {r: 1, a: 2, i: 1, l: 1, s: 1, …}
}

anagrams('rail safety!@@@ ^', 'fairy tales');
```

## Capittalization sentence

### solution 1
```javascript
// a short sentence -> A Short Sentence
function capitalize(str) {
  const words = [];

  for(word of str.split(' ')){
    words.push(word.slice(0, 1).toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

capitalize('a short sentence');
```

### solution 2
```javascript
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

capitalize('a short sentence');
```


## Steps

### solution 1
```javascript
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for(let column = 0; column < n; column++){
      if(column <= row){
        stair = stair + '#';
      } else {
        stair = stair + ' ';
      }
    }
    console.log(stair);
  }
}
steps(5)
```

### solution 2
```javascript
function steps(n, row = 0, stair = '') {
  debugger;
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}
steps(5)
```