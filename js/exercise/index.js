
// let a = 'Variable a'
// let b = 'Variable b'
// {
//   a = 'New Variable A'
//   let b = 'Local Variable B'
//   console.log('Scope A', a)
//   console.log('Scope B', b)
//   // console.log('Scope C', c)
//   // let c = 'Something'
// }
// console.log('A:', a)
// console.log('B:', b)



// Closures

// function sayHelloTo(name) {
//   const message = 'Hello ' + name

//   return function() {
//     console.log(message)
//   }
// }

// const helloToElena = sayHelloTo('Elena')
// const helloToIgor = sayHelloTo('Igor')
// console.log(helloToElena)
// helloToElena()
// helloToIgor()

// ------------------------
// ------------------------

// function createFrameworkManager() {
//     const fw = ['Angular', 'React']
  
//     return {
//       print: function() {
//         console.log(fw.join(' '))
//       },
//       add: function(framework) {
//         fw.push(framework)
//       }
//     }
//   } 

//   const manager = createFrameworkManager();

// console.log(manager)
// manager.print()
// manager.add('Vue')
// manager.print()

// ------------------------

// const fib = [1, 2, 3, 5, 8, 13]

// for (var i = 0; i < fib.length; i++) {
//   (function(j) {
//     setTimeout(function () {
//       console.log(`fib[${j}] = ${fib[j]}`)
//     }, 1500)
//   })(i)
// }

// ------------------------

// function name1(n1){
//     return function(n2){
//         return function(n3){
//             console.log(n1, n2, n3)
//         }
//     }
// }
// name1('1@')('Oo2@')('Zzzz3~@')

// const name = name1 => name2 => name3 => console.log(name1, name2, name3)

// name('1')('Oo2')('Zzzz3')

// ------------------------

// Immediate Invoked Function Expression
// let result = []
// // for (var i = 0; i < 5; i++) {
// //   result.push( function() {
// //     console.log(i)
// //   } )
// // }
// //
// // result[2]()
// // result[4]()

// for (var i = 0; i < 5; i++) {
//   (function() {
//     var j = i
//     result.push( function() { console.log(j) } )
//   })()
// }

// result[2]()
// result[4]()

// console.log(result())

// ------------------------
// const p = {
//     name
// }


// ------------------------
// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }

// const john = { surname: 'Сноу' }
// //
// person.knows('все', 'Бран')
// person.knows.call(john, 'ничего не', 'Джон')
// person.knows.apply(john, ['ничего не', 'Джон'])
// person.knows.call(john, ...['ничего не', 'Джон'])
// const bound = person.knows.bind(john, 'ничего не', 'Джон')
// bound()

// ========
  
// function Person(name, age) {
//   this.name = name
//   this.age = age

//   console.log(this)
// }

// const elena = new Person('Elena', 20)

// ======== Явный
// function logThis() {
//   console.log(this)
// }
// //
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
//
// ===== Неявный
// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this)
//   }
// }


// // animal.logThis()
  
//   function Cat(color) {
//     this.color = color
//     console.log('This', this)
//     // ;( () => console.log('Arrow this', this) )()
//   }
  
//   new Cat('red')
// ------------------------

function Cat(color, name) {
    this.color = color
    this.name = name
}

// const cat = new Cat('black', 'KOT')
// console.log(cat)

// function myNew(constructor, ...args) {
//   const obj = {}
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }
//
// const cat = myNew(Cat, 'black', 'KOT')
// console.log(cat)
  
  const cat = new Cat()
  console.log(cat)
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------