// function humanReadable(words) {
//     let sentence = 'dsds';
    
//     // console.log(sentence.concat('ggg'))
//     for(i=0; i++; i<=words.length){
//         sentence = sentence.concat('ggg')
//         // console.log(sentence)
//         // if(i < words.length){
//             // console.log(sentence.concat('ggg'))
//             // sentence = sentence.concat(words[i].concat(', '))
//         // }else{
//         //     sentence.concat(words[i].concat(' и '))
//         // }
//     }
//     console.log(sentence)
//     // return sentence
// }

// // humanReadable(["Python", "JavaScript", "Java"])


// // human_readable( ["Python", "JavaScript", "Java"] ) --> "Python, Javascript и Java"


// humanReadable(['dsd', 'fff', 'rrr'])


// Сгруппируйте одинаковые числа в заданном массиве и отсортируйте группы чисел по количеству их членов. Числа, встречающиеся реже, должны следовать за теми, которые встречаются чаще. Если количество одинаковое, то группы должны быть расположены в порядке появления чисел в массиве.
// Примечание: все числа положительные и целые.  

// Пример: 

// # числа 5 и 2 встречаются по 3 раза в массиве
// # но число 5 появилось в массиве первым
// sort( [5, 5, 1, 1, 2, 3, 2, 5, 2] ) --> [5, 5, 5, 2, 2, 2, 1, 1, 3]

// function sort(numbers) {

// }

// var test = [1, 4, 1, 5, 6, 4];
// test = test.filter(function (elem, pos, arr) {
//     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
// });
// console.log(test);


// [5, 5, 1, 1, 2, 3, 2, 5, 2] ) --> [5, 5, 5, 2, 2, 2, 1, 1, 3]
// function sort(numbers) {
//     const uniqueElem = []
//     for(i=0; i<=numbers.length; i++){
//         if(!uniqueElem.includes(numbers[i])){
//             uniqueElem.push(numbers[i])
//         }
//     }
//     console.log(uniqueElem)

//     numbers.filter(el => )
// }

function sort(array) {
    var i = 0;
    var j = 0;
    var tmp = array[0];

    while (i < array.length) {
      j = 0;
      while (j < array.length) {
        if (array[j] > array[j + 1]) {
          tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
        j++;
      }
      i++;
    }
    console.log(array)
    return array;
  }

sort([5, 5, 1, 1, 2, 3, 2, 5, 2])

// var test = [1, 4, 1, 5, 6, 4];
// test = test.filter(function (elem, pos, arr) {
//     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
// });
// console.log(test);