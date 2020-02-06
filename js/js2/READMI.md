## Array
* - Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

```javascript

    let arr = [1,2,3,4,5,6]

    undefined
    arr.includes(4,4) //  false  второй индекс откуда начать отчет
    arr.includes(4) //  true 
    false
```


### Slice
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

# DOM

```javascript
const myImg = document.createElement('img');
myImg.src = 'https://www.imf.org/external/19/images/footer/IMF_seal.png';

myImg.style.width = '200px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition: all 2s}');

const allEls = document.body.children;

setInterval(() => {
    for(let el of allEls){
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random());
        const y = Math.floor(document.body.clientHeight * Math.random());
    
        el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    }
},1000);
```

### innerText textContent
```javascript
const h1 = document.querySelector('h1')
const ul = document.querySelector('ul')
const main = document.querySelector('#main')

<p id="main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, magni dolorum sapiente voluptate quia praesentium autem! Veniam delectus, placeat excepturi in porro minima quo laudantium temporibus, aliquid repellendus
similique.
<script>console.log('hello!!!!')</script>
</p>

main.innerText // выведет не форматированный текст
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, magni dolorum sapiente voluptate quia praesentium autem! Veniam delectus, placeat excepturi in porro minima quo laudantium temporibus, aliquid repellendus similique."



main.textContent // выведет форматированный текст (с пробелами отступлениями)
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, magni dolorum sapiente voluptate
    quia
    praesentium autem! Veniam delectus, placeat excepturi in porro minima quo laudantium temporibus, aliquid repellendus
    similique.
    console.log('hello!!!!')
  "


  <p id="main"><b style="display: none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, magni dolorum sapiente voluptate
    quia
    praesentium autem! Veniam delectus, placeat excepturi in porro minima quo laudantium temporibus, aliquid repellendus
    similique.</b>
    <script>console.log('hello!!!!')</script>
  </p>

main.innerText // выведет не форматированный текст
  ""
main.textContent // выведет форматированный текст (с пробелами отступлениями)
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, magni dolorum sapiente voluptate
    quia
    praesentium autem! Veniam delectus, placeat excepturi in porro minima quo laudantium temporibus, aliquid repellendus
    similique.>
    console.log('hello!!!!')
  "
```

### innerHTML
```javascript
const form = document.querySelector('form')
form.innerHTML

"
<input type="text" placeholder="Bear Name">
<input type="password" placeholder="password">
<input type="submit">
"
```

### attribute
```javascript

const range = document.querySelector('input[type="range"]');
range.getAttribute('min') // => 100

<input type="range" min="100" max="500" step="50">

range.setAttribute('min', 400)
range.setAttribute('type', 'radio')
```

### parrent children sibling
```javascript
const firstLI = document.querySelector('li')
firstLI.parentElement // => <ul></ul>
firstLI.parentElement.parentElement // => <body></body>

const ul = document.querySelector('ul')
ul.children

firstLI.nextElementSibling //выведет следующий элемент на том же уровне
const thridLi = firstLI.nextElementSibling.nextElementSibling

```

### change multiple element
```javascript
// Select all LI's on the page:
const allLis = document.querySelectorAll('li');

// One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
}

//Another option using for...of:
for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
}



```

### Manipulating class
```javascript
const todo = document.querySelector('#todos .todo');
todo.getAttribute('class')
todo.setAttribute('class', 'done') 
// setAttribute - rewrite class

todo.classList.add('done')
// todo.classList.remove('todo')
todo.classList.toggle('done')

```

### `create element`
```javascript
const newH2 = document.createElement('h2')
const section = document.querySelector('section')

newH2.innerText = 'fff'
newH2.classList.add('done')

section.appendChild(newH2)
// ---------------

// Make a new empty img element:
const newImg = document.createElement('img');
// Add a src:
newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// Change its width:
newImg.style.width = "300px";

//Add it to the end of the body:
document.body.appendChild(newImg);


// Create a new anchor tag
const newLink = document.createElement('a');
// Set its innerText:
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
// Set its src:
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

// Select the first paragraph:
const firstP = document.querySelector('p');
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);
```

### prepend append insertbefore
```javascript
const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'I AM A NEW LIST ITEM!';

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI) //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll('li.todo')[2] //3rd li with class of 'todo'
// To insert our new LI before targetLI...
// parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);
```

### remove
```javascript
// USING removeChild()
//Select the element you want to remove;
const removeMe = document.querySelector('.special')
//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe)

// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
//Select the H1
const h1 = document.querySelector('h1');
h1.remove(); //REMOVE IT!
```



# event

```javascript

btn.onclick = function(){
	console.log('btn')
}
btn.ondbclick = function(){
	console.log('ondbclick')
}
// если так сделать то будет переопределение
```